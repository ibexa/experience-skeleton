(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-page-builder-preview-js"],{

/***/ "./public/bundles/ezplatformadminui/js/scripts/admin.version.edit.conflict.js":
/*!************************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/admin.version.edit.conflict.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, $, eZ, Translator, Routing) {
  var editVersion = function editVersion(event) {
    var showErrorNotification = eZ.helpers.notification.showErrorNotification;
    var contentDraftEditUrl = event.currentTarget.dataset.contentDraftEditUrl;
    var versionHasConflictUrl = event.currentTarget.dataset.versionHasConflictUrl;
    var contentId = event.currentTarget.dataset.contentId;
    var languageCode = event.currentTarget.dataset.languageCode;
    var checkEditPermissionLink = Routing.generate('ezplatform.content.check_edit_permission', {
      contentId: contentId,
      languageCode: languageCode
    });
    var errorMessage = Translator.trans(
    /*@Desc("You don't have permission to edit this Content item")*/
    'content.edit.permission.error', {}, 'content');

    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(versionHasConflictUrl, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }

      throw new Error(errorMessage);
    };

    var handleVersionDraftConflict = function handleVersionDraftConflict(response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        doc.querySelector('#edit-conflicted-draft').href = contentDraftEditUrl;
        $('#version-conflict-modal').modal('show');
      }

      if (response.status === 403) {
        response.text().then(showErrorNotification);
      }

      if (response.status === 200) {
        global.location.href = contentDraftEditUrl;
      }
    };

    event.preventDefault();
    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(eZ.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(handleVersionDraftConflict)["catch"](showErrorNotification);
  };

  doc.querySelectorAll('.ez-btn--content-draft-edit').forEach(function (button) {
    return button.addEventListener('click', editVersion, false);
  });
})(window, window.document, window.jQuery, window.eZ, window.Translator, window.Routing);

/***/ }),

