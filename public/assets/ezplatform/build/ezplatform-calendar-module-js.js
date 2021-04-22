(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-calendar-module-js"],{

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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js ***!
  \*************************************************************************************************************/
/*! exports provided: getBasicRequestInit, handleRequestError, handleRequestResponse, handleRequestResponseStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasicRequestInit", function() { return getBasicRequestInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRequestError", function() { return handleRequestError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRequestResponse", function() { return handleRequestResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRequestResponseStatus", function() { return handleRequestResponseStatus; });
/**
 * Returns basic RequestInit object for Request
 *
 * @function getBasicRequestInit
 * @param {Object} restInfo REST config hash containing: token and siteaccess properties
 * @returns {RequestInit}
 */
var getBasicRequestInit = function getBasicRequestInit(_ref) {
  var token = _ref.token,
      siteaccess = _ref.siteaccess;
  return {
    headers: {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  };
};
/**
 * Handles request error
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {Response}
 */

var handleRequestError = function handleRequestError(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
};
/**
 * Handles request response
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {Error|Promise}
 */

var handleRequestResponse = function handleRequestResponse(response) {
  return handleRequestError(response).json();
};
/**
 * Handles request response; returns status if response is OK
 *
 * @function handleRequestResponseStatus
 * @param {Response} response
 * @returns {number}
 */

var handleRequestResponseStatus = function handleRequestResponseStatus(response) {
  return handleRequestError(response).status;
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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js ***!
  \************************************************************************************************************/
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
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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
var MODAL_SIZE_CLASS = {
  small: 'modal-sm',
  medium: '',
  large: 'modal-lg'
};

var Popup = /*#__PURE__*/function (_Component) {
  _inherits(Popup, _Component);

  var _super = _createSuper(Popup);

  function Popup(props) {
    var _this;

    _classCallCheck(this, Popup);

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

  _createClass(Popup, [{
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
    key: "renderHeader",
    value: function renderHeader() {
      var closeBtnLabel = Translator.trans(
      /*@Desc("Close")*/
      'popup.close.label', {}, 'universal_discovery_widget');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'modal-header c-popup__header'
      }, this.renderHeadline(), this.renderCloseButton());
    }
  }, {
    key: "renderCloseButton",
    value: function renderCloseButton() {
      var closeBtnLabel = Translator.trans(
      /*@Desc("Close")*/
      'popup.close.label', {}, 'universal_discovery_widget');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "close c-popup__btn--close",
        "data-dismiss": "modal",
        "aria-label": closeBtnLabel,
        onClick: this.props.onClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "discard",
        extraClasses: "ez-icon--small"
      }));
    }
  }, {
    key: "renderHeadline",
    value: function renderHeadline() {
      var title = this.props.title;

      if (!title) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "modal-title c-popup__headline",
        title: this.props.title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "c-popup__title"
      }, this.props.title), this.renderSubtitle());
    }
  }, {
    key: "renderSubtitle",
    value: function renderSubtitle() {
      var subtitle = this.props.subtitle;

      if (!subtitle) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "c-popup__subtitle"
      }, subtitle);
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var footerChildren = this.props.footerChildren;

      if (!footerChildren) {
        return;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'modal-footer c-popup__footer'
      }, footerChildren);
    }
  }, {
    key: "render",
    value: function render() {
      var isVisible = this.state.isVisible;
      var _this$props = this.props,
          additionalClasses = _this$props.additionalClasses,
          size = _this$props.size,
          noHeader = _this$props.noHeader;
      var modalAttrs = {
        className: 'c-popup modal fade',
        ref: this.setModalRef,
        tabIndex: this.props.hasFocus ? -1 : undefined
      };
      document.body.classList.toggle(CLASS_MODAL_OPEN, isVisible);
      document.body.classList.toggle(CLASS_NON_SCROLLABLE, isVisible);

      if (additionalClasses) {
        modalAttrs.className = "".concat(modalAttrs.className, " ").concat(additionalClasses);
      }

      if (noHeader) {
        modalAttrs.className = "".concat(modalAttrs.className, " c-popup--no-header");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", modalAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-dialog c-popup__dialog ".concat(MODAL_SIZE_CLASS[size]),
        role: "dialog"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-content c-popup__content"
      }, noHeader ? this.renderCloseButton() : this.renderHeader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-body c-popup__body"
      }, this.props.children), this.renderFooter())));
    }
  }]);

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Popup.propTypes = {
  isVisible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onConfigIframeLoad: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  hasFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  additionalClasses: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  footerChildren: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  noHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
Popup.defaultProps = {
  isVisible: false,
  isLoading: true,
  hasFocus: true,
  size: 'large',
  noHeader: false,
  onConfigIframeLoad: function onConfigIframeLoad() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js ***!
  \***********************************************************************************************/
/*! exports provided: MODULE_VIEWS, SelectedDateContext, RestInfoContext, EventsSelectionContext, EventsConfigContext, CalendarFiltersContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_VIEWS", function() { return MODULE_VIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedDateContext", function() { return SelectedDateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestInfoContext", function() { return RestInfoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsSelectionContext", function() { return EventsSelectionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsConfigContext", function() { return EventsConfigContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarFiltersContext", function() { return CalendarFiltersContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _calendar_components_calendar_header_calendar_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar/components/calendar-header/calendar.header */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-header/calendar.header.js");
/* harmony import */ var _calendar_components_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar/components/calendar-view/calendar.view */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view/calendar.view.js");
/* harmony import */ var _calendar_components_list_view_list_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar/components/list-view/list.view */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/list-view/list.view.js");
/* harmony import */ var _calendar_components_selection_sidebar_selection_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar/components/selection-sidebar/selection.sidebar */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/selection-sidebar/selection.sidebar.js");
/* harmony import */ var _calendar_components_selection_confirmation_popup_selection_confirmation_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar/components/selection-confirmation-popup/selection.confirmation.popup */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/selection-confirmation-popup/selection.confirmation.popup.js");
/* harmony import */ var _calendar_hooks_useSelectionReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar/hooks/useSelectionReducer */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useSelectionReducer.js");
/* harmony import */ var _calendar_hooks_useFiltersReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar/hooks/useFiltersReducer */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useFiltersReducer.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
var MODULE_VIEWS = {
  CALENDAR: 'CALENDAR',
  LIST: 'LIST'
};
var SelectedDateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
var RestInfoContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
var EventsSelectionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
var EventsConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
var CalendarFiltersContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

var CalendarModule = function CalendarModule(_ref) {
  var restInfo = _ref.restInfo,
      eventsConfig = _ref.eventsConfig;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(convertDateToTimezone()),
      _useState2 = _slicedToArray(_useState, 2),
      selectedDate = _useState2[0],
      setSelectedDate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(MODULE_VIEWS.CALENDAR),
      _useState4 = _slicedToArray(_useState3, 2),
      currentView = _useState4[0],
      setCurrentView = _useState4[1];

  var _useSelectionReducer = Object(_calendar_hooks_useSelectionReducer__WEBPACK_IMPORTED_MODULE_8__["useSelectionReducer"])(),
      _useSelectionReducer2 = _slicedToArray(_useSelectionReducer, 2),
      eventsSelection = _useSelectionReducer2[0],
      dispatchSelectEventAction = _useSelectionReducer2[1];

  var _useFiltersReducer = Object(_calendar_hooks_useFiltersReducer__WEBPACK_IMPORTED_MODULE_9__["useFiltersReducer"])(eventsConfig),
      _useFiltersReducer2 = _slicedToArray(_useFiltersReducer, 2),
      calendarFilters = _useFiltersReducer2[0],
      dispatchCalendarFiltersAction = _useFiltersReducer2[1];

  var isSidebarVisible = currentView === MODULE_VIEWS.CALENDAR;
  var view = null;

  switch (currentView) {
    case MODULE_VIEWS.CALENDAR:
      view = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calendar_components_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_4__["default"], null);
      break;

    case MODULE_VIEWS.LIST:
      view = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calendar_components_list_view_list_view__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RestInfoContext.Provider, {
    value: restInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventsSelectionContext.Provider, {
    value: [eventsSelection, dispatchSelectEventAction]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalendarFiltersContext.Provider, {
    value: [calendarFilters, dispatchCalendarFiltersAction]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventsConfigContext.Provider, {
    value: eventsConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-calendar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-calendar__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calendar_components_calendar_header_calendar_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentView: currentView,
    setCurrentView: setCurrentView
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectedDateContext.Provider, {
    value: [selectedDate, setSelectedDate]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-calendar__view"
  }, view)), /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calendar_components_selection_sidebar_selection_sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isVisible: isSidebarVisible
  }), document.querySelector('.ez-calendar-sidebar-container__wrapper')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calendar_components_selection_confirmation_popup_selection_confirmation_popup__WEBPACK_IMPORTED_MODULE_7__["default"], null))))));
};

CalendarModule.propTypes = {
  restInfo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    token: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    siteaccess: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired,
  eventsConfig: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
CalendarModule.defaultProps = {};
eZ.addConfig('modules.Calendar', CalendarModule);
/* harmony default export */ __webpack_exports__["default"] = (CalendarModule);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-filters/calendar.filters.js":
/*!*************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-filters/calendar.filters.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _hooks_useFiltersReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useFiltersReducer */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useFiltersReducer.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var CalendarFilters = function CalendarFilters() {
  var eventsConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_2__["EventsConfigContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_2__["CalendarFiltersContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      calendarFilters = _useContext2[0],
      dispatchCalendarFiltersAction = _useContext2[1];

  var typesLabel = Translator.trans(
  /*@Desc("Types")*/
  'calendar.filters.types', {}, 'calendar_widget');
  var modifiedLanguageLabel = Translator.trans(
  /*@Desc("Modified language")*/
  'calendar.filters.modified_langauge', {}, 'calendar_widget');

  var renderTypesFilters = function renderTypesFilters() {
    return Object.entries(eventsConfig).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          eventType = _ref2[0],
          _ref2$ = _ref2[1],
          label = _ref2$.label,
          color = _ref2$.color;

      var isChecked = calendarFilters.eventTypes[eventType];

      var toggleEventTypeFilter = function toggleEventTypeFilter() {
        dispatchCalendarFiltersAction({
          type: _hooks_useFiltersReducer__WEBPACK_IMPORTED_MODULE_3__["TOGGLE_EVENT_TYPE"],
          eventType: eventType
        });
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: eventType,
        className: "c-calendar-filters__type",
        onClick: toggleEventTypeFilter
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-check form-check-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "ez-input ez-input--checkbox",
        type: "checkbox",
        checked: isChecked,
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "c-calendar-filters__type-label form-check-label"
      }, label)));
    });
  };

  var renderLanguagesFilter = function renderLanguagesFilter() {
    var languagesMappings = eZ.adminUiConfig.languages.mappings;
    var allLanguagesLabel = Translator.trans(
    /*@Desc("All languages")*/
    'calendar.filters.all_langauges', {}, 'calendar_widget');

    var handleLanguageChange = function handleLanguageChange(event) {
      dispatchCalendarFiltersAction({
        type: _hooks_useFiltersReducer__WEBPACK_IMPORTED_MODULE_3__["SELECT_LANGUAGE"],
        language: event.target.value
      });
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: "form-control",
      value: calendarFilters.language,
      onChange: handleLanguageChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: ""
    }, allLanguagesLabel), Object.values(languagesMappings).map(function (_ref3) {
      var languageCode = _ref3.languageCode,
          name = _ref3.name;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: languageCode,
        value: languageCode
      }, name);
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-filters__types"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-calendar-filters__filter-label"
  }, typesLabel, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "c-calendar-filters__types-list"
  }, renderTypesFilters())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-filters__languages"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-calendar-filters__filter-label"
  }, modifiedLanguageLabel, ":"), renderLanguagesFilter()));
};

