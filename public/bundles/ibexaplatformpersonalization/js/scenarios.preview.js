import { JsonPrettier } from './json.prettier';

(function(doc, getComputedStyle, eZ, Routing, Translator) {
    let galleryItemsDiffContainerSize = 0;
    const GALLERY_ITEM_WIDTH = 276;
    const CLASS_JSON_RESPONSE_HIDE = 'ez-scenario-preview__json-response-container--hide';
    const SELECTOR_CONTENT_FIELD = '.ez-scenario-preview__field';
    const SELECTOR_GALLERY_ITEM_CONTAINER = '.ez-scenario-preview__gallery-item-container';
    const SELECTOR_TAGS_CONTAINER = '.ez-scenario-preview__tags';
    const SELECTOR_TAG = '.ez-scenario-preview__tag';
    const SELECTOR_ADD_TAG_INPUT = '.ez-scenario-preview__input--add-tag';
    const SELECTOR_ADD_TAG_BUTTON = '.ez-scenario-preview__add-tag-button';
    const SELECTOR_TAG_INPUT = '.ez-scenario-preview__tag-input';
    const SELECTOR_REMOVE_TAG_BUTTON = '.ez-tag__remove-btn';
    const SELECTOR_GALLERY_MESSAGE_REASON = '.ez-scenario-preview__gallery-message-reason';
    const SELECTOR_CATEGORY_PATH_INPUT = '.ez-input--category-path';
    const token = doc.querySelector('meta[name="CSRF-Token"]').content;
    const siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
    const prettier = new JsonPrettier();
    const { getJsonFromResponse } = eZ.helpers.request;
    const { scenarioName } = doc.querySelector('.ez-scenario-preview__container--recomendation-response').dataset;
    const toggleJsonResponseButtons = doc.querySelectorAll('.ez-scenario-preview__json-response-button');
    const jsonResponsePreviewContainer = doc.querySelector('.ez-scenario-preview__json-response-container');
    const generatedUrlNode = doc.querySelector('.ez-scenario-preview__field-value--generated-url');
    const sendRequestButton = doc.querySelector('.ez-scenario-preview__send-request');
    const galleryControlButtons = doc.querySelectorAll('.ez-scenario-preview__gallery-control-button');
    const galleryContentNode = doc.querySelector('.ez-scenario-preview__gallery-content');
    const galleryMessageNode = doc.querySelector('.ez-scenario-preview__gallery-message');
    const jsonResponsePreviewNode = doc.querySelector('.ez-scenario-preview__json-response-content');
    const outputTypeSelect = doc.querySelector('select[name="recommendation_call[output_type]"]');
    const udwContainer = doc.getElementById('react-udw');
    const addCategoryPathButton = doc.querySelector('.ez-btn--add-path-udw');
    const addContextItemsButton = doc.querySelector('.ez-btn--add-context-items-udw');
    const validators = eZ.fieldTypeValidators;
    const getValidationResults = (validator) => {
        const isValid = validator.isValid();
        const validatorName = validator.constructor.name;
        const result = { isValid, validatorName };

        return result;
    };
    const fetchData = () => {
        const validationResults = validators.map(getValidationResults);
        const isFormValid = validationResults.every((result) => result.isValid);

        if (isFormValid) {
            const form = doc.querySelector('.ez-scenario-preview__container--recomendation-call .ez-personalization-base-item__form');
            const formData = new FormData(form);
            const request = new Request(Routing.generate('ibexa.personalization.recommendation.preview', { name: scenarioName }), {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    Accept: 'application/json',
                },
                body: formData,
            });

            fetch(request).then(getJsonFromResponse).then(setDynamicContent).catch(eZ.helpers.notification.showErrorNotification);
        }
    };
    const fetchAttributtes = (event) => {
        const { value } = event.currentTarget;
        const request = new Request(Routing.generate('ibexa.personalization.output_type.attributes', { itemTypeId: value }), {
            method: 'GET',
        });

        fetch(request).then(getJsonFromResponse).then(setAttributes).catch(eZ.helpers.notification.showErrorNotification);
    };
    const setAttributes = (data) => {
        const container = doc.querySelector('.ez-scenario-preview__field--attributes');
        const tagsContainer = container.querySelector(SELECTOR_TAGS_CONTAINER);
        const { template } = container.dataset;

        tagsContainer.innerHTML = '';

        if (data.length) {
            data.forEach((name) => {
                const renderedTemplate = template.replace('__name__', name);

                tagsContainer.insertAdjacentHTML('beforeend', renderedTemplate);

                const lastTag = container.querySelector(`${SELECTOR_TAG}:last-child`);

                lastTag.querySelector(SELECTOR_REMOVE_TAG_BUTTON).addEventListener('click', removeTag, false);
                lastTag.querySelector('input').setAttribute('value', name);
            });
        }
    };
    const setDynamicContent = (data) => {
        const galleryItemTemplate = galleryContentNode.dataset.itemTemplate;
        const errorMessage = data.errorMessage || '';

        generatedUrlNode.innerHTML = data.requestUrl;
        galleryContentNode.innerHTML = '';

        if (data.previewRecommendationItemList) {
            data.previewRecommendationItemList.forEach(({ title, description, image }) => {
                const renderedGalleryItem = galleryItemTemplate
                    .replace('{{ image }}', image)
                    .replace('{{ title }}', title)
                    .replace('{{ description }}', description);

                galleryContentNode.insertAdjacentHTML('beforeend', renderedGalleryItem);
            });
        }

        galleryMessageNode.querySelector(SELECTOR_GALLERY_MESSAGE_REASON).innerHTML = errorMessage;
        showJsonResponsePreview(data.response);
        fitGallery();
        window.scrollTo({ top: 0 });
    };
    const fitGallery = () => {
        const contentWidth = galleryContentNode.offsetWidth;
        const items = doc.querySelectorAll(SELECTOR_GALLERY_ITEM_CONTAINER);
        const contentMethod = items.length ? 'remove' : 'add';
        const messageMethod = items.length ? 'add' : 'remove';

        galleryContentNode.classList[contentMethod]('d-none');
        galleryMessageNode.classList[messageMethod]('d-none');

        const itemsWidth = [...items].reduce((sum, item) => (sum += item.offsetWidth), 0);
        const buttonMethod = itemsWidth > contentWidth ? 'remove' : 'add';

        galleryControlButtons.forEach((button) => {
            button.classList[buttonMethod]('d-none');
        });
        galleryItemsDiffContainerSize = itemsWidth - contentWidth;
    };
    const toggleJsonResponse = () => {
        toggleJsonResponseButtons.forEach((button) => {
            button.classList.toggle('d-none');
        });
        jsonResponsePreviewContainer.classList.toggle(CLASS_JSON_RESPONSE_HIDE);
    };
    const galleryControl = (event) => {
        let marginLeftAfterAction = 0;
        const { direction } = event.currentTarget.dataset;
        const firstGalleryItem = doc.querySelector(`${SELECTOR_GALLERY_ITEM_CONTAINER}:first-child`);
        const { marginLeft } = getComputedStyle(firstGalleryItem);

        if (direction === 'forward') {
            if (Math.abs(parseInt(marginLeft, 10)) < galleryItemsDiffContainerSize) {
                marginLeftAfterAction = parseInt(marginLeft, 10) - GALLERY_ITEM_WIDTH;
            }
        } else {
            if (parseInt(marginLeft, 10) < 0) {
                marginLeftAfterAction = parseInt(marginLeft, 10) + GALLERY_ITEM_WIDTH;
            }
        }

        firstGalleryItem.style.marginLeft = `${marginLeftAfterAction}px`;
    };
    const removeTag = (event) => {
        const container = event.currentTarget.closest(SELECTOR_CONTENT_FIELD);
        const tagsContainer = container.querySelector(SELECTOR_TAGS_CONTAINER);
        const tag = event.currentTarget.closest(SELECTOR_TAG);
        const { inputSelector } = tag.dataset;
        const categoryPathInput = container.querySelector(SELECTOR_CATEGORY_PATH_INPUT);

        if (inputSelector) {
            const input = tagsContainer.querySelector(inputSelector);

            input.remove();
        }

        tag.remove();

        if (categoryPathInput) {
            categoryPathInput.setAttribute('value', '');
        }
    };
    const addTag = ({ label, value, container }) => {
        let tagIndex = 0;
        const { inputTemplate, tagTemplate } = container.dataset;
        const tagsContainer = container.querySelector(SELECTOR_TAGS_CONTAINER);
        const lastTagInput = tagsContainer.querySelector(`${SELECTOR_TAG_INPUT}:last-of-type`);

        if (inputTemplate) {
            if (lastTagInput) {
                tagIndex = parseInt(lastTagInput.name.replace(/[^0-9]/g, ''), 10) + 1;
            }

            const renderedInputTemplate = inputTemplate.replaceAll('__name__', tagIndex);

            tagsContainer.insertAdjacentHTML('beforeend', renderedInputTemplate);
        }

        if (tagTemplate) {
            const renderedTagTemplate = tagTemplate.replace('{{ content }}', label);

            tagsContainer.insertAdjacentHTML('beforeend', renderedTagTemplate);
        }

        const lastTagAfterInsert = tagsContainer.querySelector(`${SELECTOR_TAG}:last-child`);
        const lastTagInputAfterInsert = tagsContainer.querySelector(`${SELECTOR_TAG_INPUT}:last-of-type`);

        lastTagAfterInsert.querySelector(SELECTOR_REMOVE_TAG_BUTTON).addEventListener('click', removeTag, false);

        if (lastTagInputAfterInsert) {
            lastTagAfterInsert.dataset.inputSelector = `#${lastTagInputAfterInsert.id}`;
            lastTagInputAfterInsert.setAttribute('value', value);
        }
    };
    const addRecomendationCallAttribute = (event) => {
        const button = event.currentTarget;
        const container = button.closest(SELECTOR_CONTENT_FIELD);
        const input = container.querySelector(SELECTOR_ADD_TAG_INPUT);

        if (input.value) {
            addTag({
                label: input.value,
                value: input.value,
                container,
            });
        } else {
            eZ.helpers.notification.showErrorNotification(
                Translator.trans(/*@Desc("Fill attribute value")*/ 'scenarios.preview.add_attribute_error', {}, 'ibexa_personalization')
            );
        }

        input.value = '';
    };
    const showJsonResponsePreview = (content = null) => {
        if (jsonResponsePreviewNode) {
            const { defaultJsonResponse } = jsonResponsePreviewNode.dataset;

            prettier.jsonContent = content || defaultJsonResponse;
            jsonResponsePreviewNode.innerHTML = prettier.getFormattedJson();
        }
    };
    const onConfirmContexItems = (button, items) => {
        const container = button.closest(SELECTOR_CONTENT_FIELD);

        closeUDW();
        items.forEach((item) => {
            const contentName = eZ.helpers.text.escapeHTML(item.ContentInfo.Content.Name);
            const contentId = item.ContentInfo.Content._id;
            const alreadySelectedItem = container.querySelector(`${SELECTOR_TAG_INPUT}[value="${contentId}"]`);

            if (!alreadySelectedItem) {
                addTag({
                    label: contentName,
                    value: contentId,
                    container,
                });
            }
        });
    };
    const onConfirmCategoryPath = (button, items) => {
        const container = button.closest(SELECTOR_CONTENT_FIELD);
        const pathString = items[0].pathString;

        closeUDW();
        container.querySelector(SELECTOR_CATEGORY_PATH_INPUT).setAttribute('value', pathString);
        findLocationsByIdList(removeRootFromPathString(pathString), (data) => {
            const existingTag = container.querySelector(SELECTOR_TAG);

            if (existingTag) {
                existingTag.remove();
            }

            addTag({
                label: buildCategoryPathTagLabel(data),
                container,
            });
        });
    };
    const onCancel = () => closeUDW();
    const closeUDW = () => ReactDOM.unmountComponentAtNode(udwContainer);
    const openUDW = (event, confirmCallback) => {
        event.preventDefault();

        const config = JSON.parse(event.currentTarget.dataset.udwConfig);
        const { udwTitle } = event.currentTarget.dataset;

        ReactDOM.render(
            React.createElement(eZ.modules.UniversalDiscovery, {
                title: udwTitle,
                onConfirm: confirmCallback.bind(null, event.currentTarget),
                onCancel,
                ...config,
            }),
            udwContainer
        );
    };
    const removeRootFromPathString = (pathString) => {
        const pathArray = pathString.split('/').filter((val) => val);

        return pathArray.splice(1, pathArray.length - 1);
    };
    const buildCategoryPathTagLabel = (viewData) => {
        const searchHitList = viewData.View.Result.searchHits.searchHit;

        return searchHitList
            .map((searchHit) => eZ.helpers.text.escapeHTML(searchHit.value.Location.ContentInfo.Content.TranslatedName))
            .join(' / ');
    };
    const findLocationsByIdList = (idList, callback) => {
        const body = JSON.stringify({
            ViewInput: {
                identifier: `udw-locations-by-path-string-${idList.join('-')}`,
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
            'universal_discovery_widget'
        );

        fetch(request)
            .then(eZ.helpers.request.getJsonFromResponse)
            .then(callback)
            .catch(() => eZ.helpers.notification.showErrorNotification(errorMessage));
    };

    if (sendRequestButton) {
        sendRequestButton.addEventListener('click', fetchData, false);
    }

    if (outputTypeSelect) {
        outputTypeSelect.addEventListener('change', fetchAttributtes, false);
    }

    if (addCategoryPathButton) {
        addCategoryPathButton.addEventListener('click', (event) => openUDW(event, onConfirmCategoryPath), false);
    }

    if (addContextItemsButton) {
        addContextItemsButton.addEventListener('click', (event) => openUDW(event, onConfirmContexItems), false);
    }

    toggleJsonResponseButtons.forEach((button) => {
        button.addEventListener('click', toggleJsonResponse, false);
    });

    galleryControlButtons.forEach((button) => {
        button.addEventListener('click', galleryControl, false);
    });

    doc.querySelectorAll(SELECTOR_ADD_TAG_BUTTON).forEach((button) => {
        button.addEventListener('click', addRecomendationCallAttribute, false);
    });

    doc.querySelectorAll(SELECTOR_REMOVE_TAG_BUTTON).forEach((button) => {
        button.addEventListener('click', removeTag, false);
    });

    fitGallery();
    showJsonResponsePreview();
})(window.document, window.getComputedStyle, window.eZ, window.Routing, window.Translator);
