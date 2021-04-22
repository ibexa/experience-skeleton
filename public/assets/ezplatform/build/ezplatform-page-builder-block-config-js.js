(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-page-builder-block-config-js"],{

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.embed.field.base.js":
/*!***********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.embed.field.base.js ***!
  \***********************************************************************************************************************************/
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

(function (global, doc) {
  var eZ = global.eZ = global.eZ || {};
  var SELECTOR_FIELD_WRAPPER = '.ez-block-embed-field';

  eZ.BlockConfigEmbedFieldBase = /*#__PURE__*/function () {
    "use strict";

    function BlockConfigEmbedFieldBase() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, BlockConfigEmbedFieldBase);

      this.selectorPreview = config.selectorPreview || '.ez-embed-meta__preview';
      this.selectorIcon = config.selectorIcon || '.ez-embed-meta__preview-icon';
      this.selectorTitle = config.selectorTitle || '.ez-embed-meta__title';
      this.selectorContentType = config.selectorContentType || '.ez-embed-meta__content-type';
      this.selectorEmbedMeta = config.selectorEmbedMeta || '.ez-embed-meta';
      this.previewFieldTypeIdentifier = config.previewFieldTypeIdentifier || 'ezimage';
      this.openUDWSelector = config.openUDWSelector || '[data-open-udw-embed]';
      this.openUDW = this.openUDW.bind(this);
    }
    /**
     * Gets placeholders nodes
     *
     * @method getPlaceholderNodes
     * @param {HTMLElement} container
     * @returns {Object}
     */


    _createClass(BlockConfigEmbedFieldBase, [{
      key: "getPlaceholderNodes",
      value: function getPlaceholderNodes(container) {
        return {
          preview: container.querySelector(this.selectorPreview),
          previewIcon: container.querySelector(this.selectorIcon),
          title: container.querySelector(this.selectorTitle),
          contentType: container.querySelector(this.selectorContentType)
        };
      }
      /**
       * Clears the meta information
       *
       * @method clearMeta
       * @param {HTMLElement} btn
       * @param {HTMLElement} container
       */

    }, {
      key: "clearMeta",
      value: function clearMeta(btn, container) {
        doc.querySelector(btn.dataset.target).value = '';
        container.setAttribute('hidden', true);
        btn.removeAttribute('hidden');
      }
      /**
       * Gets the preview src
       *
       * @method getPreviewSrc
       * @param {Array} data list of Content objects
       * @returns {String}
       */

    }, {
      key: "getPreviewSrc",
      value: function getPreviewSrc(data) {
        var _this = this;

        var versionData = Array.isArray(data) ? data[0] || {} : {};

        if (!versionData.CurrentVersion) {
          return '';
        }

        var version = versionData.CurrentVersion.Version;
        var imageField = version.Fields.field.find(function (field) {
          return field.fieldTypeIdentifier === _this.previewFieldTypeIdentifier;
        });
        return imageField && imageField.fieldValue ? imageField.fieldValue.uri : '';
      }
      /**
       * Gets the input value
       *
       * @method getInputValue
       * @param {Array} data list of Content objects
       * @returns {Number}
       */

    }, {
      key: "getInputValue",
      value: function getInputValue(data) {
        return data[0].ContentInfo.Content._id;
      }
      /**
       * Gets the content info
       *
       * @method getContentInfo
       * @param {Array} data list of Content objects
       * @returns {Object}
       */

    }, {
      key: "getContentInfo",
      value: function getContentInfo(data) {
        return data[0].ContentInfo.Content;
      }
      /**
       * Updates the field value
       *
       * @method updateFieldValue
       * @param {HTMLElement} btn
       * @param {Array} items list of Content objects
       */

    }, {
      key: "updateFieldValue",
      value: function updateFieldValue(btn, items) {
        var metaContainer = btn.closest(SELECTOR_FIELD_WRAPPER).querySelector(this.selectorEmbedMeta);
        var contentInfo = this.getContentInfo(items);
        var previewSrc = this.getPreviewSrc(items);
        var inputValue = this.getInputValue(items);

        var _this$getPlaceholderN = this.getPlaceholderNodes(metaContainer),
            preview = _this$getPlaceholderN.preview,
            previewIcon = _this$getPlaceholderN.previewIcon,
            title = _this$getPlaceholderN.title,
            contentType = _this$getPlaceholderN.contentType;

        var contentTypeName = eZ.helpers.contentType.getContentTypeName(contentInfo.ContentTypeInfo.identifier);
        var contentTypeIcon = eZ.helpers.contentType.getContentTypeIconUrl(contentInfo.ContentTypeInfo.identifier);
        var contentName = eZ.helpers.text.escapeHTML(contentInfo.TranslatedName);
        doc.querySelector(btn.dataset.target).value = inputValue;
        title.innerHTML = contentName;
        contentType.innerHTML = contentTypeName;

        if (previewSrc) {
          preview.src = previewSrc;
          preview.removeAttribute('hidden');
          previewIcon.setAttribute('hidden', true);
        } else {
          preview.setAttribute('hidden', true);
          previewIcon.removeAttribute('hidden');
          previewIcon.querySelector('use').setAttribute('href', contentTypeIcon);
        }

        metaContainer.removeAttribute('hidden');
        btn.setAttribute('hidden', true);
      }
      /**
       * Attaches event listener for remove button
       *
       * @method attachRemoveItemEvent
       * @param {HTMLElement} btn
       */

    }, {
      key: "attachRemoveItemEvent",
      value: function attachRemoveItemEvent(btn) {
        var metaContainer = btn.closest(SELECTOR_FIELD_WRAPPER).querySelector(this.selectorEmbedMeta);
        var removeBtn = metaContainer.querySelector('.ez-embed-meta__action--remove');
        removeBtn.addEventListener('click', this.clearMeta.bind(this, btn, metaContainer), false);
      }
      /**
       * Opens UDW
       *
       * @method openUDW
       * @param {Event} event
       */

    }, {
      key: "openUDW",
      value: function openUDW(event) {
        event.preventDefault();
        var currentTarget = event.currentTarget;
        var config = JSON.parse(currentTarget.dataset.udwConfig);
        var title = Translator.trans(
        /*@Desc("Browse content")*/
        'config_form.block_config.embed_field_base.udw.title', {}, 'page_builder');
        var openUdwEvent = new CustomEvent('ez-open-udw', {
          detail: Object.assign({
            title: title,
            multiple: false,
            onConfirm: this.updateFieldValue.bind(this, currentTarget)
          }, config)
        });
        doc.body.dispatchEvent(openUdwEvent);
      }
      /**
       * Initializes the embed field event handlers
       *
       * @method init
       */

    }, {
      key: "init",
      value: function init() {
        var _this2 = this;

        var openUdwBtns = _toConsumableArray(doc.querySelectorAll(this.openUDWSelector));

        openUdwBtns.forEach(function (btn) {
          _this2.attachRemoveItemEvent(btn);

          btn.addEventListener('click', _this2.openUDW, false);
        });
      }
    }]);

    return BlockConfigEmbedFieldBase;
  }();
})(window, document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.fields.errors.js":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.fields.errors.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (doc, $) {
  var SELECTOR_INVALID = '.is-invalid';
  var SELECTOR_TAB = '.ez-block-config__tab';
  var SELECTOR_NAV_LINK = '.ez-block-config__link';
  var CLASS_HAS_INVALID_FIELDS = 'ez-block-config__link--has-invalid-fields';

  var errorNodes = _toConsumableArray(doc.querySelectorAll(SELECTOR_INVALID));

  errorNodes.forEach(function (errorNode, index) {
    var tab = errorNode.closest(SELECTOR_TAB);
    var tabId = tab.id;
    var navLink = doc.querySelector("".concat(SELECTOR_NAV_LINK, "[href=\"#").concat(tabId, "\"]"));
    navLink.classList.add(CLASS_HAS_INVALID_FIELDS);

    if (!index) {
      $(navLink).tab('show');
    }
  });
})(window.document, window.jQuery);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.schedule.field.base.js":
/*!**************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.schedule.field.base.js ***!
  \**************************************************************************************************************************************/
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

