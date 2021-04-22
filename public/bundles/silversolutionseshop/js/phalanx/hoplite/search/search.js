/**
 Hoplite responsible for search actions

 @requires storm.phalanx.controller,  storm.phalanx.parser, storm.phalanx.provider, storm.phalanx.actions, backbonejs, jquery
 @author mkr

 @module Phalanx
 @main Phalanx
 @submodule Hoplite
 @extends phalanxController

 @class hopliteSearch
 */

var search = (search !== undefined) ? search : {};

search.utils = {
  init: function () {
    this.handleCheckboxState();
    this.filterList();
    this.registerClosedEvent();
    this.toggleGroupsVisibility();
  },

  reinit: function () {
    this.registerClosedEvent();
  },

  handleCheckboxState: function () {
    $(document).on('change', '.js-facets-box input[type="checkbox"]', function (e) {
      e.preventDefault();
      var elem = $(this);
      var box = elem.parents('.js-facets-box');
      var btn = box.find('.js-search-facets-btn-apply');
      var allSelected = true;

      if (box.find('.js-selected').length === box.find('.js-selected:checked').length) {
        btn.addClass('disabled').prop('disabled', true);
      } else {
        btn.removeClass('disabled').prop('disabled', false);
        allSelected = false;
      }

      if (allSelected) {
        if (box.find(':checked:not(".js-selected")').length > 0) {
          btn.removeClass('disabled').prop('disabled', false);
        } else {
          btn.addClass('disabled').prop('disabled', true);
        }
      }

    });
  },

  filterList: function () {
    $(document).on('keyup', '.js-search-facets-filter-field', function (e) {
      e.preventDefault();
      var elem = $(this);
      var itemsList = elem.parents('.js-facets-box').find('.js-search-facets-filter-item');
      var searchTerm = elem.val().toLowerCase();

      if (searchTerm.length > 0) {
        itemsList.addClass('hide').filter(function () {
          return $(this).text().toLowerCase().indexOf(searchTerm) != -1;
        }).removeClass('hide');
      } else {
        itemsList.removeClass('hide');
      }
    });
  },

  registerClosedEvent: function () {
    $('.js-facets-box').on('closed.fndtn.dropdown', function () {
      $(this).find('.js-search-facets-btn-apply').click();
    })
  },

  toggleGroupsVisibility: function () {
    $(document).on('click', '.js-search-facets-groups-toggler', function (e) {
      e.preventDefault();
      var elem = $(this);
      var swap = $.trim(elem.data('text-swap'));
      var formField = $('.js-search-facet-show');
      var formVal = 1;
      var wrapper = $('.js-search-facets-groups-wrapper');

      elem
        .data('text-swap', $.trim(elem.text()))
        .text($.trim(swap));

      if (wrapper.hasClass('hide')) {
        wrapper.removeClass('hide');
      } else {
        wrapper.addClass('hide');
        formVal = 0;
      }

      formField.val(formVal);
      search.utils.setHashOnTab($('.js-search-form').serialize());
    });
  },

  deselectItem: function (item, form) {
    var facet = item.data('facet');
    // escape : with \\: to make the selector work in jQuery
    form.find('#' + facet.replace(/(:)/g, "\\$1")).prop('checked', false);
  },

  resetPagination: function () {
    $('.js-search-pagination-field').val(1);
  },

  setHashOnTab: function (hash) {
    $('.js-search-tab.active')
      .children('a')
      .data('hash', hash)
      .addClass('js-search-facets-is-saved');
  }

};

