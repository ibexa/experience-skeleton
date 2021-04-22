(function(global, doc) {
    const addSegmentTable = doc.querySelector('.ez-table--add-segments');

    if (!addSegmentTable) {
        return;
    }

    let lastIndex = 0;
    const addButton = doc.querySelector('.ez-table-header--add-segments .ez-btn--add');
    const removeButton = doc.querySelector('.ez-table-header--add-segments .ez-btn--remove');
    const addSegment = () => {
        const index = lastIndex++;
        const template = addSegmentTable.dataset.template;
        const tbodyFragment = doc.createElement('tbody');
        const renderedTemplate = template.replace(/__name__/g, index);

        tbodyFragment.insertAdjacentHTML('beforeend', renderedTemplate);

        const tr = tbodyFragment.querySelector('tr');

        tr.querySelector('.ez-input--checkbox').addEventListener(
            'change',
            () => {
                const isCheckboxSelected = [...addSegmentTable.querySelectorAll('.ez-input--checkbox')].some(
                    (checkbox) => checkbox.checked
                );
                const methodName = isCheckboxSelected ? 'removeAttribute' : 'setAttribute';

                removeButton[methodName]('disabled', 'disabled');
            },
            false
        );

        addSegmentTable.querySelector('tbody').appendChild(tr);
    };
    const removeSegments = () => {
        const selectedSegments = addSegmentTable.querySelectorAll('.ez-input--checkbox:checked');

        selectedSegments.forEach((selectedSegment) => selectedSegment.closest('tr').remove());

        removeButton.setAttribute('disabled', 'disabled');
    };

    addButton.addEventListener('click', addSegment, false);
    removeButton.addEventListener('click', removeSegments, false);
})(window, window.document);