(function (global, doc) {
  var eZ = global.eZ = global.eZ || {};

  eZ.BlockConfigScheduleFieldBase = /*#__PURE__*/function () {
    "use strict";

    function BlockConfigScheduleFieldBase() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, BlockConfigScheduleFieldBase);

      this.classLoading = config.classLoading || 'ez-schedule--is-loading';
      this.selectorContainer = config.selectorContainer || '.ez-schedule';
      this.selectorActiveList = config.selectorActiveList || '.ez-schedule__active-items';
      this.selectorActiveItem = config.selectorActiveItem || '.ez-schedule__active-item';
      this.selectorNoActiveItemsInfo = config.selectorNoActiveItemsInfo || '.ez-schedule__no-active-items-info';
      this.selectorQueueList = config.selectorQueueList || '.ez-schedule__queue-items';
      this.selectorQueueItem = config.selectorQueueItem || '.ez-schedule__queue-item';
      this.selectorNoQueuedItemsInfo = config.selectorNoQueuedItemsInfo || '.ez-schedule__no-queued-items-info';
      this.selectorPlaceholder = config.selectorPlaceholder || '.ez-schedule__active-item--placeholder';
      this.selectorOpenUdwBtn = config.selectorOpenUdwBtn || '.ez-btn--select-content';
      this.selectorTrashBtn = config.selectorTrashBtn || '.ez-btn--trash';
      this.selectorChangeAirtimeBtn = config.selectorChangeAirtimeBtn || '.ez-btn--change-airtime';
      this.selectorEventsTextarea = config.selectorEventsTextarea || '#block_configuration_attributes_events_value';
      this.timeoutRemovePlaceholders = config.timeoutRemovePlaceholders || 500;
      this.classNoActiveItemsInfoHidden = config.classNoActiveItemsInfoHidden || 'ez-schedule__no-active-items-info--hidden';
      this.classActiveItemUnavailable = config.classActiveItemUnavailable || 'ez-schedule__active-item--is-unavailable';
      this.classNoQueuedItemsInfoHidden = config.classNoQueuedItemsInfoHidden || 'ez-schedule__no-queued-items-info--hidden';
      this.classQueuedItemUnavailable = config.classQueuedItemUnavailable || 'ez-schedule__queue-item--is-unavailable';
      this.classActiveItemDragDisabled = config.classActiveItemDragDisabled || 'ez-schedule__active-item--drag-disabled';
      this.draggedItem = null;
      this.onDragOverTimeout = null;
      this.onDragStartHandler = this.onDragStartHandler.bind(this);
      this.onDragEndHandler = this.onDragEndHandler.bind(this);
      this.renderItems = this.renderItems.bind(this);
      this.lastItemsListRequestNo = -1;
    }

    _createClass(BlockConfigScheduleFieldBase, [{
      key: "getItemsList",
      value: function getItemsList(container, events) {
        var _this = this;

        var url = window.Routing.generate('ezplatform.page.block.schedule_block.list_content');
        var model = JSON.parse(container.dataset.model);
        var blockValue = model.blockValue;
        var data = new FormData();
        this.lastItemsListRequestNo += 1;
        this.toggleLoadingScreen(container, true);
        blockValue.attributes = blockValue.attributes.map(function (attr) {
          if (attr.name === 'events') {
            attr.value = JSON.stringify(events);
          }

          return attr;
        });
        data.append('blockValue', JSON.stringify(blockValue));
        var request = new Request(url, {
          method: 'POST',
          body: data,
          mode: 'same-origin',
          credentials: 'same-origin'
        });
        var requestNo = this.lastItemsListRequestNo;
        fetch(request).then(function (response) {
          return response.json();
        }).then(function (json) {
          if (requestNo < _this.lastItemsListRequestNo) {
            return;
          }

          var _json$lists = json.lists,
              active = _json$lists.active,
              queue = _json$lists.queue;
          container.dataset.blockValue = JSON.stringify(json.blockValue);

          _this.renderItems(container, {
            active: active,
            queue: queue
          });
        });
      }
    }, {
      key: "addNewEvents",
      value: function addNewEvents(container, newEvents) {
        var eventsTextarea = container.querySelector(this.selectorEventsTextarea);
        var currentEvents = JSON.parse(eventsTextarea.value);
        var allEvents = [].concat(_toConsumableArray(currentEvents), _toConsumableArray(newEvents));
        eventsTextarea.value = JSON.stringify(allEvents);
        return allEvents;
      }
    }, {
      key: "toggleLoadingScreen",
      value: function toggleLoadingScreen(container, show) {
        container.classList.toggle(this.classLoading, show);
      }
    }, {
      key: "openUdw",
      value: function openUdw(container, event) {
        event.preventDefault();
        var currentTarget = event.currentTarget;
        var config = JSON.parse(currentTarget.dataset.udwConfig);
        var title = Translator.trans(
        /*@Desc("Select content")*/
        'config_form.widgets.schedule.udw.title', {}, 'page_builder');
        var openUdwEvent = new CustomEvent('ez-open-udw', {
          detail: Object.assign({
            title: title,
            multiple: true,
            onConfirm: this.confirmUdwHandler.bind(this, container)
          }, config)
        });
        doc.body.dispatchEvent(openUdwEvent);
      }
    }, {
      key: "openAirtimePopup",
      value: function openAirtimePopup(callback) {
        var airtime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getDefaultAirtime();
        var openAirtimePopupEvent = new CustomEvent('ez-open-airtime-popup', {
          detail: {
            airtime: airtime,
            onSubmit: callback
          }
        });
        doc.body.dispatchEvent(openAirtimePopupEvent);
      }
    }, {
      key: "confirmUdwHandler",
      value: function confirmUdwHandler(container, items) {
        this.openAirtimePopup(this.addItemsFromUDW.bind(this, container, items));
      }
    }, {
      key: "addItemsFromUDW",
      value: function addItemsFromUDW(container, itemsLocations, airtime) {
        var _this2 = this;

        var events = itemsLocations.map(function (itemLocation) {
          var itemData = {
            locationId: itemLocation.id
          };
          return _this2.createItemAddedEvent(itemData, airtime);
        });
        var allEvents = this.addNewEvents(container, events);
        this.getItemsList(container, allEvents);
      }
      /**
       *
       * @param {Number} dateTime
       * @returns {{id: String, dateTime: Number}}
       */

    }, {
      key: "getEventBasicParams",
      value: function getEventBasicParams(dateTime) {
        return {
          id: this.generateId('sbe-'),
          dateTime: dateTime
        };
      }
      /**
       * @returns {Number}
       */

    }, {
      key: "getDefaultAirtime",
      value: function getDefaultAirtime() {
        var now = new Date();
        now.setSeconds(0);
        return Math.floor(now.getTime() / 1000);
      }
    }, {
      key: "createEvent",
      value: function createEvent(additionalParams, type) {
        var airtime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getDefaultAirtime();
        var basicEventParams = this.getEventBasicParams(airtime);
        return Object.assign({}, basicEventParams, additionalParams, {
          type: type
        });
      }
    }, {
      key: "createItemAddedEvent",
      value: function createItemAddedEvent(_ref, additionDate) {
        var locationId = _ref.locationId;
        var newItemData = {
          id: this.generateId('sbi-'),
          additionDate: additionDate,
          location: {
            id: locationId
          }
        };
        return this.createEvent({
          item: newItemData
        }, 'itemAdded', additionDate);
      }
    }, {
      key: "createItemRemovedEvent",
      value: function createItemRemovedEvent(_ref2, dateTime) {
        var itemId = _ref2.itemId;
        return this.createEvent({
          itemId: itemId
        }, 'itemRemoved', dateTime);
      }
    }, {
      key: "createItemsReorderedEvent",
      value: function createItemsReorderedEvent(_ref3, dateTime) {
        var map = _ref3.map;
        return this.createEvent({
          map: map
        }, 'itemsReordered', dateTime);
      }
    }, {
      key: "createLimitChangedEvent",
      value: function createLimitChangedEvent(_ref4, dateTime) {
        var limit = _ref4.limit;
        return this.createEvent({
          limit: limit
        }, 'limitChanged', dateTime);
      }
    }, {
      key: "generateId",
      value: function generateId() {
        var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id-';
        return [prefix, this.makeIdPiece(), this.makeIdPiece(true), this.makeIdPiece(true), this.makeIdPiece()].join('');
      }
    }, {
      key: "makeIdPiece",
      value: function makeIdPiece(addDashes) {
        var piece = (Math.random().toString(16) + '000000000').substr(2, 8);
        return addDashes ? '-' + piece.substr(0, 4) + '-' + piece.substr(4, 4) : piece;
      }
    }, {
      key: "onDragStartHandler",
      value: function onDragStartHandler(event) {
        event.dataTransfer.dropEffect = 'move';
        event.dataTransfer.setData('text/html', event.currentTarget);
        setTimeout(function () {
          event.target.style.setProperty('display', 'none');
        }, 0);
        this.draggedItem = event.currentTarget;
      }
    }, {
      key: "onDragEndHandler",
      value: function onDragEndHandler() {
        this.draggedItem.style.removeProperty('display');
      }
    }, {
      key: "hidePlaceholdersAfterTimeout",
      value: function hidePlaceholdersAfterTimeout(container) {
        var _this3 = this;

        global.clearTimeout(this.onDragOverTimeout);
        this.onDragOverTimeout = global.setTimeout(function () {
          return _this3.removePlaceholder(container);
        }, this.timeoutRemovePlaceholders);
      }
    }, {
      key: "attachEventsToDraggableItems",
      value: function attachEventsToDraggableItems(container, item) {
        item.ondragstart = this.onDragStartHandler;
        item.ondragend = this.onDragEndHandler;
        item.ondrag = this.hidePlaceholdersAfterTimeout.bind(this, container);
      }
    }, {
      key: "attachEventsToActiveListBtns",
      value: function attachEventsToActiveListBtns(container, item) {
        item.querySelector(this.selectorTrashBtn).addEventListener('click', this.removeListItem.bind(this, container, false), false);
        item.querySelector(this.selectorChangeAirtimeBtn).addEventListener('click', this.updateAirtime.bind(this, container), false);
      }
    }, {
      key: "attachEventsToQueueListBtns",
      value: function attachEventsToQueueListBtns(container, item) {
        item.querySelector(this.selectorTrashBtn).addEventListener('click', this.removeListItem.bind(this, container, true), false);
        item.querySelector(this.selectorChangeAirtimeBtn).addEventListener('click', this.updateAirtime.bind(this, container), false);
      }
    }, {
      key: "attachEventsToLimitInput",
      value: function attachEventsToLimitInput(container) {
        var limitInput = container.querySelector('#block_configuration_attributes_limit_value');
        limitInput.addEventListener('change', this.onLimitChanged.bind(this, container), false);
      }
    }, {
      key: "updateAirtime",
      value: function updateAirtime(container, event) {
        event.preventDefault();
        var itemNode = event.target.closest('[data-airtime]');
        var isUnavailable = itemNode.classList.contains(this.classActiveItemUnavailable) || itemNode.classList.contains(this.classQueuedItemUnavailable);

        if (isUnavailable) {
          return;
        }

        var airtime = itemNode.dataset.airtime;
        this.openAirtimePopup(this.setAirtime.bind(this, container, event), airtime);
        eZ.helpers.tooltips.hideAll(itemNode);
      }
    }, {
      key: "setAirtime",
      value: function setAirtime(container, event, airtime) {
        var itemNode = event.target.closest('[data-item-id]');
        var _itemNode$dataset = itemNode.dataset,
            locationId = _itemNode$dataset.locationId,
            itemId = _itemNode$dataset.itemId;
        var oldAirtime = itemNode.dataset.airtime;
        var isItemInQueue = itemNode.classList.contains('ez-schedule__queue-item');
        var removedAirtime = isItemInQueue ? oldAirtime : this.getDefaultAirtime();
        var eventRemoved = this.createItemRemovedEvent({
          itemId: itemId
        }, removedAirtime);
        var eventAdded = this.createItemAddedEvent({
          locationId: locationId
        }, airtime);
        var allEvents = this.addNewEvents(container, [eventRemoved, eventAdded]);
        this.getItemsList(container, allEvents);
      }
    }, {
      key: "removeListItem",
      value: function removeListItem(container, isQueueList, event) {
        event.preventDefault();
        var listElementNode = event.currentTarget.closest('[data-item-id]');
        var _listElementNode$data = listElementNode.dataset,
            itemId = _listElementNode$data.itemId,
            airtime = _listElementNode$data.airtime;
        var scheduleEvent = isQueueList ? this.createItemRemovedEvent({
          itemId: itemId
        }, airtime) : this.createItemRemovedEvent({
          itemId: itemId
        });
        var allEvents = this.addNewEvents(container, [scheduleEvent]);
        eZ.helpers.tooltips.hideAll(listElementNode);
        listElementNode.remove();
        this.getItemsList(container, allEvents);
      }
    }, {
      key: "removePlaceholder",
      value: function removePlaceholder(container) {
        var placeholder = container.querySelector(this.selectorPlaceholder);

        if (placeholder) {
          placeholder.remove();
        }
      }
    }, {
      key: "addPlaceholder",
      value: function addPlaceholder(container, element, positionY) {
        var wrapper = doc.createElement('div');
        var list = container.querySelector(this.selectorActiveList);
        var rect = element.getBoundingClientRect();
        var middlePositionY = rect.top + rect.height / 2;
        var where = positionY <= middlePositionY ? element : element.nextSibling;
        wrapper.insertAdjacentHTML('beforeend', list.dataset.placeholder);
        var placeholder = wrapper.querySelector(this.selectorPlaceholder);
        list.insertBefore(placeholder, where);
      }
    }, {
      key: "onDragOverHandler",
      value: function onDragOverHandler(container, event) {
        var listItem = event.target.closest("".concat(this.selectorActiveItem, ":not(").concat(this.selectorPlaceholder, ")"));

        if (!listItem) {
          return false;
        }

        this.removePlaceholder(container);
        this.addPlaceholder(container, listItem, event.clientY);
      }
      /**
       *
       * @param {HTMLElement} container
       */

    }, {
      key: "onDropHandler",
      value: function onDropHandler(container) {
        var list = container.querySelector(this.selectorActiveList);
        list.insertBefore(this.draggedItem, list.querySelector(this.selectorPlaceholder));
        this.removePlaceholder(container);
        this.onItemsReordered(container, list);
      }
      /**
       *
       * @param {HTMLElement} container
       * @param {HTMLElement} list
       */

    }, {
      key: "onItemsReordered",
      value: function onItemsReordered(container, list) {
        var elementsNodes = list.querySelectorAll('.ez-schedule__active-item');

        var newOrderIdsMap = _toConsumableArray(elementsNodes).map(function (elementNode) {
          return elementNode.dataset.itemId;
        });

        var reorderEvent = this.createItemsReorderedEvent({
          map: newOrderIdsMap
        });
        var allEvents = this.addNewEvents(container, [reorderEvent]);
        this.getItemsList(container, allEvents);
      }
      /**
       *
       * @param {HTMLElement} container
       * @param {Event} event
       */

    }, {
      key: "onLimitChanged",
      value: function onLimitChanged(container, event) {
        var inputElement = event.target;
        var newLimit = inputElement.value;
        var limitChangeEvent = this.createLimitChangedEvent({
          limit: newLimit
        });
        var allEvents = this.addNewEvents(container, [limitChangeEvent]);
        this.getItemsList(container, allEvents);
      }
    }, {
      key: "renderActiveItem",
      value: function renderActiveItem(container, item) {
        var escapeHTML = eZ.helpers.text.escapeHTML;
        var list = container.querySelector(this.selectorActiveList);
        var template = list.dataset.activeItemTemplate;
        var isUnavailable = item.location.unavailable;
        var additionalClasses = isUnavailable ? this.classActiveItemUnavailable : '';
        var contentName = escapeHTML(item.location.contentInfo.name);
        var itemId = escapeHTML(item.id);
        var locationId = escapeHTML(item.location.id);
        var additionDate = escapeHTML(item.additionDate);
        var renderedItem = template.replace('{{ content_name }}', contentName).replace('{{ item_id }}', itemId).replace('{{ location_id }}', locationId).replace('{{ airtime }}', additionDate).replace('{{ additional_classes }}', additionalClasses);
        var wrapper = doc.createElement('div');
        wrapper.insertAdjacentHTML('beforeend', renderedItem);
        var listItem = wrapper.querySelector(this.selectorActiveItem);
        list.append(listItem);
      }
    }, {
      key: "renderQueueItem",
      value: function renderQueueItem(container, item) {
        var formatFullDateTime = eZ.helpers.timezone.formatFullDateTime;
        var escapeHTML = eZ.helpers.text.escapeHTML;
        var formatedAdditionDate = formatFullDateTime(item.additionDate * 1000);
        var list = container.querySelector(this.selectorQueueList);
        var isUnavailable = item.location.unavailable;
        var additionalClasses = isUnavailable ? this.classQueuedItemUnavailable : '';
        var template = list.dataset.queueTemplate;
        var contentName = escapeHTML(item.location.contentInfo.name);
        var itemId = escapeHTML(item.id);
        var locationId = escapeHTML(item.location.id);
        var additionDate = escapeHTML(item.additionDate);
        var renderedItem = template.replace('{{ content_name }}', contentName).replace('{{ item_id }}', itemId).replace('{{ location_id }}', locationId).replace('{{ airtime }}', additionDate).replace('{{ airtime_formatted }}', formatedAdditionDate).replace('{{ additional_classes }}', additionalClasses);
        var wrapper = doc.createElement('div');
        wrapper.insertAdjacentHTML('beforeend', renderedItem);
        var listItem = wrapper.querySelector(this.selectorQueueItem);
        list.append(listItem);
      }
    }, {
      key: "removeNodeChildren",
      value: function removeNodeChildren(node) {
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
      }
    }, {
      key: "clearItems",
      value: function clearItems(container) {
        var activeList = container.querySelector(this.selectorActiveList);
        var queueList = container.querySelector(this.selectorQueueList);
        this.removeNodeChildren(activeList);
        this.removeNodeChildren(queueList);
      }
    }, {
      key: "manageNoItemsLabels",
      value: function manageNoItemsLabels(container, _ref5) {
        var activeItems = _ref5.activeItems,
            queuedItems = _ref5.queuedItems;
        var noActiveItems = !activeItems.length;
        var noQueuedItems = !queuedItems.length;
        container.querySelector(this.selectorNoActiveItemsInfo).classList.toggle(this.classNoActiveItemsInfoHidden, !noActiveItems);
        container.querySelector(this.selectorNoQueuedItemsInfo).classList.toggle(this.classNoQueuedItemsInfoHidden, !noQueuedItems);
      }
    }, {
      key: "renderItems",
      value: function renderItems(container, _ref6) {
        var active = _ref6.active,
            queue = _ref6.queue;
        this.clearItems(container);
        this.manageNoItemsLabels(container, {
          activeItems: active,
          queuedItems: queue
        });
        active.forEach(this.renderActiveItem.bind(this, container));
        queue.forEach(this.renderQueueItem.bind(this, container));
        this.attachEventsToLists(container);
        this.toggleLoadingScreen(container, false);
        eZ.helpers.tooltips.parse(container);
      }
    }, {
      key: "disableDragOnActiveList",
      value: function disableDragOnActiveList(container) {
        var _this4 = this;

        var activeItems = container.querySelectorAll(this.selectorActiveItem);
        activeItems.forEach(function (activeItem) {
          activeItem.classList.add(_this4.classActiveItemDragDisabled);
        });
      }
    }, {
      key: "attachEventsToLists",
      value: function attachEventsToLists(container) {
        var activeList = container.querySelector(this.selectorActiveList);
        var activeListItems = activeList.querySelectorAll(this.selectorActiveItem);
        var queueListItems = container.querySelectorAll(this.selectorQueueItem);

        if (activeListItems.length > 1) {
          activeList.ondragover = this.onDragOverHandler.bind(this, container);
          activeListItems.forEach(this.attachEventsToDraggableItems.bind(this, container));
        } else {
          activeList.ondragover = null;
          this.disableDragOnActiveList(container);
        }

        activeList.ondrop = this.onDropHandler.bind(this, container);
        activeListItems.forEach(this.attachEventsToActiveListBtns.bind(this, container));
        queueListItems.forEach(this.attachEventsToQueueListBtns.bind(this, container));
      }
      /**
       * Initializes the schedule field event handlers
       *
       * @method init
       */

    }, {
      key: "init",
      value: function init() {
        var _this5 = this;

        var containers = doc.querySelectorAll(this.selectorContainer);
        containers.forEach(function (container) {
          var openUdwBtn = container.querySelector(_this5.selectorOpenUdwBtn);
          var model = JSON.parse(container.dataset.model);

          _this5.attachEventsToLists(container);

          _this5.attachEventsToLimitInput(container);

          _this5.renderItems(container, {
            active: model.lists.active,
            queue: model.lists.queue
          });

          openUdwBtn.addEventListener('click', _this5.openUdw.bind(_this5, container), false);
        });
      }
    }]);

    return BlockConfigScheduleFieldBase;
  }();
})(window, document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.scheduler.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.scheduler.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var SELECTOR_REVEAL = '.ez-reveal-hide-date-time__reveal';
  var SELECTOR_HIDE = '.ez-reveal-hide-date-time__hide';
  var SELECTOR_PICKER = '.ez-picker';
  var SELECTOR_PICKER_INPUT = '.ez-picker__input';
  var SELECTOR_PICKER_FORM_INPUT = '.ez-picker__form-input';
  var containerReveal = doc.querySelector(SELECTOR_REVEAL);
  var containerHide = doc.querySelector(SELECTOR_HIDE);

  if (!containerReveal || !containerHide) {
    return;
  }

  var pickerComponentReveal = containerReveal.querySelector('#block_configuration_since_custom_date').closest(SELECTOR_PICKER);
  var pickerComponentHide = containerHide.querySelector('#block_configuration_till_custom_date').closest(SELECTOR_PICKER);

  var getNowAccurateToMinutes = function getNowAccurateToMinutes() {
    var now = new Date();
    now.setSeconds(0);
    return now;
  };

  var getPickerSelectedDate = function getPickerSelectedDate(pickerComponent) {
    var pickerHiddenInput = pickerComponent.querySelector(SELECTOR_PICKER_FORM_INPUT);
    var inputValue = pickerHiddenInput.value;
    return inputValue ? new Date(inputValue * 1000) : null;
  };

  var getPickerFlatpickrInstance = function getPickerFlatpickrInstance(pickerComponent) {
    var pickerInput = pickerComponent.querySelector(SELECTOR_PICKER_INPUT);
    return pickerInput._flatpickr;
  };

  var setPickerDate = function setPickerDate(pickerContainer, date) {
    var pickerInstance = getPickerFlatpickrInstance(pickerContainer);
    pickerInstance.setDate(date, true);
  };

  var setPickerMinDate = function setPickerMinDate(pickerContainer, minDate) {
    var pickerInstance = getPickerFlatpickrInstance(pickerContainer);
    pickerInstance.set('minDate', minDate);
  };

  var toggleCustomDateInput = function toggleCustomDateInput(customDateInput, disabled) {
    customDateInput.hidden = disabled;
  };

  var isRadioButton = function isRadioButton(eventTarget) {
    return eventTarget.type === 'radio';
  };

  var setNeverHideState = function setNeverHideState() {
    var neverOptionRadioButton = containerHide.querySelector('input[type=radio][value=never]');
    neverOptionRadioButton.checked = true;
    toggleCustomDateInput(pickerComponentHide, true);
  };

  var onRevealOptionChange = function onRevealOptionChange(_ref) {
    var target = _ref.target;

    if (!isRadioButton(target)) {
      return;
    }

    var customDateOptionSelected = target.value === 'custom_date';
    var nowAccurateToMinutes = getNowAccurateToMinutes();

    if (customDateOptionSelected) {
      setPickerMinDate(pickerComponentReveal, nowAccurateToMinutes);
      setPickerDate(pickerComponentReveal, nowAccurateToMinutes);
      setPickerMinDate(pickerComponentHide, nowAccurateToMinutes);
    } else {
      var hideDate = getPickerSelectedDate(pickerComponentHide);

      if (hideDate && hideDate < nowAccurateToMinutes) {
        setNeverHideState();
      } else {
        setPickerMinDate(pickerComponentHide, nowAccurateToMinutes);
      }
    }

    toggleCustomDateInput(pickerComponentReveal, !customDateOptionSelected);
  };

  var onHideOptionChange = function onHideOptionChange(_ref2) {
    var target = _ref2.target;

    if (!isRadioButton(target)) {
      return;
    }

    var customDateOptionSelected = target.value === 'custom_date';

    if (customDateOptionSelected) {
      var _revealDate = getPickerSelectedDate(pickerComponentReveal);

      var _nowAccurateToMinutes = getNowAccurateToMinutes();

      var newMinHideDate = _revealDate < _nowAccurateToMinutes ? _nowAccurateToMinutes : _revealDate;
      setPickerMinDate(pickerComponentHide, newMinHideDate);
      setPickerDate(pickerComponentHide, newMinHideDate);
    }

    toggleCustomDateInput(pickerComponentHide, !customDateOptionSelected);
  };

  var onRevealCustomDateChange = function onRevealCustomDateChange(newDates) {
    if (!newDates.length) {
      return;
    }

    var newRevealDate = new Date(newDates[0]);
    var hideDate = getPickerSelectedDate(pickerComponentHide);
    var clearHideDate = newRevealDate > hideDate;
    setPickerMinDate(pickerComponentHide, newRevealDate);

    if (clearHideDate) {
      // flatpickr ignores minDate when only time has changed:
      // https://github.com/flatpickr/flatpickr/issues/591
      setPickerDate(pickerComponentHide, null);
    }
  };

  var flatpickrInstanceReveal = getPickerFlatpickrInstance(pickerComponentReveal);
  var isCustomDateSelectedReveal = containerReveal.querySelector('input[type=radio][value=custom_date]').checked;
  var isCustomDateSelectedHide = containerHide.querySelector('input[type=radio][value=custom_date]').checked;
  var revealDate = getPickerSelectedDate(pickerComponentReveal);
  var nowAccurateToMinutes = getNowAccurateToMinutes();
  flatpickrInstanceReveal.config.onChange.push(onRevealCustomDateChange);
  toggleCustomDateInput(pickerComponentReveal, !isCustomDateSelectedReveal);
  toggleCustomDateInput(pickerComponentHide, !isCustomDateSelectedHide);
  setPickerMinDate(pickerComponentReveal, nowAccurateToMinutes);
  setPickerMinDate(pickerComponentHide, revealDate);
  containerReveal.addEventListener('click', onRevealOptionChange, false);
  containerHide.addEventListener('click', onHideOptionChange, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.select.field.base.js":
/*!************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.select.field.base.js ***!
  \************************************************************************************************************************************/
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

(function (global, doc) {
  var eZ = global.eZ = global.eZ || {};

  eZ.BlockConfigSelectFieldBase = /*#__PURE__*/function () {
    "use strict";

    function BlockConfigSelectFieldBase() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, BlockConfigSelectFieldBase);

      this.selectorContainer = config.selectorContainer || '.ez-block-select-field';
      this.selectorSourceInput = config.selectorSourceInput || 'select';
      this.selectorSelected = config.selectorSelected || '.ez-block-select-field__selected';
      this.selectorSelectedItem = config.selectorSelectedItem || '.ez-block-select-field__selected-item';
      this.selectorOptions = config.selectorOptions || '.ez-block-select-field__options';
      this.selectorOptionsItem = config.selectorOptionsItem || '.ez-block-select-field__options-item';
      this.classOptionSelected = config.classOptionSelected || 'ez-block-select-field__options-item--selected';
      this.classSelectedRemove = config.classSelectedRemove || 'ez-block-select-field__selected-remove';
      this.classOptionsHidden = config.classOptionsHidden || 'ez-block-select-field__options--hidden';
      this.handleClickOnOption = this.handleClickOnOption.bind(this);
      this.handleClickOnInput = this.handleClickOnInput.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
      this.handleClickOutsideCallback = null;
    }
    /**
     * Create selected item
     *
     * @method createSelectedItem
     * @param {HTMLElement} container
     * @param {String} value the content type identifier
     * @param {String} label the content type label
     * @returns {String}
     */


    _createClass(BlockConfigSelectFieldBase, [{
      key: "createSelectedItem",
      value: function createSelectedItem(container, value, label) {
        var template = container.querySelector(this.selectorSelected).dataset.templateSelectedItem;
        return template.replace('{{ value }}', value).replace('{{ label }}', label);
      }
      /**
       * Handles item selection
       *
       * @method handleSelection
       * @param {HTMLElement} container
       * @param {HTMLElement} element the item element
       * @param {Boolean} selected
       */

    }, {
      key: "handleSelection",
      value: function handleSelection(container, element, selected) {
        var value = element.dataset.value;
        var cssMethodName = selected ? 'add' : 'remove';
        var isSingleSelect = !container.querySelector(this.selectorSourceInput).multiple;

        if (isSingleSelect && selected) {
          this.hideOptions(container);
          this.clearCurrentSelection(container);
        }

        container.querySelector("".concat(this.selectorSourceInput, " [value=\"").concat(value, "\"]")).selected = selected;
        container.querySelector("".concat(this.selectorOptions, " [data-value=\"").concat(value, "\"]")).classList[cssMethodName](this.classOptionSelected);

        if (selected && value) {
          container.querySelector(this.selectorSelected).insertAdjacentHTML('beforeend', this.createSelectedItem(container, value, element.innerHTML));
        } else {
          container.querySelector("".concat(this.selectorSelected, " [data-value=\"").concat(value, "\"]")).remove();
        }

        if (isSingleSelect && !selected) {
          this.hideOptions(container);
          this.selectFirstItem(container);
        }
      }
      /**
       * Selects first item
       *
       * @method selectFirstItem
       * @param {HTMLElement} container
       */

    }, {
      key: "selectFirstItem",
      value: function selectFirstItem(container) {
        var firstOption = container.querySelector("".concat(this.selectorOptions, " li"));
        firstOption.classList.add(this.classOptionSelected);

        if (!firstOption.dataset.value) {
          return;
        }

        container.querySelector(this.selectorSelected).insertAdjacentHTML('beforeend', this.createSelectedItem(container, firstOption.dataset.value, firstOption.innerHTML));
      }
      /**
       * Clears current selection
       *
       * @method clearCurrentSelection
       * @param {HTMLElement} container
       */

    }, {
      key: "clearCurrentSelection",
      value: function clearCurrentSelection(container) {
        var _this = this;

        _toConsumableArray(container.querySelectorAll("".concat(this.selectorSourceInput, " option"))).forEach(function (option) {
          return option.selected = false;
        });

        _toConsumableArray(container.querySelectorAll("".concat(this.selectorOptions, " .").concat(this.classOptionSelected))).forEach(function (option) {
          return option.classList.remove(_this.classOptionSelected);
        });

        container.querySelector(this.selectorSelected).innerHTML = '';
      }
      /**
       * Handles click outside
       *
       * @method handleClickOutside
       * @param {HTMLElement} container
       * @param {Event} event
       */

    }, {
      key: "handleClickOutside",
      value: function handleClickOutside(container, _ref) {
        var target = _ref.target;
        var isSelectedItemClicked = target.closest(this.selectorSelected);
        var isOptionClicked = target.closest(this.selectorOptions);
        var isItemRemoveClicked = target.closest(".".concat(this.classSelectedRemove));
        var sourceInput = target.parentNode.querySelector(this.selectorSourceInput);
        var isSameTarget = sourceInput && container.querySelector(this.selectorSourceInput).id === sourceInput.id;

        if ((isSelectedItemClicked || isOptionClicked || isItemRemoveClicked) && isSameTarget) {
          return;
        }

        this.hideOptions(container);
      }
      /**
       * Hides options
       *
       * @method hideOptions
       * @param {HTMLElement} container
       */

    }, {
      key: "hideOptions",
      value: function hideOptions(container) {
        container.querySelector(this.selectorOptions).classList.add(this.classOptionsHidden);
      }
      /**
       * Handles click on input
       *
       * @method handleClickOnInput
       * @param {HTMLElement} container
       * @param {Event} event
       */

    }, {
      key: "handleClickOnInput",
      value: function handleClickOnInput(container, _ref2) {
        var target = _ref2.target;

        if (target.classList.contains(this.classSelectedRemove)) {
          this.handleSelection(container, target.closest(this.selectorSelectedItem), false);
          return;
        }

        var options = container.querySelector(this.selectorOptions);
        var shouldShowOptions = options.classList.contains(this.classOptionsHidden);
        var methodName = shouldShowOptions ? 'addEventListener' : 'removeEventListener';

        if (shouldShowOptions) {
          this.handleClickOutsideCallback = this.handleClickOutside.bind(this, container);
        }

        options.classList.toggle(this.classOptionsHidden);
        doc.body[methodName]('click', this.handleClickOutsideCallback, false);
      }
      /**
       * Handles click on option item
       *
       * @method handleClickOnOption
       * @param {HTMLElement} container
       * @param {Event} event
       */

    }, {
      key: "handleClickOnOption",
      value: function handleClickOnOption(container, _ref3) {
        var target = _ref3.target;
        this.handleSelection(container, target, !target.classList.contains(this.classOptionSelected));
      }
      /**
       * Initializes the select field event handlers
       *
       * @method init
       */

    }, {
      key: "init",
      value: function init() {
        var _this2 = this;

        var containers = _toConsumableArray(doc.querySelectorAll(this.selectorContainer));

        containers.forEach(function (container) {
          var isEmpty = !_toConsumableArray(container.querySelectorAll(_this2.selectorSelectedItem)).length;
          var isSingle = !container.querySelector(_this2.selectorSourceInput).multiple;

          var items = _toConsumableArray(container.querySelectorAll("".concat(_this2.selectorOptions, " ").concat(_this2.selectorOptionsItem)));

          if (isEmpty && isSingle) {
            _this2.selectFirstItem(container);
          }

          container.querySelector(_this2.selectorSelected).addEventListener('click', _this2.handleClickOnInput.bind(_this2, container), false);
          items.forEach(function (option) {
            return option.addEventListener('click', _this2.handleClickOnOption.bind(_this2, container), false);
          });
        });
      }
    }]);

    return BlockConfigSelectFieldBase;
  }();
})(window, document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/checkbox.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/checkbox.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (doc) {
  var SELECTOR_CHECKBOX = '.ez-block-checkbox-field__item input[type="checkbox"]';
  var SELECTOR_LABEL = '.ez-block-checkbox-field__label';
  var CLASS_IS_CHECKED = 'is-checked';
  var checkboxes = doc.querySelectorAll(SELECTOR_CHECKBOX);

  var updateCheckboxState = function updateCheckboxState(_ref) {
    var currentTarget = _ref.currentTarget;
    currentTarget.closest(SELECTOR_LABEL).classList.toggle(CLASS_IS_CHECKED, currentTarget.checked);
  };

  checkboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', updateCheckboxState, false);
  });
})(window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/collection.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/collection.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, eZ) {
  var _this = this;

  var SELECTOR_COLLECTION = '.ez-collection';
  var SELECTOR_COLLECTION_ITEMS = '.ez-collection__items';
  var SELECTOR_ITEM = '.ez-collection__item';
  var SELECTOR_UDW_BTN = '.ez-btn--select-content';
  var collections = doc.querySelectorAll(SELECTOR_COLLECTION);

  var openUdw = function openUdw(itemsContainer, openUdwBtn, draggable, event) {
    event.preventDefault();
    var currentTarget = event.currentTarget;
    var config = JSON.parse(currentTarget.dataset.udwConfig);
    var selectedView = doc.querySelector("#".concat(currentTarget.dataset.view)).value;
    var matchConfig = JSON.parse(doc.querySelector("#".concat(currentTarget.dataset.target)).dataset.match);
    var configForView = Object.assign(config, {
      cotfAllowedContentTypes: matchConfig[selectedView]
    });
    var title = Translator.trans(
    /*@Desc("Select content")*/
    'config_form.widgets.collection.udw.title', {}, 'page_builder');

    var selectedLocations = _toConsumableArray(itemsContainer.querySelectorAll(SELECTOR_ITEM)).map(function (item) {
      return item.dataset.id;
    });

    var openUdwEvent = new CustomEvent('ez-open-udw', {
      detail: Object.assign({
        title: title,
        multiple: true,
        onConfirm: addItems.bind(_this, itemsContainer, openUdwBtn, draggable),
        selectedLocations: selectedLocations
      }, configForView)
    });
    doc.body.dispatchEvent(openUdwEvent);
  };

  var updateInputValue = function updateInputValue(itemsContainer, openUdwBtn) {
    var items = _toConsumableArray(itemsContainer.querySelectorAll(SELECTOR_ITEM));

    var input = doc.querySelector("#".concat(openUdwBtn.dataset.target));
    input.value = _toConsumableArray(items.map(function (item) {
      return item.dataset.id;
    })).join();
  };

  var attachEventsToSelectedItem = function attachEventsToSelectedItem(itemsContainer, openUdwBtn, item) {
    return item.querySelector('.ez-btn--trash').addEventListener('click', removeItem.bind(_this, itemsContainer, openUdwBtn), false);
  };

  var addItems = function addItems(itemsContainer, openUdwBtn, draggable, items) {
    var fragment = doc.createDocumentFragment();
    var template = itemsContainer.dataset.template;
    items.forEach(function (item) {
      var escapeHTML = eZ.helpers.text.escapeHTML;
      var contentTypeName = eZ.helpers.contentType.getContentTypeName(item.ContentInfo.Content.ContentTypeInfo.identifier);
      var contentName = escapeHTML(item.ContentInfo.Content.TranslatedName);
      var itemId = escapeHTML(item.id);
      var container = doc.createElement('div');
      var renderedItem = template.replace('{{ content_name }}', contentName).replace('{{ content_type_name }}', contentTypeName).replace('{{ id }}', itemId);
      container.insertAdjacentHTML('beforeend', renderedItem);
      var listItem = container.querySelector(SELECTOR_ITEM);
      fragment.append(listItem);
    });
    itemsContainer.innerHTML = '';
    itemsContainer.append(fragment);
    updateInputValue(itemsContainer, openUdwBtn);
    draggable.reinit();
    eZ.helpers.tooltips.parse(itemsContainer);
  };

  var removeItem = function removeItem(itemsContainer, openUdwBtn, event) {
    event.preventDefault();
    event.currentTarget.closest(SELECTOR_ITEM).remove();
    updateInputValue(itemsContainer, openUdwBtn);
  };

  var CollectionDraggable = /*#__PURE__*/function (_global$eZ$core$Dragg) {
    "use strict";

    _inherits(CollectionDraggable, _global$eZ$core$Dragg);

    var _super = _createSuper(CollectionDraggable);

    function CollectionDraggable(config) {
      var _this2;

      _classCallCheck(this, CollectionDraggable);

      _this2 = _super.call(this, config);
      _this2.openUdwBtn = config.openUdwBtn;
      return _this2;
    }

    _createClass(CollectionDraggable, [{
      key: "attachEventHandlersToItem",
      value: function attachEventHandlersToItem(item) {
        _get(_getPrototypeOf(CollectionDraggable.prototype), "attachEventHandlersToItem", this).call(this, item);

        attachEventsToSelectedItem(this.itemsContainer, this.openUdwBtn, item);
      }
    }, {
      key: "onDrop",
      value: function onDrop() {
        _get(_getPrototypeOf(CollectionDraggable.prototype), "onDrop", this).call(this);

        updateInputValue(this.itemsContainer, this.openUdwBtn);
      }
    }]);

    return CollectionDraggable;
  }(global.eZ.core.Draggable);

  collections.forEach(function (collection) {
    var itemsContainer = collection.querySelector(SELECTOR_COLLECTION_ITEMS);
    var openUdwBtn = collection.querySelector(SELECTOR_UDW_BTN);
    var draggable = new CollectionDraggable({
      itemsContainer: itemsContainer,
      openUdwBtn: openUdwBtn,
      selectorItem: SELECTOR_ITEM,
      selectorPlaceholder: '.ez-collection__item--placeholder'
    });
    draggable.init();
    openUdwBtn.addEventListener('click', openUdw.bind(_this, itemsContainer, openUdwBtn, draggable), false);
  });
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/embed.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/embed.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (doc, eZ) {
  var BlockConfigEmbedFieldBase = eZ.BlockConfigEmbedFieldBase;
  var embed = new BlockConfigEmbedFieldBase();
  embed.init();
})(window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/richtext.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/richtext.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ) {
  var openUdw = function openUdw(config) {
    var openUdwEvent = new CustomEvent('ez-open-udw', {
      detail: config
    });
    doc.body.dispatchEvent(openUdwEvent);
  };

  eZ.addConfig('richText.alloyEditor.callbacks.selectContent', openUdw, true);
  var containers = doc.querySelectorAll('.ez-data-source__richtext');
  containers.forEach(function (container) {
    var richtext = new global.eZ.BaseRichText();
    var alloyEditor = richtext.init(container);
  });
})(window, document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/schedule.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/schedule.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ) {
  var BlockConfigScheduleFieldBase = eZ.BlockConfigScheduleFieldBase;
  var scheduleField = new BlockConfigScheduleFieldBase();
  scheduleField.init();
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/select.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/select.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (doc, eZ) {
  var BlockConfigSelectFieldBase = eZ.BlockConfigSelectFieldBase;
  var contentListSelect = new BlockConfigSelectFieldBase();
  contentListSelect.init();
})(window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/video.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/video.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (doc, eZ) {
  var BlockConfigEmbedFieldBase = eZ.BlockConfigEmbedFieldBase;
  var video = new BlockConfigEmbedFieldBase({
    previewFieldTypeIdentifier: 'ezmedia',
    openUDWSelector: '[data-open-udw-video]'
  });
  video.init();
})(window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-segmentation/src/bundle/Resources/public/js/widgets/targeted.content.map.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-segmentation/src/bundle/Resources/public/js/widgets/targeted.content.map.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, eZ, Translator) {
  var _this = this;

  var segmentations = doc.querySelectorAll('.ez-segmentation');
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;

  var updateInputValue = function updateInputValue(itemsContainer) {
    var inputValue = _toConsumableArray(itemsContainer.querySelectorAll('.ez-segmentation__item')).map(function (item) {
      var categorySelect = item.querySelector('.ez-segmentation__select--category');
      var groupId = categorySelect.value;
      var categoryName = categorySelect.querySelector("[value=\"".concat(groupId, "\"]")).innerHTML;
      var segmentSelect = item.querySelector('.ez-segmentation__select--segment');
      var segmentId = segmentSelect.value;
      var segmentName = segmentSelect.querySelector("[value=\"".concat(segmentId, "\"]")).innerHTML;
      var contentTitle = item.querySelector('.ez-segmentation__content-title');
      var locationId = contentTitle.dataset.locationId;
      var locationName = contentTitle.innerHTML;
      var locationBreadcrumbs = item.querySelector('.ez-segmentation__content-breadcrumbs').innerHTML;
      return {
        group: {
          id: parseInt(groupId, 10),
          name: categoryName
        },
        segment: {
          id: parseInt(segmentId, 10),
          name: segmentName
        },
        content: {
          locationId: parseInt(locationId, 10),
          name: locationName,
          breadcrumbs: locationBreadcrumbs
        }
      };
    });

    itemsContainer.closest('.ez-data-source').querySelector('.ez-data-source__input').value = JSON.stringify(inputValue);
  };

  var removeRootFromPathString = function removeRootFromPathString(pathString) {
    var pathArray = pathString.split('/').filter(function (val) {
      return val;
    });
    return pathArray.splice(1, pathArray.length - 2);
  };

  var findLocationsByIdList = function findLocationsByIdList(idList, callback) {
    var body = JSON.stringify({
      ViewInput: {
        identifier: "locations-by-path-string-".concat(idList.join('-')),
        "public": false,
        LocationQuery: {
          FacetBuilders: {},
          SortClauses: {
            SectionIdentifier: 'ascending'
          },
          Filter: {
            LocationIdCriterion: idList.join(',')
          },
          limit: 50,
          offset: 0
        }
      }
    });
    var request = new Request('/api/ezp/v2/views', {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.ez.api.View+json; version=1.1',
        'Content-Type': 'application/vnd.ez.api.ViewInput+json; version=1.1',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      body: body,
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    var errorMessage = Translator.trans(
    /*@Desc("Cannot find children Locations with ID %idList%")*/
    'select_location.error', {
      idList: idList.join(',')
    }, 'page_builder');
    fetch(request).then(eZ.helpers.request.getJsonFromResponse).then(function (data) {
      callback(data.View.Result.searchHits.searchHit);
    })["catch"](function () {
      return eZ.helpers.notification.showErrorNotification(errorMessage);
    });
  };

  var openUdw = function openUdw(itemsContainer, draggable, event) {
    event.preventDefault();
    var currentTarget = event.currentTarget;
    var config = JSON.parse(currentTarget.dataset.udwConfig);
    var title = Translator.trans(
    /*@Desc("Select content")*/
    'config_form.widgets.segmentation.udw.title', {}, 'page_builder');
    var openUdwEvent = new CustomEvent('ez-open-udw', {
      detail: Object.assign({
        title: title,
        onConfirm: selectContent.bind(_this, itemsContainer, currentTarget)
      }, config)
    });
    doc.body.dispatchEvent(openUdwEvent);
  };

  var selectContent = function selectContent(itemsContainer, openUdwButton, items) {
    var selectedContent = items[0];
    var contentInfoWrapper = openUdwButton.closest('.ez-segmentation__content-wrapper').querySelector('.ez-segmentation__content-info');
    var contentTitle = contentInfoWrapper.querySelector('.ez-segmentation__content-title');
    openUdwButton.setAttribute('hidden', 'hidden');
    contentTitle.innerHTML = selectedContent.ContentInfo.Content.TranslatedName;
    contentTitle.dataset.locationId = selectedContent.id;
    findLocationsByIdList(removeRootFromPathString(selectedContent.pathString), function (locations) {
      var breadcrumbs = locations.map(function (location) {
        return location.value.Location.ContentInfo.Content.TranslatedName;
      }).join(' / ');
      contentInfoWrapper.querySelector('.ez-segmentation__content-breadcrumbs').innerHTML = breadcrumbs || '&nbsp;';
      updateInputValue(itemsContainer);
    });
    contentInfoWrapper.classList.remove('ez-segmentation__content-info--hidden');
  };

  var attachEventsToItem = function attachEventsToItem(itemsContainer, listItem, openUdwButton, draggable) {
    listItem.querySelector('.ez-btn--add').addEventListener('click', function () {
      renderItem(itemsContainer, draggable, {});
      itemsContainer.querySelector('.ez-btn--trash').removeAttribute('disabled');
      updateInputValue(itemsContainer);
    }, false);
    listItem.querySelector('.ez-btn--remove-content').addEventListener('click', function () {
      var contentTitle = listItem.querySelector('.ez-segmentation__content-title');
      openUdwButton.removeAttribute('hidden');
      listItem.querySelector('.ez-segmentation__content-info').classList.add('ez-segmentation__content-info--hidden');
      contentTitle.dataset.locationId = '';
      contentTitle.innerHTML = '';
      listItem.querySelector('.ez-segmentation__content-breadcrumbs').innerHTML = '';
      updateInputValue(itemsContainer);
    }, false);
    listItem.querySelector('.ez-btn--trash').addEventListener('click', function () {
      if (itemsContainer.querySelectorAll('.ez-segmentation__item').length > 1) {
        listItem.remove();
      }

      if (itemsContainer.querySelectorAll('.ez-segmentation__item').length === 1) {
        itemsContainer.querySelector('.ez-btn--trash').setAttribute('disabled', 'disabled');
      }

      updateInputValue(itemsContainer);
    }, false);
  };

  var getSegmentationsConfig = function getSegmentationsConfig(itemsContainer) {
    var segmentationsConfig = JSON.parse(itemsContainer.closest('.ez-data-source').querySelector('.ez-data-source__input').dataset.segments);
    return segmentationsConfig.filter(function (group) {
      return group.segments.length;
    });
  };

  var renderItem = function renderItem(itemsContainer, draggable, itemData) {
    var template = itemsContainer.dataset.template;
    var container = doc.createElement('ol');
    var segmentationsConfig = getSegmentationsConfig(itemsContainer);
    var itemConfig = segmentationsConfig.find(function (category) {
      return itemData.group && category.id === itemData.group.id;
    }) || segmentationsConfig[0];
    container.insertAdjacentHTML('beforeend', template);
    var listItem = container.querySelector('.ez-segmentation__item');
    var openUdwButton = listItem.querySelector('.ez-btn--select-content');
    openUdwButton.addEventListener('click', openUdw.bind(_this, itemsContainer, draggable), false);
    renderCategorySelect(itemsContainer, listItem, segmentationsConfig, itemConfig);
    renderSegmentSelect(itemsContainer, listItem, itemConfig, itemData);

    if (itemData.content && itemData.content.locationId) {
      var contentInfoWrapper = openUdwButton.closest('.ez-segmentation__content-wrapper').querySelector('.ez-segmentation__content-info');
      var contentTitle = contentInfoWrapper.querySelector('.ez-segmentation__content-title');
      openUdwButton.setAttribute('hidden', 'hidden');
      contentTitle.innerHTML = itemData.content.name;
      contentTitle.dataset.locationId = itemData.content.locationId;
      contentInfoWrapper.querySelector('.ez-segmentation__content-breadcrumbs').innerHTML = itemData.content.breadcrumbs;
      contentInfoWrapper.classList.remove('ez-segmentation__content-info--hidden');
    }

    attachEventsToItem(itemsContainer, listItem, openUdwButton, draggable);
    itemsContainer.append(listItem);
    draggable.reinit();
  };

  var renderCategorySelect = function renderCategorySelect(itemsContainer, listItem, config, itemConfig) {
    var categorySelect = listItem.querySelector('.ez-segmentation__select--category');
    var categorySelectFragment = doc.createDocumentFragment();
    config.forEach(function (category) {
      var option = "<option value=\"".concat(category.id, "\">").concat(category.name, "</option>");
      var select = doc.createElement('select');
      select.insertAdjacentHTML('beforeend', option);
      categorySelectFragment.appendChild(select.querySelector('option'));
    });
    categorySelect.appendChild(categorySelectFragment);
    categorySelect.value = itemConfig.id;
    categorySelect.addEventListener('change', function (event) {
      var categoryConfig = config.find(function (category) {
        return category.id === parseInt(event.currentTarget.value, 10);
      });
      renderSegmentSelect(itemsContainer, listItem, categoryConfig, {});
      updateInputValue(itemsContainer);
    });
  };

  var renderSegmentSelect = function renderSegmentSelect(itemsContainer, listItem, itemConfig, itemData) {
    var segmentSelect = listItem.querySelector('.ez-segmentation__select--segment');
    var segmentSelectFragment = doc.createDocumentFragment();
    itemConfig.segments.forEach(function (segment) {
      var option = "<option value=\"".concat(segment.id, "\">").concat(segment.name, "</option>");
      var select = doc.createElement('select');
      select.insertAdjacentHTML('beforeend', option);
      segmentSelectFragment.appendChild(select.querySelector('option'));
    });
    segmentSelect.innerHTML = '';
    segmentSelect.appendChild(segmentSelectFragment);
    segmentSelect.value = itemData.segment ? itemData.segment.id : itemConfig.segments[0].id;
    segmentSelect.addEventListener('change', updateInputValue.bind(_this, itemsContainer));
  };

  var SegmentationDraggable = /*#__PURE__*/function (_global$eZ$core$Dragg) {
    "use strict";

    _inherits(SegmentationDraggable, _global$eZ$core$Dragg);

    var _super = _createSuper(SegmentationDraggable);

    function SegmentationDraggable(config) {
      _classCallCheck(this, SegmentationDraggable);

      return _super.call(this, config);
    }

    _createClass(SegmentationDraggable, [{
      key: "onDrop",
      value: function onDrop() {
        _get(_getPrototypeOf(SegmentationDraggable.prototype), "onDrop", this).call(this);

        updateInputValue(this.itemsContainer);
      }
    }]);

    return SegmentationDraggable;
  }(global.eZ.core.Draggable);

  segmentations.forEach(function (segmentation) {
    var itemsContainer = segmentation.querySelector('.ez-segmentation__items');
    var draggable = new SegmentationDraggable({
      itemsContainer: itemsContainer,
      selectorItem: '.ez-segmentation__item',
      selectorPlaceholder: '.ez-segmentation__item--placeholder'
    });
    var sourceInput = itemsContainer.closest('.ez-data-source').querySelector('.ez-data-source__input');
    var inputValue = sourceInput.value ? JSON.parse(sourceInput.value) : [];
    var items = inputValue.length ? inputValue : [{}];
    var segmentationsConfig = JSON.parse(sourceInput.dataset.segments);
    var allSegmentGroupsEmpty = segmentationsConfig.every(function (group) {
      return group.segments.length === 0;
    });

    if (!segmentationsConfig.length || allSegmentGroupsEmpty) {
      var noConfigurationMessage = Translator.trans(
      /*@Desc("No segments defined. Create Segments in the Admin panel to use this block.")*/
      'targeted_content_map.no_configuration', {}, 'page_builder');
      var item = "<li class=\"ez-segmentation__item ez-segmentation__item--no-configuration\">".concat(noConfigurationMessage, "</li>");
      itemsContainer.insertAdjacentHTML('beforeend', item);
      return;
    }

    draggable.init();
    items.forEach(function (item) {
      return renderItem(itemsContainer, draggable, item);
    });
    updateInputValue(itemsContainer);
  });
})(window, window.document, window.eZ, window.Translator);

/***/ }),

/***/ 97:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.embed.field.base.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.select.field.base.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.schedule.field.base.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.scheduler.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.fields.errors.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/embed.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/video.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/select.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/checkbox.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/collection.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/schedule.js ./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/richtext.js ./vendor/ezsystems/ezplatform-segmentation/src/bundle/Resources/public/js/widgets/targeted.content.map.js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.embed.field.base.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.embed.field.base.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.select.field.base.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.select.field.base.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.schedule.field.base.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.schedule.field.base.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.scheduler.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.scheduler.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.fields.errors.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/base/block.config.fields.errors.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/embed.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/embed.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/video.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/video.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/select.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/select.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/checkbox.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/checkbox.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/collection.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/collection.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/schedule.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/schedule.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/richtext.js */"./vendor/ezsystems/ezplatform-page-builder/src/bundle/Resources/public/js/config-form/widgets/richtext.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-segmentation/src/bundle/Resources/public/js/widgets/targeted.content.map.js */"./vendor/ezsystems/ezplatform-segmentation/src/bundle/Resources/public/js/widgets/targeted.content.map.js");


/***/ })

},[[97,"runtime"]]]);