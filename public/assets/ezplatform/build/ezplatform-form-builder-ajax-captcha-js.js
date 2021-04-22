(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-form-builder-ajax-captcha-js"],{

/***/ "./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/fieldType/captcha.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/fieldType/captcha.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var getCaptchaPath = function getCaptchaPath(image, callback, errorCallback) {
    var fieldId = image.dataset.fieldId;
    var request = new Request("/form/captcha/get-url/".concat(fieldId), {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(function (response) {
      return response.json();
    }).then(function (data) {
      return callback(data, image);
    })["catch"](function () {
      return errorCallback(image);
    });
  };

  var setCaptchaImage = function setCaptchaImage(data, image) {
    image.setAttribute('src', data.image);
  };

  var fetchCaptchaImages = function fetchCaptchaImages(captchaImages) {
    captchaImages.forEach(function (image) {
      if (image.hasAttribute('data-events-attached')) {
        return;
      }

      getCaptchaPath(image, setCaptchaImage, showErrorMessage);
    });
  };

  var showErrorMessage = function showErrorMessage(image) {
    var errorElement = image.parentNode.querySelector('.captcha__fail-to-load');
    errorElement.removeAttribute('hidden');
  };

  var hideErrorMessage = function hideErrorMessage(image) {
    var errorElement = image.parentNode.querySelector('.captcha__fail-to-load');
    errorElement.setAttribute('hidden', 'hidden');
  };

  global.addEventListener('load', function () {
    var captchaImages = _toConsumableArray(doc.querySelectorAll('.captcha_image'));

    fetchCaptchaImages(captchaImages);
    captchaImages.forEach(function (image) {
      var reloadLink = image.parentNode.querySelector('.captcha_reload');

      if (reloadLink && !image.hasAttribute('data-events-attached')) {
        reloadLink.addEventListener('click', function () {
          getCaptchaPath(image, setCaptchaImage, showErrorMessage);
          hideErrorMessage(image);
        });
      }

      image.setAttribute('data-events-attached', true);
    });
  }, false);
})(window, window.document);

/***/ }),

/***/ 141:
/*!************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/fieldType/captcha.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/fieldType/captcha.js */"./vendor/ezsystems/ezplatform-form-builder/src/bundle/Resources/public/js/fieldType/captcha.js");


/***/ })

},[[141,"runtime"]]]);