CalendarFilters.propTypes = {
  event: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
CalendarFilters.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (CalendarFilters);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-header/calendar.header.js":
/*!***********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-header/calendar.header.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _view_toggler_view_toggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-toggler/view.toggler */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/view-toggler/view.toggler.js");
/* harmony import */ var _events_actions_events_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events-actions/events.actions */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-actions/events.actions.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");






var CalendarHeader = function CalendarHeader(_ref) {
  var currentView = _ref.currentView,
      setCurrentView = _ref.setCurrentView;
  var areEventsActionsVisible = currentView === _calendar_module__WEBPACK_IMPORTED_MODULE_4__["MODULE_VIEWS"].LIST;
  var headline = Translator.trans(
  /*@Desc("Scheduled content")*/
  'calendar.headline', {}, 'calendar_widget');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-header__title"
  }, headline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-header__btns"
  }, areEventsActionsVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_actions_events_actions__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view_toggler_view_toggler__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentView: currentView,
    setCurrentView: setCurrentView
  })));
};

CalendarHeader.propTypes = {
  currentView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setCurrentView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarHeader);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view-switcher/calendar.view.switcher.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view-switcher/calendar.view.switcher.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calendar-view/calendar.view */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view/calendar.view.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var CalendarViewSwitcher = function CalendarViewSwitcher() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_1__["CurrentCalendarViewContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      currentCalendarView = _useContext2[0],
      setCurrentCalendarView = _useContext2[1];

  var handleViewChange = function handleViewChange(event) {
    setCurrentCalendarView(event.currentTarget.value);
  };

  var monthLabel = Translator.trans(
  /*@Desc("Month")*/
  'calendar.view_switcher.month', {}, 'calendar_widget');
  var weekLabel = Translator.trans(
  /*@Desc("Week")*/
  'calendar.view_switcher.week', {}, 'calendar_widget');
  var dayLabel = Translator.trans(
  /*@Desc("Day")*/
  'calendar.view_switcher.day', {}, 'calendar_widget');
  var monthTooltipLabel = Translator.trans(
  /*@Desc("Month view")*/
  'calendar.tooltips.month', {}, 'calendar_widget');
  var weekTooltipLabel = Translator.trans(
  /*@Desc("Week view")*/
  'calendar.tooltips.week', {}, 'calendar_widget');
  var dayTooltipLabel = Translator.trans(
  /*@Desc("Day view")*/
  'calendar.tooltips.day', {}, 'calendar_widget');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.eZ.helpers.tooltips.hideAll();
  }, [currentCalendarView]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-view-switcher"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "calendar-month-view-switcher",
    type: "radio",
    name: "view-type",
    value: _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_VIEWS"].MONTH,
    onChange: handleViewChange,
    checked: currentCalendarView === _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_VIEWS"].MONTH,
    className: "c-calendar-view-switcher__radio-input"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "calendar-month-view-switcher",
    className: "c-calendar-view-switcher__option",
    title: monthTooltipLabel
  }, monthLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "calendar-week-view-switcher",
    type: "radio",
    name: "view-type",
    value: _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_VIEWS"].WEEK,
    onChange: handleViewChange,
    checked: currentCalendarView === _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_VIEWS"].WEEK,
    className: "c-calendar-view-switcher__radio-input"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "calendar-week-view-switcher",
    className: "c-calendar-view-switcher__option",
    title: weekTooltipLabel
  }, weekLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "calendar-day-view-switcher",
    type: "radio",
    name: "view-type",
    value: _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_VIEWS"].DAY,
    onChange: handleViewChange,
    checked: currentCalendarView === _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_VIEWS"].DAY,
    className: "c-calendar-view-switcher__radio-input"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "calendar-day-view-switcher",
    className: "c-calendar-view-switcher__option",
    title: dayTooltipLabel
  }, dayLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "c-calendar-view-switcher__select-slider"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CalendarViewSwitcher);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view/calendar.view.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view/calendar.view.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: CALENDAR_VIEWS, CurrentCalendarViewContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_VIEWS", function() { return CALENDAR_VIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentCalendarViewContext", function() { return CurrentCalendarViewContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _date_paginator_date_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-paginator/date.paginator */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/date-paginator/date.paginator.js");
/* harmony import */ var _month_view_month_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../month-view/month.view */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/month-view/month.view.js");
/* harmony import */ var _week_view_week_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../week-view/week.view */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/week-view/week.view.js");
/* harmony import */ var _day_view_day_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../day-view/day.view */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/day-view/day.view.js");
/* harmony import */ var _top_bar_top_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../top-bar/top.bar */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/top-bar/top.bar.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var CALENDAR_VIEWS = {
  MONTH: 'MONTH',
  WEEK: 'WEEK',
  DAY: 'DAY'
};
var CurrentCalendarViewContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

var CalendarView = function CalendarView() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(CALENDAR_VIEWS.MONTH),
      _useState2 = _slicedToArray(_useState, 2),
      currentCalendarView = _useState2[0],
      setCurrentCalendarView = _useState2[1];

  var paginatorType = currentCalendarView === CALENDAR_VIEWS.WEEK ? _date_paginator_date_paginator__WEBPACK_IMPORTED_MODULE_1__["DATE_PAGINATOR_TYPE"].WEEK : _date_paginator_date_paginator__WEBPACK_IMPORTED_MODULE_1__["DATE_PAGINATOR_TYPE"].MONTH;
  var calendar = null;

  switch (currentCalendarView) {
    case CALENDAR_VIEWS.MONTH:
      calendar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_month_view_month_view__WEBPACK_IMPORTED_MODULE_2__["default"], null);
      break;

    case CALENDAR_VIEWS.WEEK:
      calendar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_week_view_week_view__WEBPACK_IMPORTED_MODULE_3__["default"], null);
      break;

    case CALENDAR_VIEWS.DAY:
      calendar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_day_view_day_view__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CurrentCalendarViewContext.Provider, {
    value: [currentCalendarView, setCurrentCalendarView]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_top_bar_top_bar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isCalendarViewSwitcherVisible: true,
    paginatorType: paginatorType
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-view__view-wrapper"
  }, calendar)));
};

/* harmony default export */ __webpack_exports__["default"] = (CalendarView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/date-paginator/date.paginator.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/date-paginator/date.paginator.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: DATE_PAGINATOR_TYPE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_PAGINATOR_TYPE", function() { return DATE_PAGINATOR_TYPE; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/date.helper */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.helper.js");
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
var DATE_PAGINATOR_TYPE = {
  MONTH: 'MONTH',
  WEEK: 'WEEK'
};

var DatePaginator = function DatePaginator(_ref) {
  var type = _ref.type;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_4__["SelectedDateContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedDate = _useContext2[0],
      setSelectedDate = _useContext2[1];

  var yearString = selectedDate.format('YYYY');
  var monthName = null;
  var daysString = null;
  var previousDate = null;
  var nextDate = null;

  var selectPreviousDate = function selectPreviousDate() {
    if (previousDate) {
      setSelectedDate(previousDate);
    }
  };

  var selectNextDate = function selectNextDate() {
    return setSelectedDate(nextDate);
  };

  var todayLabel = Translator.trans(
  /*@Desc("Today")*/
  'calendar.date_paginator.today', {}, 'calendar_widget');
  var backwardTooltipLabel = Translator.trans(
  /*@Desc("Backward")*/
  'calendar.tooltips.backward', {}, 'calendar_widget');
  var forwardTooltipLabel = Translator.trans(
  /*@Desc("Forward")*/
  'calendar.tooltips.forward', {}, 'calendar_widget');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.eZ.helpers.tooltips.parse();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.eZ.helpers.tooltips.hideAll();
  }, [selectedDate]);

  switch (type) {
    case DATE_PAGINATOR_TYPE.WEEK:
      {
        var firstDayOfWeek = selectedDate.clone().startOf('week');
        var lastDayOfWeek = selectedDate.clone().endOf('week');
        var isWeekAcrossTwoMonths = firstDayOfWeek.get('month') !== lastDayOfWeek.get('month');
        previousDate = Object(_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__["getPreviousWeekDate"])(selectedDate);
        nextDate = Object(_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__["getNextWeekDate"])(selectedDate);
        daysString = isWeekAcrossTwoMonths ? '' : "".concat(firstDayOfWeek.format('D'), "-").concat(lastDayOfWeek.format('D'));
        monthName = isWeekAcrossTwoMonths ? "".concat(Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__["getMonthShortName"])(firstDayOfWeek), "-").concat(Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__["getMonthShortName"])(lastDayOfWeek)) : Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__["getMonthName"])(firstDayOfWeek);
        break;
      }

    case DATE_PAGINATOR_TYPE.MONTH:
      {
        previousDate = Object(_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__["getPreviousMonthDate"])(selectedDate);
        nextDate = Object(_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__["getNextMonthDate"])(selectedDate);
        daysString = '';
        monthName = Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__["getMonthName"])(selectedDate);
        break;
      }

    default:
      throw new Error();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-date-paginator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-secondary c-date-paginator__btn c-date-paginator__btn--today",
    onClick: function onClick() {
      return setSelectedDate(convertDateToTimezone());
    }
  }, todayLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    disabled: previousDate === null,
    className: "ez-btn ez-btn--base-dark c-date-paginator__btn c-date-paginator__btn--decrease",
    onClick: selectPreviousDate,
    title: backwardTooltipLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "caret-back",
    extraClasses: "ez-icon--small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "ez-btn ez-btn--base-dark c-date-paginator__btn c-date-paginator__btn--increase",
    onClick: selectNextDate,
    title: forwardTooltipLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "caret-next",
    extraClasses: "ez-icon--small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-date-paginator__date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-date-paginator__date-main"
  }, "".concat(monthName, " ").concat(daysString, " ")), yearString));
};

DatePaginator.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DatePaginator);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/day-view/day.view.day.picker.js":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/day-view/day.view.day.picker.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/date.helper */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.helper.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;

