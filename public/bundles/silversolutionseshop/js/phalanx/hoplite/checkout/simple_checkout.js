/**
 * Hoplite responsible for basket actions
 *
 * @requires storm.phalanx.controller,  storm.phalanx.parser, storm.phalanx.provider, storm.phalanx.actions, backbonejs, jquery
 * @author dho, mkr
 *
 * @module Phalanx
 * @main Phalanx
 * @submodule Hoplite
 * @extends phalanxController
 */


/**
 * Helper class for different user actions
 */
var checkout = {
    init: function () {
        $('#same_address').on('click', function () {
            if ($(this).is(':checked')) {
                $('#delivery_address').fadeOut();
            } else {
                $('#delivery_address').fadeIn();
            }
        });

        /**
         * Sidebar summary box
         * Show/hide option for basket lines in the sidebar box
         */
        $(document).on('click', '#lines_toggle', function (e) {
            e.preventDefault();
            var self = $(this),
                text = self.data('toggle-text'),
                productsWrapper = $('#sidebar_summary').find('.js-product-list');

            self.data('toggle-text', self.text()).text(text);
            self.toggleClass('active');

            if (self.hasClass('active')) {
                productsWrapper.find('div.hide').removeClass('hide');
            } else {
                productsWrapper.find('div:gt(2)').addClass('hide');
            }
        });

        /**
         * Delivery address box
         * filter addresses as you type
         */
        $(document).on('keyup', '.js-delivery-address-list input[type="text"]', function () {
            var addressList = $('.js-delivery-address-list').find('.js-address-list-item');
            var searchTerm = $(this).val().toLowerCase();

            if (searchTerm.length > 0) {
                addressList.hide().filter(function () {
                    return $(this).text().toLowerCase().indexOf(searchTerm) != -1;
                }).show();
            } else {
                addressList.show();
            }
        });

        /**
         * Invoice address box
         * Toggle next step label depends on user choice
         */
        $(document).on('change', '#siso_checkout_form_entity_checkout_invoice_address_type_invoiceSameAsDelivery', function (e) {
            e.preventDefault();
            var self = $(this).parents('form').find('button[type="submit"]');
            var text = self.data('toggle-text');
            self.data('toggle-text', self.html()).html(text);
        });

        $(window).on('resize', function () {
            checkout.stickySidebar();
        });
    },

    /**
     * Sticky sidebar functionality
     */
    stickySidebar: function () {
        var sidebar = $('.js-checkout-sidebar');
        var contentHeight = $('.js-checkout-content').height();

        if (sidebar.height() > contentHeight) {
            sidebar.unstick();
        } else {
            sidebar.unstick(); // unstick in case it was sticky before
            sidebar.sticky({
                topSpacing: 20,
                bottomSpacing: $('.js-footer-wrapper').outerHeight(true),
                getWidthFrom: sidebar.parent(),
                responsiveWidth: true
            });
        }
    },

    /**
     * Make select field options disabled except the selected one
     */
    disableSelect: function () {
        $('select[readonly=readonly] option:not(:selected)').attr('disabled', true);
    },

    /**
     * Tooltip state based on checkbox state in summary box
     */
    handleTooltip: function() {
        var checkoutBox = $('.js-checkout-summary-box');
        var checkboxList = checkoutBox.find('input[type="checkbox"]');
        var submitBtn = checkoutBox.find('button[type="submit"]');
        var selector = submitBtn.attr('data-selector');
        checkboxList.on('change', function() {
            selector = selector || submitBtn.attr('data-selector');
            if (checkboxList.length === checkoutBox.find('input[type="checkbox"][required]:checked').length) {
                submitBtn
                    .attr('data-selector', 'off')
                    .attr('aria-describedby', 'off');
            } else {
                submitBtn
                    .attr('data-selector', selector)
                    .attr('aria-describedby', selector)
                    .trigger('mouseenter')
                    .trigger('mouseleave')
            }
        });
    }

};
checkout.init();

/**
 * For storing last response data
 * @type {Array}
 */
var oldData = [];

