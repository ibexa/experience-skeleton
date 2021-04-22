(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-form-builder-common-js"],{

/***/ "./node_modules/react-collapsible/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-collapsible/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t(__webpack_require__(/*! react */ "react"));else { var r, n; }}(this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(2)()},function(t,n){t.exports=e},function(e,t,n){"use strict";var r=n(3);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,s){if(s!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(0),s=n.n(o),a=function(e){return 0!==e};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var i=d(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(s,e);var t,n,r,o=g(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),m(h(t=o.call(this,e)),"continueOpenCollapsible",(function(){var e=h(t).innerRef;t.setState({height:e.scrollHeight,transition:"height ".concat(t.props.transitionTime,"ms ").concat(t.props.easing),isClosed:!1,hasBeenOpened:!0,inTransition:a(e.scrollHeight),shouldOpenOnNextCycle:!1})})),m(h(t),"handleTriggerClick",(function(e){t.props.triggerDisabled||t.state.inTransition||(e.preventDefault(),t.props.handleTriggerClick?t.props.handleTriggerClick(t.props.accordionPosition):!0===t.state.isClosed?(t.openCollapsible(),t.props.onOpening(),t.props.onTriggerOpening()):(t.closeCollapsible(),t.props.onClosing(),t.props.onTriggerClosing()))})),m(h(t),"handleTransitionEnd",(function(e){e.target===t.innerRef&&(t.state.isClosed?(t.setState({inTransition:!1}),t.props.onClose()):(t.setState({height:"auto",overflow:t.props.overflowWhenOpen,inTransition:!1}),t.props.onOpen()))})),m(h(t),"setInnerRef",(function(e){return t.innerRef=e})),t.timeout=void 0,e.open?t.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:t.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height ".concat(e.transitionTime,"ms ").concat(e.easing),hasBeenOpened:!1,overflow:"hidden",inTransition:!1},t}return t=s,(n=[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"!==t.height&&0!==t.height||!0!==this.state.shouldSwitchAutoOnNextCycle||(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){var e=this.innerRef;this.setState({shouldSwitchAutoOnNextCycle:!0,height:e.scrollHeight,transition:"height ".concat(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime,"ms ").concat(this.props.easing),inTransition:a(e.scrollHeight)})}},{key:"openCollapsible",value:function(){this.setState({inTransition:a(this.innerRef.scrollHeight),shouldOpenOnNextCycle:!0})}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?i.a.createElement("span",{className:"".concat(this.props.classParentString,"__trigger-sibling")},this.props.triggerSibling):this.props.triggerSibling&&"function"==typeof this.props.triggerSibling?this.props.triggerSibling():this.props.triggerSibling?i.a.createElement(this.props.triggerSibling,null):null}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",r=this.props.triggerDisabled?"is-disabled":"",o=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,s=this.props.contentContainerTagName,a=this.props.triggerTagName,l=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,p="".concat(this.props.classParentString,"__trigger ").concat(n," ").concat(r," ").concat(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),u="".concat(this.props.classParentString," ").concat(this.state.isClosed?this.props.className:this.props.openedClassName),g="".concat(this.props.classParentString,"__contentOuter ").concat(this.props.contentOuterClassName),f="".concat(this.props.classParentString,"__contentInner ").concat(this.props.contentInnerClassName);return i.a.createElement(s,c({className:u.trim()},this.props.containerElementProps),i.a.createElement(a,c({className:p.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;(" "===n&&"button"!==e.props.triggerTagName.toLowerCase()||"Enter"===n)&&e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},this.props.triggerElementProps),o),this.renderNonClickableTriggerElement(),i.a.createElement("div",{className:g.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef,hidden:this.props.contentHiddenWhenClosed&&this.state.isClosed&&!this.state.inTransition},i.a.createElement("div",{className:f.trim()},l)))}}])&&p(t.prototype,n),r&&p(t,r),s}(r.Component);y.propTypes={transitionTime:s.a.number,transitionCloseTime:s.a.number,triggerTagName:s.a.string,easing:s.a.string,open:s.a.bool,containerElementProps:s.a.object,triggerElementProps:s.a.object,classParentString:s.a.string,openedClassName:s.a.string,triggerStyle:s.a.object,triggerClassName:s.a.string,triggerOpenedClassName:s.a.string,contentOuterClassName:s.a.string,contentInnerClassName:s.a.string,accordionPosition:s.a.oneOfType([s.a.string,s.a.number]),handleTriggerClick:s.a.func,onOpen:s.a.func,onClose:s.a.func,onOpening:s.a.func,onClosing:s.a.func,onTriggerOpening:s.a.func,onTriggerClosing:s.a.func,trigger:s.a.oneOfType([s.a.string,s.a.element]),triggerWhenOpen:s.a.oneOfType([s.a.string,s.a.element]),triggerDisabled:s.a.bool,lazyRender:s.a.bool,overflowWhenOpen:s.a.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),contentHiddenWhenClosed:s.a.bool,triggerSibling:s.a.oneOfType([s.a.element,s.a.func]),tabIndex:s.a.number,contentContainerTagName:s.a.string},y.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",contentHiddenWhenClosed:!1,openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},onTriggerOpening:function(){},onTriggerClosing:function(){},tabIndex:null,contentContainerTagName:"div"};t.default=y}])}));

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/fieldType/ezform.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/fieldType/ezform.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

