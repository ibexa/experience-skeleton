(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-calendar-common-js"],{

/***/ "./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.discard.hide.later.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.discard.hide.later.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, $, eZ) {
  var SELECTOR_MODAL_DISCARD = '#discard-future-hide-modal';
  var modal = doc.querySelector(SELECTOR_MODAL_DISCARD);
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
  var confirmBtn = modal.querySelector('.ez-btn--confirm-discard-scheduling');
  var cancelBtn = modal.querySelector('.ez-btn--cancel-discard-scheduling');
  var selectedEvents = null;

  var setModalTableTitle = function setModalTableTitle(title) {
    var modalTableTitleNode = doc.querySelector("".concat(SELECTOR_MODAL_DISCARD, " .ez-table-header__headline"));
    modalTableTitleNode.innerHTML = title;
  };

  var setModalTableBody = function setModalTableBody(events) {
    var modal = doc.querySelector(SELECTOR_MODAL_DISCARD);
    var table = modal.querySelector('.ez-bulk-action-failed-modal__table');
    var tableBody = table.querySelector('.ez-bulk-action-failed-modal__table-body');
    var tableRowTemplate = table.dataset.tableRowTemplate;
    var fragment = doc.createDocumentFragment();
    Object.values(events).forEach(function (_ref) {
      var name = _ref.name,
          attributes = _ref.attributes,
          type = _ref.type;
      var contentTypeName = attributes.contentTypeName,
          modifiedLanguage = attributes.modifiedLanguage;
      var escapeHTML = eZ.helpers.text.escapeHTML;
      var container = doc.createElement('tbody');
      var renderedItem = tableRowTemplate.replace('{{ content_type_identifier }}', contentTypeName.value).replace('{{ content_name }}', escapeHTML(name)).replace('{{ event_name }}', eZ.calendar.config.types[type].label);
      container.insertAdjacentHTML('beforeend', renderedItem);
      var tableRowNode = container.querySelector('tr');
      fragment.append(tableRowNode);
    });
    removeNodeChildren(tableBody);
    tableBody.append(fragment);
  };

  var removeNodeChildren = function removeNodeChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };

  var showDiscardPublishLaterModal = function showDiscardPublishLaterModal(events) {
    var tableTitle = Translator.trans(
    /*@Desc("Selected content (%eventsCount%)")*/
    'modal.discard.table.header', {
      eventsCount: Object.keys(selectedEvents).length
    }, 'ezplatform_calendar_events');
    setModalTableBody(selectedEvents);
    setModalTableTitle(tableTitle);
    $(SELECTOR_MODAL_DISCARD).modal('show');
  };

  var handleUnscheduleEvents = function handleUnscheduleEvents(_ref2) {
    var detail = _ref2.detail;
    selectedEvents = detail.events;
    showDiscardPublishLaterModal();
  };

  var handleConfirm = function handleConfirm() {
    var errorMessage = Translator.trans(
    /*@Desc("Cannot cancel selected hide(s)")*/
    'unschedule.future_hide.error.message', {}, 'ezplatform_calendar_events');
    var body = {
      UnscheduleAction: {
        events: Object.keys(selectedEvents)
      }
    };
    var request = new Request('/api/ezp/v2/calendar/event/future_hide', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/vnd.ez.api.calendar.future_hide.UnscheduleAction+json',
        'X-CSRF-Token': token,
        'X-Siteaccess': siteaccess
      },
      body: JSON.stringify(body),
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(function (response) {
      if (response.ok) {
        doc.body.dispatchEvent(new CustomEvent('ez-calendar-reload-data'));
        doc.body.dispatchEvent(new CustomEvent('ez-calendar-clear-selection'));
      }
    })["catch"](function () {
      return window.eZ.helpers.notification.showErrorNotification(errorMessage);
    });
  };

  confirmBtn.addEventListener('click', handleConfirm, false);
  doc.body.addEventListener('future_hide:unschedule', handleUnscheduleEvents, false);
})(window, window.document, window.jQuery, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.discard.publish.later.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.discard.publish.later.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, $, eZ) {
  var SELECTOR_MODAL_DISCARD = '#discard-publish-later-modal';
  var modal = doc.querySelector(SELECTOR_MODAL_DISCARD);
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
  var confirmBtn = modal.querySelector('.ez-btn--confirm-discard-scheduling');
  var cancelBtn = modal.querySelector('.ez-btn--cancel-discard-scheduling');
  var selectedEvents = null;

  var setModalTableTitle = function setModalTableTitle(title) {
    var modalTableTitleNode = doc.querySelector("".concat(SELECTOR_MODAL_DISCARD, " .ez-table-header__headline"));
    modalTableTitleNode.innerHTML = title;
  };

  var setModalTableBody = function setModalTableBody(events) {
    var modal = doc.querySelector(SELECTOR_MODAL_DISCARD);
    var table = modal.querySelector('.ez-bulk-action-failed-modal__table');
    var tableBody = table.querySelector('.ez-bulk-action-failed-modal__table-body');
    var tableRowTemplate = table.dataset.tableRowTemplate;
    var fragment = doc.createDocumentFragment();
    Object.values(events).forEach(function (_ref) {
      var name = _ref.name,
          attributes = _ref.attributes,
          type = _ref.type;
      var contentTypeName = attributes.contentTypeName,
          modifiedLanguage = attributes.modifiedLanguage;
      var escapeHTML = eZ.helpers.text.escapeHTML;
      var container = doc.createElement('tbody');
      var renderedItem = tableRowTemplate.replace('{{ content_type_identifier }}', contentTypeName.value).replace('{{ content_name }}', escapeHTML(name)).replace('{{ event_name }}', eZ.calendar.config.types[type].label).replace('{{ language }}', modifiedLanguage.value);
      container.insertAdjacentHTML('beforeend', renderedItem);
      var tableRowNode = container.querySelector('tr');
      fragment.append(tableRowNode);
    });
    removeNodeChildren(tableBody);
    tableBody.append(fragment);
  };

  var removeNodeChildren = function removeNodeChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };

  var showDiscardPublishLaterModal = function showDiscardPublishLaterModal(events) {
    var tableTitle = Translator.trans(
    /*@Desc("Selected content (%eventsCount%)")*/
    'modal.discard.table.header', {
      eventsCount: Object.keys(selectedEvents).length
    }, 'ezplatform_calendar_events');
    setModalTableBody(selectedEvents);
    setModalTableTitle(tableTitle);
    $(SELECTOR_MODAL_DISCARD).modal('show');
  };

  var handleUnscheduleEvents = function handleUnscheduleEvents(_ref2) {
    var detail = _ref2.detail;
    selectedEvents = detail.events;
    showDiscardPublishLaterModal();
  };

  var handleConfirm = function handleConfirm() {
    var errorMessage = Translator.trans(
    /*@Desc("Cannot cancel selected publication(s)")*/
    'unschedule.error.message', {}, 'ezplatform_calendar_events');
    var body = {
      UnscheduleAction: {
        events: Object.keys(selectedEvents)
      }
    };
    var request = new Request('/api/ezp/v2/calendar/event/future_publication', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/vnd.ez.api.calendar.future_publication.UnscheduleAction+json',
        'X-CSRF-Token': token,
        'X-Siteaccess': siteaccess
      },
      body: JSON.stringify(body),
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(function (response) {
      if (response.ok) {
        doc.body.dispatchEvent(new CustomEvent('ez-calendar-reload-data'));
        doc.body.dispatchEvent(new CustomEvent('ez-calendar-clear-selection'));
      }
    })["catch"](function () {
      return window.eZ.helpers.notification.showErrorNotification(errorMessage);
    });
  };

  confirmBtn.addEventListener('click', handleConfirm, false);
  doc.body.addEventListener('future_publication:unschedule', handleUnscheduleEvents, false);
})(window, window.document, window.jQuery, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.reschedule.hide.later.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.reschedule.hide.later.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ, $, flatpickr) {
  var SELECTOR_MODAL_RESCHEDULE = '#reschedule-future-hide-modal';
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
  var modal = doc.querySelector(SELECTOR_MODAL_RESCHEDULE);
  var flatpickrInput = modal.querySelector('.flatpickr-date-input');
  var btnClear = doc.querySelector('.ez-reschedule-future-hide-modal__clear-input');
  var confirmBtn = modal.querySelector('.ez-btn--confirm-reschedule');
  var _eZ$helpers$timezone = eZ.helpers.timezone,
      convertDateToTimezone = _eZ$helpers$timezone.convertDateToTimezone,
      formatShortDateTime = _eZ$helpers$timezone.formatShortDateTime;
  var selectedEvents = null;
  var selectedDate = null;

  var updateValue = function updateValue(dates) {
    var isDateSelected = !!dates[0];

    if (!isDateSelected) {
      confirmBtn.disabled = true;
      selectedDate = null;
      return;
    }

    var selectedDateWithUserTimezone = convertDateToTimezone(dates[0], undefined, true);
    var timestamp = Math.floor(selectedDateWithUserTimezone.valueOf() / 1000);
    selectedDate = timestamp;
    confirmBtn.disabled = false;
  };

  var showReschedulePublishLaterModal = function showReschedulePublishLaterModal() {
    $(SELECTOR_MODAL_RESCHEDULE).modal('show');
  };

  var handleConfirm = function handleConfirm() {
    var errorMessage = Translator.trans(
    /*@Desc("Cannot reschedule")*/
    'reschedule.error.message', {}, 'ezplatform_calendar_events');
    var body = {
      RescheduleAction: {
        events: Object.keys(selectedEvents),
        dateTime: selectedDate
      }
    };
    var request = new Request('/api/ezp/v2/calendar/event/future_hide', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/vnd.ez.api.calendar.future_hide.RescheduleAction+json',
        'X-CSRF-Token': token,
        'X-Siteaccess': siteaccess
      },
      body: JSON.stringify(body),
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(function (response) {
      if (response.ok) {
        doc.body.dispatchEvent(new CustomEvent('ez-calendar-reload-data'));
        doc.body.dispatchEvent(new CustomEvent('ez-calendar-clear-selection'));
      }
    })["catch"](function () {
      return window.eZ.helpers.notification.showErrorNotification(errorMessage);
    });
  };

  var handleRescheduleEvents = function handleRescheduleEvents(_ref) {
    var detail = _ref.detail;
    selectedEvents = detail.events;
    showReschedulePublishLaterModal();
  };

  var onClearBtnClick = function onClearBtnClick(flatpickr, event) {
    event.preventDefault();
    flatpickr.setDate(null, true);
  };

  if (!confirmBtn) {
    return;
  }

  var flatpickrInstance = flatpickr(flatpickrInput, {
    enableTime: true,
    time_24hr: true,
    formatDate: function formatDate(date) {
      return formatShortDateTime(date, null);
    },
    minDate: Date.now(),
    onChange: updateValue,
    inline: true
  });
  btnClear.addEventListener('click', onClearBtnClick.bind(null, flatpickrInstance), false);
  confirmBtn.addEventListener('click', handleConfirm, false);
  doc.body.addEventListener('future_hide:reschedule', handleRescheduleEvents, false);
})(window, window.document, window.eZ, window.jQuery, window.flatpickr);

