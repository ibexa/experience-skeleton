(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-page-builder-parts-javascript-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js ***!
  \**************************************************************************************************************/
/*! exports provided: createCssClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCssClassNames", function() { return createCssClassNames; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var createCssClassNames = function createCssClassNames(classes) {
  if (Object.prototype.toString.call(classes) !== '[object Object]') {
    return '';
  }

  return Object.entries(classes).reduce(function (total, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        condition = _ref2[1];

    return "".concat(total, " ").concat(condition ? name : '');
  }, '').trim();
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Icon = function Icon(props) {
  var linkHref = props.customPath ? props.customPath : window.eZ.helpers.icon.getIconPath(props.name);
  var className = 'ez-icon';

  if (props.extraClasses) {
    className = "".concat(className, " ").concat(props.extraClasses);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: linkHref
  }));
};

Icon.propTypes = {
  extraClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  customPath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Icon.defaultProps = {
  customPath: null,
  name: null,
  extraClasses: null
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/fieldType/ezlandingpage.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/fieldType/ezlandingpage.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function (global, eZ) {
  eZ.EzLandingPageValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzLandingPageValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzLandingPageValidator);

    function EzLandingPageValidator(config) {
      var _this;

      _classCallCheck(this, EzLandingPageValidator);

      _this = _super.call(this, config);
      _this.pageBuilder = config.pageBuilder;
      return _this;
    }
    /**
     * Validates the input field value
     *
     * @method validateInput
     * @returns {Object}
     * @memberof EzLandingPageValidator
     */


    _createClass(EzLandingPageValidator, [{
      key: "validateInput",
      value: function validateInput() {
        var isValid = this.pageBuilder.validateAllBlocksData();
        var errorMessage = Translator.trans(
        /*@Desc("Some blocks are missing configuration")*/
        'fieldtype.landing_page.missing_proper_configuration.error.message', {}, 'page_builder');
        return {
          isError: !isValid,
          errorMessage: errorMessage
        };
      }
    }]);

    return EzLandingPageValidator;
  }(eZ.BaseFieldValidator);

  eZ.EzLandingPageLayoutValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato2) {
    "use strict";

    _inherits(EzLandingPageLayoutValidator, _eZ$BaseFieldValidato2);

    var _super2 = _createSuper(EzLandingPageLayoutValidator);

    function EzLandingPageLayoutValidator(config) {
      var _this2;

      _classCallCheck(this, EzLandingPageLayoutValidator);

      _this2 = _super2.call(this, config);
      _this2.pageBuilder = config.pageBuilder;
      return _this2;
    }

    _createClass(EzLandingPageLayoutValidator, [{
      key: "validateLayout",
      value: function validateLayout() {
        var isValidLayout = this.pageBuilder.validateLayoutData();
        var errorMessage = Translator.trans(
        /*@Desc("The layout of this landing page is no longer available and you cannot publish it. Please select a different layout.")*/
        'layout_selector.error.label', {}, 'page_builder');
        return {
          isError: !isValidLayout,
          errorMessage: errorMessage
        };
      }
    }]);

    return EzLandingPageLayoutValidator;
  }(eZ.BaseFieldValidator);
})(window, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js ***!
  \********************************************************************************************/
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

(function (global, doc, eZ, $) {
  global.eZ = global.eZ || {
    modules: {}
  };
  var CLASS_PREVIEW_ACTION_SELECTED = 'ez-preview-switcher__action--selected';
  var CLASS_INFO_SELECTED = 'ez-page-info-bar__info-tray-toggler--selected';
  var CLASS_INFO_VISIBLE = 'ez-info-tray--visible';
  var CLASS_DROPDOWN_EXPANDED = 'ez-dropdown--expanded';
  var CLASS_TOOLS_EXPANDED = 'ez-page-info-bar__tools-list--expanded';
  var CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN = 'ez-extra-actions--hidden';
  var CLASS_WITH_BACKDROP = 'ez-with-backdrop';
  var CLASS_DROPDOWN_SWITCHER = 'ez-dropdown__switcher';
  var SELECTOR_DROPDOWN = '.ez-dropdown';
  var SELECTOR_ICON_CHECKBOX = '.ez-checkbox-icon__checkbox';
  var SELECTOR_EXTRA_ACTIONS_EDIT = '.ez-extra-actions--page-edit';
  var SELECTOR_EXTRA_ACTIONS_CREATE = '.ez-extra-actions--page-create';
  var SELECTOR_EXTRA_ACTIONS_WRAPPER = '.ez-page-info-bar__create-content-wrapper';
  var SELECTOR_STANDARD_ACTIONS_WRAPPER = '.ez-page-info-bar__actions';
  var PREVIEW_WIDTH_MAP = {
    desktop: '100%',
    tablet: '1280px',
    mobile: '800px'
  };

  global.eZ.modules.InfoBar = /*#__PURE__*/function () {
    "use strict";

    function InfoBar() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$containerSelecto = _ref.containerSelector,
          containerSelector = _ref$containerSelecto === void 0 ? '.ez-page-info-bar' : _ref$containerSelecto,
          _ref$isCreateMode = _ref.isCreateMode,
          isCreateMode = _ref$isCreateMode === void 0 ? false : _ref$isCreateMode;

      _classCallCheck(this, InfoBar);

      this.container = doc.querySelector(containerSelector);
      this.isCreateMode = isCreateMode;
      this.subMenuBackdrop = null;
      this.contentActionSwitcher = this.container.querySelector('.ez-page-info-bar__content-action-switcher');
      this.contentModeSwitcher = this.container.querySelector('.ez-page-info-bar__content-mode-switcher');
      this.previewSwitcher = this.container.querySelector('.ez-preview-switcher');
      this.toolsToggler = this.container.querySelector('.ez-page-info-bar__tools');
      this.toolsList = this.container.querySelector('.ez-page-info-bar__tools-list');
      this.createContentBtnWrapper = this.container.querySelector(SELECTOR_EXTRA_ACTIONS_WRAPPER);
      this.standardActionsWrapper = this.container.querySelector(SELECTOR_STANDARD_ACTIONS_WRAPPER);
      this.editActionsWrapper = this.standardActionsWrapper ? this.standardActionsWrapper.querySelector(SELECTOR_EXTRA_ACTIONS_EDIT) : null;
      this.contentUrl = this.container.querySelector('.ez-content-action-info__url');
      this.contentLanguage = this.container.querySelector('.ez-content-action-info__language-name');
      this.contentAuthor = this.container.querySelector('.ez-content-details__author');
      this.contentModificationDate = this.container.querySelector('.ez-content-details__modified-date');

      if (this.previewSwitcher) {
        this.previewActions = _toConsumableArray(this.previewSwitcher.querySelectorAll('.ez-preview-switcher__action'));
      }

      if (this.createContentBtnWrapper) {
        this.dropdownSwitcher = this.createContentBtnWrapper.querySelector('.ez-dropdown__switcher');
        this.createContentBtn = this.createContentBtnWrapper.querySelector('.ez-page-info-bar__create-content');
      }

      this.infoToggler = this.container.querySelector('.ez-page-info-bar__info-tray-toggler');
      this.infoTray = doc.querySelector('.ez-info-tray');
      this.redirectToAction = this.redirectToAction.bind(this);
      this.showVersionLanguagePicker = this.showVersionLanguagePicker.bind(this);
      this.hideVersionLanguagePicker = this.hideVersionLanguagePicker.bind(this);
      this.toggleContentMode = this.toggleContentMode.bind(this);
      this.changePreviewMode = this.changePreviewMode.bind(this);
      this.showPreviewExtraActions = this.showPreviewExtraActions.bind(this);
      this.hidePreviewExtraActions = this.hidePreviewExtraActions.bind(this);
      this.toggleEditExtraActions = this.toggleEditExtraActions.bind(this);
      this.showEditExtraActions = this.showEditExtraActions.bind(this);
      this.hideEditExtraActions = this.hideEditExtraActions.bind(this);
      this.showTools = this.showTools.bind(this);
      this.hideTools = this.hideTools.bind(this);
      this.handlePopupShownEvent = this.handlePopupShownEvent.bind(this);
      this.handlePopupHiddenEvent = this.handlePopupHiddenEvent.bind(this);
      this.removeSubMenuBackdrop = this.removeSubMenuBackdrop.bind(this);
      this.onDraftConflictModalCancel = this.onDraftConflictModalCancel.bind(this);
      this.onVersionLanguagePickerBackdropClick = this.onVersionLanguagePickerBackdropClick.bind(this);
      this.toggleInfoTray = this.toggleInfoTray.bind(this);
      this.attachEventListeners();
    }

    _createClass(InfoBar, [{
      key: "attachEventListeners",
      value: function attachEventListeners() {
        var _this = this;

        if (!this.isCreateMode && this.contentActionSwitcher) {
          this.contentActionSwitcher.querySelector(SELECTOR_ICON_CHECKBOX).addEventListener('change', this.redirectToAction, false);
        }

        if (this.contentModeSwitcher) {
          this.contentModeSwitcher.querySelector(SELECTOR_ICON_CHECKBOX).addEventListener('change', this.toggleContentMode, false);
        }

        if (this.previewActions) {
          this.previewActions.forEach(function (action) {
            return action.addEventListener('click', _this.changePreviewMode, false);
          });
        }

        if (this.toolsToggler) {
          this.toolsToggler.addEventListener('click', this.showTools, false);
        }

        if (this.dropdownSwitcher) {
          this.dropdownSwitcher.addEventListener('click', this.toggleEditExtraActions, false);
        }

        if (this.createContentBtn) {
          this.createContentBtn.addEventListener('click', this.showPreviewExtraActions, false);
          var extraActions = this.container.querySelector(SELECTOR_EXTRA_ACTIONS_CREATE);

          if (extraActions) {
            this.attachSubmitEvent(extraActions);
          }
        }

        if (this.infoToggler && this.infoTray) {
          this.infoToggler.addEventListener('click', this.toggleInfoTray, false);
        }

        doc.body.addEventListener('ez-page-builder-hide-tools', this.hideTools, false);
        doc.body.addEventListener('ez-draft-conflict-modal-hidden', this.onDraftConflictModalCancel, false);
      }
    }, {
      key: "attachSubmitEvent",
      value: function attachSubmitEvent(actions) {
        var form = actions.querySelector('form');

        var radioBtns = _toConsumableArray(actions.querySelectorAll('.form-check [type="radio"]'));

        radioBtns.forEach(function (btn) {
          return btn.addEventListener('change', function () {
            form.submit();
          }, false);
        });
      }
    }, {
      key: "redirectToAction",
      value: function redirectToAction(event) {
        var dataset = event.currentTarget.dataset;

        if (this.contentActionSwitcher.classList.contains('disabled')) {
          return;
        }

        this.toggleSwitcherState(this.contentActionSwitcher);

        if (!dataset.urlPreview) {
          this.showVersionLanguagePicker();
        } else {
          global.location.href = dataset.urlPreview;
        }
      }
    }, {
      key: "addSubMenuBackdrop",
      value: function addSubMenuBackdrop(eventHandler) {
        if (this.subMenuBackdrop) {
          return;
        }

        this.subMenuBackdrop = doc.createElement('div');
        this.subMenuBackdrop.classList.add('ez-backdrop');
        this.subMenuBackdrop.addEventListener('click', eventHandler, false);
        doc.body.appendChild(this.subMenuBackdrop);
      }
    }, {
      key: "removeSubMenuBackdrop",
      value: function removeSubMenuBackdrop(eventHandler) {
        if (!this.subMenuBackdrop) {
          return;
        }

        this.subMenuBackdrop.removeEventListener('click', eventHandler);
        doc.body.removeChild(this.subMenuBackdrop);
        this.subMenuBackdrop = null;
      }
    }, {
      key: "toggleContentMode",
      value: function toggleContentMode() {
        this.toggleSwitcherState(this.contentModeSwitcher);
        doc.body.classList.toggle('ez-page-builder--fields-visible');
        eZ.helpers.tooltips.hideAll();
      }
    }, {
      key: "toggleSwitcherState",
      value: function toggleSwitcherState(switcher) {
        switcher.classList.toggle('is-checked');
      }
    }, {
      key: "toggleEditActions",
      value: function toggleEditActions(show) {
        this.editActionsWrapper.classList.toggle(CLASS_WITH_BACKDROP, show);
        this.editActionsWrapper.classList.toggle(CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN, !show);
      }
    }, {
      key: "changePreviewMode",
      value: function changePreviewMode(event) {
        this.previewActions.forEach(function (action) {
          return action.classList.remove(CLASS_PREVIEW_ACTION_SELECTED);
        });
        event.currentTarget.classList.add(CLASS_PREVIEW_ACTION_SELECTED);
        var type = event.currentTarget.dataset.previewMode;
        doc.querySelector('#page-builder-preview').style = "width: ".concat(PREVIEW_WIDTH_MAP[type], ";");
        eZ.helpers.tooltips.hideAll();
      }
    }, {
      key: "onDraftConflictModalCancel",
      value: function onDraftConflictModalCancel() {
        this.hideVersionLanguagePicker();
      }
    }, {
      key: "showVersionLanguagePicker",
      value: function showVersionLanguagePicker() {
        if (this.editActionsWrapper.classList.contains('ez-extra-actions--prevent-show')) {
          var languageRadioOption = this.editActionsWrapper.querySelector('[type="radio"]');
          languageRadioOption.checked = true;
          languageRadioOption.dispatchEvent(new CustomEvent('change'));
          return;
        }

        this.toggleEditActions(true);
        this.addSubMenuBackdrop(this.onVersionLanguagePickerBackdropClick);
      }
    }, {
      key: "onVersionLanguagePickerBackdropClick",
      value: function onVersionLanguagePickerBackdropClick(_ref2) {
        var target = _ref2.target;
        var wrapper = target.closest(SELECTOR_STANDARD_ACTIONS_WRAPPER);

        if (wrapper) {
          return;
        }

        this.hideVersionLanguagePicker();
      }
    }, {
      key: "hideVersionLanguagePicker",
      value: function hideVersionLanguagePicker() {
        var switcher = this.contentActionSwitcher.querySelector(SELECTOR_ICON_CHECKBOX);
        this.toggleEditActions(false);
        switcher.checked = false;
        this.toggleSwitcherState(this.contentActionSwitcher);
        this.removeSubMenuBackdrop(this.hidePreviewExtraActions);
      }
    }, {
      key: "showPreviewExtraActions",
      value: function showPreviewExtraActions() {
        var actions = this.createContentBtnWrapper.querySelector(SELECTOR_EXTRA_ACTIONS_CREATE);
        actions.classList.remove(CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN);
        actions.classList.add(CLASS_WITH_BACKDROP);
        this.addSubMenuBackdrop(this.hidePreviewExtraActions);
      }
    }, {
      key: "hidePreviewExtraActions",
      value: function hidePreviewExtraActions(_ref3) {
        var target = _ref3.target;
        var wrapper = target.closest(SELECTOR_EXTRA_ACTIONS_WRAPPER);

        if (wrapper) {
          return;
        }

        var actions = this.createContentBtnWrapper.querySelector(SELECTOR_EXTRA_ACTIONS_CREATE);
        actions.classList.add(CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN);
        actions.classList.remove(CLASS_WITH_BACKDROP);
        this.removeSubMenuBackdrop(this.hidePreviewExtraActions);
      }
    }, {
      key: "toggleEditExtraActions",
      value: function toggleEditExtraActions(event) {
        var isExpanded = event.target.classList.contains(CLASS_DROPDOWN_EXPANDED) || event.target.closest(".".concat(CLASS_DROPDOWN_EXPANDED));

        if (isExpanded) {
          this.hideEditExtraActions(event);
        } else {
          this.showEditExtraActions();
        }
      }
    }, {
      key: "showEditExtraActions",
      value: function showEditExtraActions() {
        var dropdown = this.createContentBtnWrapper.querySelector(SELECTOR_DROPDOWN);
        dropdown.classList.add(CLASS_DROPDOWN_EXPANDED);
        dropdown.classList.add(CLASS_WITH_BACKDROP);
        this.addSubMenuBackdrop(this.hideEditExtraActions);
      }
    }, {
      key: "hideEditExtraActions",
      value: function hideEditExtraActions(_ref4) {
        var target = _ref4.target;
        var isDropdown = target.classList.contains(CLASS_DROPDOWN_EXPANDED) || target.closest(".".concat(CLASS_DROPDOWN_EXPANDED));
        var isDropdownSwitcher = target.classList.contains(CLASS_DROPDOWN_SWITCHER);

        if (isDropdown && !isDropdownSwitcher) {
          return;
        }

        var dropdown = this.createContentBtnWrapper.querySelector(SELECTOR_DROPDOWN);
        dropdown.classList.remove(CLASS_DROPDOWN_EXPANDED, CLASS_WITH_BACKDROP);
        this.removeSubMenuBackdrop(this.hideEditExtraActions);
      }
    }, {
      key: "showTools",
      value: function showTools() {
        this.toolsList.classList.add(CLASS_TOOLS_EXPANDED);
        this.addSubMenuBackdrop(this.hideTools);
        $(doc.body).on('shown.bs.modal', this.handlePopupShownEvent);
        eZ.helpers.tooltips.hideAll();
      }
    }, {
      key: "hideTools",
      value: function hideTools(_ref5) {
        var target = _ref5.target;
        var isTool = target && (target.classList.contains(CLASS_TOOLS_EXPANDED) || target.closest(".".concat(CLASS_TOOLS_EXPANDED)));

        if (isTool) {
          return;
        }

        this.toolsList.classList.remove(CLASS_TOOLS_EXPANDED);
        this.removeSubMenuBackdrop(this.hideTools);
      }
    }, {
      key: "handlePopupShownEvent",
      value: function handlePopupShownEvent(_ref6) {
        var target = _ref6.target;
        $(target).on('hidden.bs.modal', this.handlePopupHiddenEvent);
        $(doc.body).off('shown.bs.modal', this.handlePopupShownEvent);
      }
    }, {
      key: "handlePopupHiddenEvent",
      value: function handlePopupHiddenEvent(_ref7) {
        var target = _ref7.target;
        this.hideTools({
          target: target
        });
        $(target).off('hidden.bs.modal', this.handlePopupHiddenEvent);
      }
    }, {
      key: "toggleInfoTray",
      value: function toggleInfoTray() {
        this.infoToggler.classList.toggle(CLASS_INFO_SELECTED);
        this.infoTray.classList.toggle(CLASS_INFO_VISIBLE);
        this.infoToggler.blur();
      }
    }]);

    return InfoBar;
  }();
})(window, window.document, window.eZ, window.jQuery);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.publish.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.publish.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, eZ) {
  var CLASS_FORM_INVALID = 'is-form-invalid';
  var CLASS_PAGE_FIELD_TYPE_INVALID = 'has-page-fieldtype-invalid';
  var CLASS_OTHER_FIELD_TYPES_INVALID = 'has-other-fieldtypes-invalid';
  var VALIDATOR_NAME_PAGE = 'EzLandingPageValidator';
  var VALIDATOR_NAME_PAGE_LAYOUT = 'EzLandingPageLayoutValidator';
  var form = doc.querySelector('.ez-form-validate');
  var submitBtns = form.querySelectorAll('[type="submit"]:not([formnovalidate])');
  var contentModeSwitcher = doc.querySelector('.ez-page-info-bar__content-mode-switcher');

  if (!contentModeSwitcher) {
    return;
  }

  submitBtns.forEach(function (btn) {
    var clickHandler = function clickHandler() {
      var isFormError = !parseInt(btn.dataset.isFormValid, 10);

      if (!isFormError) {
        return;
      }

      var validatorsWithErrors = btn.dataset.validatorsWithErrors.split(',');
      var isPageFieldTypeError = validatorsWithErrors.includes(VALIDATOR_NAME_PAGE);
      var isPageLayoutError = validatorsWithErrors.includes(VALIDATOR_NAME_PAGE_LAYOUT);
      var pageFieldTypeInvalidMethodName = isPageFieldTypeError ? 'add' : 'remove';

      var otherInvalidFieldTypes = _toConsumableArray(validatorsWithErrors);

      var pageFieldTypeIndex = otherInvalidFieldTypes.indexOf(VALIDATOR_NAME_PAGE);

      if (pageFieldTypeIndex > -1) {
        otherInvalidFieldTypes.splice(pageFieldTypeIndex, 1);
      }

      var pageLayoutTypeIndex = otherInvalidFieldTypes.indexOf(VALIDATOR_NAME_PAGE_LAYOUT);

      if (pageLayoutTypeIndex > -1) {
        otherInvalidFieldTypes.splice(pageLayoutTypeIndex, 1);
      }

      var otherFieldTypesInvalid = !!otherInvalidFieldTypes.length;
      var otherFieldTypesInvalidMethodName = otherFieldTypesInvalid ? 'add' : 'remove';
      contentModeSwitcher.classList.add(CLASS_FORM_INVALID);
      contentModeSwitcher.classList[pageFieldTypeInvalidMethodName](CLASS_PAGE_FIELD_TYPE_INVALID);
      contentModeSwitcher.classList[otherFieldTypesInvalidMethodName](CLASS_OTHER_FIELD_TYPES_INVALID);
      var iconWrapper = contentModeSwitcher.querySelector('.ez-warning-icon');
      var formAndPageFieldTypeErrorMessage = iconWrapper.dataset.formAndPageFieldTypeErrorMessage;
      var pageFieldTypeErrorMessage = iconWrapper.dataset.pageFieldTypeErrorMessage;
      var pageLayoutErrorMessage = iconWrapper.dataset.pageLayoutErrorMessage;
      var formErrorMessage = iconWrapper.dataset.formErrorMessage;
      var message = formErrorMessage;

      if (isPageFieldTypeError && otherFieldTypesInvalid) {
        message = formAndPageFieldTypeErrorMessage;
      } else if (isPageFieldTypeError && validatorsWithErrors.length === 1) {
        message = pageFieldTypeErrorMessage;
      } else if (isPageLayoutError) {
        message = pageLayoutErrorMessage;
      }

      eZ.helpers.notification.showErrorNotification(message);
    };

    btn.addEventListener('click', clickHandler, false);
  });
})(window, document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.right.sidebar.toggler.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.right.sidebar.toggler.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var SIDEBAR_MENU_SELECTOR = '.ez-page-builder-right-sidebar';
  var EXPAND_MENU_BUTTON_SELECTOR = '.ez-right-sidebar-toggler';
  doc.querySelector(EXPAND_MENU_BUTTON_SELECTOR).addEventListener('click', function () {
    doc.querySelector(EXPAND_MENU_BUTTON_SELECTOR).classList.toggle('ez-right-sidebar-toggler--expanded');
    doc.querySelector(SIDEBAR_MENU_SELECTOR).classList.toggle('ez-page-builder-right-sidebar--expanded');
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/core/drag.drop.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/core/drag.drop.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CLASS_PLACEHOLDER = 'droppable-placeholder';
var CLASS_PLACEHOLDER_REMOVING = 'droppable-placeholder--removing';
var SELECTOR_ZONE = '[data-ez-zone-id]';
var PLACEHOLDER_POSITION_TOP = 'top';
var TIMEOUT_REMOVE_PLACEHOLDERS = 500;

var DragDrop = /*#__PURE__*/function (_Component) {
  _inherits(DragDrop, _Component);

  var _super = _createSuper(DragDrop);

  function DragDrop(props) {
    var _this;

    _classCallCheck(this, DragDrop);

    _this = _super.call(this, props);
    _this.onDragOverTimeout = null;
    _this.placeholderRemovalTimeout = null;
    _this.getElement = _this.getElement.bind(_assertThisInitialized(_this));
    _this.getInitDragDropState = _this.getInitDragDropState.bind(_assertThisInitialized(_this));
    _this.scrollContainer = _this.scrollContainer.bind(_assertThisInitialized(_this));
    _this.removePlaceholderWithAnimation = _this.removePlaceholderWithAnimation.bind(_assertThisInitialized(_this));
    _this.removePlaceholderWithoutAnimation = _this.removePlaceholderWithoutAnimation.bind(_assertThisInitialized(_this));
    _this.createPlaceholder = _this.createPlaceholder.bind(_assertThisInitialized(_this));
    _this.insertAfter = _this.insertAfter.bind(_assertThisInitialized(_this));
    _this.insertBefore = _this.insertBefore.bind(_assertThisInitialized(_this));
    _this.addPlaceholderBesideElement = _this.addPlaceholderBesideElement.bind(_assertThisInitialized(_this));
    _this.addPlaceholderInZone = _this.addPlaceholderInZone.bind(_assertThisInitialized(_this));
    _this.removePlaceholders = _this.removePlaceholders.bind(_assertThisInitialized(_this));
    _this.removePlaceholdersAfterTimeout = _this.removePlaceholdersAfterTimeout.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Finds next element identifier
   *
   * @method findNextElementIdentifier
   * @param {HTMLElement} placeholder
   * @param {String} elementIdentifier
   * @returns {String|null}
   */


  _createClass(DragDrop, [{
    key: "findNextElementIdentifier",
    value: function findNextElementIdentifier(placeholder, elementIdentifier) {
      if (placeholder.dataset.position === PLACEHOLDER_POSITION_TOP) {
        return placeholder.dataset[elementIdentifier];
      } else {
        return placeholder.nextElementSibling ? placeholder.nextElementSibling.dataset[elementIdentifier] : null;
      }
    }
    /**
     * Removes placeholders
     *
     * @method removePlaceholders
     * @param {NodeList|Array} placeholders
     * @param {Function} removePlaceholderCallback
     */

  }, {
    key: "removePlaceholders",
    value: function removePlaceholders(placeholders, removePlaceholderCallback) {
      placeholders.forEach(removePlaceholderCallback);
    }
    /**
     * Removes a placeholder node without removal animation
     *
     * @method removePlaceholderWithoutAnimation
     * @param {HTMLElement} placeholder
     */

  }, {
    key: "removePlaceholderWithoutAnimation",
    value: function removePlaceholderWithoutAnimation(placeholder) {
      window.clearTimeout(this.placeholderRemovalTimeout);
      window.clearTimeout(this.onDragOverTimeout);

      if (!placeholder || !placeholder.parentNode) {
        return;
      }

      placeholder.parentNode.removeChild(placeholder);
    }
    /**
     * Removes a placeholder with removal animation
     *
     * @method removePlaceholderWithAnimation
     * @param {HTMLElement} placeholder
     */

  }, {
    key: "removePlaceholderWithAnimation",
    value: function removePlaceholderWithAnimation(placeholder) {
      var _this2 = this;

      placeholder.classList.add(CLASS_PLACEHOLDER_REMOVING);
      window.clearTimeout(this.placeholderRemovalTimeout);
      window.clearTimeout(this.onDragOverTimeout);
      this.placeholderRemovalTimeout = window.setTimeout(function () {
        return _this2.removePlaceholderWithoutAnimation(placeholder);
      }, TIMEOUT_REMOVE_PLACEHOLDERS);
    }
    /**
     * Rremoves a placeholder node after a timeout
     *
     * @method removePlaceholdersAfterTimeout
     * @param {Function} onTimeout
     */

  }, {
    key: "removePlaceholdersAfterTimeout",
    value: function removePlaceholdersAfterTimeout(getPlaceholderNodes, onTimeout) {
      var _this3 = this;

      window.clearTimeout(this.onDragOverTimeout);
      this.onDragOverTimeout = window.setTimeout(function () {
        _this3.removePlaceholders(getPlaceholderNodes(), _this3.removePlaceholderWithAnimation);

        onTimeout();
      }, TIMEOUT_REMOVE_PLACEHOLDERS);
    }
    /**
     * Adds a placeholder node beside element (above or below)
     *
     * @method addPlaceholderBesideElement
     * @param {HTMLElement} element
     * @param {Number} positionY
     * @param {NodeList|Array} placeholders
     * @param {String} elementIdentifier a data attribute identifier (like 'zone' stays for `data-zone`)
     * @param {Function} onElementDragOver
     * @returns {Object}
     */

  }, {
    key: "addPlaceholderBesideElement",
    value: function addPlaceholderBesideElement(element, positionY, placeholders, elementIdentifier, onElementDragOver, _ref) {
      var placeholderPosition = _ref.placeholderPosition,
          placeholderElementId = _ref.placeholderElementId,
          placeholderZoneId = _ref.placeholderZoneId;
      var placeholder = this.createPlaceholder(element, elementIdentifier, onElementDragOver);
      var rect = element.getBoundingClientRect();
      var middlePositionY = rect.top + rect.height / 2;
      var position = positionY <= middlePositionY ? PLACEHOLDER_POSITION_TOP : 'bottom';
      var placehoderExists = placeholderPosition === position && placeholderElementId === placeholder.dataset[elementIdentifier] && placeholderZoneId === placeholder.dataset.ezZoneId;

      if (placehoderExists) {
        return {
          placeholderPosition: placeholderPosition,
          placeholderElementId: placeholderElementId,
          placeholderZoneId: placeholderZoneId
        };
      }

      this.removePlaceholders(placeholders, this.removePlaceholderWithoutAnimation);
      placeholder.dataset.position = position;

      if (position === PLACEHOLDER_POSITION_TOP) {
        this.insertBefore(element, placeholder);
      } else {
        this.insertAfter(element, placeholder);
      }

      return {
        placeholderElementId: placeholder.dataset[elementIdentifier],
        placeholderZoneId: placeholder.dataset.ezZoneId,
        placeholderPosition: position
      };
    }
    /**
     * Add a placeholder node inside a zone
     *
     * @method addPlaceholderInZone
     * @param {HTMLElement} zone
     * @param {NodeList|Array} placeholders
     * @param {String} elementIdentifier a data attribute identifier (like 'zone' stays for `data-zone`)
     * @param {Function} onElementDragOver
     */

  }, {
    key: "addPlaceholderInZone",
    value: function addPlaceholderInZone(zone, placeholders, elementIdentifier, onElementDragOver) {
      var placeholder = this.createPlaceholder(zone, elementIdentifier, onElementDragOver);
      this.removePlaceholders(placeholders, this.removePlaceholderWithoutAnimation);
      zone.appendChild(placeholder);
    }
    /**
     * Inserts a node before a target node
     *
     * @method insertBefore
     * @param {HTMLElement} where
     * @param {HTMLElement} what
     */

  }, {
    key: "insertBefore",
    value: function insertBefore(where, what) {
      if (where && where.parentNode) {
        where.parentNode.insertBefore(what, where);
      }
    }
    /**
     * Inserts a node after a target node
     *
     * @method insertAfter
     * @param {HTMLElement} where
     * @param {HTMLElement} what
     */

  }, {
    key: "insertAfter",
    value: function insertAfter(where, what) {
      if (where && where.parentNode) {
        where.parentNode.insertBefore(what, where.nextSibling);
      }
    }
    /**
     * Create a placeholder node
     *
     * @method createPlaceholder
     * @param {HTMLElement} element
     * @param {String} elementIdentifier a data attribute identifier (like 'zone' stays for `data-zone`)
     * @returns {HTMLElement}
     */

  }, {
    key: "createPlaceholder",
    value: function createPlaceholder(element, elementIdentifier) {
      var placeholder = document.createElement('div');
      var classNames = element.classList;
      var dropHereMessage = Translator.trans(
      /*@Desc("Drop block here")*/
      'drop.block.here', {}, 'page_builder');
      placeholder.classList.add(CLASS_PLACEHOLDER);

      if (!element.dataset.ezZoneId && classNames.length) {
        var _placeholder$classLis;

        (_placeholder$classLis = placeholder.classList).add.apply(_placeholder$classLis, _toConsumableArray(classNames));
      }

      if (element.dataset[elementIdentifier]) {
        placeholder.dataset[elementIdentifier] = element.dataset[elementIdentifier];
      }

      placeholder.dataset.zoneId = element.dataset.zoneId ? element.dataset.zoneId : element.closest(SELECTOR_ZONE).dataset.ezZoneId;
      placeholder.dataset.dropHereMessage = dropHereMessage;
      return placeholder;
    }
    /**
     * Scroll container
     *
     * @method scrollContainer
     * @param {Event} event
     * @param {Number} event.clientY
     * @param {HTMLElement} container
     */

  }, {
    key: "scrollContainer",
    value: function scrollContainer(_ref2, container) {
      var clientY = _ref2.clientY;
      var diffSize = 50;

      if (container.innerHeight - clientY < diffSize) {
        container.scrollBy(0, 10);
      } else if (clientY < diffSize) {
        container.scrollBy(0, -10);
      }
    }
    /**
     * Gets an element recursively that matches a callback action comparison
     *
     * @method getElement
     * @param {HTMLElement} element
     * @param {Function} checkIsCorrect comparison check callback
     * @returns {HTMLElement|undefined}
     */

  }, {
    key: "getElement",
    value: function getElement(element, checkIsCorrect) {
      var parent = element.parentNode;

      if (!parent) {
        return undefined;
      }

      if (checkIsCorrect(element)) {
        return element;
      }

      return checkIsCorrect(parent) ? parent : this.getElement(parent, checkIsCorrect);
    }
    /**
     * Returns initial drag & drop state
     *
     * @method getInitDragDropState
     * @returns {Object}
     */

  }, {
    key: "getInitDragDropState",
    value: function getInitDragDropState() {
      return {
        draggedSidebarElementType: null,
        dragOverZoneId: null,
        placeholderType: null,
        placeholderElementId: null,
        placeholderZoneId: null,
        placeholderPosition: null
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.render({
        getElement: this.getElement,
        getInitDragDropState: this.getInitDragDropState,
        scrollContainer: this.scrollContainer,
        removePlaceholderWithAnimation: this.removePlaceholderWithAnimation,
        removePlaceholderWithoutAnimation: this.removePlaceholderWithoutAnimation,
        insertAfter: this.insertAfter,
        insertBefore: this.insertBefore,
        removePlaceholders: this.removePlaceholders,
        addPlaceholderBesideElement: this.addPlaceholderBesideElement,
        addPlaceholderInZone: this.addPlaceholderInZone,
        removePlaceholdersAfterTimeout: this.removePlaceholdersAfterTimeout,
        findNextElementIdentifier: this.findNextElementIdentifier
      });
    }
  }]);

  return DragDrop;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DragDrop.propTypes = {
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DragDrop);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Generates a GUID string.
 *
 * @function generateGuid
 * @param prefix {String} the id prefix
 * @return {String} The generated GUID.
 *
 * @example b-af8a8416-6e18-a307-bd9c-f2c947bbb3aa
 * @author Slavik Meltser (http://slavik.meltser.info/?p=142)
 */
var generateGuid = function generateGuid() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'guid-';
  return [prefix, makeGuidPiece(), makeGuidPiece(true), makeGuidPiece(true), makeGuidPiece()].join('');
};
/**
 * Generates GUID piece
 * @param addDashes {Boolean} add dashes flag
 * @return {String} generated piece of guid
 */


var makeGuidPiece = function makeGuidPiece(addDashes) {
  var piece = (Math.random().toString(16) + '000000000').substr(2, 8);
  return addDashes ? '-' + piece.substr(0, 4) + '-' + piece.substr(4, 4) : piece;
};

/* harmony default export */ __webpack_exports__["default"] = (generateGuid);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Clones any object. Faster alternative to `JSON.parse(JSON.stringify)`
 *
 * @function deepClone
 * @param {Any} data
 * @returns {Any} cloned data
 */
var deepClone = function deepClone(data) {
  var clonedData;

  if (_typeof(data) !== 'object') {
    return data;
  }

  if (!data) {
    return data;
  }

  if (Object.prototype.toString.apply(data) === '[object Array]') {
    clonedData = [];

    for (var i = 0; i < data.length; i++) {
      clonedData[i] = deepClone(data[i]);
    }

    return clonedData;
  }

  clonedData = {};

  for (var _i in data) {
    if (data.hasOwnProperty(_i)) {
      clonedData[_i] = deepClone(data[_i]);
    }
  }

  return clonedData;
};

/* harmony default export */ __webpack_exports__["default"] = (deepClone);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/helpers/ellipsize.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/helpers/ellipsize.js ***!
  \*****************************************************************************************************/
/*! exports provided: ellipsizeText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipsizeText", function() { return ellipsizeText; });
/**
 * Creates ellipsis for text in an element
 * Leaves element unchanged.
 *
 * @param {HTMLElement} element
 * @returns {String}
 */
var ellipsizeText = function ellipsizeText(element) {
  var originalText = element.innerText;
  var wordArray = element.innerText.split(' ');
  var ellipsizedText = originalText;

  while (element.scrollHeight > element.offsetHeight) {
    wordArray.pop();
    ellipsizedText = wordArray.join(' ') + '...';
    element.innerText = ellipsizedText;
  }

  element.innerText = originalText;
  return ellipsizedText;
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/helpers/serialize.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/helpers/serialize.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Checks whether a given item is an object.
 *
 * @function isObject
 * @param {Any} item
 * @returns {Boolean}
 */
var isObject = function isObject(item) {
  return item instanceof Object && item.constructor === Object;
};
/**
 * Serializes object into a string format
 *
 * @function serializeObject
 * @param {String} key param key
 * @param {Object} param reguest param
 * @returns {String}
 */


var serializeObject = function serializeObject(key, param) {
  return Object.entries(param).reduce(function (requestParameters, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        paramKey = _ref2[0],
        paramValue = _ref2[1];

    return [].concat(_toConsumableArray(requestParameters), [serializeByType("".concat(key, "[").concat(paramKey, "]"), paramValue)]);
  }, []).join('&');
};
/**
 * Serializes array into a string format
 *
 * @function serializeArray
 * @param {String} key param key
 * @param {Array} param reguest param
 * @returns {String}
 */


var serializeArray = function serializeArray(key, param) {
  return param.map(function (paramValue, index) {
    return serializeByType("".concat(key, "[").concat(index, "]"), paramValue);
  }).join('&');
};
/**
 * Serializes data by type
 *
 * @function serializeByType
 * @param {String} key param key
 * @param {Mixed} param reguest param
 * @returns {String}
 */


var serializeByType = function serializeByType(key, value) {
  if (isObject(value)) {
    return serializeObject(key, value);
  } else if (Array.isArray(value)) {
    return serializeArray(key, value);
  } else {
    return "".concat(key, "=").concat(value);
  }
};
/**
 * Serializes request params into a string format
 *
 * @function serialize
 * @param {Object} params request params
 * @returns {String}
 */


var serialize = function serialize(params) {
  return Object.keys(params).map(function (key) {
    var value = params[key];

    if (isObject(value)) {
      return serializeObject(key, value);
    }

    if (Array.isArray(value)) {
      return serializeArray(key, value);
    }

    return encodeURIComponent(key) + '=' + encodeURIComponent(value);
  }).join('&');
};

/* harmony default export */ __webpack_exports__["default"] = (serialize);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Icon = function Icon(props) {
  var linkHref = props.customPath ? props.customPath : window.eZ.helpers.icon.getIconPath(props.name);
  var className = 'ez-icon';

  if (props.extraClasses) {
    className = "".concat(className, " ").concat(props.extraClasses);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: linkHref
  }));
};

Icon.propTypes = {
  extraClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  customPath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Icon.defaultProps = {
  customPath: null,
  name: null
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/action-menu/action.menu.js":
/*!***********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/action-menu/action.menu.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var ActionMenu = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var attrs = {
    className: "c-action-menu ".concat(props.forceShow && 'c-action-menu--keep-visible'),
    onMouseLeave: props.handleMouseLeave
  };
  var handlerAttrs = {
    className: 'c-action-menu__handler'
  };

  if (props.isEditable) {
    handlerAttrs.className = "".concat(handlerAttrs.className, " ").concat(handlerAttrs.className, "--is-editable");
    handlerAttrs.onMouseDown = props.handleDragStart;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, attrs, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", handlerAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "drag"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-action-menu__name"
  }, props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-action-menu__actions"
  }, props.children));
});
ActionMenu.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  handleMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleDragStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isEditable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  forceShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ActionMenu);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.block.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.block.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.js");
/* harmony import */ var _iframe_iframe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../iframe/iframe */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js");
/* harmony import */ var _action_menu_action_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action-menu/action.menu */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/action-menu/action.menu.js");
/* harmony import */ var _config_popup_config_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config-popup/config.popup */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/config-popup/config.popup.js");
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
/* harmony import */ var _date_picker_date_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../date-picker/date.picker */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/date-picker/date.picker.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }











var SELECTOR_BLOCK_PREVIEW = '.c-block-preview';
var CLASS_ACTION_MENU_TO_RIGHT = 'c-preview-block--action-menu-to-right';
var ACTION_MENU_HEIGHT = 38;

var PreviewBlock = /*#__PURE__*/function (_Component) {
  _inherits(PreviewBlock, _Component);

  var _super = _createSuper(PreviewBlock);

  function PreviewBlock(props) {
    var _this;

    _classCallCheck(this, PreviewBlock);

    _this = _super.call(this, props);
    _this._refConfigPopupComponent = null;
    _this._refPreviewComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this._refIframeComponent = null;
    _this._refActionMenuComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.state = {
      shouldPopupWatchLoad: false,
      isConfigPopupVisible: false,
      isConfigDataSent: false,
      isUdwOpened: false,
      maxHeight: 50,
      isActive: props.forceShowActionMenu
    };
    _this.prepareConfigPopup = _this.prepareConfigPopup.bind(_assertThisInitialized(_this));
    _this.removeBlock = _this.removeBlock.bind(_assertThisInitialized(_this));
    _this.hideConfigPopup = _this.hideConfigPopup.bind(_assertThisInitialized(_this));
    _this.handleDragStart = _this.handleDragStart.bind(_assertThisInitialized(_this));
    _this.initDragging = _this.initDragging.bind(_assertThisInitialized(_this));
    _this.unMountBlock = _this.unMountBlock.bind(_assertThisInitialized(_this));
    _this.showConfigPopup = _this.showConfigPopup.bind(_assertThisInitialized(_this));
    _this.handleOnConfigPopupIframeLoad = _this.handleOnConfigPopupIframeLoad.bind(_assertThisInitialized(_this));
    _this.handleLoadAfterConfigFormSubmit = _this.handleLoadAfterConfigFormSubmit.bind(_assertThisInitialized(_this));
    _this.preventHidingConfigPopup = _this.preventHidingConfigPopup.bind(_assertThisInitialized(_this));
    _this.openUdw = _this.openUdw.bind(_assertThisInitialized(_this));
    _this.closeUdw = _this.closeUdw.bind(_assertThisInitialized(_this));
    _this.setConfigPopupRef = _this.setConfigPopupRef.bind(_assertThisInitialized(_this));
    _this.setConfigIframeRef = _this.setConfigIframeRef.bind(_assertThisInitialized(_this));
    _this.setConfigFormSubmittedState = _this.setConfigFormSubmittedState.bind(_assertThisInitialized(_this));
    _this.forceConfigPopupBackdropHidden = _this.forceConfigPopupBackdropHidden.bind(_assertThisInitialized(_this));
    _this.getConfigIframe = _this.getConfigIframe.bind(_assertThisInitialized(_this));
    _this.getConfigPopup = _this.getConfigPopup.bind(_assertThisInitialized(_this));
    _this.removeDragEventListeners = _this.removeDragEventListeners.bind(_assertThisInitialized(_this));
    _this.setActionMenuPosition = _this.setActionMenuPosition.bind(_assertThisInitialized(_this));
    _this.openAirtimePopup = _this.openAirtimePopup.bind(_assertThisInitialized(_this));
    _this.changeAirtime = _this.changeAirtime.bind(_assertThisInitialized(_this));
    _this.closeAirtimePopup = _this.closeAirtimePopup.bind(_assertThisInitialized(_this));
    _this.setAirtimePopupRef = _this.setAirtimePopupRef.bind(_assertThisInitialized(_this));
    _this.toggleActionMenuDisplay = _this.toggleActionMenuDisplay.bind(_assertThisInitialized(_this));
    _this.hideActionMenu = _this.hideActionMenu.bind(_assertThisInitialized(_this));
    _this.checkShouldShowActionMenu = _this.checkShouldShowActionMenu.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PreviewBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);

      if (!this.props.meta.preview.length) {
        wrapper.style.minHeight = '50px';
      }

      if (window.getComputedStyle(wrapper).position === 'static') {
        wrapper.style.position = 'relative';
      }

      wrapper.dataset.type = 'preview';
      wrapper.tabIndex = '0';
      wrapper.addEventListener('dragover', this.props.onDragOver, false);
      wrapper.addEventListener('dragstart', this.initDragging, false);
      wrapper.addEventListener('dragend', this.removeDragEventListeners, false);
      wrapper.addEventListener('mouseenter', this.setActionMenuPosition, false);
      wrapper.addEventListener('click', this.toggleActionMenuDisplay, false);
      window.eZ.helpers.tooltips.parse(wrapper);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      wrapper.removeEventListener('mouseenter', this.showActionMenu);
      wrapper.removeEventListener('mouseleave', this.hideActionMenu);
      wrapper.removeEventListener('dragover', this.props.onDragOver);
      wrapper.removeEventListener('dragend', this.removeDragEventListeners);
      wrapper.removeEventListener('mouseenter', this.setActionMenuPosition);
      wrapper.removeEventListener('click', this.toggleActionMenuDisplay);
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(this.props.udwContainer);
    }
    /**
     * Finds block preview wrapper
     *
     * @method findBlockWrapper
     * @param {HTMLElement} block
     * @returns {HTMLElement|undefined}
     */

  }, {
    key: "findBlockWrapper",
    value: function findBlockWrapper(block) {
      if (!block) {
        return;
      }

      return block.dataset.blockId ? block : block.closest('[data-ez-block-id]');
    }
  }, {
    key: "getConfigIframe",
    value: function getConfigIframe() {
      return this._refIframeComponent && this._refIframeComponent._refIframe;
    }
  }, {
    key: "getConfigPopup",
    value: function getConfigPopup() {
      return this._refConfigPopupComponent && this._refConfigPopupComponent._refModal;
    }
  }, {
    key: "getAirtimePopup",
    value: function getAirtimePopup() {
      return this._refAirtimePopupComponent && this._refAirtimePopupComponent._refModal;
    }
  }, {
    key: "toggleActionMenuDisplay",
    value: function toggleActionMenuDisplay(event) {
      var _this2 = this;

      var actionMenu = this._refActionMenuComponent.current;
      var isActionMenu = event.target === actionMenu;
      var isInActionMenu = actionMenu.contains(event.target);

      if ((isActionMenu || isInActionMenu) && this.state.isActive) {
        return;
      }

      this.setState(function (state, props) {
        return {
          isActive: !props.forceShowActionMenu
        };
      }, function () {
        var isActive = _this2.state.isActive;
        var methodName = isActive ? 'addEventListener' : 'removeEventListener';

        var iframeBody = _this2.findBlockWrapper(_this2._refPreviewComponent.current).closest('body');

        iframeBody[methodName]('click', _this2.hideActionMenu, false);

        _this2.props.onClick(isActive ? _this2.props.block.id : null);
      });
    }
  }, {
    key: "hideActionMenu",
    value: function hideActionMenu(event) {
      var _this3 = this;

      if (!this._refPreviewComponent.current) {
        return;
      }

      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      var isInBlock = wrapper.contains(event.target);
      var isBlock = wrapper === event.target;

      if (isInBlock || isBlock) {
        return;
      }

      this.setState(function () {
        return {
          isActive: false
        };
      }, function () {
        return _this3.props.onClickOutside(_this3.props.block.id);
      });
    }
  }, {
    key: "setActionMenuPosition",
    value: function setActionMenuPosition(_ref) {
      var currentTarget = _ref.currentTarget;

      if (currentTarget.querySelector('.c-action-menu')) {
        var rect = currentTarget.getBoundingClientRect();
        var shouldAlignActionMenuToRight = rect.left > window.innerWidth / 2;
        var actionMenuTopPosition = rect.y < 0 ? Math.abs(rect.y) : 0;
        currentTarget.querySelector('.c-action-menu').style.top = actionMenuTopPosition + 'px';
        currentTarget.classList.toggle(CLASS_ACTION_MENU_TO_RIGHT, shouldAlignActionMenuToRight);
      }
    }
  }, {
    key: "openAirtimePopup",
    value: function openAirtimePopup(_ref2) {
      var detail = _ref2.detail;
      var popupTitle = Translator.trans(
      /*@Desc("Content airtime settings")*/
      'airtime_popup.title', {}, 'page_builder');
      var discardLabel = Translator.trans(
      /*@Desc("Discard")*/
      'airtime_popup.discard.btn', {}, 'page_builder');
      var submitLabel = Translator.trans(
      /*@Desc("Submit")*/
      'airtime_popup.submit.btn', {}, 'page_builder');
      document.body.classList.add('ez-airtime-popup-visible');
      this.airtimeDate = detail.airtime;
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_config_popup_config_popup__WEBPACK_IMPORTED_MODULE_7__["default"], {
        ref: this.setAirtimePopupRef,
        onClose: this.closeAirtimePopup,
        isVisible: true,
        isLoading: false,
        additionalClasses: "c-config-popup--airtime",
        name: popupTitle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_date_picker_date_picker__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onDateChange: this.changeAirtime,
        airtime: this.airtimeDate
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-config-popup__btns"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary font-weight-bold",
        onClick: this.applyAirtime.bind(this, detail.onSubmit)
      }, submitLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-secondary",
        onClick: this.closeAirtimePopup
      }, discardLabel))), this.props.airtimeContainer);
    }
  }, {
    key: "applyAirtime",
    value: function applyAirtime(callback) {
      if (!this.airtimeDate) {
        return;
      }

      this.closeAirtimePopup();
      callback(this.airtimeDate);
    }
  }, {
    key: "changeAirtime",
    value: function changeAirtime(airtime) {
      this.airtimeDate = airtime;
    }
  }, {
    key: "setAirtimePopupRef",
    value: function setAirtimePopupRef(popup) {
      this._refAirtimePopupComponent = popup;
    }
  }, {
    key: "closeAirtimePopup",
    value: function closeAirtimePopup() {
      this.forceAirtimePopupBackdropHidden();
      document.body.classList.remove('ez-airtime-popup-visible');
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(this.props.airtimeContainer);
    }
  }, {
    key: "openUdw",
    value: function openUdw(_ref3) {
      var _this4 = this;

      var detail = _ref3.detail;
      var UniversalDiscovery = window.eZ.modules.UniversalDiscovery;

      var udwProps = _objectSpread(_objectSpread({}, detail), {}, {
        onCancel: this.closeUdw.bind(this, detail.onCancel),
        onConfirm: function onConfirm(items) {
          detail.onConfirm(items);

          _this4.closeUdw();
        }
      });

      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.getConfigPopup()).on('hide.bs.modal', this.preventHidingConfigPopup);
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UniversalDiscovery, udwProps), this.props.udwContainer);
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isUdwOpened: true
        });
      });
    }
  }, {
    key: "closeUdw",
    value: function closeUdw(callback) {
      var _this5 = this;

      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.getConfigPopup()).off('hide.bs.modal', this.preventHidingConfigPopup);
      this.setState(function () {
        return {
          isUdwOpened: false
        };
      }, function () {
        if (typeof callback === 'function') {
          callback();
        }

        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(_this5.props.udwContainer);
      });
    }
  }, {
    key: "unMountBlock",
    value: function unMountBlock() {
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      window.eZ.helpers.tooltips.hideAll(wrapper);
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(wrapper);
      wrapper.parentNode.removeChild(wrapper);
    }
  }, {
    key: "removeBlock",
    value: function removeBlock() {
      this.unMountBlock();
      this.props.onRemove(this.props.block);
    }
  }, {
    key: "setConfigFormSubmittedState",
    value: function setConfigFormSubmittedState() {
      this.getConfigIframe().onload = this.handleLoadAfterConfigFormSubmit;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: true,
          isConfigDataSent: true,
          shouldPopupWatchLoad: true
        });
      });
    }
  }, {
    key: "handleLoadAfterConfigFormSubmit",
    value: function handleLoadAfterConfigFormSubmit() {
      var _this6 = this;

      var iframe = this.getConfigIframe();
      var iframeDocument = iframe.contentDocument;
      var blockConfiguration = iframeDocument.querySelector('[name="BlockConfiguration"]');
      var blockVisible = iframeDocument.querySelector('[name="BlockVisible"]');

      if (!blockConfiguration) {
        this.attachConfigPopupEventHandlers();
        this.setState(function (state) {
          return _objectSpread(_objectSpread({}, state), {}, {
            isConfigDataSent: false,
            shouldPopupWatchLoad: false
          });
        });
        return;
      }

      var blockData = JSON.parse(blockConfiguration.content);
      var isVisible = parseInt(blockVisible.content, 10);
      iframe.onload = null;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: false,
          isConfigDataSent: false,
          shouldPopupWatchLoad: false
        });
      }, function () {
        return _this6.props.onBlockDataUpdate({
          blockData: blockData,
          isVisible: isVisible
        });
      });
    }
  }, {
    key: "handleOnConfigPopupIframeLoad",
    value: function handleOnConfigPopupIframeLoad(iframe) {
      if (this.state.isUdwOpened) {
        return;
      }

      this.showConfigPopup(iframe);
    }
  }, {
    key: "renderConfigPopup",
    value: function renderConfigPopup() {
      var _this$state = this.state,
          isConfigPopupVisible = _this$state.isConfigPopupVisible,
          isConfigDataSent = _this$state.isConfigDataSent,
          shouldPopupWatchLoad = _this$state.shouldPopupWatchLoad,
          isUdwOpened = _this$state.isUdwOpened;
      var _this$props = this.props,
          block = _this$props.block,
          meta = _this$props.meta;

      if (!isConfigPopupVisible) {
        this.forceConfigPopupBackdropHidden();
        return null;
      }

      var iframeAttrs = {
        ref: this.setConfigIframeRef,
        src: 'about:blank',
        id: block.id,
        name: block.id,
        title: block.id,
        onLoad: isConfigDataSent ? this.handleLoadAfterConfigFormSubmit : this.handleOnConfigPopupIframeLoad,
        isVisible: !isConfigDataSent
      };
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_config_popup_config_popup__WEBPACK_IMPORTED_MODULE_7__["default"], {
        ref: this.setConfigPopupRef,
        onClose: this.hideConfigPopup,
        isVisible: isConfigPopupVisible,
        isLoading: shouldPopupWatchLoad,
        name: block.name,
        type: meta.config.name,
        hasFocus: !isUdwOpened
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iframe_iframe__WEBPACK_IMPORTED_MODULE_5__["default"], iframeAttrs)), document.querySelector('.m-page-builder__modal-container'));
    }
  }, {
    key: "forceConfigPopupBackdropHidden",
    value: function forceConfigPopupBackdropHidden() {
      var popup = this.getConfigPopup();
      this.forcePopupBackdropHidden(popup);
    }
  }, {
    key: "forceAirtimePopupBackdropHidden",
    value: function forceAirtimePopupBackdropHidden() {
      var popup = this.getAirtimePopup();
      this.forcePopupBackdropHidden(popup);
    }
  }, {
    key: "forcePopupBackdropHidden",
    value: function forcePopupBackdropHidden(popup) {
      if (popup) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(popup).modal('hide');
      }
    }
  }, {
    key: "hideConfigPopup",
    value: function hideConfigPopup() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: false,
          isConfigDataSent: false,
          shouldPopupWatchLoad: false
        });
      });
    }
  }, {
    key: "showConfigPopup",
    value: function showConfigPopup() {
      if (!this.state.shouldPopupWatchLoad) {
        return;
      }

      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: true,
          isConfigDataSent: false,
          shouldPopupWatchLoad: false
        });
      }, this.attachConfigPopupEventHandlers);
    }
  }, {
    key: "preventHidingConfigPopup",
    value: function preventHidingConfigPopup(event) {
      event.preventDefault();
    }
  }, {
    key: "prepareConfigPopup",
    value: function prepareConfigPopup() {
      var _this7 = this;

      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: true,
          shouldPopupWatchLoad: true
        });
      }, function () {
        return _this7.props.onConfigPopupOpen(_this7.props.block);
      });
    }
  }, {
    key: "attachConfigPopupEventHandlers",
    value: function attachConfigPopupEventHandlers() {
      if (this.state.isConfigDataSent) {
        return;
      }

      var iframeDoc = this.getConfigIframe().contentDocument;
      iframeDoc.body.addEventListener('ez-open-udw', this.openUdw, false);
      iframeDoc.body.addEventListener('ez-open-airtime-popup', this.openAirtimePopup, false);
      iframeDoc.querySelector('[name="block_configuration"]').addEventListener('submit', this.setConfigFormSubmittedState, false);
      iframeDoc.querySelector('[data-form-action="discard"]').addEventListener('click', this.hideConfigPopup, false);
    }
  }, {
    key: "initDragging",
    value: function initDragging(event) {
      var preview = event.currentTarget.querySelector(SELECTOR_BLOCK_PREVIEW);
      var image = document.querySelector("[data-ez-sidebar-block-type=\"".concat(this.props.meta.config.type, "\"]"));

      if (preview) {
        event.currentTarget.ondragover = function () {
          return true;
        };

        event.currentTarget.addEventListener('drag', this.props.onDrag, false);
      }

      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', image);
      event.dataTransfer.setDragImage(image, 0, 0);
    }
  }, {
    key: "removeDragEventListeners",
    value: function removeDragEventListeners() {
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      wrapper.removeEventListener('drag', this.props.onDrag);
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart() {
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      var _this$props2 = this.props,
          block = _this$props2.block,
          meta = _this$props2.meta;
      var preview = wrapper.querySelector(SELECTOR_BLOCK_PREVIEW);
      meta.preview = preview.innerHTML;
      wrapper.draggable = true;
      this.props.onDragStart({
        block: block,
        meta: meta,
        wrapperClasses: wrapper.className.split(' '),
        unMountBlock: this.unMountBlock
      });
    }
  }, {
    key: "checkShouldShowActionMenu",
    value: function checkShouldShowActionMenu() {
      return this.props.forceShowActionMenu && this.state.isActive;
    }
  }, {
    key: "renderActionMenu",
    value: function renderActionMenu() {
      var _this$props3 = this.props,
          block = _this$props3.block,
          meta = _this$props3.meta,
          isEditable = _this$props3.isEditable,
          isAvailable = _this$props3.isAvailable;
      var props = {
        name: block.name || meta.config.name,
        handleDragStart: this.handleDragStart,
        handleMouseLeave: this.hideActionMenu,
        blockId: block.id,
        isEditable: isEditable && isAvailable,
        forceShow: this.checkShouldShowActionMenu(),
        ref: this._refActionMenuComponent
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_action_menu_action_menu__WEBPACK_IMPORTED_MODULE_6__["default"], props, this.renderActions());
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var settingAttrs = {
        className: 'c-preview-block__action',
        'data-extra-classes': 'ez-tooltip--block-preview',
        title: Translator.trans(
        /*@Desc("Block settings")*/
        'block.settings', {}, 'page_builder')
      };
      var removeAttrs = {
        className: 'c-preview-block__action',
        'data-extra-classes': 'ez-tooltip--block-preview',
        title: Translator.trans(
        /*@Desc("Delete block")*/
        'block.delete', {}, 'page_builder')
      };

      if (this.props.isEditable) {
        settingAttrs.className = "".concat(settingAttrs.className, " ").concat(settingAttrs.className, "--is-editable");
        settingAttrs.onClick = this.prepareConfigPopup;
        removeAttrs.className = "".concat(removeAttrs.className, " ").concat(removeAttrs.className, "--is-editable");
        removeAttrs.onClick = this.removeBlock;
      }

      return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({}, settingAttrs, {
        key: "btnSettings"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
        name: "settings-block"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({}, removeAttrs, {
        key: "btnRemove"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
        name: "trash"
      }))];
    }
  }, {
    key: "setConfigPopupRef",
    value: function setConfigPopupRef(popup) {
      this._refConfigPopupComponent = popup;
    }
  }, {
    key: "setConfigIframeRef",
    value: function setConfigIframeRef(component) {
      this._refIframeComponent = component;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          meta = _this$props4.meta,
          isAvailable = _this$props4.isAvailable;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_preview__WEBPACK_IMPORTED_MODULE_4__["default"], {
        ref: this._refPreviewComponent,
        preview: meta.preview,
        name: meta.config.name,
        isValid: meta.isValid,
        isVisible: meta.isVisible,
        shouldDisplayError: meta.shouldDisplayError,
        hasVisibleActionMenu: this.checkShouldShowActionMenu(),
        isAvailable: isAvailable,
        removeBlock: this.removeBlock
      }), isAvailable && this.renderActionMenu(), isAvailable && this.renderConfigPopup());
    }
  }]);

  return PreviewBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