(function (global, doc, eZ) {
  var CLASS_LOADING_PREVIEW = 'ez-field-edit--loading-preview';
  var SELECTOR_FIELD = '.ez-field-edit--ezform';
  var fieldContainer = doc.querySelector(SELECTOR_FIELD);
  var formBuilderField = doc.querySelector('.ez-form-builder');

  if (!formBuilderField) {
    return;
  }

  var formPreview = formBuilderField.querySelector('[data-ezform-preview]');
  var preloader = formBuilderField.querySelector('.ez-form-builder-preview__preloader');

  var EzFormValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzFormValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzFormValidator);

    function EzFormValidator() {
      _classCallCheck(this, EzFormValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzFormValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the input field value
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzFormValidator
       */
      function validateInput(event) {
        var result = {
          isError: false
        };
        var field = event.currentTarget;
        var errorMessage = Translator.trans(
        /*@Desc("Form field is required")*/
        'form.cannot.be.empty', {}, 'form_builder');

        if (!field.required) {
          return result;
        }

        var fieldValue = JSON.parse(field.value);

        if (fieldValue.fields.length) {
          return result;
        }

        result.isError = true;
        result.errorMessage = errorMessage;
        return result;
      }
    }]);

    return EzFormValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzFormValidator({
    classInvalid: 'is-invalid',
    fieldContainer: fieldContainer,
    eventsMap: [{
      elements: doc.querySelectorAll('[data-ezform-fieldvalue]'),
      eventName: 'change',
      callback: 'validateInput',
      errorNodeSelectors: ['.ez-field-edit__label-wrapper']
    }]
  });
  validator.init();

  formPreview.onload = function () {
    formPreview.contentWindow.onbeforeunload = function () {
      return fieldContainer.classList.add(CLASS_LOADING_PREVIEW);
    };

    fieldContainer.classList.remove(CLASS_LOADING_PREVIEW);
  };

  eZ.fieldTypeValidators = eZ.fieldTypeValidators ? [].concat(_toConsumableArray(eZ.fieldTypeValidators), [validator]) : [validator];
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/form.builder.create.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/form.builder.create.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ, React, ReactDOM) {
  var CLASS_FORM_BUILDER_CLOSED = 'ez-form-builder--closed';
  var CLASS_FORM_BUILDER_VISIBLE = 'ez-form-builder-modal--visible';
  var CLASS_SCROLL_DISABLED = 'ez-scroll-disabled';
  var CLASS_FIELD_NO_VALUE = 'ez-form-builder--no-value';
  var SELECTOR_MODAL = '.ez-form-builder-modal';
  var DEFAULT_FIELDVALUE = {
    fields: []
  };
  var KEYCODE_ESCAPE = 27; // @TODO get default empty fieldtype value from backend

  var FIELDTYPE_EMPTY_VALUE = JSON.stringify({
    fields: [],
    content_id: null,
    content_field_id: null,
    language_code: null
  });
  var INVALID_FIELDS_ERROR = Translator.trans(
  /*@Desc("Not all the fields were configured correctly. Provide missing configuration.")*/
  'invalid.fields', {}, 'form_builder');
  var fieldTypeContainer = doc.querySelector('.ez-form-builder');
  var formBuilderContainer = doc.querySelector('#ez-form-builder-root');
  var openFormBuilderBtns = doc.querySelectorAll('[data-open-form-builder]');
  var formFieldsConfigInput = doc.querySelector('[data-ezform-fieldvalue]');
  var formBuilder;

  if (!formFieldsConfigInput) {
    return;
  }

  var handleEscapeOnKeyup = function handleEscapeOnKeyup(event) {
    if (event.keyCode !== KEYCODE_ESCAPE) {
      return;
    }

    closeFormBuilder();
  };

  var findFieldConfig = function findFieldConfig(field) {
    return eZ.formBuilder.config.fieldsConfig.find(function (config) {
      return config.identifier === field.identifier;
    });
  };

  var checkFieldIsInValid = function checkFieldIsInValid(field) {
    var fieldConfig = findFieldConfig(field);

    if (!fieldConfig) {
      return true;
    }

    return !field.attributes.every(function (attr) {
      return checkAttributeValidState(fieldConfig, attr);
    });
  };

  var checkAttributeValidState = function checkAttributeValidState(fieldConfig, attr) {
    var attrConfig = fieldConfig.attributes.find(function (config) {
      return config.identifier === attr.identifier;
    });

    if (!Object.keys(attrConfig.constraints).length) {
      return true;
    }

    var isRequired = !!Object.keys(attrConfig.constraints).find(function (key) {
      return key === 'not_blank';
    });

    if (!isRequired) {
      return true;
    }

    var isValid = !!attr.value.trim().length;
    return isValid;
  };

  var checkCanCloseFormBuilder = function checkCanCloseFormBuilder() {
    var formFieldsConfig = formFieldsConfigInput.value ? JSON.parse(formFieldsConfigInput.value) : null;
    var formHasAnyFields = formFieldsConfig && formFieldsConfig.fields && formFieldsConfig.fields.length > 0;

    if (!formHasAnyFields) {
      return {
        canClose: true,
        invalidFields: []
      };
    }

    var invalidFields = formFieldsConfig.fields.filter(checkFieldIsInValid);
    return {
      canClose: !invalidFields.length,
      invalidFields: invalidFields
    };
  };

  var closeFormBuilder = function closeFormBuilder() {
    var _checkCanCloseFormBui = checkCanCloseFormBuilder(),
        canClose = _checkCanCloseFormBui.canClose,
        invalidFields = _checkCanCloseFormBui.invalidFields;

    if (!canClose) {
      eZ.helpers.notification.showErrorNotification(INVALID_FIELDS_ERROR);
      formBuilder.markInvalidFields(invalidFields);
      return;
    }

    var modal = fieldTypeContainer.querySelector('.ez-form-builder-modal');
    doc.body.classList.add(CLASS_FORM_BUILDER_CLOSED);
    doc.body.classList.remove(CLASS_SCROLL_DISABLED);
    global.parent.document.body.dispatchEvent(new CustomEvent('ez-udw-show-footer'));
    modal.classList.remove(CLASS_FORM_BUILDER_VISIBLE);
    modal.removeEventListener('keyup', handleEscapeOnKeyup);
    ReactDOM.unmountComponentAtNode(formBuilderContainer);
    updatePreview();
    eZ.helpers.tooltips.hideAll();
  };

  var openFormBuilder = function openFormBuilder(event) {
    event.preventDefault();
    var modal = fieldTypeContainer.querySelector(SELECTOR_MODAL);
    var hasCorrectValue = formFieldsConfigInput.value.trim().length && formFieldsConfigInput.value !== 'null';
    var fieldValue = hasCorrectValue ? JSON.parse(formFieldsConfigInput.value) : DEFAULT_FIELDVALUE;
    var config = Object.assign({}, eZ.formBuilder.config, {
      fieldValue: fieldValue,
      fieldValueInput: formFieldsConfigInput,
      fieldFormRequestConfig: doc.querySelector('form[name="request_field_configuration"]')
    });
    doc.body.classList.remove(CLASS_FORM_BUILDER_CLOSED);
    doc.body.classList.add(CLASS_SCROLL_DISABLED);
    global.parent.document.body.dispatchEvent(new CustomEvent('ez-udw-hide-footer'));
    modal.classList.add(CLASS_FORM_BUILDER_VISIBLE);
    modal.focus();
    modal.addEventListener('keyup', handleEscapeOnKeyup, false);
    formBuilder = ReactDOM.render(React.createElement(eZ.modules.FormBuilder, config), formBuilderContainer);
  };

  var removeFieldValue = function removeFieldValue() {
    formFieldsConfigInput.value = FIELDTYPE_EMPTY_VALUE;
    updatePreview();
  };

  var attachEventHandlers = function attachEventHandlers(btn) {
    var btnClose = fieldTypeContainer.querySelector('[data-close-form-builder]');
    var btnRemove = fieldTypeContainer.querySelector('.ez-form-builder-preview__action--trash');
    btn.addEventListener('click', openFormBuilder, false);
    btnClose.addEventListener('click', closeFormBuilder, false);
    btnRemove.addEventListener('click', removeFieldValue, false);
  };

  var updatePreview = function updatePreview() {
    var formFieldsConfig = formFieldsConfigInput.value ? JSON.parse(formFieldsConfigInput.value) : null;
    var formHasAnyFields = formFieldsConfig && formFieldsConfig.fields && formFieldsConfig.fields.length > 0;
    var callToAction = doc.querySelector('.ez-form-builder__call-to-action');

    if (formHasAnyFields) {
      var iframeForm = doc.querySelector('form[name=request_form_preview]');
      var iframeFormInput = doc.querySelector('#request_form_preview_form');
      iframeFormInput.value = formFieldsConfigInput.value;
      iframeForm.submit();
      fieldTypeContainer.classList.remove(CLASS_FIELD_NO_VALUE);
      callToAction.setAttribute('hidden', true);
      return;
    }

    fieldTypeContainer.classList.add(CLASS_FIELD_NO_VALUE);
    callToAction.removeAttribute('hidden');
  };

  openFormBuilderBtns.forEach(attachEventHandlers);
  formFieldsConfigInput.addEventListener('change', updatePreview, false);
  updatePreview();
})(window, window.document, window.eZ, window.React, window.ReactDOM);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/resize.form.preview.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/resize.form.preview.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, $) {
  var formPreviewIframe = doc.querySelector('[name="form-preview"]');
  var tabEventAttached = false;

  if (!formPreviewIframe) {
    return;
  }

  var resizePreviewIframeToFitContent = function resizePreviewIframeToFitContent() {
    if (!formPreviewIframe || !formPreviewIframe.contentWindow || !formPreviewIframe.contentWindow.document || !formPreviewIframe.contentWindow.document.body) {
      return;
    }

    var bodyScrollHeight = formPreviewIframe.contentWindow.document.body.scrollHeight;
    formPreviewIframe.height = bodyScrollHeight;

    if (!bodyScrollHeight && !tabEventAttached) {
      $('#ez-tab-label-location-view').on('shown.bs.tab', resizePreviewIframeToFitContent);
      tabEventAttached = true;
    }
  };

  formPreviewIframe.addEventListener('load', resizePreviewIframeToFitContent, false);
  resizePreviewIframeToFitContent();
})(window, window.document, window.jQuery);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/submission.details.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/submission.details.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ, React, ReactDOM, $) {
  var modal = doc.querySelector('#submission-details-modal');

  var showModalOnLoad = function showModalOnLoad(event) {
    var values = event.relatedTarget.dataset.submissionValues;
    var tbody = modal.querySelector('tbody');
    tbody.innerHTML = '';
    tbody.insertAdjacentHTML('afterbegin', values);
  };

  $(modal).on('show.bs.modal', showModalOnLoad);
})(window, window.document, window.eZ, window.React, window.ReactDOM, window.jQuery);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/components/action/action.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/components/action/action.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Action = function Action(_ref) {
  var icon = _ref.icon,
      onClick = _ref.onClick,
      title = _ref.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "c-action",
    type: "button",
    onClick: onClick,
    title: title
  }, icon);
};

