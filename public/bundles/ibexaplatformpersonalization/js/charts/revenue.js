import { BaseChart } from './base/base';

export class RevenueChart extends BaseChart {
    constructor(data) {
        super(data);

        this.canvas = document.querySelector('.ez-chart__canvas--revenue');
        this.summaryContainer = document.querySelector('.ez-chart__summary--revenue');
        this.legendContainer = document.querySelector('.ez-chart__legend--revenue');
    }

    updateSummary() {
        const itemsPurchased = new Intl.NumberFormat(this.lang).format(this.summary.itemsPurchased);
        const revenue = this.summary.currency
            ? new Intl.NumberFormat(this.lang, { style: 'currency', currency: this.summary.currency }).format(
                  this.summary.revenue / 100
              )
            : this.summary.revenue;

        this.summaryContainer.querySelector(
            '.ez-chart__summary-main-value--items-purchased'
        ).innerHTML = itemsPurchased;
        this.summaryContainer.querySelector('.ez-chart__summary-main-value--revenue').innerHTML = revenue;
    }
}
