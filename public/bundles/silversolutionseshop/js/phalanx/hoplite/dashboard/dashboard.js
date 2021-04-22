/**
 * Hoplite responsible for dashboard actions
 *
 * @requires storm.phalanx.controller,  storm.phalanx.parser, storm.phalanx.provider, storm.phalanx.actions, backbonejs, jquery
 * @author mkr
 *
 * @module Phalanx
 * @main Phalanx
 * @submodule Hoplite
 * @extends phalanxController
*/

// Hoplite starts here
var hopliteDashboard = phalanxController.extend ({

    utility: {
        /**
         * Get date range for the chart
         * @returns {*[]}
         */
        getDates: function() {
            return [$('input[name="date-from"]').val(), $('input[name="date-to"]').val()];
        },

        /**
         * Gets active tab title
         *
         * @returns {String}
         */
        getTitle: function() {
            return $('.button-group').find('.active a').text();
        },

        /**
         * Gets active tab module
         *
         * @returns {String}
         */
        getModule: function() {
            return $('.button-group').find('.active a').data('dashboard-chart-module');
        },

        /**
         * Gets tab name
         *
         * @param elem {jQuery Object}
         * @returns {string}
         */
        getTabName: function(elem) {
            return elem.attr('href').replace('#', '')
        },

        /**
         * Get form data
         * @param elem {jQuery object}
         * @returns {string}
         */
        getFormData: function(elem) {
            var parent = elem.parents('.js-tab-block');
            var form = '';
            if (parent.find('.js-search-filters').length) {
                form = parent.find('.js-search-filters').find('input, select:not(".js-ignore-field")').serialize();
            }
            return form;
        },

        /**
         * Performs after response actions
         */
        callbackActions: function(diff) {
            // update days difference
            if (diff) {
                $('[data-dashboard-days-diff]').text(diff);
            }

            // hide spinner
            storm.spinner.hide();
        },

        /**
         * Creates the chart
         */
        createChart: {

            gauge : function(wrapper, data) {
                var gauge = c3.generate({
                    bindto: wrapper,
                    data: {
                        columns: [
                            ['data', data]
                        ],
                        type: 'gauge'
                    },
                    color: {
                        pattern: ['#60B044', '#F6C600', '#F97600', '#FF0000'], // the three color levels for the percentage values.
                        threshold: {
                            values: [30, 60, 90, 100]
                        }
                    },
                    size: {
                        height: 80
                    },
                    expand: false
                });
            },

            pie : function(wrapper, data) {
                var pie = c3.generate({
                    bindto: wrapper,
                    data : {
                        columns: data,
                        type: 'pie'
                    }
                });
            }
        }
    },

    /**
     * Initialize function triggered on page load
     */
    init : function() {
        // main chart
        this.getChartData('#main-chart', this.utility.getModule(), this.utility.getTitle());

        // overview panel
        this.getOverviewData();
    },

    /**
     * Triggered automatically when new instance of hoplite is created
     * @method constructor
     */
    constructor: function() {
        var self;
        self = this;
        // extend defaults Controller settings
        this.defaults = $.extend({}, this.defaults, {
            callback_get_chart_data    : 'callback_getChartData',
            callback_get_overview_data : 'callback_getOverviewData',
            callback_get_tab_data      : 'callback_getTabData',
            callback_get_panel_data    : 'callback_getPanelData',
            name                       : 'dashboard'
        });

        Backbone.Model.apply(this, arguments);

        /* Actions section */

        // on page load
        this.init();

        // button group
        $(document).on('click', '.dashboard .button-group li:not(".active") a', function(e) {
            e.preventDefault();

            $('.button-group .active').removeClass('active');
            $(this).parent().addClass('active');

            var module = $(this).data('dashboard-chart-module'),
                title = $(this).text();

            self.getChartData('#main-chart', module, title);
        });

        // date range
        $(document).on('click', '#date-range-save', function() {
            var dateFrom = $('input[name="date-from"]').val(),
                dateTo   = $('input[name="date-to"]').val();

            if (dateFrom && dateTo) {
                self.getChartData('#main-chart', self.utility.getModule(), self.utility.getTitle());
            } else {
                alert('Please select date range');
            }
        });

        // trends
        $(document).on('change', '#trends', function() {
            self.getChartData('#main-chart', self.utility.getModule(), self.utility.getTitle());
        });

        // get tab content
        $(document).on('click', '.tabs li:not(".selected") a', function(e) {
            e.preventDefault();
            var elem = $(this);
            self.getTabData(self.utility.getTabName(elem), self.utility.getFormData(elem));
        });

        // get tab content - filtered with apply button
        $(document).on('click', '.js-search-apply', function(e) {
            e.preventDefault();
            var elem = $(this).parents('.js-tab-block').find('.tabs .selected a');
            self.getTabData(self.utility.getTabName(elem), self.utility.getFormData(elem));
        });

        // get panel content - refresh
        $(document).on('click', '[data-dashboard-action="refresh"]', function(e) {
            e.preventDefault();
            var panel = $(this).parents('.box').data('dashboard-panel');

            if (panel === 'sidebar') {
                self.getOverviewData()
            } else {
                self.getPanelData(panel);
            }
        });

        // choose predefined list of days
        $(document).on('change', '.js-main-area .js-date-range', function() {
            if ($(this).val() !== "0") {
                var date = $(this).val().split(':'),
                    from = date[0],
                    to   = date[1];

                //  update date fields
                $('[name="date-from"]').val(from);
                $('[name="date-to"]').val(to);

                // show the chart with selected date range
                $('#date-range-save').click();
           }
        });

        // choose predefined list of days
        $(document).on('change', '.js-search-area select', function() {
            var dateField = $('.js-search-area .js-date-range').val();
            if (dateField !== "0") {
                var date = dateField.split(':'),
                    from = date[0],
                    to   = date[1];

                $('.js-search-area [name="date-from"]').val(from);
                $('.js-search-area [name="date-to"]').val(to);
            }

            $('.js-search-apply').click();
        });

    },

    /**
     * Builds Ajax request
     * @param action PHP action name
     * @param data collection of data
     * @method buildRequest
     */
    buildRequest: function(action, data) {

        // only on dashboard page
        if ( $('.content-dashboard').length > 0 ) {
            data['type'] = 'dashboard'; // append to every request, required by PHP
            data['trends'] = $('#trends').is(":checked") ? 1 : 0; // show trends or not

            // create an object with special settings for the hoplite
            var requestCollection = {};
            requestCollection[action] = new Backbone.Collection;
            requestCollection[action].add(data);


            // create an instance of phalanxProvider and use it inside hoplite
            var ajax = new phalanxProvider;
            ajax.objHoplite = {};
            ajax.objHoplite[this.get('name')] = this;

            storm.spinner.show();
            ajax.call(requestCollection);
        }
    },

    getChartData: function(wrapper, module, title) {

        /**
         * Possible modules:
         *  - orders
         *  - income
         *  - amounts
         *  - customers
         *  - visitors
         *  - etc ....
         */

        var data = {
            'range'   : this.utility.getDates(),
            'wrapper' : wrapper,
            'module'  : module,
            'title'   : title
        };

        this.buildRequest('get_chart_data', data)

    },

    /**
     * Initial Ajax call on page load callback (on Ajax response)
     * @param r - response
     *  - status
     *  - current_step
     *
     * @method callback_getChart
     */
    callback_getChartData: function(r) {
        r = r.get_chart_data;
        var isValid = true;

        if (r.wrapper === undefined || r.wrapper.length <= 0) {
            s_d.l('ERROR: wrapper not defined');
            isValid = false;
        }

        if (r.columns === undefined || r.columns.length <= 0) {
            s_d.l('ERROR: columns not defined');
            isValid = false;
        }

        if (r.xFormat === undefined || r.xFormat.length <= 0) {
            s_d.l('ERROR: xFormat not defined');
            isValid = false;
        }

        if (r.xDate === undefined || r.xDate.length <= 0) {
            s_d.l('ERROR: xDate not defined');
            isValid = false;
        }

        if (r.xCount === undefined || r.xCount.length <= 0) {
            s_d.l('ERROR: xCount parameter not defined');
            isValid = false;
        }

        if (r.noData === undefined || r.noData.length <= 0 || r.noData == true) {
            $('#main-chart').html('<div class="message alert">There is no data for given date range. Please try another date range.</div>');
            isValid = false;
        }

        if (isValid) {

            var area = c3.generate({
                bindto: r.wrapper,
                data: {
                    x: 'Date', // the same name should be returned as the first column in the response
                    columns: r.columns,
                    xFormat: r.xFormat,
                    type: 'area'
                },
                axis : {
                    x : {
                        type : 'timeseries',
                        tick: {
                            count: r.xCount,
                            format: r.xDate
                        }
                    }
                }
            });

        } else {

            if (r.noData == false) {

                $('#main-chart').html('<div class="message alert">For technical reasons chart could not be displayed. Please contact system administrator to report this problem.</div>');

            }

        }

        if (r.daysDifference !== undefined) {
            this.utility.callbackActions(r.daysDifference);
        }

    },

    /**
     * Gets overview panel data
     */
    getOverviewData: function() {

        var data = {};
        this.buildRequest('get_overview_data', data);
    },

    /**
     * Callback for get overview panel data
     * @param r
     */
    callback_getOverviewData: function(r) {

        var self = this,
            currentlyOnline, activeShoppingCarts;

        r = r.get_overview_data;

        // currently online
        currentlyOnline = r.currentlyOnline || 'No data';
        $('[data-dashboard-currently-online]').text(currentlyOnline);

        // active shopping carts
        activeShoppingCarts = r.activeShoppingCarts || 'No Data';
        $('[data-dashboard-active-carts]').text(activeShoppingCarts);

        // ERP Status
        var pillow = $('[data-dashboard-erp-status]').find('.pillow');

        if (pillow.length > 0) {
            if (r.erpStatus) {
                pillow.removeClass('alert').addClass('success').text('Fine');
            } else {
                pillow.removeClass('success').addClass('alert').text('Offline');
            }
        }

        // gauge
        if (r.gauge !== undefined && $(r.gauge).size() > 0) {
            $.each(r.gauge, function(index, value) {
                var wrapper = '#' + index + '-status';
                if (value) {
                    self.utility.createChart.gauge(wrapper, value);
                } else {
                    $(wrapper).append('No data for ' + index + ' chart.');
                }
            });
        } else {
            $('.gauge').find('[id$="status"]').html('No data for this chart.');
        }

        // pending
        if ( r.pending && r.pending.length > 0 ) {
            self.utility.createChart.pie('#pending', r.pending);
        } else {
            $('#pending').html('No data for this chart.');
        }

        self.utility.callbackActions();

    },

    /**
     * Refreshing the panel with latest data
     *
     * @param panel
     */
    getPanelData: function(panel) {

        var data = {
            'panel' : panel
        };

        this.buildRequest('get_panel_data', data);
    },

    /**
     * Callback for panel refresh
     *
     * Returns:
     * - panel - panel name that comes from request
     * - content - refresh panel content
     *
     * @param r - response object
     */
    callback_getPanelData: function(r) {

        r = r.get_panel_data;

        var content = r.content || '<div class="message alert">We are sorry but content for this panel is currently unavailable.</div>';

        $('[ data-dashboard-panel="' + r.panel + '"]').replaceWith(content);
        this.utility.callbackActions(r.daysDifference);

    },

    /**
     * Gets tab data via Ajax
     *
     * @param tab
     */
    getTabData: function(tab, form) {

        var data = {
            'tab' : tab,
            'form': form
        };

        this.buildRequest('get_tab_data', data);

    },

    /**
     * Callback for the getTabData function
     *
     * @param r
     */
    callback_getTabData: function(r) {
        r = r.get_tab_data;

        // set classes for tabs
        var parent  = $('a[href="#' + r.tab + '"]').parents('.js-tab-block');
        var container = parent.find('.js-tab-content');
        var tabs = parent.find('.tabs');
        var content = r.content || '<div class="message alert">We are sorry but content for this tab is currently unavailable.</div>';

        tabs.find('.selected').removeClass('selected');
        tabs.find('a[href="#' + r.tab + '"]').parent().addClass('selected');

        container.html(content);

        this.utility.callbackActions(r.daysDifference);
    }

});