Action.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Action);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/form.field.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/form.field.js ***!
  \****************************************************************************************************************************/
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _action_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action/action */ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/components/action/action.js");
/* harmony import */ var _ezplatform_page_builder_src_bundle_ui_dev_src_modules_icon_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
/* harmony import */ var _ezplatform_page_builder_src_bundle_ui_dev_src_modules_page_builder_components_config_popup_config_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/config-popup/config.popup */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/config-popup/config.popup.js");
/* harmony import */ var _ezplatform_page_builder_src_bundle_ui_dev_src_modules_page_builder_components_iframe_iframe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../../ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js");
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









var SELECTOR_POPUP_CONTAINER = '.m-form-builder__popup-container';

var FormField = /*#__PURE__*/function (_PureComponent) {
  _inherits(FormField, _PureComponent);

  var _super = _createSuper(FormField);

  function FormField(props) {
    var _this;

    _classCallCheck(this, FormField);

    _this = _super.call(this, props);
    _this._refField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this._refConfigPopupComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this._refIframeComponent;
    _this._refUdwContainer;
    _this.openFieldConfigPopup = _this.openFieldConfigPopup.bind(_assertThisInitialized(_this));
    _this.remove = _this.remove.bind(_assertThisInitialized(_this));
    _this.hideConfigPopup = _this.hideConfigPopup.bind(_assertThisInitialized(_this));
    _this.handleDragStart = _this.handleDragStart.bind(_assertThisInitialized(_this));
    _this.handleDragEnd = _this.handleDragEnd.bind(_assertThisInitialized(_this));
    _this.getConfigIframe = _this.getConfigIframe.bind(_assertThisInitialized(_this));
    _this.attachConfigPopupEventHandlers = _this.attachConfigPopupEventHandlers.bind(_assertThisInitialized(_this));
    _this.handleOnConfigPopupIframeLoad = _this.handleOnConfigPopupIframeLoad.bind(_assertThisInitialized(_this));
    _this.handleLoadAfterConfigFormSubmit = _this.handleLoadAfterConfigFormSubmit.bind(_assertThisInitialized(_this));
    _this.setConfigIframeRef = _this.setConfigIframeRef.bind(_assertThisInitialized(_this));
    _this.setConfigFormSubmittedState = _this.setConfigFormSubmittedState.bind(_assertThisInitialized(_this));
    _this.openUdw = _this.openUdw.bind(_assertThisInitialized(_this));
    _this.closeUdw = _this.closeUdw.bind(_assertThisInitialized(_this));
    _this.updateFieldNameState = _this.updateFieldNameState.bind(_assertThisInitialized(_this));
    _this.updateFieldNameOnClose = _this.updateFieldNameOnClose.bind(_assertThisInitialized(_this));
    _this.state = {
      isConfigPopupVisible: false,
      shouldPopupWatchLoad: false,
      isConfigDataSent: false,
      isUdwOpened: false,
      nameFieldValue: props.name,
      isDragging: false
    };
    return _this;
  }

  _createClass(FormField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._refUdwContainer = window.document.querySelector('#react-udw');
      window.eZ.helpers.tooltips.parse();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.eZ.helpers.tooltips.hideAll();
    }
  }, {
    key: "openFieldConfigPopup",
    value: function openFieldConfigPopup(event) {
      var _this2 = this;

      event.preventDefault();
      this.setState(function () {
        return {
          isConfigPopupVisible: true,
          shouldPopupWatchLoad: true
        };
      }, function () {
        return _this2.props.onConfigPopupOpened(_this2.props.id);
      });
    }
  }, {
    key: "openUdw",
    value: function openUdw(event) {
      var _this3 = this;

      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(window.eZ.modules.UniversalDiscovery, _objectSpread(_objectSpread({}, event.detail), {}, {
        onConfirm: function onConfirm(items) {
          event.detail.onConfirm(items);

          _this3.closeUdw();
        },
        onCancel: function onCancel() {
          event.detail.onCancel();

          _this3.closeUdw();
        }
      })), this._refUdwContainer, function () {
        return _this3.setState(function () {
          return {
            isUdwOpened: true
          };
        });
      });
    }
  }, {
    key: "closeUdw",
    value: function closeUdw() {
      var _this4 = this;

      this.setState(function () {
        return {
          isUdwOpened: false
        };
      }, function () {
        return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(_this4._refUdwContainer);
      });
    }
  }, {
    key: "updateFieldNameState",
    value: function updateFieldNameState(_ref) {
      var _this5 = this;

      var detail = _ref.detail;
      var nameFieldValue = detail.name;
      this.props.checkCanSetFieldName({
        id: detail.id,
        value: nameFieldValue,
        successCallback: function successCallback() {
          return _this5.setState(function () {
            return {
              nameFieldValue: nameFieldValue
            };
          }, detail.successCallback);
        },
        errorCallback: detail.errorCallback
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this$props = this.props,
          onRemove = _this$props.onRemove,
          id = _this$props.id;
      onRemove(id);
    }
  }, {
    key: "hideConfigPopup",
    value: function hideConfigPopup() {
      this.setState(function () {
        return {
          isConfigPopupVisible: false
        };
      }, this.updateFieldNameOnClose);
    }
  }, {
    key: "updateFieldNameOnClose",
    value: function updateFieldNameOnClose() {
      var _this6 = this;

      var _this$state = this.state,
          nameFieldValue = _this$state.nameFieldValue,
          isConfigDataSent = _this$state.isConfigDataSent;

      if (isConfigDataSent) {
        return this.props.onNameChange(this.props.id, nameFieldValue);
      }

      this.setState(function () {
        return {
          nameFieldValue: _this6.props.name
        };
      });
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(event) {
      var _this7 = this;

      var _this$props2 = this.props,
          onDragStart = _this$props2.onDragStart,
          id = _this$props2.id,
          identifier = _this$props2.identifier,
          name = _this$props2.name,
          views = _this$props2.views;
      var image = document.querySelector("[data-ez-sidebar-field-type=\"".concat(identifier, "\"]"));
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', image);
      event.dataTransfer.setDragImage(image, 0, 0);
      setTimeout(function () {
        _this7.setState({
          isDragging: true
        });
      }, 0);
      onDragStart({
        id: id,
        identifier: identifier,
        name: name,
        views: views
      });
    }
  }, {
    key: "handleDragEnd",
    value: function handleDragEnd(event) {
      this.props.onDragEnd(event);
      this.setState({
        isDragging: false
      });
    }
  }, {
    key: "getConfigIframe",
    value: function getConfigIframe() {
      return this._refIframeComponent && this._refIframeComponent._refIframe;
    }
  }, {
    key: "getConfigPopup",
    value: function getConfigPopup() {
      return this._refConfigPopupComponent.current && this._refConfigPopupComponent.current._refModal;
    }
  }, {
    key: "forceConfigPopupBackdropHidden",
    value: function forceConfigPopupBackdropHidden() {
      var popup = this.getConfigPopup();

      if (popup) {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(popup).modal('hide');
      }
    }
  }, {
    key: "allowScrolling",
    value: function allowScrolling() {
      document.body.classList.remove('modal-open', 'ezs-non-scrollable');
    }
  }, {
    key: "attachConfigPopupEventHandlers",
    value: function attachConfigPopupEventHandlers() {
      if (this.state.isConfigDataSent) {
        return;
      }

      var iframeDoc = this.getConfigIframe().contentDocument;
      iframeDoc.body.addEventListener('ez-open-udw', this.openUdw, false);
      iframeDoc.body.addEventListener('ez-update-field-name', this.updateFieldNameState, false);
      iframeDoc.querySelector('[name="field_configuration"]').addEventListener('submit', this.setConfigFormSubmittedState, false);
      iframeDoc.querySelector('[data-form-action="discard"]').addEventListener('click', this.hideConfigPopup, false);
    }
  }, {
    key: "setConfigFormSubmittedState",
    value: function setConfigFormSubmittedState() {
      this.getConfigIframe().onload = this.handleLoadAfterConfigFormSubmit;
      this.setState(function () {
        return {
          isConfigPopupVisible: true,
          isConfigDataSent: true,
          shouldPopupWatchLoad: true
        };
      });
    }
  }, {
    key: "handleOnConfigPopupIframeLoad",
    value: function handleOnConfigPopupIframeLoad() {
      this.setState(function () {
        return {
          isConfigDataSent: false,
          shouldPopupWatchLoad: false,
          isConfigPopupVisible: true
        };
      }, this.attachConfigPopupEventHandlers);
    }
  }, {
    key: "handleLoadAfterConfigFormSubmit",
    value: function handleLoadAfterConfigFormSubmit() {
      var _this8 = this;

      var iframe = this.getConfigIframe();
      var iframeDocument = iframe.contentDocument;
      var fieldData = iframeDocument.querySelector('[name="FieldConfiguration"]');

      if (!fieldData) {
        this.attachConfigPopupEventHandlers();
        this.setState(function () {
          return {
            isConfigDataSent: false,
            shouldPopupWatchLoad: false
          };
        });
        return;
      }

      iframe.onload = null;
      this.setState(function () {
        return {
          isConfigPopupVisible: false,
          isConfigDataSent: false,
          shouldPopupWatchLoad: false
        };
      }, function () {
        return _this8.props.onFieldDataUpdate(JSON.parse(fieldData.content));
      });
    }
  }, {
    key: "renderConfigPopup",
    value: function renderConfigPopup() {
      var _this$state2 = this.state,
          isConfigDataSent = _this$state2.isConfigDataSent,
          isConfigPopupVisible = _this$state2.isConfigPopupVisible,
          shouldPopupWatchLoad = _this$state2.shouldPopupWatchLoad,
          isUdwOpened = _this$state2.isUdwOpened,
          nameFieldValue = _this$state2.nameFieldValue;

      if (!isConfigPopupVisible) {
        this.forceConfigPopupBackdropHidden();
        this.allowScrolling();
        return null;
      }

      var _this$props3 = this.props,
          id = _this$props3.id,
          fieldName = _this$props3.fieldName;
      var iframeAttrs = {
        ref: this.setConfigIframeRef,
        src: 'about:blank',
        id: id,
        name: id,
        title: id,
        onLoad: isConfigDataSent ? this.handleLoadAfterConfigFormSubmit : this.handleOnConfigPopupIframeLoad,
        isVisible: !isConfigDataSent
      };
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_page_builder_src_bundle_ui_dev_src_modules_page_builder_components_config_popup_config_popup__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: this._refConfigPopupComponent,
        name: nameFieldValue,
        type: fieldName,
        onClose: this.hideConfigPopup,
        isVisible: isConfigPopupVisible,
        hasFocus: !isUdwOpened,
        isLoading: shouldPopupWatchLoad
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_page_builder_src_bundle_ui_dev_src_modules_page_builder_components_iframe_iframe__WEBPACK_IMPORTED_MODULE_7__["default"], iframeAttrs)), document.querySelector(SELECTOR_POPUP_CONTAINER));
    }
  }, {
    key: "setConfigIframeRef",
    value: function setConfigIframeRef(ref) {
      this._refIframeComponent = ref;
    }
  }, {
    key: "renderErrorMessage",
    value: function renderErrorMessage() {
      if (!this.props.isInvalid) {
        return null;
      }

      var invalidConfigMessage = Translator.trans(
      /*@Desc("Field has invalid configuration")*/
      'field.invalid', {}, 'form_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-form-field__error"
      }, invalidConfigMessage);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          id = _this$props4.id,
          onDragOver = _this$props4.onDragOver,
          identifier = _this$props4.identifier;
      var actionTitleSettings = Translator.trans(
      /*@Desc("Settings")*/
      'field.settings', {}, 'form_builder');
      var actionTitleRemove = Translator.trans(
      /*@Desc("Remove")*/
      'field.remove', {}, 'form_builder');
      var fieldClassName = 'c-form-field';

      if (this.props.isInvalid) {
        fieldClassName = "".concat(fieldClassName, " ").concat(fieldClassName, "--invalid");
      }

      if (this.state.isDragging) {
        fieldClassName = "".concat(fieldClassName, " ").concat(fieldClassName, "--dragging");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this._refField,
        className: fieldClassName,
        draggable: "true",
        onDragStart: this.handleDragStart,
        onDragOver: onDragOver,
        onDragEnd: this.handleDragEnd,
        "data-ez-field-id": id
      }, this.renderErrorMessage(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-form-field__drag-handler"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_page_builder_src_bundle_ui_dev_src_modules_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "drag",
        extraClasses: "ez-icon--small-medium"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-form-field__label"
      }, this.state.nameFieldValue || identifier), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-form-field__setting"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_action_action__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: actionTitleSettings,
        onClick: this.openFieldConfigPopup,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_page_builder_src_bundle_ui_dev_src_modules_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          name: "settings-block",
          extraClasses: "ez-icon--primary"
        })
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-form-field__trash"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_action_action__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: actionTitleRemove,
        onClick: this.remove,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_page_builder_src_bundle_ui_dev_src_modules_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          name: "trash",
          extraClasses: "ez-icon--primary"
        })
      })), this.renderConfigPopup());
    }
  }]);

  return FormField;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

