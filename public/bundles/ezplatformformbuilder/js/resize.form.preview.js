(function(global, doc, $) {
    const formPreviewIframe = doc.querySelector('[name="form-preview"]');
    let tabEventAttached = false;

    if (!formPreviewIframe) {
        return;
    }

    const resizePreviewIframeToFitContent = () => {
        if (
            !formPreviewIframe ||
            !formPreviewIframe.contentWindow ||
            !formPreviewIframe.contentWindow.document ||
            !formPreviewIframe.contentWindow.document.body
        ) {
            return;
        }

        const bodyScrollHeight = formPreviewIframe.contentWindow.document.body.scrollHeight;

        formPreviewIframe.height = bodyScrollHeight;

        if (!bodyScrollHeight && !tabEventAttached) {
            $('#ez-tab-label-location-view').on('shown.bs.tab', resizePreviewIframeToFitContent);
            tabEventAttached = true;
        }
    };

    formPreviewIframe.addEventListener('load', resizePreviewIframeToFitContent, false);
    resizePreviewIframeToFitContent();
})(window, window.document, window.jQuery);
