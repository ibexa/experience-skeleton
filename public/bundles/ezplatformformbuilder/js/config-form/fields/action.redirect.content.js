(function(global, doc, eZ) {
    let prevInputValue;
    const contentConfigContainer = doc.querySelector('.fb-config-field__action-config[data-config="location_id"]');

    if (!contentConfigContainer) {
        return;
    }

    const configInput = contentConfigContainer.querySelector('.fb-config-field__input--location-id');
    const openUdwBtn = contentConfigContainer.querySelector('.fb-config-field__btn--open-udw');
    const selectedItemContainer = doc.querySelector('.fb-selected-item');
    const selectedItemImage = selectedItemContainer.querySelector('.fb-selected-item__image');
    const selectedItemTitle = selectedItemContainer.querySelector('.fb-selected-item__title');
    const selectedItemType = selectedItemContainer.querySelector('.fb-selected-item__type');
    const removeSelectedItemBtn = selectedItemContainer.querySelector('.fb-selected-item__action--remove');
    const openUdw = (event) => {
        event.preventDefault();

        const config = JSON.parse(event.currentTarget.dataset.udwConfig);
        const title = Translator.trans(/*@Desc("Select content")*/ 'action.redirect.udw.title', {}, 'form_builder');
        const openUdwEvent = new CustomEvent('ez-open-udw', {
            detail: {
                title,
                multiple: false,
                onConfirm: setSelectedItem,
                onCancel: restorePrevInputValue,
                ...config,
            },
        });

        doc.body.dispatchEvent(openUdwEvent);

        prevInputValue = configInput.value;
    };
    const restorePrevInputValue = () => (configInput.value = prevInputValue);
    const setSelectedItem = (items) => {
        const selectedItem = items[0];
        const selectedItemVersion = selectedItem.CurrentVersion;
        const imageField = selectedItemVersion
            ? selectedItemVersion.Version.Fields.field.find((element) => element.fieldTypeIdentifier === 'ezimage')
            : false;

        configInput.value = selectedItem.id;
        selectedItemTitle.innerHTML = selectedItem.ContentInfo.Content.Name;
        selectedItemType.innerHTML = selectedItem.ContentInfo.Content.ContentTypeInfo.names.value[0]['#text'];

        selectedItemContainer.removeAttribute('hidden');
        openUdwBtn.setAttribute('hidden', true);

        if (!imageField) {
            return;
        }

        selectedItemImage.src = imageField.fieldValue.uri;
    };
    const removeSelectedItem = () => {
        configInput.value = '';

        openUdwBtn.removeAttribute('hidden');
        selectedItemContainer.setAttribute('hidden', true);
    };

    removeSelectedItemBtn.addEventListener('click', removeSelectedItem, false);
    openUdwBtn.addEventListener('click', openUdw, false);
})(window, window.document, window.eZ);
