(function(global, doc) {
    const eZ = (global.eZ = global.eZ || {});

    eZ.BlockConfigScheduleFieldBase = class BlockConfigScheduleFieldBase {
        constructor(config = {}) {
            this.classLoading = config.classLoading || 'ez-schedule--is-loading';
            this.selectorContainer = config.selectorContainer || '.ez-schedule';
            this.selectorActiveList = config.selectorActiveList || '.ez-schedule__active-items';
            this.selectorActiveItem = config.selectorActiveItem || '.ez-schedule__active-item';
            this.selectorNoActiveItemsInfo = config.selectorNoActiveItemsInfo || '.ez-schedule__no-active-items-info';
            this.selectorQueueList = config.selectorQueueList || '.ez-schedule__queue-items';
            this.selectorQueueItem = config.selectorQueueItem || '.ez-schedule__queue-item';
            this.selectorNoQueuedItemsInfo = config.selectorNoQueuedItemsInfo || '.ez-schedule__no-queued-items-info';
            this.selectorPlaceholder = config.selectorPlaceholder || '.ez-schedule__active-item--placeholder';
            this.selectorOpenUdwBtn = config.selectorOpenUdwBtn || '.ez-btn--select-content';
            this.selectorTrashBtn = config.selectorTrashBtn || '.ez-btn--trash';
            this.selectorChangeAirtimeBtn = config.selectorChangeAirtimeBtn || '.ez-btn--change-airtime';
            this.selectorEventsTextarea = config.selectorEventsTextarea || '#block_configuration_attributes_events_value';
            this.timeoutRemovePlaceholders = config.timeoutRemovePlaceholders || 500;

            this.classNoActiveItemsInfoHidden = config.classNoActiveItemsInfoHidden || 'ez-schedule__no-active-items-info--hidden';
            this.classActiveItemUnavailable = config.classActiveItemUnavailable || 'ez-schedule__active-item--is-unavailable';
            this.classNoQueuedItemsInfoHidden = config.classNoQueuedItemsInfoHidden || 'ez-schedule__no-queued-items-info--hidden';
            this.classQueuedItemUnavailable = config.classQueuedItemUnavailable || 'ez-schedule__queue-item--is-unavailable';
            this.classActiveItemDragDisabled = config.classActiveItemDragDisabled || 'ez-schedule__active-item--drag-disabled';

            this.draggedItem = null;
            this.onDragOverTimeout = null;

            this.onDragStartHandler = this.onDragStartHandler.bind(this);
            this.onDragEndHandler = this.onDragEndHandler.bind(this);
            this.renderItems = this.renderItems.bind(this);

            this.lastItemsListRequestNo = -1;
        }

        getItemsList(container, events) {
            const url = window.Routing.generate('ezplatform.page.block.schedule_block.list_content');
            const model = JSON.parse(container.dataset.model);
            const blockValue = model.blockValue;
            const data = new FormData();

            this.lastItemsListRequestNo += 1;

            this.toggleLoadingScreen(container, true);

            blockValue.attributes = blockValue.attributes.map((attr) => {
                if (attr.name === 'events') {
                    attr.value = JSON.stringify(events);
                }

                return attr;
            });

            data.append('blockValue', JSON.stringify(blockValue));

            const request = new Request(url, {
                method: 'POST',
                body: data,
                mode: 'same-origin',
                credentials: 'same-origin',
            });
            const requestNo = this.lastItemsListRequestNo;

            fetch(request)
                .then((response) => response.json())
                .then((json) => {
                    if (requestNo < this.lastItemsListRequestNo) {
                        return;
                    }

                    const { active, queue } = json.lists;

                    container.dataset.blockValue = JSON.stringify(json.blockValue);

                    this.renderItems(container, { active, queue });
                });
        }

        addNewEvents(container, newEvents) {
            const eventsTextarea = container.querySelector(this.selectorEventsTextarea);
            const currentEvents = JSON.parse(eventsTextarea.value);
            const allEvents = [...currentEvents, ...newEvents];

            eventsTextarea.value = JSON.stringify(allEvents);

            return allEvents;
        }

        toggleLoadingScreen(container, show) {
            container.classList.toggle(this.classLoading, show);
        }

        openUdw(container, event) {
            event.preventDefault();

            const { currentTarget } = event;
            const config = JSON.parse(currentTarget.dataset.udwConfig);
            const title = Translator.trans(/*@Desc("Select content")*/ 'config_form.widgets.schedule.udw.title', {}, 'page_builder');

            const openUdwEvent = new CustomEvent('ez-open-udw', {
                detail: Object.assign(
                    {
                        title,
                        multiple: true,
                        onConfirm: this.confirmUdwHandler.bind(this, container),
                    },
                    config
                ),
            });

            doc.body.dispatchEvent(openUdwEvent);
        }

        openAirtimePopup(callback, airtime = this.getDefaultAirtime()) {
            const openAirtimePopupEvent = new CustomEvent('ez-open-airtime-popup', {
                detail: {
                    airtime,
                    onSubmit: callback,
                },
            });

            doc.body.dispatchEvent(openAirtimePopupEvent);
        }

        confirmUdwHandler(container, items) {
            this.openAirtimePopup(this.addItemsFromUDW.bind(this, container, items));
        }

        addItemsFromUDW(container, itemsLocations, airtime) {
            const events = itemsLocations.map((itemLocation) => {
                const itemData = {
                    locationId: itemLocation.id,
                };

                return this.createItemAddedEvent(itemData, airtime);
            });
            const allEvents = this.addNewEvents(container, events);

            this.getItemsList(container, allEvents);
        }

        /**
         *
         * @param {Number} dateTime
         * @returns {{id: String, dateTime: Number}}
         */
        getEventBasicParams(dateTime) {
            return {
                id: this.generateId('sbe-'),
                dateTime,
            };
        }

        /**
         * @returns {Number}
         */
        getDefaultAirtime() {
            const now = new Date();

            now.setSeconds(0);

            return Math.floor(now.getTime() / 1000);
        }

        createEvent(additionalParams, type, airtime = this.getDefaultAirtime()) {
            const basicEventParams = this.getEventBasicParams(airtime);

            return Object.assign({}, basicEventParams, additionalParams, { type });
        }

        createItemAddedEvent({ locationId }, additionDate) {
            const newItemData = {
                id: this.generateId('sbi-'),
                additionDate,
                location: {
                    id: locationId,
                },
            };

            return this.createEvent({ item: newItemData }, 'itemAdded', additionDate);
        }

        createItemRemovedEvent({ itemId }, dateTime) {
            return this.createEvent({ itemId }, 'itemRemoved', dateTime);
        }

        createItemsReorderedEvent({ map }, dateTime) {
            return this.createEvent({ map }, 'itemsReordered', dateTime);
        }

        createLimitChangedEvent({ limit }, dateTime) {
            return this.createEvent({ limit }, 'limitChanged', dateTime);
        }

        generateId(prefix = 'id-') {
            return [prefix, this.makeIdPiece(), this.makeIdPiece(true), this.makeIdPiece(true), this.makeIdPiece()].join('');
        }

        makeIdPiece(addDashes) {
            let piece = (Math.random().toString(16) + '000000000').substr(2, 8);

            return addDashes ? '-' + piece.substr(0, 4) + '-' + piece.substr(4, 4) : piece;
        }

        onDragStartHandler(event) {
            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.setData('text/html', event.currentTarget);

            setTimeout(() => {
                event.target.style.setProperty('display', 'none');
            }, 0);
            this.draggedItem = event.currentTarget;
        }

        onDragEndHandler() {
            this.draggedItem.style.removeProperty('display');
        }

        hidePlaceholdersAfterTimeout(container) {
            global.clearTimeout(this.onDragOverTimeout);

            this.onDragOverTimeout = global.setTimeout(() => this.removePlaceholder(container), this.timeoutRemovePlaceholders);
        }

        attachEventsToDraggableItems(container, item) {
            item.ondragstart = this.onDragStartHandler;
            item.ondragend = this.onDragEndHandler;
            item.ondrag = this.hidePlaceholdersAfterTimeout.bind(this, container);
        }

        attachEventsToActiveListBtns(container, item) {
            item.querySelector(this.selectorTrashBtn).addEventListener('click', this.removeListItem.bind(this, container, false), false);
            item.querySelector(this.selectorChangeAirtimeBtn).addEventListener('click', this.updateAirtime.bind(this, container), false);
        }

        attachEventsToQueueListBtns(container, item) {
            item.querySelector(this.selectorTrashBtn).addEventListener('click', this.removeListItem.bind(this, container, true), false);
            item.querySelector(this.selectorChangeAirtimeBtn).addEventListener('click', this.updateAirtime.bind(this, container), false);
        }

        attachEventsToLimitInput(container) {
            const limitInput = container.querySelector('#block_configuration_attributes_limit_value');

            limitInput.addEventListener('change', this.onLimitChanged.bind(this, container), false);
        }

        updateAirtime(container, event) {
            event.preventDefault();

            const itemNode = event.target.closest('[data-airtime]');
            const isUnavailable =
                itemNode.classList.contains(this.classActiveItemUnavailable) ||
                itemNode.classList.contains(this.classQueuedItemUnavailable);

            if (isUnavailable) {
                return;
            }

            const { airtime } = itemNode.dataset;

            this.openAirtimePopup(this.setAirtime.bind(this, container, event), airtime);
            eZ.helpers.tooltips.hideAll(itemNode);
        }

        setAirtime(container, event, airtime) {
            const itemNode = event.target.closest('[data-item-id]');
            const { locationId, itemId } = itemNode.dataset;
            const oldAirtime = itemNode.dataset.airtime;
            const isItemInQueue = itemNode.classList.contains('ez-schedule__queue-item');
            const removedAirtime = isItemInQueue ? oldAirtime : this.getDefaultAirtime();

            const eventRemoved = this.createItemRemovedEvent({ itemId }, removedAirtime);
            const eventAdded = this.createItemAddedEvent({ locationId }, airtime);
            const allEvents = this.addNewEvents(container, [eventRemoved, eventAdded]);

            this.getItemsList(container, allEvents);
        }

        removeListItem(container, isQueueList, event) {
            event.preventDefault();

            const listElementNode = event.currentTarget.closest('[data-item-id]');
            const { itemId, airtime } = listElementNode.dataset;
            const scheduleEvent = isQueueList ? this.createItemRemovedEvent({ itemId }, airtime) : this.createItemRemovedEvent({ itemId });
            const allEvents = this.addNewEvents(container, [scheduleEvent]);

            eZ.helpers.tooltips.hideAll(listElementNode);
            listElementNode.remove();
            this.getItemsList(container, allEvents);
        }

        removePlaceholder(container) {
            const placeholder = container.querySelector(this.selectorPlaceholder);

            if (placeholder) {
                placeholder.remove();
            }
        }

        addPlaceholder(container, element, positionY) {
            const wrapper = doc.createElement('div');
            const list = container.querySelector(this.selectorActiveList);
            const rect = element.getBoundingClientRect();
            const middlePositionY = rect.top + rect.height / 2;
            const where = positionY <= middlePositionY ? element : element.nextSibling;

            wrapper.insertAdjacentHTML('beforeend', list.dataset.placeholder);

            const placeholder = wrapper.querySelector(this.selectorPlaceholder);

            list.insertBefore(placeholder, where);
        }

        onDragOverHandler(container, event) {
            const listItem = event.target.closest(`${this.selectorActiveItem}:not(${this.selectorPlaceholder})`);

            if (!listItem) {
                return false;
            }

            this.removePlaceholder(container);
            this.addPlaceholder(container, listItem, event.clientY);
        }

        /**
         *
         * @param {HTMLElement} container
         */
        onDropHandler(container) {
            const list = container.querySelector(this.selectorActiveList);

            list.insertBefore(this.draggedItem, list.querySelector(this.selectorPlaceholder));

            this.removePlaceholder(container);
            this.onItemsReordered(container, list);
        }

        /**
         *
         * @param {HTMLElement} container
         * @param {HTMLElement} list
         */
        onItemsReordered(container, list) {
            const elementsNodes = list.querySelectorAll('.ez-schedule__active-item');
            const newOrderIdsMap = [...elementsNodes].map((elementNode) => elementNode.dataset.itemId);
            const reorderEvent = this.createItemsReorderedEvent({ map: newOrderIdsMap });
            const allEvents = this.addNewEvents(container, [reorderEvent]);

            this.getItemsList(container, allEvents);
        }

        /**
         *
         * @param {HTMLElement} container
         * @param {Event} event
         */
        onLimitChanged(container, event) {
            const { target: inputElement } = event;
            const newLimit = inputElement.value;
            const limitChangeEvent = this.createLimitChangedEvent({ limit: newLimit });
            const allEvents = this.addNewEvents(container, [limitChangeEvent]);

            this.getItemsList(container, allEvents);
        }

        renderActiveItem(container, item) {
            const { escapeHTML } = eZ.helpers.text;
            const list = container.querySelector(this.selectorActiveList);
            const template = list.dataset.activeItemTemplate;
            const isUnavailable = item.location.unavailable;
            const additionalClasses = isUnavailable ? this.classActiveItemUnavailable : '';
            const contentName = escapeHTML(item.location.contentInfo.name);
            const itemId = escapeHTML(item.id);
            const locationId = escapeHTML(item.location.id);
            const additionDate = escapeHTML(item.additionDate);
            const renderedItem = template
                .replace('{{ content_name }}', contentName)
                .replace('{{ item_id }}', itemId)
                .replace('{{ location_id }}', locationId)
                .replace('{{ airtime }}', additionDate)
                .replace('{{ additional_classes }}', additionalClasses);
            const wrapper = doc.createElement('div');

            wrapper.insertAdjacentHTML('beforeend', renderedItem);

            const listItem = wrapper.querySelector(this.selectorActiveItem);

            list.append(listItem);
        }

        renderQueueItem(container, item) {
            const { formatFullDateTime } = eZ.helpers.timezone;
            const { escapeHTML } = eZ.helpers.text;
            const formatedAdditionDate = formatFullDateTime(item.additionDate * 1000);
            const list = container.querySelector(this.selectorQueueList);
            const isUnavailable = item.location.unavailable;
            const additionalClasses = isUnavailable ? this.classQueuedItemUnavailable : '';
            const template = list.dataset.queueTemplate;
            const contentName = escapeHTML(item.location.contentInfo.name);
            const itemId = escapeHTML(item.id);
            const locationId = escapeHTML(item.location.id);
            const additionDate = escapeHTML(item.additionDate);
            const renderedItem = template
                .replace('{{ content_name }}', contentName)
                .replace('{{ item_id }}', itemId)
                .replace('{{ location_id }}', locationId)
                .replace('{{ airtime }}', additionDate)
                .replace('{{ airtime_formatted }}', formatedAdditionDate)
                .replace('{{ additional_classes }}', additionalClasses);
            const wrapper = doc.createElement('div');

            wrapper.insertAdjacentHTML('beforeend', renderedItem);

            const listItem = wrapper.querySelector(this.selectorQueueItem);

            list.append(listItem);
        }

        removeNodeChildren(node) {
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
        }

        clearItems(container) {
            const activeList = container.querySelector(this.selectorActiveList);
            const queueList = container.querySelector(this.selectorQueueList);

            this.removeNodeChildren(activeList);
            this.removeNodeChildren(queueList);
        }

        manageNoItemsLabels(container, { activeItems, queuedItems }) {
            const noActiveItems = !activeItems.length;
            const noQueuedItems = !queuedItems.length;

            container.querySelector(this.selectorNoActiveItemsInfo).classList.toggle(this.classNoActiveItemsInfoHidden, !noActiveItems);
            container.querySelector(this.selectorNoQueuedItemsInfo).classList.toggle(this.classNoQueuedItemsInfoHidden, !noQueuedItems);
        }

        renderItems(container, { active, queue }) {
            this.clearItems(container);

            this.manageNoItemsLabels(container, { activeItems: active, queuedItems: queue });

            active.forEach(this.renderActiveItem.bind(this, container));
            queue.forEach(this.renderQueueItem.bind(this, container));

            this.attachEventsToLists(container);
            this.toggleLoadingScreen(container, false);
            eZ.helpers.tooltips.parse(container);
        }

        disableDragOnActiveList(container) {
            const activeItems = container.querySelectorAll(this.selectorActiveItem);

            activeItems.forEach((activeItem) => {
                activeItem.classList.add(this.classActiveItemDragDisabled);
            });
        }

        attachEventsToLists(container) {
            const activeList = container.querySelector(this.selectorActiveList);
            const activeListItems = activeList.querySelectorAll(this.selectorActiveItem);
            const queueListItems = container.querySelectorAll(this.selectorQueueItem);

            if (activeListItems.length > 1) {
                activeList.ondragover = this.onDragOverHandler.bind(this, container);
                activeListItems.forEach(this.attachEventsToDraggableItems.bind(this, container));
            } else {
                activeList.ondragover = null;
                this.disableDragOnActiveList(container);
            }

            activeList.ondrop = this.onDropHandler.bind(this, container);
            activeListItems.forEach(this.attachEventsToActiveListBtns.bind(this, container));
            queueListItems.forEach(this.attachEventsToQueueListBtns.bind(this, container));
        }

        /**
         * Initializes the schedule field event handlers
         *
         * @method init
         */
        init() {
            const containers = doc.querySelectorAll(this.selectorContainer);

            containers.forEach((container) => {
                const openUdwBtn = container.querySelector(this.selectorOpenUdwBtn);
                const model = JSON.parse(container.dataset.model);

                this.attachEventsToLists(container);
                this.attachEventsToLimitInput(container);

                this.renderItems(container, {
                    active: model.lists.active,
                    queue: model.lists.queue,
                });

                openUdwBtn.addEventListener('click', this.openUdw.bind(this, container), false);
            });
        }
    };
})(window, document);
