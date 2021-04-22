(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezcommerce-shop-design-product-variants-b2c-widgets-js"],{

/***/ "./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/design/product.variants.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/design/product.variants.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function (global, doc, ibexa) {
  var Product = /*#__PURE__*/function (_ibexa$eshop$widgets$) {
    "use strict";

    _inherits(Product, _ibexa$eshop$widgets$);

    var _super = _createSuper(Product);

    function Product() {
      _classCallCheck(this, Product);

      return _super.apply(this, arguments);
    }

    _createClass(Product, [{
      key: "updateContainer",
      value: function updateContainer(_ref) {
        var container = _ref.container,
            template = _ref.template,
            response = _ref.response;
        var _response$get_Product = response.get_ProductInformation,
            priceData = _response$get_Product.priceData,
            stockData = _response$get_Product.stockData;
        var newTemplate = template;
        var shouldRemoveAvailability = false;

        if (priceData.price) {
          newTemplate = newTemplate.replace('{{ stock }}', stockData.stockNumeric || 0).replace('{{ price_label }}', 'Price:').replace('{{ price_value }}', priceData.price.formattedPrice);
        } else {
          newTemplate = newTemplate.replace('{{ price_label }}', 'Price from:').replace('{{ price_value }}', priceData.minPrice.formattedPrice);
          shouldRemoveAvailability = true;
        }

        container.innerHTML = newTemplate;

        if (shouldRemoveAvailability) {
          container.querySelector('.ezcommerce-product__product-availability').remove();
        }

        return {
          container: container,
          template: template,
          response: response
        };
      }
    }]);

    return Product;
  }(ibexa.eshop.widgets.ProductVariants);

  var product = new Product({
    sku: doc.querySelector('input[name="ses_basket[0][sku]"]').value
  });
  product.init();
})(window, window.document, window.ibexa);

/***/ }),

/***/ 95:
/*!*************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/design/product.variants.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/design/product.variants.js */"./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/design/product.variants.js");


/***/ })

},[[95,"runtime"]]]);