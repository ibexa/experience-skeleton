(function(doc, eZ, $) {
    let activeSettingsState = {
        selectedRadioName: null,
        includeParentChecked: false,
        levelsValue: null,
        categoryLevelsValue: null,
    };
    let activeModal = null;
    let sourceDraggedModel = '';
    const SELECTOR_SETTINGS_RADIO = '.ez-input--radio';
    const SELECTOR_SETTINGS_INCLUDE_PARENT = '.ez-modal__input--include-parent';
    const SELECTOR_SETTINGS_LEVELS = '.ez-modal__input--levels';
    const SELECTOR_SETTINGS_CATEGORY_LEVELS = '.ez-modal__input--category-levels';
    const modalRadioInputs = doc.querySelectorAll('.ez-modal .ez-input--radio');
    const droppedModelContainers = doc.querySelectorAll('.ez-strategy-model');
    const draggedModels = doc.querySelectorAll('.ez-action-container__available-model, .ez-strategy-model');
    const actionCheckboxes = doc.querySelectorAll('.ez-field-edit__data-group-items--action-checkbox-container .ez-input--checkbox');
    const openModalButtons = doc.querySelectorAll('.ez-strategy-models__open-modal-button');
    const discardSettingsButtons = doc.querySelectorAll('.ez-modal__discard-settings-button');
    const removeStrategyModelButtons = doc.querySelectorAll('.ez-scenario-strategy-edit__remove-model-button');
    const form = doc.querySelector('.ez-scenario-edit-form');
    const submitBtns = form.querySelectorAll('[type="submit"]:not([formnovalidate])');
    const fields = doc.querySelectorAll('.ez-field-edit');
    const onCheckboxChangeValue = (event) => {
        const { checked, dataset } = event.currentTarget;
        const container = event.currentTarget.closest('.ez-field-edit__data-group-items--action-checkbox-container');
        const inputs = container.querySelectorAll('.ez-personalization-base-item__input-field');

        if (dataset.relatedId) {
            doc.querySelectorAll(`[data-related="${dataset.relatedId}"]`).forEach((relatedCheckbox) => {
                relatedCheckbox.disabled = !checked;

                if (!checked) {
                    relatedCheckbox.checked = false;
                }
            });
        }

        inputs.forEach((input) => {
            input.disabled = !checked;
        });
    };
    const discardSettings = () => {
        const radioNode = activeModal.querySelector(`[name="${activeSettingsState.selectedRadioName}"]`);
        const includeParentCheckbox = activeModal.querySelector(SELECTOR_SETTINGS_INCLUDE_PARENT);
        const levelsInput = activeModal.querySelector(SELECTOR_SETTINGS_LEVELS);
        const categoryLevelsInput = activeModal.querySelector(SELECTOR_SETTINGS_CATEGORY_LEVELS);

        radioNode.click();

        if (includeParentCheckbox.checked !== activeSettingsState.includeParentChecked) {
            includeParentCheckbox.click();
        }

        levelsInput.value = activeSettingsState.levelsValue;
        categoryLevelsInput.value = activeSettingsState.categoryLevelsValue;
    };
    const saveSettingsState = () => {
        if (activeModal) {
            const radioNode = activeModal.querySelector(`${SELECTOR_SETTINGS_RADIO}:checked`);
            const includeParentCheckbox = activeModal.querySelector(SELECTOR_SETTINGS_INCLUDE_PARENT);
            const levelsInput = activeModal.querySelector(SELECTOR_SETTINGS_LEVELS);
            const categoryLevelsInput = activeModal.querySelector(SELECTOR_SETTINGS_CATEGORY_LEVELS);

            activeSettingsState = {
                selectedRadioName: radioNode ? radioNode.name : null,
                includeParentChecked: includeParentCheckbox.checked,
                levelsValue: levelsInput.value,
                categoryLevelsValue: categoryLevelsInput.value,
            };
        }
    };
    const openModal = (event) => {
        const { strategyModalSelector } = event.currentTarget.dataset;

        activeModal = doc.querySelector(strategyModalSelector);

        saveSettingsState();

        $(strategyModalSelector).modal('show');
    };
    const removeStrategyModel = (event) => {
        const container = event.currentTarget.closest('.ez-strategy-model');
        const iconContainer = container.querySelector('.ez-strategy-model__icon');

        iconContainer.classList.add('d-none');

        setContainerData({
            container,
            showSettings: false,
        });
    };
    const setContainerData = ({ container, dataset = {}, showSettings }) => {
        const settingsMethod = showSettings ? 'remove' : 'add';
        const submodelsSupportedMethod = dataset.submodelsSupported ? 'remove' : 'add';
        const websiteContextSupportedMethod = dataset.websiteContextSupported ? 'remove' : 'add';

        container.dataset.modelName = dataset.modelName || '';
        container.dataset.referenceCode = dataset.referenceCode || '';
        container.dataset.submodelsSupported = dataset.submodelsSupported || '';
        container.dataset.websiteContextSupported = dataset.websiteContextSupported || '';
        container.querySelector('.ez-strategy-model__name').innerHTML = dataset.modelName || '';
        container.querySelector('.ez-strategy-model__reference-code-input').setAttribute('value', dataset.referenceCode || '');
        container.querySelector('.ez-strategy-model__settings').classList[settingsMethod]('d-none');
        container.querySelector('.ez-strategy-model__use-submodels-container').classList[submodelsSupportedMethod]('d-none');
        container.querySelector('.ez-strategy-model__select-context-container').classList[websiteContextSupportedMethod]('d-none');
    };
    const onDragOver = (event) => {
        event.preventDefault();
    };
    const onDropModel = (event) => {
        const container = event.currentTarget;
        const { type, modelName, referenceCode, submodelsSupported, websiteContextSupported } = sourceDraggedModel.dataset;
        const referenceCodeInput = container.querySelector('.ez-strategy-model__reference-code-input');

        if (modelName) {
            if (!referenceCodeInput.value) {
                const sourceDragIconContainer = sourceDraggedModel.querySelector('.ez-strategy-model__icon');
                const targetDragIconContainer = container.querySelector('.ez-strategy-model__icon');

                if (sourceDragIconContainer) {
                    sourceDragIconContainer.classList.add('d-none');
                }

                container.classList.add('ez-strategy-model--dragged-success');
                targetDragIconContainer.classList.remove('d-none');

                setContainerData({
                    container,
                    dataset: sourceDraggedModel.dataset,
                    showSettings: true,
                });

                if (type === 'existing') {
                    setContainerData({
                        container: sourceDraggedModel,
                        showSettings: false,
                    });
                }

                setTimeout(() => {
                    container.classList.remove('ez-strategy-model--dragged-success');
                }, 300);
            } else {
                container.classList.add('ez-strategy-model--dragged-fail');

                setTimeout(() => {
                    container.classList.remove('ez-strategy-model--dragged-fail');
                }, 300);
            }
        }
    };
    const onDragStart = (event) => {
        sourceDraggedModel = event.currentTarget;
    };
    const onRadioClick = (event) => {
        const radiosContainer = event.currentTarget.closest('.ez-modal__inputs');

        radiosContainer.querySelectorAll('.ez-input--radio').forEach((radio) => {
            const radioRow = radio.closest('.ez-modal__row-input');
            const radioSubRows = radioRow.querySelectorAll('.ez-modal__sub-row-input');

            if (!radio.isEqualNode(event.currentTarget)) {
                radio.checked = false;

                radioSubRows.forEach((row) => {
                    row.classList.add('ez-modal__sub-row-input--inactive');
                });
            } else {
                radioSubRows.forEach((row) => {
                    row.classList.remove('ez-modal__sub-row-input--inactive');
                });
            }
        });
    };
    const getValidationResults = (validator) => {
        const isValid = validator.isValid();
        const validatorName = validator.constructor.name;
        const result = { isValid, validatorName };

        return result;
    };
    const getInvalidTabs = (validator) => {
        return validator.fieldsToValidate.reduce((invalidTabs, field) => {
            const tabPane = field.item.closest('.tab-pane');

            if (tabPane && field.item.classList.contains('is-invalid')) {
                invalidTabs.add(tabPane.id);
            }

            return invalidTabs;
        }, new Set());
    };
    const onSubmitClick = (event) => {
        const btn = event.currentTarget;

        if (parseInt(btn.dataset.isFormValid, 10)) {
            return;
        }

        event.preventDefault();

        const validators = eZ.fieldTypeValidators;
        const validationResults = validators.map(getValidationResults);
        const isFormValid = validationResults.every((result) => result.isValid);
        const invalidTabs = validators.map(getInvalidTabs);

        if (isFormValid) {
            btn.dataset.isFormValid = 1;
            // for some reason trying to fire click event inside the event handler flow is impossible
            // the following line breaks the flow so it's possible to fire click event on a button again.
            window.setTimeout(() => btn.click(), 0);
        } else {
            btn.dataset.validatorsWithErrors = Array.from(
                validationResults.filter((result) => !result.isValid).reduce((total, result) => {
                    total.add(result.validatorName);

                    return total;
                }, new Set())
            ).join();

            fields.forEach((field) => field.removeAttribute('id'));

            doc.querySelectorAll('.ez-tabs__nav-item').forEach((navItem) => {
                navItem.classList.remove('ez-tabs__nav-item--invalid');
            });

            invalidTabs.forEach((invalidInputs) => {
                invalidInputs.forEach((invalidInputKey) => {
                    doc.querySelector(`#item-${invalidInputKey}`).classList.add('ez-tabs__nav-item--invalid');
                });
            });
        }
    };

    openModalButtons.forEach((button) => {
        button.addEventListener('click', openModal, false);
    });

    discardSettingsButtons.forEach((button) => {
        button.addEventListener('click', discardSettings, false);
    }, false);

    modalRadioInputs.forEach((radio) => {
        radio.addEventListener('click', onRadioClick, false);
    });

    draggedModels.forEach((model) => {
        model.addEventListener('dragstart', onDragStart, false);
    });

    removeStrategyModelButtons.forEach((button) => {
        button.addEventListener('click', removeStrategyModel, false);
    });

    actionCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', onCheckboxChangeValue, false);
    });

    droppedModelContainers.forEach((container) => {
        container.addEventListener('drop', onDropModel, false);
        container.addEventListener('dragover', onDragOver, false);
    });

    submitBtns.forEach((btn) => {
        btn.dataset.isFormValid = 0;
        btn.addEventListener('click', onSubmitClick, false);
    });
})(window.document, window.eZ, window.jQuery);