/***/ "./public/bundles/ezplatformadminui/js/scripts/sidebar/instant.filter.js":
/*!*******************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/sidebar/instant.filter.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var filterTimeout;
  var SELECTOR_ITEM = '.ez-instant-filter__group-item';
  var timeout = 200;
  var filters = doc.querySelectorAll('.ez-instant-filter');

  var toggleGroupNameDisplay = function toggleGroupNameDisplay(group) {
    var hasVisibleChildren = !!_toConsumableArray(group.querySelectorAll(SELECTOR_ITEM)).filter(function (item) {
      return !item.hasAttribute('hidden');
    }).length;
    var groupName = group.querySelector('.ez-instant-filter__group-name');
    var methodName = hasVisibleChildren ? 'removeAttribute' : 'setAttribute';
    groupName[methodName]('hidden', true);
  };

  var filterItems = function filterItems(itemsMap, groups, event) {
    window.clearTimeout(filterTimeout);
    filterTimeout = window.setTimeout(function () {
      var query = event.target.value.toLowerCase();
      var results = itemsMap.filter(function (item) {
        return item.label.includes(query);
      });
      itemsMap.forEach(function (item) {
        return item.element.setAttribute('hidden', true);
      });
      results.forEach(function (item) {
        return item.element.removeAttribute('hidden');
      });
      groups.forEach(toggleGroupNameDisplay);
    }, timeout);
  };

  var initFilter = function initFilter(filter) {
    var filterInput = filter.querySelector('.ez-instant-filter__input');

    var groups = _toConsumableArray(filter.querySelectorAll('.ez-instant-filter__group'));

    var items = _toConsumableArray(filter.querySelectorAll(SELECTOR_ITEM));

    var itemsMap = items.reduce(function (total, item) {
      return [].concat(_toConsumableArray(total), [{
        label: item.textContent.toLowerCase(),
        element: item
      }]);
    }, []);
    filterInput.addEventListener('change', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('blur', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('keyup', filterItems.bind(filter, itemsMap, groups), false);
  };

  filters.forEach(initFilter);
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

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

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/timeline.view.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/timeline.view.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ, React, ReactDOM) {
  var timelineContainer = doc.querySelector('.ez-timeline-wrapper');

  var onTimelineEventSelect = function onTimelineEventSelect(oldTimestamp, newTimestamp, events) {
    var event = new CustomEvent('ez-timestamp-changed', {
      detail: {
        oldTimestamp: oldTimestamp,
        newTimestamp: newTimestamp,
        events: events
      }
    });
    doc.body.dispatchEvent(event);
  };

  var refreshPreviewIframe = function refreshPreviewIframe(event) {
    var previewUrl = new URL(eZ.pageBuilder.config.previewUrl);
    var referenceTimestamp = parseInt(event.detail.newTimestamp / 1000, 10);
    previewUrl.searchParams["delete"](eZ.pageBuilder.config.tokenQueryParamName);
    previewUrl.searchParams.append('page_preview[reference_timestamp]', referenceTimestamp);
    doc.querySelector('#page-builder-preview').src = decodeURIComponent(previewUrl.toString());
  };

  ReactDOM.render(React.createElement(eZ.modules.Timeline, {
    onTimelineEventSelect: onTimelineEventSelect,
    events: eZ.pageBuilder.timeline.events,
    selectedTimestamp: window.eZ.pageBuilder.config.referenceTimestamp * 1000
  }), timelineContainer);
  doc.body.addEventListener('ez-timestamp-changed', refreshPreviewIframe, false);
})(window, window.document, window.eZ, window.React, window.ReactDOM);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/versions.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/versions.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, $) {
  var CLASS_EDIT_DRAFT_CREATION_BTN = 'ez-btn--edit-with-draft-creation';
  var CLASS_DRAFT_EDIT_BTN = 'ez-btn--content-draft-edit';
  var modal = doc.querySelector('.ez-modal--versions');
  var tableWrapper = modal.querySelector('.ez-modal__table-wrapper');

  var editVersion = function editVersion(event) {
    var editWithDraftCreationBtn = event.target.closest(".".concat(CLASS_EDIT_DRAFT_CREATION_BTN));
    var isEditWithDraftCreationBtn = event.target.classList.contains(CLASS_EDIT_DRAFT_CREATION_BTN) || !!editWithDraftCreationBtn;
    var isDraftEditBtn = event.target.classList.contains(CLASS_DRAFT_EDIT_BTN) || event.target.closest(".".concat(CLASS_DRAFT_EDIT_BTN));

    if (isDraftEditBtn) {
      $(modal).modal('hide');
      return;
    }

    if (!isEditWithDraftCreationBtn) {
      return;
    }

    event.preventDefault();
    var contentId = editWithDraftCreationBtn.dataset.contentId;
    var versionNo = editWithDraftCreationBtn.dataset.versionNo;
    var languageCode = editWithDraftCreationBtn.dataset.languageCode;
    var versionEditForm = doc.querySelector('form[name="version_edit"]');
    var contentInfoInput = versionEditForm.querySelector('input[name="version_edit[content_info]"]');
    var versionInfoContentInfoInput = versionEditForm.querySelector('input[name="version_edit[version_info][content_info]"]');
    var versionInfoVersionNoInput = versionEditForm.querySelector('input[name="version_edit[version_info][version_no]"]');
    var languageInput = versionEditForm.querySelector('#version_edit_language_' + languageCode);
    contentInfoInput.value = contentId;
    versionInfoContentInfoInput.value = contentId;
    versionInfoVersionNoInput.value = versionNo;
    languageInput.setAttribute('checked', true);
    versionEditForm.submit();
  };

  tableWrapper.addEventListener('click', editVersion, false);
})(window, window.document, window.jQuery);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Icon = function Icon(props) {
  var linkHref = props.customPath ? props.customPath : window.eZ.helpers.icon.getIconPath(props.name);
  var className = 'ez-icon';

  if (props.extraClasses) {
    className = "".concat(className, " ").concat(props.extraClasses);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: linkHref
  }));
};

Icon.propTypes = {
  extraClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  customPath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Icon.defaultProps = {
  customPath: null,
  name: null
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline.module.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline.module.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _timeline_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline/timeline */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/timeline.js");
/* harmony import */ var _timeline_components_timeline_toggler_timeline_toggler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline/components/timeline-toggler/timeline.toggler */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-toggler/timeline.toggler.js");
/* harmony import */ var _timeline_components_back_to_current_time_back_to_current_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline/components/back-to-current-time/back.to.current.time */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/back-to-current-time/back.to.current.time.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var TimelineModule = /*#__PURE__*/function (_PureComponent) {
  _inherits(TimelineModule, _PureComponent);

  var _super = _createSuper(TimelineModule);

  function TimelineModule(props) {
    var _this;

    _classCallCheck(this, TimelineModule);

    _this = _super.call(this, props);
    _this.changeSelectedTimestamp = _this.changeSelectedTimestamp.bind(_assertThisInitialized(_this));
    _this.toggleFuturePreviewState = _this.toggleFuturePreviewState.bind(_assertThisInitialized(_this));
    _this.state = {
      selectedTimestamp: props.selectedTimestamp
    };
    return _this;
  }

  _createClass(TimelineModule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.toggleFuturePreviewState();
    }
  }, {
    key: "toggleFuturePreviewState",
    value: function toggleFuturePreviewState() {
      var selectedTimestamp = this.state.selectedTimestamp;
      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var now = convertDateToTimezone(new Date()).valueOf();
      var show = selectedTimestamp > now;
      document.body.classList.toggle('ez-future-preview', show);
    }
  }, {
    key: "changeSelectedTimestamp",
    value: function changeSelectedTimestamp(selectedTimestamp) {
      var _this2 = this;

      var _this$props = this.props,
          onTimelineEventSelect = _this$props.onTimelineEventSelect,
          events = _this$props.events;
      var oldTimestamp = this.state.selectedTimestamp;
      this.setState(function () {
        return {
          selectedTimestamp: selectedTimestamp
        };
      }, function () {
        _this2.toggleFuturePreviewState();

        onTimelineEventSelect(oldTimestamp, selectedTimestamp, events);
      });
    }
  }, {
    key: "renderTimelineBtn",
    value: function renderTimelineBtn() {
      var timelineTogglerContainer = document.querySelector('.ez-page-info-bar__timeline-toggler');
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_timeline_components_timeline_toggler_timeline_toggler__WEBPACK_IMPORTED_MODULE_4__["default"], null), timelineTogglerContainer);
    }
  }, {
    key: "renderBackToCurrentTime",
    value: function renderBackToCurrentTime() {
      var backToCurrentTime = document.querySelector('.ez-back-to-current-time');
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_timeline_components_back_to_current_time_back_to_current_time__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onSelectedTimestampChange: this.changeSelectedTimestamp
      }), backToCurrentTime);
    }
  }, {
    key: "render",
    value: function render() {
      var events = this.props.events;
      var selectedTimestamp = this.state.selectedTimestamp;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-timeline"
      }, this.renderTimelineBtn(), this.renderBackToCurrentTime(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_timeline_timeline__WEBPACK_IMPORTED_MODULE_3__["default"], {
        events: events,
        selectedTimestamp: selectedTimestamp,
        onSelectedTimestampChange: this.changeSelectedTimestamp
      }));
    }
  }]);

  return TimelineModule;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

