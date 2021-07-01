(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-personalization-welcome-js"],{

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/welcome.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/welcome.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, $) {
  var CLASS_ACTIVE_ITEM_LIST = 'ez-modal__table-of-contents-list-item--active';
  var termsContentContainer = doc.querySelector('.ez-modal__content-terms');
  var termsListContainer = doc.querySelector('.ez-modal__table-of-contents-list');
  var openModalButton = doc.querySelector('.ez-welcome-content__show-modal-button');
  var acceptTermsButton = doc.querySelector('.ez-modal__accept-terms-and-conditions-button');

  var scrollTerms = function scrollTerms(event) {
    event.preventDefault();
    var listLink = event.currentTarget;
    var scrollTo = listLink.dataset.scrollTo;
    var activedListItem = termsListContainer.querySelector(".".concat(CLASS_ACTIVE_ITEM_LIST));
    var itemListToActive = listLink.closest('.ez-modal__table-of-contents-list-item');

    if (activedListItem) {
      activedListItem.classList.remove(CLASS_ACTIVE_ITEM_LIST);
    }

    if (scrollTo) {
      itemListToActive.classList.add(CLASS_ACTIVE_ITEM_LIST);
      termsContentContainer.querySelector("#".concat(scrollTo)).scrollIntoView();
    }
  };

  if (openModalButton) {
    openModalButton.addEventListener('click', function (event) {
      event.preventDefault();
      $('#terms-and-contions-modal').modal('show');
    }, false);
  }

  if (acceptTermsButton) {
    acceptTermsButton.addEventListener('click', function () {
      doc.querySelector('.ez-welcome-content__accept-terms-checkbox').checked = true;
    }, false);
  }

  doc.querySelectorAll('.ez-modal__table-of-contents-list-link').forEach(function (listLink) {
    listLink.addEventListener('click', scrollTerms, false);
  });
})(window, window.document, window.jQuery);

/***/ }),

/***/ 69:
/*!*****************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/welcome.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/welcome.js */"./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/welcome.js");


/***/ })

},[[69,"runtime"]]]);