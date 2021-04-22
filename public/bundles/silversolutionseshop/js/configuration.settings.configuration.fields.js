(function(global, doc) {
    const DROPDOWN_SELECTOR = '.ez-custom-dropdown';
    const addItemButtons = doc.querySelectorAll('.ez-configuration-field-array .ez-btn--add-input');
    const removeItemButtons = doc.querySelectorAll('.ez-configuration-field-array .ez-btn--trash');
    const togglers = [...doc.querySelectorAll('.ez-configuration-field--boolean .ez-data-source__label')];
    const toggleCheckbox = (event) => {
        event.currentTarget.classList.toggle('is-checked');

        const isChecked = event.currentTarget.classList.contains('is-checked');

        event.currentTarget
            .closest('.ez-data-source')
            .querySelector(`.form-check-input[value="${isChecked}"]`)
            .setAttribute('checked', 'checked');
        event.currentTarget
            .closest('.ez-data-source')
            .querySelector(`.form-check-input[value="${!isChecked}"]`)
            .removeAttribute('checked');
    };
    const removeInputItem = (event) => {
        event.currentTarget.closest('.ez-configuration-field-array__item').remove();
    };
    const addInputItem = (event) => {
        const itemsWrapper = event.currentTarget
            .closest('.ez-configuration-field-array')
            .querySelector('.ez-configuration-field-array__items');
        const widget = itemsWrapper.dataset.prototype;
        const htmlWidget = doc.createRange().createContextualFragment(widget);

        itemsWrapper.append(htmlWidget);
        itemsWrapper
            .querySelector('.ez-configuration-field-array__item:last-child .ez-btn--trash')
            .addEventListener('click', removeInputItem, false);

        doc.querySelectorAll(DROPDOWN_SELECTOR).forEach((container) => {
            const dropdown = new eZ.core.CustomDropdown({
                container,
                itemsContainer: container.querySelector('.ez-custom-dropdown__items'),
                sourceInput: container.querySelector('.ez-custom-dropdown__source-input'),
            });

            dropdown.init();
        });
    };

    togglers.forEach((button) => button.addEventListener('click', toggleCheckbox, false));
    addItemButtons.forEach((button) => button.addEventListener('click', addInputItem, false));
    removeItemButtons.forEach((button) => button.addEventListener('click', removeInputItem, false));
    doc.querySelectorAll(DROPDOWN_SELECTOR).forEach((container) => {
        const dropdown = new eZ.core.CustomDropdown({
            container,
            itemsContainer: container.querySelector('.ez-custom-dropdown__items'),
            sourceInput: container.querySelector('.ez-custom-dropdown__source-input'),
        });

        dropdown.init();
    });
})(window, window.document);