TimelineModule.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onTimelineEventSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  selectedTimestamp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TimelineModule);
eZ.addConfig('modules.Timeline', TimelineModule);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/all-events-view/all.events.view.js":
/*!***************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/all-events-view/all.events.view.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
/* harmony import */ var _events_table_events_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events-table/events.table */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-table/events.table.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var AllEventsView = /*#__PURE__*/function (_Component) {
  _inherits(AllEventsView, _Component);

  var _super = _createSuper(AllEventsView);

  function AllEventsView(props) {
    var _this;

    _classCallCheck(this, AllEventsView);

    _this = _super.call(this, props);
    _this.toggleList = _this.toggleList.bind(_assertThisInitialized(_this));
    _this.hideList = _this.hideList.bind(_assertThisInitialized(_this));
    _this.closeOnOutsideClick = _this.closeOnOutsideClick.bind(_assertThisInitialized(_this));
    _this._refContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.backdrop = null;
    _this.state = {
      isListVisible: false
    };
    return _this;
  }

  _createClass(AllEventsView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleOutsideClickListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleOutsideClickListeners();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleOutsideClickListeners(true);
    }
  }, {
    key: "closeOnOutsideClick",
    value: function closeOnOutsideClick(event) {
      var clickedOutside = !this._refContainer.current.contains(event.target);

      if (clickedOutside) {
        this.hideList();
      }
    }
  }, {
    key: "hideList",
    value: function hideList() {
      this.setState(function () {
        return {
          isListVisible: false
        };
      });
    }
  }, {
    key: "toggleList",
    value: function toggleList() {
      this.setState(function (state) {
        return {
          isListVisible: !state.isListVisible
        };
      }, function () {
        return window.eZ.helpers.tooltips.hideAll();
      });
    }
  }, {
    key: "addBackdrop",
    value: function addBackdrop() {
      this.backdrop = document.createElement('div');
      this.backdrop.classList.add('ez-backdrop');
      this.backdrop.addEventListener('click', this.hideList, false);
      document.body.appendChild(this.backdrop);
    }
  }, {
    key: "removeBackdrop",
    value: function removeBackdrop() {
      document.body.removeChild(this.backdrop);
      this.backdrop = null;
    }
  }, {
    key: "handleOutsideClickListeners",
    value: function handleOutsideClickListeners() {
      var forceRemoving = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var isListVisible = this.state.isListVisible;

      if (isListVisible && !this.backdrop) {
        this.addBackdrop();
        document.addEventListener('click', this.closeOnOutsideClick, false);
      }

      if ((!isListVisible || forceRemoving) && this.backdrop) {
        this.removeBackdrop();
        document.removeEventListener('click', this.closeOnOutsideClick);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var title = Translator.trans(
      /*@Desc("Scheduled events")*/
      'scheduled.events', {}, 'timeline');
      var isListVisible = this.state.isListVisible;
      var togglerAttrs = {
        className: 'c-all-events-view__toggler',
        onClick: this.toggleList
      };

      if (isListVisible) {
        togglerAttrs.className = "".concat(togglerAttrs.className, " ").concat(togglerAttrs.className, "--is-list-visible");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-all-events-view",
        ref: this._refContainer,
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", togglerAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "view-custom",
        extraClasses: "ez-icon--small-medium"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_table_events_table__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
        isListVisible: this.state.isListVisible
      })));
    }
  }]);

  return AllEventsView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AllEventsView.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onSelectedTimestampChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AllEventsView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/back-to-current-time/back.to.current.time.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/back-to-current-time/back.to.current.time.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon.js */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var BackToCurrentTime = /*#__PURE__*/function (_PureComponent) {
  _inherits(BackToCurrentTime, _PureComponent);

  var _super = _createSuper(BackToCurrentTime);

  function BackToCurrentTime(props) {
    var _this;

    _classCallCheck(this, BackToCurrentTime);

    _this = _super.call(this, props);
    _this.setCurrentTime = _this.setCurrentTime.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BackToCurrentTime, [{
    key: "setCurrentTime",
    value: function setCurrentTime() {
      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var onSelectedTimestampChange = this.props.onSelectedTimestampChange;
      onSelectedTimestampChange(convertDateToTimezone(new Date()).valueOf());
    }
  }, {
    key: "render",
    value: function render() {
      var title = Translator.trans(
      /*@Desc("Go back to current time")*/
      'back.current.time', {}, 'timeline');
      var warningText = Translator.trans(
      /*@Desc("Previewing content in the future")*/
      'back_to_current_time.warning.text', {}, 'timeline');
      var infoText = Translator.trans(
      /*@Desc("Go back to current time")*/
      'back_to_current_time.info.text', {}, 'timeline');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-back-to-current-time"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-back-to-current-time__btn-wrapper",
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-icon c-back-to-current-time__btn",
        onClick: this.setCurrentTime
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "back-current-date"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "c-back-to-current-time__warning"
      }, warningText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "c-back-to-current-time__info"
      }, infoText));
    }
  }]);

  return BackToCurrentTime;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

BackToCurrentTime.propTypes = {
  onSelectedTimestampChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BackToCurrentTime);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-paginator/calendar.paginator.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-paginator/calendar.paginator.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");



var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var CalendarPaginator = function CalendarPaginator(_ref) {
  var displayedDate = _ref.displayedDate,
      onMonthChange = _ref.onMonthChange;
  var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
  var date = convertDateToTimezone(displayedDate);

  var setPreviousMonth = function setPreviousMonth() {
    date.month(date.month() - 1);
    onMonthChange(date.valueOf());
  };

  var setNextMonth = function setNextMonth() {
    date.month(date.month() + 1);
    onMonthChange(date.valueOf());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-paginator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-paginator__caret",
    onClick: setPreviousMonth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "caret-back",
    extraClasses: "ez-icon--small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, MONTH_NAMES[date.month()], " ", date.year()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-calendar-paginator__caret",
    onClick: setNextMonth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "caret-next",
    extraClasses: "ez-icon--small"
  })));
};

CalendarPaginator.propTypes = {
  displayedDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onMonthChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarPaginator);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar/calendar.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar/calendar.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
