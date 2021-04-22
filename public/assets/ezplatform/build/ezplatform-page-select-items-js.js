(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-page-select-items-js"],{

/***/ "./vendor/ezsystems/ezplatform-page-fieldtype/src/bundle/Resources/public/js/page-select-items.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-fieldtype/src/bundle/Resources/public/js/page-select-items.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, eZ, Translator) {
  var toggleItemSelect = function toggleItemSelect(event) {
    var itemCheckbox = event.currentTarget;
    var groupContent = itemCheckbox.closest('.ez-page-select-items__group-content');
    var itemClassMethod = itemCheckbox.checked ? 'add' : 'remove';
    itemCheckbox.closest('.ez-page-select-items__item').classList[itemClassMethod]('ez-page-select-items__item--selected');
    updateGroupHeader(groupContent);
  };

  var toggleGroupItemsSelect = function toggleGroupItemsSelect(event) {
    var actionCheckbox = event.currentTarget;
    var groupContent = actionCheckbox.closest('.ez-page-select-items__group-content');
    var itemClassMethod = actionCheckbox.checked ? 'add' : 'remove';
    groupContent.querySelectorAll('.ez-page-select-items__items-list .ez-input--checkbox').forEach(function (itemCheckbox) {
      itemCheckbox.checked = actionCheckbox.checked;
      itemCheckbox.closest('.ez-page-select-items__item').classList[itemClassMethod]('ez-page-select-items__item--selected');
    });
    updateGroupHeader(groupContent);
  };

  var updateGroupHeader = function updateGroupHeader(container) {
    container.querySelectorAll('.ez-page-select-items__select-all-items').forEach(function (checkbox) {
      var group = checkbox.closest('.ez-page-select-items__group-content');
      var warningNode = group.querySelector('.ez-page-select-items__group-warning');
      var actionLabelNode = group.querySelector('.ez-page-select-items__group-action-label');
      var actionCheckboxNode = group.querySelector('.ez-page-select-items__select-all-items');

      var isAnyBlockUnchecked = _toConsumableArray(group.querySelectorAll('.ez-page-select-items__items-list .ez-input--checkbox')).some(function (checkbox) {
        return !checkbox.checked;
      });

      var warningClassMethod = isAnyBlockUnchecked ? 'remove' : 'add';

      if (isAnyBlockUnchecked) {
        actionCheckboxNode.checked = false;
        actionLabelNode.innerHTML = Translator.trans(
        /*@Desc("Select all")*/
        'item.select_all', {}, 'ezplatform_page_fieldtype');
      } else {
        actionCheckboxNode.checked = true;
        actionLabelNode.innerHTML = Translator.trans(
        /*@Desc("Unselect all")*/
        'item.unselect_all', {}, 'ezplatform_page_fieldtype');
      }

      if (warningNode) {
        warningNode.classList[warningClassMethod]('ez-page-select-items__group-warning--hidden');
      }
    });
  };

  doc.querySelectorAll('.ez-page-select-items__select-all-items').forEach(function (groupCheckbox) {
    groupCheckbox.addEventListener('change', toggleGroupItemsSelect, false);
  });
  doc.querySelectorAll('.ez-page-select-items__item .ez-input--checkbox').forEach(function (itemCheckbox) {
    itemCheckbox.addEventListener('change', toggleItemSelect, false);
  });
})(window, window.document, window.eZ, window.Translator);

/***/ }),

/***/ 129:
/*!**************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-page-fieldtype/src/bundle/Resources/public/js/page-select-items.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-fieldtype/src/bundle/Resources/public/js/page-select-items.js */"./vendor/ezsystems/ezplatform-page-fieldtype/src/bundle/Resources/public/js/page-select-items.js");


/***/ })

},[[129,"runtime"]]]);