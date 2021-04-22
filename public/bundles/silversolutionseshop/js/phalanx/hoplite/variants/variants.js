/**
 * Hoplite responsible for variants actions
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

var hopliteVariants = phalanxController.extend({
    // Ajax blocking flag
    allowAjaxCall: false,

    utility: {
        /**
         * Updates window.location.hash on user action
         */
        updateHash: function() {
            var variants = [],
                activeVariants = '',
                hash = window.location.hash.substring(1);

            $('.js-variant-group').each(function() {
                var group = $(this)
                        .find('.js-variant-list')
                        .data('variant-group'),
                    code = $(this)
                        .find('li.active a')
                        .data('variant-code');

                if (group && code) {
                    variants.push(group + ',' + code);
                }
            });
            if (variants.length > 0) {
                activeVariants = 'variants=' + variants.join(';');
            }

            // multiple hashes
            if (hash.indexOf('&variants') != -1) {
                hash = hash.substr(0, hash.indexOf('&variants'));
            }

            // only variants in hash
            if (hash.indexOf('variants') != -1) {
                hash = hash.substr(0, hash.indexOf('variants'));
            }

            if (activeVariants.length > 0) {
                hash = hash + activeVariants;
            } else {
                hash = '';
            }

            if (hash) {
                window.location.hash = hash;
            } else {
                // clear # from the URL in modern browsers
                if (!hash && window.history && window.history.replaceState) {
                    window.history.replaceState('', '', window.location.pathname);
                } else {
                    window.location.hash = hash;
                }
            }
        },

        /**
         * Read hash values from URL
         *
         * @returns {string|boolean}
         */
        getVariantsHash: function() {
            var hash = window.location.hash.substr(1),
                hashes = hash.split('&'),
                activeVariants = '';

            if (hash.indexOf('variants') != -1) {
                $(hashes).each(function(index, value) {
                    if (value.indexOf('variants') != -1) {
                        var variants = value.split('=');
                        activeVariants = variants[1].split(';');
                    }
                });
            }

            return activeVariants || false;
        },

        /**
         * Based on hash value sets the active variants
         */
        setActiveVariants: function() {
            var variants = this.getVariantsHash();
            // clear active variants
            $('.js-variants-wrapper')
                .find('li.active')
                .removeClass('active');

            if (variants) {
                $(variants).each(function(index, value) {
                    var variant = value.split(','),
                        group = variant[0],
                        code = variant[1];

                    $('[data-variant-group="' + group + '"]')
                        .find('[data-variant-code="' + code + '"]')
                        .parent()
                        .addClass('active');
                });
            }
        },
    },

    /**
     * Initialize function triggered on page load
     */
    init: function() {
        if (window.location.hash) {
            this.utility.setActiveVariants();
            this.getVariants();
        }
    },

    /**
     * Triggered automatically when new instance of hoplite is created
     * @method constructor
     */
    constructor: function() {
        var self = this;
        // extend defaults Controller settings
        this.defaults = $.extend({}, this.defaults, {
            callback_get_variants: 'callback_getVariants',
            name: 'variant',
        });

        Backbone.Model.apply(this, arguments);

        /* Actions section */

        // on page load
        self.init();

        $(window).on('hashchange', function() {
            self.utility.setActiveVariants();
            if (self.allowAjaxCall) {
                self.getVariants();
            }
        });

        // click on variant
        $(document).on('click', '.js-product-variant-wrapper .js-variant-list .available a:not(".is-blocked")', function(e) {
            e.preventDefault();

            var elem = $(this),
                list = elem.parents('.js-variant-list'),
                group = list.data('variant-group'),
                code = elem.data('variant-code');

            // if we clicked on the other than current
            if (
                !$(this)
                    .parent()
                    .hasClass('active')
            ) {
                list.find('li').removeClass('active unavailable');
            }

            elem.parent().toggleClass('active');

            self.allowAjaxCall = false;

            self.utility.updateHash();
            self.getVariants();
        });
    },

    /**
     * Builds Ajax request
     * @param action PHP action name
     * @param data collection of data
     * @method buildRequest
     */
    buildRequest: function(action, data) {
        data['type'] = this.defaults.name; // append to every request, required by PHP

        // create an object with special settings for the hoplite
        var requestCollection = {};
        requestCollection[action] = new Backbone.Collection();
        requestCollection[action].add(data);

        // create an instance of phalanxProvider and use it inside hoplite
        var ajax = new phalanxProvider();
        ajax.objHoplite = {};
        ajax.objHoplite[this.get('name')] = this;

        ajax.call(requestCollection);
        storm.variants.fadeWrapper('out');
    },

    getVariants: function() {
        if ($('body').hasClass('js-is-variant')) {
            var wrapper = $('.js-variants-wrapper'),
                data = {
                    variants: {},
                    sku: wrapper.data('variant-sku'),
                },
                active = $('.js-variant-list .active a');

            // block multiple clicks
            // .is-blocked is removed automatically when content is updated
            // on server response
            wrapper.find('a').addClass('is-blocked');

            // spinner is replaced after the response
            $('.js-price-wrapper').html('<span class="c-spinner c-spinner--inner"></span>');

            active.each(function() {
                var group = $(this)
                    .parents('.js-variant-list')
                    .data('variant-group');

                data.variants[group] = $(this).data('variant-code');
            });

            this.buildRequest('get_variants', data);
        }
    },

    callback_getVariants: function(r) {
        var self = this;
        r = r.get_variants;

        if (typeof r.titleHtml === 'string') {
            $('.js-title-content-wrapper').replaceWith(r.titleHtml);
        }

        if (typeof r.variantHtml === 'string') {
            $('.js-variant-content-wrapper').replaceWith(r.variantHtml);
        }

        if (typeof r.basketHtml === 'string') {
            $('.js-variant-sidebar').replaceWith(r.basketHtml);
        }

        if (r.variantCode) {
            // spinner is replaced after the response
            $('.js-price-wrapper').html('<span class="c-spinner c-spinner--inner"></span>');

            $(document).trigger('getVariantPrice', [r.identifier, r.variantCode, 'product_detail']);
        }

        storm.variants.fadeWrapper('in');

        self.allowAjaxCall = true;

        // re init storm JS
        $('.js-slick-init:not(.slick-initialized)').slick();

        //stormTooltip.init();
        $(document).foundation();
    },
});
