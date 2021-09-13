(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-personalization-scenarios-edit-js"],{

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.edit.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.edit.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (doc, eZ, $) {
  var activeSettingsState = {
    selectedRadioName: null,
    includeParentChecked: false,
    levelsValue: null,
    categoryLevelsValue: null
  };
  var activeModal = null;
  var sourceDraggedModel = '';
  var SELECTOR_SETTINGS_RADIO = '.ez-input--radio';
  var SELECTOR_SETTINGS_INCLUDE_PARENT = '.ez-modal__input--include-parent';
  var SELECTOR_SETTINGS_LEVELS = '.ez-modal__input--levels';
  var SELECTOR_SETTINGS_CATEGORY_LEVELS = '.ez-modal__input--category-levels';
  var modalRadioInputs = doc.querySelectorAll('.ez-modal .ez-input--radio');
  var droppedModelContainers = doc.querySelectorAll('.ez-strategy-model');
  var draggedModels = doc.querySelectorAll('.ez-action-container__available-model, .ez-strategy-model');
  var actionCheckboxes = doc.querySelectorAll('.ez-field-edit__data-group-items--action-checkbox-container .ez-input--checkbox');
  var openModalButtons = doc.querySelectorAll('.ez-strategy-models__open-modal-button');
  var discardSettingsButtons = doc.querySelectorAll('.ez-modal__discard-settings-button');
  var removeStrategyModelButtons = doc.querySelectorAll('.ez-scenario-strategy-edit__remove-model-button');
  var form = doc.querySelector('.ez-scenario-edit-form');
  var submitBtns = form.querySelectorAll('[type="submit"]:not([formnovalidate])');
  var fields = doc.querySelectorAll('.ez-field-edit');

  var onCheckboxChangeValue = function onCheckboxChangeValue(event) {
    var _event$currentTarget = event.currentTarget,
        checked = _event$currentTarget.checked,
        dataset = _event$currentTarget.dataset;
    var container = event.currentTarget.closest('.ez-field-edit__data-group-items--action-checkbox-container');
    var inputs = container.querySelectorAll('.ez-personalization-base-item__input-field');

    if (dataset.relatedId) {
      doc.querySelectorAll("[data-related=\"".concat(dataset.relatedId, "\"]")).forEach(function (relatedCheckbox) {
        relatedCheckbox.disabled = !checked;

        if (!checked) {
          relatedCheckbox.checked = false;
        }
      });
    }

    inputs.forEach(function (input) {
      input.disabled = !checked;
    });
  };

  var discardSettings = function discardSettings() {
    var radioNode = activeModal.querySelector("[name=\"".concat(activeSettingsState.selectedRadioName, "\"]"));
    var includeParentCheckbox = activeModal.querySelector(SELECTOR_SETTINGS_INCLUDE_PARENT);
    var levelsInput = activeModal.querySelector(SELECTOR_SETTINGS_LEVELS);
    var categoryLevelsInput = activeModal.querySelector(SELECTOR_SETTINGS_CATEGORY_LEVELS);
    radioNode.click();

    if (includeParentCheckbox.checked !== activeSettingsState.includeParentChecked) {
      includeParentCheckbox.click();
    }

    levelsInput.value = activeSettingsState.levelsValue;
    categoryLevelsInput.value = activeSettingsState.categoryLevelsValue;
  };

  var saveSettingsState = function saveSettingsState() {
    if (activeModal) {
      var radioNode = activeModal.querySelector("".concat(SELECTOR_SETTINGS_RADIO, ":checked"));
      var includeParentCheckbox = activeModal.querySelector(SELECTOR_SETTINGS_INCLUDE_PARENT);
      var levelsInput = activeModal.querySelector(SELECTOR_SETTINGS_LEVELS);
      var categoryLevelsInput = activeModal.querySelector(SELECTOR_SETTINGS_CATEGORY_LEVELS);
      activeSettingsState = {
        selectedRadioName: radioNode ? radioNode.name : null,
        includeParentChecked: includeParentCheckbox.checked,
        levelsValue: levelsInput.value,
        categoryLevelsValue: categoryLevelsInput.value
      };
    }
  };

  var openModal = function openModal(event) {
    var strategyModalSelector = event.currentTarget.dataset.strategyModalSelector;
    activeModal = doc.querySelector(strategyModalSelector);
    saveSettingsState();
    $(strategyModalSelector).modal('show');
  };

  var removeStrategyModel = function removeStrategyModel(event) {
    var container = event.currentTarget.closest('.ez-strategy-model');
    var iconContainer = container.querySelector('.ez-strategy-model__icon');
    iconContainer.classList.add('d-none');
    setContainerData({
      container: container,
      showSettings: false
    });
  };

  var setContainerData = function setContainerData(_ref) {
    var container = _ref.container,
        _ref$dataset = _ref.dataset,
        dataset = _ref$dataset === void 0 ? {} : _ref$dataset,
        showSettings = _ref.showSettings;
    var settingsMethod = showSettings ? 'remove' : 'add';
    var submodelsSupportedMethod = dataset.submodelsSupported ? 'remove' : 'add';
    var websiteContextSupportedMethod = dataset.websiteContextSupported ? 'remove' : 'add';
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

  var onDragOver = function onDragOver(event) {
    event.preventDefault();
  };

  var onDropModel = function onDropModel(event) {
    var container = event.currentTarget;
    var _sourceDraggedModel$d = sourceDraggedModel.dataset,
        type = _sourceDraggedModel$d.type,
        modelName = _sourceDraggedModel$d.modelName,
        referenceCode = _sourceDraggedModel$d.referenceCode,
        submodelsSupported = _sourceDraggedModel$d.submodelsSupported,
        websiteContextSupported = _sourceDraggedModel$d.websiteContextSupported;
    var referenceCodeInput = container.querySelector('.ez-strategy-model__reference-code-input');

    if (modelName) {
      if (!referenceCodeInput.value) {
        var sourceDragIconContainer = sourceDraggedModel.querySelector('.ez-strategy-model__icon');
        var targetDragIconContainer = container.querySelector('.ez-strategy-model__icon');

        if (sourceDragIconContainer) {
          sourceDragIconContainer.classList.add('d-none');
        }

        container.classList.add('ez-strategy-model--dragged-success');
        targetDragIconContainer.classList.remove('d-none');
        setContainerData({
          container: container,
          dataset: sourceDraggedModel.dataset,
          showSettings: true
        });

        if (type === 'existing') {
          setContainerData({
            container: sourceDraggedModel,
            showSettings: false
          });
        }

        setTimeout(function () {
          container.classList.remove('ez-strategy-model--dragged-success');
        }, 300);
      } else {
        container.classList.add('ez-strategy-model--dragged-fail');
        setTimeout(function () {
          container.classList.remove('ez-strategy-model--dragged-fail');
        }, 300);
      }
    }
  };

  var onDragStart = function onDragStart(event) {
    sourceDraggedModel = event.currentTarget;
  };

  var onRadioClick = function onRadioClick(event) {
    var radiosContainer = event.currentTarget.closest('.ez-modal__inputs');
    radiosContainer.querySelectorAll('.ez-input--radio').forEach(function (radio) {
      var radioRow = radio.closest('.ez-modal__row-input');
      var radioSubRows = radioRow.querySelectorAll('.ez-modal__sub-row-input');

      if (!radio.isEqualNode(event.currentTarget)) {
        radio.checked = false;
        radioSubRows.forEach(function (row) {
          row.classList.add('ez-modal__sub-row-input--inactive');
        });
      } else {
        radioSubRows.forEach(function (row) {
          row.classList.remove('ez-modal__sub-row-input--inactive');
        });
      }
    });
  };

  var getValidationResults = function getValidationResults(validator) {
    var isValid = validator.isValid();
    var validatorName = validator.constructor.name;
    var result = {
      isValid: isValid,
      validatorName: validatorName
    };
    return result;
  };

  var getInvalidTabs = function getInvalidTabs(validator) {
    return validator.fieldsToValidate.reduce(function (invalidTabs, field) {
      var tabPane = field.item.closest('.tab-pane');

      if (tabPane && field.item.classList.contains('is-invalid')) {
        invalidTabs.add(tabPane.id);
      }

      return invalidTabs;
    }, new Set());
  };

  var onSubmitClick = function onSubmitClick(event) {
    var btn = event.currentTarget;

    if (parseInt(btn.dataset.isFormValid, 10)) {
      return;
    }

    event.preventDefault();
    var validators = eZ.fieldTypeValidators;
    var validationResults = validators.map(getValidationResults);
    var isFormValid = validationResults.every(function (result) {
      return result.isValid;
    });
    var invalidTabs = validators.map(getInvalidTabs);

    if (isFormValid) {
      btn.dataset.isFormValid = 1; // for some reason trying to fire click event inside the event handler flow is impossible
      // the following line breaks the flow so it's possible to fire click event on a button again.

      window.setTimeout(function () {
        return btn.click();
      }, 0);
    } else {
      btn.dataset.validatorsWithErrors = Array.from(validationResults.filter(function (result) {
        return !result.isValid;
      }).reduce(function (total, result) {
        total.add(result.validatorName);
        return total;
      }, new Set())).join();
      fields.forEach(function (field) {
        return field.removeAttribute('id');
      });
      doc.querySelectorAll('.ez-tabs__nav-item').forEach(function (navItem) {
        navItem.classList.remove('ez-tabs__nav-item--invalid');
      });
      invalidTabs.forEach(function (invalidInputs) {
        invalidInputs.forEach(function (invalidInputKey) {
          doc.querySelector("#item-".concat(invalidInputKey)).classList.add('ez-tabs__nav-item--invalid');
        });
      });
    }
  };

  openModalButtons.forEach(function (button) {
    button.addEventListener('click', openModal, false);
  });
  discardSettingsButtons.forEach(function (button) {
    button.addEventListener('click', discardSettings, false);
  }, false);
  modalRadioInputs.forEach(function (radio) {
    radio.addEventListener('click', onRadioClick, false);
  });
  draggedModels.forEach(function (model) {
    model.addEventListener('dragstart', onDragStart, false);
  });
  removeStrategyModelButtons.forEach(function (button) {
    button.addEventListener('click', removeStrategyModel, false);
  });
  actionCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', onCheckboxChangeValue, false);
  });
  droppedModelContainers.forEach(function (container) {
    container.addEventListener('drop', onDropModel, false);
    container.addEventListener('dragover', onDragOver, false);
  });
  submitBtns.forEach(function (btn) {
    btn.dataset.isFormValid = 0;
    btn.addEventListener('click', onSubmitClick, false);
  });
})(window.document, window.eZ, window.jQuery);

/***/ }),

/***/ 72:
/*!************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.edit.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.edit.js */"./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.edit.js");


/***/ })

},[[72,"runtime"]]]);