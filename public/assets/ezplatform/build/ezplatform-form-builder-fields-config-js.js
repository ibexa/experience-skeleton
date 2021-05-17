(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-form-builder-fields-config-js"],{

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/action.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/action.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, eZ) {
  var CLASS_NO_SELECTION = 'fb-config-field--no-selection';
  var SELECTOR_FIELD = '.fb-config-field--action';
  var SELECTOR_SOURCE_INPUT = '.fb-config-field__input';
  var SELECTOR_ITEMS = '.ez-custom-dropdown__items';
  var SELECTOR_ACTION_VALUE = '#field_configuration_attributes_action_value_action';

  var showActionConfig = function showActionConfig(container, event) {
    var selectedOptionValue = _toConsumableArray(event.currentTarget.selectedOptions)[0].value;

    var configContainers = _toConsumableArray(container.querySelectorAll('[data-config]'));

    configContainers.forEach(function (config) {
      return config.setAttribute('hidden', true);
    });
    var selectedConfigContainer = configContainers.find(function (config) {
      return config.dataset.config === selectedOptionValue;
    });

    if (!selectedConfigContainer) {
      container.classList.add(CLASS_NO_SELECTION);
      return;
    }

    container.classList.remove(CLASS_NO_SELECTION);
    selectedConfigContainer.removeAttribute('hidden');
    container.querySelector(SELECTOR_ACTION_VALUE).value = selectedOptionValue;
  };

  doc.querySelectorAll(SELECTOR_FIELD).forEach(function (container) {
    var sourceInput = container.querySelector(SELECTOR_SOURCE_INPUT);
    var dropdown = new eZ.core.CustomDropdown({
      container: container,
      sourceInput: sourceInput,
      itemsContainer: container.querySelector(SELECTOR_ITEMS),
      hasDefaultSelection: true
    });
    dropdown.init();
    sourceInput.addEventListener('valueChanged', showActionConfig.bind(null, container), false);
  });
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/action.redirect.content.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/action.redirect.content.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (global, doc, eZ) {
  var prevInputValue;
  var contentConfigContainer = doc.querySelector('.fb-config-field__action-config[data-config="location_id"]');

  if (!contentConfigContainer) {
    return;
  }

  var configInput = contentConfigContainer.querySelector('.fb-config-field__input--location-id');
  var openUdwBtn = contentConfigContainer.querySelector('.fb-config-field__btn--open-udw');
  var selectedItemContainer = doc.querySelector('.fb-selected-item');
  var selectedItemImage = selectedItemContainer.querySelector('.fb-selected-item__image');
  var selectedItemTitle = selectedItemContainer.querySelector('.fb-selected-item__title');
  var selectedItemType = selectedItemContainer.querySelector('.fb-selected-item__type');
  var removeSelectedItemBtn = selectedItemContainer.querySelector('.fb-selected-item__action--remove');

  var openUdw = function openUdw(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(
    /*@Desc("Select content")*/
    'action.redirect.udw.title', {}, 'form_builder');
    var openUdwEvent = new CustomEvent('ez-open-udw', {
      detail: _objectSpread({
        title: title,
        multiple: false,
        onConfirm: setSelectedItem,
        onCancel: restorePrevInputValue
      }, config)
    });
    doc.body.dispatchEvent(openUdwEvent);
    prevInputValue = configInput.value;
  };

  var restorePrevInputValue = function restorePrevInputValue() {
    return configInput.value = prevInputValue;
  };

  var setSelectedItem = function setSelectedItem(items) {
    var selectedItem = items[0];
    var selectedItemVersion = selectedItem.CurrentVersion;
    var imageField = selectedItemVersion ? selectedItemVersion.Version.Fields.field.find(function (element) {
      return element.fieldTypeIdentifier === 'ezimage';
    }) : false;
    configInput.value = selectedItem.id;
    selectedItemTitle.innerHTML = selectedItem.ContentInfo.Content.Name;
    selectedItemType.innerHTML = selectedItem.ContentInfo.Content.ContentTypeInfo.names.value[0]['#text'];
    selectedItemContainer.removeAttribute('hidden');
    openUdwBtn.setAttribute('hidden', true);

    if (!imageField) {
      return;
    }

    selectedItemImage.src = imageField.fieldValue.uri;
  };

  var removeSelectedItem = function removeSelectedItem() {
    configInput.value = '';
    openUdwBtn.removeAttribute('hidden');
    selectedItemContainer.setAttribute('hidden', true);
  };

  removeSelectedItemBtn.addEventListener('click', removeSelectedItem, false);
  openUdwBtn.addEventListener('click', openUdw, false);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/boolean.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/boolean.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var checkboxes = doc.querySelectorAll('.ez-field-edit--ezboolean input');

  var toggleState = function toggleState(event) {
    var methodName = event.target.checked ? 'add' : 'remove';
    event.target.closest('.ez-data-source__label').classList[methodName]('is-checked');
  };

  checkboxes.forEach(function (input) {
    return input.addEventListener('change', toggleState, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/field.name.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/field.name.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ) {
  var updateTimeout;
  var input = doc.querySelector('#field_configuration_name');
  var fieldId = doc.querySelector('#field_configuration_id').value.trim();

  var unlockInput = function unlockInput() {
    return input.disabled = false;
  };

  var preventSettingName = function preventSettingName() {
    var message = Translator.trans(
    /*@Desc("Field name '%oldFieldName%' is already in use.")*/
    'type.different.field.name', {
      oldFieldName: input.value
    }, 'form_builder');
    eZ.helpers.notification.showWarningNotification(message);
    input.value = input.dataset.prevValue;
    unlockInput();
  };

  var storePreviousName = function storePreviousName() {
    return input.dataset.prevValue = input.value;
  };

  var updateFieldName = function updateFieldName(_ref) {
    var currentTarget = _ref.currentTarget;
    global.clearTimeout(updateTimeout);
    updateTimeout = global.setTimeout(function () {
      var customEvent = new CustomEvent('ez-update-field-name', {
        detail: {
          id: fieldId,
          name: currentTarget.value.trim(),
          successCallback: unlockInput,
          errorCallback: preventSettingName
        }
      });
      input.disabled = true;
      doc.body.dispatchEvent(customEvent);
    }, 200);
  };

  input.addEventListener('focus', storePreviousName, false);
  input.addEventListener('blur', updateFieldName, false);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/location.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/location.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var languageCode = doc.querySelector('meta[name="LanguageCode"]').content;
  var SELECTOR_SELECT_BTN = '.fb-location__select-btn';
  var SELECTOR_LOCATION_NAME = '.fb-location__location-name';

  var changeLocation = function changeLocation(container, locations) {
    var selectLocationBtn = container.querySelector(SELECTOR_SELECT_BTN);
    var locationNameContainer = container.querySelector(SELECTOR_LOCATION_NAME);
    var hiddenValueInput = container.querySelector(selectLocationBtn.dataset.target);
    var newLocation = locations[0];
    hiddenValueInput.value = newLocation.id;
    locationNameContainer.innerText = newLocation.ContentInfo.Content.Name;
  };

  var openUdw = function openUdw(container, udwConfig) {
    var openUdwEvent = new CustomEvent('ez-open-udw', {
      detail: Object.assign({
        onConfirm: changeLocation.bind(null, container),
        onCancel: function onCancel() {},
        restInfo: {
          token: token,
          siteaccess: siteaccess
        },
        cotfAllowedLanguages: [languageCode]
      }, udwConfig)
    });
    doc.body.dispatchEvent(openUdwEvent);
  };

  doc.querySelectorAll('.fb-location').forEach(function (container) {
    var selectLocationBtn = container.querySelector(SELECTOR_SELECT_BTN);
    var udwConfig = JSON.parse(selectLocationBtn.dataset.udwConfig);
    selectLocationBtn.addEventListener('click', openUdw.bind(null, container, udwConfig));
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/options.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/options.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, eZ) {
  var draggable;
  var SELECTOR_ITEM = '.fb-config-option';
  var SELECTOR_OPTIONS = '.fb-config-field__options';
  var SELECTOR_BTN_REMOVE = '.fb-config-option__action--remove';
  var SELECTOR_OPTION_INPUT = '.fb-config-option__input';
  var itemsContainers = doc.querySelectorAll(SELECTOR_OPTIONS);

  if (!itemsContainers.length) {
    return;
  }

  var getItems = function getItems(itemsContainer) {
    return _toConsumableArray(itemsContainer.querySelectorAll(SELECTOR_ITEM));
  };

  var getField = function getField(element) {
    return element.closest('.fb-config-field--options');
  };

  var getInput = function getInput(itemsContainer) {
    return getField(itemsContainer).querySelector('.fb-config-field__input');
  };

  var getItemValue = function getItemValue(item) {
    return item.querySelector(SELECTOR_OPTION_INPUT).value.trim();
  };

  var updateInputValue = function updateInputValue(itemsContainer) {
    var input = getInput(itemsContainer);
    input.value = JSON.stringify(_toConsumableArray(getItems(itemsContainer).map(getItemValue)));
  };

  var attachEventsToSelectedItem = function attachEventsToSelectedItem(itemsContainer, item) {
    item.querySelector(SELECTOR_BTN_REMOVE).onclick = function (event) {
      return removeItem(itemsContainer, event);
    };

    item.querySelector('.fb-config-option__action--add-new').onclick = function () {
      return addItem(itemsContainer);
    };

    item.querySelector(SELECTOR_OPTION_INPUT).onkeyup = function () {
      return updateInputValue(itemsContainer);
    };
  };

  var toggleRemoveBtnsDisabledState = function toggleRemoveBtnsDisabledState(itemsContainer) {
    var btns = itemsContainer.querySelectorAll(SELECTOR_BTN_REMOVE);
    var methodName = btns.length > 1 ? 'removeAttribute' : 'setAttribute';
    btns.forEach(function (btn) {
      return btn[methodName]('disabled', true);
    });
  };

  var createItem = function createItem(template) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var container = doc.createElement('div');
    container.innerHTML = template;
    doc.body.append(container);
    var option = container.children[0];
    option.querySelector(SELECTOR_OPTION_INPUT).value = value;
    doc.body.removeChild(container);
    return option;
  };

  var addItem = function addItem(itemsContainer) {
    var item = createItem(itemsContainer.dataset.template);
    itemsContainer.append(item);
    toggleRemoveBtnsDisabledState(itemsContainer);
    draggable.reinit();
  };

  var addItems = function addItems(itemsContainer, items) {
    var fragment = doc.createDocumentFragment();
    var template = itemsContainer.dataset.template;
    items.forEach(function (item) {
      return fragment.append(createItem(template, item));
    });
    itemsContainer.append(fragment);
    updateInputValue(itemsContainer);
    draggable.reinit();
    toggleRemoveBtnsDisabledState(itemsContainer);
  };

  var removeItem = function removeItem(itemsContainer, event) {
    event.preventDefault();
    var field = getField(event.currentTarget);
    event.currentTarget.closest(SELECTOR_ITEM).remove();
    updateInputValue(field.querySelector(SELECTOR_OPTIONS));
    toggleRemoveBtnsDisabledState(itemsContainer);
  };

  var OptionsDraggable = /*#__PURE__*/function (_global$eZ$core$Dragg) {
    "use strict";

    _inherits(OptionsDraggable, _global$eZ$core$Dragg);

    var _super = _createSuper(OptionsDraggable);

    function OptionsDraggable() {
      _classCallCheck(this, OptionsDraggable);

      return _super.apply(this, arguments);
    }

    _createClass(OptionsDraggable, [{
      key: "attachEventHandlersToItem",
      value: function attachEventHandlersToItem(item) {
        _get(_getPrototypeOf(OptionsDraggable.prototype), "attachEventHandlersToItem", this).call(this, item);

        attachEventsToSelectedItem(this.itemsContainer, item);
      }
    }, {
      key: "onDrop",
      value: function onDrop() {
        _get(_getPrototypeOf(OptionsDraggable.prototype), "onDrop", this).call(this);

        updateInputValue(this.itemsContainer);
      }
    }]);

    return OptionsDraggable;
  }(global.eZ.core.Draggable);

  ;
  itemsContainers.forEach(function (itemsContainer) {
    draggable = new OptionsDraggable({
      itemsContainer: itemsContainer,
      selectorItem: SELECTOR_ITEM,
      selectorPlaceholder: '.fb-config-field__placeholder'
    });
    draggable.init();
    var input = getInput(itemsContainer);
    var inputValue = input.value.trim();

    if (!inputValue.length) {
      return;
    }

    try {
      var items = JSON.parse(inputValue);

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

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/regex.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/regex.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.fb-config-field--validator-regex';
  var SELECTOR_SOURCE_INPUT = '.fb-config-field__input';
  var SELECTOR_ITEMS = '.ez-custom-dropdown__items';
  var SELECTOR_CUSTOM_REGEX = '.fb-config-field__regex-config';
  var SELECTOR_REGEX_INPUT = '#field_configuration_validators_regex_value_pattern';
  var SELECTOR_SELECTED_ITEM = '.ez-custom-dropdown__selected-item';
  var CUSTOM_REGEX_VALUE = '/.*/';
  var wasCustomRegexSelected = false;
  var customRegexValue = CUSTOM_REGEX_VALUE;

  var updateRegexStoredValue = function updateRegexStoredValue(event) {
    return customRegexValue = event.currentTarget.value;
  };

  var attachEventsToRegexInput = function attachEventsToRegexInput(input) {
    input.addEventListener('keyup', updateRegexStoredValue, false);
    input.addEventListener('blur', updateRegexStoredValue, false);
  };

  var showRegexConfig = function showRegexConfig(container, event) {
    var selectedOptionValue = _toConsumableArray(event.currentTarget.selectedOptions)[0].value;

    var isCustomRegexSelected = selectedOptionValue === CUSTOM_REGEX_VALUE;
    var regexConfigMethodName = isCustomRegexSelected ? 'removeAttribute' : 'setAttribute';
    var regexInput = container.querySelector(SELECTOR_REGEX_INPUT);
    container.querySelector(SELECTOR_CUSTOM_REGEX)[regexConfigMethodName]('hidden', true);

    if (!isCustomRegexSelected) {
      regexInput.value = selectedOptionValue;
      regexInput.removeEventListener('keyup', updateRegexStoredValue);
      regexInput.removeEventListener('blur', updateRegexStoredValue);
      return;
    }

    if (wasCustomRegexSelected) {
      regexInput.value = customRegexValue;
    } else {
      wasCustomRegexSelected = true;
      regexInput.value = CUSTOM_REGEX_VALUE;
    }

    attachEventsToRegexInput(regexInput);
  };

  doc.querySelectorAll(SELECTOR_FIELD).forEach(function (container) {
    var sourceInput = container.querySelector(SELECTOR_SOURCE_INPUT);
    var dropdown = new eZ.core.CustomDropdown({
      container: container,
      sourceInput: sourceInput,
      itemsContainer: container.querySelector(SELECTOR_ITEMS),
      hasDefaultSelection: true
    });
    dropdown.init();
    var selectedItem = container.querySelector(SELECTOR_SELECTED_ITEM);

    if (selectedItem && selectedItem.dataset.value === CUSTOM_REGEX_VALUE) {
      var regexInput = container.querySelector(SELECTOR_REGEX_INPUT);
      wasCustomRegexSelected = true;
      customRegexValue = regexInput.value;
      showRegexConfig(container, {
        currentTarget: {
          selectedOptions: [{
            value: selectedItem.dataset.value
          }]
        }
      });
    }

    sourceInput.addEventListener('valueChanged', showRegexConfig.bind(null, container), false);
  });
})(window, window.document, window.eZ);

/***/ }),

/***/ 135:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/boolean.js ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/location.js ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/options.js ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/action.js ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/action.redirect.content.js ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/field.name.js ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/regex.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/boolean.js */"./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/boolean.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/location.js */"./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/location.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/options.js */"./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/options.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/action.js */"./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/action.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/action.redirect.content.js */"./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/action.redirect.content.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/field.name.js */"./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/field.name.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/regex.js */"./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/config-form/fields/regex.js");


/***/ })

},[[135,"runtime"]]]);