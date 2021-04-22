(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-form-builder-submissions-tab-js"],{

/***/ "./public/bundles/ezplatformadminui/js/scripts/admin.location.change.language.js":
/*!***************************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/admin.location.change.language.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var changeLocationLanguage = function changeLocationLanguage(event) {
    global.location = event.currentTarget.value;
  };

  var locationLanguageSwitchers = doc.querySelectorAll('.ez-location-language-change');
  locationLanguageSwitchers.forEach(function (locationLanguageSwitcher) {
    locationLanguageSwitcher.addEventListener('change', changeLocationLanguage, false);
  });
})(window, window.document);

/***/ }),

/***/ 133:
/*!*********************************************************************************************!*\
  !*** multi ./public/bundles/ezplatformadminui/js/scripts/admin.location.change.language.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/admin.location.change.language.js */"./public/bundles/ezplatformadminui/js/scripts/admin.location.change.language.js");


/***/ })

},[[133,"runtime"]]]);