PreviewBlock.propTypes = {
  onDragOver: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onDragStart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onBlockDataUpdate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  block: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    config: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    preview: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
    shouldDisplayError: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
    isValid: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired
  }).isRequired,
  onConfigPopupOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  udwContainer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)).isRequired,
  onDrag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  isEditable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  forceShowActionMenu: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PreviewBlock);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var CLASS_INVISIBLE = 'ez-mark-invisible';

var setInnerHTML = function setInnerHTML(__html) {
  return {
    __html: __html
  };
};

var setInvisibleClass = function setInvisibleClass(preview, isVisible) {
  var container = document.createElement('div');
  container.insertAdjacentHTML('beforeend', preview);

  _toConsumableArray(container.childNodes).forEach(function (child) {
    if (child instanceof HTMLElement) {
      child.classList.toggle(CLASS_INVISIBLE, !isVisible);
    }
  });

  return container.innerHTML;
};

var Preview = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var baseClassName = 'c-block-preview';
  var className = "".concat(baseClassName);
  var preview = props.preview.trim();

  if (!props.isValid && props.shouldDisplayError) {
    className = "".concat(className, " ").concat(baseClassName, "--invalid");
  }

  if (props.hasVisibleActionMenu) {
    className = "".concat(className, " ").concat(baseClassName, "--action-menu-visible");
  }

  if (!props.isAvailable) {
    className = "".concat(className, " ").concat(baseClassName, "--unavailable");
    preview = setInvisibleClass(preview, props.isVisible);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-block-preview__unavailable-mask"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-block-preview__unavailable-mask-title"
    }, Translator.trans(
    /*@Desc("This element is not available in this page")*/
    'block.no_availability.title', {}, 'page_builder')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-block-preview__unavailable-mask-content"
    }, Translator.trans(
    /*@Desc("You have to delete it to publish")*/
    'block.no_availability.content', {}, 'page_builder')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "c-block-preview__delete-unavailable-block",
      onClick: props.removeBlock
    }, Translator.trans(
    /*@Desc("Delete")*/
    'block.no_availability.delete', {}, 'page_builder'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-block-preview__unavailable-block-content",
      ref: ref,
      dangerouslySetInnerHTML: setInnerHTML(preview)
    }));
  }

  if (preview.length) {
    preview = setInvisibleClass(preview, props.isVisible);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className,
      ref: ref,
      dangerouslySetInnerHTML: setInnerHTML(preview)
    });
  }

  var emptyBlockText = Translator.trans(
  /*@Desc("%name% block")*/
  'empty_block.info.text', {
    name: props.name
  }, 'page_builder');
  className = "".concat(className, " ").concat(baseClassName, "--empty");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    ref: ref
  }, emptyBlockText);
});
Preview.propTypes = {
  setBlockPreviewContainerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  preview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  shouldDisplayError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isValid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  hasVisibleActionMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Preview);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/sidebar.block.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/sidebar.block.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_ellipsize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/ellipsize */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/helpers/ellipsize.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var SidebarBlock = /*#__PURE__*/function (_PureComponent) {
  _inherits(SidebarBlock, _PureComponent);

  var _super = _createSuper(SidebarBlock);

  function SidebarBlock(props) {
    var _this;

    _classCallCheck(this, SidebarBlock);

    _this = _super.call(this, props);
    _this.handleDragStart = _this.handleDragStart.bind(_assertThisInitialized(_this));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_this));
    _this._refBlockNameContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      blockName: props.name
    };
    return _this;
  }

  _createClass(SidebarBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ellipsizeBlockName();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.ellipsizeBlockName();
    }
  }, {
    key: "ellipsizeBlockName",
    value: function ellipsizeBlockName() {
      var originalName = this._refBlockNameContainer.current.innerText;
      var ellipsizedName = Object(_helpers_ellipsize__WEBPACK_IMPORTED_MODULE_2__["ellipsizeText"])(this._refBlockNameContainer.current);

      if (originalName !== ellipsizedName) {
        this.setState(function () {
          return {
            blockName: ellipsizedName
          };
        });
        window.eZ.helpers.tooltips.parse();
      }
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(event) {
      event.dataTransfer.effectAllowed = 'copy';
      event.dataTransfer.setData('text/html', event.currentTarget);
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown() {
      var _this$props = this.props,
          onDragStart = _this$props.onDragStart,
          type = _this$props.type;
      onDragStart(type);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          thumbnail = _this$props2.thumbnail,
          type = _this$props2.type,
          isHidden = _this$props2.isHidden,
          name = _this$props2.name;
      var blockName = this.state.blockName;
      var blockAttrs = {
        className: 'c-sidebar-block',
        'data-ez-sidebar-block-type': type,
        hidden: isHidden
      };
      var blockNameAttrs = {
        className: 'c-sidebar-block__name',
        'data-tooltip-container-selector': '.c-sidebar__blocks-group'
      };

      if (name !== blockName) {
        blockNameAttrs.title = name;
      }

      if (this.props.isDraggable) {
        blockAttrs.className = "".concat(blockAttrs.className, " ").concat(blockAttrs.className, "--is-draggable");
        blockAttrs.draggable = 'true';
        blockAttrs.onDragStart = this.handleDragStart;
        blockAttrs.onDrag = this.props.onDrag;
        blockAttrs.onMouseDown = this.handleMouseDown;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", blockAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-icon--small-medium"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "".concat(thumbnail)
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, blockNameAttrs, {
        ref: this._refBlockNameContainer
      }), blockName));
    }
  }]);

  return SidebarBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

