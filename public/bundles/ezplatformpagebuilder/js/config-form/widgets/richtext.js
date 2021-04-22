(function(global, doc, eZ) {
    const openUdw = (config) => {
        const openUdwEvent = new CustomEvent('ez-open-udw', { detail: config });

        doc.body.dispatchEvent(openUdwEvent);
    };

    eZ.addConfig('richText.alloyEditor.callbacks.selectContent', openUdw, true);

    const containers = doc.querySelectorAll('.ez-data-source__richtext');

    containers.forEach((container) => {
        const richtext = new global.eZ.BaseRichText();
        const alloyEditor = richtext.init(container);
    });
})(window, document, window.eZ);
