/**
 * Main class for Storm Basket
 *
 * @requires jquery
 *
 * @author mkr
 *
 * @class basket
 * @module Basket
 *
 */

var basket = basket || {};

// INFO Changed on 21-10-2016. It will call $('.js-update-basket').click(); always before user goes to checkout
// to make sure that all data in the basket is fresh

/**
 * Main event handler. Triggers on page load
 *
 */
basket.init = function () {
    this.validateForm();
    this.resetFormData();
};


/**
 * On basket submit checks if there are any changed fields and performs appropriate actions.
 *
 * @method validateForm
 */
basket.validateForm = function () {
    $('.js-submit-basket').on('click', function (e) {
        e.preventDefault();
        // update redirect_url field
        $('.js-redirect-url').val($(this).attr('href'));
        $('.js-update-basket').click();
    });
};

/**
 * Make sure we reset the form, e.g when user clicks back back button
 *
 * @method resetFormData
 */
basket.resetFormData = function () {
    window.onload = function () {
        $('.js-redirect-url').val('');
    };
};

basket.init();
