(function(global, doc) {
    const deleteButtons = doc.querySelectorAll('.ez-btn--delete:not(:disabled)');
    const siteIdInput = doc.querySelector('#site_delete_site');
    const changeDeleteId = (event) => {
        const siteId = event.currentTarget.dataset.siteId;

        siteIdInput.value = siteId;
    };

    deleteButtons.forEach((btn) => btn.addEventListener('click', changeDeleteId));
})(window, window.document, window.eZ);