var hopliteSearch = phalanxController.extend ({

  form: $('.js-search-form'),

  /**
   * constructor is triggered automatically when new instance of hoplite is created
   *
   * @method constructor
   */
  constructor: function () {
    var self = this;
    var hash = window.location.hash.substr(1);

    // extend defaults Controller settings
    this.defaults = _.extend({}, this.defaults, {
      callback_get_search_result: 'callback_getSearchResults', // callback name for get_results TYPE
      name: 'search'                                           // hoplite name
    });

    Backbone.Model.apply(this, arguments);

    /* Actions section */

    search.utils.init();

    self.form.on('submit', function (e) {
      e.preventDefault();
      var form = $(this);

      // remove duplicates from query
      //var unique = _.unique(form.serializeArray(), 'name');
      var unique = _.unique($('.js-search-form').serializeArray(), 'name');

      // removes all ses_basket - don't need them in search query
      unique = $.grep(unique, function (obj) {
        var uniqueName = obj.name;
        return !(uniqueName.indexOf('ses_basket') != -1)
      });

      // serialize cleaned-up object
      var serialized = $.param(_.object(_.pluck(unique, 'name'), _.pluck(unique, 'value')));

      if (hash !== serialized) {
        search.utils.setHashOnTab(serialized);
        window.location.hash = serialized;
      }
    });

    // tab click
    $(document).on('click', '.js-search-tab:not(".active")', function (e) {
      e.preventDefault();
      var elem = $(this);
      var hash = elem.children().data('hash');

      $('.js-search-tab').removeClass('active');
      $('.js-search-group-active').val(elem.data('group'));
      elem.addClass('active');

      search.utils.resetPagination();

      if (hash) {
        window.location.hash = hash;
      } else {
        self.form.submit();
      }

    });

    // Form submit
    $(document).on('click', '.js-search-form-btn-submit', function (e) {
      e.preventDefault();
      search.utils.resetPagination();
      self.form.submit();
    });

    // Apply button
    $(document).on('click', '.js-search-facets-btn-apply', function (e) {
      e.preventDefault();search.utils.resetPagination();
      self.form.submit();
    });

    // Active filter click
    $(document).on('click', '.js-search-facets-remove-all', function (e) {
      e.preventDefault();
      search.utils.resetPagination();
      $('.js-search-form').find(':checked').prop('checked', false);
      self.form.submit();
    });

    $(document).on('click', '.js-search-facets-remove', function (e) {
      e.preventDefault();
      search.utils.resetPagination();
      search.utils.deselectItem($(this), $('.js-search-form'));
      self.form.submit();
    });

    // remove a group of active filter
    $(document).on('click', '.js-search-facets-active-group-remove', function () {
      search.utils.resetPagination();

      $(this).parents('.js-search-facets-active-group').find('.js-search-facets-remove').each(function () {
        search.utils.deselectItem($(this), $('.js-search-form'));
      });

      self.form.submit();
    });

    // Radio button
    $(document).on('change', '.js-facets-box input[type="radio"]', function (e) {
      e.preventDefault();
      search.utils.resetPagination();
      self.form.submit();
    });

    // Facet button apply
    $(document).on('click', '.js-search-facet-btn-apply', function (e) {
      e.preventDefault();
      search.utils.resetPagination();
      self.form.submit();
    });

    // Pagination handling
    $(document).on('click', '.js-search-pagination a', function (e) {
      e.preventDefault();
      $('.js-search-pagination-field').val($.trim($(this).data('page')));
      self.form.submit();
    });

    // Select box (dropdown) handling
    $(document).on('change', '.js-search-select-box', function (e) {
      e.preventDefault();

      // sync top and bottom
      var elem = $(this);
      var value = elem.val();
      var name = elem.attr('name');
      $('[name="' + name + '"]').val(value)

      search.utils.resetPagination();
      self.form.submit();
    });

    // on page load if hash => trigger search
    if (hash) {
      self.getSearchResults(hash);
    }

    // Start filtering on hash change
    $(window).on('hashchange', function () {
      // if hash is there take the hash, if not take the query string
      hash = window.location.hash.substr(1).length > 0 ? window.location.hash.substr(1) : window.location.search.substr(1);

      // in categories there is a use case when there is no hash nor query string
      // this means there are no params and we need to reload the page to get the category entry page
      if (hash) {
        self.getSearchResults(hash);
      } else {
        document.location.reload();
      }
    });

  },

  /**
   * Builds Ajax request
   *
   * @param action - reflects action name in PHP controller
   * @param data - collection of data
   *
   * @method buildRequest
   */
  buildRequest: function (action, data) {
    if ($('body').hasClass('js-is-search')) {
      storm.spinner.show({
        target: '.js-search-content',
        css: 'c-spinner--contained',
        position: 'middle',
        source: '.js-search-content'
      });

      data['type'] = 'search'; // append to every request, required by PHP

      // create an object with special settings for the hoplite
      var requestCollection = {};
      requestCollection[action] = new Backbone.Collection;
      requestCollection[action].add(data);

      // create an instance of phalanxProvider and use it inside hoplite
      var ajax = new phalanxProvider;
      ajax.objHoplite = {};
      ajax.objHoplite[this.get('name')] = this;
      ajax.call(requestCollection);
    }
  },

  /**
   * Request a result based on set params in the form
   *
   * 1. Data sent to the server
   *    - form [required] - serialized form data
   * 2. On server response call the callback_get_search_results (callback_getSearchResults())
   *
   * TYPE: get_search_results
   *
   * @method getSearchResults
   */
  getSearchResults: function (query) {
    this.buildRequest('get_search_result', {
      'form': query
    });
  },

  callback_getSearchResults: function (response) {
    response = response.get_search_result;
    // cache all values
    var values = {}, counters = {};
    $('.js-search-facets-is-saved').each(function () {
      values[$(this).parent().data('group')] = $(this).data('hash');
    });

    $('.js-search-tab').each(function () {
      var elem = $(this);
      counters[elem.data('group')] = $(this).data('count')
    });

    // replace with new content
    $('.js-search-query').replaceWith(response.queryHtml);
    $('.js-search-groups').replaceWith(response.groupsHtml);
    $('.js-search-facets').replaceWith(response.facetsHtml);
    $('.js-search-filters').replaceWith(response.filtersHtml);
    $('.js-search-results').replaceWith(response.resultsHtml);

    if (!$('body').hasClass('js-is-search-catalog')) {
      $('.js-search-query-top').val(response.formData.query);
    }

    // if we have only one tab make sure we set the class .js-is-current to make it possible update the counter
    var counterField = $('.js-search-facets-counter');
    if ( counterField.length === 1 ) {
      counterField.addClass('js-is-current');
    };

    // current counter
    $('.js-search-facets-counter.js-is-current')
      .text(response.count)
      .parents('.js-search-tab').addClass('js-changed').attr('data-count', response.count);

    // fill-out with cached counters
    $.each(counters, function(key, val) {
      $('.js-search-tab[data-group="' + key + '"]:not(".js-changed")')
        .attr('data-count', val)
        .find('.js-search-facets-counter').text(val);
    });


    // fill-out with cached values
    $.each(values, function(key, val) {
      $('.js-search-tab[data-group="' + key + '"]')
        .find('a')
        .addClass('js-search-facets-is-saved')
        .data('hash', val);
    });

    storm.spinner.hide();
    $(document).foundation();

    // list view is active
    if (response.formData.grid_view === '0') {
      $('.js-switch-list-style.dimmed').first().click();
    }

    search.utils.reinit();

    storm.scrollTo('.js-search-form');

    $(document).trigger('getSearchResult', [response]);
  }
});