FormField.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  identifier: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  fieldName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  views: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onDragStart: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onDragOver: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onDragEnd: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onConfigPopupOpened: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onFieldDataUpdate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onNameChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  isInvalid: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  checkCanSetFieldName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FormField);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/sidebar.field.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/sidebar.field.js ***!
  \*******************************************************************************************************************************/
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




var SidebarField = /*#__PURE__*/function (_PureComponent) {
  _inherits(SidebarField, _PureComponent);

  var _super = _createSuper(SidebarField);

  function SidebarField(props) {
    var _this;

    _classCallCheck(this, SidebarField);

    _this = _super.call(this, props);
    _this.handleDragStart = _this.handleDragStart.bind(_assertThisInitialized(_this));
    _this.handleDragEnd = _this.handleDragEnd.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SidebarField, [{
    key: "handleDragStart",
    value: function handleDragStart(event) {
      event.dataTransfer.effectAllowed = 'copy';
      event.dataTransfer.setData('text/html', event.currentTarget);
      var _this$props = this.props,
          onDragStart = _this$props.onDragStart,
          type = _this$props.type;
      onDragStart({
        identifier: type
      });
    }
  }, {
    key: "handleDragEnd",
    value: function handleDragEnd() {
      this.props.onDragEnd();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          name = _this$props2.name,
          thumbnail = _this$props2.thumbnail,
          type = _this$props2.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        draggable: true,
        className: "c-sidebar-field",
        onDragStart: this.handleDragStart,
        onDragEnd: this.handleDragEnd,
        "data-ez-sidebar-field-type": type
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-sidebar-field__icon-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "c-sidebar-field__icon ez-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "".concat(thumbnail)
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-sidebar-field__label"
      }, name));
    }
  }]);

  return SidebarField;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

