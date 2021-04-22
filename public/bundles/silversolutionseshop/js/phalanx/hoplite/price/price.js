/**
 Hoplite responsible for getting the price

 @requires storm.phalanx.controller, storm.phalanx.parser, storm.phalanx.provider, storm.phalanx.actions, backbonejs, jquery
 @author dho, mkr

 @module Phalanx
 @main Phalanx
 @submodule Hoplite
 @extends phalanxController

 @author dho, mkr
 @class hoplitePrice
 */

var hoplitePrice = phalanxController.extend({
  /**
   * constructor is triggered automatically when new instance of hoplite is created
   *
   * @method constructor
   */
  constructor: function () {
    // extend defaults Controller settings
    var self = this;
    this.defaults = $.extend({}, this.defaults, {
      callback_get_price: 'callback_getPrice', // callback name for price TYPE
      name: 'price' // hoplite name
      //path : $('body').data('phalanx-url')
    });
    Backbone.Model.apply(this, arguments);

    $(document).on('getVariantPrice', function (event, identifier, variantCode, priceEngineContextId) {
      self.getPrice(identifier, variantCode, priceEngineContextId);
    });
  },

  getPrice: function (identifier, variantCode, priceEngineContextId) {
    storm.spinner.show({'target': '.js-price-wrapper', 'css': 'c-spinner--inner text-left'});

    // create an object with special settings for the hoplite
    var requestCollection = {};
    requestCollection['get_price'] = new Backbone.Collection;
    requestCollection['get_price'].add({
      'identifier': identifier,
      'variantCode': variantCode,
      'priceEngineContextId': priceEngineContextId,
      'type': 'catalog'
    });

    // create an instance of phalanxProvider and use it inside hoplite
    var ajax = new phalanxProvider;
    ajax.objHoplite = {};
    ajax.objHoplite[this.get('name')] = this;
    ajax.call(requestCollection);
  },

  callback_getPrice: function (r) {
    r = r.get_price;
    if (r.priceHtml) {
      $('.js-price-wrapper').replaceWith(r.priceHtml);
    }
  }
});

