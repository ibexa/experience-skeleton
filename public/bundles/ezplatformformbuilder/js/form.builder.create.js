(function(global, doc, eZ, React, ReactDOM) {
    const CLASS_FORM_BUILDER_CLOSED = 'ez-form-builder--closed';
    const CLASS_FORM_BUILDER_VISIBLE = 'ez-form-builder-modal--visible';
    const CLASS_SCROLL_DISABLED = 'ez-scroll-disabled';
    const CLASS_FIELD_NO_VALUE = 'ez-form-builder--no-value';
    const SELECTOR_MODAL = '.ez-form-builder-modal';
    const DEFAULT_FIELDVALUE = { fields: [] };
    const KEYCODE_ESCAPE = 27;
    // @TODO get default empty fieldtype value from backend
    const FIELDTYPE_EMPTY_VALUE = JSON.stringify({ fields: [], content_id: null, content_field_id: null, language_code: null });
    const INVALID_FIELDS_ERROR = Translator.trans(
        /*@Desc("Not all the fields were configured correctly. Provide missing configuration.")*/ 'invalid.fields',
        {},
        'form_builder'
    );
    const fieldTypeContainer = doc.querySelector('.ez-form-builder');
    const formBuilderContainer = doc.querySelector('#ez-form-builder-root');
    const openFormBuilderBtns = doc.querySelectorAll('[data-open-form-builder]');
    const formFieldsConfigInput = doc.querySelector('[data-ezform-fieldvalue]');
    let formBuilder;

    if (!formFieldsConfigInput) {
        return;
    }

    const handleEscapeOnKeyup = (event) => {
        if (event.keyCode !== KEYCODE_ESCAPE) {
            return;
        }

        closeFormBuilder();
    };
    const findFieldConfig = (field) => eZ.formBuilder.config.fieldsConfig.find((config) => config.identifier === field.identifier);
    const checkFieldIsInValid = (field) => {
        const fieldConfig = findFieldConfig(field);

        if (!fieldConfig) {
            return true;
        }

        return !field.attributes.every((attr) => checkAttributeValidState(fieldConfig, attr));
    };
    const checkAttributeValidState = (fieldConfig, attr) => {
        const attrConfig = fieldConfig.attributes.find((config) => config.identifier === attr.identifier);

        if (!Object.keys(attrConfig.constraints).length) {
            return true;
        }

        const isRequired = !!Object.keys(attrConfig.constraints).find((key) => key === 'not_blank');

        if (!isRequired) {
            return true;
        }

        const isValid = !!attr.value.trim().length;

        return isValid;
    };
    const checkCanCloseFormBuilder = () => {
        const formFieldsConfig = formFieldsConfigInput.value ? JSON.parse(formFieldsConfigInput.value) : null;
        const formHasAnyFields = formFieldsConfig && formFieldsConfig.fields && formFieldsConfig.fields.length > 0;

        if (!formHasAnyFields) {
            return {
                canClose: true,
                invalidFields: [],
            };
        }

        const invalidFields = formFieldsConfig.fields.filter(checkFieldIsInValid);

        return {
            canClose: !invalidFields.length,
            invalidFields,
        };
    };
    const closeFormBuilder = () => {
        const { canClose, invalidFields } = checkCanCloseFormBuilder();

        if (!canClose) {
            eZ.helpers.notification.showErrorNotification(INVALID_FIELDS_ERROR);

            formBuilder.markInvalidFields(invalidFields);

            return;
        }

        const modal = fieldTypeContainer.querySelector('.ez-form-builder-modal');

        doc.body.classList.add(CLASS_FORM_BUILDER_CLOSED);
        doc.body.classList.remove(CLASS_SCROLL_DISABLED);

        global.parent.document.body.dispatchEvent(new CustomEvent('ez-udw-show-footer'));

        modal.classList.remove(CLASS_FORM_BUILDER_VISIBLE);
        modal.removeEventListener('keyup', handleEscapeOnKeyup);

        ReactDOM.unmountComponentAtNode(formBuilderContainer);

        updatePreview();
        eZ.helpers.tooltips.hideAll();
    };
    const openFormBuilder = (event) => {
        event.preventDefault();

        const modal = fieldTypeContainer.querySelector(SELECTOR_MODAL);
        const hasCorrectValue = formFieldsConfigInput.value.trim().length && formFieldsConfigInput.value !== 'null';
        const fieldValue = hasCorrectValue ? JSON.parse(formFieldsConfigInput.value) : DEFAULT_FIELDVALUE;
        const config = Object.assign({}, eZ.formBuilder.config, {
            fieldValue,
            fieldValueInput: formFieldsConfigInput,
            fieldFormRequestConfig: doc.querySelector('form[name="request_field_configuration"]'),
        });

        doc.body.classList.remove(CLASS_FORM_BUILDER_CLOSED);
        doc.body.classList.add(CLASS_SCROLL_DISABLED);

        global.parent.document.body.dispatchEvent(new CustomEvent('ez-udw-hide-footer'));

        modal.classList.add(CLASS_FORM_BUILDER_VISIBLE);
        modal.focus();
        modal.addEventListener('keyup', handleEscapeOnKeyup, false);

        formBuilder = ReactDOM.render(React.createElement(eZ.modules.FormBuilder, config), formBuilderContainer);
    };
    const removeFieldValue = () => {
        formFieldsConfigInput.value = FIELDTYPE_EMPTY_VALUE;

        updatePreview();
    };
    const attachEventHandlers = (btn) => {
        const btnClose = fieldTypeContainer.querySelector('[data-close-form-builder]');
        const btnRemove = fieldTypeContainer.querySelector('.ez-form-builder-preview__action--trash');

        btn.addEventListener('click', openFormBuilder, false);
        btnClose.addEventListener('click', closeFormBuilder, false);
        btnRemove.addEventListener('click', removeFieldValue, false);
    };
    const updatePreview = () => {
        const formFieldsConfig = formFieldsConfigInput.value ? JSON.parse(formFieldsConfigInput.value) : null;
        const formHasAnyFields = formFieldsConfig && formFieldsConfig.fields && formFieldsConfig.fields.length > 0;
        const callToAction = doc.querySelector('.ez-form-builder__call-to-action');

        if (formHasAnyFields) {
            const iframeForm = doc.querySelector('form[name=request_form_preview]');
            const iframeFormInput = doc.querySelector('#request_form_preview_form');

            iframeFormInput.value = formFieldsConfigInput.value;
            iframeForm.submit();

            fieldTypeContainer.classList.remove(CLASS_FIELD_NO_VALUE);
            callToAction.setAttribute('hidden', true);

            return;
        }

        fieldTypeContainer.classList.add(CLASS_FIELD_NO_VALUE);
        callToAction.removeAttribute('hidden');
    };

    openFormBuilderBtns.forEach(attachEventHandlers);

    formFieldsConfigInput.addEventListener('change', updatePreview, false);
    updatePreview();
})(window, window.document, window.eZ, window.React, window.ReactDOM);