/* harmony import */ var _calendar_paginator_calendar_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar-paginator/calendar.paginator */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-paginator/calendar.paginator.js");
/* harmony import */ var _month_view_month_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../month-view/month.view */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/month-view/month.view.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Calendar = /*#__PURE__*/function (_PureComponent) {
  _inherits(Calendar, _PureComponent);

  var _super = _createSuper(Calendar);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _super.call(this, props);
    _this.toggleCalendar = _this.toggleCalendar.bind(_assertThisInitialized(_this));
    _this.hideCalendar = _this.hideCalendar.bind(_assertThisInitialized(_this));
    _this.changeMonth = _this.changeMonth.bind(_assertThisInitialized(_this));
    _this.changeSelectedTimestamp = _this.changeSelectedTimestamp.bind(_assertThisInitialized(_this));
    _this.closeOnOutsideClick = _this.closeOnOutsideClick.bind(_assertThisInitialized(_this));
    _this._refContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.backdrop = null;
    _this.state = {
      isCalendarExpanded: false,
      selectedDate: props.selectedTimestamp,
      displayedDate: props.selectedTimestamp
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleOutsideClickListeners();
      window.eZ.helpers.tooltips.parse();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      this.handleOutsideClickListeners();

      if (prevProps.selectedTimestamp === this.props.selectedTimestamp) {
        return;
      }

      this.setState(function () {
        return {
          selectedDate: _this2.props.selectedTimestamp,
          displayedDate: _this2.props.selectedTimestamp
        };
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleOutsideClickListeners(true);
    }
  }, {
    key: "closeOnOutsideClick",
    value: function closeOnOutsideClick(event) {
      var clickedOutside = !this._refContainer.current.contains(event.target);

      if (clickedOutside) {
        this.hideCalendar();
      }
    }
  }, {
    key: "hideCalendar",
    value: function hideCalendar() {
      this.setState(function () {
        return {
          isCalendarExpanded: false
        };
      });
    }
  }, {
    key: "toggleCalendar",
    value: function toggleCalendar() {
      this.setState(function (state) {
        return {
          isCalendarExpanded: !state.isCalendarExpanded
        };
      }, function () {
        return window.eZ.helpers.tooltips.hideAll();
      });
    }
  }, {
    key: "changeMonth",
    value: function changeMonth(displayedDate) {
      this.setState(function () {
        return {
          displayedDate: displayedDate
        };
      });
    }
  }, {
    key: "changeSelectedTimestamp",
    value: function changeSelectedTimestamp(selectedTimestamp) {
      this.props.onSelectedTimestampChange(selectedTimestamp);
    }
  }, {
    key: "addBackdrop",
    value: function addBackdrop() {
      this.backdrop = document.createElement('div');
      this.backdrop.classList.add('ez-backdrop');
      this.backdrop.addEventListener('click', this.hideCalendar, false);
      document.body.appendChild(this.backdrop);
    }
  }, {
    key: "removeBackdrop",
    value: function removeBackdrop() {
      document.body.removeChild(this.backdrop);
      this.backdrop = null;
    }
  }, {
    key: "handleOutsideClickListeners",
    value: function handleOutsideClickListeners() {
      var forceRemoving = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var isCalendarExpanded = this.state.isCalendarExpanded;

      if (isCalendarExpanded && !this.backdrop) {
        this.addBackdrop();
        document.addEventListener('click', this.closeOnOutsideClick, false);
      }

      if ((!isCalendarExpanded || forceRemoving) && this.backdrop) {
        this.removeBackdrop();
        document.removeEventListener('click', this.closeOnOutsideClick);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var title = Translator.trans(
      /*@Desc("Timeline calendar")*/
      'timeline.calendar', {}, 'timeline');
      var _this$state = this.state,
          isCalendarExpanded = _this$state.isCalendarExpanded,
          selectedDate = _this$state.selectedDate,
          displayedDate = _this$state.displayedDate;
      var attrs = {
        className: 'c-calendar'
      };

      if (isCalendarExpanded) {
        attrs.className = "".concat(attrs.className, " ").concat(attrs.className, "--is-expanded");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, attrs, {
        ref: this._refContainer
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "c-calendar__toggler",
        onClick: this.toggleCalendar,
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "schedule",
        extraClasses: "ez-icon--small-medium"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-calendar__view"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calendar_paginator_calendar_paginator__WEBPACK_IMPORTED_MODULE_3__["default"], {
        displayedDate: displayedDate,
        onMonthChange: this.changeMonth
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_month_view_month_view__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, this.props, {
        displayedDate: displayedDate,
        selectedDate: selectedDate,
        onChangeSelectedTimestamp: this.changeSelectedTimestamp
      }))));
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

Calendar.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onSelectedTimestampChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectedTimestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/day-view/day.view.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/day-view/day.view.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _event_marker_event_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-marker/event.marker */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js");




var DayView = function DayView(_ref) {
  var event = _ref.event,
      timestamp = _ref.timestamp,
      isSelected = _ref.isSelected,
      isSelectable = _ref.isSelectable,
      isNextMonth = _ref.isNextMonth,
      day = _ref.day,
      onChangeSelectedTimestamp = _ref.onChangeSelectedTimestamp;

  var changeSelectedTimestamp = function changeSelectedTimestamp() {
    return onChangeSelectedTimestamp(timestamp);
  };

  var renderMarker = function renderMarker() {
    if (!event) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_marker_event_marker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      event: event,
      inCalendar: true
    });
  };

  var wrapperClass = 'c-day-view';
  var wrapperAttrs = {
    className: wrapperClass
  };
  var labelAttrs = {
    className: 'c-day-view__label'
  };

  if (isSelected) {
    wrapperAttrs.className = "".concat(wrapperAttrs.className, " ").concat(wrapperClass, "--is-selected");
  }

  if (isSelectable) {
    wrapperAttrs.className = "".concat(wrapperAttrs.className, " ").concat(wrapperClass, "--is-selectable");
    wrapperAttrs.onClick = changeSelectedTimestamp;
  }

  if (isNextMonth) {
    labelAttrs.className = "".concat(labelAttrs.className, " ").concat(labelAttrs.className, "--is-next-month");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", wrapperAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", labelAttrs, day), renderMarker());
};

DayView.propTypes = {
  day: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  timestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isSelected,
  onChangeSelectedTimestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  event: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isSelectable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isNextMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
DayView.defaultProps = {
  isSelectable: true,
  isNextMonth: false
};
/* harmony default export */ __webpack_exports__["default"] = (DayView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
/* harmony import */ var _event_tooltip_event_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-tooltip/event.tooltip */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-tooltip/event.tooltip.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var EventMarket = /*#__PURE__*/function (_Component) {
  _inherits(EventMarket, _Component);

  var _super = _createSuper(EventMarket);

  function EventMarket(props) {
    var _this;

    _classCallCheck(this, EventMarket);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.renderMarkerIcon = _this.renderMarkerIcon.bind(_assertThisInitialized(_this));
    _this.showTooltip = _this.showTooltip.bind(_assertThisInitialized(_this));
    _this.hideTooltip = _this.hideTooltip.bind(_assertThisInitialized(_this));
    _this._refMarker = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.hideTooltipTimeout = null;
    _this.state = {
      onLeft: false,
      isTooltipVisible: false
    };
    return _this;
  }

  _createClass(EventMarket, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var markerRect = this._refMarker.current.getBoundingClientRect();

      var onLeft = markerRect.left > window.innerWidth / 2;
      this.setState(function () {
        return {
          onLeft: onLeft
        };
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          onSetTime = _this$props.onSetTime,
          timestamp = _this$props.timestamp;
      onSetTime(parseInt(timestamp, 10));
    }
  }, {
    key: "showTooltip",
    value: function showTooltip() {
      this.toggleTooltipVisibility(true);
      window.document.body.addEventListener('mousemove', this.hideTooltip, false);
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip(event) {
      var _this2 = this;

      var eventMarker = event.target.closest('.c-event-marker');
      window.clearTimeout(this.hideTooltipTimeout);

      if (eventMarker) {
        return;
      }

      this.hideTooltipTimeout = window.setTimeout(function () {
        _this2.toggleTooltipVisibility(false);

        window.document.body.removeEventListener('mousemove', _this2.hideTooltip, false);
      }, 200);
    }
  }, {
    key: "toggleTooltipVisibility",
    value: function toggleTooltipVisibility(isTooltipVisible) {
      this.setState(function () {
        return {
          isTooltipVisible: isTooltipVisible
        };
      });
    }
  }, {
    key: "renderMarkerIcon",
    value: function renderMarkerIcon() {
      var _this$props2 = this.props,
          event = _this$props2.event,
          inCalendar = _this$props2.inCalendar;
      var onLeft = this.state.onLeft;
      var iconClass = 'c-event-marker__icon';

      if (onLeft) {
        iconClass = "".concat(iconClass, " ").concat(iconClass, "--tooltip-on-left");
      }

      if (event.descriptions.length === 1) {
        var extraClasses = "ez-icon--small ez-icon--secondary ".concat(iconClass);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          customPath: event.icon,
          extraClasses: extraClasses
        });
      } else {
        var label = inCalendar ? "+".concat(event.descriptions.length) : event.descriptions.length;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: iconClass
        }, label);
      }
    }
  }, {
    key: "renderEventTooltip",
    value: function renderEventTooltip() {
      var event = this.props.event;
      var _this$state = this.state,
          onLeft = _this$state.onLeft,
          isTooltipVisible = _this$state.isTooltipVisible;

      if (!isTooltipVisible) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_tooltip_event_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
        descriptions: event.descriptions,
        onLeft: onLeft
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          leftPosition = _this$props3.leftPosition,
          inCalendar = _this$props3.inCalendar,
          event = _this$props3.event;
      var style = {
        left: "".concat(leftPosition, "%")
      };
      var attrs = {
        className: 'c-event-marker',
        ref: this._refMarker,
        onMouseEnter: this.showTooltip
      };

      if (event.type) {
        attrs['data-event-type'] = event.type;
      }

      if (inCalendar) {
        attrs.className = "".concat(attrs.className, " ").concat(attrs.className, "--in-calendar");
      } else {
        attrs.onClick = this.handleClick;
        attrs.style = style;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", attrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "c-event-marker__btn"
      }, this.renderMarkerIcon()), this.renderEventTooltip());
    }
  }]);

  return EventMarket;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

