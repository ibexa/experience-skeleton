(function(doc, Routing, eZ, Translator, React, ReactDOM) {
    let draggedItem = null;
    let dragItemSourceContainer = null;
    let submodelSelectedKey = '';
    let submodelSelectedType = '';
    let submodelSelectedContainer = '';
    const { getJsonFromResponse } = eZ.helpers.request;
    const submodelTypeSelectNode = doc.querySelector('.ez-submodel-select');
    const emptyTagTemplateNode = doc.querySelector('.ez-submodel-empty-tag-template');
    const udwContainer = doc.getElementById('react-udw');
    const openUdwButton = doc.querySelector('.ez-btn--add-items-udw');
    const NOMINAL_TYPE = 'NOMINAL';
    const CLASS_EMPTY_TAG = 'ez-submodel__item--empty';
    const SELECTOR_SAVE_BUTTON = '.ez-btn--save';
    const SELECTOR_SAVE_AND_CLOSE_BUTTON = '.ez-btn--save-close';
    const SELECTOR_SUBMODEL = '.ez-submodel';
    const SELECTOR_ITEM = '.ez-submodel__item';
    const SELECTOR_ITEMS_CONTAINER = '.ez-submodel__items';
    const SELECTOR_EDITORIAL_ITEMS_CONTAINER = '.ez-editorial-models__items';
    const SELECTOR_EDITORIAL_ITEM = '.ez-editorial-models__item';
    const SELECTOR_EXISTING_GROUPS = '.ez-submodel__existing-groups';
    const SELECTOR_AVAILABLE_ITEMS = '.ez-submodel__available-items';
    const SELECTOR_ADD_GROUP_BUTTON = '.ez-submodel__add-group-button';
    const SELECTOR_REMOVE_GROUP_BUTTON = '.ez-submodel__remove-group-button';
    const SELECTOR_ADD_RANGE_BUTTON = '.ez-submodel__add-range-button';
    const SELECTOR_REMOVE_RANGE_BUTTON = '.ez-submodel__remove-range-button';
    const SELECTOR_REMOVE_GROUP_ITEM_BUTTON = '.ez-tag__remove-btn';
    const SELECTOR_ITEM_EMPTY_TEMPLATE = '.ez-submodel__item-template';
    const SELECTOR_GROUP_EMPTY_TEMPLATE = '.ez-submodel__group-template';
    const submodelTypeChange = (event) => {
        const { parentNode } = event.currentTarget;

        setSubmodelData();
        parentNode.querySelectorAll(SELECTOR_SUBMODEL).forEach((node) => {
            const method = node.classList.contains(`ez-submodel--${submodelSelectedKey}`) ? 'remove' : 'add';

            node.classList[method]('d-none');
            if (method === 'remove' && submodelSelectedType === NOMINAL_TYPE) {
                fetchSubmodelAvailableItems();
            }
        });
    };
    const fetchSubmodelAvailableItems = () => {
        const submodelAvailableItemsNode = submodelSelectedContainer.querySelector(SELECTOR_AVAILABLE_ITEMS);
        const submodelAvailableItemsInnerContainer = submodelAvailableItemsNode.querySelector(SELECTOR_ITEMS_CONTAINER);
        const url = Routing.generate('ibexa.personalization.model.attribute', {
            attributeKey: submodelSelectedKey,
            attributeType: submodelSelectedType,
        });
        const request = new Request(url, {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                Accept: 'application/json',
            },
        });

        if (submodelAvailableItemsInnerContainer.children.length === 0) {
            fetch(request)
                .then(getJsonFromResponse)
                .then((response) => {
                    const { template } = emptyTagTemplateNode.dataset;
                    const fragment = doc.createDocumentFragment();

                    response.forEach((item) => {
                        const container = doc.createElement('div');

                        container.insertAdjacentHTML('beforeend', template.replaceAll('{{ name }}', item));
                        fragment.append(container.querySelector(SELECTOR_ITEM));
                    });

                    submodelAvailableItemsInnerContainer.append(fragment);
                })
                .catch(eZ.helpers.notification.showErrorNotification);
        }
    };
    const updateGroupContainer = (event, deleteEmptyGroup = false) => {
        let groupNumber = 1;
        const groupsContainer = submodelSelectedContainer.querySelector(SELECTOR_EXISTING_GROUPS);
        const { inputIdPattern, inputNamePattern } = submodelSelectedContainer.querySelector(SELECTOR_ITEM_EMPTY_TEMPLATE).dataset;

        groupsContainer.querySelectorAll(SELECTOR_ITEMS_CONTAINER).forEach((container) => {
            const items = container.querySelectorAll(SELECTOR_ITEM);

            if (deleteEmptyGroup && items.length === 0) {
                container.remove();
            } else {
                container.dataset.key = submodelSelectedKey;
                container.dataset.groupNumber = groupNumber;
                container.dataset.numberOfItems = items.length;

                items.forEach((item, itemIndex) => {
                    const input = item.querySelector('input');

                    input.id = inputIdPattern.replace('__name__', groupNumber).replace('__name__', itemIndex);
                    input.name = inputNamePattern.replace('__name__', groupNumber).replace('__name__', itemIndex);
                });
                groupNumber++;
            }
        });
    };
    const updateEditorialContainer = () => {
        const method = doc.querySelectorAll(SELECTOR_EDITORIAL_ITEM).length ? 'add' : 'remove';
        const noItemsMessageNode = doc.querySelector('.ez-editorial-models__no-items');

        noItemsMessageNode.classList[method]('d-none');
    };
    const dragStart = (event) => {
        draggedItem = event.target;
        dragItemSourceContainer = event.currentTarget;
    };
    const dropItem = (event) => {
        event.stopPropagation();

        if (event.currentTarget.isSameNode(dragItemSourceContainer)) {
            return;
        }

        draggedItem.parentNode.removeChild(draggedItem);

        if (draggedItem.classList.contains(CLASS_EMPTY_TAG)) {
            const { value } = draggedItem.dataset;
            const { template } = submodelSelectedContainer.querySelector(SELECTOR_ITEM_EMPTY_TEMPLATE).dataset;

            event.currentTarget.insertAdjacentHTML('beforeend', template.replace('__name__', value));
            event.currentTarget.querySelector(`${SELECTOR_ITEM}:last-child input`).setAttribute('value', value);
            event.currentTarget
                .querySelector(`${SELECTOR_ITEM}:last-child ${SELECTOR_REMOVE_GROUP_ITEM_BUTTON}`)
                .addEventListener('click', removeGroupItem);
        } else {
            event.currentTarget.appendChild(draggedItem);
        }

        updateGroupContainer(event, true);
    };
    const attachGroupEvents = (container) => {
        const removeButton = container.querySelector(SELECTOR_REMOVE_GROUP_BUTTON);

        container.addEventListener('dragstart', dragStart);
        container.addEventListener('drop', dropItem);
        container.addEventListener('dragover', (event) => event.preventDefault());

        if (removeButton) {
            removeButton.addEventListener('click', removeGroup);
        }
    };
    const addGroup = (event) => {
        event.preventDefault();

        const existingGroupsContainer = event.currentTarget.closest(SELECTOR_EXISTING_GROUPS);
        const { template } = submodelSelectedContainer.querySelector(SELECTOR_GROUP_EMPTY_TEMPLATE).dataset;

        existingGroupsContainer.insertAdjacentHTML('beforeend', template);
        attachGroupEvents(existingGroupsContainer.querySelector(`${SELECTOR_ITEMS_CONTAINER}:last-child`));
        updateGroupContainer(event);
    };
    const removeGroup = (event) => {
        event.preventDefault();

        const container = event.currentTarget.closest(SELECTOR_ITEMS_CONTAINER);

        container.querySelectorAll(SELECTOR_ITEM).forEach((item) => {
            item.remove();
        });
        updateGroupContainer(event, true);
    };
    const removeGroupItem = (event) => {
        event.preventDefault();

        const { itemsType } = event.currentTarget.dataset;
        const itemSelector = itemsType === 'editorial' ? SELECTOR_EDITORIAL_ITEM : SELECTOR_ITEM;
        const item = event.currentTarget.closest(itemSelector);

        if (item) {
            item.remove();
        }

        if (itemsType === 'editorial') {
            updateEditorialContainer();
        } else {
            updateGroupContainer(event, true);
        }
    };
    const addRange = (event) => {
        event.preventDefault();

        const numberOfItems = submodelSelectedContainer.querySelectorAll(SELECTOR_ITEM).length;
        const { template } = submodelSelectedContainer.querySelector(SELECTOR_ITEM_EMPTY_TEMPLATE).dataset;

        submodelSelectedContainer
            .querySelector(SELECTOR_ITEMS_CONTAINER)
            .insertAdjacentHTML('beforeend', template.replaceAll('__name__', numberOfItems));

        const lastRangeRemoveButton = submodelSelectedContainer.querySelector(
            `${SELECTOR_ITEM}:last-child ${SELECTOR_REMOVE_RANGE_BUTTON}`
        );

        if (lastRangeRemoveButton) {
            lastRangeRemoveButton.addEventListener('click', removeRange);
        }
    };
    const removeRange = (event) => {
        event.preventDefault();

        const nodeToRemove = event.currentTarget.closest(SELECTOR_ITEM);

        if (nodeToRemove) {
            nodeToRemove.remove();
        }
    };
    const setSubmodelData = () => {
        const option = doc.querySelector(`option[value="${submodelTypeSelectNode.value}"]`);
        const { type } = option.dataset;

        submodelSelectedContainer = doc.querySelector(`.ez-submodel--${option.value}`);
        submodelSelectedKey = option.value;
        submodelSelectedType = type;
    };
    const onConfirm = (event, items) => {
        closeUDW();

        const editorialModelsContainer = doc.querySelector(SELECTOR_EDITORIAL_ITEMS_CONTAINER);
        const { template } = editorialModelsContainer.dataset;

        items.forEach((item) => {
            let tagIndex = 0;
            const contentName = eZ.helpers.text.escapeHTML(item.ContentInfo.Content.Name);
            const contentId = item.ContentInfo.Content._id;
            const contentTypeId = item.ContentInfo.Content.ContentTypeInfo.id;
            const alreadySelectedItem = doc.querySelector(`.ez-editorial-models__input--id[value="${contentId}"]`);
            const lastItemNode = editorialModelsContainer.querySelector(`${SELECTOR_EDITORIAL_ITEM}:last-child`);

            if (!alreadySelectedItem) {
                if (lastItemNode) {
                    const input = lastItemNode.querySelector('.ez-editorial-models__input--id');

                    tagIndex = parseInt(input.name.replace(/[^0-9]/g, ''), 10) + 1;
                }

                editorialModelsContainer.insertAdjacentHTML(
                    'beforeend',
                    template.replace('__label_name__', contentName).replaceAll('__name__', tagIndex)
                );

                const lastItemNodeAfterInsert = editorialModelsContainer.querySelector(`${SELECTOR_EDITORIAL_ITEM}:last-child`);

                lastItemNodeAfterInsert.querySelector('.ez-editorial-models__input--id').value = contentId;
                lastItemNodeAfterInsert.querySelector('.ez-editorial-models__input--type').value = contentTypeId;
                lastItemNodeAfterInsert.querySelector(SELECTOR_REMOVE_GROUP_ITEM_BUTTON).addEventListener('click', removeGroupItem, false);
            }
        });

        updateEditorialContainer();
    };
    const onCancel = () => closeUDW();
    const closeUDW = () => ReactDOM.unmountComponentAtNode(udwContainer);
    const openUDW = (event) => {
        event.preventDefault();

        const config = JSON.parse(event.currentTarget.dataset.udwConfig);
        const title = Translator.trans(/*@Desc("Select items")*/ 'models.udw_title', {}, 'ibexa_personalization');

        ReactDOM.render(
            React.createElement(eZ.modules.UniversalDiscovery, {
                onConfirm: onConfirm.bind(null, event.currentTarget),
                onCancel,
                title,
                ...config,
            }),
            udwContainer
        );
    };

    if (submodelTypeSelectNode) {
        setSubmodelData();

        if (submodelSelectedType === NOMINAL_TYPE) {
            fetchSubmodelAvailableItems();
        }

        submodelTypeSelectNode.addEventListener('change', submodelTypeChange, true);
    }

    if (openUdwButton) {
        openUdwButton.addEventListener('click', openUDW, false);
    }

    doc.querySelectorAll(SELECTOR_ADD_GROUP_BUTTON).forEach((button) => {
        button.addEventListener('click', addGroup);
    });

    doc.querySelectorAll(SELECTOR_ADD_RANGE_BUTTON).forEach((button) => {
        button.addEventListener('click', addRange);
    });

    doc.querySelectorAll(SELECTOR_REMOVE_RANGE_BUTTON).forEach((button) => {
        button.addEventListener('click', removeRange);
    });

    doc.querySelectorAll(SELECTOR_REMOVE_GROUP_ITEM_BUTTON).forEach((button) => {
        button.addEventListener('click', removeGroupItem);
    });

    doc.querySelectorAll(SELECTOR_ITEMS_CONTAINER).forEach((container) => {
        attachGroupEvents(container);
    });

    doc.querySelector(SELECTOR_SAVE_BUTTON).addEventListener('click', () => {
        doc.querySelector('#model_save').click();
    });

    doc.querySelector(SELECTOR_SAVE_AND_CLOSE_BUTTON).addEventListener('click', () => {
        doc.querySelector('#model_save_and_close').click();
    });
})(window.document, window.Routing, window.eZ, window.Translator, window.React, window.ReactDOM);
