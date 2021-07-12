(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezcommerce-shop-core-product-widgets-js"],{

/***/ "./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/accordion.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/accordion.js ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addConfig */ "./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/helpers/addConfig.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



(function (global, doc, eZ) {
  var Accordion = /*#__PURE__*/function () {
    function Accordion() {
      _classCallCheck(this, Accordion);
    }

    _createClass(Accordion, [{
      key: "attachEvents",
      value: function attachEvents() {
        var _this = this;

        this.accordionNodes.forEach(function (accordionNode) {
          accordionNode.querySelectorAll('.ezcommerce-accordion__navigation-label').forEach(function (navigation) {
            navigation.addEventListener('click', _this.toggle, false);
          });
        });
      }
    }, {
      key: "toggle",
      value: function toggle(event) {
        event.preventDefault();
        var container = event.currentTarget.closest('.ezcommerce-accordion');
        var targetSelector = event.currentTarget.dataset.targetSelector;
        var actionNode = container.querySelector(targetSelector);
        actionNode.classList.toggle('ezcommerce-accordion__navigation-content--expanded');
      }
    }, {
      key: "init",
      value: function init(accordionSelector) {
        this.accordionNodes = doc.querySelectorAll(accordionSelector);
        this.attachEvents();
      }
    }]);

    return Accordion;
  }();

  Object(_helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__["default"])('eshop.widgets.Accordion', Accordion);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.js ***!
  \********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addConfig */ "./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/helpers/addConfig.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



(function (global, doc) {
  var Product = /*#__PURE__*/function () {
    function Product() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Product);

      this.messageDelay = config.messageDelay || 4000;
      this.storedBasketMessageTimeout = null;
    }

    _createClass(Product, [{
      key: "setElements",
      value: function setElements() {
        this.userState = doc.querySelector('.ezcommerce-js--user-state');
        this.quantity = doc.querySelector('.ezcommerce-js--quantity');
        this.addBasketButton = doc.querySelector('.ezcommerce-js--btn-add-to-basket');
        this.addStoredBasketButton = doc.querySelector('.ezcommerce-js--btn-add-to-stored-basket');
        this.addWishlistButton = doc.querySelector('.ezcommerce-js--btn-add-to-wishlist');
        this.addCompareButton = doc.querySelector('.ezcommerce-js--btn-add-to-compare');
        this.confirmStoredBasketButton = doc.querySelector('.ezcommerce-js--btn-confirm-stored-basket');
        this.storedBasketsNode = doc.querySelector('.ezcommerce-product__stored-baskets');
        this.storedBasketsListNode = doc.querySelector('.ezcommerce-product__stored-baskets-list');
        this.storedBasketsListContainerNode = doc.querySelector('.ezcommerce-product__stored-baskets-list-container');
        this.storedBasketsInputContainerNode = doc.querySelector('.ezcommerce-product__stored-baskets-input-container');
        this.skuInput = doc.querySelector('.ezcommerce-js--sku');
        this.storedBasketInput = doc.querySelector('.ezcommerce-product__input--stored-basket');
        this.newStoredBasketInput = doc.querySelector('.ezcommerce-product__input--new-stored-basket');
        this.storedBasketMessageNode = doc.querySelector('.ezcommerce-product__stored-baskets-messages');
      }
    }, {
      key: "isAnonymous",
      value: function isAnonymous() {
        return !!parseInt(this.userState.dataset.isAnonymous, 10);
      }
    }, {
      key: "checkDatasetExistance",
      value: function checkDatasetExistance() {
        if (this.quantity.dataset.ezcommerceMinQuantity === undefined) {
          console.error('data-ezcommerce-min-quantity on .ezcommerce-js--quantity is not set!');
        }
      }
    }, {
      key: "checkQuantity",
      value: function checkQuantity() {
        return parseInt(this.quantity.dataset.ezcommerceMinQuantity, 10) <= this.quantity.value;
      }
    }, {
      key: "checkSubmitState",
      value: function checkSubmitState() {
        return this.checkQuantity();
      }
    }, {
      key: "checkStoredBasketState",
      value: function checkStoredBasketState() {
        return this.checkQuantity() && !this.isAnonymous();
      }
    }, {
      key: "checkWishlistState",
      value: function checkWishlistState() {
        return !this.isAnonymous();
      }
    }, {
      key: "checkCompareState",
      value: function checkCompareState() {
        return true;
      }
    }, {
      key: "toggleSubmitState",
      value: function toggleSubmitState() {
        this.addBasketButton.toggleAttribute('disabled', !this.checkSubmitState());
        this.addStoredBasketButton.toggleAttribute('disabled', !this.checkStoredBasketState());
        this.addWishlistButton.toggleAttribute('disabled', !this.checkWishlistState());
        this.addCompareButton.toggleAttribute('disabled', !this.checkCompareState());
      }
    }, {
      key: "onSubmit",
      value: function onSubmit() {}
    }, {
      key: "transformRequest",
      value: function transformRequest(response) {
        if (!response.ok) {
          throw response;
        }

        return response.json();
      }
    }, {
      key: "fetchStoredBasketsList",
      value: function fetchStoredBasketsList() {
        var _this = this;

        if (this.addStoredBasketButton.classList.contains('ezcommerce-product__basket-button--expanded')) {
          this.storedBasketsNode.classList.remove('ezcommerce-product__stored-baskets--expanded');
          this.addStoredBasketButton.classList.remove('ezcommerce-product__basket-button--expanded');
          this.storedBasketsInputContainerNode.classList.remove('ezcommerce-product__stored-baskets-input-container--visible');
          this.storedBasketsListContainerNode.classList.remove('ezcommerce-product__stored-baskets-list-container--visible');
          this.storedBasketsListNode.innerHTML = '';
          return;
        }

        var itemTemplate = this.addStoredBasketButton.dataset.itemTemplate;
        var request = new Request('/stored_baskets/list_data', {
          method: 'GET',
          mode: 'same-origin',
          credentials: 'same-origin'
        });
        fetch(request).then(this.transformRequest).then(function (response) {
          _this.storedBasketsNode.classList.add('ezcommerce-product__stored-baskets--expanded');

          _this.addStoredBasketButton.classList.add('ezcommerce-product__basket-button--expanded');

          if (response.messageType === 'error') {
            _this.showStoredBasketMessage({
              message: response.message,
              type: 'error'
            });
          } else {
            _this.storedBasketsInputContainerNode.classList.add('ezcommerce-product__stored-baskets-input-container--visible');

            _this.storedBasketsListContainerNode.classList.toggle('ezcommerce-product__stored-baskets-list-container--visible', response.storedBasketsList.length);

            _this.storedBasketsListNode.innerHTML = '';
            response.storedBasketsList.forEach(function (storedBasket) {
              var renderedTemplate = itemTemplate.replaceAll('{{ stored_basket_name }}', storedBasket);

              _this.storedBasketsListNode.insertAdjacentHTML('beforeend', renderedTemplate);
            });
            doc.querySelectorAll('.ezcommerce-product__stored-baskets-list-item').forEach(function (listItem) {
              listItem.addEventListener('click', _this.setExistingStoredBasket.bind(_this), false);
            });
          }
        });
      }
    }, {
      key: "setExistingStoredBasket",
      value: function setExistingStoredBasket(event) {
        event.preventDefault();
        var storedBasketName = event.currentTarget.dataset.storedBasketName;
        this.addToStoredBasket(storedBasketName).then(this.addToStoredBasketCallback.bind(this));
        this.newStoredBasketInput.value = '';
      }
    }, {
      key: "setNewStoredBasket",
      value: function setNewStoredBasket(event) {
        event.preventDefault();

        if (this.newStoredBasketInput.value) {
          this.addToStoredBasket(this.newStoredBasketInput.value).then(this.addToStoredBasketCallback.bind(this));
        }
      }
    }, {
      key: "addToStoredBasketCallback",
      value: function addToStoredBasketCallback(response) {
        if (response.messages.success || response.messages.notice) {
          this.fetchStoredBasketsList();
        }
      }
    }, {
      key: "addToStoredBasketRequestExec",
      value: function addToStoredBasketRequestExec(request) {
        var _this2 = this;

        return fetch(request).then(this.transformRequest).then(function (response) {
          if (response.messages.success) {
            _this2.showStoredBasketMessage({
              message: response.messages.success,
              type: 'success'
            });
          } else if (response.messages.notice) {
            _this2.showStoredBasketMessage({
              message: response.messages.notice,
              type: 'notice'
            });
          } else {
            _this2.showStoredBasketMessage({
              message: response.messages.error,
              type: 'error'
            });
          }

          _this2.newStoredBasketInput.value = '';
          return response;
        });
      }
    }, {
      key: "appendFormData",
      value: function appendFormData(formData) {
        var sku = this.skuInput.value;
        var quantity = this.quantity.value;
        formData.append('ses_basket[0][sku]', sku);
        formData.append('ses_basket[0][quantity]', quantity);
      }
    }, {
      key: "addToStoredBasket",
      value: function addToStoredBasket(basketName) {
        var basketType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'storedBasket';
        var formData = new FormData();
        formData.append('basket_name', basketName);
        formData.append('basket_type', basketType);
        this.appendFormData(formData);
        var request = new Request('/basket/add_data', {
          method: 'POST',
          mode: 'same-origin',
          credentials: 'same-origin',
          body: formData
        });
        return this.addToStoredBasketRequestExec(request);
      }
    }, {
      key: "addToWishlist",
      value: function addToWishlist(event) {
        event.preventDefault();
        this.addToStoredBasket('', 'wishList');
      }
    }, {
      key: "addToCompare",
      value: function addToCompare(event) {
        event.preventDefault();
        this.addToStoredBasket(this.addCompareButton.dataset.ezcommerceBasketName, 'comparison');
      }
    }, {
      key: "showStoredBasketMessage",
      value: function showStoredBasketMessage(_ref) {
        var _this3 = this;

        var message = _ref.message,
            type = _ref.type;

        if (this.storedBasketMessageTimeout) {
          clearTimeout(this.storedBasketMessageTimeout);
        }

        this.storedBasketMessageNode.innerHTML = message;
        this.storedBasketMessageNode.classList.add("ezcommerce-product__stored-baskets-messages--".concat(type));
        this.storedBasketMessageTimeout = setTimeout(function () {
          _this3.storedBasketMessageNode.innerHTML = '';
          _this3.storedBasketMessageNode.classList = ['ezcommerce-product__stored-baskets-messages'];
        }, this.messageDelay);
      }
    }, {
      key: "addButtonListeners",
      value: function addButtonListeners() {
        this.addBasketButton.addEventListener('click', this.onSubmit.bind(this), false);
        this.addStoredBasketButton.addEventListener('click', this.fetchStoredBasketsList.bind(this), false);
        this.addWishlistButton.addEventListener('click', this.addToWishlist.bind(this), false);
        this.addCompareButton.addEventListener('click', this.addToCompare.bind(this), false);
        this.confirmStoredBasketButton.addEventListener('click', this.setNewStoredBasket.bind(this), false);
      }
    }, {
      key: "init",
      value: function init() {
        this.setElements();
        this.checkDatasetExistance();
        this.toggleSubmitState();
        this.addButtonListeners();
        this.quantity.addEventListener('change', this.toggleSubmitState.bind(this), false);
      }
    }]);

    return Product;
  }();

  Object(_helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__["default"])('eshop.widgets.Product', Product);
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.multi.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.multi.js ***!
  \**************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addConfig */ "./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/helpers/addConfig.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



(function (global, doc, ibexa) {
  var ProductMulti = /*#__PURE__*/function (_ibexa$eshop$widgets$) {
    _inherits(ProductMulti, _ibexa$eshop$widgets$);

    var _super = _createSuper(ProductMulti);

    function ProductMulti() {
      _classCallCheck(this, ProductMulti);

      return _super.apply(this, arguments);
    }

    _createClass(ProductMulti, [{
      key: "setElements",
      value: function setElements() {
        _get(_getPrototypeOf(ProductMulti.prototype), "setElements", this).call(this);

        this.quantity = _toConsumableArray(doc.querySelectorAll('.ezcommerce-js--quantity'));
        this.minQuantity = this.quantity.length ? parseInt(this.quantity[0].dataset.ezcommerceMinQuantity, 10) : 1;
      }
    }, {
      key: "checkDatasetExistance",
      value: function checkDatasetExistance() {
        if (this.quantity[0].dataset.ezcommerceMinQuantity === undefined) {
          console.error('data-ezcommerce-min-quantity on .ezcommerce-js--quantity is not set!');
        }
      }
    }, {
      key: "checkQuantity",
      value: function checkQuantity() {
        var quantityTotal = this.quantity.reduce(function (total, current) {
          return total + (current.value ? parseInt(current.value, 10) : 0);
        }, 0);
        return quantityTotal >= this.minQuantity;
      }
    }, {
      key: "checkWishlistState",
      value: function checkWishlistState() {
        return this.checkQuantity() && !this.isAnonymous();
      }
    }, {
      key: "checkCompareState",
      value: function checkCompareState() {
        return this.checkQuantity();
      }
    }, {
      key: "appendFormData",
      value: function appendFormData(formData) {
        var quantity = this.quantity;
        quantity.forEach(function (variant) {
          var variantQuantity = variant.value;
          var variantCode = variant.dataset.ezcommerceVariantCode;
          var sku = doc.querySelector("[name=\"ses_basket[".concat(variantCode, "][sku]\"")).value;

          if (variantQuantity > 0) {
            formData.append("ses_basket[".concat(variantCode, "][sku]"), sku);
            formData.append("ses_basket[".concat(variantCode, "][quantity]"), variantQuantity);
            formData.append("ses_basket[".concat(variantCode, "][isVariant]"), 'isVariant');
            formData.append("ses_basket[".concat(variantCode, "][ses_variant_code]"), variantCode);
          }
        });
      }
    }, {
      key: "init",
      value: function init() {
        var _this = this;

        this.setElements();
        this.checkDatasetExistance();
        this.toggleSubmitState();
        this.addButtonListeners();
        this.quantity.forEach(function (input) {
          return input.addEventListener('change', _this.toggleSubmitState.bind(_this), false);
        });
      }
    }]);

    return ProductMulti;
  }(ibexa.eshop.widgets.Product);

  Object(_helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__["default"])('eshop.widgets.ProductMulti', ProductMulti);
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.variants.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.variants.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addConfig */ "./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/helpers/addConfig.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



(function (global, doc, ibexa) {
  var ProductVariants = /*#__PURE__*/function (_ibexa$eshop$widgets$) {
    _inherits(ProductVariants, _ibexa$eshop$widgets$);

    var _super = _createSuper(ProductVariants);

    function ProductVariants() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ProductVariants);

      _this = _super.call(this, config);
      _this.sku = config.sku;
      return _this;
    }

    _createClass(ProductVariants, [{
      key: "setElements",
      value: function setElements() {
        _get(_getPrototypeOf(ProductVariants.prototype), "setElements", this).call(this);

        this.characteristics = _toConsumableArray(doc.querySelectorAll('.ezcommerce-js--characteristics'));
        this.characteristicButtons = _toConsumableArray(doc.querySelectorAll('.ezcommerce-js--characteristic'));
        this.priceWrapper = doc.querySelector('.ezcommerce-js--price-wrapper');
        this.identifier = doc.querySelector('.ezcommerce-js--identifier');
        this.variantCode = doc.querySelector('.ezcommerce-js--variant-code');
      }
    }, {
      key: "checkDatasetExistance",
      value: function checkDatasetExistance() {
        _get(_getPrototypeOf(ProductVariants.prototype), "checkDatasetExistance", this).call(this);

        if (this.characteristics.some(function (element) {
          return element.dataset.ezcommerceVariantGroup === undefined;
        })) {
          console.error('data-ezcommerce-variant-group on .ezcommerce-js--characteristics is not set!');
        }

        if (this.characteristicButtons.some(function (element) {
          return element.dataset.ezcommerceValue === undefined;
        })) {
          console.error('data-ezcommerce-value on .ezcommerce-js--characteristic is not set!');
        }
      }
    }, {
      key: "getRequest",
      value: function getRequest(body) {
        var formData = new FormData();
        formData.append('ses_request', JSON.stringify(body));
        return new Request('/_ajax_/phalanx', {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json'
          },
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }
    }, {
      key: "transformRequest",
      value: function transformRequest(response) {
        if (!response.ok) {
          throw response;
        }

        return response.json();
      }
    }, {
      key: "getVariant",
      value: function getVariant(variantsData) {
        var _this2 = this;

        var body = {
          get_variantsData: [{
            variants: variantsData,
            sku: this.sku,
            type: 'variant'
          }]
        };
        var request = this.getRequest(body);
        fetch(request).then(this.transformRequest).then(function (response) {
          _this2.variantCode.value = response.get_variantsData.variantCode;

          _this2.variantCode.dispatchEvent(new Event('change'));

          var buttons = doc.querySelectorAll('.ezcommerce-js--characteristics .ezcommerce-js--characteristic');
          buttons.forEach(function (button) {
            button.setAttribute('disabled', 'disabled');
          });
          Object.entries(response.get_variantsData.availableVariantCodes).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                variants = _ref2[1];

            Object.keys(variants).forEach(function (variant) {
              var variantEscaped = variant.replaceAll(/([^a-zA-Z0-9-_])/g, '\\$1');
              var button = doc.querySelector(".ezcommerce-js--characteristics[data-ezcommerce-variant-group=\"".concat(key, "\"] .ezcommerce-js--characteristic[data-ezcommerce-value=\"").concat(variantEscaped, "\"]"));
              button.removeAttribute('disabled');
            });
          });
          return response;
        })["catch"](console.error);
      }
    }, {
      key: "updateContainer",
      value: function updateContainer(args) {
        console.warn("updateContainer method in class ProductVariants hasn't been overwritten!");
        return args;
      }
    }, {
      key: "updatePrice",
      value: function updatePrice() {
        var _this3 = this;

        var body = {
          get_ProductInformation: [{
            identifier: this.identifier.value,
            variantCode: this.variantCode.value ? this.variantCode.value : undefined,
            priceEngineContextId: 'product_detail',
            type: 'catalog'
          }]
        };
        var request = this.getRequest(body);
        fetch(request).then(this.transformRequest).then(function (response) {
          return _this3.updateContainer({
            container: _this3.priceWrapper,
            response: response
          });
        })["catch"](console.error);
      }
    }, {
      key: "checkVariantField",
      value: function checkVariantField() {
        return this.variantCode.value !== undefined && this.variantCode.value !== '';
      }
    }, {
      key: "checkSubmitState",
      value: function checkSubmitState() {
        return this.checkQuantity() && this.checkVariantField();
      }
    }, {
      key: "checkStoredBasketState",
      value: function checkStoredBasketState() {
        return this.checkQuantity() && this.checkVariantField() && !this.isAnonymous();
      }
    }, {
      key: "checkWishlistState",
      value: function checkWishlistState() {
        return this.checkVariantField() && !this.isAnonymous();
      }
    }, {
      key: "checkCompareState",
      value: function checkCompareState() {
        return this.checkVariantField();
      }
    }, {
      key: "bindCharacteristicEvents",
      value: function bindCharacteristicEvents(containers) {
        var _this4 = this;

        containers.forEach(function (container) {
          container.querySelectorAll('.ezcommerce-js--characteristic').forEach(function (button) {
            return button.addEventListener('click', function (event) {
              if (event.target.classList.contains('ezcommerce-js--selected')) {
                event.target.classList.remove('ezcommerce-js--selected');
              } else {
                var selected = container.querySelector('.ezcommerce-js--characteristic.ezcommerce-js--selected');

                if (selected) {
                  selected.classList.remove('ezcommerce-js--selected');
                }

                event.target.classList.add('ezcommerce-js--selected');
              }

              var bodyRequest = {};
              containers.forEach(function (containerSelected) {
                var selectedElement = containerSelected.querySelector('.ezcommerce-js--selected');

                if (selectedElement) {
                  bodyRequest[containerSelected.dataset.ezcommerceVariantGroup] = selectedElement.dataset.ezcommerceValue;
                }
              });

              _this4.getVariant(bodyRequest);
            });
          });
        });
      }
    }, {
      key: "appendFormData",
      value: function appendFormData(formData) {
        var sku = this.skuInput.value;
        var quantity = this.quantity.value;
        var variantCode = this.variantCode.value;
        formData.append('ses_basket[0][sku]', sku);
        formData.append('ses_basket[0][quantity]', quantity);
        formData.append('ses_basket[0][isVariant]', 'isVariant');
        formData.append('ses_basket[0][ses_variant_code]', variantCode);
      }
    }, {
      key: "init",
      value: function init() {
        _get(_getPrototypeOf(ProductVariants.prototype), "init", this).call(this);

        this.variantCode.addEventListener('change', this.updatePrice.bind(this), false);
        this.variantCode.addEventListener('change', this.toggleSubmitState.bind(this), false);
        this.bindCharacteristicEvents(this.characteristics);
      }
    }]);

    return ProductVariants;
  }(ibexa.eshop.widgets.Product);

  Object(_helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__["default"])('eshop.widgets.ProductVariants', ProductVariants);
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/helpers/addConfig.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/helpers/addConfig.js ***!
  \*************************************************************************************************/
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

/***/ 93:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.js ./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.variants.js ./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.multi.js ./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/accordion.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.js */"./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.variants.js */"./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.variants.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.multi.js */"./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/product.multi.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/accordion.js */"./vendor/ezsystems/ezcommerce-shop-ui/src/bundle/Resources/public/js/core/accordion.js");


/***/ })

},[[93,"runtime"]]]);