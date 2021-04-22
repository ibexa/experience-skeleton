(function(global, doc, eZ) {
    const allScheduledModalNode = doc.querySelector('#dbp-all-scheduled-scheduling-modal');
    const myScheduledModalNode = doc.querySelector('#dbp-my-scheduled-scheduling-modal');

    if (!allScheduledModalNode || !myScheduledModalNode) {
        return;
    }

    const { SchedulingModal, RescheduleBtn, UnscheduleBtn } = eZ.dateBasedPublisher.scheduling;
    const allScheduledModal = new SchedulingModal(allScheduledModalNode);
    const myScheduledModal = new SchedulingModal(myScheduledModalNode);
    const allScheduledRescheduleBtn = new RescheduleBtn(doc.querySelector('#dbp-all-scheduled-reschedule'), allScheduledModal);
    const allScheduledUnscheduleBtn = new UnscheduleBtn(doc.querySelector('#dbp-all-scheduled-unschedule'), allScheduledModal);
    const myScheduledRescheduleBtn = new RescheduleBtn(doc.querySelector('#dbp-my-scheduled-reschedule'), myScheduledModal);
    const myScheduledUnscheduleBtn = new UnscheduleBtn(doc.querySelector('#dbp-my-scheduled-unschedule'), myScheduledModal);

    allScheduledModal.init();
    myScheduledModal.init();
    allScheduledRescheduleBtn.init();
    allScheduledUnscheduleBtn.init();
    myScheduledRescheduleBtn.init();
    myScheduledUnscheduleBtn.init();
})(window, window.document, window.eZ);