SidebarField.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onDragStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onDragEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SidebarField);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/components/tab/tab.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/components/tab/tab.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-collapsible */ "./node_modules/react-collapsible/dist/index.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__);




var renderHeader = function renderHeader(title) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "c-tab__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "c-tab__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "c-tab__icon c-tab__icon--opened ez-icon ez-icon--small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: window.eZ.helpers.icon.getIconPath('caret-down')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "c-tab__icon c-tab__icon--closed ez-icon ez-icon--small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: window.eZ.helpers.icon.getIconPath('caret-up')
  })));
};

var Tab = function Tab(_ref) {
  var title = _ref.title,
      isOpened = _ref.isOpened,
      children = _ref.children;
  var attrs = {
    classParentString: 'Collapsible c-tab',
    trigger: renderHeader(title),
    open: isOpened,
    easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
    transitionTime: 300,
    openedClassName: 'Collapsible c-tab--opened'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_collapsible__WEBPACK_IMPORTED_MODULE_2___default.a, attrs, children);
};

Tab.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};
Tab.defaultProps = {
  isOpened: false
};
/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/form.builder.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/form.builder.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ezplatform_page_builder_src_bundle_ui_dev_src_modules_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../ezplatform-page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator.js");
/* harmony import */ var _ezplatform_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../ezplatform-page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone.js");
/* harmony import */ var _helpers_remove_from_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/remove.from.array */ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/helpers/remove.from.array.js");
/* harmony import */ var _components_tab_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tab/tab */ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/components/tab/tab.js");
/* harmony import */ var _components_field_sidebar_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/field/sidebar.field */ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/sidebar.field.js");
/* harmony import */ var _components_field_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/field/form.field */ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/form.field.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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









var CLASS_PLACEHOLDER = 'droppable-placeholder';
var CLASS_WORKSPACE = 'm-form-builder__workspace';
var SELECTOR_PLACEHOLDER = '.droppable-placeholder';
var ZONE_ID = 'workspace';
var IDENTIFIER_FIELD_DATA_ATTRIBUTE = 'ezFieldId';
var nonDraggingState = {
  isDragging: false,
  draggedFieldData: null,
  draggedFromSidebar: null,
  dragOverZoneId: null
};

