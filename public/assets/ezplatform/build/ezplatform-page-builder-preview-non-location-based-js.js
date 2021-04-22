(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-page-builder-preview-non-location-based-js"],{

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function (global, doc, eZ, $) {
  global.eZ = global.eZ || {
    modules: {}
  };
  var CLASS_PREVIEW_ACTION_SELECTED = 'ez-preview-switcher__action--selected';
  var CLASS_INFO_SELECTED = 'ez-page-info-bar__info-tray-toggler--selected';
  var CLASS_INFO_VISIBLE = 'ez-info-tray--visible';
  var CLASS_DROPDOWN_EXPANDED = 'ez-dropdown--expanded';
  var CLASS_TOOLS_EXPANDED = 'ez-page-info-bar__tools-list--expanded';
  var CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN = 'ez-extra-actions--hidden';
  var CLASS_WITH_BACKDROP = 'ez-with-backdrop';
  var CLASS_DROPDOWN_SWITCHER = 'ez-dropdown__switcher';
  var SELECTOR_DROPDOWN = '.ez-dropdown';
  var SELECTOR_ICON_CHECKBOX = '.ez-checkbox-icon__checkbox';
  var SELECTOR_EXTRA_ACTIONS_EDIT = '.ez-extra-actions--page-edit';
  var SELECTOR_EXTRA_ACTIONS_CREATE = '.ez-extra-actions--page-create';
  var SELECTOR_EXTRA_ACTIONS_WRAPPER = '.ez-page-info-bar__create-content-wrapper';
  var SELECTOR_STANDARD_ACTIONS_WRAPPER = '.ez-page-info-bar__actions';
  var PREVIEW_WIDTH_MAP = {
    desktop: '100%',
    tablet: '1280px',
    mobile: '800px'
  };

  global.eZ.modules.InfoBar = /*#__PURE__*/function () {
    "use strict";

    function InfoBar() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$containerSelecto = _ref.containerSelector,
          containerSelector = _ref$containerSelecto === void 0 ? '.ez-page-info-bar' : _ref$containerSelecto,
          _ref$isCreateMode = _ref.isCreateMode,
          isCreateMode = _ref$isCreateMode === void 0 ? false : _ref$isCreateMode;

      _classCallCheck(this, InfoBar);

      this.container = doc.querySelector(containerSelector);
      this.isCreateMode = isCreateMode;
      this.subMenuBackdrop = null;
      this.contentActionSwitcher = this.container.querySelector('.ez-page-info-bar__content-action-switcher');
      this.contentModeSwitcher = this.container.querySelector('.ez-page-info-bar__content-mode-switcher');
      this.previewSwitcher = this.container.querySelector('.ez-preview-switcher');
      this.toolsToggler = this.container.querySelector('.ez-page-info-bar__tools');
      this.toolsList = this.container.querySelector('.ez-page-info-bar__tools-list');
      this.createContentBtnWrapper = this.container.querySelector(SELECTOR_EXTRA_ACTIONS_WRAPPER);
      this.standardActionsWrapper = this.container.querySelector(SELECTOR_STANDARD_ACTIONS_WRAPPER);
      this.editActionsWrapper = this.standardActionsWrapper ? this.standardActionsWrapper.querySelector(SELECTOR_EXTRA_ACTIONS_EDIT) : null;
      this.contentUrl = this.container.querySelector('.ez-content-action-info__url');
      this.contentLanguage = this.container.querySelector('.ez-content-action-info__language-name');
      this.contentAuthor = this.container.querySelector('.ez-content-details__author');
      this.contentModificationDate = this.container.querySelector('.ez-content-details__modified-date');

      if (this.previewSwitcher) {
        this.previewActions = _toConsumableArray(this.previewSwitcher.querySelectorAll('.ez-preview-switcher__action'));
      }

      if (this.createContentBtnWrapper) {
        this.dropdownSwitcher = this.createContentBtnWrapper.querySelector('.ez-dropdown__switcher');
        this.createContentBtn = this.createContentBtnWrapper.querySelector('.ez-page-info-bar__create-content');
      }

      this.infoToggler = this.container.querySelector('.ez-page-info-bar__info-tray-toggler');
      this.infoTray = doc.querySelector('.ez-info-tray');
      this.redirectToAction = this.redirectToAction.bind(this);
      this.showVersionLanguagePicker = this.showVersionLanguagePicker.bind(this);
      this.hideVersionLanguagePicker = this.hideVersionLanguagePicker.bind(this);
      this.toggleContentMode = this.toggleContentMode.bind(this);
      this.changePreviewMode = this.changePreviewMode.bind(this);
      this.showPreviewExtraActions = this.showPreviewExtraActions.bind(this);
      this.hidePreviewExtraActions = this.hidePreviewExtraActions.bind(this);
      this.toggleEditExtraActions = this.toggleEditExtraActions.bind(this);
      this.showEditExtraActions = this.showEditExtraActions.bind(this);
      this.hideEditExtraActions = this.hideEditExtraActions.bind(this);
      this.showTools = this.showTools.bind(this);
      this.hideTools = this.hideTools.bind(this);
      this.handlePopupShownEvent = this.handlePopupShownEvent.bind(this);
      this.handlePopupHiddenEvent = this.handlePopupHiddenEvent.bind(this);
      this.removeSubMenuBackdrop = this.removeSubMenuBackdrop.bind(this);
      this.onDraftConflictModalCancel = this.onDraftConflictModalCancel.bind(this);
      this.onVersionLanguagePickerBackdropClick = this.onVersionLanguagePickerBackdropClick.bind(this);
      this.toggleInfoTray = this.toggleInfoTray.bind(this);
      this.attachEventListeners();
    }

    _createClass(InfoBar, [{
      key: "attachEventListeners",
      value: function attachEventListeners() {
        var _this = this;

        if (!this.isCreateMode && this.contentActionSwitcher) {
          this.contentActionSwitcher.querySelector(SELECTOR_ICON_CHECKBOX).addEventListener('change', this.redirectToAction, false);
        }

        if (this.contentModeSwitcher) {
          this.contentModeSwitcher.querySelector(SELECTOR_ICON_CHECKBOX).addEventListener('change', this.toggleContentMode, false);
        }

        if (this.previewActions) {
          this.previewActions.forEach(function (action) {
            return action.addEventListener('click', _this.changePreviewMode, false);
          });
        }

        if (this.toolsToggler) {
          this.toolsToggler.addEventListener('click', this.showTools, false);
        }

        if (this.dropdownSwitcher) {
          this.dropdownSwitcher.addEventListener('click', this.toggleEditExtraActions, false);
        }

        if (this.createContentBtn) {
          this.createContentBtn.addEventListener('click', this.showPreviewExtraActions, false);
          var extraActions = this.container.querySelector(SELECTOR_EXTRA_ACTIONS_CREATE);

          if (extraActions) {
            this.attachSubmitEvent(extraActions);
          }
        }

        if (this.infoToggler && this.infoTray) {
          this.infoToggler.addEventListener('click', this.toggleInfoTray, false);
        }

        doc.body.addEventListener('ez-page-builder-hide-tools', this.hideTools, false);
        doc.body.addEventListener('ez-draft-conflict-modal-hidden', this.onDraftConflictModalCancel, false);
      }
    }, {
      key: "attachSubmitEvent",
      value: function attachSubmitEvent(actions) {
        var form = actions.querySelector('form');

        var radioBtns = _toConsumableArray(actions.querySelectorAll('.form-check [type="radio"]'));

        radioBtns.forEach(function (btn) {
          return btn.addEventListener('change', function () {
            form.submit();
          }, false);
        });
      }
    }, {
      key: "redirectToAction",
      value: function redirectToAction(event) {
        var dataset = event.currentTarget.dataset;

        if (this.contentActionSwitcher.classList.contains('disabled')) {
          return;
        }

        this.toggleSwitcherState(this.contentActionSwitcher);

        if (!dataset.urlPreview) {
          this.showVersionLanguagePicker();
        } else {
          global.location.href = dataset.urlPreview;
        }
      }
    }, {
      key: "addSubMenuBackdrop",
      value: function addSubMenuBackdrop(eventHandler) {
        if (this.subMenuBackdrop) {
          return;
        }

        this.subMenuBackdrop = doc.createElement('div');
        this.subMenuBackdrop.classList.add('ez-backdrop');
        this.subMenuBackdrop.addEventListener('click', eventHandler, false);
        doc.body.appendChild(this.subMenuBackdrop);
      }
    }, {
      key: "removeSubMenuBackdrop",
      value: function removeSubMenuBackdrop(eventHandler) {
        if (!this.subMenuBackdrop) {
          return;
        }

        this.subMenuBackdrop.removeEventListener('click', eventHandler);
        doc.body.removeChild(this.subMenuBackdrop);
        this.subMenuBackdrop = null;
      }
    }, {
      key: "toggleContentMode",
      value: function toggleContentMode() {
        this.toggleSwitcherState(this.contentModeSwitcher);
        doc.body.classList.toggle('ez-page-builder--fields-visible');
        eZ.helpers.tooltips.hideAll();
      }
    }, {
      key: "toggleSwitcherState",
      value: function toggleSwitcherState(switcher) {
        switcher.classList.toggle('is-checked');
      }
    }, {
      key: "toggleEditActions",
      value: function toggleEditActions(show) {
        this.editActionsWrapper.classList.toggle(CLASS_WITH_BACKDROP, show);
        this.editActionsWrapper.classList.toggle(CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN, !show);
      }
    }, {
      key: "changePreviewMode",
      value: function changePreviewMode(event) {
        this.previewActions.forEach(function (action) {
          return action.classList.remove(CLASS_PREVIEW_ACTION_SELECTED);
        });
        event.currentTarget.classList.add(CLASS_PREVIEW_ACTION_SELECTED);
        var type = event.currentTarget.dataset.previewMode;
        doc.querySelector('#page-builder-preview').style = "width: ".concat(PREVIEW_WIDTH_MAP[type], ";");
        eZ.helpers.tooltips.hideAll();
      }
    }, {
      key: "onDraftConflictModalCancel",
      value: function onDraftConflictModalCancel() {
        this.hideVersionLanguagePicker();
      }
    }, {
      key: "showVersionLanguagePicker",
      value: function showVersionLanguagePicker() {
        if (this.editActionsWrapper.classList.contains('ez-extra-actions--prevent-show')) {
          var languageRadioOption = this.editActionsWrapper.querySelector('[type="radio"]');
          languageRadioOption.checked = true;
          languageRadioOption.dispatchEvent(new CustomEvent('change'));
          return;
        }

        this.toggleEditActions(true);
        this.addSubMenuBackdrop(this.onVersionLanguagePickerBackdropClick);
      }
    }, {
      key: "onVersionLanguagePickerBackdropClick",
      value: function onVersionLanguagePickerBackdropClick(_ref2) {
        var target = _ref2.target;
        var wrapper = target.closest(SELECTOR_STANDARD_ACTIONS_WRAPPER);

        if (wrapper) {
          return;
        }

        this.hideVersionLanguagePicker();
      }
    }, {
      key: "hideVersionLanguagePicker",
      value: function hideVersionLanguagePicker() {
        var switcher = this.contentActionSwitcher.querySelector(SELECTOR_ICON_CHECKBOX);
        this.toggleEditActions(false);
        switcher.checked = false;
        this.toggleSwitcherState(this.contentActionSwitcher);
        this.removeSubMenuBackdrop(this.hidePreviewExtraActions);
      }
    }, {
      key: "showPreviewExtraActions",
      value: function showPreviewExtraActions() {
        var actions = this.createContentBtnWrapper.querySelector(SELECTOR_EXTRA_ACTIONS_CREATE);
        actions.classList.remove(CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN);
        actions.classList.add(CLASS_WITH_BACKDROP);
        this.addSubMenuBackdrop(this.hidePreviewExtraActions);
      }
    }, {
      key: "hidePreviewExtraActions",
      value: function hidePreviewExtraActions(_ref3) {
        var target = _ref3.target;
        var wrapper = target.closest(SELECTOR_EXTRA_ACTIONS_WRAPPER);

        if (wrapper) {
          return;
        }

        var actions = this.createContentBtnWrapper.querySelector(SELECTOR_EXTRA_ACTIONS_CREATE);
        actions.classList.add(CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN);
        actions.classList.remove(CLASS_WITH_BACKDROP);
        this.removeSubMenuBackdrop(this.hidePreviewExtraActions);
      }
    }, {
      key: "toggleEditExtraActions",
      value: function toggleEditExtraActions(event) {
        var isExpanded = event.target.classList.contains(CLASS_DROPDOWN_EXPANDED) || event.target.closest(".".concat(CLASS_DROPDOWN_EXPANDED));

        if (isExpanded) {
          this.hideEditExtraActions(event);
        } else {
          this.showEditExtraActions();
        }
      }
    }, {
      key: "showEditExtraActions",
      value: function showEditExtraActions() {
        var dropdown = this.createContentBtnWrapper.querySelector(SELECTOR_DROPDOWN);
        dropdown.classList.add(CLASS_DROPDOWN_EXPANDED);
        dropdown.classList.add(CLASS_WITH_BACKDROP);
        this.addSubMenuBackdrop(this.hideEditExtraActions);
      }
    }, {
      key: "hideEditExtraActions",
      value: function hideEditExtraActions(_ref4) {
        var target = _ref4.target;
        var isDropdown = target.classList.contains(CLASS_DROPDOWN_EXPANDED) || target.closest(".".concat(CLASS_DROPDOWN_EXPANDED));
        var isDropdownSwitcher = target.classList.contains(CLASS_DROPDOWN_SWITCHER);

        if (isDropdown && !isDropdownSwitcher) {
          return;
        }

        var dropdown = this.createContentBtnWrapper.querySelector(SELECTOR_DROPDOWN);
        dropdown.classList.remove(CLASS_DROPDOWN_EXPANDED, CLASS_WITH_BACKDROP);
        this.removeSubMenuBackdrop(this.hideEditExtraActions);
      }
    }, {
      key: "showTools",
      value: function showTools() {
        this.toolsList.classList.add(CLASS_TOOLS_EXPANDED);
        this.addSubMenuBackdrop(this.hideTools);
        $(doc.body).on('shown.bs.modal', this.handlePopupShownEvent);
        eZ.helpers.tooltips.hideAll();
      }
    }, {
      key: "hideTools",
      value: function hideTools(_ref5) {
        var target = _ref5.target;
        var isTool = target && (target.classList.contains(CLASS_TOOLS_EXPANDED) || target.closest(".".concat(CLASS_TOOLS_EXPANDED)));

        if (isTool) {
          return;
        }

        this.toolsList.classList.remove(CLASS_TOOLS_EXPANDED);
        this.removeSubMenuBackdrop(this.hideTools);
      }
    }, {
      key: "handlePopupShownEvent",
      value: function handlePopupShownEvent(_ref6) {
        var target = _ref6.target;
        $(target).on('hidden.bs.modal', this.handlePopupHiddenEvent);
        $(doc.body).off('shown.bs.modal', this.handlePopupShownEvent);
      }
    }, {
      key: "handlePopupHiddenEvent",
      value: function handlePopupHiddenEvent(_ref7) {
        var target = _ref7.target;
        this.hideTools({
          target: target
        });
        $(target).off('hidden.bs.modal', this.handlePopupHiddenEvent);
      }
    }, {
      key: "toggleInfoTray",
      value: function toggleInfoTray() {
        this.infoToggler.classList.toggle(CLASS_INFO_SELECTED);
        this.infoTray.classList.toggle(CLASS_INFO_VISIBLE);
        this.infoToggler.blur();
      }
    }]);

    return InfoBar;
  }();
})(window, window.document, window.eZ, window.jQuery);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.preview.info.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.preview.info.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ) {
  var iframe = doc.querySelector('#page-builder-preview');
  var POST_MESSAGE_ID = 'ez-cross-origin-event';
  var POST_MESSAGE_TIMEOUT = 100;
  var updateLocationUrlTimeoutId = null;
  /**
   * Updates location URL
   *
   * @function updateLocationUrl
   */

  var updateLocationUrl = function updateLocationUrl() {
    doc.body.classList.add('ez-page-builder--is-preview-loading');
    iframe.removeEventListener('load', reloadPageBuilder);
    global.setTimeout(setPageBuilderUrl, 0);
  };
  /**
   * Updates location URL on form submission
   *
   * @function updateLocationUrlOnSubmit
   * @param {Event} event
   * @param {Window} target
   */


  var updateLocationUrlOnSubmit = function updateLocationUrlOnSubmit(_ref) {
    var target = _ref.target;
    target.removeEventListener('load', updateLocationUrlOnSubmit);
    updateLocationUrl();
  };
  /**
   * Handles in-iframe-form submissions events.
   *
   * @function handleInIframeFormSubmit
   * @param {Window} iframeWindow
   */


  var handleInIframeFormSubmit = function handleInIframeFormSubmit(iframeWindow) {
    iframeWindow.removeEventListener('unload', updateLocationUrl);
    iframeWindow.addEventListener('load', updateLocationUrlOnSubmit, false);
  };
  /**
   * Sets a new app URL in the browser address bar
   *
   * @function setPageBuilderUrl
   */


  var setPageBuilderUrl = function setPageBuilderUrl() {
    try {
      var url = iframe.contentWindow.location.href;

      if (url.includes('page_preview[reference_timestamp]')) {
        iframe.addEventListener('load', reloadPageBuilder, false);
        doc.body.classList.remove('ez-page-builder--is-preview-loading');
      } else {
        global.location = global.Routing.generate('ezplatform.page_builder.url_preview', {
          url: url
        }, true);
      }
    } catch (error) {
      var errorScreen = doc.querySelector('.ez-page-builder__error-screen');
      doc.body.classList.remove('ez-page-builder--is-preview-loading');
      doc.body.classList.add('ez-page-builder--has-error');
      errorScreen.classList.remove('ez-page-builder__error-screen--hidden');
      errorScreen.querySelector('.ez-error-screen__link').setAttribute('href', global.location.href);
    }
  };
  /**
   * Fires the post message
   *
   * @function firePostMessage
   */


  var firePostMessage = function firePostMessage() {
    doc.body.classList.add('ez-page-builder--is-preview-loading');
    iframe.contentWindow.postMessage({
      id: POST_MESSAGE_ID
    }, eZ.pageBuilder.config.host);
    updateLocationUrlTimeoutId = global.setTimeout(updateLocationUrl, POST_MESSAGE_TIMEOUT);
  };
  /**
   * Handles the post message
   *
   * @function handlePostMessage
   * @param {Event} event
   */


  var handlePostMessage = function handlePostMessage(event) {
    if (event.data.id !== POST_MESSAGE_ID) {
      return;
    }

    if (updateLocationUrlTimeoutId) {
      global.clearTimeout(updateLocationUrlTimeoutId);
      updateLocationUrlTimeoutId = null;
    }

    var url = event.data.href;
    var generatedUrl = global.Routing.generate('ezplatform.page_builder.url_preview', {
      url: url
    }, true);

    if (url !== iframe.src) {
      global.location = generatedUrl;
      return;
    }

    doc.body.classList.remove('ez-page-builder--is-preview-loading');
  };
  /**
   * Updates Page Builder UI
   *
   * @function reloadPageBuilder
   * @param {Event} event
   */


  var reloadPageBuilder = function reloadPageBuilder(event) {
    var newIframe = event.target;
    var iframeWindow = newIframe.contentWindow;
    doc.body.classList.remove('ez-page-builder--is-preview-loading');
    newIframe.contentDocument.addEventListener('submit', handleInIframeFormSubmit.bind(null, iframeWindow), false);
    iframeWindow.addEventListener('unload', updateLocationUrl, false);
  };

  if (eZ.pageBuilder.config.isMultihostSetup) {
    iframe.addEventListener('load', firePostMessage, false);
    global.addEventListener('message', handlePostMessage, false);
  } else {
    iframe.addEventListener('load', reloadPageBuilder, false);
  }
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.view.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.view.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ) {
  var infobar = new eZ.modules.InfoBar();

  var removeLoadingSpinner = function removeLoadingSpinner() {
    return doc.body.classList.remove('ez-page-builder--is-preview-loading');
  };

  var iframe = doc.querySelector('.ez-page-builder__preview');
  iframe.src = iframe.dataset.src;

  if (eZ.pageBuilder.config.isMultihostSetup) {
    iframe.addEventListener('load', removeLoadingSpinner, false);
  } else {
    iframe.contentWindow.addEventListener('DOMContentLoaded', removeLoadingSpinner, false);
  }
})(window, window.document, window.eZ);

/***/ }),

/***/ 103:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.view.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.preview.info.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.view.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.view.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.preview.info.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.preview.info.js");


/***/ })

},[[103,"runtime"]]]);