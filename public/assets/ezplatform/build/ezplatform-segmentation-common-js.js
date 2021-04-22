(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-segmentation-common-js"],{

/***/ "./public/bundles/ezplatformadminui/js/scripts/button.state.toggle.js":
/*!****************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/button.state.toggle.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

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

/***/ "./vendor/ezsystems/ezplatform-segmentation/src/bundle/Resources/public/js/add.segment.group.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-segmentation/src/bundle/Resources/public/js/add.segment.group.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var addSegmentTable = doc.querySelector('.ez-table--add-segments');

  if (!addSegmentTable) {
    return;
  }

  var lastIndex = 0;
  var addButton = doc.querySelector('.ez-table-header--add-segments .ez-btn--add');
  var removeButton = doc.querySelector('.ez-table-header--add-segments .ez-btn--remove');

  var addSegment = function addSegment() {
    var index = lastIndex++;
    var template = addSegmentTable.dataset.template;
    var tbodyFragment = doc.createElement('tbody');
    var renderedTemplate = template.replace(/__name__/g, index);
    tbodyFragment.insertAdjacentHTML('beforeend', renderedTemplate);
    var tr = tbodyFragment.querySelector('tr');
    tr.querySelector('.ez-input--checkbox').addEventListener('change', function () {
      var isCheckboxSelected = _toConsumableArray(addSegmentTable.querySelectorAll('.ez-input--checkbox')).some(function (checkbox) {
        return checkbox.checked;
      });

      var methodName = isCheckboxSelected ? 'removeAttribute' : 'setAttribute';
      removeButton[methodName]('disabled', 'disabled');
    }, false);
    addSegmentTable.querySelector('tbody').appendChild(tr);
  };

  var removeSegments = function removeSegments() {
    var selectedSegments = addSegmentTable.querySelectorAll('.ez-input--checkbox:checked');
    selectedSegments.forEach(function (selectedSegment) {
      return selectedSegment.closest('tr').remove();
    });
    removeButton.setAttribute('disabled', 'disabled');
  };

  addButton.addEventListener('click', addSegment, false);
  removeButton.addEventListener('click', removeSegments, false);
})(window, window.document);

/***/ }),

/***/ 149:
/*!*********************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-segmentation/src/bundle/Resources/public/js/add.segment.group.js ./public/bundles/ezplatformadminui/js/scripts/button.state.toggle.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-segmentation/src/bundle/Resources/public/js/add.segment.group.js */"./vendor/ezsystems/ezplatform-segmentation/src/bundle/Resources/public/js/add.segment.group.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/button.state.toggle.js */"./public/bundles/ezplatformadminui/js/scripts/button.state.toggle.js");


/***/ })

},[[149,"runtime"]]]);