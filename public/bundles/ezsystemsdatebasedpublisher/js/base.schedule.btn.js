(function(global, doc, eZ) {
    const LOCALSTORAGE_POST_REFRESH_NOTIFICATION_KEY = 'ez-dateBasedPublisher-scheduling-post-refresh-notification';
    const token = doc.querySelector('meta[name="CSRF-Token"]').content;
    const siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;

    class BaseScheduleBtn {
        constructor(btn, schedulingModal) {
            this.btn = btn;
            this.schedulingModal = schedulingModal;

            this.updateActionBtnDisabledState = this.updateActionBtnDisabledState.bind(this);
            this.makeBulkRequest = this.makeBulkRequest.bind(this);
            this.processBulkResponse = this.processBulkResponse.bind(this);
        }

        init() {
            this.btn.addEventListener('click', () => {
                this.prepareModal();
            });

            const { checkboxSelector } = this.btn.dataset;

            doc.querySelectorAll(checkboxSelector).forEach((checkbox) => {
                checkbox.addEventListener('change', this.updateActionBtnDisabledState);
            });

            this.updateActionBtnDisabledState();
            this.showPostRefreshNotification();
        }

        getSelectedItems() {
            const { checkboxSelector } = this.btn.dataset;
            const selectedCheckboxes = [...doc.querySelectorAll(`${checkboxSelector}:checked`)];
            const selectedItemsData = selectedCheckboxes.map((checkbox) => JSON.parse(checkbox.closest('.ez-table__row').dataset.itemData));

            return selectedItemsData;
        }

        prepareModal() {
            const { modalTitle, modalTableTitle } = this.btn.dataset;
            const selectedItems = this.getSelectedItems();

            this.schedulingModal.setModalTitle(modalTitle);
            this.schedulingModal.setModalTableTitle(modalTableTitle);
            this.schedulingModal.setModalTableBody(selectedItems);
            this.schedulingModal.setConfirmBtnClickHandler(this.makeBulkRequest);
            this.schedulingModal.setDiscardBtnClickHandler(this.makeBulkRequest);
        }

        updateActionBtnDisabledState() {
            const { checkboxSelector } = this.btn.dataset;

            this.btn.disabled = !doc.querySelectorAll(`${checkboxSelector}:checked`).length;
        }

        showPostRefreshNotification() {
            const notificationData = localStorage.getItem(LOCALSTORAGE_POST_REFRESH_NOTIFICATION_KEY);

            if (notificationData) {
                const { isError, message } = JSON.parse(notificationData);

                if (isError) {
                    eZ.helpers.notification.showErrorNotification(message);
                } else {
                    eZ.helpers.notification.showSuccessNotification(message);
                }

                localStorage.removeItem(LOCALSTORAGE_POST_REFRESH_NOTIFICATION_KEY);
            }
        }

        setPostRefreshNotification(notificationData) {
            localStorage.setItem(LOCALSTORAGE_POST_REFRESH_NOTIFICATION_KEY, JSON.stringify(notificationData));
        }

        getBulkRequestOperation(contentId, version, selectedDate) {
            throw new Error('getBulkRequestOperation should be defined in a subclass');
        }

        getFailNotificationMessage(failedCount, successCount) {
            throw new Error('getFailNotificationMessage should be defined in a subclass');
        }

        getSuccessNotificationMessage() {
            throw new Error('getSuccessNotificationMessage should be defined in a subclass');
        }

        getErrorNotificationMessage() {
            throw new Error('getErrorNotificationMessage should be defined in a subclass');
        }

        processBulkResponse(response) {
            const { operations } = response.BulkOperationResponse;
            const failedCount = Object.values(operations).filter((response) => response.statusCode < 200 && response.statusCode > 299)
                .length;
            const successCount = operations.length - failedCount;
            const isError = !!failedCount;
            const notificationData = {
                isError,
                message: isError ? this.getFailNotificationMessage(failedCount, successCount) : this.getSuccessNotificationMessage(),
            };

            this.setPostRefreshNotification(notificationData);
            global.location.reload(true);
        }

        makeBulkRequest() {
            this.schedulingModal.setLoadingState();

            const selectedItems = this.getSelectedItems();
            const selectedDate = this.schedulingModal.getSelectedDate();
            const selectedTimestamp = selectedDate ? Math.floor(selectedDate.valueOf() / 1000) : null;
            const requestBodyOperations = selectedItems.map(({ contentId, version }) =>
                this.getBulkRequestOperation(contentId, version, selectedTimestamp)
            );
            const request = new Request('/api/ezp/v2/bulk', {
                method: 'POST',
                headers: {
                    Accept: 'application/vnd.ez.api.BulkOperationResponse+json',
                    'Content-Type': 'application/vnd.ez.api.BulkOperation+json',
                    'X-Siteaccess': siteaccess,
                    'X-CSRF-Token': token,
                },
                body: JSON.stringify({
                    bulkOperations: {
                        operations: requestBodyOperations,
                    },
                }),
                mode: 'same-origin',
                credentials: 'same-origin',
            });

            fetch(request)
                .then(eZ.helpers.request.getJsonFromResponse)
                .then(this.processBulkResponse)
                .catch(() => {
                    this.setPostRefreshNotification({
                        isError: true,
                        message: this.getErrorNotificationMessage(),
                    });
                    global.location.reload(true);
                });
        }
    }

    eZ.addConfig('dateBasedPublisher.scheduling.BaseScheduleBtn', BaseScheduleBtn);
})(window, window.document, window.eZ);
