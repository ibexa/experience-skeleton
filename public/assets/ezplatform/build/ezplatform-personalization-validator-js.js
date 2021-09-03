(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-personalization-validator-js"],{

/***/ "./public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-field.js":
/*!**********************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-field.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function (global, doc, eZ) {
  var BaseFieldValidator = /*#__PURE__*/function () {
    "use strict";

    function BaseFieldValidator(config) {
      _classCallCheck(this, BaseFieldValidator);

      this.classInvalid = config.classInvalid;
      this.eventsMap = config.eventsMap;
      this.fieldSelector = config.fieldSelector;
      this.fieldContainer = config.fieldContainer;
      this.fieldsToValidate = [];
      this.isValid = this.isValid.bind(this);
    }

    _createClass(BaseFieldValidator, [{
      key: "getFieldTypeContainer",
      value: function getFieldTypeContainer(fallback) {
        return this.fieldContainer ? this.fieldContainer : fallback;
      }
      /**
       * Attaches event to elements found with a selector provided by field config
       *
       * @method attachEvent
       * @param {Object} config
       * @memberof BaseFieldValidator
       */

    }, {
      key: "attachEvent",
      value: function attachEvent(config) {
        var container = this.getFieldTypeContainer(doc);
        var elements = config.elements || container.querySelectorAll(config.selector);
        elements.forEach(this.attachEventToElement.bind(this, config));
      }
      /**
       * Attaches event to elements found with a selector provided by field config
       *
       * @method attachEventToElement
       * @param {Object} config
       * @param {HTMLElement} item
       * @memberof BaseFieldValidator
       */

    }, {
      key: "attachEventToElement",
      value: function attachEventToElement(config, item) {
        var isValueValidator = typeof config.isValueValidator !== 'undefined' ? config.isValueValidator : true;
        this.fieldsToValidate.push({
          item: item,
          isValueValidator: isValueValidator,
          callback: config.validateField
        });
        item.addEventListener(config.eventName, config.validateField, false);
        item.addEventListener('checkIsValid', this.isValid, false);
      }
      /**
       * Removes event from a node found by a given selector
       *
       * @method removeEvent
       * @param {String} eventName
       * @param {String} selector
       * @param {Function} callback
       * @memberof BaseFieldValidator
       */

    }, {
      key: "removeEvent",
      value: function removeEvent(eventName, selector, callback) {
        var _this = this;

        this.getFieldTypeContainer(doc).querySelectorAll(selector).forEach(function (item) {
          item.removeEventListener('checkIsValid', _this.isValid, false);
          item.removeEventListener(eventName, callback, false);
        });
      }
      /**
       * Finds nodes to add validation state
       *
       * @method findValidationStateNodes
       * @param {HTMLElement} fieldNode
       * @param {HTMLElement} input
       * @param {Array} selectors
       * @returns {Array}
       * @memberof BaseFieldValidator
       */

    }, {
      key: "findValidationStateNodes",
      value: function findValidationStateNodes(fieldNode, input) {
        var selectors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        return selectors.reduce(function (total, selector) {
          return total.concat(_toConsumableArray(fieldNode.querySelectorAll(selector)));
        }, []);
      }
      /**
       * Toggles the invalid state
       *
       * @method toggleInvalidState
       * @param {Boolean} isError
       * @param {Object} config
       * @param {HTMLElement} input
       * @memberof BaseFieldValidator
       */

    }, {
      key: "toggleInvalidState",
      value: function toggleInvalidState(isError, config, input) {
        var _this2 = this;

        var container = this.getFieldTypeContainer(input.closest(this.fieldSelector));
        var methodName = isError ? 'add' : 'remove';
        var nodes = this.findValidationStateNodes(container, input, config.invalidStateSelectors);
        container.classList[methodName](this.classInvalid);
        input.classList[methodName](this.classInvalid);
        nodes.forEach(function (el) {
          return el.classList[methodName](_this2.classInvalid);
        });
      }
      /**
       * Creates an error node
       *
       * @method createErrorNode
       * @param {String} message
       * @returns {HTMLElement}
       * @memberof BaseFieldValidator
       */

    }, {
      key: "createErrorNode",
      value: function createErrorNode(message) {
        var errorNode = doc.createElement('em');
        errorNode.classList.add('ez-field-edit__error');
        errorNode.innerHTML = message;
        return errorNode;
      }
      /**
       * Finds the error containers
       *
       * @method findErrorContainers
       * @param {HTMLElement} fieldNode
       * @param {HTMLElement} input
       * @param {Array} selectors
       * @returns {Array}
       * @memberof BaseFieldValidator
       */

    }, {
      key: "findErrorContainers",
      value: function findErrorContainers(fieldNode, input, selectors) {
        return selectors.reduce(function (total, selector) {
          return total.concat(_toConsumableArray(fieldNode.querySelectorAll(selector)));
        }, []);
      }
      /**
       * Finds the existing error nodes
       *
       * @method findExistingErrorNodes
       * @param {HTMLElement} fieldNode
       * @param {HTMLElement} input
       * @param {Array} selectors
       * @returns {Array}
       * @memberof BaseFieldValidator
       */

    }, {
      key: "findExistingErrorNodes",
      value: function findExistingErrorNodes(fieldNode, input, selectors) {
        return this.findErrorContainers(fieldNode, input, selectors);
      }
      /**
       * Toggles the error message
       *
       * @method toggleErrorMessage
       * @param {Object} validationResult
       * @param {Object} config
       * @param {HTMLElement} input
       * @memberof BaseFieldValidator
       */

    }, {
      key: "toggleErrorMessage",
      value: function toggleErrorMessage(validationResult, config, input) {
        var _this3 = this;

        var container = this.getFieldTypeContainer(input.closest(this.fieldSelector));
        var nodes = this.findErrorContainers(container, input, config.errorNodeSelectors);
        var existingErrorSelectors = config.errorNodeSelectors.map(function (selector) {
          return "".concat(selector, " .ez-field-edit__error");
        });
        var existingErrorNodes = this.findExistingErrorNodes(container, input, existingErrorSelectors);
        existingErrorNodes.forEach(function (el) {
          return el.remove();
        });

        if (validationResult.isError) {
          nodes.forEach(function (el) {
            var errorNode = _this3.createErrorNode(validationResult.errorMessage);

            el.append(errorNode);
          });
        }
      }
      /**
       * Validates the field
       *
       * @method validateField
       * @param {Object} config
       * @param {Event} event
       * @memberof BaseFieldValidator
       */

    }, {
      key: "validateField",
      value: function validateField(config, event) {
        var validationResult = this[config.callback](event);

        if (!validationResult) {
          return;
        }

        this.toggleInvalidState(validationResult.isError, config, event.target);
        this.toggleErrorMessage(validationResult, config, event.target);
        return validationResult;
      }
      /**
       * Attaches event listeners based on a config.
       *
       * @method init
       * @memberof BaseFieldValidator
       */

    }, {
      key: "init",
      value: function init() {
        var _this4 = this;

        this.fieldsToValidate = [];
        this.eventsMap.forEach(function (eventConfig) {
          eventConfig.validateField = _this4.validateField.bind(_this4, eventConfig);

          _this4.attachEvent(eventConfig);
        });
      }
      /**
       * Removes event listeners and attaches again.
       *
       * @method reinit
       * @memberof BaseFieldValidator
       */

    }, {
      key: "reinit",
      value: function reinit() {
        var _this5 = this;

        this.eventsMap.forEach(function (_ref) {
          var eventName = _ref.eventName,
              selector = _ref.selector,
              validateField = _ref.validateField;
          return _this5.removeEvent(eventName, selector, validateField);
        });
        this.init();
      }
      /**
       * Cancels all errors
       *
       * @method cancelErrors
       * @returns {Object}
       */

    }, {
      key: "cancelErrors",
      value: function cancelErrors() {
        return {
          isError: false
        };
      }
      /**
       * Checks whether field values are valid
       *
       * @method isValid
       * @returns {Boolean}
       */

    }, {
      key: "isValid",
      value: function isValid() {
        if (!this.fieldsToValidate.length) {
          return true;
        }

        var results = [];
        this.fieldsToValidate.forEach(function (field) {
          if (field.isValueValidator) {
            results.push(field.callback({
              target: field.item,
              currentTarget: field.item
            }));
          }
        });
        return results.every(function (result) {
          return result && !result.isError;
        });
      }
    }]);

    return BaseFieldValidator;
  }();

  eZ.addConfig('BaseFieldValidator', BaseFieldValidator);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-file-field.js":
/*!***************************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-file-field.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function (global, doc, eZ) {
  var SELECTOR_FIELD_LABEL = '.ez-field-edit__label-wrapper .ez-field-edit__label';

  var BaseFileFieldValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(BaseFileFieldValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(BaseFileFieldValidator);

    function BaseFileFieldValidator() {
      _classCallCheck(this, BaseFileFieldValidator);

      return _super.apply(this, arguments);
    }

    _createClass(BaseFileFieldValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the input
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       */
      function validateInput(event) {
        var input = event.currentTarget;
        var dataContainer = this.fieldContainer.querySelector('.ez-field-edit__data');
        var label = this.fieldContainer.querySelector(SELECTOR_FIELD_LABEL).innerHTML;
        var isRequired = input.required || this.fieldContainer.classList.contains('ez-field-edit--required');
        var dataMaxSize = +input.dataset.maxFileSize;
        var maxFileSize = parseInt(dataMaxSize, 10);
        var isEmpty = input.files && !input.files.length && dataContainer && !dataContainer.hasAttribute('hidden');
        var result = {
          isError: false
        };

        if (isRequired && isEmpty) {
          result = {
            isError: true,
            errorMessage: eZ.errors.emptyField.replace('{fieldName}', label)
          };
        }

        if (!isEmpty && maxFileSize > 0 && input.files[0] && input.files[0].size > maxFileSize) {
          result = this.validateFileSize(event);
        }

        return result;
      }
    }, {
      key: "validateFileSize",
      value: function validateFileSize(event) {
        return this.showFileSizeError();
      }
      /**
       * Displays an error message: file size exceeds maximum value
       *
       * @method showFileSizeNotice
       * @returns {Object}
       */

    }, {
      key: "showFileSizeError",
      value: function showFileSizeError() {
        var label = this.fieldContainer.querySelector(SELECTOR_FIELD_LABEL).innerHTML;
        var result = {
          isError: true,
          errorMessage: eZ.errors.invalidFileSize.replace('{fieldName}', label)
        };
        return result;
      }
    }]);

    return BaseFileFieldValidator;
  }(eZ.BaseFieldValidator);

  eZ.addConfig('BaseFileFieldValidator', BaseFileFieldValidator);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-preview-field.js":