var DayViewDayPicker = function DayViewDayPicker() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_3__["SelectedDateContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedDate = _useContext2[0],
      setSelectedDate = _useContext2[1];

  var _getMonthDays = Object(_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__["getMonthDays"])(selectedDate),
      daysBefore = _getMonthDays.daysBefore,
      days = _getMonthDays.days,
      daysAfter = _getMonthDays.daysAfter;

  var renderDayBefore = function renderDayBefore(day) {
    var className = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__["createCssClassNames"])({
      'c-day-view-day-picker__day': true,
      'c-day-view-day-picker__day--disabled': true,
      'c-day-view-day-picker__day--past': day.isBefore(convertDateToTimezone(), 'day')
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className,
      key: day.unix()
    }, day.format('D'));
  };

  var renderMonthDay = function renderMonthDay(day) {
    var isCurrentDay = day.isSame(selectedDate, 'day');
    var isPast = day.isBefore(convertDateToTimezone(), 'day');
    var isSelectable = !isCurrentDay && !isPast;
    var className = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__["createCssClassNames"])({
      'c-day-view-day-picker__day': true,
      'c-day-view-day-picker__day--selected': isCurrentDay,
      'c-day-view-day-picker__day--past': isPast,
      'c-day-view-day-picker__day--selectable': isSelectable
    });
    var handleClick = isSelectable ? function () {
      return setSelectedDate(day);
    } : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className,
      key: day.unix(),
      onClick: handleClick
    }, day.format('D'));
  };

  var renderDayAfter = function renderDayAfter(day) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-day-view-day-picker__day c-day-view-day-picker__day--disabled",
      key: day.unix()
    }, day.format('D'));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-day-view-day-picker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-day-view-day-picker__week-days"
  }, Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__["getWeekdaysShortNames"])().map(function (dayName) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: dayName,
      className: "c-day-view-day-picker__day-name"
    }, dayName);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-day-view-day-picker__days"
  }, daysBefore.map(renderDayBefore), days.map(renderMonthDay), daysAfter.map(renderDayAfter)));
};

/* harmony default export */ __webpack_exports__["default"] = (DayViewDayPicker);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/day-view/day.view.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/day-view/day.view.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _hooks_useEventsLoadMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useEventsLoadMore */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsLoadMore.js");
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");
/* harmony import */ var _day_view_day_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./day.view.day.picker */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/day-view/day.view.day.picker.js");
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spinner/spinner */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/spinner/spinner.js");
/* harmony import */ var _events_view_events_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../events-view/events.view */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.js");
/* harmony import */ var _load_more_bnt_load_more_btn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../load-more-bnt/load.more.btn */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/load-more-bnt/load.more.btn.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;

var DayView = function DayView() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_2__["SelectedDateContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedDate = _useContext2[0],
      setSelectedDate = _useContext2[1];

  var userTimezoneCurrentTime = convertDateToTimezone();
  var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var currentDateInBrowserTimezone = new Date(convertDateToTimezone(userTimezoneCurrentTime, browserTimezone, true));
  var fromDate = selectedDate.clone().startOf('day');
  var toDate = selectedDate.clone().endOf('day');
  var day = selectedDate.clone().startOf('day');
  var dayLastHour = convertDateToTimezone().endOf('day');
  var dayHours = [];

  var _useEventsLoadMore = Object(_hooks_useEventsLoadMore__WEBPACK_IMPORTED_MODULE_3__["useEventsLoadMore"])(fromDate, toDate, 'hour'),
      _useEventsLoadMore2 = _slicedToArray(_useEventsLoadMore, 4),
      events = _useEventsLoadMore2[0],
      isLoading = _useEventsLoadMore2[1],
      remainingEventsCount = _useEventsLoadMore2[2],
      loadMore = _useEventsLoadMore2[3];

  var isInitialLoad = isLoading && events === null;
  var lastHourWithEvent = events === null ? null : Math.max.apply(Math, _toConsumableArray(Object.keys(events).map(function (timestamp) {
    return parseInt(timestamp, 10);
  })));
  var isEverythingLoaded = remainingEventsCount === 0;
  var lastHourSeparatorClassName = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__["createCssClassNames"])({
    'c-day-view__hour-separator': true,
    'c-day-view__hour-separator--blurred': !isEverythingLoaded
  });
  var lastHourLabelClassName = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__["createCssClassNames"])({
    'c-day-view__hour-label': true,
    'c-day-view__hour-label--blurred': !isEverythingLoaded
  });

  for (var i = 0; i < 24; i++) {
    dayHours.push(day.clone().add(i, 'hour'));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-day-view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-day-view__header c-day-view__header--day"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-day-view__header-label--date"
  }, selectedDate.format('D')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-day-view__header-label--day"
  }, currentDateInBrowserTimezone.toLocaleDateString(Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__["getAdminPanelLanguageCode"])(), {
    weekday: 'long'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-day-view__day"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isLoading: isInitialLoad
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-day-view__agenda"
  }, dayHours.map(function (hour) {
    var hourEventsData = events === null ? [] : events[hour.unix()];
    var isBlurred = (!lastHourWithEvent || hour.unix() > lastHourWithEvent) && !isEverythingLoaded;
    var hourSeparatorClassName = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__["createCssClassNames"])({
      'c-day-view__hour-separator': true,
      'c-day-view__hour-separator--blurred': isBlurred
    });
    var hourLabelClassName = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__["createCssClassNames"])({
      'c-day-view__hour-label': true,
      'c-day-view__hour-label--blurred': isBlurred
    });
    var loadMoreComponent = null;

    if (hour.unix() === lastHourWithEvent && !isEverythingLoaded) {
      loadMoreComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-day-view__load-more-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_load_more_bnt_load_more_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onLoadMore: loadMore,
        isLoading: isLoading
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: hour.unix()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-day-view__hour"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: hourSeparatorClassName
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: hourLabelClassName
    }, Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__["getAmPmTimeLabel"])(Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__["forceBrowserTimezone"])(hour).toDate())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_view_events_view__WEBPACK_IMPORTED_MODULE_7__["default"], {
      events: hourEventsData
    }), loadMoreComponent));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-day-view__hour"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: lastHourSeparatorClassName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: lastHourLabelClassName
  }, Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__["getAmPmTimeLabel"])(Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__["forceBrowserTimezone"])(dayLastHour).toDate()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-day-view__header c-day-view__header--picker"
  }, Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__["getMonthName"])(selectedDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-day-view__picker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_day_view_day_picker__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (DayView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/event-badge/event.badge.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/event-badge/event.badge.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var EventBadge = function EventBadge(_ref) {
  var event = _ref.event;

  var renderEventDetailsRow = function renderEventDetailsRow(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        attributeKey = _ref3[0],
        _ref3$ = _ref3[1],
        label = _ref3$.label,
        value = _ref3$.value;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: attributeKey,
      className: "c-event-badge__property"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "c-event-badge__property-label"
    }, label, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "c-event-badge__property-value"
    }, value));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-event-badge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-event-badge__title"
  }, event.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-event-badge__subtitle"
  }, event.subname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "c-event-badge__properties"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, Object.entries(event.attributes).map(renderEventDetailsRow))));
};

EventBadge.propTypes = {
  event: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
EventBadge.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (EventBadge);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/event-tooltip/event.tooltip.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/event-tooltip/event.tooltip.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _event_badge_event_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-badge/event.badge */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/event-badge/event.badge.js");





var EventTooltip = function EventTooltip(_ref) {
  var event = _ref.event,
      position = _ref.position;
  var className = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
    'c-event-tooltip': true,
    'c-event-tooltip--on-left': position === 'left'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_badge_event_badge__WEBPACK_IMPORTED_MODULE_3__["default"], {
    event: event
  }));
};

EventTooltip.propTypes = {
  event: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
EventTooltip.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (EventTooltip);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-actions/events.action.btn.js":
/*!************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-actions/events.action.btn.js ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var EventsActionBtn = function EventsActionBtn(_ref) {
  var iconUrl = _ref.iconUrl,
      actionEvent = _ref.actionEvent,
      label = _ref.label;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_2__["EventsSelectionContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      _useContext2$ = _useContext2[0],
      eventsType = _useContext2$.eventsType,
      selectedEvents = _useContext2$.selectedEvents,
      dispatchSelectEventAction = _useContext2[1];

  var handleClick = function handleClick() {
    var event = new CustomEvent("".concat(eventsType, ":").concat(actionEvent), {
      detail: {
        events: selectedEvents
      }
    });
    window.document.body.dispatchEvent(event);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.eZ.helpers.tooltips.parse();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "ez-btn btn btn-icon c-events-action-btn c-events-action-btn__".concat(actionEvent),
    title: label,
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    customPath: iconUrl,
    extraClasses: "ez-icon--secondary ez-icon--small-medium"
  }));
};

EventsActionBtn.propTypes = {
  iconUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  actionEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
EventsActionBtn.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (EventsActionBtn);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-actions/events.actions.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-actions/events.actions.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _events_action_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.action.btn */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-actions/events.action.btn.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var EventsActions = function EventsActions() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_1__["EventsSelectionContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      eventsType = _useContext2[0].eventsType,
      dispatchSelectEventAction = _useContext2[1];

  var eventsConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_1__["EventsConfigContext"]);
  var selectedEventsConfig = eventsConfig[eventsType];

  if (!selectedEventsConfig) {
    return null;
  }

  var selectedEventsActions = selectedEventsConfig.actions;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-events-actions"
  }, Object.entries(selectedEventsActions).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        actionEvent = _ref2[0],
        _ref2$ = _ref2[1],
        icon = _ref2$.icon,
        label = _ref2$.label;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_action_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: actionEvent,
      actionEvent: actionEvent,
      iconUrl: icon,
      label: label
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EventsActions);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.event.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.event.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");
/* harmony import */ var _event_tooltip_event_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event-tooltip/event.tooltip */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/event-tooltip/event.tooltip.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;

var EventsViewEvent = function EventsViewEvent(_ref) {
  var _createCssClassNames;

  var event = _ref.event,
      refEvents = _ref.refEvents;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_3__["EventsSelectionContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      eventsSelection = _useContext2[0],
      dispatchSelectEventAction = _useContext2[1];

  var eventsConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_3__["EventsConfigContext"]);
  var eventConfig = eventsConfig[event.type];
  var isSelectable = eventConfig.isSelectable;
  var isSelected = !!eventsSelection.selectedEvents[event.id];
  var labelClassName = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])((_createCssClassNames = {
    'c-events-view-event__label': true
  }, _defineProperty(_createCssClassNames, "c-events-view-event__label--".concat(event.type), true), _defineProperty(_createCssClassNames, 'c-events-view-event__label--selected', isSelected), _defineProperty(_createCssClassNames, 'c-events-view-event__label--not-selectable', !isSelectable), _createCssClassNames));
  var style = {
    background: eventConfig.color
  };

  var handleClick = function handleClick() {
    if (!isSelectable) {
      return;
    }

    if (isSelected) {
      dispatchSelectEventAction({
        type: 'DESELECT_EVENT',
        eventId: event.id
      });
    } else {
      dispatchSelectEventAction({
        type: 'SELECT_EVENT',
        event: event
      });
    }
  };

  var eventDate = convertDateToTimezone(parseInt(event.dateTime, 10) * 1000);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      tooltipPosition = _useState2[0],
      setTooltipPosition = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var elementLeftPosition = refEvents.current.getBoundingClientRect().left;
    var tooltipPosition = elementLeftPosition > window.innerWidth / 2 ? 'left' : 'right';
    setTooltipPosition(tooltipPosition);
  }, [refEvents.current]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: event.id,
    className: "c-events-view-event"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: labelClassName,
    onClick: handleClick,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-events-view-event__name"
  }, event.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-events-view-event__time"
  }, Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__["getAmPmTimeLabel"])(Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_4__["forceBrowserTimezone"])(eventDate).toDate()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_tooltip_event_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    event: event,
    position: tooltipPosition
  }));
};

