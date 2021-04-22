(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-based-publisher-common-js"],{

/***/ "./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/base.schedule.btn.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/base.schedule.btn.js ***!
  \***********************************************************************************************/
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

(function (global, doc, eZ) {
  var LOCALSTORAGE_POST_REFRESH_NOTIFICATION_KEY = 'ez-dateBasedPublisher-scheduling-post-refresh-notification';
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;

  var BaseScheduleBtn = /*#__PURE__*/function () {
    "use strict";

    function BaseScheduleBtn(btn, schedulingModal) {
      _classCallCheck(this, BaseScheduleBtn);

      this.btn = btn;
      this.schedulingModal = schedulingModal;
      this.updateActionBtnDisabledState = this.updateActionBtnDisabledState.bind(this);
      this.makeBulkRequest = this.makeBulkRequest.bind(this);
      this.processBulkResponse = this.processBulkResponse.bind(this);
    }

    _createClass(BaseScheduleBtn, [{
      key: "init",
      value: function init() {
        var _this = this;

        this.btn.addEventListener('click', function () {
          _this.prepareModal();
        });
        var checkboxSelector = this.btn.dataset.checkboxSelector;
        doc.querySelectorAll(checkboxSelector).forEach(function (checkbox) {
          checkbox.addEventListener('change', _this.updateActionBtnDisabledState);
        });
        this.updateActionBtnDisabledState();
        this.showPostRefreshNotification();
      }
    }, {
      key: "getSelectedItems",
      value: function getSelectedItems() {
        var checkboxSelector = this.btn.dataset.checkboxSelector;

        var selectedCheckboxes = _toConsumableArray(doc.querySelectorAll("".concat(checkboxSelector, ":checked")));

        var selectedItemsData = selectedCheckboxes.map(function (checkbox) {
          return JSON.parse(checkbox.closest('.ez-table__row').dataset.itemData);
        });
        return selectedItemsData;
      }
    }, {
      key: "prepareModal",
      value: function prepareModal() {
        var _this$btn$dataset = this.btn.dataset,
            modalTitle = _this$btn$dataset.modalTitle,
            modalTableTitle = _this$btn$dataset.modalTableTitle;
        var selectedItems = this.getSelectedItems();
        this.schedulingModal.setModalTitle(modalTitle);
        this.schedulingModal.setModalTableTitle(modalTableTitle);
        this.schedulingModal.setModalTableBody(selectedItems);
        this.schedulingModal.setConfirmBtnClickHandler(this.makeBulkRequest);
        this.schedulingModal.setDiscardBtnClickHandler(this.makeBulkRequest);
      }
    }, {
      key: "updateActionBtnDisabledState",
      value: function updateActionBtnDisabledState() {
        var checkboxSelector = this.btn.dataset.checkboxSelector;
        this.btn.disabled = !doc.querySelectorAll("".concat(checkboxSelector, ":checked")).length;
      }
    }, {
      key: "showPostRefreshNotification",
      value: function showPostRefreshNotification() {
        var notificationData = localStorage.getItem(LOCALSTORAGE_POST_REFRESH_NOTIFICATION_KEY);

        if (notificationData) {
          var _JSON$parse = JSON.parse(notificationData),
              isError = _JSON$parse.isError,
              message = _JSON$parse.message;

          if (isError) {
            eZ.helpers.notification.showErrorNotification(message);
          } else {
            eZ.helpers.notification.showSuccessNotification(message);
          }

          localStorage.removeItem(LOCALSTORAGE_POST_REFRESH_NOTIFICATION_KEY);
        }
      }
    }, {
      key: "setPostRefreshNotification",
      value: function setPostRefreshNotification(notificationData) {
        localStorage.setItem(LOCALSTORAGE_POST_REFRESH_NOTIFICATION_KEY, JSON.stringify(notificationData));
      }
    }, {
      key: "getBulkRequestOperation",
      value: function getBulkRequestOperation(contentId, version, selectedDate) {
        throw new Error('getBulkRequestOperation should be defined in a subclass');
      }
    }, {
      key: "getFailNotificationMessage",
      value: function getFailNotificationMessage(failedCount, successCount) {
        throw new Error('getFailNotificationMessage should be defined in a subclass');
      }
    }, {
      key: "getSuccessNotificationMessage",
      value: function getSuccessNotificationMessage() {
        throw new Error('getSuccessNotificationMessage should be defined in a subclass');
      }
    }, {
      key: "getErrorNotificationMessage",
      value: function getErrorNotificationMessage() {
        throw new Error('getErrorNotificationMessage should be defined in a subclass');
      }
    }, {
      key: "processBulkResponse",
      value: function processBulkResponse(response) {
        var operations = response.BulkOperationResponse.operations;
        var failedCount = Object.values(operations).filter(function (response) {
          return response.statusCode < 200 && response.statusCode > 299;
        }).length;
        var successCount = operations.length - failedCount;
        var isError = !!failedCount;
        var notificationData = {
          isError: isError,
          message: isError ? this.getFailNotificationMessage(failedCount, successCount) : this.getSuccessNotificationMessage()
        };
        this.setPostRefreshNotification(notificationData);
        global.location.reload(true);
      }
    }, {
      key: "makeBulkRequest",
      value: function makeBulkRequest() {
        var _this2 = this;

        this.schedulingModal.setLoadingState();
        var selectedItems = this.getSelectedItems();
        var selectedDate = this.schedulingModal.getSelectedDate();
        var selectedTimestamp = selectedDate ? Math.floor(selectedDate.valueOf() / 1000) : null;
        var requestBodyOperations = selectedItems.map(function (_ref) {
          var contentId = _ref.contentId,
              version = _ref.version;
          return _this2.getBulkRequestOperation(contentId, version, selectedTimestamp);
        });
        var request = new Request('/api/ezp/v2/bulk', {
          method: 'POST',
          headers: {
            Accept: 'application/vnd.ez.api.BulkOperationResponse+json',
            'Content-Type': 'application/vnd.ez.api.BulkOperation+json',
            'X-Siteaccess': siteaccess,
            'X-CSRF-Token': token
          },
          body: JSON.stringify({
            bulkOperations: {
              operations: requestBodyOperations
            }
          }),
          mode: 'same-origin',
          credentials: 'same-origin'
        });
        fetch(request).then(eZ.helpers.request.getJsonFromResponse).then(this.processBulkResponse)["catch"](function () {
          _this2.setPostRefreshNotification({
            isError: true,
            message: _this2.getErrorNotificationMessage()
          });

          global.location.reload(true);
        });
      }
    }]);

    return BaseScheduleBtn;
  }();

  eZ.addConfig('dateBasedPublisher.scheduling.BaseScheduleBtn', BaseScheduleBtn);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/dashboard.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/dashboard.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ) {
  var allScheduledModalNode = doc.querySelector('#dbp-all-scheduled-scheduling-modal');
  var myScheduledModalNode = doc.querySelector('#dbp-my-scheduled-scheduling-modal');

  if (!allScheduledModalNode || !myScheduledModalNode) {
    return;
  }

  var _eZ$dateBasedPublishe = eZ.dateBasedPublisher.scheduling,
      SchedulingModal = _eZ$dateBasedPublishe.SchedulingModal,
      RescheduleBtn = _eZ$dateBasedPublishe.RescheduleBtn,
      UnscheduleBtn = _eZ$dateBasedPublishe.UnscheduleBtn;
  var allScheduledModal = new SchedulingModal(allScheduledModalNode);
  var myScheduledModal = new SchedulingModal(myScheduledModalNode);
  var allScheduledRescheduleBtn = new RescheduleBtn(doc.querySelector('#dbp-all-scheduled-reschedule'), allScheduledModal);
  var allScheduledUnscheduleBtn = new UnscheduleBtn(doc.querySelector('#dbp-all-scheduled-unschedule'), allScheduledModal);
  var myScheduledRescheduleBtn = new RescheduleBtn(doc.querySelector('#dbp-my-scheduled-reschedule'), myScheduledModal);
  var myScheduledUnscheduleBtn = new UnscheduleBtn(doc.querySelector('#dbp-my-scheduled-unschedule'), myScheduledModal);
  allScheduledModal.init();
  myScheduledModal.init();
  allScheduledRescheduleBtn.init();
  allScheduledUnscheduleBtn.init();
  myScheduledRescheduleBtn.init();
  myScheduledUnscheduleBtn.init();
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/future.scheduling.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/future.scheduling.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ, flatpickr) {
  var input = doc.querySelector('.dbp-publish-later__pick-input');
  var flatpickrInput = doc.querySelector('.flatpickr-date-input');
  var clearBtn = doc.querySelector('.dbp-publish-later__clear-input-schedule');
  var confirmBtn = doc.querySelector('.ez-btn--confirm-schedule');
  var _eZ$helpers$timezone = eZ.helpers.timezone,
      convertDateToTimezone = _eZ$helpers$timezone.convertDateToTimezone,
      formatShortDateTime = _eZ$helpers$timezone.formatShortDateTime;
  var userTimezone = eZ.adminUiConfig.timezone;

  var updateValue = function updateValue(dates) {
    var isDateSelected = !!dates[0];

    if (!isDateSelected) {
      input.dataset.time = '';
      confirmBtn.disabled = true;
      return;
    }

    var selectedDate = dates[0];
    var selectedDateWithUserTimezone = convertDateToTimezone(selectedDate, userTimezone, true);
    var timestamp = Math.floor(selectedDateWithUserTimezone.valueOf() / 1000);
    input.dataset.time = timestamp;
    confirmBtn.disabled = false;
  };

  var submitForm = function submitForm() {
    var timestamp = input.dataset.time;
    doc.querySelector('[name="ezplatform_content_forms_content_edit[date_based_publisher][timestamp]"]').value = timestamp;
    doc.querySelector('[name="ezplatform_content_forms_content_edit[schedule_publish]"]').click();
  };

  var onClearBtnClick = function onClearBtnClick(flatpickr, event) {
    event.preventDefault();
    flatpickr.setDate(null, true);
  };

  if (!confirmBtn) {
    return;
  }

  var userTimezoneCurrentTime = eZ.helpers.timezone.convertDateToTimezone(new Date());
  var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var minDate = new Date(convertDateToTimezone(userTimezoneCurrentTime, browserTimezone, true));
  var flatpickrInstance = flatpickr(flatpickrInput, {
    enableTime: true,
    time_24hr: true,
    formatDate: function formatDate(date) {
      return formatShortDateTime(date, null);
    },
    minDate: minDate,
    onChange: updateValue,
    inline: true,
    defaultHour: minDate.getHours(),
    defaultMinute: minDate.getMinutes()
  });
  clearBtn.addEventListener('click', onClearBtnClick.bind(null, flatpickrInstance), false);
  confirmBtn.addEventListener('click', submitForm, false);
})(window, document, window.eZ, window.flatpickr);

/***/ }),

