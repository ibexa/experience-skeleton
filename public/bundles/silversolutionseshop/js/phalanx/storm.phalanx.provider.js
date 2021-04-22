/**
 Provider for the Phalanx system. Provider is responsible for sending data
 to the server and taking actions (by using callback) when there is a response
 from the server

 @requires storm.phalanx.actions, Backbonejs, jQuery
 @main Phalanx
 @extends phalanxController
 @author dho,mkr
 @class phalanxProvider
 */


var phalanxProvider = phalanxController.extend({
    /**
     *  hoplite name container
     *
     * @attribute hoplite
     * @default empty string
     * @type String
     */
    hoplite : '',

    /**
     * Set all parameters for Backbone.sync() and call syncData(). There are two
     * version of calling the server:
     * - partial : request / response for each TYPE separately
     * - full    : request / response all TYPEs at once
     *
     * By default full version is used. To use partial version you have to set
     * data-call-type="partial" to the same element where you have specified
     * data-call="TYPE"
     *
     * @method call
     * @param collection {Backbone Collection} dynamically created collection for each TYPE (hoplite)
     */
    call : function(collection) {
        var self = this;
        // Model for sycData parameters
        var params = new Backbone.Model;
        // get every TYPE separately if call-type = partial
        if ( $('[' + self.get('call-type') + ']').attr(self.get('call-type')) === 'partial' ) {
            _.each(collection, function(obj, type) {
                if (obj.length) {

                    self.hoplite = self.objHoplite[phalanxSettings[type]]; // assign hoplite

                    // sending data in correct format e.g: {"get_prices": [array]}
                    var data = {};
                    data[type.toString()] = obj;

                    if (self.hoplite) {
                        // setting parameters for syncData()

                        params.set({
                            syncMethod : self.hoplite.get('method') ? self.hoplite.get('method') : self.get('method'),
                            syncData : JSON.stringify(data),
                            syncUrl : self.hoplite.get('path') ? self.hoplite.get('path') : self.get('path'),
                            model : self,
                            type: type.toString(),
                            partial : true
                        });

                        // syncing data with params specified above for each TYPE separately
                        self.syncData(params);

                    } else {
                        s_d.l('phalanxController::call - Hoplite: ' + type + ' does not exists');
                    }
                } else {
                    s_d.l('phalanxController::call - Collection: ' + type + ' is empty. No action will perform');
                }
            });

        } else {
            // If call-type is empty or doesn't exists get all types as one request / response

            var path = "/_ajax_/phalanx";
            if (self.get('path') != undefined) {
                path = self.get('path');
            }

            params.set({
                syncMethod : self.get('method'),
                syncData : JSON.stringify(collection),
                syncUrl : path,
                model : self,
                type : '',
                partial : false
            });


            // syncing data with params specified for all TYPEs at once
            self.syncData(params);
        }
    },

    /**
     * call all before callbacks for the hoplites <strong style="color:red;">!OPEN!</strong>
     *
     * @beta
     * @method beforeSend
     * @param params {Object} !open!
     */
    beforeSend : function(params) {
        s_d.l('before test');

        /**
         * @todo
         * callback before we sent the data to the backend
         * What is todo:
         *  1. loop each hoplite used on a page
         *  2. check if this hoplite has a special on before callback
         *  3. use this callback to modify params
         *      3a) syncData -> string to object conversion?
         *      3b) merge syncData with data from callback
         *  4. merge existing params with these from callback _.extend()
         *  5. return what you have
         */

        // code examples that might help
        // params = ( _.extend({}, exisiting_params, {
        //         params_get_from_callback
        //     })
        // );
        // return params;
    },

    /**
     * Function responsible for syncing data with backend.
     *
     * @method syncData
     * @param params {Backbone Model} model contains:
     *  @param params.syncMethod {string} Backbone.sync method
     *  @param params.yncData {data object} data sent to the backend
     *  @param params.syncUrl {string} URL where data are send
     *  @param params.model {Backbone model} phalanxController instance
     *  @param params.type {string} dynamically created hoplite name by the parser
     *  @param params.partial {boolean} if true partial method of request / response data will perform
     **/
    syncData : function(params) {
        var self = this;

        /**
         * @todo - beforeSend function for the hoplites
         * params = model.beforeSend(params);
         */

        s_d.l('Data sent: ' + params.get('syncData'));

        /**
         * Backbone.sync() requires Model or Collection as a second parameter
         * var syncCollection = new Backbone.Collection - do we need this??
         *
         * read for reference: http://backbonejs.org/#Sync
         *
         * Second parameter (model) is our main Model (phalanxController).
         */

        // make sure JSON is serialized correctly when it's send to the server
        Backbone.emulateJSON =  true;

        var ses_request = { 'ses_request' : params.get('syncData') };

        // calling Backbone.sync() (Ajax)
        Backbone.sync(params.get('syncMethod'), self, {

            data    : _.extend(ses_request, self.getToken()),
            url     : params.get('syncUrl'),

            // we have the response from the server
            success : function(response) {
                // load callback(s) only for current TYPE
                if (params.get('partial')) {
                    self.hoplite = self.objHoplite[phalanxSettings[params.get('type')]];
                    self.loadCallback(params.get('model'), params.get('type'), response);
                } else {
                    // load callback(s) for each TYPE based on response, key is our TYPE
                    _.each(response, function(obj, type) {
                        /**
                         * Assign hoplite by TYPE
                         *
                         * It takes the hoplite name from the TYPE (action) specified in the
                         * storm.phalanx.actions.js file using phalanxSetting Object
                         */
                        self.hoplite = self.objHoplite[phalanxSettings[type]];

                        // if hoplite exists
                        if (self.hoplite) {
                            self.loadCallback(params.get('model'), type, response);
                        } else {
                            s_d.l('phalanxController::syncData - Hoplite: ' + type + ' does not exists');
                        }
                    });
                }
            },

            // There is something wrong with the response (backend error)
            error   : function(response) {
                // load controller error handler
                self.ajaxError(response);
            }
        });
    },

    /**
     * Fire each callback assigned to the hoplite
     *
     * This function can fire up two variants of callback(s):
     * 1. Specified in the HTML document by data-callback="" attribute
     * 2. Callback(s) specified directly in the hoplite (in the constructor by _.extend() defaults).
     *
     * When creating a custom callback name please follow these simple steps:
     *  1. First segment of function name must contain "callback" word
     *  2. Second segment of function name must contain TYPE name e.g. get_prices
     *  3. Third segment is up to you but please be short and descriptive
     *
     * EXAMPLE:
     * Let's consider you want to change background color for each container where
     * your price is loaded from the backed. We will use get_prices TYPE, so the
     * custom callback function name can be like this: callback_get_prices_bg, and
     * then in your hoplite you use this name like this:
     * callback_get_prices_bg : function() {
     *      $('.product_container').css('background-color', 'red');
     * }
     *
     * In most cases each callback needs data to work with so please make sure,
     * you pass the "response" from the server to your callback function.
     *
     * @param self {Backbone Model} instance of phalanxController
     * @param type {string} dynamically created hoplite from
     * @param response {JSON} data received from the backend
     * @method loadCallback
     */
    loadCallback: function(self, type, response) {
        // check if there is custom callback
        var callbacks = $('[' + self.get('callbacks') + ']').attr(self.get('callbacks'));
        // are there any callbacks?
        if ( _.size(callbacks) && callbacks.indexOf(',') ) {
            var callbacksList = callbacks.split(',');
        }

        // if there are some callbacks for our TYPE call each of them
        if ( _.size(callbacksList) && (callbacks.indexOf(type) !== -1) ) {
            // each custom callback
            _.each(callbacksList, function(callbackName) {
                if ( callbackName.replace(" ","").indexOf('callback_' + type.toString() + '_') !== -1 ) {
                    if ( _.isFunction(self.hoplite[callbackName]) ) {
                        self.hoplite[callbackName](response);
                    } else {
                        s_d.l('phalanxController::loadCallback - Callback: ' + callbackName + ' does not exists');
                    }
                }
            });
        } else {
            // if you defined a callback using this.defaults in your hoplite
            if( self.hoplite.get('callback_' + type) ) {
                if(_.isFunction(self.hoplite[self.hoplite.get('callback_' + type )])) {
                    self.hoplite[self.hoplite.get('callback_' + type)](response);
                }
            } else {
                /**
                 * Fire default callback, please.
                 * Default callback function name is "callback"
                 */
                self.hoplite.callback(response);
            }
        }
    }
});
