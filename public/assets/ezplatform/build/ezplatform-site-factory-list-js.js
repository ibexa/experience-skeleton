(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-site-factory-list-js"],{

/***/ "./public/bundles/ezplatformadminui/js/scripts/button.state.toggle.js":
/*!****************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/button.state.toggle.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var toggleForms = doc.querySelectorAll('.ez-toggle-btn-state');
  toggleForms.forEach(function (toggleForm) {
    var checkboxes = _toConsumableArray(toggleForm.querySelectorAll('.ez-table__cell.ez-table__cell--has-checkbox input[type="checkbox"]'));

    var buttonRemove = doc.querySelector(toggleForm.dataset.toggleButtonId);

    if (!buttonRemove) {
      return;
    }

    var toggleButtonState = function toggleButtonState() {
      var isAnythingSelected = checkboxes.some(function (el) {
        return el.checked;
      });
      buttonRemove.disabled = !isAnythingSelected;
    };

    toggleButtonState();
    checkboxes.forEach(function (checkbox) {
      return checkbox.addEventListener('change', toggleButtonState, false);
    });
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/list.modal.delete.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/list.modal.delete.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var deleteButtons = doc.querySelectorAll('.ez-btn--delete:not(:disabled)');
  var siteIdInput = doc.querySelector('#site_delete_site');

  var changeDeleteId = function changeDeleteId(event) {
    var siteId = event.currentTarget.dataset.siteId;
    siteIdInput.value = siteId;
  };

  deleteButtons.forEach(function (btn) {
    return btn.addEventListener('click', changeDeleteId);
  });
})(window, window.document, window.eZ);

/***/ }),

/***/ 144:
/*!*********************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/list.modal.delete.js ./public/bundles/ezplatformadminui/js/scripts/button.state.toggle.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/list.modal.delete.js */"./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/list.modal.delete.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/button.state.toggle.js */"./public/bundles/ezplatformadminui/js/scripts/button.state.toggle.js");


/***/ })

},[[144,"runtime"]]]);