var FormBuilder = /*#__PURE__*/function (_Component) {
  _inherits(FormBuilder, _Component);

  var _super = _createSuper(FormBuilder);

  function FormBuilder(props) {
    var _this;

    _classCallCheck(this, FormBuilder);

    _this = _super.call(this, props);
    _this._refWorkspace = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this._refFieldConfigTextarea;
    _this._refFieldConfigIdInput;
    _this.handleDragStartSidebarField = _this.handleDragStartSidebarField.bind(_assertThisInitialized(_this));
    _this.handleDragStartFormField = _this.handleDragStartFormField.bind(_assertThisInitialized(_this));
    _this.handleDropSidebarField = _this.handleDropSidebarField.bind(_assertThisInitialized(_this));
    _this.handleDropWorkspaceField = _this.handleDropWorkspaceField.bind(_assertThisInitialized(_this));
    _this.renderSidebarField = _this.renderSidebarField.bind(_assertThisInitialized(_this));
    _this.handleElementDragOver = _this.handleElementDragOver.bind(_assertThisInitialized(_this));
    _this.handleZoneDragOver = _this.handleZoneDragOver.bind(_assertThisInitialized(_this));
    _this.getPlaceholderNodes = _this.getPlaceholderNodes.bind(_assertThisInitialized(_this));
    _this.cancelDraggingState = _this.cancelDraggingState.bind(_assertThisInitialized(_this));
    _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
    _this.addPlaceholderInZone = _this.addPlaceholderInZone.bind(_assertThisInitialized(_this));
    _this.removePlaceholders = _this.removePlaceholders.bind(_assertThisInitialized(_this));
    _this.removePlaceholdersWithDelay = _this.removePlaceholdersWithDelay.bind(_assertThisInitialized(_this));
    _this.renderFormField = _this.renderFormField.bind(_assertThisInitialized(_this));
    _this.removeFieldFromFieldsState = _this.removeFieldFromFieldsState.bind(_assertThisInitialized(_this));
    _this.updateFieldPosition = _this.updateFieldPosition.bind(_assertThisInitialized(_this));
    _this.insertSiblingField = _this.insertSiblingField.bind(_assertThisInitialized(_this));
    _this.updateFields = _this.updateFields.bind(_assertThisInitialized(_this));
    _this.finishDropAction = _this.finishDropAction.bind(_assertThisInitialized(_this));
    _this.requestFieldConfigForm = _this.requestFieldConfigForm.bind(_assertThisInitialized(_this));
    _this.getFieldsState = _this.getFieldsState.bind(_assertThisInitialized(_this));
    _this.updateFieldValue = _this.updateFieldValue.bind(_assertThisInitialized(_this));
    _this.updateFieldNameValue = _this.updateFieldNameValue.bind(_assertThisInitialized(_this));
    _this.checkCanSetFieldName = _this.checkCanSetFieldName.bind(_assertThisInitialized(_this));
    _this.getNewFieldName = _this.getNewFieldName.bind(_assertThisInitialized(_this));

    var fieldsConfigByCategory = _this.groupFormFieldsByCategory(_this.props.fieldsConfig);

    _this.state = _objectSpread(_objectSpread({}, nonDraggingState), {}, {
      fields: props.fieldValue.fields,
      fieldsConfigByCategory: fieldsConfigByCategory,
      invalidFields: []
    });
    return _this;
  }

  _createClass(FormBuilder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._refFieldConfigTextarea = this.props.fieldFormRequestConfig.querySelector('#request_field_configuration_form');
      this._refFieldConfigIdInput = this.props.fieldFormRequestConfig.querySelector('#request_field_configuration_field_id');
      window.document.body.dispatchEvent(new CustomEvent('ez-form-builder-loaded'));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.document.body.dispatchEvent(new CustomEvent('ez-form-builder-unloaded'));
    }
    /**
     * @param {Object[]} formFields
     * @returns {Object}
     */

  }, {
    key: "groupFormFieldsByCategory",
    value: function groupFormFieldsByCategory(formFields) {
      return formFields.reduce(function (formFieldsMap, formField) {
        var formFieldCategory = formField.category;
        formFieldsMap[formFieldCategory] = formFieldsMap[formFieldCategory] || [];
        formFieldsMap[formFieldCategory].push(formField);
        return formFieldsMap;
      }, {});
    }
  }, {
    key: "handleDragStartSidebarField",
    value: function handleDragStartSidebarField(draggedFieldData) {
      this.setState(function () {
        return {
          isDragging: true,
          draggedFieldData: draggedFieldData,
          draggedFromSidebar: true
        };
      });
    }
  }, {
    key: "handleDragStartFormField",
    value: function handleDragStartFormField(draggedFieldData) {
      this.setState(function () {
        return {
          isDragging: true,
          draggedFieldData: draggedFieldData,
          draggedFromSidebar: false
        };
      });
    }
  }, {
    key: "handleZoneDragOver",
    value: function handleZoneDragOver(event) {
      var _this2 = this;

      event.preventDefault();
      var target = event.target;
      var _this$state = this.state,
          dragOverZoneId = _this$state.dragOverZoneId,
          isDragging = _this$state.isDragging;
      var isDropZone = target === this._refWorkspace.current;
      var shouldAddPlaceholder = isDropZone && !dragOverZoneId && isDragging;

      if (shouldAddPlaceholder) {
        this.setState(function () {
          return {
            dragOverZoneId: target.dataset.ezZoneId
          };
        }, function () {
          return _this2.addPlaceholderInZone(target);
        });
      }

      return false;
    }
  }, {
    key: "getFormFieldElement",
    value: function getFormFieldElement(target) {
      return this.props.getElement(target, function (element) {
        return element.dataset && element.dataset[IDENTIFIER_FIELD_DATA_ATTRIBUTE];
      });
    }
  }, {
    key: "getPlaceholderPreviewNode",
    value: function getPlaceholderPreviewNode() {
      return this._refWorkspace.current.querySelector(SELECTOR_PLACEHOLDER);
    }
  }, {
    key: "removeFieldFromFieldsState",
    value: function removeFieldFromFieldsState(fieldId) {
      var _this3 = this;

      this.setState(function (state) {
        return {
          fields: Object(_helpers_remove_from_array__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_ezplatform_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(state.fields), _this3.findByFieldId(fieldId))
        };
      }, this.setFormFieldTypeFormFieldValue);
    }
  }, {
    key: "insertSiblingField",
    value: function insertSiblingField(fields, fieldData, siblingFieldId, insertBefore) {
      var besideFieldIndex = fields.findIndex(function (element) {
        return element.id === siblingFieldId;
      });

      if (besideFieldIndex === -1) {
        var message = Translator.trans(
        /*@Desc("Moved field data does not exist.")*/
        'moved.field.data.not.exists', {}, 'form_builder');
        window.eZ.helpers.notification.showErrorNotification(message);
        return fields;
      }

      var insertionIndex = insertBefore ? besideFieldIndex : besideFieldIndex + 1;
      fields.splice(insertionIndex, 0, fieldData);
      return fields;
    }
  }, {
    key: "appendFormField",
    value: function appendFormField(fields, fieldData) {
      fields.push(fieldData);
      return fields;
    }
  }, {
    key: "findByFieldId",
    value: function findByFieldId(fieldId) {
      return function (field) {
        return field.id === fieldId;
      };
    }
  }, {
    key: "getNewFieldName",
    value: function getNewFieldName(name) {
      var index = 1;
      var fields = this.state.fields;

      var generateFieldName = function generateFieldName(name) {
        var isNameUsed = fields.find(function (field) {
          return field.name === name;
        });

        if (!isNameUsed) {
          return name;
        }

        var numbersInName = name.match(/(#)\d+$/);

        if (numbersInName) {
          name = name.substring(0, numbersInName.index).trim();
        }

        index++;
        return generateFieldName("".concat(name, " #").concat(index));
      };

      return generateFieldName(name);
    }
  }, {
    key: "getNewFieldData",
    value: function getNewFieldData(fieldIdentifier) {
      var fieldsConfig = this.props.fieldsConfig;
      var fieldConfig = fieldsConfig.find(function (field) {
        return field.identifier === fieldIdentifier;
      });
      var fieldName = this.getNewFieldName(fieldConfig.name);
      var newField = {
        id: Object(_ezplatform_page_builder_src_bundle_ui_dev_src_modules_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_2__["default"])('fbf-'),
        identifier: fieldConfig.identifier,
        name: fieldName,
        attributes: fieldConfig.attributes.map(function (attr) {
          return {
            id: Object(_ezplatform_page_builder_src_bundle_ui_dev_src_modules_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_2__["default"])('fbfa-'),
            name: attr.id,
            type: attr.type,
            identifier: attr.identifier,
            value: attr.values || attr.defaultValue || ''
          };
        }),
        validators: fieldConfig.validators || []
      };
      return newField;
    }
  }, {
    key: "handleDropSidebarField",
    value: function handleDropSidebarField(_ref) {
      var _this4 = this;

      var siblingFieldId = _ref.siblingFieldId,
          insertBefore = _ref.insertBefore;
      var fieldData = this.getNewFieldData(this.state.draggedFieldData.identifier);

      var initialData = _objectSpread({}, this.props.getInitDragDropState());

      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, initialData), {}, {
          fields: _this4.updateFields(Object(_ezplatform_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(state.fields), fieldData, siblingFieldId, insertBefore)
        });
      }, this.finishDropAction);
    }
  }, {
    key: "handleDropWorkspaceField",
    value: function handleDropWorkspaceField(_ref2) {
      var _this5 = this;

      var siblingFieldId = _ref2.siblingFieldId,
          insertBefore = _ref2.insertBefore;
      var fieldId = this.state.draggedFieldData.id;

      if (fieldId === siblingFieldId) {
        return;
      }

      var initialData = _objectSpread({}, this.props.getInitDragDropState());

      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, initialData), {}, {
          fields: _this5.updateFieldPosition(Object(_ezplatform_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(state.fields), fieldId, siblingFieldId, insertBefore)
        });
      }, this.finishDropAction);
    }
  }, {
    key: "updateFieldPosition",
    value: function updateFieldPosition(fields, fieldId, siblingFieldId, insertBefore) {
      var findCallback = this.findByFieldId(fieldId);
      var fieldData = fields.find(findCallback);

      if (!fieldData) {
        return fields;
      }

      return this.updateFields(Object(_helpers_remove_from_array__WEBPACK_IMPORTED_MODULE_4__["default"])(fields, findCallback), fieldData, siblingFieldId, insertBefore);
    }
  }, {
    key: "updateFields",
    value: function updateFields(fields, fieldData, siblingFieldId, insertBefore) {
      if (siblingFieldId) {
        return this.insertSiblingField(fields, fieldData, siblingFieldId, insertBefore);
      }

      return this.appendFormField(fields, fieldData);
    }
  }, {
    key: "addPlaceholderInZone",
    value: function addPlaceholderInZone(target) {
      this.props.addPlaceholderInZone(target, this.getPlaceholderNodes(), IDENTIFIER_FIELD_DATA_ATTRIBUTE, this.removePlaceholdersWithDelay);
    }
  }, {
    key: "removePlaceholders",
    value: function removePlaceholders() {
      this.props.removePlaceholders(this.getPlaceholderNodes(), this.props.removePlaceholderWithoutAnimation);
    }
  }, {
    key: "removePlaceholdersWithDelay",
    value: function removePlaceholdersWithDelay() {
      this.props.removePlaceholdersAfterTimeout(this.getPlaceholderNodes, this.cancelDraggingState);
    }
  }, {
    key: "getPlaceholderNodes",
    value: function getPlaceholderNodes() {
      return this._refWorkspace.current.querySelectorAll(SELECTOR_PLACEHOLDER);
    }
  }, {
    key: "cancelDraggingState",
    value: function cancelDraggingState() {
      this.setState(function () {
        return _objectSpread({}, nonDraggingState);
      });
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      var placeholder = this.getPlaceholderPreviewNode();

      if (!placeholder) {
        this.finishDropAction();
        return;
      }

      var _placeholder$dataset = placeholder.dataset,
          placeholderPosition = _placeholder$dataset.position,
          siblingFieldId = _placeholder$dataset.ezFieldId;
      var insertBefore = placeholderPosition === 'top';
      var isFieldIdDefined = siblingFieldId && siblingFieldId !== 'undefined';
      var placeholderDropData = {
        insertBefore: insertBefore,
        siblingFieldId: isFieldIdDefined ? siblingFieldId : null,
        isNew: this.state.draggedFromSidebar
      };

      if (this.state.draggedFromSidebar) {
        this.handleDropSidebarField(placeholderDropData);
      } else {
        this.handleDropWorkspaceField(placeholderDropData);
      }
    }
  }, {
    key: "finishDropAction",
    value: function finishDropAction() {
      this.cancelDraggingState();
      this.setFormFieldTypeFormFieldValue();
    }
  }, {
    key: "setFormFieldTypeFormFieldValue",
    value: function setFormFieldTypeFormFieldValue() {
      var changeEvent = new Event('change');
      this.props.fieldValueInput.value = JSON.stringify({
        fields: this.state.fields
      });
      this.props.fieldValueInput.dispatchEvent(changeEvent);
    }
  }, {
    key: "handleElementDragOver",
    value: function handleElementDragOver(_ref3) {
      var target = _ref3.target,
          clientY = _ref3.clientY,
          currentTarget = _ref3.currentTarget;
      var formFieldElement = this.getFormFieldElement(target);
      var isPlaceholder = currentTarget.classList.contains(CLASS_PLACEHOLDER);

      if (!formFieldElement || isPlaceholder || !this.state.isDragging) {
        return;
      }

      var placeholders = this.getPlaceholderNodes();
      var _this$state2 = this.state,
          placeholderPosition = _this$state2.placeholderPosition,
          placeholderElementId = _this$state2.placeholderElementId,
          placeholderZoneId = _this$state2.placeholderZoneId;
      var placeholderMeta = this.props.addPlaceholderBesideElement(formFieldElement, clientY, placeholders, IDENTIFIER_FIELD_DATA_ATTRIBUTE, this.handleElementDragOver, {
        placeholderPosition: placeholderPosition,
        placeholderElementId: placeholderElementId,
        placeholderZoneId: placeholderZoneId
      });
      this.setState(function () {
        return _objectSpread({}, placeholderMeta);
      });
    }
  }, {
    key: "requestFieldConfigForm",
    value: function requestFieldConfigForm(fieldId) {
      this.props.fieldFormRequestConfig.target = fieldId;
      this._refFieldConfigTextarea.value = this.props.fieldValueInput.value;
      this._refFieldConfigIdInput.value = fieldId;
      this.props.fieldFormRequestConfig.submit();
    }
  }, {
    key: "renderSidebarField",
    value: function renderSidebarField(_ref4) {
      var name = _ref4.name,
          identifier = _ref4.identifier,
          thumbnail = _ref4.thumbnail;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_field_sidebar_field__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: identifier,
        name: name,
        type: identifier,
        thumbnail: thumbnail,
        onDragStart: this.handleDragStartSidebarField,
        onDragEnd: this.removePlaceholders
      });
    }
    /**
     * Renders a single tab in the sidebar
     *
     * @method renderSidebarSingleTab
     * @param {string} category
     * @param {boolean} isOpened
     * @returns {React.ReactElement}
     */

  }, {
    key: "renderSidebarSingleTab",
    value: function renderSidebarSingleTab(category, isOpened) {
      var categoryFormFields = this.state.fieldsConfigByCategory[category];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tab_tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: category,
        title: category,
        isOpened: isOpened
      }, categoryFormFields.map(this.renderSidebarField));
    }
    /**
     * Renders the sidebar tabs
     *
     * @method renderSidebarTabs
     * @returns {React.ReactElement[]}
     */

  }, {
    key: "renderSidebarTabs",
    value: function renderSidebarTabs() {
      var _this6 = this;

      var fieldsConfigByCategory = this.state.fieldsConfigByCategory;
      return Object.keys(fieldsConfigByCategory).map(function (category, index) {
        return _this6.renderSidebarSingleTab(category, index === 0);
      });
    }
  }, {
    key: "getFieldsState",
    value: function getFieldsState() {
      return Object(_ezplatform_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(this.state.fields);
    }
  }, {
    key: "updateFieldValue",
    value: function updateFieldValue(fieldData) {
      var fields = this.getFieldsState().map(function (field) {
        return field.id === fieldData.id ? _objectSpread({}, fieldData) : _objectSpread({}, field);
      });
      this.setState(function () {
        return {
          fields: fields
        };
      }, this.setFormFieldTypeFormFieldValue);
    }
  }, {
    key: "checkCanSetFieldName",
    value: function checkCanSetFieldName(_ref5) {
      var id = _ref5.id,
          value = _ref5.value,
          successCallback = _ref5.successCallback,
          errorCallback = _ref5.errorCallback;
      var isNameUsed = this.state.fields.find(function (field) {
        return field.name === value && field.id !== id;
      });

      if (isNameUsed) {
        return errorCallback();
      }

      successCallback();
    }
  }, {
    key: "updateFieldNameValue",
    value: function updateFieldNameValue(fieldId, name) {
      var fields = this.getFieldsState().map(function (field) {
        return field.id === fieldId ? _objectSpread(_objectSpread({}, field), {}, {
          name: name
        }) : _objectSpread({}, field);
      });
      this.setState(function () {
        return {
          fields: fields
        };
      }, this.setFormFieldTypeFormFieldValue);
    }
  }, {
    key: "markInvalidFields",
    value: function markInvalidFields(invalidFields) {
      this.setState(function () {
        return {
          invalidFields: invalidFields
        };
      });
    }
  }, {
    key: "checkIsFieldInvalid",
    value: function checkIsFieldInvalid(field) {
      return !!this.state.invalidFields.find(function (invalidField) {
        return invalidField.id === field.id;
      });
    }
  }, {
    key: "renderFormField",
    value: function renderFormField(config) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_field_form_field__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
        key: config.id
      }, config, {
        fieldName: eZ.formBuilder.config.fieldsConfig.find(function (data) {
          return data.identifier === config.identifier;
        }).name,
        onRemove: this.removeFieldFromFieldsState,
        onDragOver: this.handleElementDragOver,
        onDragStart: this.handleDragStartFormField,
        onDragEnd: this.removePlaceholders,
        onConfigPopupOpened: this.requestFieldConfigForm,
        onFieldDataUpdate: this.updateFieldValue,
        onNameChange: this.updateFieldNameValue,
        checkCanSetFieldName: this.checkCanSetFieldName,
        isInvalid: this.checkIsFieldInvalid(config)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          fields = _this$state3.fields,
          isDragging = _this$state3.isDragging;
      var showEmptyMessage = !fields.length && !isDragging;
      var workspaceClassName = CLASS_WORKSPACE;
      var emptyMessage = Translator.trans(
      /*@Desc("Create a form by dragging elements here")*/
      'drag.drop.call.to.action', {}, 'form_builder');

      if (showEmptyMessage) {
        workspaceClassName = "".concat(workspaceClassName, " ").concat(CLASS_WORKSPACE, "--empty");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-form-builder"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-form-builder__sidebar-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-form-builder__sidebar"
      }, this.renderSidebarTabs())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: workspaceClassName,
        "data-empty-message": emptyMessage,
        ref: this._refWorkspace,
        "data-ez-zone-id": ZONE_ID,
        onDrop: this.handleDrop,
        onDragOver: this.handleZoneDragOver
      }, fields.map(this.renderFormField)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-form-builder__popup-container"
      }));
    }
  }]);

  return FormBuilder;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