EventMarket.propTypes = {
  event: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onSetTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  timestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  leftPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  inCalendar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
EventMarket.defaultProps = {
  inCalendar: false
};
/* harmony default export */ __webpack_exports__["default"] = (EventMarket);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-tooltip/event.tooltip.js":
/*!***********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-tooltip/event.tooltip.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var EventTooltip = /*#__PURE__*/function (_PureComponent) {
  _inherits(EventTooltip, _PureComponent);

  var _super = _createSuper(EventTooltip);

  function EventTooltip(props) {
    var _this;

    _classCallCheck(this, EventTooltip);

    _this = _super.call(this, props);
    _this.renderDescription = _this.renderDescription.bind(_assertThisInitialized(_this));
    _this._refTooltip = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.state = {
      topPosition: -25
    };
    return _this;
  }

  _createClass(EventTooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var topPosition = this.state.topPosition;

      var tooltipRect = this._refTooltip.current.getBoundingClientRect();

      var isOutsiteWindow = tooltipRect.top + tooltipRect.height + topPosition > window.innerHeight;

      if (!isOutsiteWindow) {
        return;
      }

      var newTopPosition = window.innerHeight - (tooltipRect.top + tooltipRect.height - topPosition + 50);
      this.setState(function () {
        return {
          topPosition: newTopPosition
        };
      });
    }
  }, {
    key: "setInnerHTML",
    value: function setInnerHTML(__html) {
      return {
        __html: __html
      };
    }
  }, {
    key: "renderDescription",
    value: function renderDescription(description, index) {
      var key = "".concat(index, "-").concat(description.length);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-event-tooltip__item",
        key: key,
        dangerouslySetInnerHTML: this.setInnerHTML(description)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var topPosition = this.state.topPosition;
      var _this$props = this.props,
          descriptions = _this$props.descriptions,
          onLeft = _this$props.onLeft;
      var attrs = {
        className: 'c-event-tooltip',
        ref: this._refTooltip,
        style: {
          top: topPosition
        }
      };

      if (onLeft) {
        attrs.className = "".concat(attrs.className, " ").concat(attrs.className, "--on-left");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", attrs, descriptions.map(this.renderDescription));
    }
  }]);

  return EventTooltip;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

EventTooltip.propTypes = {
  descriptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onLeft: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EventTooltip);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-table/events.table.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-table/events.table.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _events_table_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.table.row */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-table/events.table.row.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var EventsTable = /*#__PURE__*/function (_PureComponent) {
  _inherits(EventsTable, _PureComponent);

  var _super = _createSuper(EventsTable);

  function EventsTable(props) {
    var _this;

    _classCallCheck(this, EventsTable);

    _this = _super.call(this, props);
    _this.renderTableItem = _this.renderTableItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EventsTable, [{
    key: "renderTableItem",
    value: function renderTableItem(event, index) {
      var onSelectedTimestampChange = this.props.onSelectedTimestampChange;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_table_row__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: index,
        data: event,
        onSelectedTimestampChange: onSelectedTimestampChange
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          events = _this$props.events,
          isListVisible = _this$props.isListVisible;
      var attrs = {
        className: 'c-events-table'
      };
      var tableTitle = Translator.trans(
      /*@Desc("Upcoming scheduled events")*/
      'events_table.title', {}, 'timeline');
      var eventHeader = Translator.trans(
      /*@Desc("Event")*/
      'events_table.event.header', {}, 'timeline');
      var dateHeader = Translator.trans(
      /*@Desc("Date")*/
      'events_table.date.header', {}, 'timeline');

      if (isListVisible) {
        attrs.className = "".concat(attrs.className, " ").concat(attrs.className, "--is-visible");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", attrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "c-events-table__title"
      }, tableTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-scrollable-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "table table-hover"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, eventHeader), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, dateHeader))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, events.map(this.renderTableItem)))));
    }
  }]);

  return EventsTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

EventsTable.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onSelectedTimestampChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EventsTable);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-table/events.table.row.js":
/*!*************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-table/events.table.row.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var EventsTableRow = /*#__PURE__*/function (_PureComponent) {
  _inherits(EventsTableRow, _PureComponent);

  var _super = _createSuper(EventsTableRow);

  function EventsTableRow(props) {
    var _this;

    _classCallCheck(this, EventsTableRow);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EventsTableRow, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          onSelectedTimestampChange = _this$props.onSelectedTimestampChange,
          data = _this$props.data;
      onSelectedTimestampChange(data.date * 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;
      var formatFullDateTime = window.eZ.helpers.timezone.formatFullDateTime;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        onClick: this.handleClick,
        className: "c-events-table-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "c-events-table-row__cell"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "c-events-table-row__icon-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        customPath: data.icon
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "c-events-table-row__cell"
      }, data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "c-events-table-row__cell"
      }, formatFullDateTime(data.date * 1000)));
    }
  }]);

  return EventsTableRow;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

