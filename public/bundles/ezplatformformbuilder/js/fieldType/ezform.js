(function(global, doc, eZ) {
    const CLASS_LOADING_PREVIEW = 'ez-field-edit--loading-preview';
    const SELECTOR_FIELD = '.ez-field-edit--ezform';
    const fieldContainer = doc.querySelector(SELECTOR_FIELD);
    const formBuilderField = doc.querySelector('.ez-form-builder');

    if (!formBuilderField) {
        return;
    }

    const formPreview = formBuilderField.querySelector('[data-ezform-preview]');
    const preloader = formBuilderField.querySelector('.ez-form-builder-preview__preloader');

    class EzFormValidator extends eZ.BaseFieldValidator {
        /**
         * Validates the input field value
         *
         * @method validateInput
         * @param {Event} event
         * @returns {Object}
         * @memberof EzFormValidator
         */
        validateInput(event) {
            const result = { isError: false };
            const field = event.currentTarget;
            const errorMessage = Translator.trans(/*@Desc("Form field is required")*/ 'form.cannot.be.empty', {}, 'form_builder');

            if (!field.required) {
                return result;
            }

            const fieldValue = JSON.parse(field.value);

            if (fieldValue.fields.length) {
                return result;
            }

            result.isError = true;
            result.errorMessage = errorMessage;

            return result;
        }
    }

    const validator = new EzFormValidator({
        classInvalid: 'is-invalid',
        fieldContainer,
        eventsMap: [
            {
                elements: doc.querySelectorAll('[data-ezform-fieldvalue]'),
                eventName: 'change',
                callback: 'validateInput',
                errorNodeSelectors: ['.ez-field-edit__label-wrapper'],
            },
        ],
    });

    validator.init();

    formPreview.onload = () => {
        formPreview.contentWindow.onbeforeunload = () => fieldContainer.classList.add(CLASS_LOADING_PREVIEW);
        fieldContainer.classList.remove(CLASS_LOADING_PREVIEW);
    };

    eZ.fieldTypeValidators = eZ.fieldTypeValidators ? [...eZ.fieldTypeValidators, validator] : [validator];
})(window, window.document, window.eZ);
