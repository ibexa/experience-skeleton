(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezcommerce-checkout-core-basket-page-js"],{

/***/ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/basket.page.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/basket.page.js ***!
  \*************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addConfig */ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/helpers/addConfig.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



(function (global, doc) {
  var BasketPage = /*#__PURE__*/function () {
    function BasketPage() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, BasketPage);

      this.container = config.container;

      if (!this.container) {
        console.error('No container delivered for BasketWidget!');
        return;
      }
    }

    _createClass(BasketPage, [{
      key: "removeProduct",
      value: function removeProduct() {}
    }, {
      key: "updateBasket",
      value: function updateBasket() {}
    }, {
      key: "bindRemoveEvents",
      value: function bindRemoveEvents() {
        var _this = this;

        this.container.querySelectorAll('.ezcommerce-js--remove-product').forEach(function (button) {
          return button.addEventListener('click', _this.removeProduct.bind(_this), false);
        });
      }
    }, {
      key: "bindUpdateEvent",
      value: function bindUpdateEvent() {
        var updateButton = this.container.querySelector('.ezcommerce-js--update-basket');

        if (updateButton) {
          updateButton.addEventListener('click', this.updateBasket.bind(this), false);
        }
      }
    }, {
      key: "bindChangeQuantityEvent",
      value: function bindChangeQuantityEvent() {
        var _this2 = this;

        this.container.querySelectorAll('.ezcommerce-js--quantity').forEach(function (input) {
          return input.addEventListener('change', _this2.onChangeQuantity.bind(_this2), false);
        });
      }
    }, {
      key: "onChangeQuantity",
      value: function onChangeQuantity(event) {
        if (event.target.value < 1) {
          event.target.value = 1;
        }
      }
    }, {
      key: "bindEvents",
      value: function bindEvents() {
        this.bindRemoveEvents();
        this.bindUpdateEvent();
        this.bindChangeQuantityEvent();
      }
    }, {
      key: "init",
      value: function init() {
        this.bindEvents();
      }
    }]);

    return BasketPage;
  }();

  Object(_helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__["default"])('eshop.widgets.BasketPage', BasketPage);
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/helpers/addConfig.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/helpers/addConfig.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (path, value) {
  var keys = path.split('.');
  var lastIndex = keys.length - 1;
  window.ibexa = window.ibexa || {};
  keys.reduce(function (currentObject, key, index) {
    if (index === lastIndex) {
      currentObject[key] = value;
      return;
    }

    if (currentObject[key] === undefined) {
      currentObject[key] = {};
    }

    return currentObject[key];
  }, window.ibexa);
});

/***/ }),

/***/ 88:
/*!*******************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/basket.page.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/basket.page.js */"./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/basket.page.js");


/***/ })

},[[88,"runtime"]]]);