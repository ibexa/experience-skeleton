<template>
    <div class="row">
        <h1>Test</h1>
        <div class="sidebar">
            Overview
        </div>
        <div class="main">
            Sales chart
            Best seller
            Top search terms
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import dateFormat from 'dateformat';
    export default {
        name: "cockpit",
        props: ['token'],
        data () {
            return {
                dashboardOverview: {},
                dashboardSalesCharts: {},
                dashboardBestseller: {},
                dashboardSearchTerms: {}
            }
        },
        methods: {
            showDashboardOverview() {
                var vm = this;
                axios.post('http://localhost:8000/api/ezp/v2/rest/dashboard-overview',
                        {
                            "get_overview_data": [
                                {
                                    "type": "dashboard",
                                    "trends": 0
                                }
                            ]
                        }, {
                            headers: {
                                'X-CSRF-Token': this.token,
                                'Content-Type': 'application/vnd.chart.Data+json',
                                'Accept': 'application/vnd.ez.api.dashboardData+json'
                            }
                        })
                        .then(response => {
                    vm.dashboardOverview = response.data;
            })
            },
            showDashboardSalesCharts() {
                var vm = this;
                var dateStart = new Date();
                var dateEnd = new Date();
                dateStart = new Date().setDate(dateEnd.getDate() - 7);
                var dateStartString = dateFormat(dateStart, 'dd-mm-yyyy');
                var dateEndString = dateFormat(dateEnd, 'dd-mm-yyyy');
                axios.post('http://localhost:8000/api/ezp/v2/rest/dashboard-charts',
                        {
                            "get_chart_data": [
                                {
                                    "range": [
                                        dateStartString,
                                        dateEndString
                                    ],
                                    "wrapper": "#main-chart",
                                    "module": "sales",
                                    "title": "Sales",
                                    "type": "dashboard",
                                    "trends": 0
                                }
                            ]
                        }, {
                            headers: {
                                'X-CSRF-Token': this.token,
                                'Content-Type': 'application/vnd.chart.Data+json',
                                'Accept': 'application/vnd.ez.api.dashboardData+json'
                            }
                        })
                        .then(response => {
                    vm.dashboardSalesCharts = response.data;
            })
            },
            showDashboardBestseller() {
                var vm = this;
                axios.post('http://localhost:8000/api/ezp/v2/rest/dashboard-bestserller',
                        {
                            "get_panel_data":
                                [
                                    {
                                        "panel":"tabs",
                                        "type":"dashboard",
                                        "trends":0
                                    }
                                ]
                        }, {
                            headers: {
                                'X-CSRF-Token': this.token,
                                'Content-Type': 'application/vnd.chart.Data+json',
                                'Accept': 'application/vnd.ez.api.dashboardData+json'
                            }
                        })
                        .then(response => {
                    vm.dashboardBestseller = response.data;
            })
            },
            showDashboardSearchTerms() {
                var vm = this;
                axios.post('http://localhost:8000/api/ezp/v2/rest/dashboard-searchterms',
                        {
                            "get_tab_data":
                                [
                                    {
                                        "tab":"lastsearch",
                                        "form":"",
                                        "type":"dashboard",
                                        "trends":0
                                    }
                                ]
                        }, {
                            headers: {
                                'X-CSRF-Token': this.token,
                                'Content-Type': 'application/vnd.chart.Data+json',
                                'Accept': 'application/vnd.ez.api.dashboardData+json'
                            }
                        })
                        .then(response => {
                    vm.dashboardSearchTerms = response.data;
            })
            }
        },
        mounted: function () {
            this.showDashboardOverview();
            this.showDashboardSalesCharts();
            this.showDashboardBestseller();
            this.showDashboardSearchTerms();
        }
    }
</script>

<style scoped>

</style>