FormBuilder.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    fields: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
  }),
  fieldValueInput: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired,
  fieldFormRequestConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired,
  fieldsConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    attributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    category: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    identifier: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })),
  getElement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getInitDragDropState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  addPlaceholderInZone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  addPlaceholderBesideElement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  removePlaceholders: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  removePlaceholdersAfterTimeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  removePlaceholderWithoutAnimation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
FormBuilder.defaultProps = {
  title: 'Form Builder deafultProps'
};
/* harmony default export */ __webpack_exports__["default"] = (FormBuilder);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/helpers/remove.from.array.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/helpers/remove.from.array.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var removeFromArray = function removeFromArray(fields, callback) {
  var fieldIndex = fields.findIndex(callback);

  if (fieldIndex !== -1) {
    fields.splice(fieldIndex, 1);
  }

  return fields;
};

/* harmony default export */ __webpack_exports__["default"] = (removeFromArray);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form.builder.module.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form.builder.module.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_builder_form_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-builder/form.builder */ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form-builder/form.builder.js");
/* harmony import */ var _ezplatform_page_builder_src_bundle_ui_dev_src_modules_core_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../ezplatform-page-builder/src/bundle/ui-dev/src/modules/core/drag.drop */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/core/drag.drop.js");
/* harmony import */ var _ezplatform_page_builder_src_bundle_ui_dev_src_modules_page_builder_components_error_boundary_error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary.js");
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






