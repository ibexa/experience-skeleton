(function(global, doc) {
    const checkPublicAccess = () => {
        const publicAccessContainer = doc.querySelector('.ez-site-factory-form-public-access');
        const errorContainer = publicAccessContainer.querySelector('#ez-site-factory-public-access > .ez-site-factory-widget__error');
        const publicAccesses = publicAccessContainer.querySelectorAll('#ez-site-factory-public-access > .card');
        const hasPublicAccesses = publicAccesses.length > 0;
        const hasPublicAccessEmptyFields = [...publicAccesses].some((publicAccess) => {
            const isEmpty = [...publicAccess.querySelectorAll('input[required="required"]')].some((input) => {
                return input.value === '';
            });

            return isEmpty;
        });

        if (!hasPublicAccesses || hasPublicAccessEmptyFields) {
            const errorText = Translator.trans(
                /*@Desc("Please add a correct public access")*/ 'form.validate.error.public.access',
                {},
                'ezplatform_site_factory_ui'
            );

            publicAccessContainer.classList.add('is-invalid');
            errorContainer.innerText = errorText;
            errorContainer.classList.add('ez-site-factory-widget__error--visible');

            return true;
        }

        publicAccessContainer.classList.remove('is-invalid');
        errorContainer.classList.remove('ez-site-factory-widget__error--visible');
        errorContainer.innerText = '';

        return false;
    };
    const attachEventToSubmitForm = (form) => {
        if (!form) {
            return;
        }

        form.addEventListener('submit', (event) => {
            const widgets = [...event.target.querySelectorAll('.ez-site-factory-widget')];
            let hasErrors = checkPublicAccess();

            widgets.forEach((widget) => {
                const input = widget.querySelector('.form-control');
                const errorContainer = widget.querySelector('.ez-site-factory-widget__error');

                widget.classList.remove('is-invalid');
                errorContainer.classList.remove('ez-site-factory-widget__error--visible');
                errorContainer.innerText = '';

                if (input.hasAttribute('required') && input.value === '') {
                    const fieldName = widget.querySelector('label').innerText;
                    const errorText = Translator.trans(
                        /*@Desc("%fieldName% Field is required")*/ 'form.validate.error',
                        { fieldName },
                        'ezplatform_site_factory_ui'
                    );
                    hasErrors = true;

                    widget.classList.add('is-invalid');
                    errorContainer.innerText = errorText;
                    errorContainer.classList.add('ez-site-factory-widget__error--visible');
                }
            });

            if (hasErrors) {
                event.preventDefault();
            }
        });
    };

    attachEventToSubmitForm(doc.querySelector('form[name="site_create"]'));
    attachEventToSubmitForm(doc.querySelector('form[name="site_update"]'));
})(window, window.document, window.eZ, window.React, window.ReactDOM);
