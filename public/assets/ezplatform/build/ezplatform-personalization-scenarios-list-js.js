(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-personalization-scenarios-list-js"],{

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.list.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.list.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (doc, eZ) {
  var scenarioForm = doc.querySelector('.ez-scenario-form');
  var periodSelect = doc.querySelector('.ez-scenario-form__period');

  if (periodSelect) {
    periodSelect.addEventListener('change', function () {
      var dateIntervalInput = scenarioForm.querySelector('input[name="scenario-form[period][date_interval]"]');
      dateIntervalInput.value = event.currentTarget.value;
      scenarioForm.submit();
    }, false);
  }
})(window.document, window.eZ);

/***/ }),

/***/ 66:
/*!************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.list.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.list.js */"./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.list.js");


/***/ })

},[[66,"runtime"]]]);