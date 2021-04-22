/**
 * Main controller for the Phalanx system
 *
 * @requires Backbonejs, underscore.js
 *
 * @author dho, mkr
 *
 * @class phalanxController
 * @module Phalanx
 * @extensionfor Backbone.Model
 *
 */

var phalanxController = Backbone.Model.extend({
    // Object container for hoplites
    /**
     * object for all installed hoplites
     *
     * @attribute objHoplite
     * @default new Object
     * @type Object
     * @required
     *
     * */
    objHoplite : {},


    /**
     * Default settings used in the whole project
     * <ul>
     *  <li>call-element: {string} attribute that holds list of hoplites</li>
     *  <li>call-type {string} attribute that holds data for a call type: partial or full which is default</li>
     *  <li>callbacks: {string} attribute that holds list of custom callbacks inside hoplites</li>
     *  <li>path: {string} Ajax for where data are send</li>
     *  <li>method:  {string} Backbone.sync method : (read, create, update, delete)</li>
     *  </ul>
     *
     *  You can override or extend (add new) these settings in every instance
     *  of phalanxController (e.g. inside hoplites)
     *
     * @attribute defaults {Object}
     * @type Object
     *
     * */

    defaults: {
        'call-element'  : 'data-call',
        'call-type'     : 'data-call-type',  
        'callbacks'     : 'data-callbacks',  
        'path'          : $('body').data('phalanx-url'),
        'method'        : 'create',
        'data-type'     : 'json',
        'port'          : ''
    },

    /**
     * an error handler when nothing is returned from backed
     *
     * @method ajaxError
     *
     * */
    ajaxError : function(response) {
        /**
         * @todo Harmony Team
         * If there is a problem with the response from the server send info
         * about it to admin via email with details that helps to solve the problem
         */ 
        s_d.l('Ajax error');
        s_d.l('responseText: ' + response.responseText);
        s_d.l('status: ' + response.status);
        s_d.l('statusText: ' + response.statusText);
    },

    /**
     * get Token for eZ Publish add in your body tag
     * 
     * data-token="YOUR TOKEN"
     *
     * @method getToken
     * @beta
     * @return {object} ezxform_token : token
     *
     * */
    getToken : function() {

        var token = $('body').data('token');
        if(token) {
            return {'ezxform_token' : token };
        }
        return {};

    }
});