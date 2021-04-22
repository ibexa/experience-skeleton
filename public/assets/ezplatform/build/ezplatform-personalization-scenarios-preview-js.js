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
    key: "jsonContent",
    set: function set(json) {
      if (typeof json !== 'string') {
        json = JSON.stringify(json, null, 3);
      }

      this.jsonString = json;
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var SELECTOR_CATEGORY_PATH_INPUT = '.ez-input--category-path';
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
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
  var udwContainer = doc.getElementById('react-udw');
  var addCategoryPathButton = doc.querySelector('.ez-btn--add-path-udw');
  var addContextItemsButton = doc.querySelector('.ez-btn--add-context-items-udw');
  var validators = eZ.fieldTypeValidators;

  var getValidationResults = function getValidationResults(validator) {
    var isValid = validator.isValid();
    var validatorName = validator.constructor.name;
    var result = {
      isValid: isValid,
      validatorName: validatorName
    };
    return result;
  };

  var fetchData = function fetchData() {
    var validationResults = validators.map(getValidationResults);
    var isFormValid = validationResults.every(function (result) {
      return result.isValid;
    });

    if (isFormValid) {
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
    }
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

  var removeTag = function removeTag(event) {
    var container = event.currentTarget.closest(SELECTOR_CONTENT_FIELD);
    var tagsContainer = container.querySelector(SELECTOR_TAGS_CONTAINER);
    var tag = event.currentTarget.closest(SELECTOR_TAG);
    var inputSelector = tag.dataset.inputSelector;
    var categoryPathInput = container.querySelector(SELECTOR_CATEGORY_PATH_INPUT);

    if (inputSelector) {
      var input = tagsContainer.querySelector(inputSelector);
      input.remove();
    }

    tag.remove();

    if (categoryPathInput) {
      categoryPathInput.setAttribute('value', '');
    }
  };

  var addTag = function addTag(_ref2) {
    var label = _ref2.label,
        value = _ref2.value,
        container = _ref2.container;
    var tagIndex = 0;
    var _container$dataset = container.dataset,
        inputTemplate = _container$dataset.inputTemplate,
        tagTemplate = _container$dataset.tagTemplate;
    var tagsContainer = container.querySelector(SELECTOR_TAGS_CONTAINER);
    var lastTagInput = tagsContainer.querySelector("".concat(SELECTOR_TAG_INPUT, ":last-of-type"));

    if (inputTemplate) {
      if (lastTagInput) {
        tagIndex = parseInt(lastTagInput.name.replace(/[^0-9]/g, ''), 10) + 1;
      }

      var renderedInputTemplate = inputTemplate.replaceAll('__name__', tagIndex);
      tagsContainer.insertAdjacentHTML('beforeend', renderedInputTemplate);
    }

    if (tagTemplate) {
      var renderedTagTemplate = tagTemplate.replace('{{ content }}', label);
      tagsContainer.insertAdjacentHTML('beforeend', renderedTagTemplate);
    }

    var lastTagAfterInsert = tagsContainer.querySelector("".concat(SELECTOR_TAG, ":last-child"));
    var lastTagInputAfterInsert = tagsContainer.querySelector("".concat(SELECTOR_TAG_INPUT, ":last-of-type"));
    lastTagAfterInsert.querySelector(SELECTOR_REMOVE_TAG_BUTTON).addEventListener('click', removeTag, false);

    if (lastTagInputAfterInsert) {
      lastTagAfterInsert.dataset.inputSelector = "#".concat(lastTagInputAfterInsert.id);
      lastTagInputAfterInsert.setAttribute('value', value);
    }
  };

  var addRecomendationCallAttribute = function addRecomendationCallAttribute(event) {
    var button = event.currentTarget;
    var container = button.closest(SELECTOR_CONTENT_FIELD);
    var input = container.querySelector(SELECTOR_ADD_TAG_INPUT);

    if (input.value) {
      addTag({
        label: input.value,
        value: input.value,
        container: container
      });
    } else {
      eZ.helpers.notification.showErrorNotification(Translator.trans(
      /*@Desc("Fill attribute value")*/
      'scenarios.preview.add_attribute_error', {}, 'ibexa_personalization'));
    }

    input.value = '';
  };

  var showJsonResponsePreview = function showJsonResponsePreview() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (jsonResponsePreviewNode) {
      var defaultJsonResponse = jsonResponsePreviewNode.dataset.defaultJsonResponse;
      prettier.jsonContent = content || defaultJsonResponse;
      jsonResponsePreviewNode.innerHTML = prettier.getFormattedJson();
    }
  };

  var onConfirmContexItems = function onConfirmContexItems(button, items) {
    var container = button.closest(SELECTOR_CONTENT_FIELD);
    closeUDW();
    items.forEach(function (item) {
      var contentName = eZ.helpers.text.escapeHTML(item.ContentInfo.Content.Name);
      var contentId = item.ContentInfo.Content._id;
      var alreadySelectedItem = container.querySelector("".concat(SELECTOR_TAG_INPUT, "[value=\"").concat(contentId, "\"]"));

      if (!alreadySelectedItem) {
        addTag({
          label: contentName,
          value: contentId,
          container: container
        });
      }
    });
  };

  var onConfirmCategoryPath = function onConfirmCategoryPath(button, items) {
    var container = button.closest(SELECTOR_CONTENT_FIELD);
    var pathString = items[0].pathString;
    closeUDW();
    container.querySelector(SELECTOR_CATEGORY_PATH_INPUT).setAttribute('value', pathString);
    findLocationsByIdList(removeRootFromPathString(pathString), function (data) {
      var existingTag = container.querySelector(SELECTOR_TAG);

      if (existingTag) {
        existingTag.remove();
      }

      addTag({
        label: buildCategoryPathTagLabel(data),
        container: container
      });
    });
  };

  var onCancel = function onCancel() {
    return closeUDW();
  };

  var closeUDW = function closeUDW() {
    return ReactDOM.unmountComponentAtNode(udwContainer);
  };

  var openUDW = function openUDW(event, confirmCallback) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var udwTitle = event.currentTarget.dataset.udwTitle;
    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
      title: udwTitle,
      onConfirm: confirmCallback.bind(null, event.currentTarget),
      onCancel: onCancel
    }, config)), udwContainer);
  };

  var removeRootFromPathString = function removeRootFromPathString(pathString) {
    var pathArray = pathString.split('/').filter(function (val) {
      return val;
    });
    return pathArray.splice(1, pathArray.length - 1);
  };

  var buildCategoryPathTagLabel = function buildCategoryPathTagLabel(viewData) {
    var searchHitList = viewData.View.Result.searchHits.searchHit;
    return searchHitList.map(function (searchHit) {
      return eZ.helpers.text.escapeHTML(searchHit.value.Location.ContentInfo.Content.TranslatedName);
    }).join(' / ');
  };

  var findLocationsByIdList = function findLocationsByIdList(idList, callback) {
    var body = JSON.stringify({
      ViewInput: {
        identifier: "udw-locations-by-path-string-".concat(idList.join('-')),
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
    }, 'universal_discovery_widget');
    fetch(request).then(eZ.helpers.request.getJsonFromResponse).then(callback)["catch"](function () {
      return eZ.helpers.notification.showErrorNotification(errorMessage);
    });
  };

  if (sendRequestButton) {
    sendRequestButton.addEventListener('click', fetchData, false);
  }

  if (outputTypeSelect) {
    outputTypeSelect.addEventListener('change', fetchAttributtes, false);
  }

  if (addCategoryPathButton) {
    addCategoryPathButton.addEventListener('click', function (event) {
      return openUDW(event, onConfirmCategoryPath);
    }, false);
  }

  if (addContextItemsButton) {
    addContextItemsButton.addEventListener('click', function (event) {
      return openUDW(event, onConfirmContexItems);
    }, false);
  }

  toggleJsonResponseButtons.forEach(function (button) {
    button.addEventListener('click', toggleJsonResponse, false);
  });
  galleryControlButtons.forEach(function (button) {
    button.addEventListener('click', galleryControl, false);
  });
  doc.querySelectorAll(SELECTOR_ADD_TAG_BUTTON).forEach(function (button) {
    button.addEventListener('click', addRecomendationCallAttribute, false);
  });
  doc.querySelectorAll(SELECTOR_REMOVE_TAG_BUTTON).forEach(function (button) {
    button.addEventListener('click', removeTag, false);
  });
  fitGallery();
  showJsonResponsePreview();
})(window.document, window.getComputedStyle, window.eZ, window.Routing, window.Translator);

/***/ }),

/***/ 68:
/*!***************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.preview.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.preview.js */"./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.preview.js");


/***/ })

},[[68,"runtime"]]]);