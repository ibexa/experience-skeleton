(function(global, doc, eZ) {
    class UnscheduleBtn extends eZ.dateBasedPublisher.scheduling.BaseScheduleBtn {
        getBulkRequestOperation(contentId, version) {
            return {
                uri: `api/datebasedpublisher/v1/content/objects/${contentId}/versions/${version}`,
                method: 'DELETE',
            };
        }

        getFailNotificationMessage(failedCount, successCount) {
            return Translator.trans(
                /*@Desc("%failedCount% out of %totalCount% selected publication dates could not be removed. Please try again.")*/ 'unschedule.fail.message',
                {
                    failedCount,
                    totalCount: failedCount + successCount,
                },
                'ezplatform_date_based_publisher'
            );
        }

        getSuccessNotificationMessage() {
            return Translator.trans(
                /*@Desc("Removed all selected publication dates.")*/ 'unschedule.success.message',
                {},
                'ezplatform_date_based_publisher'
            );
        }

        getErrorNotificationMessage() {
            return Translator.trans(
                /*@Desc("An error occurred while removing the selected publication dates. Please try again.")*/ 'unschedule.error.message',
                {},
                'ezplatform_date_based_publisher'
            );
        }

        prepareModal() {
            super.prepareModal();

            this.schedulingModal.toggleConfirmBtn(false);
            this.schedulingModal.togglePublicationDateInput(false);
            this.schedulingModal.toggleDiscardBtn(true);
        }
    }

    eZ.addConfig('dateBasedPublisher.scheduling.UnscheduleBtn', UnscheduleBtn);
})(window, window.document, window.eZ);
