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
    const fetchData = () => {
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

        reindexingTagsInput(container);
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

        const itemsWidth = [ ...items ].reduce((sum, item) => (sum += item.offsetWidth), 0);
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
    const reindexingTagsInput = (container) => {
        const { type } = container.dataset;
        const ID_PATTERN =
            type === 'attributes' ? 'recommendation_call_attributes___index__' : 'recommendation_call_context_items___index__';
        const NAME_PATTERN =
            type === 'attributes' ? 'recommendation_call[attributes][__index__]' : 'recommendation_call[context_items][__index__]';

        container.querySelectorAll(SELECTOR_TAG_INPUT).forEach((tagInput, index) => {
            tagInput.id = ID_PATTERN.replace('__index__', index);
            tagInput.name = NAME_PATTERN.replace('__index__', index);
        });
    };
    const removeTag = (event) => {
        const container = event.currentTarget.closest(SELECTOR_CONTENT_FIELD);

        event.currentTarget.closest(SELECTOR_TAG).remove();
        reindexingTagsInput(container);
    };
    const addTag = (event) => {
        const container = event.currentTarget.closest(SELECTOR_CONTENT_FIELD);
        const tagsContainer = container.querySelector(SELECTOR_TAGS_CONTAINER);
        const inputNode = container.querySelector(SELECTOR_ADD_TAG_INPUT);
        const { value } = inputNode;
        const { type, template } = container.dataset;

        if (value) {
            const renderedTemplate = template.replace('__name__', value);

            tagsContainer.insertAdjacentHTML('beforeend', renderedTemplate);
            inputNode.value = '';
            reindexingTagsInput(container);

            const lastTag = container.querySelector(`${SELECTOR_TAG}:last-child`);

            lastTag.querySelector(SELECTOR_REMOVE_TAG_BUTTON).addEventListener('click', removeTag, false);
            lastTag.querySelector('input').setAttribute('value', value);
        } else {
            const errorMessage =
                type === 'attribute'
                    ? Translator.trans(
                          /*@Desc("Fill attribute value")*/ 'scenarios.preview.add_attribute_error',
                          {},
                          'ibexa_personalization'
                      )
                    : Translator.trans(
                          /*@Desc("Fill context item value")*/ 'scenarios.preview.add_context_item_error',
                          {},
                          'ibexa_personalization'
                      );

            eZ.helpers.notification.showErrorNotification(errorMessage);
        }
    };
    const showJsonResponsePreview = (content = null) => {
        if (jsonResponsePreviewNode) {
            const { defaultJsonResponse } = jsonResponsePreviewNode.dataset;

            prettier.jsonContent = content || defaultJsonResponse;
            jsonResponsePreviewNode.innerHTML = prettier.getFormattedJson();
        }
    };

    if (sendRequestButton) {
        sendRequestButton.addEventListener('click', fetchData, false);
    }

    if (outputTypeSelect) {
        outputTypeSelect.addEventListener('change', fetchAttributtes, false);
    }

    toggleJsonResponseButtons.forEach((button) => {
        button.addEventListener('click', toggleJsonResponse, false);
    });

    galleryControlButtons.forEach((button) => {
        button.addEventListener('click', galleryControl, false);
    });

    doc.querySelectorAll(SELECTOR_ADD_TAG_BUTTON).forEach((button) => {
        button.addEventListener('click', addTag, false);
    });

    doc.querySelectorAll(SELECTOR_REMOVE_TAG_BUTTON).forEach((button) => {
        button.addEventListener('click', removeTag, false);
    });

    fitGallery();
    showJsonResponsePreview();
})(window.document, window.getComputedStyle, window.eZ, window.Routing, window.Translator);
