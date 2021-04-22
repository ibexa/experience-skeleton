(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-page-builder-edit-js"],{

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.edit.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.edit.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (doc, React, ReactDOM, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezlandingpage';
  var pageBuilderContainer = doc.querySelector('#ez-page-builder-root'); // eslint-disable-next-line

  var infobar = new eZ.modules.InfoBar(); // eslint-disable-next-line

  var pageBuilder = ReactDOM.render(React.createElement(eZ.modules.PageBuilder, eZ.pageBuilder.config), pageBuilderContainer);
  var validator = new eZ.EzLandingPageValidator({
    classInvalid: 'is-invalid',
    pageBuilder: pageBuilder,
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: '#ezplatform_content_forms_content_edit_fieldsData_page_value',
      eventName: 'change',
      callback: 'validateInput',
      errorNodeSelectors: ['.ez-field-edit__label-wrapper']
    }]
  });
  validator.init();
  eZ.fieldTypeValidators = eZ.fieldTypeValidators ? [].concat(_toConsumableArray(eZ.fieldTypeValidators), [validator]) : [validator];
})(window.document, window.React, window.ReactDOM, window.eZ);

/***/ }),

/***/ 99:
/*!************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.edit.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.edit.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.edit.js");


/***/ })

},[[99,"runtime"]]]);