EventsTableRow.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onSelectedTimestampChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EventsTableRow);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/month-view/month.view.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/month-view/month.view.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _day_view_day_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../day-view/day.view */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/day-view/day.view.js");
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var MonthView = /*#__PURE__*/function (_PureComponent) {
  _inherits(MonthView, _PureComponent);

  var _super = _createSuper(MonthView);

  function MonthView(props) {
    var _this;

    _classCallCheck(this, MonthView);

    _this = _super.call(this, props);

    var eventsByDay = _this.filterEvents(props.events);

    _this.state = {
      eventsByDay: eventsByDay
    };
    return _this;
  }

  _createClass(MonthView, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var events = this.props.events;
      var areSameEvents = events.every(function (event, index) {
        return prevProps.events[index] && prevProps.events[index].date === event.date;
      });

      if (areSameEvents) {
        return;
      }

      var eventsByDay = this.filterEvents(events);
      this.setState(function () {
        return {
          eventsByDay: eventsByDay
        };
      });
    }
  }, {
    key: "groupEventsByDay",
    value: function groupEventsByDay(total, event) {
      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var eventDate = convertDateToTimezone(event.date * 1000);
      var timestamp = convertDateToTimezone(new Date(eventDate.year(), eventDate.month(), eventDate.date(), 12)).hour(12).valueOf();

      if (total[timestamp]) {
        total[timestamp] = {
          descriptions: [].concat(_toConsumableArray(total[timestamp].descriptions), [event.description])
        };
      } else {
        total[timestamp] = {
          icon: event.icon,
          type: event.type,
          descriptions: [event.description]
        };
      }

      return total;
    }
  }, {
    key: "filterEvents",
    value: function filterEvents(events) {
      var groupedEvents = events.reduce(this.groupEventsByDay, {});
      return groupedEvents;
    }
  }, {
    key: "renderHeaders",
    value: function renderHeaders() {
      return DAYS.map(function (day) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "c-month-view__header",
          key: day
        }, day);
      });
    }
  }, {
    key: "renderDaysBeforeMonth",
    value: function renderDaysBeforeMonth() {
      var _this2 = this;

      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var displayedDate = convertDateToTimezone(this.props.displayedDate);
      var firstDayOfMonth = new Date(displayedDate.year(), displayedDate.month(), 1);
      var day = firstDayOfMonth.getDay();
      var days = [];
      var now = convertDateToTimezone(new Date());

      for (var i = 0; i !== day; i++) {
        days.push('');
      }

      return days.map(function (item, index) {
        var date = convertDateToTimezone(new Date(displayedDate.year(), displayedDate.month(), index - day + 1, 12)).hour(12);
        var label = date.date();
        var timestamp = date.valueOf();
        var isNotSelectable = now.isAfter(date, 'day');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_day_view_day_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: timestamp,
          timestamp: timestamp,
          day: label,
          event: _this2.state.eventsByDay[timestamp],
          isSelectable: !isNotSelectable,
          onChangeSelectedTimestamp: _this2.props.onChangeSelectedTimestamp
        });
      });
    }
  }, {
    key: "renderDaysOfMonth",
    value: function renderDaysOfMonth() {
      var _this3 = this;

      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var displayedDate = convertDateToTimezone(this.props.displayedDate);
      var daysInMonth = displayedDate.daysInMonth();
      var days = [];
      var selectedDate = convertDateToTimezone(this.props.selectedDate);
      var now = convertDateToTimezone(new Date());

      for (var i = 0; i !== daysInMonth; i++) {
        days.push('');
      }

      return days.map(function (item, index) {
        var date = convertDateToTimezone(new Date(displayedDate.year(), displayedDate.month(), index + 1, 12)).hour(12);
        var label = date.date();
        var isSelected = selectedDate.isSame(date, 'day');
        var isNotSelectable = now.isAfter(date, 'day');
        var isToday = now.isSame(date, 'day');
        var dailyTimestamp = date.valueOf();

        if (isToday) {
          date.hour(now.hour());
          date.minute(now.minute());
        }

        var timestamp = date.valueOf();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_day_view_day_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: timestamp,
          timestamp: timestamp,
          day: label,
          event: _this3.state.eventsByDay[dailyTimestamp],
          isSelected: isSelected,
          isSelectable: !isNotSelectable,
          onChangeSelectedTimestamp: _this3.props.onChangeSelectedTimestamp
        });
      });
    }
  }, {
    key: "renderDaysAfterMonth",
    value: function renderDaysAfterMonth() {
      var _this4 = this;

      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var displayedDate = convertDateToTimezone(this.props.displayedDate);
      var daysInMonth = displayedDate.daysInMonth();
      var lastDayOfMonth = new Date(displayedDate.year(), displayedDate.month(), daysInMonth);
      var day = 6 - lastDayOfMonth.getDay();
      var days = [];
      var now = convertDateToTimezone(new Date());

      for (var i = 0; i !== day; i++) {
        days.push('');
      }

      return days.map(function (item, index) {
        var date = convertDateToTimezone(new Date(displayedDate.year(), displayedDate.month() + 1, index + 1, 12)).hour(12);
        var label = date.date();
        var timestamp = date.valueOf();
        var isNotSelectable = now.isAfter(date, 'day');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_day_view_day_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: timestamp,
          timestamp: timestamp,
          day: label,
          event: _this4.state.eventsByDay[timestamp],
          isNextMonth: true,
          isSelectable: !isNotSelectable,
          onChangeSelectedTimestamp: _this4.props.onChangeSelectedTimestamp
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-month-view"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-month-view__headers"
      }, this.renderHeaders()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-month-view__days"
      }, this.renderDaysBeforeMonth(), this.renderDaysOfMonth(), this.renderDaysAfterMonth()));
    }
  }]);

  return MonthView;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

MonthView.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onChangeSelectedTimestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  month: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  displayedDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date).isRequired,
  selectedDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MonthView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/slider/slider.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/slider/slider.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _thumb_thumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../thumb/thumb */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/thumb/thumb.js");
/* harmony import */ var _event_marker_event_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-marker/event.marker */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js");
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var MINUTES_IN_HOUR = 60;
var MINUTES_IN_DAY = MINUTES_IN_HOUR * 24;

