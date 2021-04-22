/**
    Document        : example
    Author          : mkr
    Dependencies    : storm.phalanx.controller
    Requirements    : storm.phalanx.parser, storm.phalanx.provider, storm.phalanx.actions, backbonejs, jquery
    Description:
        Hoplite example
        Please use it as a basic structure for you hoplite.

    Functions short description:
        callback                     : short description
        callback_YOUR_HOPLITE_extend : short description



    IMPORTANT: DON'T forget to include your hoplite into the assets/plugins.loader.js and add an instance in storm.phlalanx.actions.js
               like this:

                var phalanxSettings = {
                    'YOU_TYPE' : 'YOUR_HOBLITE_NAME',
                };
                phalanxInit.objHoplite['list'] = new hopliteList;


    for more information please read the documentation!

 */

var hopliteYOUR_HOPLITE = phalanxController.extend({
    // constructor is triggered automatically when new instance of hoplite is created
    constructor: function() {
        // extend defaults Controller settings
        this.defaults = $.extend({}, this.defaults, {
            name : 'YOUR_HOPLITE' // hoplite name
        });
        Backbone.Model.apply(this, arguments);
    },

    /**
     * Default callback for this hoplite.
     * This callback is NOT used when you specify to load a custom callback
     *
     * On server response:
     * 1. Do this
     * 2. And that
     * 3. And also this
     *
     * Response form the server requires:
     * 1. some data
     * 2. some message
     * 3. something else
     *
     * TYPE: YOUR_HOPLITE
     *
     * @param response {JSON} data received from backend
     */
    callback: function(response) {
        // callback actions e.g. populate returned data among fields
    },

    /**
     * Custom callback example for this hoplite
     *
     * On server response:
     * 1. Do this
     * 2. And that
     * 3. And also this
     *
     * Response form the server requires:
     * 1. some data
     * 2. some message
     * 3. something else
     *
     * TYPE: YOUR_HOPLITE
     *
     * @param response {JSON} data received from backend
     */
    callback_YOUR_HOPLITE_extend : function(response) {
        // callback actions
    }
});