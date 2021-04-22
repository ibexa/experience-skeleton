import { BaseChart } from './base/base';

export class RecommendationCallsChart extends BaseChart {
    constructor(data) {
        super(data);

        this.canvas = document.querySelector('.ez-chart__canvas--recommendation-calls');
        this.summaryTotalKey = 'all_calls';
        this.summaryContainer = document.querySelector('.ez-chart__summary--recommendation-calls');
        this.legendContainer = document.querySelector('.ez-chart__legend--recommendation-calls');
    }

    getSummaryValue(value) {
        return new Intl.NumberFormat(this.lang).format(value.calls);
    }
}