/*!******************************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-preview-field.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function (global, doc, eZ) {
  var SELECTOR_DATA = '.ez-field-edit__data';
  var SELECTOR_PREVIEW = '.ez-field-edit__preview';
  var SELECTOR_BTN_REMOVE = '.ez-field-edit-preview__action--remove';

  var BasePreviewField = /*#__PURE__*/function () {
    "use strict";

    function BasePreviewField(_ref) {
      var fieldContainer = _ref.fieldContainer,
          allowedFileTypes = _ref.allowedFileTypes,
          fileTypeAccept = _ref.fileTypeAccept,
          validator = _ref.validator;

      _classCallCheck(this, BasePreviewField);

      this.fieldContainer = fieldContainer || null;
      this.allowedFileTypes = allowedFileTypes || [];
      this.fileTypeAccept = fileTypeAccept || '';
      this.validator = validator;
      this.inputField = this.findInputField();
      this.clonedInputField = this.inputField.cloneNode(true);
      this.openFileSelector = this.openFileSelector.bind(this);
      this.showPreview = this.showPreview.bind(this);
      this.handleRemoveFile = this.handleRemoveFile.bind(this);
      this.handleDropFile = this.handleDropFile.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      var dataMaxSize = +this.inputField.dataset.maxFileSize;
      this.maxFileSize = parseInt(dataMaxSize, 10);
      this.showPreviewEventName = 'ez-base:show-preview';
    }
    /**
     * Formats a file size information
     *
     * @method formatFileSize
     * @param {Number} bytes file size in bytes
     * @return {String} formatted file size information
     */


    _createClass(BasePreviewField, [{
      key: "formatFileSize",
      value: function formatFileSize(bytes) {
        var units = ['B', 'KB', 'MB', 'GB'];
        var kilobyte = 1024;
        var size = parseInt(bytes, 10) || 0;
        var unitIndex = 0;
        var decimalUnits;

        while (size >= kilobyte) {
          size = size / kilobyte;
          unitIndex++;
        }

        decimalUnits = unitIndex < 1 ? 0 : 1;
        var sizeFixed = size.toFixed(size >= 10 || decimalUnits);
        var unit = units[unitIndex];
        return "".concat(sizeFixed, " ").concat(unit);
      }
      /**
       * Finds an input element in a field container
       *
       * @method findInputField
       */

    }, {
      key: "findInputField",
      value: function findInputField() {
        return this.fieldContainer.querySelector('input[type="file"]');
      }
      /**
       * Opens a native file selector
       *
       * @method openFileSelector
       * @param {Event} event
       */

    }, {
      key: "openFileSelector",
      value: function openFileSelector(event) {
        event.preventDefault();
        this.inputField.click();
      }
      /**
       * Handles dropping files
       *
       * @method handleDropFiles
       * @param {Event} event
       */

    }, {
      key: "handleDropFile",
      value: function handleDropFile(event) {
        var file = event.dataTransfer.files[0];

        if (!this.checkCanDrop(file)) {
          return;
        }

        if (this.maxFileSize > 0 && file.size > this.maxFileSize) {
          return this.showFileSizeError();
        }

        var changeEvent = new Event('change');
        this.inputField.files = event.dataTransfer.files;
        this.inputField.dispatchEvent(changeEvent);
      }
      /**
       * Displays a file size error
       *
       * @method showFileSizeError
       */

    }, {
      key: "showFileSizeError",
      value: function showFileSizeError() {
        this.inputField.dispatchEvent(new CustomEvent('ez-invalid-file-size'));
      }
      /**
       * Checks whether a given file can be dropped onto a field
       *
       * @method checkCanDrop
       * @param {File} file
       * @returns {Boolean}
       */

    }, {
      key: "checkCanDrop",
      value: function checkCanDrop(file) {
        var accept = this.fileTypeAccept;

        if (!this.allowedFileTypes.length && !accept.length) {
          return true;
        }

        if (accept.length && accept.includes('/*')) {
          var pattern = accept.substr(0, accept.indexOf('*'));
          return file.type.includes(pattern);
        }

        return this.allowedFileTypes.includes(file.type);
      }
      /**
       * Checks if file size is an allowed limit
       *
       * @method handleInputChange
       * @param {Event} event
       */

    }, {
      key: "handleInputChange",
      value: function handleInputChange(event) {
        if (this.maxFileSize > 0 && event.currentTarget.files[0].size > this.maxFileSize) {
          return this.resetInputField();
        }

        this.fieldContainer.querySelector('.ez-field-edit__option--remove-media').checked = false;
        this.showPreview(event);
      }
      /**
       * Displays a file preview
       *
       * @method showPreview
       * @param {Event} [event]
       */

    }, {
      key: "showPreview",
      value: function showPreview(event) {
        var btnRemove = this.fieldContainer.querySelector(SELECTOR_BTN_REMOVE);
        var dropZone = this.fieldContainer.querySelector(SELECTOR_DATA);

        if (event) {
          this.loadDroppedFilePreview(event);
        }

        this.fieldContainer.querySelector(SELECTOR_PREVIEW).removeAttribute('hidden');
        dropZone.setAttribute('hidden', true);
        btnRemove.addEventListener('click', this.handleRemoveFile, false);
        dropZone.removeEventListener('drop', this.handleDropFile);
      }
      /**
       * Loads dropped file preview.
       * It should redefined in each class that extends this one.
       *
       * @method loadDroppedFilePreview
       * @param {Event} event
       */

    }, {
      key: "loadDroppedFilePreview",
      value: function loadDroppedFilePreview(event) {
        console.log('CUSTOMIZE RENDERING DROPPED FILE PREVIEW', event);
      }
      /**
       * Hides a file preview
       *
       * @method hidePreview
       */

    }, {
      key: "hidePreview",
      value: function hidePreview() {
        var btnRemove = this.fieldContainer.querySelector(SELECTOR_BTN_REMOVE);
        this.fieldContainer.querySelector(SELECTOR_DATA).removeAttribute('hidden');
        this.fieldContainer.querySelector(SELECTOR_PREVIEW).setAttribute('hidden', true);
        this.fieldContainer.classList.remove('is-invalid');
        this.fieldContainer.querySelectorAll('.ez-field-edit__error').forEach(function (element) {
          return element.remove();
        });
        btnRemove.removeEventListener('click', this.handleRemoveFile);
        this.initializeDropZone();
      }
      /**
       * Resets input field state
       *
       * @method resetInputField
       */

    }, {
      key: "resetInputField",
      value: function resetInputField() {
        var clonedInput = this.clonedInputField.cloneNode(true); // required to reset properly the input of file type properly

        this.inputField.parentNode.replaceChild(clonedInput, this.inputField);
        this.inputField = clonedInput;
        this.inputField.addEventListener('change', this.handleInputChange, false);
        this.fieldContainer.querySelector('.ez-field-edit__option--remove-media').checked = true;
        this.validator.reinit();
      }
      /**
       * Removes a file from input and hides a preview afterwards
       *
       * @method handleRemoveFile
       */

    }, {
      key: "handleRemoveFile",
      value: function handleRemoveFile(event) {
        event.preventDefault();
        this.resetInputField();
        this.hidePreview();
      }
      /**
       * Prevents from executing default actions
       *
       * @method preventDefaultAction
       * @param {Object} event
       */

    }, {
      key: "preventDefaultAction",
      value: function preventDefaultAction(event) {
        event.preventDefault();
        event.stopPropagation();
      }
      /**
       * Initializes drop zone event handlers
       *
       * @method initializeDropZone
       */

    }, {
      key: "initializeDropZone",
      value: function initializeDropZone() {
        var dropZone = this.fieldContainer.querySelector('.ez-field-edit__preview[hidden] + .ez-field-edit__data');

        if (dropZone) {
          dropZone.addEventListener('drop', this.handleDropFile, false);
        }
      }
      /**
       * Initializes the preview
       *
       * @method initializePreview
       */

    }, {
      key: "initializePreview",
      value: function initializePreview() {
        var preview = this.fieldContainer.querySelector('.ez-field-edit__preview');

        if (!preview.hasAttribute('hidden')) {
          this.showPreview();
        }
      }
      /**
       * Initializes the preview
       *
       * @method init
       */

    }, {
      key: "init",
      value: function init() {
        var _this = this;

        this.btnAdd = this.fieldContainer.querySelector('.ez-data-source__btn-add');
        this.btnAdd.addEventListener('click', this.openFileSelector, false);
        this.inputField.addEventListener('change', this.handleInputChange, false);
        window.addEventListener('drop', this.preventDefaultAction, false);
        window.addEventListener('dragover', this.preventDefaultAction, false);
        this.fieldContainer.addEventListener(this.showPreviewEventName, function () {
          return _this.showPreview();
        });
        this.initializeDropZone();
        this.initializePreview();
        this.validator.init();
      }
    }]);

    return BasePreviewField;
  }();

  eZ.addConfig('BasePreviewField', BasePreviewField);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./public/bundles/ezplatformadminui/js/scripts/fieldType/base/multi-input-field.js":
