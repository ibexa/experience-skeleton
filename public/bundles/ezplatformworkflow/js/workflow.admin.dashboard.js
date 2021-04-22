(function (global, doc, eZ, $) {
    const containers = doc.querySelectorAll('.ez-workflow-dashboard-table');
    const showPopup = ({ currentTarget: btn }) => {
        const selector = `[data-workflow-popup="${btn.dataset.uiComponent}-${btn.dataset.workflowName}-${btn.dataset.contentId}-${btn.dataset.versionNo}"]`;

        fetch(btn.dataset.src)
            .then(response => response.text())
            .then((text) => {
                const $modal = $(selector);

                $modal[0].querySelector('.modal-body').innerHTML = text;
                $modal.modal('show');

                $(doc).one('hidden.bs.modal', () => $('.modal-backdrop').hide());
            })
    };

    containers.forEach(container => {
        container.querySelectorAll('.ez-btn--workflow-chart').forEach((btn) => {
            btn.addEventListener('click', showPopup, false);
        });
    });
})(window, window.document, window.eZ, window.jQuery);
