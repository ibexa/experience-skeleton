(function(doc, eZ) {
    const { BlockConfigEmbedFieldBase } = eZ;
    const video = new BlockConfigEmbedFieldBase({
        previewFieldTypeIdentifier: 'ezmedia',
        openUDWSelector: '[data-open-udw-video]'
    });

    video.init();
})(window.document, window.eZ);