/*!*****************************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/fieldType/base/multi-input-field.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["containerSelectors"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function (global, doc, eZ) {
  var MultiInputFieldValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(MultiInputFieldValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(MultiInputFieldValidator);

    function MultiInputFieldValidator(_ref) {
      var _this;

      var containerSelectors = _ref.containerSelectors,
          restProps = _objectWithoutProperties(_ref, _excluded);

      _classCallCheck(this, MultiInputFieldValidator);

      _this = _super.call(this, restProps);
      _this.containerSelectors = containerSelectors;
      return _this;
    }

    _createClass(MultiInputFieldValidator, [{
      key: "toggleInvalidState",
      value: function toggleInvalidState(isError, config, input) {
        var _this2 = this;

        _get(_getPrototypeOf(MultiInputFieldValidator.prototype), "toggleInvalidState", this).call(this, isError, config, input);

        this.containerSelectors.forEach(function (selector) {
          var invalidSelector = ".".concat(_this2.classInvalid);
          var container = input.closest(selector);
          var method = !!container.querySelector(invalidSelector) ? 'add' : 'remove';
          container.classList[method](_this2.classInvalid);
        });
      }
    }]);

    return MultiInputFieldValidator;
  }(eZ.BaseFieldValidator);

  eZ.addConfig('MultiInputFieldValidator', MultiInputFieldValidator);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./public/bundles/ezplatformadminui/js/scripts/fieldType/ezinteger.js":
/*!****************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/fieldType/ezinteger.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezinteger';
  var SELECTOR_ERROR_NODE = '.ez-data-source';

  var EzIntegerValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzIntegerValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzIntegerValidator);

    function EzIntegerValidator() {
      _classCallCheck(this, EzIntegerValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzIntegerValidator, [{
      key: "validateInteger",
      value:
      /**
       * Validates the input
       *
       * @method validateInteger
       * @param {Event} event
       * @returns {Object}
       * @memberof EzIntegerValidator
       */
      function validateInteger(event) {
        var isRequired = event.target.required;
        var value = +event.target.value;
        var isEmpty = !event.target.value && event.target.value !== '0';
        var isInteger = Number.isInteger(value);
        var isLess = value < parseInt(event.target.getAttribute('min'), 10);
        var isGreater = value > parseInt(event.target.getAttribute('max'), 10);
        var isError = isEmpty && isRequired || !isInteger || isLess || isGreater;
        var label = event.target.closest(SELECTOR_FIELD).querySelector('.ez-field-edit__label').innerHTML;
        var result = {
          isError: isError
        };

        if (isEmpty) {
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        } else if (!isInteger) {
          result.errorMessage = eZ.errors.isNotInteger.replace('{fieldName}', label);
        } else if (isLess) {
          result.errorMessage = eZ.errors.isLess.replace('{fieldName}', label).replace('{minValue}', event.target.getAttribute('min'));
        } else if (isGreater) {
          result.errorMessage = eZ.errors.isGreater.replace('{fieldName}', label).replace('{maxValue}', event.target.getAttribute('max'));
        }

        return result;
      }
    }]);

    return EzIntegerValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzIntegerValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: '.ez-field-edit--ezinteger input',
      eventName: 'blur',
      callback: 'validateInteger',
      errorNodeSelectors: [SELECTOR_ERROR_NODE]
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./public/bundles/ezplatformadminui/js/scripts/fieldType/ezselection.js":
/*!******************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/fieldType/ezselection.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezselection';
  var SELECTOR_SELECTED = '.ez-custom-dropdown__selection-info';
  var SELECTOR_SOURCE_INPUT = '.ez-data-source__input';
  var SELECTOR_ERROR_NODE = '.ez-data-source';
  var EVENT_VALUE_CHANGED = 'valueChanged';

  var EzSelectionValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzSelectionValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzSelectionValidator);

    function EzSelectionValidator() {
      _classCallCheck(this, EzSelectionValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzSelectionValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the textarea field value
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzSelectionValidator
       */
      function validateInput(event) {
        var fieldContainer = event.currentTarget.closest(SELECTOR_FIELD);
        var hasSelectedOptions = !!fieldContainer.querySelectorAll('.ez-custom-dropdown__selected-item').length;
        var isRequired = fieldContainer.classList.contains('ez-field-edit--required');
        var isError = isRequired && !hasSelectedOptions;
        var label = fieldContainer.querySelector('.ez-field-edit__label').innerHTML;
        var errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        return {
          isError: isError,
          errorMessage: errorMessage
        };
      }
    }]);

    return EzSelectionValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzSelectionValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: '.ez-data-source__input--selection',
      eventName: EVENT_VALUE_CHANGED,
      callback: 'validateInput',
      errorNodeSelectors: [SELECTOR_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_SELECTED]
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
  doc.querySelectorAll(SELECTOR_FIELD).forEach(function (container) {
    var dropdown = new eZ.core.CustomDropdown({
      container: container,
      itemsContainer: container.querySelector('.ez-custom-dropdown__items'),
      sourceInput: container.querySelector(SELECTOR_SOURCE_INPUT)
    });
    dropdown.init();
  });
})(window, window.document, window.eZ);

