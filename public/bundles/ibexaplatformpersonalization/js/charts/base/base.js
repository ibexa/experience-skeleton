const { Chart } = window;
const doc = window.document;
const ONE_COLUMN_ITEM_LIMIT = 5;
const MAX_NUMBER_OF_LABELS = 16;

export class BaseChart {
    constructor(data) {
        this.setData(data);
        this.lang = document.documentElement.lang.replace('_', '-'); // TO DO: Get this config from settings
    }

    setData(data) {
        this.datasets = data.datasets;
        this.labels = data.labels;
        this.summary = data.summary;

        if (this.labels.length) {
            this.labelsInterval = Math.ceil(this.labels.length / MAX_NUMBER_OF_LABELS);
        } else {
            this.labelsInterval = 1;
        }
    }

    getSummaryValue() {}

    getSummaryName(value) {
        return value.name;
    }

    updateChartMessageDisplay() {
        const chartBody = this.chart.canvas.closest('.ez-chart__body');
        const chartMessagesNode = chartBody.querySelector('.ez-chart__message');
        const chartMessageMethod = this.chart.config.data.datasets.length ? 'add' : 'remove';

        chartMessagesNode.classList[chartMessageMethod]('d-none');
    }

    updateChart() {
        this.chart.data.labels = this.labels;
        this.chart.data.datasets = this.datasets;

        this.chart.update();
        this.updateSummary();
        this.setLegendCheckboxes();
        this.updateChartMessageDisplay();
    }

    updateSummary() {
        const detailsRowNode = this.summaryContainer.querySelector('.ez-chart__summary-item-details .row');
        const totalValuesNode = this.summaryContainer.querySelector('.ez-chart__summary-main-value');
        const rowItemTemplate = detailsRowNode.dataset.rowItemTemplate;

        if (this.summary.length) {
            const totalValue = this.summary.find((value) => this.getSummaryName(value) === this.summaryTotalKey);

            detailsRowNode.innerHTML = '';
            totalValuesNode.innerHTML = this.getSummaryValue(totalValue);

            this.summary.forEach((value) => {
                if (this.getSummaryName(value) !== this.summaryTotalKey) {
                    detailsRowNode.insertAdjacentHTML(
                        'beforeend',
                        rowItemTemplate
                            .replace('{{ name }}', this.getSummaryName(value))
                            .replace('{{ calls }}', this.getSummaryValue(value))
                    );

                    if (this.summary.length <= ONE_COLUMN_ITEM_LIMIT) {
                        detailsRowNode.insertAdjacentHTML(
                            'beforeend',
                            rowItemTemplate.replace('{{ name }}', '').replace('{{ calls }}', '')
                        );
                    }
                }
            });
        } else {
            totalValuesNode.innerHTML = '-';
        }
    }

    setCheckboxBackground(checkbox) {
        const { checkedColor } = checkbox.dataset;
        const { checked } = checkbox;

        if (checked) {
            checkbox.style.backgroundColor = checkedColor;
            checkbox.style.borderColor = checkedColor;
        } else {
            checkbox.style.backgroundColor = '#fff';
            checkbox.style.borderColor = '#878b90';
        }
    }

    setLegendCheckboxes() {
        if (this.legendContainer) {
            this.legendContainer.innerHTML = '';
            this.legendContainer.appendChild(this.chart.generateLegend());

            this.legendContainer.querySelectorAll('.ez-input--legend-checkbox').forEach((legendCheckbox) => {
                this.setCheckboxBackground(legendCheckbox);

                legendCheckbox.addEventListener('change', (event) => {
                    const { datasetIndex } = event.currentTarget.dataset;
                    const dataset = this.chart.data.datasets[datasetIndex];
                    const productsPurchased = doc.querySelector('.ez-products-purchased');

                    dataset.hidden = !dataset.hidden;
                    this.setCheckboxBackground(event.currentTarget);
                    this.chart.update();

                    if (productsPurchased) {
                        productsPurchased.dataset.scrollTo = '';
                    }
                });
            });
        }
    }

    render() {
        this.chart = new Chart(this.canvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: this.labels,
                datasets: this.datasets,
            },
            options: {
                responsive: true,
                elements: {
                    point: {
                        radius: 2,
                    },
                    line: {
                        tension: 0,
                    },
                },
                legendCallback: (chart) => {
                    const { legendCheckboxTemplate } = this.legendContainer.dataset;
                    const fragment = doc.createDocumentFragment();

                    chart.data.datasets.forEach((dataset, index) => {
                        const container = doc.createElement('div');
                        const rendredTempalte = legendCheckboxTemplate
                            .replace('{{ checked_color }}', dataset.backgroundColor)
                            .replace('{{ dataset_index }}', index)
                            .replace('{{ label }}', dataset.label);

                        dataset.hidden = false;
                        container.insertAdjacentHTML('beforeend', rendredTempalte);

                        const checkboxNode = container.querySelector('.ez-chart__legend-checkbox-label');

                        checkboxNode.querySelector('input').checked = !dataset.hidden;
                        fragment.append(checkboxNode);
                    });

                    return fragment;
                },
                legend: {
                    display: false,
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
                        labelTextColor: (tooltipItem, chart) => {
                            return '#878b90';
                        },
                    },
                },
                animation: {
                    onComplete: (animation) => {
                        const chart = animation.chart;
                        const chartMethod = chart.config.data.datasets.length ? 'remove' : 'add';
                        const chartNode = chart.canvas.closest('.ez-chart');

                        chartNode.dispatchEvent(new CustomEvent('ez-chart-animation-complete'));
                        chartNode.classList[chartMethod]('ez-chart--no-data');
                    },
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                maxRotation: 0,
                                autoSkip: false,
                                callback: (value, index, values) => {
                                    return index % this.labelsInterval ? null : value;
                                },
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            type: 'logarithmic',
                            ticks: {
                                callback: (...args) => {
                                    const value = Chart.Ticks.formatters.logarithmic.call(this, ...args);

                                    if (value.length) {
                                        return Number(value).toLocaleString();
                                    }

                                    return value;
                                },
                            },
                        },
                    ],
                },
            },
        });

        this.updateChartMessageDisplay();
        this.setLegendCheckboxes();
        this.updateSummary();
    }
}
