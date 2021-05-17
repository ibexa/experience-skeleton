(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-personalization-model-details-js"],{

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/model.details.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/model.details.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (doc, eZ) {
  var submodelSelect = doc.querySelector('.ez-submodel-select');

  var handleSubmodelChange = function handleSubmodelChange(event) {
    var _event$currentTarget = event.currentTarget,
        value = _event$currentTarget.value,
        parentNode = _event$currentTarget.parentNode;
    parentNode.querySelectorAll('.ez-submodel').forEach(function (node) {
      var method = node.classList.contains("ez-submodel--".concat(value)) ? 'remove' : 'add';
      node.classList[method]('d-none');
    });
  };

  if (submodelSelect) {
    submodelSelect.addEventListener('change', handleSubmodelChange, true);
  }
})(window.document, window.eZ);

/***/ }),

/***/ 70:
/*!***********************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/model.details.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/model.details.js */"./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/model.details.js");


/***/ })

},[[70,"runtime"]]]);