var Slider = /*#__PURE__*/function (_Component) {
  _inherits(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);
    _this._refSlider = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.renderMarker = _this.renderMarker.bind(_assertThisInitialized(_this));
    _this.setTime = _this.setTime.bind(_assertThisInitialized(_this));
    _this.groupEventsByDate = _this.groupEventsByDate.bind(_assertThisInitialized(_this));
    _this.updateSliderRect = _this.updateSliderRect.bind(_assertThisInitialized(_this));

    var eventsToDisplay = _this.filterEvents(props.events, props.selectedTimestamp);

    _this.state = {
      sliderRect: {},
      eventsToDisplay: eventsToDisplay,
      selectedTimestamp: props.selectedTimestamp
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSliderRect();
      window.addEventListener('resize', this.updateSliderRect, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateSliderRect);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var _this$props = this.props,
          selectedTimestamp = _this$props.selectedTimestamp,
          events = _this$props.events;
      var areSameEvents = events.every(function (event, index) {
        return prevProps.events[index] && prevProps.events[index].date === event.date;
      });

      if (prevProps.selectedTimestamp === selectedTimestamp && areSameEvents) {
        return;
      }

      var eventsToDisplay = this.filterEvents(events, selectedTimestamp);
      this.setState(function () {
        return {
          selectedTimestamp: _this2.props.selectedTimestamp,
          eventsToDisplay: eventsToDisplay
        };
      });
    }
  }, {
    key: "updateSliderRect",
    value: function updateSliderRect() {
      var _this3 = this;

      this.setState(function () {
        return {
          sliderRect: _this3._refSlider.current.getBoundingClientRect()
        };
      });
    }
  }, {
    key: "groupEventsByDate",
    value: function groupEventsByDate(now, total, event) {
      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var eventDate = convertDateToTimezone(event.date * 1000, undefined, true);
      var isSameDate = eventDate.isSame(now, 'day');
      var timestamp = new Date(eventDate.year(), eventDate.month(), eventDate.date(), eventDate.hour(), eventDate.minute() + 1).getTime();

      if (!isSameDate) {
        return total;
      }

      if (total[timestamp]) {
        total[timestamp] = {
          descriptions: [].concat(_toConsumableArray(total[timestamp].descriptions), [event.description])
        };
      } else {
        total[timestamp] = {
          icon: event.icon,
          type: event.type,
          descriptions: [event.description]
        };
      }

      return total;
    }
  }, {
    key: "filterEvents",
    value: function filterEvents(events, selectedTimestamp) {
      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var now = convertDateToTimezone(selectedTimestamp);
      var groupedEvents = events.reduce(this.groupEventsByDate.bind(this, now), {});
      return groupedEvents;
    }
  }, {
    key: "setTime",
    value: function setTime(selectedTimestamp) {
      this.props.onSelectedTimestampChange(selectedTimestamp);
    }
  }, {
    key: "renderMarker",
    value: function renderMarker(_ref, index) {
      var _ref2 = _slicedToArray(_ref, 2),
          timestamp = _ref2[0],
          event = _ref2[1];

      var date = window.moment(parseInt(timestamp, 10));
      var minutesCount = date.hour() * MINUTES_IN_HOUR + date.minutes();
      var leftPosition = minutesCount * 100 / MINUTES_IN_DAY;
      var key = "".concat(index, "-").concat(timestamp);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_marker_event_marker__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: key,
        timestamp: timestamp,
        event: event,
        onSetTime: this.setTime,
        leftPosition: leftPosition
      });
    }
  }, {
    key: "renderHours",
    value: function renderHours() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hours"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "12:00 AM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "3:00 AM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "6:00 AM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "9:00 AM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "12:00 PM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "3:00 PM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "6:00 PM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "9:00 PM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider__hour",
        "data-hour": "11:59 PM"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          eventsToDisplay = _this$state.eventsToDisplay,
          selectedTimestamp = _this$state.selectedTimestamp;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-slider",
        ref: this._refSlider
      }, this.renderHours(), Object.entries(eventsToDisplay).map(this.renderMarker), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_thumb_thumb__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sliderRect: this.state.sliderRect,
        selectedTimestamp: selectedTimestamp,
        onSetTime: this.setTime
      }));
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Slider.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onEventSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSelectedTimestampChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectedTimestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/thumb/thumb.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/thumb/thumb.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var KEYCODE_RIGHT_BTN = 3;
var MINUTES_IN_HOUR = 60;
var MINUTES_IN_DAY = MINUTES_IN_HOUR * 24;

var Thumb = /*#__PURE__*/function (_Component) {
  _inherits(Thumb, _Component);

  var _super = _createSuper(Thumb);

  function Thumb(props) {
    var _this;

    _classCallCheck(this, Thumb);

    _this = _super.call(this, props);
    _this.attachMouseMoveEvent = _this.attachMouseMoveEvent.bind(_assertThisInitialized(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_this));
    _this.removeListeners = _this.removeListeners.bind(_assertThisInitialized(_this));
    _this.onTimeChangeTimeout = null;
    _this.backdrop = null;

    var leftPosition = _this.calculateLeftPosition(props.selectedTimestamp);

    _this.state = {
      leftPosition: leftPosition
    };
    return _this;
  }

  _createClass(Thumb, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.selectedTimestamp === this.props.selectedTimestamp) {
        return;
      }

      var leftPosition = this.calculateLeftPosition(this.props.selectedTimestamp);
      this.setState(function () {
        return {
          leftPosition: leftPosition
        };
      });
    }
  }, {
    key: "calculateLeftPosition",
    value: function calculateLeftPosition(timestamp) {
      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var date = convertDateToTimezone(parseInt(timestamp, 10));
      var minutesCount = date.hour() * MINUTES_IN_HOUR + date.minutes();
      return minutesCount * 100 / MINUTES_IN_DAY;
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      document.body.removeEventListener('mousemove', this.handleMouseMove);
      document.body.removeEventListener('mouseup', this.removeListeners);
      this.removeBackdrop();
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      var sliderRect = this.props.sliderRect;
      var isMovedOutside = event.clientX > sliderRect.right || event.clientX < sliderRect.left;

      if (isMovedOutside) {
        return;
      }

      var convertDateToTimezone = window.eZ.helpers.timezone.convertDateToTimezone;
      var diff = event.clientX - sliderRect.left;
      var leftPosition = diff / sliderRect.width * 100;
      var minutesCount = MINUTES_IN_DAY * leftPosition / 100;
      var hour = Math.floor(minutesCount / MINUTES_IN_HOUR);
      var minutes = Math.floor(minutesCount % MINUTES_IN_HOUR);
      var date = convertDateToTimezone(parseInt(this.props.selectedTimestamp, 10));
      date.hour(hour);
      date.minutes(minutes);
      window.clearTimeout(this.onTimeChangeTimeout);
      this.onTimeChangeTimeout = window.setTimeout(this.setTime.bind(this, date.valueOf()), 300);
      this.setState(function () {
        return {
          leftPosition: leftPosition
        };
      });
    }
  }, {
    key: "setTime",
    value: function setTime(timestamp) {
      this.props.onSetTime(timestamp);
    }
  }, {
    key: "attachMouseMoveEvent",
    value: function attachMouseMoveEvent(_ref) {
      var nativeEvent = _ref.nativeEvent;
      var keyCode = nativeEvent.keyCode || nativeEvent.which;

      if (keyCode === KEYCODE_RIGHT_BTN) {
        return;
      }

      this.addBackdrop();
      document.body.addEventListener('mousemove', this.handleMouseMove, false);
      document.body.addEventListener('mouseup', this.removeListeners, false);
    }
  }, {
    key: "addBackdrop",
    value: function addBackdrop() {
      this.backdrop = document.createElement('div');
      this.backdrop.classList.add('ez-backdrop');
      document.body.appendChild(this.backdrop);
    }
  }, {
    key: "removeBackdrop",
    value: function removeBackdrop() {
      document.body.removeChild(this.backdrop);
      this.backdrop = null;
    }
  }, {
    key: "render",
    value: function render() {
      var leftPosition = this.state.leftPosition;
      var style = {
        left: "".concat(leftPosition, "%")
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-thumb",
        onMouseDown: this.attachMouseMoveEvent,
        style: style
      });
    }
  }]);

  return Thumb;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Thumb.propTypes = {
  sliderRect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  selectedTimestamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onSetTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Thumb);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-toggler/timeline.toggler.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-toggler/timeline.toggler.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../icon/icon */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/icon/icon.js");


