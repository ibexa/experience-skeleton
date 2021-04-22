(function(global, doc, eZ, Translator) {
    const segmentations = doc.querySelectorAll('.ez-segmentation');
    const token = doc.querySelector('meta[name="CSRF-Token"]').content;
    const siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
    const updateInputValue = (itemsContainer) => {
        const inputValue = [...itemsContainer.querySelectorAll('.ez-segmentation__item')].map((item) => {
            const categorySelect = item.querySelector('.ez-segmentation__select--category');
            const groupId = categorySelect.value;
            const categoryName = categorySelect.querySelector(`[value="${groupId}"]`).innerHTML;
            const segmentSelect = item.querySelector('.ez-segmentation__select--segment');
            const segmentId = segmentSelect.value;
            const segmentName = segmentSelect.querySelector(`[value="${segmentId}"]`).innerHTML;
            const contentTitle = item.querySelector('.ez-segmentation__content-title');
            const locationId = contentTitle.dataset.locationId;
            const locationName = contentTitle.innerHTML;
            const locationBreadcrumbs = item.querySelector('.ez-segmentation__content-breadcrumbs').innerHTML;

            return {
                group: { id: parseInt(groupId, 10), name: categoryName },
                segment: { id: parseInt(segmentId, 10), name: segmentName },
                content: { locationId: parseInt(locationId, 10), name: locationName, breadcrumbs: locationBreadcrumbs },
            };
        });

        itemsContainer.closest('.ez-data-source').querySelector('.ez-data-source__input').value = JSON.stringify(inputValue);
    };
    const removeRootFromPathString = (pathString) => {
        const pathArray = pathString.split('/').filter((val) => val);

        return pathArray.splice(1, pathArray.length - 2);
    };
    const findLocationsByIdList = (idList, callback) => {
        const body = JSON.stringify({
            ViewInput: {
                identifier: `locations-by-path-string-${idList.join('-')}`,
                public: false,
                LocationQuery: {
                    FacetBuilders: {},
                    SortClauses: { SectionIdentifier: 'ascending' },
                    Filter: { LocationIdCriterion: idList.join(',') },
                    limit: 50,
                    offset: 0,
                },
            },
        });
        const request = new Request('/api/ezp/v2/views', {
            method: 'POST',
            headers: {
                Accept: 'application/vnd.ez.api.View+json; version=1.1',
                'Content-Type': 'application/vnd.ez.api.ViewInput+json; version=1.1',
                'X-Requested-With': 'XMLHttpRequest',
                'X-Siteaccess': siteaccess,
                'X-CSRF-Token': token,
            },
            body,
            mode: 'same-origin',
            credentials: 'same-origin',
        });
        const errorMessage = Translator.trans(
            /*@Desc("Cannot find children Locations with ID %idList%")*/ 'select_location.error',
            { idList: idList.join(',') },
            'page_builder'
        );

        fetch(request)
            .then(eZ.helpers.request.getJsonFromResponse)
            .then((data) => {
                callback(data.View.Result.searchHits.searchHit);
            })
            .catch(() => eZ.helpers.notification.showErrorNotification(errorMessage));
    };
    const openUdw = (itemsContainer, draggable, event) => {
        event.preventDefault();

        const { currentTarget } = event;
        const config = JSON.parse(currentTarget.dataset.udwConfig);
        const title = Translator.trans(/*@Desc("Select content")*/ 'config_form.widgets.segmentation.udw.title', {}, 'page_builder');
        const openUdwEvent = new CustomEvent('ez-open-udw', {
            detail: Object.assign(
                {
                    title,
                    onConfirm: selectContent.bind(this, itemsContainer, currentTarget),
                },
                config
            ),
        });

        doc.body.dispatchEvent(openUdwEvent);
    };
    const selectContent = (itemsContainer, openUdwButton, items) => {
        const selectedContent = items[0];
        const contentInfoWrapper = openUdwButton
            .closest('.ez-segmentation__content-wrapper')
            .querySelector('.ez-segmentation__content-info');
        const contentTitle = contentInfoWrapper.querySelector('.ez-segmentation__content-title');

        openUdwButton.setAttribute('hidden', 'hidden');

        contentTitle.innerHTML = selectedContent.ContentInfo.Content.TranslatedName;
        contentTitle.dataset.locationId = selectedContent.id;

        findLocationsByIdList(removeRootFromPathString(selectedContent.pathString), (locations) => {
            const breadcrumbs = locations.map((location) => location.value.Location.ContentInfo.Content.TranslatedName).join(' / ');

            contentInfoWrapper.querySelector('.ez-segmentation__content-breadcrumbs').innerHTML = breadcrumbs || '&nbsp;';

            updateInputValue(itemsContainer);
        });

        contentInfoWrapper.classList.remove('ez-segmentation__content-info--hidden');
    };
    const attachEventsToItem = (itemsContainer, listItem, openUdwButton, draggable) => {
        listItem.querySelector('.ez-btn--add').addEventListener(
            'click',
            () => {
                renderItem(itemsContainer, draggable, {});
                itemsContainer.querySelector('.ez-btn--trash').removeAttribute('disabled');
                updateInputValue(itemsContainer);
            },
            false
        );
        listItem.querySelector('.ez-btn--remove-content').addEventListener(
            'click',
            () => {
                const contentTitle = listItem.querySelector('.ez-segmentation__content-title');

                openUdwButton.removeAttribute('hidden');
                listItem.querySelector('.ez-segmentation__content-info').classList.add('ez-segmentation__content-info--hidden');

                contentTitle.dataset.locationId = '';
                contentTitle.innerHTML = '';
                listItem.querySelector('.ez-segmentation__content-breadcrumbs').innerHTML = '';

                updateInputValue(itemsContainer);
            },
            false
        );
        listItem.querySelector('.ez-btn--trash').addEventListener(
            'click',
            () => {
                if (itemsContainer.querySelectorAll('.ez-segmentation__item').length > 1) {
                    listItem.remove();
                }

                if (itemsContainer.querySelectorAll('.ez-segmentation__item').length === 1) {
                    itemsContainer.querySelector('.ez-btn--trash').setAttribute('disabled', 'disabled');
                }

                updateInputValue(itemsContainer);
            },
            false
        );
    };
    const getSegmentationsConfig = (itemsContainer) => {
        const segmentationsConfig = JSON.parse(
            itemsContainer.closest('.ez-data-source').querySelector('.ez-data-source__input').dataset.segments
        );

        return segmentationsConfig.filter((group) => group.segments.length);
    };
    const renderItem = (itemsContainer, draggable, itemData) => {
        const template = itemsContainer.dataset.template;
        const container = doc.createElement('ol');
        const segmentationsConfig = getSegmentationsConfig(itemsContainer);
        const itemConfig =
            segmentationsConfig.find((category) => itemData.group && category.id === itemData.group.id) || segmentationsConfig[0];

        container.insertAdjacentHTML('beforeend', template);

        const listItem = container.querySelector('.ez-segmentation__item');
        const openUdwButton = listItem.querySelector('.ez-btn--select-content');

        openUdwButton.addEventListener('click', openUdw.bind(this, itemsContainer, draggable), false);

        renderCategorySelect(itemsContainer, listItem, segmentationsConfig, itemConfig);
        renderSegmentSelect(itemsContainer, listItem, itemConfig, itemData);

        if (itemData.content && itemData.content.locationId) {
            const contentInfoWrapper = openUdwButton
                .closest('.ez-segmentation__content-wrapper')
                .querySelector('.ez-segmentation__content-info');
            const contentTitle = contentInfoWrapper.querySelector('.ez-segmentation__content-title');

            openUdwButton.setAttribute('hidden', 'hidden');

            contentTitle.innerHTML = itemData.content.name;
            contentTitle.dataset.locationId = itemData.content.locationId;
            contentInfoWrapper.querySelector('.ez-segmentation__content-breadcrumbs').innerHTML = itemData.content.breadcrumbs;
            contentInfoWrapper.classList.remove('ez-segmentation__content-info--hidden');
        }

        attachEventsToItem(itemsContainer, listItem, openUdwButton, draggable);

        itemsContainer.append(listItem);

        draggable.reinit();
    };
    const renderCategorySelect = (itemsContainer, listItem, config, itemConfig) => {
        const categorySelect = listItem.querySelector('.ez-segmentation__select--category');
        const categorySelectFragment = doc.createDocumentFragment();

        config.forEach((category) => {
            const option = `<option value="${category.id}">${category.name}</option>`;
            const select = doc.createElement('select');

            select.insertAdjacentHTML('beforeend', option);

            categorySelectFragment.appendChild(select.querySelector('option'));
        });

        categorySelect.appendChild(categorySelectFragment);
        categorySelect.value = itemConfig.id;

        categorySelect.addEventListener('change', (event) => {
            const categoryConfig = config.find((category) => category.id === parseInt(event.currentTarget.value, 10));

            renderSegmentSelect(itemsContainer, listItem, categoryConfig, {});
            updateInputValue(itemsContainer);
        });
    };
    const renderSegmentSelect = (itemsContainer, listItem, itemConfig, itemData) => {
        const segmentSelect = listItem.querySelector('.ez-segmentation__select--segment');
        const segmentSelectFragment = doc.createDocumentFragment();

        itemConfig.segments.forEach((segment) => {
            const option = `<option value="${segment.id}">${segment.name}</option>`;
            const select = doc.createElement('select');

            select.insertAdjacentHTML('beforeend', option);

            segmentSelectFragment.appendChild(select.querySelector('option'));
        });

        segmentSelect.innerHTML = '';
        segmentSelect.appendChild(segmentSelectFragment);
        segmentSelect.value = itemData.segment ? itemData.segment.id : itemConfig.segments[0].id;

        segmentSelect.addEventListener('change', updateInputValue.bind(this, itemsContainer));
    };

    class SegmentationDraggable extends global.eZ.core.Draggable {
        constructor(config) {
            super(config);
        }

        onDrop() {
            super.onDrop();

            updateInputValue(this.itemsContainer);
        }
    }

    segmentations.forEach((segmentation) => {
        const itemsContainer = segmentation.querySelector('.ez-segmentation__items');
        const draggable = new SegmentationDraggable({
            itemsContainer,
            selectorItem: '.ez-segmentation__item',
            selectorPlaceholder: '.ez-segmentation__item--placeholder',
        });
        const sourceInput = itemsContainer.closest('.ez-data-source').querySelector('.ez-data-source__input');
        const inputValue = sourceInput.value ? JSON.parse(sourceInput.value) : [];
        const items = inputValue.length ? inputValue : [{}];
        const segmentationsConfig = JSON.parse(sourceInput.dataset.segments);
        const allSegmentGroupsEmpty = segmentationsConfig.every((group) => group.segments.length === 0);

        if (!segmentationsConfig.length || allSegmentGroupsEmpty) {
            const noConfigurationMessage = Translator.trans(
                /*@Desc("No segments defined. Create Segments in the Admin panel to use this block.")*/ 'targeted_content_map.no_configuration',
                {},
                'page_builder'
            );
            const item = `<li class="ez-segmentation__item ez-segmentation__item--no-configuration">${noConfigurationMessage}</li>`;

            itemsContainer.insertAdjacentHTML('beforeend', item);

            return;
        }

        draggable.init();

        items.forEach((item) => renderItem(itemsContainer, draggable, item));
        updateInputValue(itemsContainer);
    });
})(window, window.document, window.eZ, window.Translator);
