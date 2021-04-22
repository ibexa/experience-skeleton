(function(global, doc, eZ, Translator) {
    const toggleItemSelect = (event) => {
        const itemCheckbox = event.currentTarget;
        const groupContent = itemCheckbox.closest('.ez-page-select-items__group-content');
        const itemClassMethod = itemCheckbox.checked ? 'add' : 'remove';

        itemCheckbox.closest('.ez-page-select-items__item').classList[itemClassMethod]('ez-page-select-items__item--selected');
        updateGroupHeader(groupContent);
    };
    const toggleGroupItemsSelect = (event) => {
        const actionCheckbox = event.currentTarget;
        const groupContent = actionCheckbox.closest('.ez-page-select-items__group-content');
        const itemClassMethod = actionCheckbox.checked ? 'add' : 'remove';

        groupContent.querySelectorAll('.ez-page-select-items__items-list .ez-input--checkbox').forEach((itemCheckbox) => {
            itemCheckbox.checked = actionCheckbox.checked;
            itemCheckbox.closest('.ez-page-select-items__item').classList[itemClassMethod]('ez-page-select-items__item--selected');
        });
        updateGroupHeader(groupContent);
    };
    const updateGroupHeader = (container) => {
        container.querySelectorAll('.ez-page-select-items__select-all-items').forEach((checkbox) => {
            const group = checkbox.closest('.ez-page-select-items__group-content');
            const warningNode = group.querySelector('.ez-page-select-items__group-warning');
            const actionLabelNode = group.querySelector('.ez-page-select-items__group-action-label');
            const actionCheckboxNode = group.querySelector('.ez-page-select-items__select-all-items');
            const isAnyBlockUnchecked = [...group.querySelectorAll('.ez-page-select-items__items-list .ez-input--checkbox')].some(
                (checkbox) => !checkbox.checked
            );
            const warningClassMethod = isAnyBlockUnchecked ? 'remove' : 'add';

            if (isAnyBlockUnchecked) {
                actionCheckboxNode.checked = false;
                actionLabelNode.innerHTML = Translator.trans(/*@Desc("Select all")*/ 'item.select_all', {}, 'ezplatform_page_fieldtype');
            } else {
                actionCheckboxNode.checked = true;
                actionLabelNode.innerHTML = Translator.trans(
                    /*@Desc("Unselect all")*/ 'item.unselect_all',
                    {},
                    'ezplatform_page_fieldtype'
                );
            }

            if (warningNode) {
                warningNode.classList[warningClassMethod]('ez-page-select-items__group-warning--hidden');
            }
        });
    };

    doc.querySelectorAll('.ez-page-select-items__select-all-items').forEach((groupCheckbox) => {
        groupCheckbox.addEventListener('change', toggleGroupItemsSelect, false);
    });
    doc.querySelectorAll('.ez-page-select-items__item .ez-input--checkbox').forEach((itemCheckbox) => {
        itemCheckbox.addEventListener('change', toggleItemSelect, false);
    });
})(window, window.document, window.eZ, window.Translator);
