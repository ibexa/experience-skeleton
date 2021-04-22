import { BaseChart } from './base/base';

export class EventsChart extends BaseChart {
    constructor(data) {
        super(data);

        this.canvas = document.querySelector('.ez-chart__canvas--collected-events');
        this.summaryTotalKey = 'Total_events';
        this.summaryContainer = document.querySelector('.ez-chart__summary--collected-events');
        this.legendContainer = document.querySelector('.ez-chart__legend--collected-events');
    }

    getSummaryValue(value) {
        return new Intl.NumberFormat(this.lang).format(value.hits);
    }
}
