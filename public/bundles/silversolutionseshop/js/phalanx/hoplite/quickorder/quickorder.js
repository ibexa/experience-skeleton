/**
 Hoplite responsible for getting the price

 @requires storm.phalanx.controller, storm.phalanx.parser, storm.phalanx.provider, storm.phalanx.actions, backbonejs, jquery
 @author mkr, azh

 @module Phalanx
 @main Phalanx
 @submodule Hoplite
 @extends phalanxController

 @author mkr, azh
 @class hopliteQuickorder
 */

var hopliteQuickorder = phalanxController.extend({
    /**
     * constructor is triggered automatically when new instance of hoplite is created
     *
     * @method constructor
     */
    constructor: function() {
        // extend defaults Controller settings
        var self = this;

        this.defaults = $.extend({}, this.defaults, {
            callback_get_line: 'callback_getLine', // callback name for get_line TYPE
            name : 'quickorder' // hoplite name
        });
        Backbone.Model.apply(this, arguments);

        $(document).on('getQuickorderLine', function(event, sku, name){
            // only if not empty sku
            if (sku)  {
                var data = {
                    'sku' : sku,
                    'name' : name
                };

                self.buildRequest('get_line', data);
            }
        });

        // trigger only if there is no suggestion from autosuggest and users leaves the sku field
        $(document).on('blur', '.js-row-sku input.is-empty', function(e) {
            e.preventDefault();
            var elem = $(this);
            var sku = elem.val();
            var name = elem.attr('name');

            // only if not empty sku
            if (sku)  {
                var data = {
                    'sku' : sku,
                    'name' : name
                };

                self.buildRequest('get_line', data);
            }
        });
    },

    /**
     * Builds Ajax request
     * @param action PHP action name
     * @param data collection of data
     * @method buildRequest
     */
    buildRequest: function(action, data) {

        data['type'] = 'quickorder'; // append to every request, required by PHP

        // create an object with special settings for the hoplite
        var requestCollection = {};
        requestCollection[action] = new Backbone.Collection;
        requestCollection[action].add(data);


        // create an instance of phalanxProvider and use it inside hoplite
        var ajax = new phalanxProvider;
        ajax.objHoplite = {};
        ajax.objHoplite[this.get('name')] = this;

        ajax.call(requestCollection);
    },

    callback_getLine: function (response) {
        response = response.get_line;

        //on error remove all is-empty classes
        if(response.message_type == 'error') {
            $('.is-empty').removeClass('is-empty');
        } else {
            var input = $('.js-row-sku input[name="' + response.name + '"]');
            var row = input.parents('.js-row-wrapper');

            row.replaceWith(response.htmlLine);
        }

        autocompleteQuickorder();
    }
});
