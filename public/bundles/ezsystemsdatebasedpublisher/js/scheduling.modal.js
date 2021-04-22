(function(global, doc, eZ, $, flatpickr) {
    const { convertDateToTimezone } = eZ.helpers.timezone;

    class SchedulingModal {
        constructor(modal) {
            this.modal = modal;
            this.flatpickrInput = this.modal.querySelector('.flatpickr-date-input');
            this.confirmBtn = this.modal.querySelector('.ez-btn--confirm');
            this.discardBtn = this.modal.querySelector('.ez-btn--discard');

            this.selectedDate = null;
            this.confirmBtnClickHandler = null;
            this.discardBtnClickHandler = null;

            this.handleConfirmBtnClick = this.handleConfirmBtnClick.bind(this);
            this.handleDiscardBtnClick = this.handleDiscardBtnClick.bind(this);
            this.updatePublicationDateValue = this.updatePublicationDateValue.bind(this);
        }

        init() {
            const flatpickrInstance = flatpickr(this.flatpickrInput, {
                enableTime: true,
                time_24hr: true,
                formatDate: (date) => eZ.helpers.timezone.formatFullDateTime(date, null),
                minDate: Date.now(),
                onChange: this.updatePublicationDateValue,
                static: true,
            });

            $(this.modal).on('hidden.bs.modal', () => {
                flatpickrInstance.clear();
            });

            this.confirmBtn.addEventListener('click', this.handleConfirmBtnClick);
            this.discardBtn.addEventListener('click', this.handleDiscardBtnClick);
        }

        handleConfirmBtnClick() {
            if (typeof this.confirmBtnClickHandler === 'function') {
                this.confirmBtnClickHandler();
            }
        }

        handleDiscardBtnClick() {
            if (typeof this.discardBtnClickHandler === 'function') {
                this.discardBtnClickHandler();
            }
        }

        getSelectedDate() {
            return this.selectedDate;
        }

        setConfirmBtnClickHandler(handlerFn) {
            this.confirmBtnClickHandler = handlerFn;
        }

        setDiscardBtnClickHandler(handlerFn) {
            this.discardBtnClickHandler = handlerFn;
        }

        setModalTitle(title) {
            const modalTitleNode = this.modal.querySelector(`.modal-title`);

            modalTitleNode.innerHTML = title;
        }

        setModalTableTitle(title) {
            const modalTableTitleNode = this.modal.querySelector(`.ez-table-header__headline`);

            modalTableTitleNode.innerHTML = title;
        }

        togglePublicationDateInput(show) {
            const publicationDateNode = this.modal.querySelector(`.ez-scheduling-modal__publication-date`);

            publicationDateNode.hidden = !show;
        }

        toggleConfirmBtn(show) {
            const btn = this.modal.querySelector(`.ez-btn--confirm`);

            btn.hidden = !show;
        }

        toggleDiscardBtn(show) {
            const btn = this.modal.querySelector(`.ez-btn--discard`);

            btn.hidden = !show;
        }

        setModalTableBody(selectedItemsData) {
            const table = this.modal.querySelector('.ez-scheduling-modal__table');
            const tableBody = table.querySelector('.ez-scheduling-modal__table-body');
            const tableRowTemplate = table.dataset.tableRowTemplate;
            const fragment = doc.createDocumentFragment();

            selectedItemsData.forEach(({ publicationDate, name, version, language, contentTypeName, creationDate, creator }) => {
                const container = doc.createElement('tbody');
                const emDash = '\u2014';
                const renderedItem = tableRowTemplate
                    .replace('{{ date_and_time }}', publicationDate ? publicationDate : `${emDash}${emDash}`)
                    .replace('{{ name }}', eZ.helpers.text.escapeHTML(name))
                    .replace('{{ version }}', version)
                    .replace('{{ translations }}', language)
                    .replace('{{ content_type }}', contentTypeName)
                    .replace('{{ creation_date }}', creationDate)
                    .replace('{{ creator }}', creator);

                container.insertAdjacentHTML('beforeend', renderedItem);

                const tableRowNode = container.querySelector('tr');

                fragment.append(tableRowNode);
            });

            this.removeNodeChildren(tableBody);
            tableBody.append(fragment);
        }

        removeNodeChildren(node) {
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
        }

        updatePublicationDateValue(dates) {
            const isDateSelected = !!dates[0];

            if (!isDateSelected) {
                this.confirmBtn.disabled = true;
                this.selectedDate = null;

                return;
            }

            const selectedDateWithUserTimezone = convertDateToTimezone(dates[0], undefined, true);

            this.selectedDate = selectedDateWithUserTimezone;
            this.confirmBtn.disabled = false;
        }

        setLoadingState() {
            const btns = this.modal.querySelectorAll('.ez-scheduling-modal__btn');
            const btnsSpinners = this.modal.querySelectorAll('.ez-scheduling-modal__btn-spinner');
            const modalCloseBtn = this.modal.querySelector('.close');
            const dateInput = this.modal.querySelector('.ez-scheduling-modal__input');

            btns.forEach((btn) => {
                btn.disabled = true;
            });
            btnsSpinners.forEach((btnSpinner) => {
                btnSpinner.classList.add('ez-scheduling-modal__btn-spinner--visible');
            });
            modalCloseBtn.disabled = true;
            dateInput.disabled = true;
        }
    }

    eZ.addConfig('dateBasedPublisher.scheduling.SchedulingModal', SchedulingModal);
})(window, window.document, window.eZ, window.jQuery, window.flatpickr);