EventsViewEvent.propTypes = {
  event: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  refEvents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EventsViewEvent);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar-view/calendar.view */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view/calendar.view.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _events_view_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events.view.event */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.event.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;

var EventsView = function EventsView(_ref) {
  var events = _ref.events,
      slotsCount = _ref.slotsCount,
      eventsTotalCount = _ref.eventsTotalCount;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_3__["SelectedDateContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedDate = _useContext2[0],
      setSelectedDate = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_2__["CurrentCalendarViewContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      currentCalendarView = _useContext4[0],
      setCurrentCalendarView = _useContext4[1];

  var allEventsFit = slotsCount === null || events.length <= slotsCount;
  var eventsToDisplay = allEventsFit ? events : events.slice(0, slotsCount - 1);
  var totalCount = eventsTotalCount ? eventsTotalCount : events.length;
  var refEvents = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  var expandButton = null;

  if (!allEventsFit) {
    expandButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "c-events__expand ez-btn ez-btn--base-dark",
      onClick: function onClick() {
        setSelectedDate(convertDateToTimezone(parseInt(events[0].dateTime, 10) * 1000));
        setCurrentCalendarView(_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_VIEWS"].DAY);
      }
    }, "+".concat(totalCount - slotsCount + 1));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-events",
    ref: refEvents
  }, eventsToDisplay.map(function (event) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_view_event__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: event.id,
      event: event,
      refEvents: refEvents
    });
  }), expandButton);
};

EventsView.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  slotsCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  eventsTotalCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
EventsView.defaultProps = {
  events: [],
  slotsCount: null
};
/* harmony default export */ __webpack_exports__["default"] = (EventsView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/list-view/list.view.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/list-view/list.view.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _date_paginator_date_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../date-paginator/date.paginator */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/date-paginator/date.paginator.js");
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spinner/spinner */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/spinner/spinner.js");
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");
/* harmony import */ var _top_bar_top_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../top-bar/top.bar */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/top-bar/top.bar.js");
/* harmony import */ var _hooks_useEventsLoadMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useEventsLoadMore */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsLoadMore.js");
/* harmony import */ var _load_more_bnt_load_more_btn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../load-more-bnt/load.more.btn */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/load-more-bnt/load.more.btn.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
var types = window.eZ.calendar.config.types;

var ListView = function ListView() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_2__["SelectedDateContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedDate = _useContext2[0],
      setSelectedDate = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_2__["EventsSelectionContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      eventsSelection = _useContext4[0],
      dispatchSelectEventAction = _useContext4[1];

  var eventsConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_2__["EventsConfigContext"]);
  var today = convertDateToTimezone().startOf('day');
  var monthStartDate = selectedDate.clone().startOf('month');
  var fromDate = monthStartDate.isBefore(today, 'day') ? today : monthStartDate;
  var toDate = selectedDate.clone().endOf('month');

  var _useEventsLoadMore = Object(_hooks_useEventsLoadMore__WEBPACK_IMPORTED_MODULE_7__["useEventsLoadMore"])(fromDate, toDate, 'day'),
      _useEventsLoadMore2 = _slicedToArray(_useEventsLoadMore, 4),
      events = _useEventsLoadMore2[0],
      isLoading = _useEventsLoadMore2[1],
      remainingEventsCount = _useEventsLoadMore2[2],
      loadMore = _useEventsLoadMore2[3];

  var isInitialLoad = isLoading && events === null;
  var listClassName = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__["createCssClassNames"])({
    'c-list-view__list': true,
    'c-list-view__list--loading': isInitialLoad
  });

  var renderEventDetails = function renderEventDetails(event) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "list-unstyled mb-0"
    }, Object.entries(event.attributes).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attributeKey = _ref2[0],
          _ref2$ = _ref2[1],
          label = _ref2$.label,
          value = _ref2$.value;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: attributeKey
      }, "".concat(label, ": ").concat(value));
    }));
  };

  var renderEvent = function renderEvent(event) {
    var eventConfig = eventsConfig[event.type];
    var isSelected = !!eventsSelection.selectedEvents[event.id];

    var handleChange = function handleChange() {
      if (isSelected) {
        dispatchSelectEventAction({
          type: 'DESELECT_EVENT',
          eventId: event.id
        });
      } else {
        dispatchSelectEventAction({
          type: 'SELECT_EVENT',
          event: event
        });
      }
    };

    var input = null;

    if (eventConfig.isSelectable) {
      input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        className: "ez-input ez-input--checkbox",
        checked: isSelected,
        onChange: handleChange
      });
    }

    var eventDate = convertDateToTimezone(parseInt(event.dateTime, 10) * 1000);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: event.id,
      className: "c-list-view__table-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "c-list-view__table-cell c-list-view__table-cell--checkbox"
    }, input), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "c-list-view__table-cell"
    }, Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__["getAmPmTimeLabel"])(Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__["forceBrowserTimezone"])(eventDate).toDate())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "c-list-view__table-cell"
    }, event.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "c-list-view__table-cell"
    }, types[event.type].label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "c-list-view__table-cell"
    }, renderEventDetails(event)));
  };

  var renderDaySeparator = function renderDaySeparator(dayTimestamp) {
    var languageCode = Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_5__["getAdminPanelLanguageCode"])();
    var separatorDate = convertDateToTimezone(parseInt(dayTimestamp, 10) * 1000);
    var separatorDateFormated = separatorDate.toDate().toLocaleDateString(languageCode, {
      day: 'numeric',
      year: 'numeric',
      month: 'long'
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: "c-list-view__table-separator"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "c-list-view__table-cell c-list-view__table-cell--separator",
      colSpan: 5
    }, separatorDateFormated));
  };

  var renderNoEventsToShowInfo = function renderNoEventsToShowInfo(events, isLoading) {
    if (isLoading || Object.entries(events).length) {
      return null;
    }

    var noEventsMessage = Translator.trans(
    /*@Desc("No events to show.")*/
    'calendar.list_view.no_events', {}, 'calendar_widget');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: "c-list-view__table-no-events"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "c-list-view__table-cell c-list-view__table-cell--no-events",
      colSpan: 5
    }, noEventsMessage));
  };

  var renderAllEvents = function renderAllEvents(events) {
    if (!events) {
      return null;
    }

    return Object.entries(events).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          dayTimestamp = _ref4[0],
          dayEvents = _ref4[1];

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: dayTimestamp
      }, renderDaySeparator(dayTimestamp), dayEvents.map(renderEvent));
    });
  };

  var renderLoadMoreButton = function renderLoadMoreButton() {
    var canLoadMore = remainingEventsCount > 0;

    if (!canLoadMore) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-list-view__load-more-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_load_more_bnt_load_more_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onLoadMore: loadMore,
      isLoading: isLoading
    }));
  };

  var timeTableHeader = Translator.trans(
  /*@Desc("Time")*/
  'calendar.list_view.table_header.time', {}, 'calendar_widget');
  var nameTableHeader = Translator.trans(
  /*@Desc("Name")*/
  'calendar.list_view.table_header.name', {}, 'calendar_widget');
  var typeTableHeader = Translator.trans(
  /*@Desc("Type")*/
  'calendar.list_view.table_header.type', {}, 'calendar_widget');
  var detailsTableHeader = Translator.trans(
  /*@Desc("Details")*/
  'calendar.list_view.table_header.details', {}, 'calendar_widget');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-list-view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_top_bar_top_bar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isCalendarViewSwitcherVisible: false,
    paginatorType: _date_paginator_date_paginator__WEBPACK_IMPORTED_MODULE_3__["DATE_PAGINATOR_TYPE"].MONTH
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: listClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isLoading: isInitialLoad
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "c-list-view__table c-list-view__table--hoverable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "c-list-view__table-head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "c-list-view__table-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "c-list-view__table-cell-header c-list-view__table-cell-header--checkbox"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "c-list-view__table-cell-header c-list-view__table-cell-hedaer--time"
  }, timeTableHeader), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "c-list-view__table-cell-header"
  }, nameTableHeader), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "c-list-view__table-cell-header"
  }, typeTableHeader), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "c-list-view__table-cell-header"
  }, detailsTableHeader))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    className: "c-table-view__body"
  }, renderAllEvents(events), renderNoEventsToShowInfo(events, isLoading)))), renderLoadMoreButton());
};

/* harmony default export */ __webpack_exports__["default"] = (ListView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/load-more-bnt/load.more.btn.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/load-more-bnt/load.more.btn.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");




var LoadMoreBtn = function LoadMoreBtn(_ref) {
  var onLoadMore = _ref.onLoadMore,
      isLoading = _ref.isLoading;
  var loadMoreButtonLabel = Translator.trans(
  /*@Desc("Load More")*/
  'calendar.load_more_btn.label', {}, 'calendar_widget');
  var handleLoadMore = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isLoading) {
      return;
    }

    onLoadMore();
  }, [onLoadMore, isLoading]);
  var loadingIcon = null;

  if (isLoading) {
    loadingIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "spinner",
      extraClasses: "c-load-more-btn__spinner ez-icon--medium ez-spin"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-secondary c-load-more-btn",
    onClick: handleLoadMore,
    disabled: isLoading
  }, loadingIcon, loadMoreButtonLabel);
};

LoadMoreBtn.propTypes = {
  onLoadMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LoadMoreBtn);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/month-view/month.day.view.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/month-view/month.day.view.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar-view/calendar.view */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view/calendar.view.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _events_view_events_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events-view/events.view */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;

