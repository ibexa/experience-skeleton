import { EventsChart } from './charts/events';
import { RevenueChart } from './charts/revenue';
import { ConversionRateChart } from './charts/conversion.rate';
import { RecommendationCallsChart } from './charts/recommendation.calls';

(function(doc, eZ, Routing) {
    const SELECTOR_INTERVAL_INPUT = '.ez-time-range__date-interval';
    const SELECTOR_END_DATE_INPUT = '.ez-time-range__end-date';
    const CLASS_FETCHING_DATA = 'ez-container--fetching-data';
    const dashboardForm = doc.querySelector('form[name="dashboard"]');
    const chartsInputsContainer = doc.querySelector('.ez-charts__inputs-container');
    const productsPurchasedInputsContainer = doc.querySelector('.ez-products-purchased__inputs-container');
    const { chartsData } = doc.querySelector('.ez-charts').dataset;
    const chartsInitData = chartsData ? JSON.parse(chartsData) : {};
    const productsPurchasedSection = doc.querySelector('.ez-products-purchased');
    const charts = {};
    const { getJsonFromResponse } = eZ.helpers.request;
    const chartsMap = {
        revenue: RevenueChart,
        recoCall: RecommendationCallsChart,
        conversionRate: ConversionRateChart,
        events: EventsChart,
    };
    const handleChartsIntervalChange = (event) => {
        const container = event.currentTarget.closest('.ez-time-range');
        const dateIntervalNameInput = container.querySelector('select');
        const endDateInput = container.querySelector(SELECTOR_END_DATE_INPUT);
        const reportParamsInterval = container.querySelector('.ez-time-range__date-interval').value;
        const reportParamsEndDate = endDateInput.value || Math.floor(new Date().getTime() / 1000);
        let intervalLabel = '';

        if (dateIntervalNameInput.value === 'custom_range' && endDateInput.value === '') {
            return;
        }

        if (dateIntervalNameInput.value === 'custom_range') {
            intervalLabel = container.querySelector('.ez-time-range__period-select').value;
        } else {
            intervalLabel = dateIntervalNameInput.querySelector(`option[value="${dateIntervalNameInput.value}"]`)
                .innerHTML;
        }

        doc.querySelectorAll('.ez-chart__time-range').forEach((node) => {
            node.innerHTML = intervalLabel;
        });

        doc.querySelector(
            '.ez-charts__download-full-report'
        ).href = Routing.generate('ibexa.personalization.report.recommendation_detailed', {
            date_interval: reportParamsInterval,
            end_date: reportParamsEndDate,
        });

        if (productsPurchasedSection) {
            productsPurchasedSection.dataset.scrollTo = '';
        }
        
        fetchChartsData();
    };
    const fetchChartsData = () => {
        const formData = new FormData(dashboardForm);
        const queryParams = new URLSearchParams(formData).toString();
        const request = new Request(`${Routing.generate('ibexa.personalization.chart.data')}?${queryParams}` , {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                Accept: 'application/json',
            },
        });

        doc.querySelector('.ez-charts').classList.toggle(CLASS_FETCHING_DATA);
        fetch(request)
            .then(getJsonFromResponse)
            .then((response) => {
                Object.entries(response.charts).forEach(([ chartKey, data ]) => {
                    if (charts.hasOwnProperty(chartKey)) {
                        charts[chartKey].setData(data);
                        charts[chartKey].updateChart();
                    }
                });
                doc.querySelector('.ez-charts').classList.toggle(CLASS_FETCHING_DATA);
            })
            .catch(eZ.helpers.notification.showErrorNotification);
    };
    const handleProductsPurchasedIntervalChange = (event) => {
        const container = event.target.closest('.ez-time-range');
        const dateIntervalNameInput = container.querySelector('select');
        const endDateInput = container.querySelector(SELECTOR_END_DATE_INPUT);

        if (dateIntervalNameInput.value === 'custom_range' && endDateInput.value === '') {
            return;
        }

        dashboardForm.submit();
    };

    Object.entries(chartsMap).forEach(([ chartKey, ChartClass ]) => {
        if (chartsInitData.hasOwnProperty(chartKey)) {
            charts[chartKey] = new ChartClass(chartsInitData[chartKey]);

            charts[chartKey].render();
        }
    });

    chartsInputsContainer.querySelector(SELECTOR_INTERVAL_INPUT).addEventListener('change', handleChartsIntervalChange, false);
    chartsInputsContainer.querySelector(SELECTOR_END_DATE_INPUT).addEventListener('change', handleChartsIntervalChange, false);

    if (productsPurchasedInputsContainer) {
        productsPurchasedInputsContainer
            .querySelector(SELECTOR_INTERVAL_INPUT)
            .addEventListener('change', handleProductsPurchasedIntervalChange, false);
        productsPurchasedInputsContainer
            .querySelector(SELECTOR_END_DATE_INPUT)
            .addEventListener('change', handleProductsPurchasedIntervalChange, false);
    }

    if (productsPurchasedSection) {
        const firstChart = doc.querySelector('.ez-chart');

        firstChart.addEventListener('ez-chart-animation-complete', () => {
            const { scrollTo } = productsPurchasedSection.dataset;

            if (scrollTo) {
                doc.querySelector(scrollTo).scrollIntoView();
            }
        }, false)
    }
})(window.document, window.eZ, window.Routing);
