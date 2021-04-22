(function(global, doc, $) {
    const cancelButton = doc.querySelector('.ez-btn--schedule-hide-cancel');
    const form = doc.querySelector('form[name="date_based_hide_cancel"]');
    const modal = doc.querySelector('.ez-modal--content-reveal-confirmation');

    if (!cancelButton) {
        return;
    }

    if (modal) {
        modal.querySelector('.btn-confirm').addEventListener('click', () => {
            form.submit();
        });
    }

    cancelButton.addEventListener(
        'click',
        () => {
            $(modal).modal('show');
        },
        false
    );
})(window, window.document, window.jQuery);
