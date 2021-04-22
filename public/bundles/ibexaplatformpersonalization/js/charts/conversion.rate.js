import { BaseChart } from './base/base';

export class ConversionRateChart extends BaseChart {
    constructor(data) {
        super(data);

        this.canvas = document.querySelector('.ez-chart__canvas--conversion-rate');
        this.summaryTotalKey = 'all_scenarios';
        this.summaryContainer = document.querySelector('.ez-chart__summary--conversion-rate');
        this.legendContainer = document.querySelector('.ez-chart__legend--conversion-rate');
    }

    getSummaryValue(value) {
        return new Intl.NumberFormat(this.lang).format(value.percentage) + '%';
    }
}