SidebarBlock.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onDrag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onDragStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isDraggable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SidebarBlock);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/sidebar.blocks.group.js":
/*!**************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/sidebar.blocks.group.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var SidebarBlocksGroup = function SidebarBlocksGroup(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.isCollapsed),
      _useState2 = _slicedToArray(_useState, 2),
      isCollapsed = _useState2[0],
      setIsCollapsed = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setIsCollapsed(props.isCollapsed);
  }, [props.isCollapsed]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-sidebar-blocks-group ".concat(isCollapsed ? 'c-sidebar-blocks-group--colapsed' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-sidebar-blocks-group__title-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-sidebar-blocks-group__title"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-sidebar-blocks-group__toggler",
    onClick: function onClick() {
      return setIsCollapsed(!isCollapsed);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "caret-down",
    extraClasses: "ez-icon--small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-sidebar-blocks-group__blocks"
  }, props.children));
};

SidebarBlocksGroup.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  isCollapsed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
SidebarBlocksGroup.defaultProps = {
  isCollapsed: false,
  title: ''
};
/* harmony default export */ __webpack_exports__["default"] = (SidebarBlocksGroup);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/config-popup/config.popup.js":
/*!*************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/config-popup/config.popup.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var CLASS_NON_SCROLLABLE = 'ezs-non-scrollable';
var CLASS_MODAL_OPEN = 'modal-open';
var MODAL_CONFIG = {
  backdrop: 'static',
  keyboard: true
};

var ConfigPopup = /*#__PURE__*/function (_Component) {
  _inherits(ConfigPopup, _Component);

  var _super = _createSuper(ConfigPopup);

  function ConfigPopup(props) {
    var _this;

    _classCallCheck(this, ConfigPopup);

    _this = _super.call(this, props);
    _this._refModal = null;
    _this.setModalRef = _this.setModalRef.bind(_assertThisInitialized(_this));
    _this.onKeyUp = _this.onKeyUp.bind(_assertThisInitialized(_this));
    _this.state = {
      isVisible: props.isVisible,
      isLoading: props.isLoading
    };
    return _this;
  }

  _createClass(ConfigPopup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var show = this.state.isVisible;

      if (show) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._refModal).modal(_objectSpread(_objectSpread({}, MODAL_CONFIG), {}, {
          show: show,
          focus: this.props.hasFocus
        }));
        this.attachModalEventHandlers();
      }

      window.eZ.helpers.tooltips.parse();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var show = this.state.isVisible;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._refModal).modal(_objectSpread(_objectSpread({}, MODAL_CONFIG), {}, {
        show: show,
        focus: this.props.hasFocus
      }));

      if (show) {
        this.attachModalEventHandlers();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._refModal).modal('hide');
      document.body.classList.remove(CLASS_MODAL_OPEN, CLASS_NON_SCROLLABLE);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(_ref) {
      var isVisible = _ref.isVisible,
          onConfigIframeLoad = _ref.onConfigIframeLoad,
          isLoading = _ref.isLoading;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isVisible: isVisible,
          onConfigIframeLoad: onConfigIframeLoad,
          isLoading: isLoading
        });
      });
    }
  }, {
    key: "attachModalEventHandlers",
    value: function attachModalEventHandlers() {
      var modal = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._refModal);
      modal.on('keyup', this.onKeyUp);
      modal.one('hidden.bs.modal', this.props.onClose);
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      var originalEvent = event.originalEvent;
      var escKeyCode = 27;
      var escKeyPressed = originalEvent && (originalEvent.which === escKeyCode || originalEvent.keyCode === escKeyCode);

      if (escKeyPressed) {
        this.props.onClose();
      }
    }
  }, {
    key: "setModalRef",
    value: function setModalRef(component) {
      this._refModal = component;
    }
  }, {
    key: "renderSubtitle",
    value: function renderSubtitle() {
      var type = this.props.type;

      if (!type) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "c-config-popup__subtitle"
      }, type);
    }
  }, {
    key: "render",
    value: function render() {
      var isVisible = this.state.isVisible;
      var additionalClasses = this.props.additionalClasses;
      var modalAttrs = {
        className: 'c-config-popup modal fade',
        ref: this.setModalRef,
        tabIndex: this.props.hasFocus ? '-1' : undefined
      };
      var closeBtnLabel = Translator.trans(
      /*@Desc("Close")*/
      'config_popup.close.label', {}, 'page_builder');

      if (isVisible) {
        document.body.classList.add(CLASS_MODAL_OPEN, CLASS_NON_SCROLLABLE);
      } else {
        document.body.classList.remove(CLASS_MODAL_OPEN, CLASS_NON_SCROLLABLE);
      }

      if (additionalClasses) {
        modalAttrs.className = "".concat(modalAttrs.className, " ").concat(additionalClasses);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", modalAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-dialog c-config-popup__dialog modal-lg",
        role: "dialog"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-content c-config-popup__content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-header c-config-popup__header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "modal-title c-config-popup__headline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "c-config-popup__title"
      }, this.props.name), this.renderSubtitle()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "close c-config-popup__btn--close",
        "data-dismiss": "modal",
        "aria-label": closeBtnLabel,
        onClick: this.props.onClose,
        title: closeBtnLabel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "discard",
        extraClasses: "ez-icon--medium"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-body c-config-popup__body"
      }, this.props.children))));
    }
  }]);

  return ConfigPopup;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ConfigPopup.propTypes = {
  isVisible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onConfigIframeLoad: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  hasFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  additionalClasses: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
ConfigPopup.defaultProps = {
  isVisible: false,
  isLoading: true,
  hasFocus: true
};
/* harmony default export */ __webpack_exports__["default"] = (ConfigPopup);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/date-picker/date.picker.js":
/*!***********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/date-picker/date.picker.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _eZ$helpers$timezone = eZ.helpers.timezone,
    convertDateToTimezone = _eZ$helpers$timezone.convertDateToTimezone,
    formatShortDateTime = _eZ$helpers$timezone.formatShortDateTime;

var DatePicker = /*#__PURE__*/function (_PureComponent) {
  _inherits(DatePicker, _PureComponent);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props);
    _this.setInputRef = _this.setInputRef.bind(_assertThisInitialized(_this));
    _this.updateAirtime = _this.updateAirtime.bind(_assertThisInitialized(_this));
    _this.clearAirtime = _this.clearAirtime.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var airtime = this.props.airtime;
      var userTimezoneCurrentTime = convertDateToTimezone(new Date());
      var selectedDateWithUserTimezone = airtime ? convertDateToTimezone(airtime * 1000) : userTimezoneCurrentTime;
      var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      var minDate = new Date(this.roundMinutes(convertDateToTimezone(userTimezoneCurrentTime, browserTimezone, true)));
      var defaultDate = new Date(this.roundMinutes(convertDateToTimezone(selectedDateWithUserTimezone, browserTimezone, true)));

      if (defaultDate < minDate) {
        defaultDate = minDate;
      }

      minDate.setSeconds(0);
      window.flatpickr(this._refInput, {
        inline: true,
        enableTime: true,
        time_24hr: true,
        onChange: this.updateAirtime,
        minDate: minDate,
        defaultDate: defaultDate,
        formatDate: function formatDate(date) {
          return formatShortDateTime(date, null);
        }
      });
    }
  }, {
    key: "roundMinutes",
    value: function roundMinutes(date) {
      var roundDiff = date.minute() % 5;

      if (roundDiff) {
        return date.add(5 - roundDiff, 'minutes');
      }

      return date;
    }
  }, {
    key: "updateAirtime",
    value: function updateAirtime(dates) {
      var selectedDate = dates[0];
      var userTimezone = eZ.adminUiConfig.timezone;
      var selectedDateWithUserTimezone = convertDateToTimezone(selectedDate, userTimezone, true);
      var airtime = Math.floor(selectedDateWithUserTimezone.valueOf() / 1000);
      this.props.onDateChange(airtime);
    }
  }, {
    key: "clearAirtime",
    value: function clearAirtime() {
      this._refInput.value = '';
      this.props.onDateChange(null);
    }
  }, {
    key: "setInputRef",
    value: function setInputRef(input) {
      this._refInput = input;
    }
  }, {
    key: "render",
    value: function render() {
      var label = Translator.trans(
      /*@Desc("Date and time")*/
      'date_picker.label', {}, 'page_builder');
      var clearLabel = Translator.trans(
      /*@Desc("Clear")*/
      'date_picker.clear', {}, 'page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-date-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "c-date-picker__label ez-label"
      }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-date-picker__input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        ref: this.setInputRef,
        type: "text",
        className: "flatpickr flatpickr-input c-date-picker__input form-control",
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "c-date-picker__btn--clear-input",
        onClick: this.clearAirtime,
        title: clearLabel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-icon--small"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('circle-close')
      })))));
    }
  }]);

  return DatePicker;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