var MonthDayView = function MonthDayView(_ref) {
  var date = _ref.date,
      isDisabled = _ref.isDisabled,
      eventsData = _ref.eventsData;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_4__["SelectedDateContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedDate = _useContext2[0],
      setSelectedDate = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_3__["CurrentCalendarViewContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      currentCalendarView = _useContext4[0],
      setCurrentCalendarView = _useContext4[1];

  var isCurrentDay = date.isSame(selectedDate, 'day');
  var isPast = date.isBefore(convertDateToTimezone(), 'day');
  var isSelectable = !isPast;
  var events = eventsData ? eventsData.events : [];
  var eventsTotalCount = eventsData ? eventsData.totalCount : null;
  var className = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
    'c-month-day-view': true,
    'c-month-day-view--past': isPast,
    'c-month-day-view--selected': isCurrentDay
  });
  var dayClassName = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
    'c-month-day-view__day': true,
    'c-month-day-view__day--disabled': isDisabled,
    'c-month-day-view__day--past': isPast,
    'c-month-day-view__day--selectable': !isPast
  });

  var handleClick = function handleClick() {
    if (isSelectable) {
      setSelectedDate(date);
      setCurrentCalendarView(_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_VIEWS"].DAY);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: dayClassName,
    onClick: handleClick
  }, date.format('D')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_view_events_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
    events: events,
    slotsCount: 3,
    eventsTotalCount: eventsTotalCount
  }));
};

MonthDayView.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  eventsData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
MonthDayView.defaultProps = {
  isDisabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (MonthDayView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/month-view/month.view.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/month-view/month.view.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_date_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/date.helper */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.helper.js");
/* harmony import */ var _hooks_useEventsGroupedByDayFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useEventsGroupedByDayFetch */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsGroupedByDayFetch.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spinner/spinner */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/spinner/spinner.js");
/* harmony import */ var _month_day_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./month.day.view */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/month-view/month.day.view.js");
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var MonthView = function MonthView() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_3__["SelectedDateContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedDate = _useContext2[0],
      setSelectedDate = _useContext2[1];

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_helpers_date_helper__WEBPACK_IMPORTED_MODULE_1__["getMonthDays"])(selectedDate);
  }, [selectedDate]),
      daysBefore = _useMemo.daysBefore,
      days = _useMemo.days,
      daysAfter = _useMemo.daysAfter;

  var fromDate = days[0];
  var toDate = daysAfter[daysAfter.length - 1].clone().endOf('day');

  var _useEventsGroupedByDa = Object(_hooks_useEventsGroupedByDayFetch__WEBPACK_IMPORTED_MODULE_2__["useEventsGroupedByDayFetch"])(fromDate, toDate),
      _useEventsGroupedByDa2 = _slicedToArray(_useEventsGroupedByDa, 2),
      groupedEventsMap = _useEventsGroupedByDa2[0],
      isLoading = _useEventsGroupedByDa2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-month-view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isLoading: isLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-month-view__week-days"
  }, Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_6__["getWeekdaysLongNames"])().map(function (dayName) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: dayName,
      className: "c-month-view__day-name"
    }, dayName);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-month-view__days"
  }, daysBefore.map(function (day) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_month_day_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: day.unix(),
      date: day,
      isDisabled: true
    });
  }), days.map(function (day) {
    var dayEventsData = isLoading ? {} : groupedEventsMap[day.unix()];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_month_day_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: day.unix(),
      date: day,
      eventsData: dayEventsData
    });
  }), daysAfter.map(function (day) {
    var dayEventsData = isLoading ? {} : groupedEventsMap[day.unix()];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_month_day_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: day.unix(),
      date: day,
      eventsData: dayEventsData,
      isDisabled: true
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MonthView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/selection-confirmation-popup/selection.confirmation.popup.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/selection-confirmation-popup/selection.confirmation.popup.js ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var SelectionConfirmationPopup = function SelectionConfirmationPopup() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_1__["EventsSelectionContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      eventsSelection = _useContext2[0],
      dispatchSelectEventAction = _useContext2[1];

  var isPopupVisible = eventsSelection.selectionToBeConfirmed !== null;

  var handleSelectionConfirm = function handleSelectionConfirm() {
    return dispatchSelectEventAction({
      type: 'CONFIRM_SELECTION'
    });
  };

  var handleSelectionReject = function handleSelectionReject() {
    return dispatchSelectEventAction({
      type: 'REJECT_SELECTION'
    });
  };

  var cancelBtnLabel = Translator.trans(
  /*@Desc("Cancel")*/
  'calendar.selection_confirmation_popup.cancel.btn', {}, 'calendar_widget');
  var confirmBtnLabel = Translator.trans(
  /*@Desc("Refresh list")*/
  'calendar.selection_confirmation_popup.confirm.btn', {}, 'calendar_widget');
  var popupTitle = Translator.trans(
  /*@Desc("Conflict when selecting items")*/
  'calendar.selection_confirmation_popup.no_events', {}, 'calendar_widget');
  var popupMessage = Translator.trans(
  /*@Desc("This event has different actions from the items currently selected in the list.")*/
  'calendar.selection_confirmation_popup.message', {}, 'calendar_widget');
  var popupActionMessage = Translator.trans(
  /*@Desc("To continue, click 'Refresh list'. The selected list will update and the new item will be added to the list")*/
  'calendar.list_view.action_message', {}, 'calendar_widget');

  if (!isPopupVisible) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClose: handleSelectionReject,
    isVisible: isPopupVisible,
    isLoading: false,
    size: "medium",
    title: popupTitle,
    additionalClasses: "c-selection-confirmation-popup",
    footerChildren: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: handleSelectionReject,
      type: "button",
      className: "btn btn-secondary btn--no",
      "data-dismiss": "modal"
    }, cancelBtnLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: handleSelectionConfirm,
      type: "button",
      className: "btn btn-primary btn--trigger font-weight-bold"
    }, confirmBtnLabel))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-selection-confirmation-popup__modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, popupMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, popupActionMessage)));
};

SelectionConfirmationPopup.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SelectionConfirmationPopup);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/selection-sidebar/selection.sidebar.js":
/*!***************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/selection-sidebar/selection.sidebar.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _events_actions_events_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events-actions/events.actions */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-actions/events.actions.js");
/* harmony import */ var _event_badge_event_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event-badge/event.badge */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/event-badge/event.badge.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var SelectionSidebar = function SelectionSidebar(_ref) {
  var isVisible = _ref.isVisible;
  var refSidebar = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var refExpandButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isExpanded = _useState2[0],
      setIsExpanded = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_3__["EventsSelectionContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      eventsSelection = _useContext2[0],
      dispatchSelectEventAction = _useContext2[1];

  var expandLabel = Translator.trans(
  /*@Desc("Expand sidebar")*/
  'calendar.expand.sidebar', {}, 'calendar_widget');
  var collapseLabel = Translator.trans(
  /*@Desc("Collapse sidebar")*/
  'calendar.collapse.sidebar', {}, 'calendar_widget');
  var removeLabel = Translator.trans(
  /*@Desc("Remove")*/
  'calendar.remove', {}, 'calendar_widget');
  var selectedEvents = eventsSelection.selectedEvents;
  var className = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
    'c-selection-sidebar': true,
    'c-selection-sidebar--expanded': isExpanded,
    'c-selection-sidebar--hidden': Object.keys(selectedEvents).length === 0
  });

  var handleToggleSidebar = function handleToggleSidebar() {
    setIsExpanded(function (isExpanded) {
      return !isExpanded;
    });
  };

  var handleDeselectEvent = function handleDeselectEvent(eventId) {
    window.eZ.helpers.tooltips.hideAll(refSidebar.current);
    dispatchSelectEventAction({
      type: 'DESELECT_EVENT',
      eventId: eventId
    });
  };

  var expandBtnIconName = isExpanded ? 'caret-next' : 'caret-back';
  var togglerLabel = isExpanded ? collapseLabel : expandLabel;
  var renderedEvents = null;
  var renderedEventsInfo = null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.eZ.helpers.tooltips.parse(refSidebar.current);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.eZ.helpers.tooltips.hideAll(refSidebar.current);
    window.eZ.helpers.tooltips.parse(refSidebar.current);

    if (refExpandButton.current) {
      refExpandButton.current.dataset.originalTitle = togglerLabel;
    }
  }, [isExpanded, selectedEvents]);

  if (!isVisible) {
    return null;
  }

  if (isExpanded) {
    renderedEvents = Object.values(selectedEvents).map(function (event) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: event.id,
        className: "c-selection-sidebar__event"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_badge_event_badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
        event: event
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-icon c-selection-sidebar__deselect-event-btn",
        onClick: handleDeselectEvent.bind(null, event.id),
        "data-placement": "left",
        title: removeLabel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "discard",
        extraClasses: "ez-icon--small-medium ez-icon--secondary"
      })));
    });
  } else {
    var eventsLabel = Translator.trans(
    /*@Desc("selected")*/
    'calendar.selection_sidebar.selected_info', {}, 'calendar_widget');
    renderedEventsInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-selection-sidebar__events-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-selection-sidebar__selected-events-count"
    }, Object.keys(selectedEvents).length), eventsLabel);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    ref: refSidebar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-selection-sidebar__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-icon c-selection-sidebar__expand-btn",
    onClick: handleToggleSidebar,
    title: togglerLabel,
    ref: refExpandButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: expandBtnIconName,
    extraClasses: "ez-icon ez-icon--small ez-icon--secondary"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_actions_events_actions__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-selection-sidebar__events-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-selection-sidebar__events-list"
  }, renderedEvents, renderedEventsInfo)));
};

SelectionSidebar.propTypes = {
  isVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SelectionSidebar);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/spinner/spinner.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/spinner/spinner.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");




var LoadingSpinner = function LoadingSpinner(_ref) {
  var isLoading = _ref.isLoading;

  if (!isLoading) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-loading-spinner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "spinner",
    extraClasses: "c-loading-spinner__icon ez-icon--medium ez-spin"
  }));
};

LoadingSpinner.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/top-bar/top.bar.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/top-bar/top.bar.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _calendar_view_switcher_calendar_view_switcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar-view-switcher/calendar.view.switcher */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view-switcher/calendar.view.switcher.js");
/* harmony import */ var _date_paginator_date_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../date-paginator/date.paginator */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/date-paginator/date.paginator.js");
/* harmony import */ var _calendar_filters_calendar_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calendar-filters/calendar.filters */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-filters/calendar.filters.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var TopBar = function TopBar(_ref) {
  var paginatorType = _ref.paginatorType,
      isCalendarViewSwitcherVisible = _ref.isCalendarViewSwitcherVisible;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      areFiltersOpened = _useState2[0],
      setAreFiltersOpened = _useState2[1];

  var toggleFilters = function toggleFilters() {
    window.eZ.helpers.tooltips.hideAll();
    setAreFiltersOpened(!areFiltersOpened);
  };

  var filterLabel = Translator.trans(
  /*@Desc("Filters")*/
  'calendar.filters', {}, 'calendar_widget');
  var calendarViewSwitcher = null;
  var calendarFilters = null;

  if (isCalendarViewSwitcherVisible) {
    calendarViewSwitcher = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calendar_view_switcher_calendar_view_switcher__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }

  if (areFiltersOpened) {
    calendarFilters = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calendar_filters_calendar_filters__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-top-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-top-bar__menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-top-bar__date-paginator-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_date_paginator_date_paginator__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: paginatorType
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-top-bar__view-switcher-wrapper"
  }, calendarViewSwitcher), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-top-bar__filters-toggler-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "c-top-bar__filters-toggler-btn",
    onClick: toggleFilters,
    title: filterLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "filters",
    extraClasses: "ez-icon--small-medium ez-icon--dark"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-top-bar__filters"
  }, calendarFilters));
};

