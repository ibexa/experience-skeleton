/**
    @requires storm.phalanx.controller, storm.phalanx.actions, storm.phalanx.provider, backbonejs, jquery
    @main Phalanx
    @extends phalanxController
    @author dho, mkr
    @class phalanxParser
 */

var phalanxParser = phalanxController.extend({
    // object for Collections
    /**
      Collection of all founded ajax events

      @type    Object
      @default new Object

     * */
    objCollection : new Object,
    
    //
    /**
     * init function, start the parser
     *
     * @method init
     * */
    init: function() {
        this.parser();
    },    

    /**
     * This function is responsible for parsing a page (HTML document). Parser 
     * is searching for custom data-* attributes inside HTML document and 
     * collects them using helper functions.
     * 
     * When all data is collected and parser knows which hoplite is using
     * these data it creates an instance of the phalanxProvider.
     *
     * @method parser
     * @private
     *
     */
    parser: function() {
        var self = this;
        $.each($('[' + self.get('call-element') + ']'),function() {
            var data_call = $(this).attr(self.get('call-element'));
            var ele = this;
            if(data_call.indexOf(',')) {
                var calls = data_call.split(',');
            } else {
                var calls = {
                    0 : data_call
                };
            }
            
            /** 
             * Create object collections for each TYPE (hoplite) with settings
             * specific for each hoplite.
             * 
             * @param calls {string} list of TYPEs
             * @param type {string}  single TYPE
             */           
            _.each(calls, function(type) {
                // remove space(s) from TYPE name e.g " price"
                type = type.replace(" ", ""); 
                // each TYPE is a Backbone Collection
                self.objCollection[type] = new Backbone.Collection;
                // collect values for the TYPE and add them to our Collection
                self.objCollection[type].add(self.collectValues(type, ele));
            });
        });
        
        // if there are any collections fire up the phalanxProvider
        if(_.size(this.objCollection)) {
            // create an instance of phalanxProvider
            var ajax = new phalanxProvider;
            ajax.objHoplite = this.objHoplite;
            // send our Collections to the provider and use call() function
            ajax.call(this.objCollection);
        } else {            
            s_d.l('phalanxParser::parser - nothing todo');
        }
    },

    /**
     * Collect values for parser from HTML document settings by custom data-*
     * attributes. Each function call collects values for a specific TYPE.
     *
     * @method collectValues
     * @private
     *
     * @param type {string} TYPE from the hoplite
     * @param ele {jQuery object} HTML element as jQuery object
     * 
     * @returns elements {Array} collected elements
     */
    collectValues: function(type, ele) {
        var self = this;
        var attr = this.get('call-element') + '-' + type;               
        var elements = new Array();
        // loop each data-call_TYPE and collect values
        $.each($('[' + attr + ']', ele), function(key, sub_ele) {
            elements = self.collectAttrValues(sub_ele, attr, elements);
        });
        return elements;
    },
    
    /**
     * This is like a sub function for the collectValues() function. It is a
     * separate function so that it's more flexible. In some cases we might
     * want to collect values only for a specific element on a page.
     *
     * @method collectAttrValues
     * @private
     *
     * @param sub_ele {jQuery Object} children element 
     * @param attr {string} custom data-* attribute name
     * @param elements {array} empty array for elements 
     * 
     * @returns elements {Array} collected elements
     */
    collectAttrValues : function(sub_ele, attr, elements) {
        /**
         * Split multiple values into parts. Each part is a single pair 
         * of key:value. 
         * 
         * Before split:
         * id:'6';color:'red';...
         * 
         * After split:
         * id:'6'
         * color:'red'
         */
        var parts = $(sub_ele).attr(attr).split(';');
        var obj = new Object;
        _.each(parts, function(part) {
            if (part.length) {
                /**
                * Split part into into single element.
                * 
                * Before split:
                * id:'6';
                * 
                * After split:
                * id - this is the key
                * 6  - this is the value              
                */
                var value = part.split(':');
                // directly passed value starts with apostrophes '
                if (value[1].charAt(0) === "'") {
                    // remove apostrophes from value
                    obj[value[0]] = value[1].replace(/'/g, "");                     
                    
                // if not direct get value from custom data- attribute
                } else {
                    obj[value[0]] = $(sub_ele).attr(value[1]);
                }
                // add key:value to the Array
                elements.push(obj);
            }
        });
        // return Array of elements
        return elements;
    }
});