DatePicker.propTypes = {
  onDateChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  airtime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DatePicker);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ErrorBoundary = /*#__PURE__*/function (_Component) {
  _inherits(ErrorBoundary, _Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        hasError: true
      });
      console.log('catch:error', error, info);
    }
  }, {
    key: "render",
    value: function render() {
      var errorMessage = Translator.trans(
      /*@Desc("Something went wrong")*/
      'error.message', {}, 'page_builder');

      if (this.state.hasError) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, errorMessage);
      }

      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ErrorBoundary.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Iframe = /*#__PURE__*/function (_PureComponent) {
  _inherits(Iframe, _PureComponent);

  var _super = _createSuper(Iframe);

  function Iframe(props) {
    var _this;

    _classCallCheck(this, Iframe);

    _this = _super.call(this, props);
    _this._refIframe = null;
    _this.state = {
      isVisible: props.isVisible,
      isLoading: props.isLoading
    };
    _this.handleLoad = _this.handleLoad.bind(_assertThisInitialized(_this));
    _this.setPreviewRef = _this.setPreviewRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Iframe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: true
        });
      });
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(_ref) {
      var isVisible = _ref.isVisible,
          isLoading = _ref.isLoading;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isVisible: isVisible,
          isLoading: isLoading
        });
      });
    }
  }, {
    key: "handleLoad",
    value: function handleLoad() {
      this.props.onLoad(this._refIframe);
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: false
        });
      });
    }
  }, {
    key: "setPreviewRef",
    value: function setPreviewRef(iframe) {
      this._refIframe = iframe;
    }
  }, {
    key: "renderLoadingScreen",
    value: function renderLoadingScreen() {
      if (!this.state.isLoading) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-iframe__loading d-flex justify-content-center align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-spin ez-icon-x2 ez-icon-spinner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('spinner')
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          name = _this$props.name,
          src = _this$props.src;
      var attrs = {
        className: 'c-iframe'
      };
      var iframeAttrs = {
        id: id,
        src: src,
        name: name,
        ref: this.setPreviewRef,
        onLoad: this.handleLoad,
        className: 'c-iframe__preview',
        frameBorder: 0,
        hidden: !this.state.isVisible
      };

      if (this.state.isLoading) {
        attrs.className = "".concat(attrs.className, " ").concat(attrs.className, "--is-loading");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", attrs, this.renderLoadingScreen(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", iframeAttrs));
    }
  }]);

  return Iframe;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

Iframe.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
Iframe.defaultProps = {
  id: 'page-builder-preview',
  name: 'page-builder-preview',
  title: 'Page preview',
  isVisible: true
};
/* harmony default export */ __webpack_exports__["default"] = (Iframe);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-selector/layout.selector.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-selector/layout.selector.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var LayoutSelector = /*#__PURE__*/function (_Component) {
  _inherits(LayoutSelector, _Component);

  var _super = _createSuper(LayoutSelector);

  function LayoutSelector(props) {
    var _this;

    _classCallCheck(this, LayoutSelector);

    _this = _super.call(this, props);
    _this.onConfirm = _this.onConfirm.bind(_assertThisInitialized(_this));
    _this.renderLayoutItem = _this.renderLayoutItem.bind(_assertThisInitialized(_this));
    _this.markItemAsSelected = _this.markItemAsSelected.bind(_assertThisInitialized(_this));
    _this.state = {
      isVisible: true,
      itemSelectedId: props.itemSelectedId,
      isValidActiveLayout: props.isValidActiveLayout
    };
    return _this;
  }

  _createClass(LayoutSelector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var heightDiff = this._refHeader.offsetHeight + this._refContent.offsetHeight + this._refFooter.offsetHeight - this._refModalDialog.offsetHeight;

      if (this.state.isVisible) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._refModal).modal('show');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._refModal).off('hide.bs.modal', function (event) {
          return event.preventDefault();
        });
      }

      if (heightDiff > 0) {
        this._refLayouts.style.maxHeight = "".concat(this._refLayouts.offsetHeight - heightDiff, "px");
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var action = this.state.isVisible ? 'show' : 'hide';
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._refModal).modal(action);
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._refModal).off('hide.bs.modal', function (event) {
        return event.preventDefault();
      });
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState(function (state) {
        return Object.assign({}, state, nextProps);
      });
    }
  }, {
    key: "markItemAsSelected",
    value: function markItemAsSelected(event) {
      var itemSelectedId = event.currentTarget.dataset.id;
      this.setState(function (state) {
        return Object.assign({}, state, {
          itemSelectedId: itemSelectedId
        }, {
          isValidActiveLayout: true
        });
      });
    }
  }, {
    key: "onConfirm",
    value: function onConfirm() {
      var _this2 = this;

      this.setState(function (state) {
        return Object.assign({}, state, {
          isVisible: false
        });
      }, function () {
        return _this2.props.onConfirm(_this2.state.itemSelectedId);
      });
    }
  }, {
    key: "renderLayoutItem",
    value: function renderLayoutItem(data) {
      if (!data.visible && data.id !== this.state.itemSelectedId) {
        return null;
      }

      var className = 'c-layout-selector__item';
      var itemAttrs = {
        className: className,
        key: data.id,
        onClick: this.markItemAsSelected
      };

      if (data.id === this.state.itemSelectedId) {
        itemAttrs.className += " ".concat(className, "--selected");
      }

      if (!data.visible) {
        itemAttrs.className += " ".concat(className, "--unavailable");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, itemAttrs, {
        "data-id": data.id,
        title: data.description
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "c-layout-selector__item-image",
        src: data.thumbnail
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "c-layout-selector__item-desc"
      }, data.description));
    }
  }, {
    key: "renderCreateButton",
    value: function renderCreateButton() {
      var attrs = {
        type: 'button',
        className: 'btn btn-primary c-layout-selector__btn--create'
      };

      if (!this.state.itemSelectedId) {
        attrs.disabled = true;
      } else {
        attrs.onClick = this.onConfirm;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({}, attrs, {
        "data-dismiss": "modal"
      }), this.props.confirmBtnLabel);
    }
  }, {
    key: "renderWarningMessage",
    value: function renderWarningMessage() {
      var warningMessage = Translator.trans(
      /*@Desc("Switching layout saves the current Page draft")*/
      'layout_selector.warning.message', {}, 'page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "system-information",
        extraClasses: "ez-icon--medium"
      }), warningMessage);
    }
  }, {
    key: "renderErrorMessage",
    value: function renderErrorMessage() {
      var errorMessage = Translator.trans(
      /*@Desc("The layout of this landing page is no longer available and you cannot publish it. Please select a different layout.")*/
      'layout_selector.error.label', {}, 'page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "warning",
        extraClasses: "ez-icon--medium"
      }), errorMessage);
    }
  }, {
    key: "renderHeaderSubtitle",
    value: function renderHeaderSubtitle() {
      if (!this.props.displaySaveDraftWarning && this.state.isValidActiveLayout) {
        return null;
      }

      var subtitleExtraClass = this.state.isValidActiveLayout ? 'c-layout-selector__header-subtitle--warning' : 'c-layout-selector__header-subtitle--error';
      var subtitleNodeAttrs = {
        className: "c-layout-selector__header-subtitle ".concat(subtitleExtraClass)
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", subtitleNodeAttrs, this.state.isValidActiveLayout ? this.renderWarningMessage() : this.renderErrorMessage());
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var modalAttrs = {
        className: 'c-layout-selector__modal modal ez-modal fade',
        tabIndex: '-1',
        role: 'dialog',
        'data-backdrop': 'static',
        'data-keyboard': 'false',
        ref: function ref(modal) {
          return _this3._refModal = modal;
        }
      };
      var closeBtnLabel = Translator.trans(
      /*@Desc("Close")*/
      'layout_selector.close.label', {}, 'page_builder');

      if (this.state.isVisible) {
        modalAttrs.style = {
          display: 'block'
        };
        modalAttrs.className = "".concat(modalAttrs.className, " show");
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-layout-selector"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", modalAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-layout-selector__modal-dialog modal-dialog",
        role: "document",
        ref: function ref(_ref5) {
          return _this3._refModalDialog = _ref5;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-header c-layout-selector__header",
        ref: function ref(_ref) {
          return _this3._refHeader = _ref;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "modal-title"
      }, this.props.title), this.renderHeaderSubtitle(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "close c-layout-selector__btn--close",
        "data-dismiss": "modal",
        "aria-label": closeBtnLabel,
        onClick: this.props.onCancel,
        title: closeBtnLabel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "discard"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-body c-layout-selector__content",
        ref: function ref(_ref3) {
          return _this3._refContent = _ref3;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-layout-selector__layouts",
        ref: function ref(_ref2) {
          return _this3._refLayouts = _ref2;
        }
      }, this.props.layouts.map(this.renderLayoutItem))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-footer c-layout-selector__footer",
        ref: function ref(_ref4) {
          return _this3._refFooter = _ref4;
        }
      }, this.renderCreateButton(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-secondary c-layout-selector__btn--cancel",
        "data-dismiss": "modal",
        onClick: function onClick() {
          return _this3.props.onCancel();
        }
      }, closeBtnLabel))))));
    }
  }]);

  return LayoutSelector;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

LayoutSelector.propTypes = {
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  layouts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  modalContainer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  confirmBtnLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  itemSelectedId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  isVisible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  displaySaveDraftWarning: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LayoutSelector);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-switcher/layout.switcher.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-switcher/layout.switcher.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");




var LayoutSwitcher = function LayoutSwitcher(props) {
  var btnLabel = Translator.trans(
  /*@Desc("Switch layout")*/
  'switch_layout.label', {}, 'page_builder');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-block ez-btn",
    onClick: props.onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "layout-switch",
    extraClasses: "ez-icon--small-medium ez-icon--base-dark ez-icon--tools"
  }), btnLabel);
};

LayoutSwitcher.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LayoutSwitcher);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/sidebar/sidebar.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/sidebar/sidebar.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CLASS_NON_SCROLLABLE = 'ezs-non-scrollable';
var CLASS_IFRAME_BACKDROP_DISPLAYED = 'is-iframe-backdrop-displayed';