TopBar.propTypes = {
  paginatorType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isCalendarViewSwitcherVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/view-toggler/view.toggler.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/view-toggler/view.toggler.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");






var ViewToggler = function ViewToggler(_ref) {
  var currentView = _ref.currentView,
      setCurrentView = _ref.setCurrentView;
  var listViewLabel = Translator.trans(
  /*@Desc("List view")*/
  'calendar.list.view', {}, 'calendar_widget');

  var handleViewChange = function handleViewChange() {
    var switchedView = currentView === _calendar_module__WEBPACK_IMPORTED_MODULE_4__["MODULE_VIEWS"].CALENDAR ? _calendar_module__WEBPACK_IMPORTED_MODULE_4__["MODULE_VIEWS"].LIST : _calendar_module__WEBPACK_IMPORTED_MODULE_4__["MODULE_VIEWS"].CALENDAR;
    setCurrentView(switchedView);
  };

  var className = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
    'c-view-toggler': true,
    'c-view-toggler--calendar': currentView === _calendar_module__WEBPACK_IMPORTED_MODULE_4__["MODULE_VIEWS"].CALENDAR,
    'c-view-toggler--list': currentView === _calendar_module__WEBPACK_IMPORTED_MODULE_4__["MODULE_VIEWS"].LIST
  });
  var calendarOptionClassName = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
    'c-view-toggler__option': true,
    'c-view-toggler__option--selected': currentView === _calendar_module__WEBPACK_IMPORTED_MODULE_4__["MODULE_VIEWS"].CALENDAR
  });
  var listOptionClassName = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
    'c-view-toggler__option': true,
    'c-view-toggler__option--selected': currentView === _calendar_module__WEBPACK_IMPORTED_MODULE_4__["MODULE_VIEWS"].LIST
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    onClick: handleViewChange,
    title: listViewLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: calendarOptionClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "date",
    extraClasses: "ez-icon--small-medium"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: listOptionClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "view-list",
    extraClasses: "ez-icon--small-medium"
  })));
};

ViewToggler.propTypes = {
  currentView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setCurrentView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ViewToggler);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/week-view/week.hour.view.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/week-view/week.hour.view.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _events_view_events_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events-view/events.view */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/events-view/events.view.js");




var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;

var WeekHourView = function WeekHourView(_ref) {
  var date = _ref.date,
      events = _ref.events;
  var isPast = date.isBefore(convertDateToTimezone(), 'day');
  var className = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
    'c-week-hour-view': true,
    'c-week-hour-view--past': isPast
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_view_events_view__WEBPACK_IMPORTED_MODULE_3__["default"], {
    events: events
  }));
};

WeekHourView.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
WeekHourView.defaultProps = {
  events: []
};
/* harmony default export */ __webpack_exports__["default"] = (WeekHourView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/week-view/week.view.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/week-view/week.view.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/date.helper */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.helper.js");
/* harmony import */ var _calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar-view/calendar.view */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/calendar-view/calendar.view.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _hooks_useEventsGroupedByFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useEventsGroupedByFetch */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsGroupedByFetch.js");
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spinner/spinner */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/spinner/spinner.js");
/* harmony import */ var _week_hour_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./week.hour.view */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/components/week-view/week.hour.view.js");
/* harmony import */ var _helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/date.formatter.helper */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;

var WeekView = function WeekView() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_4__["SelectedDateContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedDate = _useContext2[0],
      setSelectedDate = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_3__["CurrentCalendarViewContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      currentCalendarView = _useContext4[0],
      setCurrentCalendarView = _useContext4[1];

  var now = convertDateToTimezone();
  var days = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__["getWeekDays"])(selectedDate);
  }, [selectedDate]);
  var fromDate = days[0];
  var toDate = days[days.length - 1].clone().endOf('day');

  var _useEventsGroupedByFe = Object(_hooks_useEventsGroupedByFetch__WEBPACK_IMPORTED_MODULE_5__["useEventsGroupedByFetch"])(fromDate, toDate, 'hour'),
      _useEventsGroupedByFe2 = _slicedToArray(_useEventsGroupedByFe, 2),
      events = _useEventsGroupedByFe2[0].events,
      isLoading = _useEventsGroupedByFe2[1];

  var weekLastHour = now.clone().endOf('day');
  var weekHours = [];

  var _loop = function _loop(i) {
    var hours = [];
    days.forEach(function (day) {
      hours.push(day.clone().add(i, 'hour'));
    });
    weekHours.push(hours);
  };

  for (var i = 0; i < 24; i++) {
    _loop(i);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-week-view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isLoading: isLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-week-view__days-names"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-week-view__day-time"
  }), Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_8__["getWeekdaysLongNames"])().map(function (dayName) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: dayName,
      className: "c-week-view__day-name"
    }, dayName);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-week-view__days-dates"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-week-view__day-time c-week-view__day-time--no-border-bottom"
  }), days.map(function (date) {
    var isCurrentDay = date.isSame(selectedDate, 'day');
    var isPast = date.isBefore(now, 'day');
    var isSelectable = !isCurrentDay && !isPast;
    var wrapperClassName = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__["createCssClassNames"])({
      'c-week-view__day-date-wrapper': true,
      'c-week-view__day-date-wrapper--past': isPast
    });
    var dayDateClassName = Object(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__["createCssClassNames"])({
      'c-week-view__day-date': true,
      'c-week-view__day-date--selected': isCurrentDay,
      'c-week-view__day-date--past': isPast,
      'c-week-view__day-date--selectable': isSelectable
    });

    var handleClick = function handleClick() {
      if (isSelectable) {
        setSelectedDate(date);
        setCurrentCalendarView(_calendar_view_calendar_view__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_VIEWS"].DAY);
      }
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: date.unix(),
      className: wrapperClassName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: dayDateClassName,
      onClick: handleClick
    }, date.format('D')));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-week-view__days"
  }, weekHours.map(function (rowHours) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: rowHours[0].unix(),
      className: "c-week-view__hour-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-week-view__day-time c-week-view__day-time--no-border-bottom"
    }, Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_8__["getTimeLabel"])(Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_8__["forceBrowserTimezone"])(rowHours[0]).toDate())), rowHours.map(function (hour) {
      var hourEventsData = isLoading ? [] : events[hour.unix()];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_week_hour_view__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: hour.unix(),
        events: hourEventsData,
        date: hour
      });
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-week-view__hour-label-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-week-view__day-time c-week-view__day-time--no-border"
  }, Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_8__["getTimeLabel"])(Object(_helpers_date_formatter_helper__WEBPACK_IMPORTED_MODULE_8__["forceBrowserTimezone"])(weekLastHour).toDate())))));
};

