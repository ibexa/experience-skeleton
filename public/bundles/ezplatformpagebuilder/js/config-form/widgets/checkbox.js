(function(doc) {
    const SELECTOR_CHECKBOX = '.ez-block-checkbox-field__item input[type="checkbox"]';
    const SELECTOR_LABEL = '.ez-block-checkbox-field__label';
    const CLASS_IS_CHECKED = 'is-checked';
    const checkboxes = doc.querySelectorAll(SELECTOR_CHECKBOX);
    const updateCheckboxState = ({ currentTarget }) => {
        currentTarget.closest(SELECTOR_LABEL).classList.toggle(CLASS_IS_CHECKED, currentTarget.checked);
    };

    checkboxes.forEach((checkbox) => checkbox.addEventListener('change', updateCheckboxState, false));
})(window.document);