var Sidebar = /*#__PURE__*/function (_Component) {
  _inherits(Sidebar, _Component);

  var _super = _createSuper(Sidebar);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _super.call(this, props);
    _this._refWrapper = null;
    _this._refDragHandler = null;
    _this.updateViewportBoundaries = _this.updateViewportBoundaries.bind(_assertThisInitialized(_this));
    _this.toggleCollapsedState = _this.toggleCollapsedState.bind(_assertThisInitialized(_this));
    _this.handleDragStart = _this.handleDragStart.bind(_assertThisInitialized(_this));
    _this.handleDragEnd = _this.handleDragEnd.bind(_assertThisInitialized(_this));
    _this.handleDrag = _this.handleDrag.bind(_assertThisInitialized(_this));
    _this.setWrapperRef = _this.setWrapperRef.bind(_assertThisInitialized(_this));
    _this.setDragHandlerRef = _this.setDragHandlerRef.bind(_assertThisInitialized(_this));
    _this.state = {
      isCollapsed: props.isCollapsed,
      isDragged: false,
      isDragging: false,
      top: 0,
      left: 0,
      sidebarWidth: 0,
      sidebarHeight: 0,
      windowWidth: 0,
      windowHeight: 0,
      diffX: 0,
      diffY: 0
    };
    return _this;
  }

  _createClass(Sidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var rect = this._refWrapper.getBoundingClientRect();

      this.setState(function (state) {
        return Object.assign({}, state, {
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          sidebarWidth: rect.width,
          sidebarHeight: rect.height
        });
      });
      window.addEventListener('resize', this.updateViewportBoundaries, false);
      document.body.addEventListener('mouseup', this.handleDragEnd, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.isCollapsed === prevState.isCollapsed) {
        return;
      }

      var rect = this._refWrapper.getBoundingClientRect();

      var _this$getPosition = this.getPosition({
        clientX: rect.left + this.state.diffX,
        clientY: rect.top + this.state.diffY,
        sidebarHeight: rect.height
      }),
          top = _this$getPosition.top,
          left = _this$getPosition.left;

      this.setState(function (state) {
        return Object.assign({}, state, {
          sidebarHeight: rect.height,
          top: top,
          left: left
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateViewportBoundaries);
      document.body.removeEventListener('mouseup', this.handleDragEnd);
    }
  }, {
    key: "updateViewportBoundaries",
    value: function updateViewportBoundaries() {
      this.setState(function (state) {
        return Object.assign({}, state, {
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight
        });
      });
    }
  }, {
    key: "toggleCollapsedState",
    value: function toggleCollapsedState() {
      this.setState(function (state) {
        return Object.assign({}, state, {
          isCollapsed: !state.isCollapsed
        });
      });
    }
  }, {
    key: "getPosition",
    value: function getPosition(_ref) {
      var clientX = _ref.clientX,
          clientY = _ref.clientY,
          _ref$sidebarHeight = _ref.sidebarHeight,
          sidebarHeight = _ref$sidebarHeight === void 0 ? this.state.sidebarHeight : _ref$sidebarHeight,
          _ref$diffX = _ref.diffX,
          diffX = _ref$diffX === void 0 ? this.state.diffX : _ref$diffX,
          _ref$diffY = _ref.diffY,
          diffY = _ref$diffY === void 0 ? this.state.diffY : _ref$diffY;
      var _this$state = this.state,
          windowHeight = _this$state.windowHeight,
          windowWidth = _this$state.windowWidth,
          sidebarWidth = _this$state.sidebarWidth;
      var maxOffsetLeft = windowWidth - sidebarWidth;
      var maxOffsetTop = windowHeight - sidebarHeight;
      clientX = clientX - diffX;
      clientY = clientY - diffY;
      return {
        top: clientY < maxOffsetTop ? Math.max(0, clientY) : maxOffsetTop,
        left: clientX < maxOffsetLeft ? Math.max(0, clientX) : maxOffsetLeft
      };
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(event) {
      var _this2 = this;

      var isSidebarToggler = event.nativeEvent.target.classList.contains('c-sidebar__toggler') || !!event.nativeEvent.target.closest('.c-sidebar__toggler');
      var buttonPressedCode = event.buttons !== undefined ? event.buttons : event.nativeEvent.which;
      var isLeftClick = buttonPressedCode === 1;

      if (isSidebarToggler || !isLeftClick) {
        return;
      }

      var rect = this._refDragHandler.getBoundingClientRect();

      var diffX = event.nativeEvent.clientX - rect.left;
      var diffY = event.nativeEvent.clientY - rect.top;

      var _this$getPosition2 = this.getPosition(_objectSpread(_objectSpread({}, event), {}, {
        diffX: diffX,
        diffY: diffY
      })),
          top = _this$getPosition2.top,
          left = _this$getPosition2.left;

      this.setState(function (state) {
        return Object.assign({}, state, {
          isDragged: true,
          isDragging: true,
          top: top,
          left: left,
          diffX: diffX,
          diffY: diffY
        });
      }, function () {
        document.body.classList.add(CLASS_NON_SCROLLABLE, CLASS_IFRAME_BACKDROP_DISPLAYED);
        document.body.addEventListener('mousemove', _this2.handleDrag, false);
        document.body.addEventListener('mouseleave', _this2.handleDragEnd, false);
      });
    }
  }, {
    key: "handleDragEnd",
    value: function handleDragEnd(event) {
      var _this3 = this;

      if (!this.state.isDragging) {
        return;
      }

      var _this$getPosition3 = this.getPosition(event),
          top = _this$getPosition3.top,
          left = _this$getPosition3.left;

      this.setState(function (state) {
        return Object.assign({}, state, {
          isDragged: true,
          isDragging: false,
          top: top,
          left: left,
          diffX: 0,
          diffY: 0
        });
      }, function () {
        document.body.classList.remove(CLASS_NON_SCROLLABLE, CLASS_IFRAME_BACKDROP_DISPLAYED);
        document.body.removeEventListener('mousemove', _this3.handleDrag);
        document.body.removeEventListener('mouseleave', _this3.handleDragEnd);
      });
    }
  }, {
    key: "handleDrag",
    value: function handleDrag(event) {
      event.preventDefault();

      var _this$getPosition4 = this.getPosition(event),
          top = _this$getPosition4.top,
          left = _this$getPosition4.left;

      this.setState(function (state) {
        return Object.assign({}, state, {
          isDragged: true,
          isDragging: true,
          top: top,
          left: left
        });
      });
    }
  }, {
    key: "setWrapperRef",
    value: function setWrapperRef(ref) {
      this._refWrapper = ref;
    }
  }, {
    key: "setDragHandlerRef",
    value: function setDragHandlerRef(ref) {
      this._refDragHandler = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          isCollapsed = _this$state2.isCollapsed,
          isDragged = _this$state2.isDragged,
          top = _this$state2.top,
          left = _this$state2.left;
      var togglerIcon = isCollapsed ? 'caret-up' : 'caret-down';
      var wrapperAttrs = {
        ref: this.setWrapperRef,
        className: 'c-sidebar'
      };
      var title = Translator.trans(
      /*@Desc("Elements")*/
      'sidebar.title', {}, 'page_builder');

      if (isCollapsed) {
        wrapperAttrs.className = "".concat(wrapperAttrs.className, " ").concat(wrapperAttrs.className, "--collapsed");
      }

      if (isDragged) {
        wrapperAttrs.style = {
          top: top + 'px',
          left: left + 'px',
          position: 'fixed'
        };
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", wrapperAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-sidebar__title-bar",
        onMouseDown: this.handleDragStart,
        ref: this.setDragHandlerRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-sidebar__icon-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "drag",
        extraClasses: "ez-icon--small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-sidebar__title"
      }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-sidebar__toggler",
        onClick: this.toggleCollapsedState
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: togglerIcon,
        extraClasses: "ez-icon--small"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-sidebar__blocks-group"
      }, this.props.children));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Sidebar.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  isCollapsed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Sidebar.defaultProps = {
  isCollapsed: false
};
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/page.builder.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/page.builder.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_iframe_iframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/iframe/iframe */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js");
/* harmony import */ var _components_block_sidebar_blocks_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/block/sidebar.blocks.group */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/sidebar.blocks.group.js");
/* harmony import */ var _components_block_sidebar_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/block/sidebar.block */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/sidebar.block.js");
/* harmony import */ var _components_block_preview_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/block/preview.block */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.block.js");
/* harmony import */ var _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar/sidebar */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/sidebar/sidebar.js");
/* harmony import */ var _components_layout_selector_layout_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout-selector/layout.selector */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-selector/layout.selector.js");
/* harmony import */ var _components_layout_switcher_layout_switcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/layout-switcher/layout.switcher */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-switcher/layout.switcher.js");
/* harmony import */ var _components_error_boundary_error_boundary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/error-boundary/error.boundary */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary.js");
/* harmony import */ var _timeline_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../timeline.module */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline.module.js");
/* harmony import */ var _guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../guid-generator/guid.generator */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator.js");
/* harmony import */ var _services_preview_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/preview.service */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/services/preview.service.js");
/* harmony import */ var _services_timeline_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/timeline.service */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/services/timeline.service.js");
/* harmony import */ var _helpers_deep_clone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../helpers/deep.clone */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone.js");
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


















var CLASS_PLACEHOLDER = 'droppable-placeholder';
var CLASS_ZONE = 'm-page-builder__zone';
var CLASS_ZONE_DRAGOVER = 'm-page-builder__zone--dragover';
var CLASS_PAGE_BUILDER_DISABLED = 'ez-page-builder--is-disabled';
var CLASS_GO_BACK_ENABLED = 'ez-page-builder--go-back-enabled';
var SELECTOR_PLACEHOLDER = '.droppable-placeholder';
var SELECTOR_ZONE = '[data-ez-zone-id]';
var SELECTOR_SAVE_DRAFT = '#ezplatform_content_forms_content_edit_saveDraft';
var PLACEHOLDER_TYPE_ZONE = 'zone';
var IDENTIFIER_BLOCK_DATA_ATTRIBUTE = 'ezBlockId';
var ELEMENT_DIV = 'div';
var BLOCKS_BASE_STATE = {
  shouldDisplayError: false,
  isValid: false,
  preview: ''
};
var blockFilterPlaceholder = Translator.trans(
/*@Desc("Type to refine")*/
'block_filter.placeholder', {}, 'page_builder');

var PageBuilder = /*#__PURE__*/function (_Component) {
  _inherits(PageBuilder, _Component);

  var _super = _createSuper(PageBuilder);

  function PageBuilder(props) {
    var _this;

    _classCallCheck(this, PageBuilder);

    _this = _super.call(this, props);
    _this.requestForm = _this.requestForm.bind(_assertThisInitialized(_this));
    _this.handleLayoutSelectorCancel = _this.handleLayoutSelectorCancel.bind(_assertThisInitialized(_this));
    _this.handleLayoutSelectorConfirm = _this.handleLayoutSelectorConfirm.bind(_assertThisInitialized(_this));
    _this.handleIframeLoad = _this.handleIframeLoad.bind(_assertThisInitialized(_this));
    _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
    _this.handleDragStartSidebarBlock = _this.handleDragStartSidebarBlock.bind(_assertThisInitialized(_this));
    _this.handleDragStartPreviewBlock = _this.handleDragStartPreviewBlock.bind(_assertThisInitialized(_this));
    _this.handleElementDragOver = _this.handleElementDragOver.bind(_assertThisInitialized(_this));
    _this.handleBlockRemove = _this.handleBlockRemove.bind(_assertThisInitialized(_this));
    _this.renderSinglePreviewBlock = _this.renderSinglePreviewBlock.bind(_assertThisInitialized(_this));
    _this.handleZoneDragOver = _this.handleZoneDragOver.bind(_assertThisInitialized(_this));
    _this.handleBlockDataUpdate = _this.handleBlockDataUpdate.bind(_assertThisInitialized(_this));
    _this.renderSidebarBlocks = _this.renderSidebarBlocks.bind(_assertThisInitialized(_this));
    _this.updateBlocksPreview = _this.updateBlocksPreview.bind(_assertThisInitialized(_this));
    _this.updateBlocksPreviewState = _this.updateBlocksPreviewState.bind(_assertThisInitialized(_this));
    _this.attachDocumentDropListeners = _this.attachDocumentDropListeners.bind(_assertThisInitialized(_this));
    _this.getPreviewDocument = _this.getPreviewDocument.bind(_assertThisInitialized(_this));
    _this.getPreviewWindow = _this.getPreviewWindow.bind(_assertThisInitialized(_this));
    _this.getBlockPreviewNode = _this.getBlockPreviewNode.bind(_assertThisInitialized(_this));
    _this.getPlaceholderPreviewNode = _this.getPlaceholderPreviewNode.bind(_assertThisInitialized(_this));
    _this.getBlocksFromZones = _this.getBlocksFromZones.bind(_assertThisInitialized(_this));
    _this.disableInIframeClicks = _this.disableInIframeClicks.bind(_assertThisInitialized(_this));
    _this.setPageFieldTypeFormFieldValue = _this.setPageFieldTypeFormFieldValue.bind(_assertThisInitialized(_this));
    _this.validateAllBlocksData = _this.validateAllBlocksData.bind(_assertThisInitialized(_this));
    _this.validateAllBlocksAvailability = _this.validateAllBlocksAvailability.bind(_assertThisInitialized(_this));
    _this.validateLayoutData = _this.validateLayoutData.bind(_assertThisInitialized(_this));
    _this.areBlocksValid = _this.areBlocksValid.bind(_assertThisInitialized(_this));
    _this.validateBlockData = _this.validateBlockData.bind(_assertThisInitialized(_this));
    _this.setBlockValidState = _this.setBlockValidState.bind(_assertThisInitialized(_this));
    _this.initBlocksPreviewState = _this.initBlocksPreviewState.bind(_assertThisInitialized(_this));
    _this.handleDragBlock = _this.handleDragBlock.bind(_assertThisInitialized(_this));
    _this.showLayoutSelector = _this.showLayoutSelector.bind(_assertThisInitialized(_this));
    _this.setIframeRef = _this.setIframeRef.bind(_assertThisInitialized(_this));
    _this.getPlaceholderNodes = _this.getPlaceholderNodes.bind(_assertThisInitialized(_this));
    _this.handleDragOverTimeout = _this.handleDragOverTimeout.bind(_assertThisInitialized(_this));
    _this.cancelDropState = _this.cancelDropState.bind(_assertThisInitialized(_this));
    _this.setIsEditableState = _this.setIsEditableState.bind(_assertThisInitialized(_this));
    _this.setDocumentDragOverEventHandler = _this.setDocumentDragOverEventHandler.bind(_assertThisInitialized(_this));
    _this.unsetDocumentDragOverEventHandler = _this.unsetDocumentDragOverEventHandler.bind(_assertThisInitialized(_this));
    _this.setClientYPosition = _this.setClientYPosition.bind(_assertThisInitialized(_this));
    _this.updateTimelineEvents = _this.updateTimelineEvents.bind(_assertThisInitialized(_this));
    _this.updateTimelineEventsState = _this.updateTimelineEventsState.bind(_assertThisInitialized(_this));
    _this.handleOnBlockClick = _this.handleOnBlockClick.bind(_assertThisInitialized(_this));
    _this.handleOnBlockOutsideClick = _this.handleOnBlockOutsideClick.bind(_assertThisInitialized(_this));
    _this.clearZoneDragOverState = _this.clearZoneDragOverState.bind(_assertThisInitialized(_this));
    _this.updateBlockFilterQuery = _this.updateBlockFilterQuery.bind(_assertThisInitialized(_this));
    _this.updatePreviewRequestParams = _this.updatePreviewRequestParams.bind(_assertThisInitialized(_this));
    _this.blockConfigRequestForm = window.document.querySelector('form[name="request_block_configuration"]');
    _this.blockConfigTextarea = _this.blockConfigRequestForm.querySelector('#request_block_configuration_page');
    _this.blockConfigBlocksInput = _this.blockConfigRequestForm.querySelector('#request_block_configuration_block_id');
    _this.blockConfigSubmit = _this.blockConfigRequestForm.querySelector('#request_block_configuration_request');
    _this.updatePreviewRequestParamsComponents = window.eZ.pageBuilder.components ? window.eZ.pageBuilder.components.updatePreviewRequestParams : [];
    _this.onDragOverTimeout = null;
    _this.contentEditForm = null;
    _this._clientY = 0;
    var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;

    var blocksMap = _this.initBlocksMap();

    var layoutSelectorTitle = Translator.trans(
    /*@Desc("Page creation")*/
    'layout_selector.create.title', {}, 'page_builder');
    var layoutSelectorConfirmBtnLabel = Translator.trans(
    /*@Desc("Create draft")*/
    'layout_selector.create.confirm.label', {}, 'page_builder');
    _this.state = _objectSpread(_objectSpread({}, props.getInitDragDropState()), {}, {
      draggedPreviewBlockData: null,
      draggedSidebarBlockType: null,
      iframeLoaded: false,
      isIframelessMode: false,
      previewUrl: props.previewUrl,
      fieldValue: props.fieldValue,
      blocksMap: blocksMap,
      shouldUpdateBlocksPreviewState: !!Object.keys(blocksMap).length,
      isSwitchingLayout: false,
      shouldCreateBlocksPreviewNodes: false,
      layoutSelectorTitle: layoutSelectorTitle,
      layoutSelectorConfirmBtnLabel: layoutSelectorConfirmBtnLabel,
      timestamp: convertDateToTimezone(new Date()).valueOf(),
      timelineEvents: eZ.pageBuilder.timeline.events,
      activeBlockId: null,
      isOverZone: false,
      dragOverZoneId: null,
      blockFilterQuery: '',
      blockPreviewPagePreviewRequestParams: {},
      isValidActiveLayout: props.layoutsConfig.some(function (layoutConfig) {
        return layoutConfig.id === props.fieldValue.layout && layoutConfig.visible;
      }),
      layoutSelected: false
    });
    return _this;
  }

  _createClass(PageBuilder, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$state = this.state,
          draggedPreviewBlockData = _this$state.draggedPreviewBlockData,
          draggedSidebarBlockType = _this$state.draggedSidebarBlockType,
          blocksMap = _this$state.blocksMap;
      var isDuringDragDrop = !!draggedPreviewBlockData || !!draggedSidebarBlockType;
      var willBeDuringDragDrop = !!nextState.draggedPreviewBlockData || !!nextState.draggedSidebarBlockType;
      var blocksMapWillChange = blocksMap !== nextState.blocksMap;
      var dragDropContinues = isDuringDragDrop && willBeDuringDragDrop;
      var shouldNotUpdate = dragDropContinues && !blocksMapWillChange;
      return !shouldNotUpdate;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$state2 = this.state,
          iframeLoaded = _this$state2.iframeLoaded,
          shouldUpdateBlocksPreviewState = _this$state2.shouldUpdateBlocksPreviewState,
          shouldCreateBlocksPreviewNodes = _this$state2.shouldCreateBlocksPreviewNodes,
          isOverZone = _this$state2.isOverZone;

      if (!iframeLoaded) {
        return;
      }

      if (shouldUpdateBlocksPreviewState) {
        this.initBlocksPreviewState();
      }

      if (shouldCreateBlocksPreviewNodes) {
        this.createBlocksPreviewNodes();
      }

      if (!isOverZone) {
        this.props.removePlaceholders(this.getPlaceholderNodes(), this.props.removePlaceholderWithAnimation);
      }

      this.renderPreviewBlocks();
      this.manageZoneEventHandlers();
      this.disableInIframeClicks();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$state3 = this.state,
          iframeLoaded = _this$state3.iframeLoaded,
          shouldUpdateBlocksPreviewState = _this$state3.shouldUpdateBlocksPreviewState;
      var mode = this.props.mode;
      this.modalContainer = document.createElement(ELEMENT_DIV);
      this.udwContainer = document.createElement(ELEMENT_DIV);
      this.airtimeContainer = document.createElement(ELEMENT_DIV);
      this.layoutSwitcherContainer = document.querySelector('.ez-page-info-bar__tools-item--layout-switcher');
      this.timelineContainer = document.querySelector('.ez-timeline-wrapper');
      this.modalContainer.classList.add('m-page-builder__modal-container');
      this.udwContainer.classList.add('m-page-builder__udw-container');
      this.airtimeContainer.classList.add('m-page-builder__airtime-container');
      document.body.appendChild(this.modalContainer);
      document.body.appendChild(this.udwContainer);
      document.body.appendChild(this.airtimeContainer);
      document.body.classList.add(CLASS_PAGE_BUILDER_DISABLED, CLASS_GO_BACK_ENABLED);

      if (iframeLoaded) {
        this.manageZoneEventHandlers();
        this.disableInIframeClicks();

        if (shouldUpdateBlocksPreviewState) {
          this.initBlocksPreviewState();
        }

        document.body.classList.remove(CLASS_PAGE_BUILDER_DISABLED, CLASS_GO_BACK_ENABLED);
      }

      if (['create', 'translate_without_base_language'].includes(mode)) {
        this.setState(function () {
          return {
            isIframelessMode: true
          };
        });
      }

      if (!this.state.isValidActiveLayout) {
        this.showLayoutSelector();
      }

      if (!this.validateAllBlocksAvailability()) {
        window.eZ.helpers.notification.showErrorNotification(Translator.trans(
        /*@Desc("One or more blocks is not available in this page")*/
        'block.no_availability', {}, 'page_builder'));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.modalContainer);
      document.body.removeChild(this.udwContainer);
      document.body.removeChild(this.airtimeContainer);
    }
  }, {
    key: "updatePreviewRequestParams",
    value: function updatePreviewRequestParams(blockPreviewPagePreviewRequestParams) {
      var _this2 = this;

      var blocksIds = Object.keys(this.state.blocksMap);
      this.setState(function () {
        return {
          blockPreviewPagePreviewRequestParams: blockPreviewPagePreviewRequestParams
        };
      }, function () {
        return _this2.updateBlocksPreview(blocksIds);
      });
    }
  }, {
    key: "handleOnBlockClick",
    value: function handleOnBlockClick(activeBlockId) {
      this.setState(function () {
        return {
          activeBlockId: activeBlockId
        };
      });
    }
  }, {
    key: "handleOnBlockOutsideClick",
    value: function handleOnBlockOutsideClick(blockId) {
      if (blockId !== this.state.activeBlockId) {
        return;
      }

      this.setState(function () {
        return {
          activeBlockId: null
        };
      });
    }
  }, {
    key: "validateAllBlocksAvailability",
    value: function validateAllBlocksAvailability() {
      var blocks = this.props.fieldValue.zones.reduce(function (total, zone) {
        return [].concat(_toConsumableArray(total), _toConsumableArray(zone.blocks));
      }, []);
      var blocksConfig = this.props.blocksConfig;
      return blocks.every(function (block) {
        var blockConfig = blocksConfig.find(function (config) {
          return config.type === block.type;
        });
        return blockConfig.visible;
      });
    }
  }, {
    key: "createBlocksPreviewNodes",
    value: function createBlocksPreviewNodes() {
      var fieldValue = this.getPageFieldTypeState();
      var preview = this.getPreviewDocument();
      fieldValue.zones.forEach(function (zone) {
        zone.blocks.forEach(function (block) {
          var container = document.createElement(ELEMENT_DIV);
          container.dataset.ezBlockId = block.id;
          container.dataset.zoneId = zone.id;
          preview.querySelector("[data-ez-zone-id=\"".concat(zone.id, "\"]")).append(container);
        });
      });
      this.setState(function () {
        return {
          shouldCreateBlocksPreviewNodes: false
        };
      });
    }
  }, {
    key: "initBlocksMap",
    value: function initBlocksMap() {
      var _this3 = this;

      var blocks = this.props.fieldValue.zones.reduce(function (total, zone) {
        return [].concat(_toConsumableArray(total), _toConsumableArray(zone.blocks));
      }, []);
      var blocksConfig = this.props.blocksConfig;
      var blocksMap = blocks.reduce(function (total, block) {
        var blockConfig = blocksConfig.find(function (config) {
          return config.type === block.type;
        });
        total[block.id] = _objectSpread(_objectSpread({}, BLOCKS_BASE_STATE), {}, {
          config: blockConfig,
          isValid: _this3.validateBlockData(block, blockConfig),
          isVisible: block.visible
        });
        return total;
      }, {});
      return blocksMap;
    }
  }, {
    key: "initBlocksPreviewState",
    value: function initBlocksPreviewState() {
      var _this4 = this;

      var blocksMap = Object(_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_15__["default"])(this.state.blocksMap);
      Object.entries(blocksMap).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[0],
            meta = _ref2[1];

        meta.preview = _this4.getBlockPreviewNode(id).innerHTML;
      });
      this.setState(function () {
        return {
          blocksMap: blocksMap,
          shouldUpdateBlocksPreviewState: false
        };
      });
    }
  }, {
    key: "getBlocksFromZones",
    value: function getBlocksFromZones() {
      return this.state.fieldValue.zones.reduce(function (total, zone) {
        return [].concat(_toConsumableArray(total), _toConsumableArray(zone.blocks));
      }, []);
    }
  }, {
    key: "validateAllBlocksData",
    value: function validateAllBlocksData() {
      var _this$areBlocksValid = this.areBlocksValid(),
          areValid = _this$areBlocksValid.areValid,
          blocksMap = _this$areBlocksValid.blocksMap;

      if (areValid) {
        return true;
      } else {
        this.setState(function () {
          return {
            blocksMap: blocksMap
          };
        });
        return false;
      }
    }
  }, {
    key: "validateLayoutData",
    value: function validateLayoutData() {
      return this.state.isValidActiveLayout;
    }
  }, {
    key: "setBlockValidState",
    value: function setBlockValidState(block) {
      var isValid = this.validateBlockData(block, this.state.blocksMap[block.id].config);
      return _objectSpread(_objectSpread({}, block), {}, {
        isValid: isValid
      });
    }
  }, {
    key: "areBlocksValid",
    value: function areBlocksValid() {
      var _this5 = this;

      var blocksMap = this.getBlocksMapState();
      this.state.fieldValue.zones.forEach(function (zone) {
        zone.blocks.forEach(function (block) {
          var isValid = _this5.validateBlockData(block, blocksMap[block.id].config);

          if (!isValid) {
            blocksMap[block.id] = _objectSpread(_objectSpread({}, Object(_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_15__["default"])(blocksMap[block.id])), {}, {
              isValid: false
            });
          }

          blocksMap[block.id].shouldDisplayError = !blocksMap[block.id].isValid;
        });
      });
      return {
        blocksMap: blocksMap,
        areValid: Object.values(blocksMap).every(function (block) {
          return block.isValid;
        })
      };
    }
  }, {
    key: "validateBlockData",
    value: function validateBlockData(block, config) {
      if (config.visible) {
        return block.attributes.every(function (attribute) {
          var _attrConfig$constrain;

          var attrConfig = config.attributes.find(function (attributeConfig) {
            return attributeConfig.id === attribute.name;
          });

          if (attrConfig !== null && attrConfig !== void 0 && (_attrConfig$constrain = attrConfig.constraints) !== null && _attrConfig$constrain !== void 0 && _attrConfig$constrain.not_blank) {
            var value = attribute.value;

            if (value === null || value === undefined || value === '') {
              return false;
            }

            return !!('' + value).trim().length;
          }

          return true;
        });
      }

      return false;
    }
  }, {
    key: "updateBlocksPreview",
    value: function updateBlocksPreview(blockIds) {
      var hasBlockIds = Array.isArray(blockIds) && blockIds.length;
      blockIds = hasBlockIds ? blockIds : this.getBlocksFromZones().map(function (block) {
        return block.id;
      });
      var page = this.stringifyPageFieldTypeState();
      var now = new Date().getTime();
      var referenceTimestamp = Math.max(now, this.state.timestamp);
      var promise = Object(_services_preview_service__WEBPACK_IMPORTED_MODULE_13__["getBlockPreview"])({
        page: page,
        blockIds: blockIds,
        intent: this.props.mode,
        parameters: _objectSpread(_objectSpread({}, this.props.blockPreviewRequestParams), {}, {
          intentParameters: this.props.intentParameters,
          pagePreview: _objectSpread({
            referenceTimestamp: Math.floor(referenceTimestamp / 1000)
          }, this.state.blockPreviewPagePreviewRequestParams)
        })
      }, this.props.previewSiteaccess);
      this.setPageFieldTypeFormFieldValue(page);
      promise.then(function (response) {
        return response.json();
      }).then(this.updateBlocksPreviewState)["catch"](function (error) {
        window.eZ.helpers.notification.showErrorNotification('Cannot update blocks preview');
        console.error('Cannot update blocks preview', error);
      });
    }
  }, {
    key: "updateBlocksPreviewState",
    value: function updateBlocksPreviewState(data) {
      var _this6 = this;

      var blockIds = [];
      var blocksMap = this.getBlocksMapState();
      var fieldValue = this.getPageFieldTypeState();
      Object.entries(data.blocks).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            id = _ref4[0],
            meta = _ref4[1];

        var block = fieldValue.zones.reduce(function (total, zone) {
          return [].concat(_toConsumableArray(total), [zone.blocks.find(function (block) {
            return block.id === id;
          })]);
        }, []).filter(function (block) {
          return block;
        })[0];
        blocksMap[id].isNew = false;
        blocksMap[id].preview = meta.html;
        blocksMap[id].isVisible = meta.data.visible;
        blocksMap[id].shouldDisplayError = true;
        blocksMap[id].isValid = _this6.validateBlockData(block, blocksMap[id].config);
        blockIds.push(id);
      });
      this.setState(function () {
        return {
          blocksMap: blocksMap
        };
      }, function () {
        _this6.getPreviewDocument().body.dispatchEvent(new CustomEvent('ez-post-update-blocks-preview', {
          detail: {
            fieldValue: fieldValue,
            blocksMap: blocksMap,
            blockIds: blockIds
          }
        }));
      });
    }
  }, {
    key: "updateTimelineEvents",
    value: function updateTimelineEvents() {
      var page = this.stringifyPageFieldTypeState();
      var promise = Object(_services_timeline_service__WEBPACK_IMPORTED_MODULE_14__["getTimelineEvents"])({
        page: page,
        intent: this.props.mode,
        parameters: _objectSpread(_objectSpread({}, this.props.timelineGetEventsRequestParams), {}, {
          intentParameters: this.props.intentParameters,
          pagePreview: {
            referenceTimestamp: parseInt(this.state.timestamp / 1000, 10)
          }
        })
      });
      promise.then(function (response) {
        return response.json();
      }).then(this.updateTimelineEventsState);
    }
  }, {
    key: "updateTimelineEventsState",
    value: function updateTimelineEventsState(data) {
      this.setState(function () {
        return {
          timelineEvents: data.events
        };
      });
    }
  }, {
    key: "getBlocksMapState",
    value: function getBlocksMapState() {
      return Object(_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_15__["default"])(this.state.blocksMap);
    }
  }, {
    key: "getPageFieldTypeState",
    value: function getPageFieldTypeState() {
      return Object(_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_15__["default"])(this.state.fieldValue);
    }
  }, {
    key: "stringifyPageFieldTypeState",
    value: function stringifyPageFieldTypeState() {
      return JSON.stringify(this.state.fieldValue);
    }
  }, {
    key: "setPageFieldTypeFormFieldValue",
    value: function setPageFieldTypeFormFieldValue(page) {
      var fieldSelector = window.eZ.pageBuilder.config.pageFieldValueSelector.trim();

      if (!fieldSelector || !fieldSelector.length) {
        console.error('Missing page fieldtype form field selector!');
        return;
      }

      document.querySelector(fieldSelector).value = page;
    }
  }, {
    key: "handleBlockDataUpdate",
    value: function handleBlockDataUpdate(_ref5) {
      var _this7 = this;

      var blockData = _ref5.blockData,
          isVisible = _ref5.isVisible;
      var fieldValue = this.getPageFieldTypeState();
      var blocksMap = this.getBlocksMapState();
      fieldValue.zones = fieldValue.zones.map(function (zone) {
        zone.blocks = zone.blocks.map(function (block) {
          if (block.id === blockData.id) {
            block = blockData;
          }

          return _objectSpread({}, block);
        });
        return zone;
      });
      blocksMap[blockData.id].isVisible = !!isVisible;
      this.setState(function () {
        return {
          fieldValue: fieldValue,
          blocksMap: blocksMap
        };
      }, function () {
        _this7.updateBlocksPreview([blockData.id]);

        _this7.updateTimelineEvents();
      });
    }
  }, {
    key: "getPreviewWindow",
    value: function getPreviewWindow() {
      return this._refIframeComponent._refIframe.contentWindow;
    }
  }, {
    key: "getPreviewDocument",
    value: function getPreviewDocument() {
      return this._refIframeComponent._refIframe.contentDocument;
    }
  }, {
    key: "getBlockPreviewNode",
    value: function getBlockPreviewNode(id) {
      return this.getPreviewDocument().querySelector("[data-ez-block-id=\"".concat(id, "\"]:not(").concat(SELECTOR_PLACEHOLDER, ")"));
    }
  }, {
    key: "getPlaceholderPreviewNode",
    value: function getPlaceholderPreviewNode() {
      return this.getPreviewDocument().querySelector(SELECTOR_PLACEHOLDER);
    }
  }, {
    key: "removeBlockDataFromZone",
    value: function removeBlockDataFromZone(zones, blockId) {
      return zones.map(function (zone) {
        zone.blocks = zone.blocks.filter(function (block) {
          return block.id !== blockId;
        });
        return zone;
      });
    }
  }, {
    key: "insertBlockDataIntoZone",
    value: function insertBlockDataIntoZone(zones, newBlock, zoneId, nextBlockId) {
      var updatedZones = zones.map(function (zone) {
        var isSameZone = zone.id === zoneId;

        if (isSameZone && nextBlockId) {
          var nextBlock = zone.blocks.find(function (block) {
            return block.id === nextBlockId;
          });
          var insertIndex = nextBlock ? zone.blocks.indexOf(nextBlock) : 0;
          zone.blocks.splice(insertIndex, 0, newBlock);
        } else if (isSameZone && !nextBlockId) {
          zone.blocks = [].concat(_toConsumableArray(zone.blocks), [newBlock]);
        }

        return zone;
      });
      return updatedZones;
    }
  }, {
    key: "getBlock",
    value: function getBlock(target) {
      return this.props.getElement(target, function (element) {
        return element.dataset && element.dataset.ezBlockId;
      });
    }
  }, {
    key: "handleBlockRemove",
    value: function handleBlockRemove(block) {
      var _this8 = this;

      var fieldValue = this.getPageFieldTypeState();
      var blocksMap = this.getBlocksMapState();
      fieldValue.zones = this.removeBlockDataFromZone(fieldValue.zones, block.id);
      delete blocksMap[block.id];
      this.setState(function () {
        return {
          draggedSidebarBlockType: null,
          draggedPreviewBlockData: null,
          fieldValue: fieldValue,
          blocksMap: blocksMap
        };
      }, function () {
        return _this8.setPageFieldTypeFormFieldValue(_this8.stringifyPageFieldTypeState());
      });
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      this.unsetDocumentDragOverEventHandler();

      if (this.state.draggedSidebarBlockType) {
        this.handleDropSidebarBlock();
      } else if (this.state.draggedPreviewBlockData) {
        this.handleDropPreviewBlock();
      }

      this.clearZoneDragOverState(event.currentTarget);
      this.setPageFieldTypeFormFieldValue(this.stringifyPageFieldTypeState());
    }
  }, {
    key: "clearZoneDragOverState",
    value: function clearZoneDragOverState(zone) {
      zone.classList.remove(CLASS_ZONE_DRAGOVER);
      return zone;
    }
  }, {
    key: "cancelDropState",
    value: function cancelDropState() {
      var initDragDropState = this.props.getInitDragDropState();
      this.unsetDocumentDragOverEventHandler();
      this.setState(function () {
        return _objectSpread(_objectSpread({}, initDragDropState), {}, {
          draggedPreviewBlockData: null,
          draggedSidebarBlockType: null,
          isOverZone: false,
          dragOverZoneId: null
        });
      });
    }
  }, {
    key: "handleDropPreviewBlock",
    value: function handleDropPreviewBlock() {
      var placeholder = this.getPlaceholderPreviewNode();

      if (!placeholder) {
        return this.cancelDropState();
      }

      var data = this.state.draggedPreviewBlockData;
      var zoneId = placeholder.dataset.zoneId;
      var nextBlockId = placeholder.dataset.ezBlockId;
      var fieldValue = this.getPageFieldTypeState();
      var initDragDropState = this.props.getInitDragDropState();
      fieldValue.zones = this.removeBlockDataFromZone(_toConsumableArray(fieldValue.zones), data.block.id);
      fieldValue.zones = this.insertBlockDataIntoZone(fieldValue.zones, data.block, zoneId, nextBlockId);
      data.unMountBlock();
      placeholder.classList.remove(CLASS_PLACEHOLDER);
      placeholder.dataset.ezBlockId = data.block.id;
      this.setState(function () {
        return _objectSpread(_objectSpread({}, initDragDropState), {}, {
          draggedPreviewBlockData: null,
          draggedSidebarBlockType: null,
          fieldValue: fieldValue
        });
      });
    }
  }, {
    key: "handleDropSidebarBlock",
    value: function handleDropSidebarBlock() {
      var _this9 = this;

      var placeholder = this.getPlaceholderPreviewNode();

      if (!placeholder) {
        return this.cancelDropState();
      }

      var config = this.props.blocksConfig.find(function (config) {
        return config.type === _this9.state.draggedSidebarBlockType;
      });
      var zoneId = placeholder.dataset.zoneId;
      var nextBlockId = this.props.findNextElementIdentifier(placeholder, IDENTIFIER_BLOCK_DATA_ATTRIBUTE);
      var newBlock = {
        id: Object(_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_12__["default"])('b-'),
        type: config.type,
        name: config.name,
        view: Object.keys(config.views)[0],
        attributes: config.attributes.reduce(function (total, attr) {
          total.push({
            id: Object(_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_12__["default"])('a-'),
            name: attr.id,
            value: attr.value || null
          });
          return total;
        }, [])
      };
      var fieldValue = this.getPageFieldTypeState();
      var blocksMap = this.getBlocksMapState();
      var initDragDropState = this.props.getInitDragDropState();
      fieldValue.zones = this.insertBlockDataIntoZone(fieldValue.zones, newBlock, zoneId, nextBlockId);
      blocksMap[newBlock.id] = _objectSpread(_objectSpread({}, BLOCKS_BASE_STATE), {}, {
        config: config,
        isVisible: true,
        isNew: true
      });
      placeholder.classList.remove(CLASS_PLACEHOLDER);
      placeholder.dataset.ezBlockId = newBlock.id;
      this.setState(function () {
        return _objectSpread(_objectSpread({}, initDragDropState), {}, {
          draggedPreviewBlockData: null,
          draggedSidebarBlockType: null,
          fieldValue: fieldValue,
          blocksMap: blocksMap
        });
      });
    }
  }, {
    key: "setClientYPosition",
    value: function setClientYPosition(_ref6) {
      var clientY = _ref6.clientY;
      this._clientY = clientY;
    }
  }, {
    key: "setDocumentDragOverEventHandler",
    value: function setDocumentDragOverEventHandler() {
      window.document.addEventListener('dragover', this.setClientYPosition, false);
      this.getPreviewDocument().addEventListener('dragover', this.setClientYPosition, false);
    }
  }, {
    key: "unsetDocumentDragOverEventHandler",
    value: function unsetDocumentDragOverEventHandler() {
      window.document.removeEventListener('dragover', this.setClientYPosition);
      this.getPreviewDocument().removeEventListener('dragover', this.setClientYPosition);
    }
  }, {
    key: "handleDragStartSidebarBlock",
    value: function handleDragStartSidebarBlock(draggedSidebarBlockType) {
      this.setDocumentDragOverEventHandler();
      this.setState(function () {
        return {
          draggedSidebarBlockType: draggedSidebarBlockType,
          draggedPreviewBlockData: null
        };
      }, this.attachDocumentDropListeners);
    }
  }, {
    key: "handleDragStartPreviewBlock",
    value: function handleDragStartPreviewBlock(draggedPreviewBlockData) {
      this.setDocumentDragOverEventHandler();
      this.setState(function () {
        return {
          draggedSidebarBlockType: null,
          draggedPreviewBlockData: draggedPreviewBlockData
        };
      }, this.attachDocumentDropListeners);
    }
  }, {
    key: "attachDocumentDropListeners",
    value: function attachDocumentDropListeners() {
      var _this10 = this;

      var elements = [this.getPreviewDocument(), document];
      elements.forEach(function (element) {
        element.ondragover = function () {
          return _this10.props.removePlaceholdersAfterTimeout(_this10.getPlaceholderNodes, _this10.handleDragOverTimeout);
        };
      });
    }
  }, {
    key: "handleDragOverTimeout",
    value: function handleDragOverTimeout() {
      this.cancelDropState();
    }
  }, {
    key: "handleIframeLoad",
    value: function handleIframeLoad() {
      var _this11 = this;

      if (this.state.iframeLoaded) {
        return;
      }

      var previewDoc = this.getPreviewDocument();
      var link = previewDoc.createElement('link');
      link.id = 'ez-page-builder-styles';
      link.rel = 'stylesheet';
      link.href = this.props.iframeCss;
      this.getPreviewDocument().body.appendChild(link);
      this.setState(function () {
        return {
          iframeLoaded: true
        };
      }, function () {
        document.body.dispatchEvent(new CustomEvent('ez-page-builder-iframe-loaded'));
        document.body.classList.remove(CLASS_PAGE_BUILDER_DISABLED);

        previewDoc.onbeforeunload = function () {
          return _this11.setState(function () {
            return {
              iframeLoaded: false
            };
          });
        };
      });
    }
  }, {
    key: "handleZoneDragOver",
    value: function handleZoneDragOver(_ref7) {
      var _this12 = this;

      var target = _ref7.target;
      var _this$state4 = this.state,
          dragOverZoneId = _this$state4.dragOverZoneId,
          placeholderType = _this$state4.placeholderType;
      var zoneId = target.dataset.ezZoneId;

      if (!zoneId || zoneId === dragOverZoneId && placeholderType === PLACEHOLDER_TYPE_ZONE) {
        return false;
      }

      this.setState(function () {
        return {
          placeholderType: PLACEHOLDER_TYPE_ZONE,
          dragOverZoneId: zoneId,
          isOverZone: true
        };
      }, function () {
        _this12.getPreviewDocument().querySelectorAll(SELECTOR_ZONE).forEach(_this12.clearZoneDragOverState);

        target.classList.add(CLASS_ZONE_DRAGOVER);

        _this12.props.addPlaceholderInZone(target, _this12.getPlaceholderNodes(), IDENTIFIER_BLOCK_DATA_ATTRIBUTE, _this12.handleElementDragOver);
      });
    }
  }, {
    key: "getPlaceholderNodes",
    value: function getPlaceholderNodes() {
      return this.getPreviewDocument().querySelectorAll(SELECTOR_PLACEHOLDER);
    }
  }, {
    key: "handleElementDragOver",
    value: function handleElementDragOver(_ref8) {
      var target = _ref8.target,
          clientY = _ref8.clientY,
          currentTarget = _ref8.currentTarget;
      var block = this.getBlock(target);
      var isPlaceholder = currentTarget.classList.contains(CLASS_PLACEHOLDER);

      if (!block || isPlaceholder) {
        return;
      }

      block.closest(SELECTOR_ZONE).classList.add(CLASS_ZONE_DRAGOVER);
      var placeholders = this.getPlaceholderNodes();
      var _this$state5 = this.state,
          placeholderPosition = _this$state5.placeholderPosition,
          placeholderElementId = _this$state5.placeholderElementId,
          placeholderZoneId = _this$state5.placeholderZoneId;
      var placeholderMeta = this.props.addPlaceholderBesideElement(block, clientY, placeholders, IDENTIFIER_BLOCK_DATA_ATTRIBUTE, this.handleElementDragOver, {
        placeholderPosition: placeholderPosition,
        placeholderElementId: placeholderElementId,
        placeholderZoneId: placeholderZoneId
      });
      this.setState(function () {
        return _objectSpread({
          placeholderType: 'block'
        }, placeholderMeta);
      });
    }
  }, {
    key: "manageZoneEventHandlers",
    value: function manageZoneEventHandlers() {
      var _this13 = this;

      var zones = _toConsumableArray(this.getPreviewDocument().querySelectorAll(SELECTOR_ZONE));

      var callToActionText = Translator.trans(
      /*@Desc("Drop blocks here")*/
      'drop.blocks.here', {}, 'page_builder');
      zones.forEach(function (zone) {
        var data = _this13.state.fieldValue.zones.find(function (zoneData) {
          return zoneData.id === zone.dataset.ezZoneId;
        });

        if (!data) {
          return;
        }

        zone.classList.add(CLASS_ZONE);
        zone.dataset.callToActionText = callToActionText;
        zone.ondragover = _this13.handleZoneDragOver;
        zone.ondragenter = _this13.handleZoneDragOver;
        zone.ondrop = _this13.handleDrop;
      });
    }
  }, {
    key: "disableInIframeClicks",
    value: function disableInIframeClicks() {
      this.getPreviewDocument().body.addEventListener('click', function (event) {
        return event.preventDefault();
      }, false);
    }
  }, {
    key: "renderPreviewBlocks",
    value: function renderPreviewBlocks() {
      this.getBlocksFromZones().forEach(this.renderSinglePreviewBlock);
    }
  }, {
    key: "renderSinglePreviewBlock",
    value: function renderSinglePreviewBlock(block) {
      var blockMeta = _objectSpread({}, this.state.blocksMap[block.id]);

      var blockNode = this.getBlockPreviewNode(block.id);
      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var isEditable = this.state.timestamp <= convertDateToTimezone(new Date()).valueOf() && this.state.isValidActiveLayout;
      var blockConfig = this.props.blocksConfig.find(function (blockConfig) {
        return blockConfig.type === block.type;
      });

      if (blockMeta.isNew) {
        if (window.getComputedStyle(blockNode).getPropertyValue('position') === 'static') {
          blockNode.style.position = 'relative';
        }

        this.props.customizeNewBlockNode(blockNode, {
          blockType: blockMeta.config.type,
          pageLayoutIdentifier: this.state.fieldValue.layout,
          zoneId: blockNode.closest(SELECTOR_ZONE).dataset.ezZoneId
        });
      }

      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_block_preview_block__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: block.id,
        block: block,
        meta: blockMeta,
        onDragOver: this.handleElementDragOver,
        onDragStart: this.handleDragStartPreviewBlock,
        onDrag: this.handleDragBlock,
        onRemove: this.handleBlockRemove,
        onBlockDataUpdate: this.handleBlockDataUpdate,
        onConfigPopupOpen: this.requestForm,
        udwContainer: this.udwContainer,
        airtimeContainer: this.airtimeContainer,
        previewWindow: this.getPreviewWindow(),
        isEditable: isEditable,
        forceShowActionMenu: this.state.activeBlockId === block.id,
        onClick: this.handleOnBlockClick,
        onClickOutside: this.handleOnBlockOutsideClick,
        isAvailable: blockConfig.visible
      }), blockNode);
    }
  }, {
    key: "handleDragBlock",
    value: function handleDragBlock() {
      this.props.scrollContainer({
        clientY: this._clientY
      }, this.getPreviewWindow());
    }
  }, {
    key: "requestForm",
    value: function requestForm(block) {
      this.blockConfigRequestForm.target = block.id;
      this.blockConfigTextarea.value = JSON.stringify(this.state.fieldValue);
      this.blockConfigBlocksInput.value = block.id;
      this.blockConfigRequestForm.submit();
    }
  }, {
    key: "getBlocksData",
    value: function getBlocksData(zones) {
      return zones.map(function (zone) {
        return _objectSpread(_objectSpread({}, zone), {}, {
          blocks: zone.blocks.map(function (block) {
            return block.data;
          })
        });
      });
    }
  }, {
    key: "handleLayoutSelectorCancel",
    value: function handleLayoutSelectorCancel() {
      var previousHref = window.eZ.pageBuilder.config.onCreateCancelURL;

      if (this.state.isSwitchingLayout) {
        this.setState(function () {
          return {
            isSwitchingLayout: false
          };
        });
        return;
      }

      if (previousHref.length) {
        window.location.href = previousHref;
      } else {
        window.history.back();
      }
    }
  }, {
    key: "handleLayoutSelectorConfirm",
    value: function handleLayoutSelectorConfirm(layoutId) {
      var _this14 = this;

      var zones = this.createZonesStructure(layoutId);
      var fieldValue = this.getPageFieldTypeState();
      var isSwitchingLayout = this.state.isSwitchingLayout;
      fieldValue.layout = layoutId;
      fieldValue.zones = zones;
      this.setState(function () {
        return {
          iframeLoaded: false,
          isSwitchingLayout: false,
          shouldCreateBlocksPreviewNodes: isSwitchingLayout,
          fieldValue: fieldValue,
          layoutSelected: true
        };
      }, function () {
        _this14.setPageFieldTypeFormFieldValue(_this14.stringifyPageFieldTypeState());

        window.document.querySelector(SELECTOR_SAVE_DRAFT).click();
      });
    }
  }, {
    key: "updateBlockFilterQuery",
    value: function updateBlockFilterQuery(event) {
      event.preventDefault;
      this.setState({
        blockFilterQuery: event.target.value
      });
    }
  }, {
    key: "createZonesStructure",
    value: function createZonesStructure(layoutId) {
      var layoutConfig = this.props.layoutsConfig.find(function (layout) {
        return layout.id === layoutId;
      });
      var fieldValue = this.getPageFieldTypeState();

      var zones = _toConsumableArray(layoutConfig.zones).map(function (zone) {
        zone.blocks = [];
        return zone;
      });

      if (this.state.isSwitchingLayout) {
        fieldValue.zones.forEach(function (zone, index) {
          var zoneToAddBlocks = zones[index] || zones[zones.length - 1];
          zoneToAddBlocks.blocks = [].concat(_toConsumableArray(zoneToAddBlocks.blocks), _toConsumableArray(zone.blocks));
        });
      }

      return zones;
    }
  }, {
    key: "renderLayoutSelector",
    value: function renderLayoutSelector() {
      var _this$state6 = this.state,
          fieldValue = _this$state6.fieldValue,
          layoutSelectorTitle = _this$state6.layoutSelectorTitle,
          layoutSelectorConfirmBtnLabel = _this$state6.layoutSelectorConfirmBtnLabel,
          isSwitchingLayout = _this$state6.isSwitchingLayout,
          layoutSelected = _this$state6.layoutSelected,
          isValidActiveLayout = _this$state6.isValidActiveLayout;
      var _this$props = this.props,
          mode = _this$props.mode,
          layoutsConfig = _this$props.layoutsConfig;
      var isOnlyOneLayout = this.isOnlyOneLayout();
      var isCreateMode = ['create', 'translate_without_base_language'].includes(mode);

      if (layoutSelected) {
        return null;
      }

      if (isOnlyOneLayout && isCreateMode) {
        this.handleLayoutSelectorConfirm(layoutsConfig[0]['id']);
        return null;
      }

      if (!isCreateMode && !isSwitchingLayout) {
        return null;
      }

      var attrs = {
        layouts: layoutsConfig,
        onCancel: this.handleLayoutSelectorCancel,
        onConfirm: this.handleLayoutSelectorConfirm,
        modalContainer: this.modalContainer,
        itemSelectedId: fieldValue.layout,
        title: layoutSelectorTitle,
        confirmBtnLabel: layoutSelectorConfirmBtnLabel,
        isVisible: isSwitchingLayout,
        isValidActiveLayout: isValidActiveLayout,
        displaySaveDraftWarning: !isCreateMode
      };
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_selector_layout_selector__WEBPACK_IMPORTED_MODULE_8__["default"], attrs), this.modalContainer);
    }
  }, {
    key: "renderLayoutSwitcher",
    value: function renderLayoutSwitcher() {
      if (this.isOnlyOneLayout()) {
        return null;
      }

      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_switcher_layout_switcher__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: this.showLayoutSelector
      }), this.layoutSwitcherContainer);
    }
  }, {
    key: "isOnlyOneLayout",
    value: function isOnlyOneLayout() {
      return this.props.layoutsConfig.filter(function (layout) {
        return layout.visible;
      }).length === 1;
    }
  }, {
    key: "setIsEditableState",
    value: function setIsEditableState(oldTimestamp, selectedTimestamp) {
      var _this15 = this;

      var blocksIds = Object.keys(this.state.blocksMap);
      this.setState(function () {
        return {
          timestamp: selectedTimestamp
        };
      }, function () {
        return _this15.updateBlocksPreview(blocksIds);
      });
    }
  }, {
    key: "renderTimeline",
    value: function renderTimeline() {
      var timelineEvents = this.state.timelineEvents;
      var attrs = {
        onTimelineEventSelect: this.setIsEditableState,
        events: timelineEvents,
        selectedTimestamp: window.eZ.pageBuilder.config.referenceTimestamp * 1000
      };
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_timeline_module__WEBPACK_IMPORTED_MODULE_11__["default"], attrs), this.timelineContainer);
    }
  }, {
    key: "showLayoutSelector",
    value: function showLayoutSelector() {
      var layoutSelectorTitle = Translator.trans(
      /*@Desc("Switch layout")*/
      'layout_selector.switch.title', {}, 'page_builder');
      var layoutSelectorConfirmBtnLabel = Translator.trans(
      /*@Desc("Submit")*/
      'layout_selector.switch.confirm.label', {}, 'page_builder');
      this.setState(function () {
        return {
          isSwitchingLayout: true,
          layoutSelected: false,
          layoutSelectorTitle: layoutSelectorTitle,
          layoutSelectorConfirmBtnLabel: layoutSelectorConfirmBtnLabel
        };
      }, function () {
        return window.document.body.dispatchEvent(new CustomEvent('ez-page-builder-hide-tools'));
      });
    }
  }, {
    key: "renderSidebarBlocks",
    value: function renderSidebarBlocks() {
      var _this16 = this;

      if (!this.props.blocksConfig.length) {
        return null;
      }

      var _this$state7 = this.state,
          iframeLoaded = _this$state7.iframeLoaded,
          blockFilterQuery = _this$state7.blockFilterQuery;
      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var blocksToRender = this.props.blocksConfig.filter(function (config) {
        return config.visible;
      });
      var isDraggable = this.state.timestamp <= convertDateToTimezone(new Date()).valueOf() && iframeLoaded && this.state.isValidActiveLayout;
      var blockFilterQueryLowerCase = blockFilterQuery.toLowerCase();
      var blocksByCategories = blocksToRender.reduce(function (blocksByCategories, config) {
        var blockNameLowerCase = config.name.toLowerCase();
        var isHidden = !blockNameLowerCase.includes(blockFilterQueryLowerCase);

        if (!(config.category in blocksByCategories)) {
          blocksByCategories[config.category] = [];
        }

        blocksByCategories[config.category].push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_block_sidebar_block__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: config.type,
          type: config.type,
          name: config.name,
          thumbnail: config.thumbnail,
          onDragStart: _this16.handleDragStartSidebarBlock,
          onDrag: _this16.handleDragBlock,
          isDraggable: isDraggable,
          isHidden: isHidden
        }));
        return blocksByCategories;
      }, {});
      return Object.keys(blocksByCategories).map(function (blockCategory) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_block_sidebar_blocks_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: blockCategory,
          key: "block-group-".concat(blockCategory)
        }, blocksByCategories[blockCategory]);
      });
    }
  }, {
    key: "renderIframe",
    value: function renderIframe() {
      var _this$state8 = this.state,
          isIframelessMode = _this$state8.isIframelessMode,
          previewUrl = _this$state8.previewUrl,
          iframeLoaded = _this$state8.iframeLoaded;

      if (isIframelessMode) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_iframe_iframe__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ref: this.setIframeRef,
        onLoad: this.handleIframeLoad,
        src: previewUrl,
        isLoading: !iframeLoaded
      });
    }
  }, {
    key: "renderActiveLayoutError",
    value: function renderActiveLayoutError() {
      if (this.state.isValidActiveLayout) {
        return null;
      }

      var errorMessage = Translator.trans(
      /*@Desc("The layout of this landing page is no longer available and you cannot publish it. Please select a different layout.")*/
      'layout_selector.error.label', {}, 'page_builder');
      var errorButtonMessage = Translator.trans(
      /*@Desc("Change layout")*/
      'layout_selector.error.change_layout', {}, 'page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-page-builder__active-layout-error"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-page-builder__active-layout-error-content container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-page-builder__active-layout-error-message"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_16__["default"], {
        name: "warning",
        extraClasses: "ez-icon--medium"
      }), errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.showLayoutSelector
      }, errorButtonMessage)));
    }
  }, {
    key: "setIframeRef",
    value: function setIframeRef(ref) {
      this._refIframeComponent = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this17 = this;

      var blockPreviewPagePreviewRequestParams = Object(_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_15__["default"])(this.state.blockPreviewPagePreviewRequestParams);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_error_boundary_error_boundary__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-page-builder"
      }, this.modalContainer && this.renderLayoutSelector(), this.layoutSwitcherContainer && this.renderLayoutSwitcher(), this.timelineContainer && this.renderTimeline(), this.renderActiveLayoutError(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-page-builder__preview"
      }, this.renderIframe()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-sidebar__filter-bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "filter",
        placeholder: blockFilterPlaceholder,
        value: this.state.blockFilterQuery,
        onChange: this.updateBlockFilterQuery,
        className: "c-sidebar__filter form-control mb-2"
      })), this.renderSidebarBlocks()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-page-builder__block-config-wrapper"
      }), this.updatePreviewRequestParamsComponents.map(function (Component) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
          updatePreviewRequestParams: _this17.updatePreviewRequestParams,
          blockPreviewPagePreviewRequestParams: blockPreviewPagePreviewRequestParams
        });
      })));
    }
  }]);

  return PageBuilder;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var builderPropTypes = {
  getInitDragDropState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  getElement: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  scrollContainer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  removePlaceholderWithAnimation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  removePlaceholderWithoutAnimation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  addPlaceholderBesideElement: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  addPlaceholderInZone: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  removePlaceholders: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  findNextElementIdentifier: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  insertAfter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  insertBefore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  removePlaceholdersAfterTimeout: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
PageBuilder.propTypes = _objectSpread({
  fieldValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  blocksConfig: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  previewUrl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  iframeCss: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  layoutsConfig: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  previewSiteaccess: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  blockPreviewRequestParams: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  timelineGetEventsRequestParams: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  intentParameters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  customizeNewBlockNode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
}, builderPropTypes);
PageBuilder.defaultProps = {
  blockPreviewRequestParams: {},
  timelineGetEventsRequestParams: {},
  intentParameters: {},

  /**
   * Extension point to customize the new block HTML attributes
   *
   * @function customizeNewBlockNode
   * @param {HTMLElement} block
   * @param {Object} meta
   * @param {String} meta.blockType
   * @param {String} meta.pageLayoutIdentifier
   * @param {String} meta.zoneId
   * @returns {HTMLElement}
   */
  customizeNewBlockNode: function customizeNewBlockNode(node, meta) {
    if (window.eZ.pageBuilder && window.eZ.pageBuilder.callbacks && window.eZ.pageBuilder.callbacks.customizeNewBlockNode) {
      return window.eZ.pageBuilder.callbacks.customizeNewBlockNode(node, meta);
    }

    return node;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PageBuilder);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/services/preview.service.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/services/preview.service.js ***!
  \*************************************************************************************************************************/
/*! exports provided: getBlockPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockPreview", function() { return getBlockPreview; });
/* harmony import */ var _helpers_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/serialize */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/helpers/serialize.js");

/**
 * Gets block preview
 *
 * @function getBlockPreview
 * @param {Object} body request data
 * @returns {Promise} Fetch promise
 */

var getBlockPreview = function getBlockPreview(body, targetSiteaccess) {
  var url = window.Routing.generate('ezplatform.page_builder.block.siteaccess_preview', {
    siteaccessName: targetSiteaccess
  });
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  var request = new Request(url, {
    method: 'POST',
    headers: {
      'X-CSRF-Token': token,
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: Object(_helpers_serialize__WEBPACK_IMPORTED_MODULE_0__["default"])(body),
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request);
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/services/timeline.service.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/services/timeline.service.js ***!
  \**************************************************************************************************************************/
/*! exports provided: getTimelineEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimelineEvents", function() { return getTimelineEvents; });
/* harmony import */ var _helpers_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/serialize */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/helpers/serialize.js");

/**
 * Gets the timeline events
 *
 * @function getTimelineEvents
 * @param {Object} body request data
 * @returns {Promise} Fetch promise
 */

var getTimelineEvents = function getTimelineEvents(body) {
  var url = window.Routing.generate('ezplatform.page_builder.timeline.events.get');
  var request = new Request(url, {
    method: 'POST',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: Object(_helpers_serialize__WEBPACK_IMPORTED_MODULE_0__["default"])(body),
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request);
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page.builder.module.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page.builder.module.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_builder_page_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-builder/page.builder */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/page.builder.js");
/* harmony import */ var _core_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/drag.drop */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/core/drag.drop.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var PageBuilderModule = /*#__PURE__*/function (_PureComponent) {
  _inherits(PageBuilderModule, _PureComponent);

  var _super = _createSuper(PageBuilderModule);

  function PageBuilderModule(props) {
    var _this;

    _classCallCheck(this, PageBuilderModule);

    _this = _super.call(this, props);
    _this.validateAllBlocksData = _this.validateAllBlocksData.bind(_assertThisInitialized(_this));
    _this.validateLayoutData = _this.validateLayoutData.bind(_assertThisInitialized(_this));
    _this.setPageBuilderRef = _this.setPageBuilderRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PageBuilderModule, [{
    key: "validateAllBlocksData",
    value: function validateAllBlocksData() {
      return this._refPageBuilder.validateAllBlocksData();
    }
  }, {
    key: "validateLayoutData",
    value: function validateLayoutData() {
      return this._refPageBuilder.validateLayoutData();
    }
  }, {
    key: "setPageBuilderRef",
    value: function setPageBuilderRef(ref) {
      this._refPageBuilder = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_drag_drop__WEBPACK_IMPORTED_MODULE_2__["default"], {
        render: function render(methods) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page_builder_page_builder__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
            ref: _this2.setPageBuilderRef
          }, _this2.props, methods));
        }
      });
    }
  }]);

  return PageBuilderModule;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (PageBuilderModule);
eZ.addConfig('modules.PageBuilder', PageBuilderModule);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline.module.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline.module.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _timeline_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline/timeline */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/timeline.js");
/* harmony import */ var _timeline_components_timeline_toggler_timeline_toggler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline/components/timeline-toggler/timeline.toggler */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-toggler/timeline.toggler.js");
/* harmony import */ var _timeline_components_back_to_current_time_back_to_current_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline/components/back-to-current-time/back.to.current.time */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/back-to-current-time/back.to.current.time.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var TimelineModule = /*#__PURE__*/function (_PureComponent) {
  _inherits(TimelineModule, _PureComponent);

  var _super = _createSuper(TimelineModule);

  function TimelineModule(props) {
    var _this;

    _classCallCheck(this, TimelineModule);

    _this = _super.call(this, props);
    _this.changeSelectedTimestamp = _this.changeSelectedTimestamp.bind(_assertThisInitialized(_this));
    _this.toggleFuturePreviewState = _this.toggleFuturePreviewState.bind(_assertThisInitialized(_this));
    _this.state = {
      selectedTimestamp: props.selectedTimestamp
    };
    return _this;
  }

  _createClass(TimelineModule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.toggleFuturePreviewState();
    }
  }, {
    key: "toggleFuturePreviewState",
    value: function toggleFuturePreviewState() {
      var selectedTimestamp = this.state.selectedTimestamp;
      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var now = convertDateToTimezone(new Date()).valueOf();
      var show = selectedTimestamp > now;
      document.body.classList.toggle('ez-future-preview', show);
    }
  }, {
    key: "changeSelectedTimestamp",
    value: function changeSelectedTimestamp(selectedTimestamp) {
      var _this2 = this;

      var _this$props = this.props,
          onTimelineEventSelect = _this$props.onTimelineEventSelect,
          events = _this$props.events;
      var oldTimestamp = this.state.selectedTimestamp;
      this.setState(function () {
        return {
          selectedTimestamp: selectedTimestamp
        };
      }, function () {
        _this2.toggleFuturePreviewState();

        onTimelineEventSelect(oldTimestamp, selectedTimestamp, events);
      });
    }
  }, {
    key: "renderTimelineBtn",
    value: function renderTimelineBtn() {
      var timelineTogglerContainer = document.querySelector('.ez-page-info-bar__timeline-toggler');
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_timeline_components_timeline_toggler_timeline_toggler__WEBPACK_IMPORTED_MODULE_4__["default"], null), timelineTogglerContainer);
    }
  }, {
    key: "renderBackToCurrentTime",
    value: function renderBackToCurrentTime() {
      var backToCurrentTime = document.querySelector('.ez-back-to-current-time');
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_timeline_components_back_to_current_time_back_to_current_time__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onSelectedTimestampChange: this.changeSelectedTimestamp
      }), backToCurrentTime);
    }
  }, {
    key: "render",
    value: function render() {
      var events = this.props.events;
      var selectedTimestamp = this.state.selectedTimestamp;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-timeline"
      }, this.renderTimelineBtn(), this.renderBackToCurrentTime(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_timeline_timeline__WEBPACK_IMPORTED_MODULE_3__["default"], {
        events: events,
        selectedTimestamp: selectedTimestamp,
        onSelectedTimestampChange: this.changeSelectedTimestamp
      }));
    }
  }]);

  return TimelineModule;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