/* harmony default export */ __webpack_exports__["default"] = (WeekView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.formatter.helper.js ***!
  \**********************************************************************************************************************/
/*! exports provided: forceBrowserTimezone, getAdminPanelLanguageCode, getMonthName, getMonthShortName, getWeekdaysShortNames, getWeekdaysLongNames, getAmPmTimeLabel, getTimeLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceBrowserTimezone", function() { return forceBrowserTimezone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminPanelLanguageCode", function() { return getAdminPanelLanguageCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthName", function() { return getMonthName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthShortName", function() { return getMonthShortName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekdaysShortNames", function() { return getWeekdaysShortNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekdaysLongNames", function() { return getWeekdaysLongNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAmPmTimeLabel", function() { return getAmPmTimeLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeLabel", function() { return getTimeLabel; });
/* harmony import */ var _date_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.helper */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.helper.js");

var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
var forceBrowserTimezone = function forceBrowserTimezone(date) {
  var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return convertDateToTimezone(date, browserTimezone, true);
};
var getAdminPanelLanguageCode = function getAdminPanelLanguageCode() {
  return document.querySelector('html').getAttribute('lang').replace(new RegExp('_', 'g'), '-');
};
var getMonthName = function getMonthName(dateWithUserTimezone) {
  var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var dateWithForcedBrowserTimezone = new Date(convertDateToTimezone(dateWithUserTimezone, browserTimezone, true));
  return dateWithForcedBrowserTimezone.toLocaleDateString(getAdminPanelLanguageCode(), {
    month: 'long'
  });
};
var getMonthShortName = function getMonthShortName(dateWithUserTimezone) {
  var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var dateWithForcedBrowserTimezone = new Date(convertDateToTimezone(dateWithUserTimezone, browserTimezone, true));
  return dateWithForcedBrowserTimezone.toLocaleDateString(getAdminPanelLanguageCode(), {
    month: 'short'
  });
};
var weekdaysShortNames = null;
var getWeekdaysShortNames = function getWeekdaysShortNames() {
  if (!weekdaysShortNames) {
    var weekdays = Object(_date_helper__WEBPACK_IMPORTED_MODULE_0__["getWeekDays"])(convertDateToTimezone());
    var languageCode = getAdminPanelLanguageCode();
    weekdaysShortNames = weekdays.map(function (day) {
      return day.toDate().toLocaleDateString(languageCode, {
        weekday: 'short'
      });
    });
  }

  return weekdaysShortNames;
};
var weekdaysLongNames = null;
var getWeekdaysLongNames = function getWeekdaysLongNames() {
  if (!weekdaysLongNames) {
    var weekdays = Object(_date_helper__WEBPACK_IMPORTED_MODULE_0__["getWeekDays"])(convertDateToTimezone());
    var languageCode = getAdminPanelLanguageCode();
    weekdaysLongNames = weekdays.map(function (day) {
      return day.toDate().toLocaleDateString(languageCode, {
        weekday: 'long'
      });
    });
  }

  return weekdaysLongNames;
};
var getAmPmTimeLabel = function getAmPmTimeLabel(date) {
  return date.toLocaleTimeString(getAdminPanelLanguageCode(), {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric'
  });
};
var getTimeLabel = function getTimeLabel(date) {
  return date.toLocaleTimeString(getAdminPanelLanguageCode(), {
    hour: 'numeric',
    hour12: false,
    minute: 'numeric'
  });
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.helper.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/date.helper.js ***!
  \************************************************************************************************************/
/*! exports provided: getNextMonthDate, getNextWeekDate, getPreviousMonthDate, getPreviousWeekDate, getMonthDays, getWeekDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextMonthDate", function() { return getNextMonthDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextWeekDate", function() { return getNextWeekDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousMonthDate", function() { return getPreviousMonthDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousWeekDate", function() { return getPreviousWeekDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthDays", function() { return getMonthDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekDays", function() { return getWeekDays; });
var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
var getNextMonthDate = function getNextMonthDate(currentDate) {
  var nextMonthDate = currentDate.clone().add(1, 'month').startOf('month');
  return nextMonthDate;
};
var getNextWeekDate = function getNextWeekDate(currentDate) {
  var nextWeekDate = currentDate.clone().add(1, 'week').startOf('week');
  return nextWeekDate;
};
/**
 * Returns first date from previous month, which is in present time.
 * If all month's days are in the past null is returned.
 *
 * @param {Object} currentDate
 */

var getPreviousMonthDate = function getPreviousMonthDate(currentDate) {
  var previousMonthDate = currentDate.clone().subtract(1, 'month').startOf('month');
  var today = convertDateToTimezone().startOf('day');

  if (previousMonthDate.isBefore(today, 'day')) {
    return today.isSame(previousMonthDate, 'month') ? today : null;
  }

  return previousMonthDate;
};
/**
 * Returns first date from previous week, which is in present time.
 * If all week's days are in the past null is returned.
 *
 * @param {Object} currentDate
 */

var getPreviousWeekDate = function getPreviousWeekDate(currentDate) {
  var previousWeekDate = currentDate.clone().subtract(1, 'week').startOf('week');
  var today = convertDateToTimezone().startOf('day');

  if (previousWeekDate.isBefore(today, 'day')) {
    return today.isSame(previousWeekDate, 'week') ? today : null;
  }

  return previousWeekDate;
};
function getMonthDays(date) {
  var monthFirstDay = date.clone().startOf('month');
  var monthLastDay = date.clone().endOf('month');
  var countOfDaysBefore = monthFirstDay.day();
  var daysCount = monthLastDay.daysInMonth();
  var countOfDaysAfter = 7 * 6 - countOfDaysBefore - daysCount;
  var daysBefore = [];
  var days = [];
  var daysAfter = [];

  for (var i = countOfDaysBefore; i > 0; i--) {
    daysBefore.push(monthFirstDay.clone().add(-i, 'day').startOf('day'));
  }

  for (var _i = 0; _i < daysCount; _i++) {
    days.push(monthFirstDay.clone().add(_i, 'day').startOf('day'));
  }

  for (var _i2 = 0; _i2 < countOfDaysAfter; _i2++) {
    daysAfter.push(monthLastDay.clone().add(_i2 + 1, 'day').startOf('day'));
  }

  return {
    daysBefore: daysBefore,
    days: days,
    daysAfter: daysAfter
  };
}
var getWeekDays = function getWeekDays(date) {
  var weekFirstDay = date.clone().startOf('week');
  var weekDays = [];

  for (var i = 0; i < 7; i++) {
    weekDays.push(weekFirstDay.clone().add(i, 'day'));
  }

  return weekDays;
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/group.events.by.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/group.events.by.js ***!
  \****************************************************************************************************************/
/*! exports provided: groupEventsBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupEventsBy", function() { return groupEventsBy; });
var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
var groupEventsBy = function groupEventsBy(data, groupBy) {
  return data.events.reduce(function (groupedEvents, event) {
    var eventDate = convertDateToTimezone(parseInt(event.dateTime, 10) * 1000);
    var eventTimestamp = eventDate.startOf(groupBy).unix();
    var group = groupedEvents[eventTimestamp] ? groupedEvents[eventTimestamp] : [];
    group.push(event);
    groupedEvents[eventTimestamp] = group;
    return groupedEvents;
  }, {});
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsFetch.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsFetch.js ***!
  \*************************************************************************************************************/
/*! exports provided: useEventsFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventsFetch", function() { return useEventsFetch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFetchReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFetchReducer */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useFetchReducer.js");
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
var useEventsFetch = function useEventsFetch(startDate, endDate, loadEvents, processEvents) {
  var page = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  var _useFetchReducer = Object(_useFetchReducer__WEBPACK_IMPORTED_MODULE_1__["useFetchReducer"])(),
      _useFetchReducer2 = _slicedToArray(_useFetchReducer, 2),
      eventsState = _useFetchReducer2[0],
      dispatch = _useFetchReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      reloadCounter = _useState2[0],
      setReloadCounter = _useState2[1];

  var restInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_2__["RestInfoContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_2__["CalendarFiltersContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      calendarFilters = _useContext2[0],
      dispatchCalendarFiltersAction = _useContext2[1];

  var now = convertDateToTimezone();
  var fromDate = startDate.isBefore(now, 'day') ? now.startOf('day') : startDate;
  var fromTimestamp = fromDate.unix();
  var toTimestamp = endDate.unix();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var forceReload = function forceReload() {
      return setReloadCounter(reloadCounter + 1);
    };

    window.document.body.addEventListener('ez-calendar-reload-data', forceReload);
    return function () {
      window.document.body.removeEventListener('ez-calendar-reload-data', forceReload);
    };
  }, [setReloadCounter, reloadCounter]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var effectCleaned = false;
    dispatch({
      type: _useFetchReducer__WEBPACK_IMPORTED_MODULE_1__["START_FETCHING"]
    });
    loadEvents(restInfo, fromTimestamp, toTimestamp, calendarFilters, page, function (response) {
      if (effectCleaned) {
        return;
      }

      var processedEvents = processEvents(response);
      dispatch({
        type: _useFetchReducer__WEBPACK_IMPORTED_MODULE_1__["END_FETCHING"],
        data: processedEvents
      });
    });
    return function () {
      effectCleaned = true;
    };
  }, [fromTimestamp, toTimestamp, loadEvents, processEvents, reloadCounter, calendarFilters, page]);
  return [eventsState.data, !eventsState.dataFetched];
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsGroupedByDayFetch.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsGroupedByDayFetch.js ***!
  \*************************************************************************************************************************/
/*! exports provided: useEventsGroupedByDayFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventsGroupedByDayFetch", function() { return useEventsGroupedByDayFetch; });
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/calendar.service */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/services/calendar.service.js");
/* harmony import */ var _useEventsFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEventsFetch */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsFetch.js");


var useEventsGroupedByDayFetch = function useEventsGroupedByDayFetch(startDate, endDate) {
  return Object(_useEventsFetch__WEBPACK_IMPORTED_MODULE_1__["useEventsFetch"])(startDate, endDate, _services_calendar_service__WEBPACK_IMPORTED_MODULE_0__["loadEventsGroupedByDay"], createEventsMap);
};

var createEventsMap = function createEventsMap(_ref) {
  var groups = _ref.groups;
  var groupedEventsMap = {};
  Object.values(groups).forEach(function (dayEventsGroup) {
    groupedEventsMap[dayEventsGroup.DateRange.startDate] = {
      events: dayEventsGroup.events,
      totalCount: dayEventsGroup.totalCount
    };
  });
  return groupedEventsMap;
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsGroupedByFetch.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsGroupedByFetch.js ***!
  \**********************************************************************************************************************/
/*! exports provided: useEventsGroupedByFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventsGroupedByFetch", function() { return useEventsGroupedByFetch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/calendar.service */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/services/calendar.service.js");
/* harmony import */ var _useEventsFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useEventsFetch */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsFetch.js");
/* harmony import */ var _helpers_group_events_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/group.events.by */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/group.events.by.js");




var useEventsGroupedByFetch = function useEventsGroupedByFetch(startDate, endDate, groupBy) {
  var nextPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var processEvents = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data) {
    var groupedEvents = Object(_helpers_group_events_by__WEBPACK_IMPORTED_MODULE_3__["groupEventsBy"])(data, groupBy);
    return {
      events: groupedEvents,
      totalCount: data.totalCount,
      nextPage: data._nextPage
    };
  }, [groupBy]);
  return Object(_useEventsFetch__WEBPACK_IMPORTED_MODULE_2__["useEventsFetch"])(startDate, endDate, _services_calendar_service__WEBPACK_IMPORTED_MODULE_1__["loadEventsUngrouped"], processEvents, nextPage);
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsLoadMore.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useEventsLoadMore.js ***!
  \****************************************************************************************************************/
/*! exports provided: useEventsLoadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventsLoadMore", function() { return useEventsLoadMore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calendar.module */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/calendar.service */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/services/calendar.service.js");
/* harmony import */ var _helpers_group_events_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/group.events.by */ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/helpers/group.events.by.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
var loadMoreEventsInitialState = {
  isLoading: true,
  data: null,
  nextPage: null,
  remainingEventsCount: null,
  reloadCounter: 0
};
var INITIAL_LOAD_START = 'INITIAL_LOAD_START';
var INITIAL_LOAD_END = 'INITIAL_LOAD_END';
var LOAD_MORE_START = 'LOAD_MORE_START';
var LOAD_MORE_END = 'LOAD_MORE_END';
var RELOAD = 'RELOAD';

var loadMoreEventsReducer = function loadMoreEventsReducer(state, action) {
  switch (action.type) {
    case INITIAL_LOAD_START:
      return startInitialLoad();

    case INITIAL_LOAD_END:
      return endInitialLoad(state, action);

    case LOAD_MORE_START:
      return startLoadMore(state);

    case LOAD_MORE_END:
      return endLoadMore(state, action);

    case RELOAD:
      return reload(state);

    default:
      throw new Error();
  }
};

var startInitialLoad = function startInitialLoad() {
  return loadMoreEventsInitialState;
};

var endInitialLoad = function endInitialLoad(state, action) {
  var _action$data = action.data,
      loadedEvents = _action$data.groupedEvents,
      loadedEventsCount = _action$data.loadedEventsCount,
      nextPage = _action$data.nextPage,
      totalCount = _action$data.totalCount;
  return _objectSpread(_objectSpread({}, state), {}, {
    isLoading: false,
    data: loadedEvents,
    nextPage: nextPage,
    remainingEventsCount: totalCount - loadedEventsCount
  });
};

var startLoadMore = function startLoadMore(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isLoading: true
  });
};

var endLoadMore = function endLoadMore(state, action) {
  var _action$data2 = action.data,
      loadedEvents = _action$data2.groupedEvents,
      loadedEventsCount = _action$data2.loadedEventsCount,
      nextPage = _action$data2.nextPage,
      totalCount = _action$data2.totalCount;
  var events = Object.entries(loadedEvents).reduce(function (allEvents, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        timestamp = _ref2[0],
        eventsData = _ref2[1];

    if (allEvents[timestamp]) {
      allEvents[timestamp] = [].concat(_toConsumableArray(allEvents[timestamp]), _toConsumableArray(eventsData));
    } else {
      allEvents[timestamp] = eventsData;
    }

    return allEvents;
  }, _objectSpread({}, state.data));
  return _objectSpread(_objectSpread({}, state), {}, {
    isLoading: false,
    data: events,
    nextPage: nextPage,
    remainingEventsCount: totalCount - loadedEventsCount
  });
};

var reload = function reload(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    reloadCounter: state.reloadCounter + 1
  });
};

