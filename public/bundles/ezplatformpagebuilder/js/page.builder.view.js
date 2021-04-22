(function(global, doc, eZ) {
    const infobar = new eZ.modules.InfoBar();
    const removeLoadingSpinner = () => doc.body.classList.remove('ez-page-builder--is-preview-loading');
    const iframe = doc.querySelector('.ez-page-builder__preview');

    iframe.src = iframe.dataset.src;

    if (eZ.pageBuilder.config.isMultihostSetup) {
        iframe.addEventListener('load', removeLoadingSpinner, false);
    } else {
        iframe.contentWindow.addEventListener('DOMContentLoaded', removeLoadingSpinner, false);
    }
})(window, window.document, window.eZ);
