(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-site-factory-form-js"],{

/***/ "./public/bundles/ezplatformadminui/js/scripts/admin.card.toggle.group.js":
/*!********************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/admin.card.toggle.group.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var togglers = doc.querySelectorAll('.ez-card__body-display-toggler');

  var toggleFieldTypeView = function toggleFieldTypeView(event) {
    event.preventDefault();
    event.currentTarget.closest('.ez-card--toggle-group').classList.toggle('ez-card--collapsed');
  };

  var attachToggleField = function attachToggleField(btn) {
    return btn.addEventListener('click', toggleFieldTypeView);
  };

  togglers.forEach(function (btn) {
    return attachToggleField(btn);
  });
  doc.body.addEventListener('ez-initialize-card-toggle-group', function (event) {
    return attachToggleField(event.detail.button);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.design.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.design.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ, React, ReactDOM) {
  var designItems = doc.querySelectorAll('.ez-site-factory-form-design__item');
  var siteSkeletonWrapper = doc.querySelector('.ez-site-factory-form-site-skeleton');
  var siteSkeleton = doc.querySelector('.ez-site-factory-form-site-skeleton__widget');

  var setSelectedTheme = function setSelectedTheme(event) {
    var siteSkeletonVisibleMethod = event.currentTarget.dataset.siteSkeleton ? 'remove' : 'add';
    var siteSkeletonValueMethod = event.currentTarget.dataset.siteSkeleton ? 'setAttribute' : 'removeAttribute';
    designItems.forEach(function (design) {
      return design.classList.remove('ez-site-factory-form-design__item--selected');
    });
    event.currentTarget.classList.add('ez-site-factory-form-design__item--selected');
    event.currentTarget.closest('.ez-site-factory-form-design').querySelector('select').value = event.currentTarget.dataset.id;

    if (siteSkeletonWrapper) {
      siteSkeletonWrapper.classList[siteSkeletonVisibleMethod]('ez-site-factory-form-site-skeleton--is-hidden');
    }

    if (siteSkeleton) {
      siteSkeleton.querySelector("input.form-check-input")[siteSkeletonValueMethod]('checked', 'checked');
    }
  };

  var toggleSiteSkeleton = function toggleSiteSkeleton(event) {
    event.preventDefault();
    var labelNode = event.currentTarget.querySelector('.ez-data-source__label');
    labelNode.classList.toggle('is-checked');
    var isChecked = labelNode.classList.contains('is-checked');
    var formMethod = isChecked ? 'setAttribute' : 'removeAttribute';
    event.currentTarget.querySelector("input.form-check-input")[formMethod]('checked', 'checked');
  };

  designItems.forEach(function (design) {
    return design.addEventListener('click', setSelectedTheme);
  });

  if (siteSkeleton) {
    siteSkeleton.addEventListener('click', toggleSiteSkeleton);
  }
})(window, window.document, window.eZ, window.React, window.ReactDOM);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.languages.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.languages.js ***!
  \***************************************************************************************************/
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, eZ) {
  var recreateInput = function recreateInput(widget) {
    var input = widget.querySelector('.ez-site-factory-form-languages__input');
    var items = widget.querySelectorAll('.ez-site-factory-form-languages__item');

    var inputValue = _toConsumableArray(items).map(function (item) {
      return item.dataset.id;
    }).join(', ');

    input.value = inputValue;
  };

  var deleteLanguage = function deleteLanguage(event) {
    var widget = event.target.closest('.ez-site-factory-form-languages');
    var listContainer = widget.querySelector('.ez-site-factory-form-languages__items');
    var item = event.target.closest('.ez-site-factory-form-languages__item');
    item.remove();
    recreateInput(widget);
    widget.querySelector('.ez-btn--add-language').removeAttribute('disabled');
    var items = widget.querySelectorAll('.ez-site-factory-form-languages__item');

    if (items.length === 0) {
      listContainer.classList.add('ez-site-factory-form-languages__items--hidden');
    }
  };

  var saveNewLanguage = function saveNewLanguage(event) {
    var widget = event.target.closest('.ez-site-factory-form-languages');
    var modal = event.target.closest('.ez-site-factory-language-selector__list-wrapper');
    var languageButtons = modal.querySelectorAll('.ez-btn--save-language');
    var listContainer = widget.querySelector('.ez-site-factory-form-languages__items');
    var languageName = event.target.textContent.trim();
    var languageCode = event.target.dataset.languageCode;
    var newWidget = listContainer.dataset.template;
    newWidget = newWidget.replace(/__language_name__/g, languageName);
    newWidget = newWidget.replace(/__language_code__/g, languageCode);
    var range = doc.createRange();
    var htmlWidget = range.createContextualFragment(newWidget);
    var deleteButton = htmlWidget.querySelector('.ez-btn--delete-language');
    deleteButton.addEventListener('click', deleteLanguage);
    listContainer.append(htmlWidget);
    widget.dispatchEvent(new CustomEvent('ez-site-factory-add-new-language'));
    hideModal(modal);
    recreateInput(widget);
    listContainer.classList.remove('ez-site-factory-form-languages__items--hidden');
    var items = listContainer.querySelectorAll('.ez-site-factory-form-languages__item');

    if (items.length === languageButtons.length) {
      widget.querySelector('.ez-btn--add-language').setAttribute('disabled', true);
    }
  };

  var hideModal = function hideModal(modal) {
    modal.classList.remove('ez-site-factory-language-selector__list-wrapper--visible');
    modal.querySelectorAll('.ez-btn--save-language').forEach(function (btn) {
      return btn.removeEventListener('click', saveNewLanguage);
    });
    doc.removeEventListener('click', hideAddLanguageModal);
  };

  var hideAddLanguageModal = function hideAddLanguageModal(event) {
    var modal = doc.querySelector('.ez-site-factory-language-selector__list-wrapper--visible');
    var closestModal = event.target.closest('.ez-site-factory-language-selector__list-wrapper');

    if (closestModal && closestModal.isSameNode(modal)) {
      return;
    }

    hideModal(modal);
  };

  var showAddLanguageModal = function showAddLanguageModal(event) {
    if (doc.querySelector('.ez-site-factory-language-selector__list-wrapper--visible')) {
      return;
    }

    var modal = event.target.closest('.ez-site-factory-language-selector').querySelector('.ez-site-factory-language-selector__list-wrapper');
    var languages = event.target.closest('.ez-site-factory-form-languages').querySelector('.ez-site-factory-form-languages__input').value.split(', ');
    var languageButtons = modal.querySelectorAll('.ez-btn--save-language');
    languageButtons.forEach(function (btn) {
      if (languages.includes(btn.dataset.languageCode)) {
        btn.classList.add('ez-btn--save-language--hidden');
      } else {
        btn.classList.remove('ez-btn--save-language--hidden');
        btn.addEventListener('click', saveNewLanguage);
      }
    });
    modal.classList.add('ez-site-factory-language-selector__list-wrapper--visible');
    setTimeout(function () {
      doc.addEventListener('click', hideAddLanguageModal);
    });
  };

  var attachEventToAddButtons = function attachEventToAddButtons() {
    var addButtons = doc.querySelectorAll('.ez-btn--add-language');
    addButtons.forEach(function (btn) {
      return btn.addEventListener('click', showAddLanguageModal);
    });
  };

  var attachEventToDeleteButtons = function attachEventToDeleteButtons() {
    var deleteButtons = doc.querySelectorAll('.ez-btn--delete-language');
    deleteButtons.forEach(function (btn) {
      return btn.addEventListener('click', deleteLanguage);
    });
  };

  var languagesWidgets = doc.querySelectorAll('.ez-site-factory-form-languages');

  var CollectionDraggable = /*#__PURE__*/function (_eZ$core$Draggable) {
    "use strict";

    _inherits(CollectionDraggable, _eZ$core$Draggable);

    var _super = _createSuper(CollectionDraggable);

    function CollectionDraggable(config) {
      var _this;

      _classCallCheck(this, CollectionDraggable);

      _this = _super.call(this, config);
      _this.widgetContainer = config.widgetContainer;
      return _this;
    }

    _createClass(CollectionDraggable, [{
      key: "onDrop",
      value: function onDrop() {
        _get(_getPrototypeOf(CollectionDraggable.prototype), "onDrop", this).call(this);

        recreateInput(this.widgetContainer);
      }
    }]);

    return CollectionDraggable;
  }(eZ.core.Draggable);

  languagesWidgets.forEach(function (languagesWidget) {
    var itemsContainer = languagesWidget.querySelector('.ez-site-factory-form-languages__items');
    var draggable = new CollectionDraggable({
      widgetContainer: languagesWidget,
      itemsContainer: itemsContainer,
      selectorItem: '.ez-site-factory-form-languages__item',
      selectorPlaceholder: '.ez-site-factory-form-languages__item--placeholder'
    });
    draggable.init();
    languagesWidget.addEventListener('ez-site-factory-add-new-language', function () {
      draggable.reinit();
    });
  });
  attachEventToDeleteButtons();
  attachEventToAddButtons();
  doc.body.addEventListener('ez-site-factory-add-public-access', function (event) {
    event.detail.widget.querySelector('.ez-btn--add-language').addEventListener('click', showAddLanguageModal);
  });
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.parent.location.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.parent.location.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (global, doc, eZ, React, ReactDOM) {
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var designItems = doc.querySelectorAll('.ez-site-factory-form-design__item');
  var parentLocationBreadcrumbs = doc.querySelector('.ez-site-factory-parent-location__breadcrumbs');
  var parentLocationBreadcrumbsNode = doc.querySelector('.ez-site-factory-parent-location__breadcrumbs-content');
  var parentLocationIdInput = doc.querySelector('.ez-site-factory-parent-location input');
  var clearParentLocationBtn = doc.querySelector('.ez-site-factory-parent-location__remove-btn');
  var openUdwBtn = doc.querySelector('.ez-site-factory-parent-location__select-location');
  var udwContainer = doc.querySelector('#react-udw');

  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(
    /*@Desc("Choose Location")*/
    'select_location.label', {}, 'ezplatform_site_factory_ui');
    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title
    }, config)), udwContainer);
  };

  var closeUDW = function closeUDW() {
    return ReactDOM.unmountComponentAtNode(udwContainer);
  };

  var onCancel = function onCancel() {
    return closeUDW();
  };

  var onConfirm = function onConfirm(items) {
    var locationId = items[0].id;
    var pathString = items[0].pathString;
    closeUDW();
    findLocationsByIdList(removeRootFromPathString(pathString), function (data) {
      parentLocationBreadcrumbsNode.innerHTML = buildBreadcrumbsString(data);
    });

    if (parentLocationIdInput) {
      parentLocationIdInput.setAttribute('value', locationId);
      toggleVisibility();
    }
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

  var removeRootFromPathString = function removeRootFromPathString(pathString) {
    var pathArray = pathString.split('/').filter(function (id) {
      return id;
    });
    return pathArray.splice(1, pathArray.length - 1);
  };

  var buildBreadcrumbsString = function buildBreadcrumbsString(viewData) {
    var searchHitList = viewData.View.Result.searchHits.searchHit;
    return searchHitList.map(function (searchHit) {
      return searchHit.value.Location.ContentInfo.Content.TranslatedName;
    }).join(' / ');
  };

  var clearParentLocation = function clearParentLocation() {
    parentLocationBreadcrumbsNode.innerHTML = '';
    parentLocationIdInput.setAttribute('value', '');
    toggleVisibility();
  };

  var toggleVisibility = function toggleVisibility() {
    var value = parentLocationIdInput.value;

    if (value) {
      openUdwBtn.setAttribute('hidden', true);
      parentLocationBreadcrumbs.removeAttribute('hidden');
    } else {
      openUdwBtn.removeAttribute('hidden');
      parentLocationBreadcrumbs.setAttribute('hidden', true);
    }
  };

  var changeParentLocationIdByDesign = function changeParentLocationIdByDesign(event) {
    var parentLocationId = event.currentTarget.dataset.parentLocationId;
    var parentLocationBreadcrumbs = doc.querySelector("option[data-parent-location=\"".concat(parentLocationId, "\"]")).dataset.parentLocationBreadcrumbs;
    parentLocationBreadcrumbsNode.innerHTML = parentLocationBreadcrumbs || '';

    if (parentLocationIdInput) {
      parentLocationIdInput.setAttribute('value', parentLocationId || '');
      toggleVisibility();
    }
  };

  designItems.forEach(function (design) {
    return design.addEventListener('click', changeParentLocationIdByDesign, false);
  });

  if (openUdwBtn) {
    openUdwBtn.addEventListener('click', openUDW, false);
  }

  if (clearParentLocationBtn) {
    clearParentLocationBtn.addEventListener('click', clearParentLocation, false);
  }
})(window, window.document, window.eZ, window.React, window.ReactDOM);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.public.access.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.public.access.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var CLASS_CHECKBOX = '.ez-site-factory-toggle-group__checkbox';

  var toggleDeleteButtonDisabledState = function toggleDeleteButtonDisabledState() {
    var checkboxes = doc.querySelectorAll("".concat(CLASS_CHECKBOX, ":checked"));
    var deleteButton = doc.querySelector('.ez-btn--delete-public-access');
    var methodName = checkboxes.length ? 'removeAttribute' : 'setAttribute';
    deleteButton[methodName]('disabled', true);
  };

  var attachEventsToCheckboxes = function attachEventsToCheckboxes() {
    var checkboxes = doc.querySelectorAll(CLASS_CHECKBOX);
    checkboxes.forEach(function (checkbox) {
      return checkbox.addEventListener('change', toggleDeleteButtonDisabledState);
    });
  };

  var createPublicAccess = function createPublicAccess(event) {
    var list = doc.querySelector('#ez-site-factory-public-access');
    var counter = list.dataset.widgetCounter;
    var newWidget = list.dataset.prototype;
    newWidget = newWidget.replace(/__name__/g, counter);
    counter++;
    var htmlWidget = doc.createRange().createContextualFragment(newWidget);
    htmlWidget.querySelector(CLASS_CHECKBOX).addEventListener('change', toggleDeleteButtonDisabledState);
    doc.body.dispatchEvent(new CustomEvent('ez-initialize-card-toggle-group', {
      detail: {
        button: htmlWidget.querySelector('.ez-card__body-display-toggler')
      }
    }));
    doc.body.dispatchEvent(new CustomEvent('ez-site-factory-add-public-access', {
      detail: {
        widget: htmlWidget
      }
    }));
    list.dataset.widgetCounter = counter;
    list.prepend(htmlWidget);
  };

  var attachEventToCreateButton = function attachEventToCreateButton() {
    var createButton = doc.querySelector('.ez-btn--create-public-access');
    createButton.addEventListener('click', createPublicAccess);
  };

  var deletePublicAccess = function deletePublicAccess() {
    var checkboxes = doc.querySelectorAll("".concat(CLASS_CHECKBOX, ":checked"));
    var deleteButton = doc.querySelector('.ez-btn--delete-public-access');
    checkboxes.forEach(function (checkbox) {
      return checkbox.closest('.ez-site-factory-toggle-group').remove();
    });
    deleteButton.setAttribute('disabled', true);
  };

  var attachEventToDeleteButton = function attachEventToDeleteButton() {
    var deleteButton = doc.querySelector('.ez-btn--delete-public-access');
    deleteButton.addEventListener('click', deletePublicAccess);
  };

  attachEventsToCheckboxes();
  attachEventToCreateButton();
  attachEventToDeleteButton();
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.status.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.status.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var statusFields = doc.querySelectorAll('.ez-site-factory-form-status__widget');

  var toggleState = function toggleState(event) {
    event.preventDefault();
    var labelNode = event.currentTarget.querySelector('.ez-data-source__label');
    labelNode.classList.toggle('is-checked');
    var isChecked = labelNode.classList.contains('is-checked');
    var valueToSet = isChecked ? 1 : 0;
    event.currentTarget.querySelector(".form-check input[value=\"".concat(valueToSet, "\"]")).setAttribute('checked', 'checked');
  };

  statusFields.forEach(function (statusField) {
    return statusField.addEventListener('click', toggleState);
  });
  doc.body.addEventListener('ez-site-factory-add-public-access', function (event) {
    event.detail.widget.querySelector('.ez-site-factory-form-status__widget').addEventListener('click', toggleState);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.validate.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.validate.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var checkPublicAccess = function checkPublicAccess() {
    var publicAccessContainer = doc.querySelector('.ez-site-factory-form-public-access');
    var errorContainer = publicAccessContainer.querySelector('#ez-site-factory-public-access > .ez-site-factory-widget__error');
    var publicAccesses = publicAccessContainer.querySelectorAll('#ez-site-factory-public-access > .card');
    var hasPublicAccesses = publicAccesses.length > 0;

    var hasPublicAccessEmptyFields = _toConsumableArray(publicAccesses).some(function (publicAccess) {
      var isEmpty = _toConsumableArray(publicAccess.querySelectorAll('input[required="required"]')).some(function (input) {
        return input.value === '';
      });

      return isEmpty;
    });

    if (!hasPublicAccesses || hasPublicAccessEmptyFields) {
      var errorText = Translator.trans(
      /*@Desc("Please add a correct public access")*/
      'form.validate.error.public.access', {}, 'ezplatform_site_factory_ui');
      publicAccessContainer.classList.add('is-invalid');
      errorContainer.innerText = errorText;
      errorContainer.classList.add('ez-site-factory-widget__error--visible');
      return true;
    }

    publicAccessContainer.classList.remove('is-invalid');
    errorContainer.classList.remove('ez-site-factory-widget__error--visible');
    errorContainer.innerText = '';
    return false;
  };

  var attachEventToSubmitForm = function attachEventToSubmitForm(form) {
    if (!form) {
      return;
    }

    form.addEventListener('submit', function (event) {
      var widgets = _toConsumableArray(event.target.querySelectorAll('.ez-site-factory-widget'));

      var hasErrors = checkPublicAccess();
      widgets.forEach(function (widget) {
        var input = widget.querySelector('.form-control');
        var errorContainer = widget.querySelector('.ez-site-factory-widget__error');
        widget.classList.remove('is-invalid');
        errorContainer.classList.remove('ez-site-factory-widget__error--visible');
        errorContainer.innerText = '';

        if (input.hasAttribute('required') && input.value === '') {
          var fieldName = widget.querySelector('label').innerText;
          var errorText = Translator.trans(
          /*@Desc("%fieldName% Field is required")*/
          'form.validate.error', {
            fieldName: fieldName
          }, 'ezplatform_site_factory_ui');
          hasErrors = true;
          widget.classList.add('is-invalid');
          errorContainer.innerText = errorText;
          errorContainer.classList.add('ez-site-factory-widget__error--visible');
        }
      });

      if (hasErrors) {
        event.preventDefault();
      }
    });
  };

  attachEventToSubmitForm(doc.querySelector('form[name="site_create"]'));
  attachEventToSubmitForm(doc.querySelector('form[name="site_update"]'));
})(window, window.document, window.eZ, window.React, window.ReactDOM);

/***/ }),

/***/ 148:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./public/bundles/ezplatformadminui/js/scripts/admin.card.toggle.group.js ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.public.access.js ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.design.js ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.status.js ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.languages.js ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.validate.js ./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.parent.location.js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/public/bundles/ezplatformadminui/js/scripts/admin.card.toggle.group.js */"./public/bundles/ezplatformadminui/js/scripts/admin.card.toggle.group.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.public.access.js */"./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.public.access.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.design.js */"./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.design.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.status.js */"./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.status.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.languages.js */"./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.languages.js");
__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.validate.js */"./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.validate.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.parent.location.js */"./vendor/ezsystems/ezplatform-site-factory/src/bundle/Resources/public/js/form.parent.location.js");


/***/ })

},[[148,"runtime"]]]);