var useEventsLoadMore = function useEventsLoadMore(startDate, endDate, groupBy) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(loadMoreEventsReducer, loadMoreEventsInitialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      isLoading = _useReducer2$.isLoading,
      data = _useReducer2$.data,
      nextPage = _useReducer2$.nextPage,
      remainingEventsCount = _useReducer2$.remainingEventsCount,
      reloadCounter = _useReducer2$.reloadCounter,
      dispatch = _useReducer2[1];

  var restInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_1__["RestInfoContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_calendar_module__WEBPACK_IMPORTED_MODULE_1__["CalendarFiltersContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      calendarFilters = _useContext2[0],
      dispatchCalendarFiltersAction = _useContext2[1];

  var now = convertDateToTimezone();
  var fromDate = startDate.isBefore(now, 'day') ? now.startOf('day') : startDate;
  var fromTimestamp = fromDate.unix();
  var toTimestamp = endDate.unix();
  var processEvents = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data) {
    var groupedEvents = Object(_helpers_group_events_by__WEBPACK_IMPORTED_MODULE_3__["groupEventsBy"])(data, groupBy);
    return {
      groupedEvents: groupedEvents,
      loadedEventsCount: data.events.length,
      totalCount: data.totalCount,
      nextPage: data._nextPage
    };
  }, [groupBy]);
  var loadMore = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!isLoading && remainingEventsCount <= 0) {
      return;
    }

    dispatch({
      type: LOAD_MORE_START
    });
    Object(_services_calendar_service__WEBPACK_IMPORTED_MODULE_2__["loadEventsUngrouped"])(restInfo, fromTimestamp, toTimestamp, calendarFilters, nextPage, function (response) {
      var processedEvents = processEvents(response);
      dispatch({
        type: LOAD_MORE_END,
        data: processedEvents
      });
    });
  }, [fromTimestamp, toTimestamp, _services_calendar_service__WEBPACK_IMPORTED_MODULE_2__["loadEventsUngrouped"], processEvents, calendarFilters, nextPage, isLoading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var forceReload = function forceReload() {
      return dispatch({
        type: RELOAD
      });
    };

    window.document.body.addEventListener('ez-calendar-reload-data', forceReload);
    return function () {
      window.document.body.removeEventListener('ez-calendar-reload-data', forceReload);
    };
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var effectCleaned = false;
    dispatch({
      type: INITIAL_LOAD_START
    });
    Object(_services_calendar_service__WEBPACK_IMPORTED_MODULE_2__["loadEventsUngrouped"])(restInfo, fromTimestamp, toTimestamp, calendarFilters, null, function (response) {
      if (effectCleaned) {
        return;
      }

      var processedEvents = processEvents(response);
      dispatch({
        type: INITIAL_LOAD_END,
        data: processedEvents
      });
    });
    return function () {
      effectCleaned = true;
    };
  }, [dispatch, restInfo, fromTimestamp, toTimestamp, calendarFilters, _services_calendar_service__WEBPACK_IMPORTED_MODULE_2__["loadEventsUngrouped"], processEvents, reloadCounter]);
  return [data, isLoading, remainingEventsCount, loadMore];
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useFetchReducer.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useFetchReducer.js ***!
  \**************************************************************************************************************/
/*! exports provided: START_FETCHING, END_FETCHING, useFetchReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_FETCHING", function() { return START_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_FETCHING", function() { return END_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchReducer", function() { return useFetchReducer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var fetchInitialState = {
  dataFetched: false,
  data: {}
};
var START_FETCHING = 'START_FETCHING';
var END_FETCHING = 'END_FETCHING';

var fetchReducer = function fetchReducer(state, action) {
  switch (action.type) {
    case START_FETCHING:
      return fetchInitialState;

    case END_FETCHING:
      return {
        data: action.data,
        dataFetched: true
      };

    default:
      throw new Error();
  }
};

var useFetchReducer = function useFetchReducer() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(fetchReducer, fetchInitialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      fetchState = _useReducer2[0],
      dispatch = _useReducer2[1];

  return [fetchState, dispatch];
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useFiltersReducer.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useFiltersReducer.js ***!
  \****************************************************************************************************************/
/*! exports provided: TOGGLE_EVENT_TYPE, SELECT_LANGUAGE, useFiltersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_EVENT_TYPE", function() { return TOGGLE_EVENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_LANGUAGE", function() { return SELECT_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFiltersReducer", function() { return useFiltersReducer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var getFiltersInitialState = function getFiltersInitialState(eventsConfig) {
  var eventTypes = Object.keys(eventsConfig).reduce(function (eventTypes, eventType) {
    eventTypes[eventType] = true;
    return eventTypes;
  }, {});
  return {
    eventTypes: eventTypes,
    language: ''
  };
};

var TOGGLE_EVENT_TYPE = 'TOGGLE_EVENT_TYPE';
var SELECT_LANGUAGE = 'SELECT_LANGUAGE';

var filtersReducer = function filtersReducer(state, action) {
  switch (action.type) {
    case TOGGLE_EVENT_TYPE:
      {
        var isEventTypeSelected = !state.eventTypes[action.eventType];
        return _objectSpread(_objectSpread({}, state), {}, {
          eventTypes: _objectSpread(_objectSpread({}, state.eventTypes), {}, _defineProperty({}, action.eventType, isEventTypeSelected))
        });
      }

    case SELECT_LANGUAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        language: action.language
      });

    default:
      throw new Error();
  }
};

var useFiltersReducer = function useFiltersReducer(eventsConfig) {
  var filtersInitialState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return getFiltersInitialState(eventsConfig);
  }, [eventsConfig]);

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(filtersReducer, filtersInitialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      filters = _useReducer2[0],
      dispatch = _useReducer2[1];

  return [filters, dispatch];
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useSelectionReducer.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/hooks/useSelectionReducer.js ***!
  \******************************************************************************************************************/
/*! exports provided: useSelectionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelectionReducer", function() { return useSelectionReducer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var eventsSelectionInitialState = {
  eventsType: null,
  selectedEvents: {},
  selectionToBeConfirmed: null
};

var eventsSelectionReducer = function eventsSelectionReducer(state, action) {
  switch (action.type) {
    case 'SELECT_EVENT':
      return selectEvent(state, action);

    case 'DESELECT_EVENT':
      return deselectEvent(state, action);

    case 'CONFIRM_SELECTION':
      return confirmSelection(state, action);

    case 'REJECT_SELECTION':
      return rejectSelection(state, action);

    case 'CLEAR_SELECTION':
      return eventsSelectionInitialState;

    default:
      throw new Error();
  }
};

var selectEvent = function selectEvent(state, action) {
  var event = action.event;
  var isDifferentType = state.eventsType !== null && event.type !== state.eventsType;

  if (isDifferentType) {
    return _objectSpread(_objectSpread({}, state), {}, {
      selectionToBeConfirmed: event
    });
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    eventsType: event.type,
    selectedEvents: _objectSpread(_objectSpread({}, state.selectedEvents), {}, _defineProperty({}, event.id, event))
  });
};

var deselectEvent = function deselectEvent(state, action) {
  var newSelectedEvents = _objectSpread({}, state.selectedEvents);

  delete newSelectedEvents[action.eventId];
  return _objectSpread(_objectSpread({}, state), {}, {
    eventsType: Object.keys(newSelectedEvents).length > 0 ? state.eventsType : null,
    selectedEvents: newSelectedEvents
  });
};

var confirmSelection = function confirmSelection(state, action) {
  var event = state.selectionToBeConfirmed;

  if (!event) {
    return state;
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    eventsType: event.type,
    selectedEvents: _defineProperty({}, event.id, event),
    selectionToBeConfirmed: null
  });
};

var rejectSelection = function rejectSelection(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    selectionToBeConfirmed: null
  });
};

var useSelectionReducer = function useSelectionReducer() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(eventsSelectionReducer, eventsSelectionInitialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      eventsSelection = _useReducer2[0],
      dispatchSelectEventAction = _useReducer2[1];

  var clearSelection = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatchSelectEventAction({
      type: 'CLEAR_SELECTION'
    });
  }, [dispatchSelectEventAction]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.document.body.addEventListener('ez-calendar-clear-selection', clearSelection);
    return function () {
      window.document.body.removeEventListener('ez-calendar-clear-selection', clearSelection);
    };
  }, [clearSelection]);
  return [eventsSelection, dispatchSelectEventAction];
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/services/calendar.service.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar/services/calendar.service.js ***!
  \******************************************************************************************************************/
/*! exports provided: loadEventsUngrouped, loadEventsGroupedByDay, loadEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEventsUngrouped", function() { return loadEventsUngrouped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEventsGroupedByDay", function() { return loadEventsGroupedByDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEvents", function() { return loadEvents; });
/* harmony import */ var _ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var ENDPOINT_EVENTS = '/api/ezp/v2/calendar/event';
var ENDPOINT_EVENTS_GROUPED_BY_DAY = '/api/ezp/v2/calendar/event/grouped-by-day';

var getUrlFilters = function getUrlFilters(calendarFilters) {
  var filters = [];
  var selectedEventTypes = Object.entries(calendarFilters.eventTypes).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        eventType = _ref2[0],
        isEventTypeSelected = _ref2[1];

    return isEventTypeSelected;
  }).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        eventType = _ref4[0];

    return eventType;
  });

  if (selectedEventTypes.length) {
    filters.push("types=".concat(selectedEventTypes.join(',')));
  }

  if (calendarFilters.language) {
    filters.push("languages=".concat(calendarFilters.language));
  }

  return filters.join('&');
};

var loadEventsUngrouped = function loadEventsUngrouped(restInfo, timestampStart, timestampEnd, calendarFilters, page, callback) {
  var urlFilters = getUrlFilters(calendarFilters);
  var url = page ? page : "".concat(ENDPOINT_EVENTS, "?start=").concat(timestampStart, "&end=").concat(timestampEnd, "&").concat(urlFilters);
  loadEvents(restInfo, url, function (response) {
    callback(response.EventList);
  });
};
var loadEventsGroupedByDay = function loadEventsGroupedByDay(restInfo, timestampStart, timestampEnd, calendarFilters, page, callback) {
  var urlFilters = getUrlFilters(calendarFilters);
  var url = page ? page : "".concat(ENDPOINT_EVENTS_GROUPED_BY_DAY, "?start=").concat(timestampStart, "&end=").concat(timestampEnd, "&").concat(urlFilters);
  loadEvents(restInfo, url, function (response) {
    callback(response.EventGroupList);
  });
};
var loadEvents = function loadEvents(_ref5, url, callback) {
  var siteaccess = _ref5.siteaccess;
  var request = new Request(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-Siteaccess': siteaccess
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  var errorMessage = Translator.trans(
  /*@Desc("Cannot load calendar data")*/
  'calendar.load_events.error.message', {}, 'calendar_widget');
  fetch(request).then(_ezplatform_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__["handleRequestResponse"]).then(callback)["catch"](function () {
    return window.eZ.helpers.notification.showErrorNotification(errorMessage);
  });
};

/***/ }),

/***/ 58:
/*!*****************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js */"./vendor/ezsystems/ezplatform-calendar/src/bundle/ui-dev/src/modules/calendar.module.js");


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

},[[58,"runtime"]]]);