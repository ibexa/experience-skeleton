(function (global, doc) {
    const statusFields = doc.querySelectorAll('.ez-site-factory-form-status__widget');
    const toggleState = (event) => {
        event.preventDefault();

        const labelNode = event.currentTarget.querySelector('.ez-data-source__label');

        labelNode.classList.toggle('is-checked');

        const isChecked = labelNode.classList.contains('is-checked');
        const valueToSet = isChecked ? 1 : 0;

        event.currentTarget.querySelector(`.form-check input[value="${valueToSet}"]`).setAttribute('checked', 'checked');
    };

    statusFields.forEach((statusField) => statusField.addEventListener('click', toggleState));

    doc.body.addEventListener('ez-site-factory-add-public-access', (event) => {
        event.detail.widget.querySelector('.ez-site-factory-form-status__widget').addEventListener('click', toggleState);
    });
})(window, window.document);
