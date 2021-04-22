(function(global, doc) {
    const checkboxes = doc.querySelectorAll('.ez-field-edit--ezboolean input');
    const toggleState = (event) => {
        const methodName = event.target.checked ? 'add' : 'remove';

        event.target.closest('.ez-data-source__label').classList[methodName]('is-checked');
    };

    checkboxes.forEach((input) => input.addEventListener('change', toggleState, false));
})(window, window.document);
