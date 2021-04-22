/**
 * Main class for Storm Comparison
 *
 * @requires jQuery, Phalanx core
 *
 * @author tja, mkr
 *
 * @class comparison
 * @module Comparison
 */

var comparison = {

  /**
   * Helpers
   */
  utils: {

    initSortable: function () {

      var self = this;

      $('.sortable-list-group .sortable-group').each(function () {
        var wrapper = $(this);

        // init slider
        self.initSlider(wrapper);

        // sortable
        var sortEnable = $('.box-left').data('sort-enable'),
          basketID = wrapper.data('basket-id');

        Sortable.create(this, {
          draggable: '.sortable-list-group-item',
          handle: '.sortable-handle',
          animation: 150,
          onUpdate: function () {
            var sortOrder = [];
            $('#basket-id-' + basketID + ' .sortable-list-group-item').each(function () {
              sortOrder.push($(this).data('basket-line-id'));
            });

            if (sortEnable) {
              $(document).trigger('sortBasket', [basketID, sortOrder]);
            }
          }
        });

      });
    },

    initSlider: function (wrapper) {
      wrapper.removeAttr('style'); // reset inline styling
      wrapper.prev().addClass('hide'); // hide pagination

      var itemsVisible = 3;

      // each column width
      this.setColumnWidth(wrapper, itemsVisible);

      // slider
      if (wrapper.children().length > itemsVisible) {
        // slider
        var self = this,
          currOffset = 0,
          item = wrapper.find('.sortable-list-group-item'),
          items = item.length,
          itemWidth = item.outerWidth(),
          itemsWidth = parseInt(items * itemWidth),
          prev = wrapper.parent().find('.prev').off('click'),
          next = wrapper.parent().find('.next').off('click'),
          maxOffset = (itemsWidth - (itemsVisible * itemWidth));

        self.calculatePageRange(itemsWidth, currOffset, itemWidth, items);

        // columns wrapper width
        wrapper.prev().removeClass('hide');

        next.on('click', function (e) {
          e.preventDefault();

          if (!wrapper.is(':animated')) {
            wrapper.animate({
              marginLeft: currOffset < maxOffset ? '-=' + itemWidth : 0
            }, 300, function () {
              currOffset = Math.abs(parseInt(wrapper.css('margin-left')));
              self.calculatePageRange(itemsWidth, currOffset, itemWidth, items);
            });
          }
        });

        prev.on('click', function (e) {
          e.preventDefault();

          if (!wrapper.is(':animated')) {
            var marginLeft = 0;

            if (currOffset === 0) {
              marginLeft = '-=' + (items - itemsVisible) * itemWidth;
            } else if (currOffset === maxOffset) {
              marginLeft = '-' + (currOffset - itemWidth);
            } else if (currOffset < maxOffset) {
              marginLeft = '+=' + itemWidth;
            }

            wrapper.animate({
              marginLeft: marginLeft
            }, 300, function () {
              currOffset = Math.abs(parseInt(wrapper.css('margin-left')));
              self.calculatePageRange(itemsWidth, currOffset, itemWidth, items);
            });
          }
        });

      }
    },

    /**
     * Updates the slider range numbers and total number of slides
     *
     * @param itemsWidth - all items width in pixels
     * @param currOffset - current offset slider in pixels (negative margin)
     * @param itemWidth - single item width in pixels
     * @param items - total number of items
     */
    calculatePageRange: function (itemsWidth, currOffset, itemWidth, items) {
      var count = (itemsWidth - currOffset) / itemWidth,
        diff = items - count;

      $('.js-slide-count-from').text(diff + 1);
      $('.js-slide-count-to').text(diff + 3);
      $('.js-slide-count-total').text('/' + items);
    },

    /**
     * Sets width for each column
     *
     * @param wrapper - main wraperr
     * @param itemsVisible - number of visible items
       */
    setColumnWidth: function (wrapper, itemsVisible) {
      // set max possible width to the wrapper
      wrapper.width(1342177);
      // values columns
      var item = wrapper.find('.sortable-list-group-item:first');
      var padding = parseInt(item.css('padding-left')) + parseInt(item.css('padding-right'));
      var itemWidth = parseInt(wrapper.parents('.sortable-list-group').outerWidth() / itemsVisible) - padding;

      wrapper.find('.sortable-list-group-item').width(itemWidth);

      // attributes column
      var heights = [
        $('.drag-item').outerHeight(true),
        $('.element-info').outerHeight(true),
        $('.box-elements').prev('h1').outerHeight(true)
      ];

      var height = heights.reduce(function (a, b) {
        return a + b;
      });

      $('.box-left').find('.box').height(height);
    },

    /**
     * Gives an odd class name to odd rows to make stripes easier to style
     */
    stripeMe: function () {
      $('.element-list').each(function () {
        $(this).find('li:not(".hide")').each(function (index, row) {
          var r = $(row);
          r.removeClass('odd');
          if (index % 2 == 1) { //odd row
            r.addClass('odd');
          }
        });
      });
    },
    getHash: function() {
      return window.location.hash.substring(1).split("|")[0];
    },
    getUniqeFlag: function() {
      return window.location.hash.substring(1).split("|")[1];
    },
    showHideLines: function() {
      var self = this;
      $('.box-attributes .attribute-collapsed').toggleClass('hide');
      $('.elements .attribute-collapsed').toggleClass('hide');

      // hiding whole group
      $('.box-attributes .element-list').each(function () {
        var parent = $(this).parent();
        var elems = $('.elements').find('[data-accordion-id="' + parent.data('accordion-id') + '"]');
        parent.removeClass('hide');
        elems.removeClass('hide');

        if ($(this).find('li').length === $(this).find('li.hide').length) {
          parent.addClass('hide');
          elems.addClass('hide');
        }

        self.stripeMe();

      });
    },
    handleTriggerState: function(elem) {
      elem.toggleClass('js-show-unique');
      elem.find('i').toggleClass('fa-toggle-on fa-toggle-off');

      // text swap
      var swap = elem.data('text-swap');
      var text = elem.find('span').text();
      elem.data('text-swap', text).find('span').text(swap);
    }
  },

  /**
   Main events handler:
   @method init
   */
  init: function () {

    var self = this;

    self.utils.initSortable();

    $(window).resize(function () {
      self.utils.initSortable();
    });

    $('.js-action-print').on('click', function () {
      window.print();
    });

    // tab click event
    $('.js-comparison-tabs li a').on('click', function (e) {
      e.preventDefault();
      var tab = $(this).data('tab');
      var parent = $('.box-elements #basket-id-' + tab);

      $('.js-comparison-tabs li').removeClass('active');
      // setting active tab
      $(this).parent().addClass('active');

      // change 3 boxes (your-list, content, attributes)
      $('.js-action-list .js-actions, .attributes-list .attributes').addClass('hide');
      $('.box-elements .elements').addClass('hide');
      $('.box-elements .box-elements-header').addClass('hide');

      // show the boxes we clicked for
      $('.js-action-list #actions-' + tab).removeClass('hide');
      $('.attributes-list #attributes-' + tab).removeClass('hide');
      parent.removeClass('hide');
      parent.parent().find('.box-elements-header').removeClass('hide');

      var flag = $('.js-attributes-trigger').hasClass('js-show-unique') ? '1' : '0';
      window.location.hash = $(this).attr('href').substring(1) + "|" + flag;
      $('.js-link-language-switcher').each(function () {
        var link = $(this);
        var href = link.attr('href');
        href = href.replace(/&hash_string=(.*$)/g,'');
        link.attr('href', href + '&hash_string=' + window.location.hash.substr(1));
      });

      self.utils.initSlider(parent);
    });

    // accordion
    $('.js-compare-accordion-trigger').on('click', function () {
      var id = $(this).parent().toggleClass('collapsed').data('accordion-id');

      $('[data-accordion-id="' + id + '"]').find('ul').toggleClass('hide');
    });

    $('.js-attributes-trigger').on('click', function (e) {
      e.preventDefault();

      self.utils.handleTriggerState($(this));
      self.utils.showHideLines();

      // hash update
      var hash = self.utils.getHash();
      var flag = $(this).hasClass('js-show-unique') ? '1' : '0';
      window.location.hash = hash + "|" + flag;
    });

    var hash = self.utils.getHash();
    var flag = self.utils.getUniqeFlag();
    var tabHash = $('.js-comparison-tabs li a[href="#' + hash + '"]');

    if (parseInt(flag, 10) === 1) {
      $('.js-attributes-trigger').click();
    }

    if (hash && tabHash.length > 0) {
      tabHash.click();
    } else {
      // if there is no active selected from HTML we have to select it by JavaScript
      var isActive = false;

      $('.js-comparison-tabs li').each(function () {
        isActive = ( $(this).hasClass('active') ) ? true : false;
      });

      if (!isActive) {
        $('.js-comparison-tabs li:first a').click();
      }
    }

    self.utils.stripeMe();
  }
};

// initialize comparison class
comparison.init();
