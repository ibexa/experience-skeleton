(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-page-builder-preview-in-siteaccess-js"],{

/***/ "./public/bundles/ezplatformadminui/js/scripts/sidebar/btn/location.edit.js":
/*!**********************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/sidebar/btn/location.edit.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, eZ, $, Routing) {
  var editActions = doc.querySelector('.ez-extra-actions--edit') || doc.querySelector('.ez-extra-actions--edit-user');

  var btns = _toConsumableArray(editActions.querySelectorAll('.form-check [type="radio"]'));

  var form = editActions.querySelector('form');
  var contentIdInput = form.querySelector('#content_edit_content_info') || form.querySelector('#user_edit_content_info');
  var contentId = contentIdInput.value;
  var locationInput = form.querySelector('#content_edit_location') || form.querySelector('#user_edit_location');
  var locationId = locationInput.value;

  var resetRadioButtons = function resetRadioButtons() {
    return btns.forEach(function (btn) {
      btn.checked = false;
    });
  };

  var addDraft = function addDraft() {
    form.submit();
    $('#version-draft-conflict-modal').modal('hide');
  };

  var redirectToUserEdit = function redirectToUserEdit(languageCode) {
    var versionNo = form.querySelector('#user_edit_version_info_version_no').value;
    window.location.href = Routing.generate('ezplatform.user.update', {
      contentId: contentId,
      versionNo: versionNo,
      language: languageCode
    });
  };

  var onModalHidden = function onModalHidden() {
    resetRadioButtons();
    var event = new CustomEvent('ez-draft-conflict-modal-hidden');
    doc.body.dispatchEvent(event);
  };

  var attachModalListeners = function attachModalListeners(wrapper) {
    var addDraftButton = wrapper.querySelector('.ez-btn--add-draft');

    if (addDraftButton) {
      addDraftButton.addEventListener('click', addDraft, false);
    }

    wrapper.querySelectorAll('.ez-btn--prevented').forEach(function (btn) {
      return btn.addEventListener('click', function (event) {
        return event.preventDefault();
      }, false);
    });
    $('#version-draft-conflict-modal').modal('show').on('hidden.bs.modal', onModalHidden).on('shown.bs.modal', function () {
      return eZ.helpers.tooltips.parse();
    });
  };

  var showModal = function showModal(modalHtml) {
    var wrapper = doc.querySelector('.ez-modal-wrapper');
    wrapper.innerHTML = modalHtml;
    attachModalListeners(wrapper);
  };

  var changeHandler = function changeHandler(event) {
    var checkedBtn = event.currentTarget;
    var languageCode = checkedBtn.value;
    var checkVersionDraftLink = Routing.generate('ezplatform.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode,
      locationId: locationId
    });
    fetch(checkVersionDraftLink, {
      credentials: 'same-origin'
    }).then(function (response) {
      if (response.status === 409) {
        response.text().then(showModal);
      } else if (response.status === 200) {
        if (form.querySelector('#user_edit_version_info')) {
          redirectToUserEdit(languageCode);
          return;
        }

        form.submit();
      }
    });
  };

  btns.forEach(function (btn) {
    return btn.addEventListener('change', changeHandler, false);
  });
})(window, window.document, window.eZ, window.jQuery, window.Routing);

/***/ }),

/***/ 102:
/*!****************************************************************************************!*\
  !*** multi ./public/bundles/ezplatformadminui/js/scripts/sidebar/btn/location.edit.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/sidebar/btn/location.edit.js */"./public/bundles/ezplatformadminui/js/scripts/sidebar/btn/location.edit.js");


/***/ })

},[[102,"runtime"]]]);