var hopliteCheckout = phalanxController.extend ({
    /**
     * Triggered automatically when new instance of hoplite is created
     * @method constructor
     */
    constructor: function () {
        var self = this;
        // extend defaults Controller settings
        this.defaults = $.extend({}, this.defaults, {
            callback_validate_step: 'callback_validateStep',
            callback_get_delivery_from_invoice: 'callback_getDeliveryFromInvoice',
            callback_get_existing_delivery: 'callback_getExistingDelivery',
            callback_get_empty_delivery: 'callback_getEmptyDelivery',
            name: 'checkout' // hoplite name
        });
        Backbone.Model.apply(this, arguments);

        /* Actions section */

        // form submit validation
        $(document).on('click', '.js-checkout-box:not(#box_login) form [type="submit"]:not(".js-no-trigger")', function (e) {
            e.preventDefault();
            var submit = true;
            var btn = $(this);

            if (btn.parents('#box_summary') && btn.parents('#box_summary').find('input:required').not(':checked').length > 0) {
                submit = false;
            }

            if (submit) {
                var step = btn.parents('form').attr('id').replace('form_', '');
                self.validateStep(step, btn.parents('form').serialize(), false);
                Foundation.libs.tooltip.hide(btn);
            }
        });

        // delivery box change address options
        $(document).on('change', '.js-change-address input[type=radio]', function () {
            storm.spinner.show();

            var state = $(this).val();
            if (state == 'sameAsInvoice') {
                self.getDeliveryFromInvoice();
            } else if (state == 'new') {
                self.getEmptyDelivery();
            } else if (state == 'existing') {
                self.getExistingDelivery();
            }
        });

        // Load form with existing delivery address from the list
        $(document).on('click', '.js-delivery-address-list a[data-address-index]', function (e) {
            e.preventDefault();

            var index = $(this).data('address-index'),
                form = $('#form_delivery');

            // make sure we don't have duplicates
            form.find('input[name=index]').remove();
            // append hidden field with index
            form.prepend('<input type="hidden" name="index" value="' + index + '">');

            // Ajax request
            self.getExistingDelivery()
        });
    },

    /**
     * Populates the content from Ajax response
     * @method contentUpdate
     * @param content
     */
    contentUpdate: function (content) {
        // main content boxes
        $('#box_login').replaceWith(content.form_login);
        $('#box_invoice').replaceWith(content.form_invoice);
        $('#box_delivery').replaceWith(content.form_delivery);
        $('#box_shippingPayment').replaceWith(content.form_shippingPayment);
        $('#box_summary').replaceWith(content.form_summary);

        // sidebar boxes
        $('#sidebar_invoice').replaceWith(content.sidebar_invoice);
        $('#sidebar_delivery').replaceWith(content.sidebar_delivery);
        $('#sidebar_summary').replaceWith(content.sidebar_summary);

        // update hash value
        window.location.hash = content.current_step;

        // disable select
        checkout.disableSelect();

        // remove space_bottom class from last visible element
        // $('.sidebar > div').not('.hidden').last().removeClass('space_bottom');

        // refresh sidebar
        checkout.stickySidebar();

        storm.spinner.hide();

        // scroll to current step
        storm.scrollTo('.js-checkout-' + content.current_step + '-box');
    },

    /**
     * Builds Ajax request
     * @param action PHP action name
     * @param data collection of data
     * @method buildRequest
     */
    buildRequest: function (action, data) {

        data['type'] = 'checkout'; // append to every request, required by PHP

        // create an object with special settings for the hoplite
        var requestCollection = {};
        requestCollection[action] = new Backbone.Collection;
        requestCollection[action].add(data);

        if (data['init'] ||
            data['step'] != oldData['current_step'] ||
            (data['step'] == oldData['current_step'] && data['form'] != false)) {

            // create an instance of phalanxProvider and use it inside hoplite
            var ajax = new phalanxProvider;
            ajax.objHoplite = {};
            ajax.objHoplite[this.get('name')] = this;

            // remove init attribute
            delete data.init;

            storm.spinner.show();
            ajax.call(requestCollection);
        }
    },

    /**
     * Initial Ajax call on page load
     * @param step {String} hash value which box should be opened
     * @param form {*} false if there is no form, serialized form if form submited
     * @param init {boolean} on page load or not
     *
     * @method validateStep
     */
    validateStep: function (step, form, init) {
        // only when basket is not empty
        if ($('body').hasClass('js-is-checkout')) {
            var data = {
                'step': (step) ? step : window.location.hash.substr(1),
                'form': (form) ? form : false,
                'init': init
            };

            this.buildRequest('validate_step', data);
        }
    },

    /**
     * Initial Ajax call on page load callback (on Ajax response)
     * @param r - response
     *  - status
     *  - current_step
     *
     * @method callback_getDeliveryFromInvoice
     */
    callback_validateStep: function (r) {

        r = r.validate_step;

        // we are in summary, then go to redirect url
        if (typeof r.redirect_url === 'string') {
            window.location.href = r.redirect_url; // go to payment
        } else {
            this.contentUpdate(r);
            oldData = r;

            if (r.current_step === 'summary') {
                checkout.handleTooltip();
            }
        }

        $(document).foundation();
    },

    /**
     * Get delivery address from invoice
     * @method getDeliveryFromInvoice
     */
    getDeliveryFromInvoice: function () {
        this.buildRequest('get_delivery_from_invoice', {});
    },

    /**
     * Get delivery address from invoice callback (on Ajax response)
     * @param r - response
     *  - status
     *  - current_step
     *  - form_delivery
     *
     * @method callback_getDeliveryFromInvoice
     */
    callback_getDeliveryFromInvoice: function (r) {
        $('#box_delivery').replaceWith(r.get_delivery_from_invoice.form_delivery);
        // disable select
        checkout.disableSelect();

        storm.spinner.hide();
    },

    /**
     * Get delivery address from invoice
     * @method getExistingDelivery
     */
    getExistingDelivery: function () {
        var data = {
            'index': $('#form_delivery').find('input[name=index]').val()
        };
        this.buildRequest('get_existing_delivery', data);
    },

    /**
     * Get delivery address from invoice callback (on Ajax response)
     * @param r - response
     *  - current_step
     *  - form_delivery
     *  - status
     * @method callback_getExistingDelivery
     */
    callback_getExistingDelivery: function (r) {
        $('#box_delivery').replaceWith(r.get_existing_delivery.form_delivery);
        // disable select
        checkout.disableSelect();

        var event = new CustomEvent('ses:checkout-load:summary');
        document.dispatchEvent(event);

        // hide spinner
        storm.spinner.hide();
    },

    /**
     * Get delivery address from invoice
     * @method getEmptyDelivery
     */
    getEmptyDelivery: function () {
        this.buildRequest('get_empty_delivery', {});
    },

    /**
     * Get delivery address from invoice callback (on Ajax response)
     * @param r - response
     *  - current_step
     *  - form_delivery
     *  - status
     * @method callback_getEmptyDelivery
     */
    callback_getEmptyDelivery: function (r) {
        $('#box_delivery').replaceWith(r.get_empty_delivery.form_delivery);
        // hide spinner
        storm.spinner.hide();
    }
});
