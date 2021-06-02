(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-personalization-dashboard-js"],{

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/base/base.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/base/base.js ***!
  \********************************************************************************************************/
/*! exports provided: BaseChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseChart", function() { return BaseChart; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _window = window,
    Chart = _window.Chart;
var doc = window.document;
var ONE_COLUMN_ITEM_LIMIT = 5;
var MAX_NUMBER_OF_LABELS = 16;
var BaseChart = /*#__PURE__*/function () {
  function BaseChart(data) {
    _classCallCheck(this, BaseChart);

    this.setData(data);
    this.lang = document.documentElement.lang.replace('_', '-'); // TO DO: Get this config from settings
  }

  _createClass(BaseChart, [{
    key: "setData",
    value: function setData(data) {
      this.datasets = data.datasets;
      this.labels = data.labels;
      this.summary = data.summary;

      if (this.labels.length) {
        this.labelsInterval = Math.ceil(this.labels.length / MAX_NUMBER_OF_LABELS);
      } else {
        this.labelsInterval = 1;
      }
    }
  }, {
    key: "getSummaryValue",
    value: function getSummaryValue() {}
  }, {
    key: "getSummaryName",
    value: function getSummaryName(value) {
      return value.name;
    }
  }, {
    key: "updateChartMessageDisplay",
    value: function updateChartMessageDisplay() {
      var chartBody = this.chart.canvas.closest('.ez-chart__body');
      var chartMessagesNode = chartBody.querySelector('.ez-chart__message');
      var chartMessageMethod = this.chart.config.data.datasets.length ? 'add' : 'remove';
      chartMessagesNode.classList[chartMessageMethod]('d-none');
    }
  }, {
    key: "updateChart",
    value: function updateChart() {
      this.chart.data.labels = this.labels;
      this.chart.data.datasets = this.datasets;
      this.chart.update();
      this.updateSummary();
      this.setLegendCheckboxes();
      this.updateChartMessageDisplay();
    }
  }, {
    key: "updateSummary",
    value: function updateSummary() {
      var _this = this;

      var detailsRowNode = this.summaryContainer.querySelector('.ez-chart__summary-item-details .row');
      var totalValuesNode = this.summaryContainer.querySelector('.ez-chart__summary-main-value');
      var rowItemTemplate = detailsRowNode.dataset.rowItemTemplate;

      if (this.summary.length) {
        var totalValue = this.summary.find(function (value) {
          return _this.getSummaryName(value) === _this.summaryTotalKey;
        });
        detailsRowNode.innerHTML = '';
        totalValuesNode.innerHTML = this.getSummaryValue(totalValue);
        this.summary.forEach(function (value) {
          if (_this.getSummaryName(value) !== _this.summaryTotalKey) {
            detailsRowNode.insertAdjacentHTML('beforeend', rowItemTemplate.replace('{{ name }}', _this.getSummaryName(value)).replace('{{ calls }}', _this.getSummaryValue(value)));

            if (_this.summary.length <= ONE_COLUMN_ITEM_LIMIT) {
              detailsRowNode.insertAdjacentHTML('beforeend', rowItemTemplate.replace('{{ name }}', '').replace('{{ calls }}', ''));
            }
          }
        });
      } else {
        totalValuesNode.innerHTML = '-';
      }
    }
  }, {
    key: "setCheckboxBackground",
    value: function setCheckboxBackground(checkbox) {
      var checkedColor = checkbox.dataset.checkedColor;
      var checked = checkbox.checked;

      if (checked) {
        checkbox.style.backgroundColor = checkedColor;
        checkbox.style.borderColor = checkedColor;
      } else {
        checkbox.style.backgroundColor = '#fff';
        checkbox.style.borderColor = '#878b90';
      }
    }
  }, {
    key: "setLegendCheckboxes",
    value: function setLegendCheckboxes() {
      var _this2 = this;

      if (this.legendContainer) {
        this.legendContainer.innerHTML = '';
        this.legendContainer.appendChild(this.chart.generateLegend());
        this.legendContainer.querySelectorAll('.ez-input--legend-checkbox').forEach(function (legendCheckbox) {
          _this2.setCheckboxBackground(legendCheckbox);

          legendCheckbox.addEventListener('change', function (event) {
            var datasetIndex = event.currentTarget.dataset.datasetIndex;
            var dataset = _this2.chart.data.datasets[datasetIndex];
            var productsPurchased = doc.querySelector('.ez-products-purchased');
            dataset.hidden = !dataset.hidden;

            _this2.setCheckboxBackground(event.currentTarget);

            _this2.chart.update();

            if (productsPurchased) {
              productsPurchased.dataset.scrollTo = '';
            }
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      this.chart = new Chart(this.canvas.getContext('2d'), {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: this.datasets
        },
        options: {
          responsive: true,
          elements: {
            point: {
              radius: 2
            },
            line: {
              tension: 0
            }
          },
          legendCallback: function legendCallback(chart) {
            var legendCheckboxTemplate = _this3.legendContainer.dataset.legendCheckboxTemplate;
            var fragment = doc.createDocumentFragment();
            chart.data.datasets.forEach(function (dataset, index) {
              var container = doc.createElement('div');
              var rendredTempalte = legendCheckboxTemplate.replace('{{ checked_color }}', dataset.backgroundColor).replace('{{ dataset_index }}', index).replace('{{ label }}', dataset.label);
              dataset.hidden = false;
              container.insertAdjacentHTML('beforeend', rendredTempalte);
              var checkboxNode = container.querySelector('.ez-chart__legend-checkbox-label');
              checkboxNode.querySelector('input').checked = !dataset.hidden;
              fragment.append(checkboxNode);
            });
            return fragment;
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: true,
            mode: 'nearest',
            cornerRadius: 4,
            borderWidth: 1,
            borderColor: '#e0e0e8',
            titleFontStyle: 'light',
            titleFontColor: '#878b90',
            xPadding: 12,
            yPadding: 12,
            backgroundColor: '#fff',
            callbacks: {
              labelTextColor: function labelTextColor(tooltipItem, chart) {
                return '#878b90';
              }
            }
          },
          animation: {
            onComplete: function onComplete(animation) {
              var chart = animation.chart;
              var chartMethod = chart.config.data.datasets.length ? 'remove' : 'add';
              var chartNode = chart.canvas.closest('.ez-chart');
              chartNode.dispatchEvent(new CustomEvent('ez-chart-animation-complete'));
              chartNode.classList[chartMethod]('ez-chart--no-data');
            }
          },
          scales: {
            xAxes: [{
              display: true,
              gridLines: {
                display: false
              },
              ticks: {
                maxRotation: 0,
                autoSkip: false,
                callback: function callback(value, index, values) {
                  return index % _this3.labelsInterval ? null : value;
                }
              }
            }],
            yAxes: [{
              display: true,
              type: 'logarithmic',
              ticks: {
                callback: function callback() {
                  var _Chart$Ticks$formatte;

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  var value = (_Chart$Ticks$formatte = Chart.Ticks.formatters.logarithmic).call.apply(_Chart$Ticks$formatte, [_this3].concat(args));

                  if (value.length) {
                    return Number(value).toLocaleString();
                  }

                  return value;
                }
              }
            }]
          }
        }
      });
      this.updateChartMessageDisplay();
      this.setLegendCheckboxes();
      this.updateSummary();
    }
  }]);

  return BaseChart;
}();

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/conversion.rate.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/conversion.rate.js ***!
  \**************************************************************************************************************/
/*! exports provided: ConversionRateChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionRateChart", function() { return ConversionRateChart; });
/* harmony import */ var _base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/base */ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/base/base.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var ConversionRateChart = /*#__PURE__*/function (_BaseChart) {
  _inherits(ConversionRateChart, _BaseChart);

  var _super = _createSuper(ConversionRateChart);

  function ConversionRateChart(data) {
    var _this;

    _classCallCheck(this, ConversionRateChart);

    _this = _super.call(this, data);
    _this.canvas = document.querySelector('.ez-chart__canvas--conversion-rate');
    _this.summaryTotalKey = 'all_scenarios';
    _this.summaryContainer = document.querySelector('.ez-chart__summary--conversion-rate');
    _this.legendContainer = document.querySelector('.ez-chart__legend--conversion-rate');
    return _this;
  }

  _createClass(ConversionRateChart, [{
    key: "getSummaryValue",
    value: function getSummaryValue(value) {
      return new Intl.NumberFormat(this.lang).format(value.percentage) + '%';
    }
  }]);

  return ConversionRateChart;
}(_base_base__WEBPACK_IMPORTED_MODULE_0__["BaseChart"]);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/events.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/events.js ***!
  \*****************************************************************************************************/
/*! exports provided: EventsChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsChart", function() { return EventsChart; });
/* harmony import */ var _base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/base */ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/base/base.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var EventsChart = /*#__PURE__*/function (_BaseChart) {
  _inherits(EventsChart, _BaseChart);

  var _super = _createSuper(EventsChart);

  function EventsChart(data) {
    var _this;

    _classCallCheck(this, EventsChart);

    _this = _super.call(this, data);
    _this.canvas = document.querySelector('.ez-chart__canvas--collected-events');
    _this.summaryTotalKey = 'Total_events';
    _this.summaryContainer = document.querySelector('.ez-chart__summary--collected-events');
    _this.legendContainer = document.querySelector('.ez-chart__legend--collected-events');
    return _this;
  }

  _createClass(EventsChart, [{
    key: "getSummaryValue",
    value: function getSummaryValue(value) {
      return new Intl.NumberFormat(this.lang).format(value.hits);
    }
  }]);

  return EventsChart;
}(_base_base__WEBPACK_IMPORTED_MODULE_0__["BaseChart"]);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/recommendation.calls.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/recommendation.calls.js ***!
  \*******************************************************************************************************************/
/*! exports provided: RecommendationCallsChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationCallsChart", function() { return RecommendationCallsChart; });
/* harmony import */ var _base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/base */ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/base/base.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var RecommendationCallsChart = /*#__PURE__*/function (_BaseChart) {
  _inherits(RecommendationCallsChart, _BaseChart);

  var _super = _createSuper(RecommendationCallsChart);

  function RecommendationCallsChart(data) {
    var _this;

    _classCallCheck(this, RecommendationCallsChart);

    _this = _super.call(this, data);
    _this.canvas = document.querySelector('.ez-chart__canvas--recommendation-calls');
    _this.summaryTotalKey = 'all_calls';
    _this.summaryContainer = document.querySelector('.ez-chart__summary--recommendation-calls');
    _this.legendContainer = document.querySelector('.ez-chart__legend--recommendation-calls');
    return _this;
  }

  _createClass(RecommendationCallsChart, [{
    key: "getSummaryValue",
    value: function getSummaryValue(value) {
      return new Intl.NumberFormat(this.lang).format(value.calls);
    }
  }]);

  return RecommendationCallsChart;
}(_base_base__WEBPACK_IMPORTED_MODULE_0__["BaseChart"]);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/revenue.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/revenue.js ***!
  \******************************************************************************************************/
/*! exports provided: RevenueChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevenueChart", function() { return RevenueChart; });
/* harmony import */ var _base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/base */ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/base/base.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var RevenueChart = /*#__PURE__*/function (_BaseChart) {
  _inherits(RevenueChart, _BaseChart);

  var _super = _createSuper(RevenueChart);

  function RevenueChart(data) {
    var _this;

    _classCallCheck(this, RevenueChart);

    _this = _super.call(this, data);
    _this.canvas = document.querySelector('.ez-chart__canvas--revenue');
    _this.summaryContainer = document.querySelector('.ez-chart__summary--revenue');
    _this.legendContainer = document.querySelector('.ez-chart__legend--revenue');
    return _this;
  }

  _createClass(RevenueChart, [{
    key: "updateSummary",
    value: function updateSummary() {
      var itemsPurchased = new Intl.NumberFormat(this.lang).format(this.summary.itemsPurchased);
      var revenue = this.summary.currency ? new Intl.NumberFormat(this.lang, {
        style: 'currency',
        currency: this.summary.currency
      }).format(this.summary.revenue / 100) : this.summary.revenue;
      this.summaryContainer.querySelector('.ez-chart__summary-main-value--items-purchased').innerHTML = itemsPurchased;
      this.summaryContainer.querySelector('.ez-chart__summary-main-value--revenue').innerHTML = revenue;
    }
  }]);

  return RevenueChart;
}(_base_base__WEBPACK_IMPORTED_MODULE_0__["BaseChart"]);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/dashboard.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/dashboard.js ***!
  \*************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts/events */ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/events.js");
/* harmony import */ var _charts_revenue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts/revenue */ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/revenue.js");
/* harmony import */ var _charts_conversion_rate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts/conversion.rate */ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/conversion.rate.js");
/* harmony import */ var _charts_recommendation_calls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts/recommendation.calls */ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/charts/recommendation.calls.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






(function (doc, eZ, Routing) {
  var SELECTOR_INTERVAL_INPUT = '.ez-time-range__date-interval';
  var SELECTOR_END_DATE_INPUT = '.ez-time-range__end-date';
  var CLASS_FETCHING_DATA = 'ez-container--fetching-data';
  var dashboardForm = doc.querySelector('form[name="dashboard"]');
  var chartsInputsContainer = doc.querySelector('.ez-charts__inputs-container');
  var productsPurchasedInputsContainer = doc.querySelector('.ez-products-purchased__inputs-container');
  var chartsData = doc.querySelector('.ez-charts').dataset.chartsData;
  var chartsInitData = chartsData ? JSON.parse(chartsData) : {};
  var productsPurchasedSection = doc.querySelector('.ez-products-purchased');
  var charts = {};
  var getJsonFromResponse = eZ.helpers.request.getJsonFromResponse;
  var chartsMap = {
    revenue: _charts_revenue__WEBPACK_IMPORTED_MODULE_1__["RevenueChart"],
    recoCall: _charts_recommendation_calls__WEBPACK_IMPORTED_MODULE_3__["RecommendationCallsChart"],
    conversionRate: _charts_conversion_rate__WEBPACK_IMPORTED_MODULE_2__["ConversionRateChart"],
    events: _charts_events__WEBPACK_IMPORTED_MODULE_0__["EventsChart"]
  };

  var handleChartsIntervalChange = function handleChartsIntervalChange(event) {
    var container = event.currentTarget.closest('.ez-time-range');
    var dateIntervalNameInput = container.querySelector('select');
    var endDateInput = container.querySelector(SELECTOR_END_DATE_INPUT);
    var reportParamsInterval = container.querySelector('.ez-time-range__date-interval').value;
    var reportParamsEndDate = endDateInput.value || Math.floor(new Date().getTime() / 1000);
    var intervalLabel = '';

    if (dateIntervalNameInput.value === 'custom_range' && endDateInput.value === '') {
      return;
    }

    if (dateIntervalNameInput.value === 'custom_range') {
      intervalLabel = container.querySelector('.ez-time-range__period-select').value;
    } else {
      intervalLabel = dateIntervalNameInput.querySelector("option[value=\"".concat(dateIntervalNameInput.value, "\"]")).innerHTML;
    }

    doc.querySelectorAll('.ez-chart__time-range').forEach(function (node) {
      node.innerHTML = intervalLabel;
    });
    doc.querySelector('.ez-charts__download-full-report').href = Routing.generate('ibexa.personalization.report.recommendation_detailed', {
      date_interval: reportParamsInterval,
      end_date: reportParamsEndDate
    });

    if (productsPurchasedSection) {
      productsPurchasedSection.dataset.scrollTo = '';
    }

    fetchChartsData();
  };

  var fetchChartsData = function fetchChartsData() {
    var formData = new FormData(dashboardForm);
    var queryParams = new URLSearchParams(formData).toString();
    var request = new Request("".concat(Routing.generate('ibexa.personalization.chart.data'), "?").concat(queryParams), {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json'
      }
    });
    doc.querySelector('.ez-charts').classList.toggle(CLASS_FETCHING_DATA);
    fetch(request).then(getJsonFromResponse).then(function (response) {
      Object.entries(response.charts).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            chartKey = _ref2[0],
            data = _ref2[1];

        if (charts.hasOwnProperty(chartKey)) {
          charts[chartKey].setData(data);
          charts[chartKey].updateChart();
        }
      });
      doc.querySelector('.ez-charts').classList.toggle(CLASS_FETCHING_DATA);
    })["catch"](eZ.helpers.notification.showErrorNotification);
  };

  var handleProductsPurchasedIntervalChange = function handleProductsPurchasedIntervalChange(event) {
    var container = event.target.closest('.ez-time-range');
    var dateIntervalNameInput = container.querySelector('select');
    var endDateInput = container.querySelector(SELECTOR_END_DATE_INPUT);

    if (dateIntervalNameInput.value === 'custom_range' && endDateInput.value === '') {
      return;
    }

    dashboardForm.submit();
  };

  Object.entries(chartsMap).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        chartKey = _ref4[0],
        ChartClass = _ref4[1];

    if (chartsInitData.hasOwnProperty(chartKey)) {
      charts[chartKey] = new ChartClass(chartsInitData[chartKey]);
      charts[chartKey].render();
    }
  });
  chartsInputsContainer.querySelector(SELECTOR_INTERVAL_INPUT).addEventListener('change', handleChartsIntervalChange, false);
  chartsInputsContainer.querySelector(SELECTOR_END_DATE_INPUT).addEventListener('change', handleChartsIntervalChange, false);

  if (productsPurchasedInputsContainer) {
    productsPurchasedInputsContainer.querySelector(SELECTOR_INTERVAL_INPUT).addEventListener('change', handleProductsPurchasedIntervalChange, false);
    productsPurchasedInputsContainer.querySelector(SELECTOR_END_DATE_INPUT).addEventListener('change', handleProductsPurchasedIntervalChange, false);
  }

  if (productsPurchasedSection) {
    var firstChart = doc.querySelector('.ez-chart');
    firstChart.addEventListener('ez-chart-animation-complete', function () {
      var scrollTo = productsPurchasedSection.dataset.scrollTo;

      if (scrollTo) {
        doc.querySelector(scrollTo).scrollIntoView();
      }
    }, false);
  }
})(window.document, window.eZ, window.Routing);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/time.range.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/time.range.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, flatpickr) {
  var secondsInDay = 86400;
  var MAIN_WRAPPER_SELECTOR = '.ez-time-range';
  var _eZ$helpers$timezone = eZ.helpers.timezone,
      convertDateToTimezone = _eZ$helpers$timezone.convertDateToTimezone,
      formatShortDateTime = _eZ$helpers$timezone.formatShortDateTime;
  var timePeriodNodes = doc.querySelectorAll(MAIN_WRAPPER_SELECTOR);

  var getUnixTimestampUTC = function getUnixTimestampUTC(dateObject) {
    var date = new Date(Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate()));
    return Math.floor(date.getTime() / 1000);
  };

  var handleFlatPickrChange = function handleFlatPickrChange(selectedDates, dateString, instance) {
    if (selectedDates.length === 2) {
      var timeRangeContainer = instance.input.closest(MAIN_WRAPPER_SELECTOR);
      var startDate = getUnixTimestampUTC(selectedDates[0]);
      var endDate = getUnixTimestampUTC(selectedDates[1]);
      var days = (endDate - startDate) / secondsInDay;
      setValues(timeRangeContainer, "P0Y0M".concat(days, "DT0H"), endDate);
      timeRangeContainer.querySelector('.ez-time-range__end-date').dispatchEvent(new Event('change'));
    }
  };

  var handlePeriodListChange = function handlePeriodListChange(event) {
    var value = event.target.value;
    var timeRangeContainer = event.target.closest(MAIN_WRAPPER_SELECTOR);
    var customTimeRangeContainer = timeRangeContainer.querySelector('.ez-time-range__custom-range-container');
    var method = value !== 'custom_range' ? 'add' : 'remove';
    customTimeRangeContainer.classList[method]('d-none');

    if (value !== 'custom_range') {
      setValues(timeRangeContainer, value);
      timeRangeContainer.querySelector('.ez-time-range__date-interval').dispatchEvent(new Event('change'));
    }
  };

  var setValues = function setValues(container, interval) {
    var endDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    container.querySelector('.ez-time-range__date-interval').setAttribute('value', interval);
    container.querySelector('.ez-time-range__end-date').setAttribute('value', endDate);
  };

  timePeriodNodes.forEach(function (node) {
    var defaultDate = [];
    var periodListSelect = node.querySelector('select');
    var flatpickrInput = node.querySelector('.flatpickr-input');

    if (flatpickrInput.dataset.start && flatpickrInput.dataset.end) {
      var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      defaultDate.push(new Date(convertDateToTimezone(flatpickrInput.dataset.start, browserTimezone, true)), new Date(convertDateToTimezone(flatpickrInput.dataset.end, browserTimezone, true)));
    }

    flatpickr(flatpickrInput, {
      mode: 'range',
      enableTime: false,
      time_24hr: true,
      formatDate: function formatDate(date) {
        return formatShortDateTime(date, null, eZ.adminUiConfig.dateFormat.shortDate);
      },
      onChange: handleFlatPickrChange,
      defaultDate: defaultDate
    });
    periodListSelect.addEventListener('change', function (event) {
      return handlePeriodListChange(event);
    }, false);
  });
})(window, window.document, window.flatpickr);

/***/ }),

/***/ 65:
/*!**************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/dashboard.js ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/time.range.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/dashboard.js */"./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/dashboard.js");
module.exports = __webpack_require__(/*! /home/jenkins/workspace/DXP/Archive_Maker_Experience/ibexa-experience/vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/time.range.js */"./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/time.range.js");


/***/ })

},[[65,"runtime"]]]);