/**
 Hoplite responsible for list actions

 @requires storm.phalanx.controller, storm.phalanx.parser, storm.phalanx.provider, storm.phalanx.actions, backbonejs, jquery.visible, jquery
 @author dho, mkr

 @module Phalanx
 @main Phalanx
 @submodule Hoplite
 @extends phalanxController

 @author dho, mkr
 @class hopliteList
 */

var hopliteList = phalanxController.extend({
  /**
   * empty object for additional settings
   * @attribute list_load_settings {object}
   */
  list_load_settings: {},

  /**
   * more records wrapper
   * We use this wrapper as our flag to load more items on the list
   * @attribute moreRecords {jQuery Object}
   */
  moreRecords: $('.js-more-records'),

  /**
   * constructor is triggered automatically when new instance of hoplite is created
   *
   * @method constructor
   */
  constructor: function () {
    var self = this;

    // extend defaults Controller settings
    this.defaults = $.extend({}, this.defaults, {
      callback_load_list: 'callback_loadAfter', // callback name for load_list TYPE
      name: 'list',               // hoplite name
      method: 'read'                // send via GET for caching
    });

    Backbone.Model.apply(this, arguments);

    /* Actions section */

    // Click on .js-more-records fires loadList() function
    self.moreRecords.on('click', function (e) {
      e.preventDefault();
      if (self.moreRecords.length > 0) {
        self.loadList();
      }
    });

    // On window scroll down action fires loadList() function
    $(window).on('scroll', function () {
      // load until .js-more-records is visible
      if (self.moreRecords.is(':visible') && !self.moreRecords.hasClass('is-loading')) {
        if (self.moreRecords.visible()) {
          self.loadList();
          self.moreRecords.addClass('is-loading');
        }
      }
    });
  },

  /**
   * Load list actions
   *
   * 1. Data sent to the server
   *    - limit  (required)  - number of item to get (default is 6)
   *    - offset (required)  - start loading from (number of visible elements)
   *    - type   (required?) - type of data we want to get e.g (products, news, etc)
   *
   *    List of these settings is flexible, which means you can send to the
   *    backend number of different settings that are needed. All you need to do
   *    is to setup custom data-* attribute in your HTML like so:
   *    data-call-load_list="type:'products';limit:'3';color:'red';size:'big';etc....
   *
   * 2. On server response call the callback_load_list (callback_loadAfter())
   *
   * TYPE: load_list
   *
   * @method loadList
   *
   */
  loadList: function () {
    // show loading icon
    this.moreRecords.find('img').removeClass('hide');

    if (this.moreRecords.length > 0) {
      /**
       * @todo
       * in case of additional settings (e.g. facets filter) we need to
       * update the custom data attribute value
       * example:
       if(FACETTS) {
                    $('.js-more-records').attr('data-call-load_list="TYPE... LIMIT:... FACETS"')
                }
       */

      /**
       * Create and instance of the parser and use collectAttrValues
       * to get extra settings list
       *
       * This will take all the values from data-call_load-list for example:
       * data-call-load_list="type:'products';limit:'3';color:'red';size:'big';etc....
       */
      var parser = new phalanxParser;
      var elements = new Array;
      elements = parser.collectAttrValues('.js-more-records', 'data-call-load_list', elements);
      this.list_load_settings = elements[0];
    }

    // create an object for the hoplite
    var requestCollection = new Object;
    requestCollection['load_list'] = new Backbone.Collection;

    // merge together default and additional settings
    requestCollection['load_list'].add(_.extend({}, this.list_load_settings, {
      'offset': $('.js-card-list-wrapper > .js-add-to-basket-parent').length
    }));

    // create an instance of phalanxProvider and make an ajax call
    var ajax = new phalanxProvider;
    this.defaults.method = 'read';
    ajax.objHoplite[this.get('name')] = this;
    ajax.call(requestCollection);
  },

  /**
   * Default callback for this hoplite.
   * This callback is NOT used when custom is called
   *
   * @param response {JSON} data received from backed
   */
  /**
   * Callback for the addBasket function()
   *
   * On server response:
   * 1. Append list of returned items
   * 2. Hide loading icon
   *
   * Response form the server requires:
   * 1. List of items we requested for using our settings
   *
   * TYPE: load_list
   *
   * @method callback_loadAfter
   * @param response {JSON} data received from backend
   */
  callback_loadAfter: function (response) {
    var wrapper = $('.js-card-list-wrapper');
    response = response.load_list;

    this.moreRecords.removeClass('is-loading');

    if (response.list.length > 0) {
      // insert returned data at the end of the list
      wrapper.append(response.list);
    }
    // hide loading icon
    this.moreRecords.find('img').addClass('hide');

    if (response.lastPage) {
      this.moreRecords.addClass('hide');
    } else {
      this.moreRecords.removeClass('hide');
    }

    // setting the grid

    storm.setEqualizerFields($('.js-switch-list-style:not(".dimmed")').first().data('view-type'));

    // get settings from the first element in the list
    var settings = [];
    wrapper.find('.js-add-to-basket-parent:first .columns').each(function (index) {
      settings[index] = [($(this).attr('class')), $(this).data('grid-settings')];
    });

    // loop over each item and each column inside the item
    wrapper.find('.js-add-to-basket-parent').each(function () {

      $(this).find('.columns').each(function (index) {
        $(this).attr('class', settings[index][0]);
        if (settings[index][1] !== 'undefined') {
          $(this).data('grid-settings', settings[index][1]);
        }
      });
    });

    // re-init foundation
    $(document).foundation();
  }
});
