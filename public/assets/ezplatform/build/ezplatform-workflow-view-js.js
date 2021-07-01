(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-workflow-view-js"],{

/***/ "./public/bundles/ezplatformadminui/js/scripts/admin.location.tab.js":
/*!***************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/admin.location.tab.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, $) {
  $(".ez-tabs a[href=\"#".concat(global.location.hash.split('#')[1], "\"]")).tab('show'); // Change hash for page-reload

  $('.ez-tabs a').on('shown.bs.tab', function (event) {
    global.location.hash = "".concat(event.target.hash, "#tab");
  });
})(window, window.document, window.jQuery);

/***/ }),

/***/ 54:
/*!*********************************************************************************!*\
  !*** multi ./public/bundles/ezplatformadminui/js/scripts/admin.location.tab.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/admin.location.tab.js */"./public/bundles/ezplatformadminui/js/scripts/admin.location.tab.js");


/***/ })

},[[54,"runtime"]]]);