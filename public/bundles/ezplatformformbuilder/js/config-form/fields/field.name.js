(function(global, doc, eZ) {
    let updateTimeout;
    const input = doc.querySelector('#field_configuration_name');
    const fieldId = doc.querySelector('#field_configuration_id').value.trim();
    const unlockInput = () => (input.disabled = false);
    const preventSettingName = () => {
        const message = Translator.trans(
            /*@Desc("Field name '%oldFieldName%' is already in use.")*/ 'type.different.field.name',
            {
                oldFieldName: input.value,
            },
            'form_builder'
        );

        eZ.helpers.notification.showWarningNotification(message);

        input.value = input.dataset.prevValue;
        unlockInput();
    };
    const storePreviousName = () => (input.dataset.prevValue = input.value);
    const updateFieldName = ({ currentTarget }) => {
        global.clearTimeout(updateTimeout);

        updateTimeout = global.setTimeout(() => {
            const customEvent = new CustomEvent('ez-update-field-name', {
                detail: {
                    id: fieldId,
                    name: currentTarget.value.trim(),
                    successCallback: unlockInput,
                    errorCallback: preventSettingName,
                },
            });

            input.disabled = true;
            doc.body.dispatchEvent(customEvent);
        }, 200);
    };

    input.addEventListener('focus', storePreviousName, false);
    input.addEventListener('blur', updateFieldName, false);
})(window, window.document, window.eZ);
