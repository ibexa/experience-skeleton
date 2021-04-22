(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-personalization-scenarios-preview-js"],{

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/json.prettier.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/json.prettier.js ***!
  \*****************************************************************************************************/
/*! exports provided: JsonPrettier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonPrettier", function() { return JsonPrettier; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CLASS_JSON_KEY = 'ez-json ez-json__key';
var CLASS_JSON_VALUE = 'ez-json ez-json__value';
var CLASS_JSON_STRING = 'ez-json ez-json__string';
var REGEXP_JSON_LINE = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
var JsonPrettier = /*#__PURE__*/function () {
  function JsonPrettier() {
    _classCallCheck(this, JsonPrettier);
  }

  _createClass(JsonPrettier, [{
    key: "construct",
    value: function construct() {
      this.jsonString = '{}';
    }
  }, {
    key: "replaceCallback",
    value: function replaceCallback(match, indent, key, value, closing) {
      var jsonRow = indent || '';
      var jsonRowClosing = closing || '';

      if (key) {
        var jsonKey = key.replace(/[": ]/g, '');
        var jsonKeyRow = "<span class=\"".concat(CLASS_JSON_KEY, "\">").concat(jsonKey, "</span>:");
        jsonRow += jsonKeyRow;
      }

      if (value) {
        var jsonValueClass = value[0] === '"' ? CLASS_JSON_STRING : CLASS_JSON_VALUE;
        var jsonValueRow = "<span class=\"".concat(jsonValueClass, "\">").concat(value, "</span>");
        jsonRow += jsonValueRow;
      }

      return jsonRow + jsonRowClosing;
    }
  }, {
    key: "getFormattedJson",
    value: function getFormattedJson() {
      return this.jsonString.replace(/&/g, '&amp;').replace(/\\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(REGEXP_JSON_LINE, this.replaceCallback);
    }
  }, {
    key: "jsonContent",
    set: function set(json) {
      if (typeof json !== 'string') {
        json = JSON.stringify(json, null, 3);
      }

      this.jsonString = json;
    }
  }]);

  return JsonPrettier;
}();

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.preview.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.preview.js ***!
  \*********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _json_prettier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json.prettier */ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/json.prettier.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



(function (doc, getComputedStyle, eZ, Routing, Translator) {
  var galleryItemsDiffContainerSize = 0;
  var GALLERY_ITEM_WIDTH = 276;
  var CLASS_JSON_RESPONSE_HIDE = 'ez-scenario-preview__json-response-container--hide';
  var SELECTOR_CONTENT_FIELD = '.ez-scenario-preview__field';
  var SELECTOR_GALLERY_ITEM_CONTAINER = '.ez-scenario-preview__gallery-item-container';
  var SELECTOR_TAGS_CONTAINER = '.ez-scenario-preview__tags';
  var SELECTOR_TAG = '.ez-scenario-preview__tag';
  var SELECTOR_ADD_TAG_INPUT = '.ez-scenario-preview__input--add-tag';
  var SELECTOR_ADD_TAG_BUTTON = '.ez-scenario-preview__add-tag-button';
  var SELECTOR_TAG_INPUT = '.ez-scenario-preview__tag-input';
  var SELECTOR_REMOVE_TAG_BUTTON = '.ez-tag__remove-btn';
  var SELECTOR_GALLERY_MESSAGE_REASON = '.ez-scenario-preview__gallery-message-reason';
  var prettier = new _json_prettier__WEBPACK_IMPORTED_MODULE_0__["JsonPrettier"]();
  var getJsonFromResponse = eZ.helpers.request.getJsonFromResponse;
  var scenarioName = doc.querySelector('.ez-scenario-preview__container--recomendation-response').dataset.scenarioName;
  var toggleJsonResponseButtons = doc.querySelectorAll('.ez-scenario-preview__json-response-button');
  var jsonResponsePreviewContainer = doc.querySelector('.ez-scenario-preview__json-response-container');
  var generatedUrlNode = doc.querySelector('.ez-scenario-preview__field-value--generated-url');
  var sendRequestButton = doc.querySelector('.ez-scenario-preview__send-request');
  var galleryControlButtons = doc.querySelectorAll('.ez-scenario-preview__gallery-control-button');
  var galleryContentNode = doc.querySelector('.ez-scenario-preview__gallery-content');
  var galleryMessageNode = doc.querySelector('.ez-scenario-preview__gallery-message');
  var jsonResponsePreviewNode = doc.querySelector('.ez-scenario-preview__json-response-content');
  var outputTypeSelect = doc.querySelector('select[name="recommendation_call[output_type]"]');

  var fetchData = function fetchData() {
    var form = doc.querySelector('.ez-scenario-preview__container--recomendation-call .ez-personalization-base-item__form');
    var formData = new FormData(form);
    var request = new Request(Routing.generate('ibexa.personalization.recommendation.preview', {
      name: scenarioName
    }), {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json'
      },
      body: formData
    });
    fetch(request).then(getJsonFromResponse).then(setDynamicContent)["catch"](eZ.helpers.notification.showErrorNotification);
  };

  var fetchAttributtes = function fetchAttributtes(event) {
    var value = event.currentTarget.value;
    var request = new Request(Routing.generate('ibexa.personalization.output_type.attributes', {
      itemTypeId: value
    }), {
      method: 'GET'
    });
    fetch(request).then(getJsonFromResponse).then(setAttributes)["catch"](eZ.helpers.notification.showErrorNotification);
  };

  var setAttributes = function setAttributes(data) {
    var container = doc.querySelector('.ez-scenario-preview__field--attributes');
    var tagsContainer = container.querySelector(SELECTOR_TAGS_CONTAINER);
    var template = container.dataset.template;
    tagsContainer.innerHTML = '';

    if (data.length) {
      data.forEach(function (name) {
        var renderedTemplate = template.replace('__name__', name);
        tagsContainer.insertAdjacentHTML('beforeend', renderedTemplate);
        var lastTag = container.querySelector("".concat(SELECTOR_TAG, ":last-child"));
        lastTag.querySelector(SELECTOR_REMOVE_TAG_BUTTON).addEventListener('click', removeTag, false);
        lastTag.querySelector('input').setAttribute('value', name);
      });
    }

    reindexingTagsInput(container);
  };

  var setDynamicContent = function setDynamicContent(data) {
    var galleryItemTemplate = galleryContentNode.dataset.itemTemplate;
    var errorMessage = data.errorMessage || '';
    generatedUrlNode.innerHTML = data.requestUrl;
    galleryContentNode.innerHTML = '';

    if (data.previewRecommendationItemList) {
      data.previewRecommendationItemList.forEach(function (_ref) {
        var title = _ref.title,
            description = _ref.description,
            image = _ref.image;
        var renderedGalleryItem = galleryItemTemplate.replace('{{ image }}', image).replace('{{ title }}', title).replace('{{ description }}', description);
        galleryContentNode.insertAdjacentHTML('beforeend', renderedGalleryItem);
      });
    }

    galleryMessageNode.querySelector(SELECTOR_GALLERY_MESSAGE_REASON).innerHTML = errorMessage;
    showJsonResponsePreview(data.response);
    fitGallery();
    window.scrollTo({
      top: 0
    });
  };

  var fitGallery = function fitGallery() {
    var contentWidth = galleryContentNode.offsetWidth;
    var items = doc.querySelectorAll(SELECTOR_GALLERY_ITEM_CONTAINER);
    var contentMethod = items.length ? 'remove' : 'add';
    var messageMethod = items.length ? 'add' : 'remove';
    galleryContentNode.classList[contentMethod]('d-none');
    galleryMessageNode.classList[messageMethod]('d-none');

    var itemsWidth = _toConsumableArray(items).reduce(function (sum, item) {
      return sum += item.offsetWidth;
    }, 0);

    var buttonMethod = itemsWidth > contentWidth ? 'remove' : 'add';
    galleryControlButtons.forEach(function (button) {
      button.classList[buttonMethod]('d-none');
    });
    galleryItemsDiffContainerSize = itemsWidth - contentWidth;
  };

  var toggleJsonResponse = function toggleJsonResponse() {
    toggleJsonResponseButtons.forEach(function (button) {
      button.classList.toggle('d-none');
    });
    jsonResponsePreviewContainer.classList.toggle(CLASS_JSON_RESPONSE_HIDE);
  };

  var galleryControl = function galleryControl(event) {
    var marginLeftAfterAction = 0;
    var direction = event.currentTarget.dataset.direction;
    var firstGalleryItem = doc.querySelector("".concat(SELECTOR_GALLERY_ITEM_CONTAINER, ":first-child"));

    var _getComputedStyle = getComputedStyle(firstGalleryItem),
        marginLeft = _getComputedStyle.marginLeft;

    if (direction === 'forward') {
      if (Math.abs(parseInt(marginLeft, 10)) < galleryItemsDiffContainerSize) {
        marginLeftAfterAction = parseInt(marginLeft, 10) - GALLERY_ITEM_WIDTH;
      }
    } else {
      if (parseInt(marginLeft, 10) < 0) {
        marginLeftAfterAction = parseInt(marginLeft, 10) + GALLERY_ITEM_WIDTH;
      }
    }

    firstGalleryItem.style.marginLeft = "".concat(marginLeftAfterAction, "px");
  };

  var reindexingTagsInput = function reindexingTagsInput(container) {
    var type = container.dataset.type;
    var ID_PATTERN = type === 'attributes' ? 'recommendation_call_attributes___index__' : 'recommendation_call_context_items___index__';
    var NAME_PATTERN = type === 'attributes' ? 'recommendation_call[attributes][__index__]' : 'recommendation_call[context_items][__index__]';
    container.querySelectorAll(SELECTOR_TAG_INPUT).forEach(function (tagInput, index) {
      tagInput.id = ID_PATTERN.replace('__index__', index);
      tagInput.name = NAME_PATTERN.replace('__index__', index);
    });
  };

  var removeTag = function removeTag(event) {
    var container = event.currentTarget.closest(SELECTOR_CONTENT_FIELD);
    event.currentTarget.closest(SELECTOR_TAG).remove();
    reindexingTagsInput(container);
  };

  var addTag = function addTag(event) {
    var container = event.currentTarget.closest(SELECTOR_CONTENT_FIELD);
    var tagsContainer = container.querySelector(SELECTOR_TAGS_CONTAINER);
    var inputNode = container.querySelector(SELECTOR_ADD_TAG_INPUT);
    var value = inputNode.value;
    var _container$dataset = container.dataset,
        type = _container$dataset.type,
        template = _container$dataset.template;

    if (value) {
      var renderedTemplate = template.replace('__name__', value);
      tagsContainer.insertAdjacentHTML('beforeend', renderedTemplate);
      inputNode.value = '';
      reindexingTagsInput(container);
      var lastTag = container.querySelector("".concat(SELECTOR_TAG, ":last-child"));
      lastTag.querySelector(SELECTOR_REMOVE_TAG_BUTTON).addEventListener('click', removeTag, false);
      lastTag.querySelector('input').setAttribute('value', value);
    } else {
      var errorMessage = type === 'attribute' ? Translator.trans(
      /*@Desc("Fill attribute value")*/
      'scenarios.preview.add_attribute_error', {}, 'ibexa_personalization') : Translator.trans(
      /*@Desc("Fill context item value")*/
      'scenarios.preview.add_context_item_error', {}, 'ibexa_personalization');
      eZ.helpers.notification.showErrorNotification(errorMessage);
    }
  };

  var showJsonResponsePreview = function showJsonResponsePreview() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (jsonResponsePreviewNode) {
      var defaultJsonResponse = jsonResponsePreviewNode.dataset.defaultJsonResponse;
      prettier.jsonContent = content || defaultJsonResponse;
      jsonResponsePreviewNode.innerHTML = prettier.getFormattedJson();
    }
  };

  if (sendRequestButton) {
    sendRequestButton.addEventListener('click', fetchData, false);
  }

  if (outputTypeSelect) {
    outputTypeSelect.addEventListener('change', fetchAttributtes, false);
  }

  toggleJsonResponseButtons.forEach(function (button) {
    button.addEventListener('click', toggleJsonResponse, false);
  });
  galleryControlButtons.forEach(function (button) {
    button.addEventListener('click', galleryControl, false);
  });
  doc.querySelectorAll(SELECTOR_ADD_TAG_BUTTON).forEach(function (button) {
    button.addEventListener('click', addTag, false);
  });
  doc.querySelectorAll(SELECTOR_REMOVE_TAG_BUTTON).forEach(function (button) {
    button.addEventListener('click', removeTag, false);
  });
  fitGallery();
  showJsonResponsePreview();
})(window.document, window.getComputedStyle, window.eZ, window.Routing, window.Translator);

/***/ }),

/***/ 67:
/*!***************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.preview.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.preview.js */"./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.preview.js");


/***/ })

},[[67,"runtime"]]]);