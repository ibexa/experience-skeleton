(function(doc, React, ReactDOM, eZ) {
    const SELECTOR_FIELD = '.ez-field-edit--ezlandingpage';
    const pageBuilderContainer = doc.querySelector('#ez-page-builder-root');
    // eslint-disable-next-line
    const infobar = new eZ.modules.InfoBar({ isCreateMode: true });
    const pageBuilderConfig = Object.assign({}, eZ.pageBuilder.config, { isCreateMode: true });
    // eslint-disable-next-line
    const pageBuilder = ReactDOM.render(React.createElement(eZ.modules.PageBuilder, pageBuilderConfig), pageBuilderContainer);
    const validator = new eZ.EzLandingPageValidator({
        classInvalid: 'is-invalid',
        pageBuilder,
        fieldSelector: SELECTOR_FIELD,
        eventsMap: [
            {
                selector: '#ezplatform_content_forms_content_edit_fieldsData_page_value',
                eventName: 'change',
                callback: 'validateInput',
                errorNodeSelectors: ['.ez-field-edit__label-wrapper'],
            },
        ],
    });

    validator.init();

    eZ.fieldTypeValidators = eZ.fieldTypeValidators ? [...eZ.fieldTypeValidators, validator] : [validator];
})(window.document, window.React, window.ReactDOM, window.eZ);
