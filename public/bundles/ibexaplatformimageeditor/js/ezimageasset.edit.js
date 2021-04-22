(function(global, doc, eZ, React, ReactDOM, Routing) {
    const imageEditorContainer = doc.querySelector('.ez-image-editor');
    const editImageButtons = doc.querySelectorAll('.ez-field-edit--ezimageasset .ez-field-edit-preview__action--edit');
    const imagePreviews = doc.querySelectorAll('.ez-field-edit--ezimageasset .ez-field-edit-preview__media');
    const toggleDisableState = (event) => {
        const container = event.currentTarget.closest('.ez-field-edit--ezimageasset');
        const destinationSourceIdInput = container.querySelector('.ez-data-source__destination-source-id');
        const editImageButton = container.querySelector('.ez-field-edit-preview__action--edit');
        const methodName = destinationSourceIdInput.value ? 'setAttribute' : 'removeAttribute';

        editImageButton[methodName]('disabled', 'disabled');
    };
    const closeImageEditor = () => ReactDOM.unmountComponentAtNode(imageEditorContainer);
    const openImageEditor = (event) => {
        const imageNode = event.currentTarget
            .closest('.ez-field-edit-preview__media-wrapper')
            .querySelector('.ez-field-edit-preview__media');
        const imageUrl = imageNode.src;
        const imageName = event.currentTarget.closest('.ez-field-edit-preview').querySelector('.ez-field-edit-preview__asset-name a')
            .innerHTML;
        const contentId = event.currentTarget
            .closest('.ez-field-edit--ezimageasset')
            .querySelector('.ez-data-source__destination-content-id').value;
        const languageCode = event.currentTarget.closest('.ez-field-edit--ezimageasset').querySelector('input[type="file"]').dataset
            .languageCode;
        const previewActionPreview = event.currentTarget
            .closest('.ez-field-edit--ezimageasset')
            .querySelector('.ez-field-edit-preview__action--preview');
        const assetNameContainer = event.currentTarget
            .closest('.ez-field-edit--ezimageasset')
            .querySelector('.ez-field-edit-preview__asset-name a');
        const inputDestinationContentId = event.currentTarget
            .closest('.ez-field-edit--ezimageasset')
            .querySelector('.ez-data-source__destination-content-id');
        const previewVisual = event.currentTarget.closest('.ez-field-edit--ezimageasset').querySelector('.ez-field-edit-preview__visual');
        const setNewImage = (image, additionalData, saveAsNew) => {
            const route = saveAsNew
                ? Routing.generate('ibexa.image_editor.create_from_image_asset', { fromContentId: contentId, languageCode })
                : Routing.generate('ibexa.image_editor.update_image_asset', { contentId, languageCode });
            const token = doc.querySelector('meta[name="CSRF-Token"]').content;
            const method = saveAsNew ? 'POST' : 'PUT';
            const request = new Request(route, {
                method,
                headers: {
                    'X-CSRF-Token': token,
                },
                body: JSON.stringify({
                    value: {
                        base64: image.src.split(',')[1],
                        additionalData,
                    },
                }),
                mode: 'same-origin',
                credentials: 'same-origin',
            });

            closeImageEditor();

            fetch(request)
                .then(eZ.helpers.request.getJsonFromResponse)
                .then((response) => {
                    if (saveAsNew) {
                        const destinationLocationUrl = Routing.generate('_ez_content_view', {
                            contentId: response.contentId,
                            locationId: response.locationId,
                        });

                        previewActionPreview.setAttribute('href', destinationLocationUrl);
                        assetNameContainer.innerHTML = response.translatedName;
                        assetNameContainer.setAttribute('href', destinationLocationUrl);
                        inputDestinationContentId.value = response.contentId;
                    }

                    previewVisual.dataset.additionalData = JSON.stringify(additionalData);
                    imageNode.src = image.src;
                })
                .catch(eZ.helpers.notification.showErrorNotification);
        };
        const fieldIdentifier = eZ.adminUiConfig.imageAssetMapping.contentFieldIdentifier;
        const url = Routing.generate('ibexa.image_editor.get_base_64', { contentId, fieldIdentifier });
        const token = doc.querySelector('meta[name="CSRF-Token"]').content;
        const request = new Request(url, {
            headers: {
                'X-CSRF-Token': token,
            },
            mode: 'same-origin',
            credentials: 'same-origin',
        });

        fetch(request)
            .then(eZ.helpers.request.getTextFromResponse)
            .then((response) => {
                ReactDOM.render(
                    React.createElement(eZ.modules.ImageEditorModule, {
                        onCancel: closeImageEditor,
                        onConfirm: setNewImage,
                        imageUrl: `data:image/jpeg;base64,${response}`,
                        imageName,
                        saveAsNewPossible: true,
                        additionalData: JSON.parse(previewVisual.dataset.additionalData),
                    }),
                    imageEditorContainer
                );
            })
            .catch(eZ.helpers.notification.showErrorNotification);
    };

    editImageButtons.forEach((editImageButton) => editImageButton.addEventListener('click', openImageEditor, false));
    imagePreviews.forEach((imagePreview) => imagePreview.addEventListener('load', toggleDisableState, false));
})(window, window.document, window.eZ, window.React, window.ReactDOM, window.Routing);
