(function(global, doc, eZ) {
    class RescheduleBtn extends eZ.dateBasedPublisher.scheduling.BaseScheduleBtn {
        getBulkRequestOperation(contentId, version, publicationTimestamp) {
            return {
                uri: `api/datebasedpublisher/v1/content/objects/${contentId}/versions/${version}/schedule/${publicationTimestamp}`,
                method: 'PATCH',
            };
        }

        getFailNotificationMessage(failedCount, successCount) {
            return Translator.trans(
                /*@Desc("%failedCount% out of %totalCount% selected drafts could not be rescheduled. Please try again.")*/ 'reschedule.fail.message',
                {
                    failedCount,
                    totalCount: failedCount + successCount,
                },
                'ezplatform_date_based_publisher'
            );
        }

        getSuccessNotificationMessage() {
            return Translator.trans(
                /*@Desc("Rescheduled all drafts.")*/ 'reschedule.success.message',
                {},
                'ezplatform_date_based_publisher'
            );
        }

        getErrorNotificationMessage() {
            return Translator.trans(
                /*@Desc("An unexpected error occurred while rescheduling the selected draft(s). Please try again.")*/ 'reschedule.error.message',
                {},
                'ezplatform_date_based_publisher'
            );
        }

        prepareModal() {
            super.prepareModal();

            this.schedulingModal.toggleConfirmBtn(true);
            this.schedulingModal.togglePublicationDateInput(true);
            this.schedulingModal.toggleDiscardBtn(false);
        }
    }

    eZ.addConfig('dateBasedPublisher.scheduling.RescheduleBtn', RescheduleBtn);
})(window, window.document, window.eZ);