TimelineModule.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onTimelineEventSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  selectedTimestamp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TimelineModule);
eZ.addConfig('modules.Timeline', TimelineModule);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/all-events-view/all.events.view.js":
/*!***************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/all-events-view/all.events.view.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
/* harmony import */ var _events_table_events_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events-table/events.table */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-table/events.table.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var AllEventsView = /*#__PURE__*/function (_Component) {
  _inherits(AllEventsView, _Component);

  var _super = _createSuper(AllEventsView);

  function AllEventsView(props) {
    var _this;

    _classCallCheck(this, AllEventsView);

    _this = _super.call(this, props);
    _this.toggleList = _this.toggleList.bind(_assertThisInitialized(_this));
    _this.hideList = _this.hideList.bind(_assertThisInitialized(_this));
    _this.closeOnOutsideClick = _this.closeOnOutsideClick.bind(_assertThisInitialized(_this));
    _this._refContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.backdrop = null;
    _this.state = {
      isListVisible: false
    };
    return _this;
  }

  _createClass(AllEventsView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleOutsideClickListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleOutsideClickListeners();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleOutsideClickListeners(true);
    }
  }, {
    key: "closeOnOutsideClick",
    value: function closeOnOutsideClick(event) {
      var clickedOutside = !this._refContainer.current.contains(event.target);

      if (clickedOutside) {
        this.hideList();
      }
    }
  }, {
    key: "hideList",
    value: function hideList() {
      this.setState(function () {
        return {
          isListVisible: false
        };
      });
    }
  }, {
    key: "toggleList",
    value: function toggleList() {
      this.setState(function (state) {
        return {
          isListVisible: !state.isListVisible
        };
      }, function () {
        return window.eZ.helpers.tooltips.hideAll();
      });
    }
  }, {
    key: "addBackdrop",
    value: function addBackdrop() {
      this.backdrop = document.createElement('div');
      this.backdrop.classList.add('ez-backdrop');
      this.backdrop.addEventListener('click', this.hideList, false);
      document.body.appendChild(this.backdrop);
    }
  }, {
    key: "removeBackdrop",
    value: function removeBackdrop() {
      document.body.removeChild(this.backdrop);
      this.backdrop = null;
    }
  }, {
    key: "handleOutsideClickListeners",
    value: function handleOutsideClickListeners() {
      var forceRemoving = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var isListVisible = this.state.isListVisible;

      if (isListVisible && !this.backdrop) {
        this.addBackdrop();
        document.addEventListener('click', this.closeOnOutsideClick, false);
      }

      if ((!isListVisible || forceRemoving) && this.backdrop) {
        this.removeBackdrop();
        document.removeEventListener('click', this.closeOnOutsideClick);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var title = Translator.trans(
      /*@Desc("Scheduled events")*/
      'scheduled.events', {}, 'timeline');
      var isListVisible = this.state.isListVisible;
      var togglerAttrs = {
        className: 'c-all-events-view__toggler',
        onClick: this.toggleList
      };

      if (isListVisible) {
        togglerAttrs.className = "".concat(togglerAttrs.className, " ").concat(togglerAttrs.className, "--is-list-visible");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-all-events-view",
        ref: this._refContainer,
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", togglerAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "view-custom",
        extraClasses: "ez-icon--small-medium"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_table_events_table__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
        isListVisible: this.state.isListVisible
      })));
    }
  }]);

  return AllEventsView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AllEventsView.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onSelectedTimestampChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AllEventsView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/back-to-current-time/back.to.current.time.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/back-to-current-time/back.to.current.time.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon.js */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var BackToCurrentTime = /*#__PURE__*/function (_PureComponent) {
  _inherits(BackToCurrentTime, _PureComponent);

  var _super = _createSuper(BackToCurrentTime);

  function BackToCurrentTime(props) {
    var _this;

    _classCallCheck(this, BackToCurrentTime);

    _this = _super.call(this, props);
    _this.setCurrentTime = _this.setCurrentTime.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BackToCurrentTime, [{
    key: "setCurrentTime",
    value: function setCurrentTime() {
      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var onSelectedTimestampChange = this.props.onSelectedTimestampChange;
      onSelectedTimestampChange(convertDateToTimezone(new Date()).valueOf());
    }
  }, {
    key: "render",
    value: function render() {
      var title = Translator.trans(
      /*@Desc("Go back to current time")*/
      'back.current.time', {}, 'timeline');
      var warningText = Translator.trans(
      /*@Desc("Previewing content in the future")*/
      'back_to_current_time.warning.text', {}, 'timeline');
      var infoText = Translator.trans(
      /*@Desc("Go back to current time")*/
      'back_to_current_time.info.text', {}, 'timeline');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-back-to-current-time"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-back-to-current-time__btn-wrapper",
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-icon c-back-to-current-time__btn",
        onClick: this.setCurrentTime
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "back-current-date"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "c-back-to-current-time__warning"
      }, warningText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "c-back-to-current-time__info"
      }, infoText));
    }
  }]);

  return BackToCurrentTime;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

