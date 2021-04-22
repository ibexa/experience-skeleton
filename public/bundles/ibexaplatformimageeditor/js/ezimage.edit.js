(function(global, doc, eZ, React, ReactDOM) {
    const imageEditorContainer = doc.querySelector('.ez-image-editor');
    const editImageButtons = doc.querySelectorAll('.ez-field-edit--ezimage .ez-field-edit-preview__action--edit');
    const removeImageButtons = doc.querySelectorAll('.ez-field-edit--ezimage .ez-field-edit-preview__action--remove');
    const closeImageEditor = () => ReactDOM.unmountComponentAtNode(imageEditorContainer);
    const openImageEditor = (event) => {
        const imageNode = event.currentTarget
            .closest('.ez-field-edit-preview__media-wrapper')
            .querySelector('.ez-field-edit-preview__media');
        const base64Input = event.currentTarget.closest('.ez-field-edit--ezimage').querySelector('.ez-data-source__base64');
        const additionalDataInput = event.currentTarget
            .closest('.ez-field-edit--ezimage')
            .querySelector('.ez-field-edit-preview__additional-data');
        const imageUrl = imageNode.src;
        const imageName = event.currentTarget.closest('.ez-field-edit-preview').querySelector('.ez-field-edit-preview__file-name')
            .innerHTML;
        const setNewImage = (image, additionalData) => {
            imageNode.src = image.src;
            base64Input.value = image.src.split(',')[1];
            additionalDataInput.value = JSON.stringify(additionalData);

            closeImageEditor();
        };
        const additionalData = JSON.parse(additionalDataInput.value);
        const renderImageEditor = (image = imageUrl) => {
            ReactDOM.render(
                React.createElement(eZ.modules.ImageEditorModule, {
                    onCancel: closeImageEditor,
                    onConfirm: setNewImage,
                    imageUrl: image,
                    imageName,
                    additionalData,
                }),
                imageEditorContainer
            );
        };

        if (imageUrl.includes('data:image')) {
            renderImageEditor();
        } else {
            const { contentId, fieldDefinitionIdentifier } = event.currentTarget.dataset;
            const url = Routing.generate('ibexa.image_editor.get_base_64', { contentId, fieldIdentifier: fieldDefinitionIdentifier });
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
                    renderImageEditor(`data:image/jpeg;base64,${response}`);
                })
                .catch(eZ.helpers.notification.showErrorNotification);
        }
    };
    const clearImageEditorInputs = (event) => {
        const base64Input = event.currentTarget
            .closest('.ez-field-edit--ezimage')
            .querySelector('#ezplatform_content_forms_content_edit_fieldsData_image_value_base64');
        const additionalDataInput = event.currentTarget
            .closest('.ez-field-edit--ezimage')
            .querySelector('#ezplatform_content_forms_content_edit_fieldsData_image_value_additionalData');

        base64Input.value = '';
        additionalDataInput.value = '{}';
    };

    editImageButtons.forEach((editImageButton) => editImageButton.addEventListener('click', openImageEditor, false));
    removeImageButtons.forEach((removeImageButton) => removeImageButton.addEventListener('click', clearImageEditorInputs, false));
})(window, window.document, window.eZ, window.React, window.ReactDOM);