/***/ "./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/reschedule.btn.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/reschedule.btn.js ***!
  \********************************************************************************************/
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

(function (global, doc, eZ) {
  var RescheduleBtn = /*#__PURE__*/function (_eZ$dateBasedPublishe) {
    "use strict";

    _inherits(RescheduleBtn, _eZ$dateBasedPublishe);

    var _super = _createSuper(RescheduleBtn);

    function RescheduleBtn() {
      _classCallCheck(this, RescheduleBtn);

      return _super.apply(this, arguments);
    }

    _createClass(RescheduleBtn, [{
      key: "getBulkRequestOperation",
      value: function getBulkRequestOperation(contentId, version, publicationTimestamp) {
        return {
          uri: "api/datebasedpublisher/v1/content/objects/".concat(contentId, "/versions/").concat(version, "/schedule/").concat(publicationTimestamp),
          method: 'PATCH'
        };
      }
    }, {
      key: "getFailNotificationMessage",
      value: function getFailNotificationMessage(failedCount, successCount) {
        return Translator.trans(
        /*@Desc("%failedCount% out of %totalCount% selected drafts could not be rescheduled. Please try again.")*/
        'reschedule.fail.message', {
          failedCount: failedCount,
          totalCount: failedCount + successCount
        }, 'ezplatform_date_based_publisher');
      }
    }, {
      key: "getSuccessNotificationMessage",
      value: function getSuccessNotificationMessage() {
        return Translator.trans(
        /*@Desc("Rescheduled all drafts.")*/
        'reschedule.success.message', {}, 'ezplatform_date_based_publisher');
      }
    }, {
      key: "getErrorNotificationMessage",
      value: function getErrorNotificationMessage() {
        return Translator.trans(
        /*@Desc("An unexpected error occurred while rescheduling the selected draft(s). Please try again.")*/
        'reschedule.error.message', {}, 'ezplatform_date_based_publisher');
      }
    }, {
      key: "prepareModal",
      value: function prepareModal() {
        _get(_getPrototypeOf(RescheduleBtn.prototype), "prepareModal", this).call(this);

        this.schedulingModal.toggleConfirmBtn(true);
        this.schedulingModal.togglePublicationDateInput(true);
        this.schedulingModal.toggleDiscardBtn(false);
      }
    }]);

    return RescheduleBtn;
  }(eZ.dateBasedPublisher.scheduling.BaseScheduleBtn);

  eZ.addConfig('dateBasedPublisher.scheduling.RescheduleBtn', RescheduleBtn);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/scheduling.modal.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/scheduling.modal.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function (global, doc, eZ, $, flatpickr) {
  var convertDateToTimezone = eZ.helpers.timezone.convertDateToTimezone;

  var SchedulingModal = /*#__PURE__*/function () {
    "use strict";

    function SchedulingModal(modal) {
      _classCallCheck(this, SchedulingModal);

      this.modal = modal;
      this.flatpickrInput = this.modal.querySelector('.flatpickr-date-input');
      this.confirmBtn = this.modal.querySelector('.ez-btn--confirm');
      this.discardBtn = this.modal.querySelector('.ez-btn--discard');
      this.selectedDate = null;
      this.confirmBtnClickHandler = null;
      this.discardBtnClickHandler = null;
      this.handleConfirmBtnClick = this.handleConfirmBtnClick.bind(this);
      this.handleDiscardBtnClick = this.handleDiscardBtnClick.bind(this);
      this.updatePublicationDateValue = this.updatePublicationDateValue.bind(this);
    }

    _createClass(SchedulingModal, [{
      key: "init",
      value: function init() {
        var flatpickrInstance = flatpickr(this.flatpickrInput, {
          enableTime: true,
          time_24hr: true,
          formatDate: function formatDate(date) {
            return eZ.helpers.timezone.formatFullDateTime(date, null);
          },
          minDate: Date.now(),
          onChange: this.updatePublicationDateValue,
          "static": true
        });
        $(this.modal).on('hidden.bs.modal', function () {
          flatpickrInstance.clear();
        });
        this.confirmBtn.addEventListener('click', this.handleConfirmBtnClick);
        this.discardBtn.addEventListener('click', this.handleDiscardBtnClick);
      }
    }, {
      key: "handleConfirmBtnClick",
      value: function handleConfirmBtnClick() {
        if (typeof this.confirmBtnClickHandler === 'function') {
          this.confirmBtnClickHandler();
        }
      }
    }, {
      key: "handleDiscardBtnClick",
      value: function handleDiscardBtnClick() {
        if (typeof this.discardBtnClickHandler === 'function') {
          this.discardBtnClickHandler();
        }
      }
    }, {
      key: "getSelectedDate",
      value: function getSelectedDate() {
        return this.selectedDate;
      }
    }, {
      key: "setConfirmBtnClickHandler",
      value: function setConfirmBtnClickHandler(handlerFn) {
        this.confirmBtnClickHandler = handlerFn;
      }
    }, {
      key: "setDiscardBtnClickHandler",
      value: function setDiscardBtnClickHandler(handlerFn) {
        this.discardBtnClickHandler = handlerFn;
      }
    }, {
      key: "setModalTitle",
      value: function setModalTitle(title) {
        var modalTitleNode = this.modal.querySelector(".modal-title");
        modalTitleNode.innerHTML = title;
      }
    }, {
      key: "setModalTableTitle",
      value: function setModalTableTitle(title) {
        var modalTableTitleNode = this.modal.querySelector(".ez-table-header__headline");
        modalTableTitleNode.innerHTML = title;
      }
    }, {
      key: "togglePublicationDateInput",
      value: function togglePublicationDateInput(show) {
        var publicationDateNode = this.modal.querySelector(".ez-scheduling-modal__publication-date");
        publicationDateNode.hidden = !show;
      }
    }, {
      key: "toggleConfirmBtn",
      value: function toggleConfirmBtn(show) {
        var btn = this.modal.querySelector(".ez-btn--confirm");
        btn.hidden = !show;
      }
    }, {
      key: "toggleDiscardBtn",
      value: function toggleDiscardBtn(show) {
        var btn = this.modal.querySelector(".ez-btn--discard");
        btn.hidden = !show;
      }
    }, {
      key: "setModalTableBody",
      value: function setModalTableBody(selectedItemsData) {
        var table = this.modal.querySelector('.ez-scheduling-modal__table');
        var tableBody = table.querySelector('.ez-scheduling-modal__table-body');
        var tableRowTemplate = table.dataset.tableRowTemplate;
        var fragment = doc.createDocumentFragment();
        selectedItemsData.forEach(function (_ref) {
          var publicationDate = _ref.publicationDate,
              name = _ref.name,
              version = _ref.version,
              language = _ref.language,
              contentTypeName = _ref.contentTypeName,
              creationDate = _ref.creationDate,
              creator = _ref.creator;
          var container = doc.createElement('tbody');
          var emDash = "\u2014";
          var renderedItem = tableRowTemplate.replace('{{ date_and_time }}', publicationDate ? publicationDate : "".concat(emDash).concat(emDash)).replace('{{ name }}', eZ.helpers.text.escapeHTML(name)).replace('{{ version }}', version).replace('{{ translations }}', language).replace('{{ content_type }}', contentTypeName).replace('{{ creation_date }}', creationDate).replace('{{ creator }}', creator);
          container.insertAdjacentHTML('beforeend', renderedItem);
          var tableRowNode = container.querySelector('tr');
          fragment.append(tableRowNode);
        });
        this.removeNodeChildren(tableBody);
        tableBody.append(fragment);
      }
    }, {
      key: "removeNodeChildren",
      value: function removeNodeChildren(node) {
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
      }
    }, {
      key: "updatePublicationDateValue",
      value: function updatePublicationDateValue(dates) {
        var isDateSelected = !!dates[0];

        if (!isDateSelected) {
          this.confirmBtn.disabled = true;
          this.selectedDate = null;
          return;
        }

        var selectedDateWithUserTimezone = convertDateToTimezone(dates[0], undefined, true);
        this.selectedDate = selectedDateWithUserTimezone;
        this.confirmBtn.disabled = false;
      }
    }, {
      key: "setLoadingState",
      value: function setLoadingState() {
        var btns = this.modal.querySelectorAll('.ez-scheduling-modal__btn');
        var btnsSpinners = this.modal.querySelectorAll('.ez-scheduling-modal__btn-spinner');
        var modalCloseBtn = this.modal.querySelector('.close');
        var dateInput = this.modal.querySelector('.ez-scheduling-modal__input');
        btns.forEach(function (btn) {
          btn.disabled = true;
        });
        btnsSpinners.forEach(function (btnSpinner) {
          btnSpinner.classList.add('ez-scheduling-modal__btn-spinner--visible');
        });
        modalCloseBtn.disabled = true;
        dateInput.disabled = true;
      }
    }]);

    return SchedulingModal;
  }();

  eZ.addConfig('dateBasedPublisher.scheduling.SchedulingModal', SchedulingModal);
})(window, window.document, window.eZ, window.jQuery, window.flatpickr);

/***/ }),

