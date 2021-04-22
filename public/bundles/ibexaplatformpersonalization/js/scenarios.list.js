(function(doc, eZ) {
    const scenarioForm = doc.querySelector('.ez-scenario-form');
    const periodSelect = doc.querySelector('.ez-scenario-form__period');

    if (periodSelect) {
        periodSelect.addEventListener(
            'change',
            () => {
                const dateIntervalInput = scenarioForm.querySelector(
                    'input[name="scenario-form[period][date_interval]"]'
                );

                dateIntervalInput.value = event.currentTarget.value;
                scenarioForm.submit();
            },
            false
        );
    }
})(window.document, window.eZ);
