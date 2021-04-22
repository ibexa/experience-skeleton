(function(global, doc, eZ, React, ReactDOM, $) {
    const modal = doc.querySelector('#submission-details-modal');
    const showModalOnLoad = (event) => {
        const values = event.relatedTarget.dataset.submissionValues;
        const tbody = modal.querySelector('tbody');

        tbody.innerHTML = '';
        tbody.insertAdjacentHTML('afterbegin', values);
    };

    $(modal).on('show.bs.modal', showModalOnLoad);
})(window, window.document, window.eZ, window.React, window.ReactDOM, window.jQuery);
