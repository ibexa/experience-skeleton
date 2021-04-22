(function(global, doc) {
    const CLASS_CHECKBOX = '.ez-site-factory-toggle-group__checkbox';
    const toggleDeleteButtonDisabledState = () => {
        const checkboxes = doc.querySelectorAll(`${CLASS_CHECKBOX}:checked`);
        const deleteButton = doc.querySelector('.ez-btn--delete-public-access');
        const methodName = checkboxes.length ? 'removeAttribute' : 'setAttribute';

        deleteButton[methodName]('disabled', true);
    };
    const attachEventsToCheckboxes = () => {
        const checkboxes = doc.querySelectorAll(CLASS_CHECKBOX);

        checkboxes.forEach((checkbox) => checkbox.addEventListener('change', toggleDeleteButtonDisabledState));
    };
    const createPublicAccess = (event) => {
        const list = doc.querySelector('#ez-site-factory-public-access');
        let counter = list.dataset.widgetCounter;
        let newWidget = list.dataset.prototype;

        newWidget = newWidget.replace(/__name__/g, counter);
        counter++;

        const htmlWidget = doc.createRange().createContextualFragment(newWidget);

        htmlWidget.querySelector(CLASS_CHECKBOX).addEventListener('change', toggleDeleteButtonDisabledState);

        doc.body.dispatchEvent(
            new CustomEvent('ez-initialize-card-toggle-group', {
                detail: { button: htmlWidget.querySelector('.ez-card__body-display-toggler') },
            })
        );
        doc.body.dispatchEvent(
            new CustomEvent('ez-site-factory-add-public-access', {
                detail: { widget: htmlWidget },
            })
        );

        list.dataset.widgetCounter = counter;
        list.prepend(htmlWidget);
    };
    const attachEventToCreateButton = () => {
        const createButton = doc.querySelector('.ez-btn--create-public-access');

        createButton.addEventListener('click', createPublicAccess);
    };
    const deletePublicAccess = () => {
        const checkboxes = doc.querySelectorAll(`${CLASS_CHECKBOX}:checked`);
        const deleteButton = doc.querySelector('.ez-btn--delete-public-access');

        checkboxes.forEach((checkbox) => checkbox.closest('.ez-site-factory-toggle-group').remove());
        deleteButton.setAttribute('disabled', true);
    };
    const attachEventToDeleteButton = () => {
        const deleteButton = doc.querySelector('.ez-btn--delete-public-access');

        deleteButton.addEventListener('click', deletePublicAccess);
    };

    attachEventsToCheckboxes();
    attachEventToCreateButton();
    attachEventToDeleteButton();
})(window, window.document);