/***/ }),

/***/ "./public/bundles/ezplatformadminui/js/scripts/fieldType/ezstring.js":
/*!***************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/fieldType/ezstring.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezstring';
  var SELECTOR_ERROR_NODE = '.ez-data-source';
  var SELECTOR_SOURCE_INPUT = '.ez-data-source__input';

  var EzStringValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzStringValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzStringValidator);

    function EzStringValidator() {
      _classCallCheck(this, EzStringValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzStringValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the input
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzStringValidator
       */
      function validateInput(event) {
        var isRequired = event.target.required;
        var isEmpty = !event.target.value;
        var isTooShort = event.target.value.length < parseInt(event.target.dataset.min, 10);
        var isTooLong = event.target.value.length > parseInt(event.target.dataset.max, 10);
        var isError = isEmpty && isRequired || isTooShort || isTooLong;
        var label = event.target.closest(SELECTOR_FIELD).querySelector('.ez-field-edit__label').innerHTML;
        var result = {
          isError: isError
        };

        if (isEmpty) {
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        } else if (isTooShort) {
          result.errorMessage = eZ.errors.tooShort.replace('{fieldName}', label).replace('{minLength}', event.target.dataset.min);
        } else if (isTooLong) {
          result.errorMessage = eZ.errors.tooLong.replace('{fieldName}', label).replace('{maxLength}', event.target.dataset.max);
        }

        return result;
      }
    }]);

    return EzStringValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzStringValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: '.ez-field-edit--ezstring input',
      eventName: 'blur',
      callback: 'validateInput',
      errorNodeSelectors: [SELECTOR_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_SOURCE_INPUT]
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
})(window, window.document, window.eZ);

/***/ }),

/***/ 67:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-field.js ./public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-file-field.js ./public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-preview-field.js ./public/bundles/ezplatformadminui/js/scripts/fieldType/base/multi-input-field.js ./public/bundles/ezplatformadminui/js/scripts/fieldType/ezinteger.js ./public/bundles/ezplatformadminui/js/scripts/fieldType/ezstring.js ./public/bundles/ezplatformadminui/js/scripts/fieldType/ezselection.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-field.js */"./public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-field.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-file-field.js */"./public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-file-field.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-preview-field.js */"./public/bundles/ezplatformadminui/js/scripts/fieldType/base/base-preview-field.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/fieldType/base/multi-input-field.js */"./public/bundles/ezplatformadminui/js/scripts/fieldType/base/multi-input-field.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/fieldType/ezinteger.js */"./public/bundles/ezplatformadminui/js/scripts/fieldType/ezinteger.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/fieldType/ezstring.js */"./public/bundles/ezplatformadminui/js/scripts/fieldType/ezstring.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/fieldType/ezselection.js */"./public/bundles/ezplatformadminui/js/scripts/fieldType/ezselection.js");


/***/ })

},[[67,"runtime"]]]);