var FormBuilderModule = /*#__PURE__*/function (_PureComponent) {
  _inherits(FormBuilderModule, _PureComponent);

  var _super = _createSuper(FormBuilderModule);

  function FormBuilderModule(props) {
    var _this;

    _classCallCheck(this, FormBuilderModule);

    _this = _super.call(this, props);
    _this._refFormBuilder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.markInvalidFields = _this.markInvalidFields.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FormBuilderModule, [{
    key: "markInvalidFields",
    value: function markInvalidFields(fields) {
      return this._refFormBuilder.current.markInvalidFields(fields);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_page_builder_src_bundle_ui_dev_src_modules_page_builder_components_error_boundary_error_boundary__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ezplatform_page_builder_src_bundle_ui_dev_src_modules_core_drag_drop__WEBPACK_IMPORTED_MODULE_2__["default"], {
        render: function render(methods) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_builder_form_builder__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
            ref: _this2._refFormBuilder
          }, _this2.props, methods));
        }
      }));
    }
  }]);

  return FormBuilderModule;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (FormBuilderModule);
eZ.addConfig('modules.FormBuilder', FormBuilderModule);

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

/***/ 134:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/submission.details.js ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/resize.form.preview.js ./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form.builder.module.js ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/fieldType/ezform.js ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/form.builder.create.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/submission.details.js */"./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/submission.details.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/resize.form.preview.js */"./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/resize.form.preview.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form.builder.module.js */"./vendor/ezsystems/ezplatform-form-builder/src/bundle/ui-dev/src/modules/form.builder.module.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/fieldType/ezform.js */"./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/fieldType/ezform.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/form.builder.create.js */"./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/form.builder.create.js");


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

},[[134,"runtime"]]]);