var CLASS_TIMELINE_VISIBLE = 'ez-timeline-visible';

var toggleTimeline = function toggleTimeline() {
  document.body.classList.toggle(CLASS_TIMELINE_VISIBLE);
  window.eZ.helpers.tooltips.hideAll();
};

var TimelineToggler = function TimelineToggler() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "c-timeline-toggler",
    onClick: toggleTimeline
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "timeline",
    extraClasses: "ez-icon--small-medium"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TimelineToggler);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/timeline.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/timeline.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/calendar/calendar */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar/calendar.js");
/* harmony import */ var _components_all_events_view_all_events_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/all-events-view/all.events.view */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/all-events-view/all.events.view.js");
/* harmony import */ var _components_slider_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/slider/slider */ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline/components/slider/slider.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Timeline = /*#__PURE__*/function (_PureComponent) {
  _inherits(Timeline, _PureComponent);

  var _super = _createSuper(Timeline);

  function Timeline() {
    _classCallCheck(this, Timeline);

    return _super.apply(this, arguments);
  }

  _createClass(Timeline, [{
    key: "render",
    value: function render() {
      var selectedTimestamp = this.props.selectedTimestamp;
      var formatFullDateTime = window.eZ.helpers.timezone.formatFullDateTime;
      var formatedSelectedDate = formatFullDateTime(selectedTimestamp);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-timeline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-timeline__calendar-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__["default"], this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-timeline__selected-datetime-wrapper"
      }, formatedSelectedDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-timeline__slider-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_slider_slider__WEBPACK_IMPORTED_MODULE_4__["default"], this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-timeline__list-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_all_events_view_all_events_view__WEBPACK_IMPORTED_MODULE_3__["default"], this.props)));
    }
  }]);

  return Timeline;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

Timeline.propTypes = {
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onSelectedTimestampChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/last.visited.sites.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/last.visited.sites.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (doc, eZ) {
  var KEY_SITE_FACTORY_LAST_VISITED = 'ez-site-factory-last-visited';

  var menuItems = _toConsumableArray(doc.querySelectorAll('#ezplatform_page_manager .navbar-nav .ez-navbar__item'));

  var siteData = {
    siteaccess: eZ.pageBuilder.data.siteaccess,
    locationId: eZ.pageBuilder.data.locationId
  };
  var userId = eZ.helpers.user.getId();

  var saveLastVisited = function saveLastVisited() {
    var lastVisitedStringified = localStorage.getItem(KEY_SITE_FACTORY_LAST_VISITED);
    var lastVisited = lastVisitedStringified ? JSON.parse(lastVisitedStringified) : {};
    var isSiteFactoryEntry = menuItems.some(function (menuItem) {
      return parseInt(menuItem.dataset.ezSiteLocationId) === siteData.locationId;
    });
    var lastVisitedIndex = -1;

    if (!lastVisited[userId]) {
      lastVisited[userId] = [];
    }

    if (isSiteFactoryEntry) {
      lastVisitedIndex = lastVisited[userId].findIndex(function (_ref) {
        var locationId = _ref.locationId;
        return locationId === siteData.locationId;
      });
    } else {
      lastVisitedIndex = lastVisited[userId].findIndex(function (_ref2) {
        var siteaccess = _ref2.siteaccess;
        return siteaccess === siteData.siteaccess;
      });
    }

    if (lastVisitedIndex > -1) {
      lastVisited[userId].splice(lastVisitedIndex, 1);
    }

    lastVisited[userId].unshift(siteData);
    lastVisited[userId].splice(5);
    localStorage.setItem(KEY_SITE_FACTORY_LAST_VISITED, JSON.stringify(lastVisited));
  };

  saveLastVisited();
  doc.body.dispatchEvent(new CustomEvent('ez-site-factory-refresh-menu'));
})(window.document, window.eZ);

/***/ }),

/***/ 101:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline.module.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/versions.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.view.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.preview.info.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/timeline.view.js ./public/bundles/ezplatformadminui/js/scripts/sidebar/instant.filter.js ./public/bundles/ezplatformadminui/js/scripts/admin.version.edit.conflict.js ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/last.visited.sites.js ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline.module.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/ui-dev/src/modules/timeline.module.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/infobar.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/versions.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/versions.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.view.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.view.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.preview.info.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/page.builder.preview.info.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/timeline.view.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/timeline.view.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/sidebar/instant.filter.js */"./public/bundles/ezplatformadminui/js/scripts/sidebar/instant.filter.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/admin.version.edit.conflict.js */"./public/bundles/ezplatformadminui/js/scripts/admin.version.edit.conflict.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/last.visited.sites.js */"./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/last.visited.sites.js");


/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

},[[101,"runtime"]]]);