BackToCurrentTime.propTypes = {
  onSelectedTimestampChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BackToCurrentTime);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-paginator/calendar.paginator.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-paginator/calendar.paginator.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");



var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var CalendarPaginator = function CalendarPaginator(_ref) {
  var displayedDate = _ref.displayedDate,
      onMonthChange = _ref.onMonthChange;
  var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
  var date = convertDateToTimezone(displayedDate);

  var setPreviousMonth = function setPreviousMonth() {
    date.month(date.month() - 1);
    onMonthChange(date.valueOf());
  };

  var setNextMonth = function setNextMonth() {
    date.month(date.month() + 1);
    onMonthChange(date.valueOf());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-paginator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-paginator__caret",
    onClick: setPreviousMonth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "caret-back",
    extraClasses: "ez-icon--small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, MONTH_NAMES[date.month()], " ", date.year()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-paginator__caret",
    onClick: setNextMonth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "caret-next",
    extraClasses: "ez-icon--small"
  })));
};

CalendarPaginator.propTypes = {
  displayedDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onMonthChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarPaginator);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar/calendar.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar/calendar.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
/* harmony import */ var _calendar_paginator_calendar_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar-paginator/calendar.paginator */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-paginator/calendar.paginator.js");
/* harmony import */ var _month_view_month_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../month-view/month.view */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/month-view/month.view.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Calendar = /*#__PURE__*/function (_PureComponent) {
  _inherits(Calendar, _PureComponent);

  var _super = _createSuper(Calendar);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _super.call(this, props);
    _this.toggleCalendar = _this.toggleCalendar.bind(_assertThisInitialized(_this));
    _this.hideCalendar = _this.hideCalendar.bind(_assertThisInitialized(_this));
    _this.changeMonth = _this.changeMonth.bind(_assertThisInitialized(_this));
    _this.changeSelectedTimestamp = _this.changeSelectedTimestamp.bind(_assertThisInitialized(_this));
    _this.closeOnOutsideClick = _this.closeOnOutsideClick.bind(_assertThisInitialized(_this));
    _this._refContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.backdrop = null;
    _this.state = {
      isCalendarExpanded: false,
      selectedDate: props.selectedTimestamp,
      displayedDate: props.selectedTimestamp
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleOutsideClickListeners();
      window.eZ.helpers.tooltips.parse();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      this.handleOutsideClickListeners();

      if (prevProps.selectedTimestamp === this.props.selectedTimestamp) {
        return;
      }

      this.setState(function () {
        return {
          selectedDate: _this2.props.selectedTimestamp,
          displayedDate: _this2.props.selectedTimestamp
        };
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleOutsideClickListeners(true);
    }
  }, {
    key: "closeOnOutsideClick",
    value: function closeOnOutsideClick(event) {
      var clickedOutside = !this._refContainer.current.contains(event.target);

      if (clickedOutside) {
        this.hideCalendar();
      }
    }
  }, {
    key: "hideCalendar",
    value: function hideCalendar() {
      this.setState(function () {
        return {
          isCalendarExpanded: false
        };
      });
    }
  }, {
    key: "toggleCalendar",
    value: function toggleCalendar() {
      this.setState(function (state) {
        return {
          isCalendarExpanded: !state.isCalendarExpanded
        };
      }, function () {
        return window.eZ.helpers.tooltips.hideAll();
      });
    }
  }, {
    key: "changeMonth",
    value: function changeMonth(displayedDate) {
      this.setState(function () {
        return {
          displayedDate: displayedDate
        };
      });
    }
  }, {
    key: "changeSelectedTimestamp",
    value: function changeSelectedTimestamp(selectedTimestamp) {
      this.props.onSelectedTimestampChange(selectedTimestamp);
    }
  }, {
    key: "addBackdrop",
    value: function addBackdrop() {
      this.backdrop = document.createElement('div');
      this.backdrop.classList.add('ez-backdrop');
      this.backdrop.addEventListener('click', this.hideCalendar, false);
      document.body.appendChild(this.backdrop);
    }
  }, {
    key: "removeBackdrop",
    value: function removeBackdrop() {
      document.body.removeChild(this.backdrop);
      this.backdrop = null;
    }
  }, {
    key: "handleOutsideClickListeners",
    value: function handleOutsideClickListeners() {
      var forceRemoving = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var isCalendarExpanded = this.state.isCalendarExpanded;

      if (isCalendarExpanded && !this.backdrop) {
        this.addBackdrop();
        document.addEventListener('click', this.closeOnOutsideClick, false);
      }

      if ((!isCalendarExpanded || forceRemoving) && this.backdrop) {
        this.removeBackdrop();
        document.removeEventListener('click', this.closeOnOutsideClick);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var title = Translator.trans(
      /*@Desc("Timeline calendar")*/
      'timeline.calendar', {}, 'timeline');
      var _this$state = this.state,
          isCalendarExpanded = _this$state.isCalendarExpanded,
          selectedDate = _this$state.selectedDate,
          displayedDate = _this$state.displayedDate;
      var attrs = {
        className: 'c-calendar'
      };

      if (isCalendarExpanded) {
        attrs.className = "".concat(attrs.className, " ").concat(attrs.className, "--is-expanded");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, attrs, {
        ref: this._refContainer
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "c-calendar__toggler",
        onClick: this.toggleCalendar,
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "schedule",
        extraClasses: "ez-icon--small-medium"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-calendar__view"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calendar_paginator_calendar_paginator__WEBPACK_IMPORTED_MODULE_3__["default"], {
        displayedDate: displayedDate,
        onMonthChange: this.changeMonth
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_month_view_month_view__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, this.props, {
        displayedDate: displayedDate,
        selectedDate: selectedDate,
        onChangeSelectedTimestamp: this.changeSelectedTimestamp
      }))));
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

Calendar.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onSelectedTimestampChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectedTimestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/day-view/day.view.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/day-view/day.view.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _event_marker_event_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-marker/event.marker */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js");




var DayView = function DayView(_ref) {
  var event = _ref.event,
      timestamp = _ref.timestamp,
      isSelected = _ref.isSelected,
      isSelectable = _ref.isSelectable,
      isNextMonth = _ref.isNextMonth,
      day = _ref.day,
      onChangeSelectedTimestamp = _ref.onChangeSelectedTimestamp;

  var changeSelectedTimestamp = function changeSelectedTimestamp() {
    return onChangeSelectedTimestamp(timestamp);
  };

  var renderMarker = function renderMarker() {
    if (!event) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_marker_event_marker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      event: event,
      inCalendar: true
    });
  };

  var wrapperClass = 'c-day-view';
  var wrapperAttrs = {
    className: wrapperClass
  };
  var labelAttrs = {
    className: 'c-day-view__label'
  };

  if (isSelected) {
    wrapperAttrs.className = "".concat(wrapperAttrs.className, " ").concat(wrapperClass, "--is-selected");
  }

  if (isSelectable) {
    wrapperAttrs.className = "".concat(wrapperAttrs.className, " ").concat(wrapperClass, "--is-selectable");
    wrapperAttrs.onClick = changeSelectedTimestamp;
  }

  if (isNextMonth) {
    labelAttrs.className = "".concat(labelAttrs.className, " ").concat(labelAttrs.className, "--is-next-month");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", wrapperAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", labelAttrs, day), renderMarker());
};

DayView.propTypes = {
  day: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  timestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isSelected,
  onChangeSelectedTimestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  event: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isSelectable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isNextMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
DayView.defaultProps = {
  isSelectable: true,
  isNextMonth: false
};
/* harmony default export */ __webpack_exports__["default"] = (DayView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
/* harmony import */ var _event_tooltip_event_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-tooltip/event.tooltip */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-tooltip/event.tooltip.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var EventMarket = /*#__PURE__*/function (_Component) {
  _inherits(EventMarket, _Component);

  var _super = _createSuper(EventMarket);

  function EventMarket(props) {
    var _this;

    _classCallCheck(this, EventMarket);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.renderMarkerIcon = _this.renderMarkerIcon.bind(_assertThisInitialized(_this));
    _this.showTooltip = _this.showTooltip.bind(_assertThisInitialized(_this));
    _this.hideTooltip = _this.hideTooltip.bind(_assertThisInitialized(_this));
    _this._refMarker = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.hideTooltipTimeout = null;
    _this.state = {
      onLeft: false,
      isTooltipVisible: false
    };
    return _this;
  }

  _createClass(EventMarket, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var markerRect = this._refMarker.current.getBoundingClientRect();

      var onLeft = markerRect.left > window.innerWidth / 2;
      this.setState(function () {
        return {
          onLeft: onLeft
        };
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          onSetTime = _this$props.onSetTime,
          timestamp = _this$props.timestamp;
      onSetTime(parseInt(timestamp, 10));
    }
  }, {
    key: "showTooltip",
    value: function showTooltip() {
      this.toggleTooltipVisibility(true);
      window.document.body.addEventListener('mousemove', this.hideTooltip, false);
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip(event) {
      var _this2 = this;

      var eventMarker = event.target.closest('.c-event-marker');
      window.clearTimeout(this.hideTooltipTimeout);

      if (eventMarker) {
        return;
      }

      this.hideTooltipTimeout = window.setTimeout(function () {
        _this2.toggleTooltipVisibility(false);

        window.document.body.removeEventListener('mousemove', _this2.hideTooltip, false);
      }, 200);
    }
  }, {
    key: "toggleTooltipVisibility",
    value: function toggleTooltipVisibility(isTooltipVisible) {
      this.setState(function () {
        return {
          isTooltipVisible: isTooltipVisible
        };
      });
    }
  }, {
    key: "renderMarkerIcon",
    value: function renderMarkerIcon() {
      var _this$props2 = this.props,
          event = _this$props2.event,
          inCalendar = _this$props2.inCalendar;
      var onLeft = this.state.onLeft;
      var iconClass = 'c-event-marker__icon';

      if (onLeft) {
        iconClass = "".concat(iconClass, " ").concat(iconClass, "--tooltip-on-left");
      }

      if (event.descriptions.length === 1) {
        var extraClasses = "ez-icon--small ez-icon--secondary ".concat(iconClass);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          customPath: event.icon,
          extraClasses: extraClasses
        });
      } else {
        var label = inCalendar ? "+".concat(event.descriptions.length) : event.descriptions.length;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: iconClass
        }, label);
      }
    }
  }, {
    key: "renderEventTooltip",
    value: function renderEventTooltip() {
      var event = this.props.event;
      var _this$state = this.state,
          onLeft = _this$state.onLeft,
          isTooltipVisible = _this$state.isTooltipVisible;

      if (!isTooltipVisible) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_tooltip_event_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
        descriptions: event.descriptions,
        onLeft: onLeft
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          leftPosition = _this$props3.leftPosition,
          inCalendar = _this$props3.inCalendar,
          event = _this$props3.event;
      var style = {
        left: "".concat(leftPosition, "%")
      };
      var attrs = {
        className: 'c-event-marker',
        ref: this._refMarker,
        onMouseEnter: this.showTooltip
      };

      if (event.type) {
        attrs['data-event-type'] = event.type;
      }

      if (inCalendar) {
        attrs.className = "".concat(attrs.className, " ").concat(attrs.className, "--in-calendar");
      } else {
        attrs.onClick = this.handleClick;
        attrs.style = style;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", attrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "c-event-marker__btn"
      }, this.renderMarkerIcon()), this.renderEventTooltip());
    }
  }]);

  return EventMarket;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

EventMarket.propTypes = {
  event: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onSetTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  timestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  leftPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  inCalendar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
EventMarket.defaultProps = {
  inCalendar: false
};
/* harmony default export */ __webpack_exports__["default"] = (EventMarket);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-tooltip/event.tooltip.js":
/*!***********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-tooltip/event.tooltip.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var EventTooltip = /*#__PURE__*/function (_PureComponent) {
  _inherits(EventTooltip, _PureComponent);

  var _super = _createSuper(EventTooltip);

  function EventTooltip(props) {
    var _this;

    _classCallCheck(this, EventTooltip);

    _this = _super.call(this, props);
    _this.renderDescription = _this.renderDescription.bind(_assertThisInitialized(_this));
    _this._refTooltip = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.state = {
      topPosition: -25
    };
    return _this;
  }

  _createClass(EventTooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var topPosition = this.state.topPosition;

      var tooltipRect = this._refTooltip.current.getBoundingClientRect();

      var isOutsiteWindow = tooltipRect.top + tooltipRect.height + topPosition > window.innerHeight;

      if (!isOutsiteWindow) {
        return;
      }

      var newTopPosition = window.innerHeight - (tooltipRect.top + tooltipRect.height - topPosition + 50);
      this.setState(function () {
        return {
          topPosition: newTopPosition
        };
      });
    }
  }, {
    key: "setInnerHTML",
    value: function setInnerHTML(__html) {
      return {
        __html: __html
      };
    }
  }, {
    key: "renderDescription",
    value: function renderDescription(description, index) {
      var key = "".concat(index, "-").concat(description.length);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-event-tooltip__item",
        key: key,
        dangerouslySetInnerHTML: this.setInnerHTML(description)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var topPosition = this.state.topPosition;
      var _this$props = this.props,
          descriptions = _this$props.descriptions,
          onLeft = _this$props.onLeft;
      var attrs = {
        className: 'c-event-tooltip',
        ref: this._refTooltip,
        style: {
          top: topPosition
        }
      };

      if (onLeft) {
        attrs.className = "".concat(attrs.className, " ").concat(attrs.className, "--on-left");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", attrs, descriptions.map(this.renderDescription));
    }
  }]);

  return EventTooltip;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

