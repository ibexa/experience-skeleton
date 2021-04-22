(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezcommerce-checkout-core-checkout-page-js"],{

/***/ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/checkout.page.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/checkout.page.js ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addConfig */ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/helpers/addConfig.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



(function (global, doc) {
  var checkoutAlreadyDeclared = false;

  var getFlatFieldsHelper = function getFlatFieldsHelper(output, path, data) {
    if (Array.isArray(data) && data.length > 0 && _typeof(data[0]) !== 'object') {
      output[path] = data;
    } else {
      Object.entries(data).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        getFlatFieldsHelper(output, "".concat(path, "[").concat(key, "]"), value);
      });
    }
  };

  var getFlatFields = function getFlatFields(data) {
    var output = {};
    Object.entries(data).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      getFlatFieldsHelper(output, key, value);
    });
    return output;
  };

  var transformRequest = function transformRequest(response) {
    if (!response.ok) {
      throw response;
    }

    return response.json();
  };

  var CheckoutPage = /*#__PURE__*/function () {
    function CheckoutPage() {
      _classCallCheck(this, CheckoutPage);

      if (checkoutAlreadyDeclared) {
        throw new Error("You can't declare more than one Checkout class!");
      }

      checkoutAlreadyDeclared = true;
      this.currentStep = 'login';
      this.submitButtons = doc.querySelectorAll('.ezcommerce-js--button-next-step');
      this.steps = _toConsumableArray(doc.querySelectorAll('.ezcommerce-js--step-wrapper')).map(function (step) {
        return step.id;
      });
      this.addressKeys = ['company', 'companySecond', 'street', 'addressSecond', 'zip', 'city', 'country', 'county', 'phone'];
    }

    _createClass(CheckoutPage, [{
      key: "clearErrors",
      value: function clearErrors(form) {
        var errorElement = form.querySelector('.ezcommerce-js--checkout-error-message');

        if (errorElement) {
          errorElement.innerHTML = '';
        }

        form.querySelectorAll('.ezcommerce-js--field-error').forEach(function (fieldError) {
          return fieldError.innerHTML = '';
        });
      }
    }, {
      key: "setErrors",
      value: function setErrors(form, errorMessage, formErrors) {
        var errorElement = form.querySelector('.ezcommerce-js--checkout-error-message');

        if (errorElement) {
          errorElement.innerHTML = errorMessage;
        }

        if (formErrors) {
          var errors = getFlatFields(formErrors);
          Object.entries(errors).forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                path = _ref6[0],
                error = _ref6[1];

            form.querySelector("[name=\"".concat(path, "\"]")).closest('.ezcommerce-js--field-wrapper').querySelector('.ezcommerce-js--field-error').innerHTML = error.join('\n');
          });
        }
      }
    }, {
      key: "setCurrentStep",
      value: function setCurrentStep(currentStep) {
        var addDoneClass = true;
        this.steps.forEach(function (step) {
          var element = doc.querySelector("#".concat(step));
          element.classList.remove('ezcommerce-checkout__step--active');
          element.classList.remove('ezcommerce-checkout__step--done');

          if (step === currentStep) {
            element.classList.add('ezcommerce-checkout__step--active');
            addDoneClass = false;
          } else {
            if (addDoneClass) {
              element.classList.add('ezcommerce-checkout__step--done');
            }
          }
        });
        this.currentStep = currentStep;
        this.changeRoute(currentStep);
      }
    }, {
      key: "fillSummarySidebar",
      value: function fillSummarySidebar() {
        var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!response.summary) {
          return;
        }

        var sidebarSummary = doc.querySelector('#sidebar_summary');
        sidebarSummary.innerHTML = sidebarSummary.dataset.template;
        var sidebarSummaryList = sidebarSummary.querySelector('.ezcommerce-sidebar-summary__list');
        var template = sidebarSummaryList.dataset.template;
        var fragment = doc.createDocumentFragment();
        response.summary.products.forEach(function (product) {
          var container = doc.createElement('li');
          var renderedItem = template.replace('{{ QUANTITY }}', product.quantity).replace('{{ NAME }}', product.name).replace('{{ PRICE }}', product.price);
          container.insertAdjacentHTML('beforeend', renderedItem);
          fragment.append(container.querySelector('li'));
        });
        sidebarSummaryList.append(fragment);
      }
    }, {
      key: "fillAddressSidebar",
      value: function fillAddressSidebar(sidebarSelector, data) {
        var sidebar = doc.querySelector(sidebarSelector);
        var template = sidebar.dataset.template;
        template = template.replace('{{ ADDRESS1 }}', data.name[0] || '').replace('{{ ADDRESS2 }}', data.name[1] || '').replace('{{ STREET1 }}', data.postal_address.streetName || '').replace('{{ STREET2 }}', data.postal_address.additional_street_name || '').replace('{{ NUMBER }}', data.postal_address.building_number || '').replace('{{ ZIP }}', data.postal_address.postal_zone || '').replace('{{ CITY }}', data.postal_address.city_name || '').replace('{{ COUNTRY }}', data.postal_address.country || '').replace('{{ MAIL }}', data.contact.electronic_mail || '').replace('{{ PHONE }}', data.contact.telephone || '');
        sidebar.innerHTML = template;
      }
    }, {
      key: "fillInvoiceSidebar",
      value: function fillInvoiceSidebar() {
        var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!response.invoice) {
          return;
        }

        this.fillAddressSidebar('#sidebar_invoice', response.invoice);
      }
    }, {
      key: "fillDeliverySidebar",
      value: function fillDeliverySidebar() {
        var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!response.delivery) {
          return;
        }

        this.fillAddressSidebar('#sidebar_delivery', response.delivery);
      }
    }, {
      key: "copyInvoiceToDelivery",
      value: function copyInvoiceToDelivery() {
        var invoiceForm = Object.fromEntries(new FormData(doc.querySelector('#invoice form')));
        this.addressKeys.forEach(function (key) {
          doc.querySelector("#delivery form [name=\"checkout_delivery_address[".concat(key, "]\"]")).value = invoiceForm["checkout_invoice_address[".concat(key, "]")];
        });
      }
    }, {
      key: "showForceStop",
      value: function showForceStop() {
        var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (response.force_step_hide === false) {
          doc.querySelector("#".concat(response.current_step, " .ezcommerce-js--force-step")).hidden = false;
        }
      }
    }, {
      key: "bindDeliveryFormEvents",
      value: function bindDeliveryFormEvents() {
        var _this = this;

        doc.querySelectorAll('input[name="checkout_delivery_address[addressStatus]"]').forEach(function (input) {
          return input.addEventListener('change', function (event) {
            doc.querySelector('.ezcommerce-existing-delivery-address').classList.remove('ezcommerce-existing-delivery-address--visible');

            if (event.currentTarget.value === 'sameAsInvoice') {
              _this.copyInvoiceToDelivery();
            } else if (event.currentTarget.value === 'existing') {
              doc.querySelector('.ezcommerce-existing-delivery-address').classList.add('ezcommerce-existing-delivery-address--visible');
            } else if (event.currentTarget.value === 'new') {
              _this.addressKeys.forEach(function (key) {
                doc.querySelector("#delivery form [name=\"checkout_delivery_address[".concat(key, "]\"]")).value = '';
              });
            }
          });
        });
        doc.querySelectorAll('.ezcommerce-js--address-button').forEach(function (button) {
          return button.addEventListener('click', function (event) {
            var address = JSON.parse(event.currentTarget.closest('.ezcommerce-js--address-wrapper').dataset.address);

            _this.addressKeys.forEach(function (key) {
              doc.querySelector("#delivery form [name=\"checkout_delivery_address[".concat(key, "]\"]")).value = address[key] || '';
            });
          });
        });
      }
    }, {
      key: "bindShowStepEvents",
      value: function bindShowStepEvents() {
        var _this2 = this;

        doc.querySelectorAll('.ezcommerce-checkout__step-action--show').forEach(function (button) {
          return button.addEventListener('click', function (event) {
            _this2.validateState(event.currentTarget.closest('.ezcommerce-js--step-wrapper').id);
          });
        });
      }
    }, {
      key: "changeRoute",
      value: function changeRoute(currentStep) {
        var url = new URL(global.location);
        url.hash = currentStep;
        window.history.pushState({}, '', url);
      }
    }, {
      key: "bindSubmitEvents",
      value: function bindSubmitEvents() {
        var _this3 = this;

        this.submitButtons.forEach(function (submitButton) {
          var form = submitButton.closest('form');
          form.addEventListener('submit', function (event) {
            event.preventDefault();
            var request = new Request(form.dataset.requestUrl, {
              method: 'post',
              mode: 'same-origin',
              credentials: 'same-origin',
              body: new FormData(form)
            });
            fetch(request).then(transformRequest).then(function (response) {
              _this3.clearErrors(form);

              if (response.status === 'error') {
                _this3.setErrors(form, response.validation.message, response.validation.form_errors);

                return;
              }

              if (response.redirect_url) {
                window.location.href = response.redirect_url;
                return;
              }

              _this3.setCurrentStep(response.current_step);

              _this3.onStepEnter(response.current_step, {
                response: response
              });
            });
          });
        });
        doc.querySelector('.ezcommerce-js--button-buy-as-guest').addEventListener('click', function (event) {
          event.preventDefault();
          var nextStep = 'invoice';

          _this3.setCurrentStep(nextStep);

          _this3.onStepEnter(nextStep);
        });
      }
    }, {
      key: "onStepEnter",
      value: function onStepEnter(step) {
        var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            response = _ref7.response;

        this.fillSummarySidebar(response);
        this.fillInvoiceSidebar(response);
        this.fillDeliverySidebar(response);
        this.showForceStop(response);

        if (step === 'delivery') {
          if (!new FormData(doc.querySelector('#delivery form')).get('checkout_delivery_address[addressStatus]')) {
            this.copyInvoiceToDelivery();
            doc.querySelector('input[name="checkout_delivery_address[addressStatus]"][value="sameAsInvoice"]').checked = true;
          }
        }
      }
    }, {
      key: "validateState",
      value: function validateState(customCurrentStep) {
        var _this4 = this;

        var currentStep = customCurrentStep || global.location.hash.slice(1);
        var validateUrl = doc.querySelector('.ezcommerce-js--checkout-wrapper').dataset.validateUrl;

        if (currentStep) {
          validateUrl += "/".concat(currentStep);
        }

        var request = new Request(validateUrl, {
          method: 'post',
          mode: 'same-origin',
          credentials: 'same-origin'
        });
        fetch(request).then(transformRequest).then(function (response) {
          _this4.setCurrentStep(response.current_step);

          _this4.onStepEnter(response.current_step, {
            response: response
          });
        });
      }
    }, {
      key: "init",
      value: function init() {
        this.bindSubmitEvents();
        this.bindDeliveryFormEvents();
        this.bindShowStepEvents();
      }
    }]);

    return CheckoutPage;
  }();

  Object(_helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__["default"])('eshop.widgets.CheckoutPage', CheckoutPage);
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

/***/ 90:
/*!*********************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/checkout.page.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/checkout.page.js */"./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/checkout.page.js");


/***/ })

},[[90,"runtime"]]]);