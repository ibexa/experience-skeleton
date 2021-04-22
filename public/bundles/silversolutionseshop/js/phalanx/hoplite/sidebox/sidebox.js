/**
 Hoplite responsible for list actions

 @requires phalanxController, storm.phalanx.controller, storm.phalanx.parser, storm.phalanx.provider, storm.phalanx.actions, backbonejs, jquery
 @author dho, mkr

 @module Phalanx
 @main Phalanx
 @submodule Hoplite
 @extends phalanxController

 @author dho, mkr
 @class hopliteSidebox
 */

var hopliteSidebox = phalanxController.extend({
    /**
     * constructor is triggered automatically when new instance of hoplite is created
     *
     * @method constructor
     */
    constructor: function() {
        // extend defaults Controller settings
        this.defaults = $.extend({}, this.defaults, {
            'port' : '1337',
            //'path' : $('body').data('phalanx-url'),
            'name' : 'sidebox' // type (hoplite)
        });
        Backbone.Model.apply(this, arguments);

//        if (this.get('port') == '1337' && this.get('data-type') != 'jsonp') {
//            s_d.l('You have to use jsonp dataType loading data from another domain. Please use jsonp as dataType.');
//            return false;
//        }
    },

    /**
     * Default callback for this hoplite.
     * This callback is NOT used when you specify to load a custom callback
     *
     * @param response {JSON} data received from backend
     * @method callback
     */
    callback: function(response) {
        _.each(response.get_sidebox, function(data, id) {
            $('.banner[data-item-id=' + id +']').append(data.content);
        });
    }
});