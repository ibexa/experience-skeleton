(function(global, doc, eZ) {
    let draggable;
    const SELECTOR_ITEM = '.fb-config-option';
    const SELECTOR_OPTIONS = '.fb-config-field__options';
    const SELECTOR_BTN_REMOVE = '.fb-config-option__action--remove';
    const SELECTOR_OPTION_INPUT = '.fb-config-option__input';
    const itemsContainers = doc.querySelectorAll(SELECTOR_OPTIONS);

    if (!itemsContainers.length) {
        return;
    }

    const getItems = (itemsContainer) => [...itemsContainer.querySelectorAll(SELECTOR_ITEM)];
    const getField = (element) => element.closest('.fb-config-field--options');
    const getInput = (itemsContainer) => getField(itemsContainer).querySelector('.fb-config-field__input');
    const getItemValue = (item) => item.querySelector(SELECTOR_OPTION_INPUT).value.trim();
    const updateInputValue = (itemsContainer) => {
        const input = getInput(itemsContainer);

        input.value = JSON.stringify([...getItems(itemsContainer).map(getItemValue)]);
    };
    let attachEventsToSelectedItem = (itemsContainer, item) => {
        item.querySelector(SELECTOR_BTN_REMOVE).onclick = (event) => removeItem(itemsContainer, event);
        item.querySelector('.fb-config-option__action--add-new').onclick = () => addItem(itemsContainer);
        item.querySelector(SELECTOR_OPTION_INPUT).onkeyup = () => updateInputValue(itemsContainer);
    };
    const toggleRemoveBtnsDisabledState = (itemsContainer) => {
        const btns = itemsContainer.querySelectorAll(SELECTOR_BTN_REMOVE);
        const methodName = btns.length > 1 ? 'removeAttribute' : 'setAttribute';

        btns.forEach((btn) => btn[methodName]('disabled', true));
    };
    const createItem = (template, value = '') => {
        const container = doc.createElement('div');

        container.innerHTML = template;
        doc.body.append(container);

        const option = container.children[0];

        option.querySelector(SELECTOR_OPTION_INPUT).value = value;

        doc.body.removeChild(container);

        return option;
    };
    const addItem = (itemsContainer) => {
        const item = createItem(itemsContainer.dataset.template);

        itemsContainer.append(item);
        toggleRemoveBtnsDisabledState(itemsContainer);
        draggable.reinit();
    };
    const addItems = (itemsContainer, items) => {
        const fragment = doc.createDocumentFragment();
        const template = itemsContainer.dataset.template;

        items.forEach((item) => fragment.append(createItem(template, item)));

        itemsContainer.append(fragment);

        updateInputValue(itemsContainer);
        draggable.reinit();

        toggleRemoveBtnsDisabledState(itemsContainer);
    };
    const removeItem = (itemsContainer, event) => {
        event.preventDefault();

        const field = getField(event.currentTarget);

        event.currentTarget.closest(SELECTOR_ITEM).remove();
        updateInputValue(field.querySelector(SELECTOR_OPTIONS));
        toggleRemoveBtnsDisabledState(itemsContainer);
    };
    
    class OptionsDraggable extends global.eZ.core.Draggable {
        attachEventHandlersToItem(item) {
            super.attachEventHandlersToItem(item);

            attachEventsToSelectedItem(this.itemsContainer, item);
        }

        onDrop() {
            super.onDrop();

            updateInputValue(this.itemsContainer);
        }
    };

    itemsContainers.forEach(function(itemsContainer) {
        draggable = new OptionsDraggable({
            itemsContainer,
            selectorItem: SELECTOR_ITEM,
            selectorPlaceholder: '.fb-config-field__placeholder',
        });

        draggable.init();

        const input = getInput(itemsContainer);
        const inputValue = input.value.trim();

        if (!inputValue.length) {
            return;
        }

        try {
            const items = JSON.parse(inputValue);

            if (items.length) {
                itemsContainer.innerHTML = '';
                addItems(itemsContainer, items);
            }
        } catch (error) {
            eZ.helpers.notification.showErrorNotification('Issue occurred when parsing field value');
            console.error('Issue occurred when parsing field value', error);
        }
    });
})(window, window.document, window.eZ);