/***/ }),

/***/ "./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.reschedule.publish.later.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.reschedule.publish.later.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ, $, flatpickr) {
  var SELECTOR_MODAL_RESCHEDULE = '#reschedule-publish-later-modal';
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
  var modal = doc.querySelector(SELECTOR_MODAL_RESCHEDULE);
  var flatpickrInput = modal.querySelector('.flatpickr-date-input');
  var btnClear = doc.querySelector('.ez-reschedule-publish-later-modal__clear-input');
  var confirmBtn = modal.querySelector('.ez-btn--confirm-reschedule');
  var _eZ$helpers$timezone = eZ.helpers.timezone,
      convertDateToTimezone = _eZ$helpers$timezone.convertDateToTimezone,
      formatShortDateTime = _eZ$helpers$timezone.formatShortDateTime;
  var selectedEvents = null;
  var selectedDate = null;

  var updateValue = function updateValue(dates) {
    var isDateSelected = !!dates[0];

    if (!isDateSelected) {
      confirmBtn.disabled = true;
      selectedDate = null;
      return;
    }

    var selectedDateWithUserTimezone = convertDateToTimezone(dates[0], undefined, true);
    var timestamp = Math.floor(selectedDateWithUserTimezone.valueOf() / 1000);
    selectedDate = timestamp;
    confirmBtn.disabled = false;
  };

  var showReschedulePublishLaterModal = function showReschedulePublishLaterModal() {
    $(SELECTOR_MODAL_RESCHEDULE).modal('show');
  };

  var handleConfirm = function handleConfirm() {
    var errorMessage = Translator.trans(
    /*@Desc("Cannot reschedule")*/
    'reschedule.error.message', {}, 'ezplatform_calendar_events');
    var body = {
      RescheduleAction: {
        events: Object.keys(selectedEvents),
        dateTime: selectedDate
      }
    };
    var request = new Request('/api/ezp/v2/calendar/event/future_publication', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/vnd.ez.api.calendar.future_publication.RescheduleAction+json',
        'X-CSRF-Token': token,
        'X-Siteaccess': siteaccess
      },
      body: JSON.stringify(body),
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(function (response) {
      if (response.ok) {
        doc.body.dispatchEvent(new CustomEvent('ez-calendar-reload-data'));
        doc.body.dispatchEvent(new CustomEvent('ez-calendar-clear-selection'));
      }
    })["catch"](function () {
      return window.eZ.helpers.notification.showErrorNotification(errorMessage);
    });
  };

  var handleRescheduleEvents = function handleRescheduleEvents(_ref) {
    var detail = _ref.detail;
    selectedEvents = detail.events;
    showReschedulePublishLaterModal();
  };

  var onClearBtnClick = function onClearBtnClick(flatpickr, event) {
    event.preventDefault();
    flatpickr.setDate(null, true);
  };

  if (!confirmBtn) {
    return;
  }

  var flatpickrInstance = flatpickr(flatpickrInput, {
    enableTime: true,
    time_24hr: true,
    formatDate: function formatDate(date) {
      return formatShortDateTime(date, null);
    },
    minDate: Date.now(),
    onChange: updateValue,
    inline: true
  });
  btnClear.addEventListener('click', onClearBtnClick.bind(null, flatpickrInstance), false);
  confirmBtn.addEventListener('click', handleConfirm, false);
  doc.body.addEventListener('future_publication:reschedule', handleRescheduleEvents, false);
})(window, window.document, window.eZ, window.jQuery, window.flatpickr);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-calendar/src/bundle/Resources/public/js/calendar.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-calendar/src/bundle/Resources/public/js/calendar.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, React, ReactDOM, eZ) {
  var calendarContainer = doc.querySelector('.ez-calendar-container');
  var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  var contentTreeContainer = doc.querySelector('.ez-calendar-sidebar-container');
  var contentTreeWrapper = doc.querySelector('.ez-calendar-sidebar-container__wrapper');
  var frame = null;

  var updateCalendarSidebarWrapperHeight = function updateCalendarSidebarWrapperHeight() {
    var height = Math.min(window.innerHeight - contentTreeContainer.getBoundingClientRect().top, window.innerHeight);
    contentTreeWrapper.style.height = "".concat(height, "px");
  };

  var handleViewportChange = function handleViewportChange() {
    if (frame) {
      cancelAnimationFrame(frame);
    }

    frame = requestAnimationFrame(updateCalendarSidebarWrapperHeight);
  };

  ReactDOM.render(React.createElement(eZ.modules.Calendar, {
    restInfo: {
      token: token,
      siteaccess: siteaccess
    },
    eventsConfig: eZ.calendar.config.types
  }), calendarContainer);
  updateCalendarSidebarWrapperHeight();
  doc.addEventListener('scroll', handleViewportChange, {
    capture: false,
    passive: true
  });
  window.addEventListener('resize', handleViewportChange, {
    capture: false,
    passive: true
  });
})(window, window.document, window.React, window.ReactDOM, window.eZ);

/***/ }),

/***/ 57:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-calendar/src/bundle/Resources/public/js/calendar.js ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.discard.publish.later.js ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.discard.hide.later.js ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.reschedule.publish.later.js ./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.reschedule.hide.later.js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-calendar/src/bundle/Resources/public/js/calendar.js */"./vendor/ezsystems/ezplatform-calendar/src/bundle/Resources/public/js/calendar.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.discard.publish.later.js */"./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.discard.publish.later.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.discard.hide.later.js */"./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.discard.hide.later.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.reschedule.publish.later.js */"./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.reschedule.publish.later.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.reschedule.hide.later.js */"./vendor/ezsystems/date-based-publisher/bundle/Resources/public/js/calendar.reschedule.hide.later.js");


/***/ })

},[[57,"runtime"]]]);