EventTooltip.propTypes = {
  descriptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onLeft: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EventTooltip);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-table/events.table.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-table/events.table.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _events_table_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.table.row */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-table/events.table.row.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var EventsTable = /*#__PURE__*/function (_PureComponent) {
  _inherits(EventsTable, _PureComponent);

  var _super = _createSuper(EventsTable);

  function EventsTable(props) {
    var _this;

    _classCallCheck(this, EventsTable);

    _this = _super.call(this, props);
    _this.renderTableItem = _this.renderTableItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EventsTable, [{
    key: "renderTableItem",
    value: function renderTableItem(event, index) {
      var onSelectedTimestampChange = this.props.onSelectedTimestampChange;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_table_row__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: index,
        data: event,
        onSelectedTimestampChange: onSelectedTimestampChange
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          events = _this$props.events,
          isListVisible = _this$props.isListVisible;
      var attrs = {
        className: 'c-events-table'
      };
      var tableTitle = Translator.trans(
      /*@Desc("Upcoming scheduled events")*/
      'events_table.title', {}, 'timeline');
      var eventHeader = Translator.trans(
      /*@Desc("Event")*/
      'events_table.event.header', {}, 'timeline');
      var dateHeader = Translator.trans(
      /*@Desc("Date")*/
      'events_table.date.header', {}, 'timeline');

      if (isListVisible) {
        attrs.className = "".concat(attrs.className, " ").concat(attrs.className, "--is-visible");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", attrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "c-events-table__title"
      }, tableTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-scrollable-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "table table-hover"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, eventHeader), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, dateHeader))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, events.map(this.renderTableItem)))));
    }
  }]);

  return EventsTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

EventsTable.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onSelectedTimestampChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EventsTable);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-table/events.table.row.js":
/*!*************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-table/events.table.row.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var EventsTableRow = /*#__PURE__*/function (_PureComponent) {
  _inherits(EventsTableRow, _PureComponent);

  var _super = _createSuper(EventsTableRow);

  function EventsTableRow(props) {
    var _this;

    _classCallCheck(this, EventsTableRow);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EventsTableRow, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          onSelectedTimestampChange = _this$props.onSelectedTimestampChange,
          data = _this$props.data;
      onSelectedTimestampChange(data.date * 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;
      var formatFullDateTime = window.eZ.helpers.timezone.formatFullDateTime;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        onClick: this.handleClick,
        className: "c-events-table-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "c-events-table-row__cell"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "c-events-table-row__icon-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        customPath: data.icon
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "c-events-table-row__cell"
      }, data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "c-events-table-row__cell"
      }, formatFullDateTime(data.date * 1000)));
    }
  }]);

  return EventsTableRow;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

EventsTableRow.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onSelectedTimestampChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EventsTableRow);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/month-view/month.view.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/month-view/month.view.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _day_view_day_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../day-view/day.view */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/day-view/day.view.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var MonthView = /*#__PURE__*/function (_PureComponent) {
  _inherits(MonthView, _PureComponent);

  var _super = _createSuper(MonthView);

  function MonthView(props) {
    var _this;

    _classCallCheck(this, MonthView);

    _this = _super.call(this, props);

    var eventsByDay = _this.filterEvents(props.events);

    _this.state = {
      eventsByDay: eventsByDay
    };
    return _this;
  }

  _createClass(MonthView, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var events = this.props.events;
      var areSameEvents = events.every(function (event, index) {
        return prevProps.events[index] && prevProps.events[index].date === event.date;
      });

      if (areSameEvents) {
        return;
      }

      var eventsByDay = this.filterEvents(events);
      this.setState(function () {
        return {
          eventsByDay: eventsByDay
        };
      });
    }
  }, {
    key: "groupEventsByDay",
    value: function groupEventsByDay(total, event) {
      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var eventDate = convertDateToTimezone(event.date * 1000);
      var timestamp = convertDateToTimezone(new Date(eventDate.year(), eventDate.month(), eventDate.date(), 12)).hour(12).valueOf();

      if (total[timestamp]) {
        total[timestamp] = {
          descriptions: [].concat(_toConsumableArray(total[timestamp].descriptions), [event.description])
        };
      } else {
        total[timestamp] = {
          icon: event.icon,
          type: event.type,
          descriptions: [event.description]
        };
      }

      return total;
    }
  }, {
    key: "filterEvents",
    value: function filterEvents(events) {
      var groupedEvents = events.reduce(this.groupEventsByDay, {});
      return groupedEvents;
    }
  }, {
    key: "renderHeaders",
    value: function renderHeaders() {
      return DAYS.map(function (day) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "c-month-view__header",
          key: day
        }, day);
      });
    }
  }, {
    key: "renderDaysBeforeMonth",
    value: function renderDaysBeforeMonth() {
      var _this2 = this;

      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var displayedDate = convertDateToTimezone(this.props.displayedDate);
      var firstDayOfMonth = new Date(displayedDate.year(), displayedDate.month(), 1);
      var day = firstDayOfMonth.getDay();
      var days = [];
      var now = convertDateToTimezone(new Date());

      for (var i = 0; i !== day; i++) {
        days.push('');
      }

      return days.map(function (item, index) {
        var date = convertDateToTimezone(new Date(displayedDate.year(), displayedDate.month(), index - day + 1, 12)).hour(12);
        var label = date.date();
        var timestamp = date.valueOf();
        var isNotSelectable = now.isAfter(date, 'day');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_day_view_day_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: timestamp,
          timestamp: timestamp,
          day: label,
          event: _this2.state.eventsByDay[timestamp],
          isSelectable: !isNotSelectable,
          onChangeSelectedTimestamp: _this2.props.onChangeSelectedTimestamp
        });
      });
    }
  }, {
    key: "renderDaysOfMonth",
    value: function renderDaysOfMonth() {
      var _this3 = this;

      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var displayedDate = convertDateToTimezone(this.props.displayedDate);
      var daysInMonth = displayedDate.daysInMonth();
      var days = [];
      var selectedDate = convertDateToTimezone(this.props.selectedDate);
      var now = convertDateToTimezone(new Date());

      for (var i = 0; i !== daysInMonth; i++) {
        days.push('');
      }

      return days.map(function (item, index) {
        var date = convertDateToTimezone(new Date(displayedDate.year(), displayedDate.month(), index + 1, 12)).hour(12);
        var label = date.date();
        var isSelected = selectedDate.isSame(date, 'day');
        var isNotSelectable = now.isAfter(date, 'day');
        var isToday = now.isSame(date, 'day');
        var dailyTimestamp = date.valueOf();

        if (isToday) {
          date.hour(now.hour());
          date.minute(now.minute());
        }

        var timestamp = date.valueOf();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_day_view_day_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: timestamp,
          timestamp: timestamp,
          day: label,
          event: _this3.state.eventsByDay[dailyTimestamp],
          isSelected: isSelected,
          isSelectable: !isNotSelectable,
          onChangeSelectedTimestamp: _this3.props.onChangeSelectedTimestamp
        });
      });
    }
  }, {
    key: "renderDaysAfterMonth",
    value: function renderDaysAfterMonth() {
      var _this4 = this;

      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var displayedDate = convertDateToTimezone(this.props.displayedDate);
      var daysInMonth = displayedDate.daysInMonth();
      var lastDayOfMonth = new Date(displayedDate.year(), displayedDate.month(), daysInMonth);
      var day = 6 - lastDayOfMonth.getDay();
      var days = [];
      var now = convertDateToTimezone(new Date());

      for (var i = 0; i !== day; i++) {
        days.push('');
      }

      return days.map(function (item, index) {
        var date = convertDateToTimezone(new Date(displayedDate.year(), displayedDate.month() + 1, index + 1, 12)).hour(12);
        var label = date.date();
        var timestamp = date.valueOf();
        var isNotSelectable = now.isAfter(date, 'day');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_day_view_day_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: timestamp,
          timestamp: timestamp,
          day: label,
          event: _this4.state.eventsByDay[timestamp],
          isNextMonth: true,
          isSelectable: !isNotSelectable,
          onChangeSelectedTimestamp: _this4.props.onChangeSelectedTimestamp
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-month-view"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-month-view__headers"
      }, this.renderHeaders()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-month-view__days"
      }, this.renderDaysBeforeMonth(), this.renderDaysOfMonth(), this.renderDaysAfterMonth()));
    }
  }]);

  return MonthView;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

MonthView.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onChangeSelectedTimestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  month: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  displayedDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date).isRequired,
  selectedDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MonthView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/slider/slider.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/slider/slider.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _thumb_thumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../thumb/thumb */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/thumb/thumb.js");
/* harmony import */ var _event_marker_event_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-marker/event.marker */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var MINUTES_IN_HOUR = 60;
var MINUTES_IN_DAY = MINUTES_IN_HOUR * 24;

var Slider = /*#__PURE__*/function (_Component) {
  _inherits(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);
    _this._refSlider = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.renderMarker = _this.renderMarker.bind(_assertThisInitialized(_this));
    _this.setTime = _this.setTime.bind(_assertThisInitialized(_this));
    _this.groupEventsByDate = _this.groupEventsByDate.bind(_assertThisInitialized(_this));
    _this.updateSliderRect = _this.updateSliderRect.bind(_assertThisInitialized(_this));

    var eventsToDisplay = _this.filterEvents(props.events, props.selectedTimestamp);

    _this.state = {
      sliderRect: {},
      eventsToDisplay: eventsToDisplay,
      selectedTimestamp: props.selectedTimestamp
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSliderRect();
      window.addEventListener('resize', this.updateSliderRect, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateSliderRect);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var _this$props = this.props,
          selectedTimestamp = _this$props.selectedTimestamp,
          events = _this$props.events;
      var areSameEvents = events.every(function (event, index) {
        return prevProps.events[index] && prevProps.events[index].date === event.date;
      });

      if (prevProps.selectedTimestamp === selectedTimestamp && areSameEvents) {
        return;
      }

      var eventsToDisplay = this.filterEvents(events, selectedTimestamp);
      this.setState(function () {
        return {
          selectedTimestamp: _this2.props.selectedTimestamp,
          eventsToDisplay: eventsToDisplay
        };
      });
    }
  }, {
    key: "updateSliderRect",
    value: function updateSliderRect() {
      var _this3 = this;

      this.setState(function () {
        return {
          sliderRect: _this3._refSlider.current.getBoundingClientRect()
        };
      });
    }
  }, {
    key: "groupEventsByDate",
    value: function groupEventsByDate(now, total, event) {
      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var eventDate = convertDateToTimezone(event.date * 1000, undefined, true);
      var isSameDate = eventDate.isSame(now, 'day');
      var timestamp = new Date(eventDate.year(), eventDate.month(), eventDate.date(), eventDate.hour(), eventDate.minute() + 1).getTime();

      if (!isSameDate) {
        return total;
      }

      if (total[timestamp]) {
        total[timestamp] = {
          descriptions: [].concat(_toConsumableArray(total[timestamp].descriptions), [event.description])
        };
      } else {
        total[timestamp] = {
          icon: event.icon,
          type: event.type,
          descriptions: [event.description]
        };
      }

      return total;
    }
  }, {
    key: "filterEvents",
    value: function filterEvents(events, selectedTimestamp) {
      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var now = convertDateToTimezone(selectedTimestamp);
      var groupedEvents = events.reduce(this.groupEventsByDate.bind(this, now), {});
      return groupedEvents;
    }
  }, {
    key: "setTime",
    value: function setTime(selectedTimestamp) {
      this.props.onSelectedTimestampChange(selectedTimestamp);
    }
  }, {
    key: "renderMarker",
    value: function renderMarker(_ref, index) {
      var _ref2 = _slicedToArray(_ref, 2),
          timestamp = _ref2[0],
          event = _ref2[1];

      var date = window.moment(parseInt(timestamp, 10));
      var minutesCount = date.hour() * MINUTES_IN_HOUR + date.minutes();
      var leftPosition = minutesCount * 100 / MINUTES_IN_DAY;
      var key = "".concat(index, "-").concat(timestamp);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_marker_event_marker__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: key,
        timestamp: timestamp,
        event: event,
        onSetTime: this.setTime,
        leftPosition: leftPosition
      });
    }
  }, {
    key: "renderHours",
    value: function renderHours() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hours"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "12:00 AM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "3:00 AM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "6:00 AM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "9:00 AM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "12:00 PM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "3:00 PM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "6:00 PM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "9:00 PM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "11:59 PM"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          eventsToDisplay = _this$state.eventsToDisplay,
          selectedTimestamp = _this$state.selectedTimestamp;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider",
        ref: this._refSlider
      }, this.renderHours(), Object.entries(eventsToDisplay).map(this.renderMarker), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_thumb_thumb__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sliderRect: this.state.sliderRect,
        selectedTimestamp: selectedTimestamp,
        onSetTime: this.setTime
      }));
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Slider.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onEventSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSelectedTimestampChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectedTimestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/thumb/thumb.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/thumb/thumb.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var KEYCODE_RIGHT_BTN = 3;
var MINUTES_IN_HOUR = 60;
var MINUTES_IN_DAY = MINUTES_IN_HOUR * 24;

var Thumb = /*#__PURE__*/function (_Component) {
  _inherits(Thumb, _Component);

  var _super = _createSuper(Thumb);

  function Thumb(props) {
    var _this;

    _classCallCheck(this, Thumb);

    _this = _super.call(this, props);
    _this.attachMouseMoveEvent = _this.attachMouseMoveEvent.bind(_assertThisInitialized(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_this));
    _this.removeListeners = _this.removeListeners.bind(_assertThisInitialized(_this));
    _this.onTimeChangeTimeout = null;
    _this.backdrop = null;

    var leftPosition = _this.calculateLeftPosition(props.selectedTimestamp);

    _this.state = {
      leftPosition: leftPosition
    };
    return _this;
  }

  _createClass(Thumb, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.selectedTimestamp === this.props.selectedTimestamp) {
        return;
      }

      var leftPosition = this.calculateLeftPosition(this.props.selectedTimestamp);
      this.setState(function () {
        return {
          leftPosition: leftPosition
        };
      });
    }
  }, {
    key: "calculateLeftPosition",
    value: function calculateLeftPosition(timestamp) {
      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var date = convertDateToTimezone(parseInt(timestamp, 10));
      var minutesCount = date.hour() * MINUTES_IN_HOUR + date.minutes();
      return minutesCount * 100 / MINUTES_IN_DAY;
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      document.body.removeEventListener('mousemove', this.handleMouseMove);
      document.body.removeEventListener('mouseup', this.removeListeners);
      this.removeBackdrop();
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      var sliderRect = this.props.sliderRect;
      var isMovedOutside = event.clientX > sliderRect.right || event.clientX < sliderRect.left;

      if (isMovedOutside) {
        return;
      }

      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var diff = event.clientX - sliderRect.left;
      var leftPosition = diff / sliderRect.width * 100;
      var minutesCount = MINUTES_IN_DAY * leftPosition / 100;
      var hour = Math.floor(minutesCount / MINUTES_IN_HOUR);
      var minutes = Math.floor(minutesCount % MINUTES_IN_HOUR);
      var date = convertDateToTimezone(parseInt(this.props.selectedTimestamp, 10));
      date.hour(hour);
      date.minutes(minutes);
      window.clearTimeout(this.onTimeChangeTimeout);
      this.onTimeChangeTimeout = window.setTimeout(this.setTime.bind(this, date.valueOf()), 300);
      this.setState(function () {
        return {
          leftPosition: leftPosition
        };
      });
    }
  }, {
    key: "setTime",
    value: function setTime(timestamp) {
      this.props.onSetTime(timestamp);
    }
  }, {
    key: "attachMouseMoveEvent",
    value: function attachMouseMoveEvent(_ref) {
      var nativeEvent = _ref.nativeEvent;
      var keyCode = nativeEvent.keyCode || nativeEvent.which;

      if (keyCode === KEYCODE_RIGHT_BTN) {
        return;
      }

      this.addBackdrop();
      document.body.addEventListener('mousemove', this.handleMouseMove, false);
      document.body.addEventListener('mouseup', this.removeListeners, false);
    }
  }, {
    key: "addBackdrop",
    value: function addBackdrop() {
      this.backdrop = document.createElement('div');
      this.backdrop.classList.add('ez-backdrop');
      document.body.appendChild(this.backdrop);
    }
  }, {
    key: "removeBackdrop",
    value: function removeBackdrop() {
      document.body.removeChild(this.backdrop);
      this.backdrop = null;
    }
  }, {
    key: "render",
    value: function render() {
      var leftPosition = this.state.leftPosition;
      var style = {
        left: "".concat(leftPosition, "%")
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-thumb",
        onMouseDown: this.attachMouseMoveEvent,
        style: style
      });
    }
  }]);

  return Thumb;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Thumb.propTypes = {
  sliderRect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  selectedTimestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onSetTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Thumb);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-toggler/timeline.toggler.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-toggler/timeline.toggler.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");


var CLASS_TIMELINE_VISIBLE = 'ez-timeline-visible';

var toggleTimeline = function toggleTimeline() {
  document.body.classList.toggle(CLASS_TIMELINE_VISIBLE);
  window.eZ.helpers.tooltips.hideAll();
};

var TimelineToggler = function TimelineToggler() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "c-timeline-toggler",
    onClick: toggleTimeline
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "timeline",
    extraClasses: "ez-icon--small-medium"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TimelineToggler);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/timeline.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/timeline.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/calendar/calendar */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar/calendar.js");
/* harmony import */ var _components_all_events_view_all_events_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/all-events-view/all.events.view */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/all-events-view/all.events.view.js");
/* harmony import */ var _components_slider_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/slider/slider */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/slider/slider.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Timeline = /*#__PURE__*/function (_PureComponent) {
  _inherits(Timeline, _PureComponent);

  var _super = _createSuper(Timeline);

  function Timeline() {
    _classCallCheck(this, Timeline);

    return _super.apply(this, arguments);
  }

  _createClass(Timeline, [{
    key: "render",
    value: function render() {
      var selectedTimestamp = this.props.selectedTimestamp;
      var formatFullDateTime = window.eZ.helpers.timezone.formatFullDateTime;
      var formatedSelectedDate = formatFullDateTime(selectedTimestamp);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-timeline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-timeline__calendar-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__["default"], this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-timeline__selected-datetime-wrapper"
      }, formatedSelectedDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-timeline__slider-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_slider_slider__WEBPACK_IMPORTED_MODULE_4__["default"], this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-timeline__list-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_all_events_view_all_events_view__WEBPACK_IMPORTED_MODULE_3__["default"], this.props)));
    }
  }]);

  return Timeline;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

Timeline.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onSelectedTimestampChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-segmentation/src/bundle/ui-dev/src/modules/page.builder.update.preview.request.params.js":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-segmentation/src/bundle/ui-dev/src/modules/page.builder.update.preview.request.params.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
var _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var UpdatePreviewRequestParams = function UpdatePreviewRequestParams(_ref) {
  var updatePreviewRequestParams = _ref.updatePreviewRequestParams,
      blockPreviewPagePreviewRequestParams = _ref.blockPreviewPagePreviewRequestParams;
  var segmentationsListNode = document.querySelector('.ez-segmentation-list');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      segmentsListVisible = _useState2[0],
      setSegmentsListVisible = _useState2[1];

  var segmentationsList = JSON.parse(segmentationsListNode.dataset.segments);

  var toggleListVisibility = function toggleListVisibility() {
    setSegmentsListVisible(!segmentsListVisible);
  };

  var clickOutsideHandler = function clickOutsideHandler(event) {
    var clickedOutside = !event.target.closest('.ez-segmentation-list');

    if (clickedOutside) {
      setSegmentsListVisible(false);
    }
  };

  var handleSegmentSelect = function handleSegmentSelect(segmentId) {
    var requestParams = _objectSpread({}, blockPreviewPagePreviewRequestParams);

    if (segmentId) {
      requestParams.segmentId = segmentId;
    } else {
      delete requestParams.segmentId;
    }

    updatePreviewRequestParams(requestParams);
  };

  var removeBackdrop = function removeBackdrop() {
    var subMenuBackdrop = window.document.querySelector('.ez-backdrop');

    if (subMenuBackdrop) {
      subMenuBackdrop.remove();
    }
  };

  var renderSegmentationList = function renderSegmentationList() {
    var togglerClassName = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__["createCssClassNames"])({
      'c-update-preview-request-params__list-toggler': true,
      'c-update-preview-request-params__list-toggler--selected': segmentsListVisible
    });
    var listClassName = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__["createCssClassNames"])({
      'c-update-preview-request-params__segments-list': true,
      'c-update-preview-request-params__segments-list--hidden': !segmentsListVisible
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-update-preview-request-params"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: togglerClassName,
      onClick: toggleListVisibility
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "profile",
      extraClasses: "ez-icon--small-medium"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: listClassName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "c-update-preview-request-params__segments-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      name: "segment",
      className: "ez-input ez-input--radio",
      onChange: handleSegmentSelect.bind(_this, null),
      defaultChecked: true
    }), "None"), segmentationsList.map(function (segmentationGroup) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-update-preview-request-params__segments-group",
        key: segmentationGroup.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-update-preview-request-params__segments-group-name"
      }, segmentationGroup.name), segmentationGroup.segments.map(function (segment) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "c-update-preview-request-params__segments-item",
          key: segment.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "radio",
          name: "segment",
          className: "ez-input ez-input--radio",
          onChange: handleSegmentSelect.bind(null, segment.id)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, segment.name));
      }));
    })));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (segmentsListVisible) {
      var subMenuBackdrop = window.document.createElement('div');
      subMenuBackdrop.classList.add('ez-backdrop');
      window.document.body.addEventListener('click', clickOutsideHandler, false);
      window.document.body.appendChild(subMenuBackdrop);
    } else {
      window.document.body.removeEventListener('click', clickOutsideHandler, false);
      removeBackdrop();
    }

    return function () {
      window.document.body.removeEventListener('click', clickOutsideHandler, false);
      removeBackdrop();
    };
  }, [segmentsListVisible]);
  return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(renderSegmentationList(), segmentationsListNode);
};

UpdatePreviewRequestParams.propTypes = {
  updatePreviewRequestParams: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  blockPreviewPagePreviewRequestParams: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UpdatePreviewRequestParams);
window.eZ.addConfig('pageBuilder.components.updatePreviewRequestParams', [UpdatePreviewRequestParams], true);

/***/ }),

/***/ 100:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page.builder.module.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/fieldType/ezlandingpage.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.publish.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.right.sidebar.toggler.js ./vendor/ezsystems/ezplatform-segmentation/src/bundle/ui-dev/src/modules/page.builder.update.preview.request.params.js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page.builder.module.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page.builder.module.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/fieldType/ezlandingpage.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/fieldType/ezlandingpage.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.publish.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.publish.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.right.sidebar.toggler.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.right.sidebar.toggler.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-segmentation/src/bundle/ui-dev/src/modules/page.builder.update.preview.request.params.js */"./vendor/ezsystems/ezplatform-segmentation/src/bundle/ui-dev/src/modules/page.builder.update.preview.request.params.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

},[[100,"runtime"]]]);