(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezcommerce-admin-ui-configuration-settings-js"],{

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

/***/ "./vendor/ezsystems/ezcommerce-shop/src/Silversolutions/Bundle/EshopBundle/Resources/public/js/configuration.settings.configuration.fields.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-shop/src/Silversolutions/Bundle/EshopBundle/Resources/public/js/configuration.settings.configuration.fields.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var DROPDOWN_SELECTOR = '.ez-custom-dropdown';
  var addItemButtons = doc.querySelectorAll('.ez-configuration-field-array .ez-btn--add-input');
  var removeItemButtons = doc.querySelectorAll('.ez-configuration-field-array .ez-btn--trash');

  var togglers = _toConsumableArray(doc.querySelectorAll('.ez-configuration-field--boolean .ez-data-source__label'));

  var toggleCheckbox = function toggleCheckbox(event) {
    event.currentTarget.classList.toggle('is-checked');
    var isChecked = event.currentTarget.classList.contains('is-checked');
    event.currentTarget.closest('.ez-data-source').querySelector(".form-check-input[value=\"".concat(isChecked, "\"]")).setAttribute('checked', 'checked');
    event.currentTarget.closest('.ez-data-source').querySelector(".form-check-input[value=\"".concat(!isChecked, "\"]")).removeAttribute('checked');
  };

  var removeInputItem = function removeInputItem(event) {
    event.currentTarget.closest('.ez-configuration-field-array__item').remove();
  };

  var addInputItem = function addInputItem(event) {
    var itemsWrapper = event.currentTarget.closest('.ez-configuration-field-array').querySelector('.ez-configuration-field-array__items');
    var widget = itemsWrapper.dataset.prototype;
    var htmlWidget = doc.createRange().createContextualFragment(widget);
    itemsWrapper.append(htmlWidget);
    itemsWrapper.querySelector('.ez-configuration-field-array__item:last-child .ez-btn--trash').addEventListener('click', removeInputItem, false);
    doc.querySelectorAll(DROPDOWN_SELECTOR).forEach(function (container) {
      var dropdown = new eZ.core.CustomDropdown({
        container: container,
        itemsContainer: container.querySelector('.ez-custom-dropdown__items'),
        sourceInput: container.querySelector('.ez-custom-dropdown__source-input')
      });
      dropdown.init();
    });
  };

  togglers.forEach(function (button) {
    return button.addEventListener('click', toggleCheckbox, false);
  });
  addItemButtons.forEach(function (button) {
    return button.addEventListener('click', addInputItem, false);
  });
  removeItemButtons.forEach(function (button) {
    return button.addEventListener('click', removeInputItem, false);
  });
  doc.querySelectorAll(DROPDOWN_SELECTOR).forEach(function (container) {
    var dropdown = new eZ.core.CustomDropdown({
      container: container,
      itemsContainer: container.querySelector('.ez-custom-dropdown__items'),
      sourceInput: container.querySelector('.ez-custom-dropdown__source-input')
    });
    dropdown.init();
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezcommerce-shop/src/Silversolutions/Bundle/EshopBundle/Resources/public/js/configuration.settings.group.toggle.js":
/*!********************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-shop/src/Silversolutions/Bundle/EshopBundle/Resources/public/js/configuration.settings.group.toggle.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var togglers = _toConsumableArray(doc.querySelectorAll('.ez-card__body-display-toggler'));

  var toggleFieldTypeView = function toggleFieldTypeView(event) {
    event.preventDefault();
    var group = event.currentTarget.closest('.ez-card--commerce-configuration-group');

    if (group.classList.contains('ez-card--collapsed')) {
      var activePanel = group.closest('.tab-pane');
      var notCollapsedGroup = activePanel.querySelector('.ez-card--commerce-configuration-group:not(.ez-card--collapsed)');

      if (notCollapsedGroup) {
        notCollapsedGroup.classList.add('ez-card--collapsed');
      }
    }

    group.classList.toggle('ez-card--collapsed');
  };

  togglers.forEach(function (button) {
    return button.addEventListener('click', toggleFieldTypeView, false);
  });
})(window, window.document);

/***/ }),

/***/ 83:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./public/bundles/ezplatformadminui/js/scripts/admin.location.tab.js ./vendor/ezsystems/ezcommerce-shop/src/Silversolutions/Bundle/EshopBundle/Resources/public/js/configuration.settings.group.toggle.js ./vendor/ezsystems/ezcommerce-shop/src/Silversolutions/Bundle/EshopBundle/Resources/public/js/configuration.settings.configuration.fields.js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/admin.location.tab.js */"./public/bundles/ezplatformadminui/js/scripts/admin.location.tab.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezcommerce-shop/src/Silversolutions/Bundle/EshopBundle/Resources/public/js/configuration.settings.group.toggle.js */"./vendor/ezsystems/ezcommerce-shop/src/Silversolutions/Bundle/EshopBundle/Resources/public/js/configuration.settings.group.toggle.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezcommerce-shop/src/Silversolutions/Bundle/EshopBundle/Resources/public/js/configuration.settings.configuration.fields.js */"./vendor/ezsystems/ezcommerce-shop/src/Silversolutions/Bundle/EshopBundle/Resources/public/js/configuration.settings.configuration.fields.js");


/***/ })

},[[83,"runtime"]]]);