/***/ "./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/timeline.event.listener.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/timeline.event.listener.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ) {
  var refreshPreview = function refreshPreview(event) {
    var latestPublishLaterEventInRange;
    var latestPublishLaterEventBeforeRange;
    var _event$detail = event.detail,
        newTimestamp = _event$detail.newTimestamp,
        oldTimestamp = _event$detail.oldTimestamp,
        events = _event$detail.events;
    var isSetToFuture = newTimestamp > oldTimestamp;
    var now = new Date().getTime();
    var publishLaterEventsInRange = [];
    var publishLaterEventsBeforeRange = [];

    var findLatestEvent = function findLatestEvent(latestEvent, event) {
      return latestEvent.date < event.date ? event : latestEvent;
    };

    events.forEach(function (event) {
      var isPublishLaterEvent = event.type === 'future_publication';

      if (!isPublishLaterEvent) {
        return;
      }

      var timestamp = event.date * 1000;
      var isBeforeTimeRange = isSetToFuture ? timestamp >= now && timestamp <= oldTimestamp : timestamp >= now && timestamp <= newTimestamp;
      var isInTimeRange = isSetToFuture ? timestamp > oldTimestamp && timestamp <= newTimestamp : timestamp <= oldTimestamp && timestamp > newTimestamp;

      if (isInTimeRange) {
        publishLaterEventsInRange.push(event);
      } else if (isBeforeTimeRange) {
        publishLaterEventsBeforeRange.push(event);
      }
    });

    if (!publishLaterEventsInRange.length) {
      return;
    }

    if (publishLaterEventsInRange.length) {
      latestPublishLaterEventInRange = publishLaterEventsInRange.reduce(findLatestEvent);
    }

    if (publishLaterEventsBeforeRange.length) {
      latestPublishLaterEventBeforeRange = publishLaterEventsBeforeRange.reduce(findLatestEvent);
    }

    var latestPublishLaterEvent = isSetToFuture ? latestPublishLaterEventInRange : latestPublishLaterEventBeforeRange;
    global.location = global.Routing.generate('ezplatform.page_builder.location_preview', {
      locationId: eZ.pageBuilder.data.locationId,
      languageCode: eZ.pageBuilder.data.languageCode,
      versionNo: latestPublishLaterEvent ? latestPublishLaterEvent.futureVersionNo : eZ.pageBuilder.data.publishedVersionNo,
      siteaccessName: eZ.pageBuilder.data.siteaccess,
      reference_timestamp: Math.floor(newTimestamp / 1000)
    }, true);
  };

  doc.body.addEventListener('ez-timestamp-changed', refreshPreview, false);
})(window, document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/unschedule.btn.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/unschedule.btn.js ***!
  \********************************************************************************************/
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

(function (global, doc, eZ) {
  var UnscheduleBtn = /*#__PURE__*/function (_eZ$dateBasedPublishe) {
    "use strict";

    _inherits(UnscheduleBtn, _eZ$dateBasedPublishe);

    var _super = _createSuper(UnscheduleBtn);

    function UnscheduleBtn() {
      _classCallCheck(this, UnscheduleBtn);

      return _super.apply(this, arguments);
    }

    _createClass(UnscheduleBtn, [{
      key: "getBulkRequestOperation",
      value: function getBulkRequestOperation(contentId, version) {
        return {
          uri: "api/datebasedpublisher/v1/content/objects/".concat(contentId, "/versions/").concat(version),
          method: 'DELETE'
        };
      }
    }, {
      key: "getFailNotificationMessage",
      value: function getFailNotificationMessage(failedCount, successCount) {
        return Translator.trans(
        /*@Desc("%failedCount% out of %totalCount% selected publication dates could not be removed. Please try again.")*/
        'unschedule.fail.message', {
          failedCount: failedCount,
          totalCount: failedCount + successCount
        }, 'ezplatform_date_based_publisher');
      }
    }, {
      key: "getSuccessNotificationMessage",
      value: function getSuccessNotificationMessage() {
        return Translator.trans(
        /*@Desc("Removed all selected publication dates.")*/
        'unschedule.success.message', {}, 'ezplatform_date_based_publisher');
      }
    }, {
      key: "getErrorNotificationMessage",
      value: function getErrorNotificationMessage() {
        return Translator.trans(
        /*@Desc("An error occurred while removing the selected publication dates. Please try again.")*/
        'unschedule.error.message', {}, 'ezplatform_date_based_publisher');
      }
    }, {
      key: "prepareModal",
      value: function prepareModal() {
        _get(_getPrototypeOf(UnscheduleBtn.prototype), "prepareModal", this).call(this);

        this.schedulingModal.toggleConfirmBtn(false);
        this.schedulingModal.togglePublicationDateInput(false);
        this.schedulingModal.toggleDiscardBtn(true);
      }
    }]);

    return UnscheduleBtn;
  }(eZ.dateBasedPublisher.scheduling.BaseScheduleBtn);

  eZ.addConfig('dateBasedPublisher.scheduling.UnscheduleBtn', UnscheduleBtn);
})(window, window.document, window.eZ);

/***/ }),

/***/ 50:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/future.scheduling.js ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/timeline.event.listener.js ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/scheduling.modal.js ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/base.schedule.btn.js ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/reschedule.btn.js ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/unschedule.btn.js ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/dashboard.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/future.scheduling.js */"./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/future.scheduling.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/timeline.event.listener.js */"./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/timeline.event.listener.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/scheduling.modal.js */"./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/scheduling.modal.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/base.schedule.btn.js */"./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/base.schedule.btn.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/reschedule.btn.js */"./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/reschedule.btn.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/unschedule.btn.js */"./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/unschedule.btn.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/dashboard.js */"./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/dashboard.js");


/***/ })

},[[50,"runtime"]]]);