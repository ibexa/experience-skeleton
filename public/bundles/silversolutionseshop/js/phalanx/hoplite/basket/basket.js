/**
 Hoplite responsible for basket actions

 @requires storm.phalanx.controller,  storm.phalanx.parser, storm.phalanx.provider, storm.phalanx.actions, backbonejs, jquery
 @author dho, mkr

 @module Phalanx
 @main Phalanx
 @submodule Hoplite
 @extends phalanxController

 @author dho,mkr
 @class hopliteBasket
 */

var basket = {

  updateFlyoutContent: function (field, content) {
    $('body').append('<div class="js-tmp hide"></div>');
    $('.js-tmp').append(content);
    if(content.trim() != '') {
      $('.js-icon-bar').find('.' + field).replaceWith($('.js-tmp').find('.' + field)[0].outerHTML);
    }
    $('.js-tmp').remove();

    // animation
    $('.' + field)
      .find('i')
      .addClass('animated tada')
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated tada');
      });
  },

  disableBtn: function (btn) {
    var elem = btn.addClass('disabled in-progress');
    var parent = elem.parent();
    // product detail has different handling
    if (elem.children('span').hasClass('js-text-swap-wrapper')) {
      parent.addClass('is-disabled');
    } else {
      Foundation.libs.tooltip.hide(parent);
    }
  },

  changeBtnState: function (btn, cssClass) {
    var elem = btn.removeClass('in-progress ' + cssClass);
    var text = elem.data('text-swap');
    var parent = elem.parent();
    // product detail has different handling
    if (elem.children('span').hasClass('js-text-swap-wrapper')) {
      elem.children('.js-text-swap-wrapper').html(text);
    } else {
      parent.attr('title', text);
      Foundation.libs.tooltip.create(parent);
    }
  }

};

var hopliteBasket = phalanxController.extend({
  /**
   * constructor is triggered automatically when new instance of hoplite is created
   *
   * @method constructor
   *
   */
  constructor: function () {
    var self = this;

    // extend defaults Controller settings
    this.defaults = $.extend({}, this.defaults, {
      callback_add_basket: 'callback_addBasket', // callback name for add_basket TYPE
      callback_get_basket_variant: 'callback_getBasketVariant', // callback name for get_basket_variant TYPE
      callback_get_basket: 'callback_getBasket', // callback name for get_basket TYPE
      callback_sort_basket: 'callback_sortBasket', // callback name for sort_basket TYPE
      callback_remove_stored_basket: 'callback_removeStoredBasket', // callback name for remove_stored_basket TYPE
      callback_remove_basket_line_from_stored_basket: 'callback_removeBasketLineFromStoredBasket', // callback name for remove_basket_line TYPE
      callback_all_to_basket: 'callback_allToBasket', // callback name for all_to_basket TYPE
      callback_get_stored_baskets_list: 'callback_getStoredBasketsList', // callback name for get_stored_baskets_list type
      callback_add_stored_basket: 'callback_addStoredBasket', // callback name for add_stored_basket type
      name: 'basket'                             // hoplite name
    });

    Backbone.Model.apply(this, arguments);

    /* Actions section */

    // When user clicks on a button perform addBasket() function
    $(document).on('click', '.js-add-to-basket:not(".disabled")', function (e) {
      e.preventDefault();
      var form;
      // disable the button prevent multiple clicks
      $(this).addClass('disabled in-progress').attr('disabled', true);
      Foundation.libs.tooltip.hide($(this).parent());

      // wrap with js-product-line for multiple add to basket and add all to basket in once e.g. wih
      if ($(this).parents('.js-product-line').length > 0) {
        form = $(this).parents('.js-product-line').find('input, select').serialize();
      } else {
        form = $(this).parents('.js-add-to-basket-parent').find('input, select').serialize();
      }

      // if the click comes from autosuggest dropdown
      if ($(this).parents('.autocomplete-suggestions').length) {
        // populate product name in the search field
        // we need to do it this way because autocomplete stays open (see below)
        // because it stays open when we click on a second selection it's not working
        var productName = $(this).parents('.js-add-to-basket-parent').find('.js-autosuggest-product-name').val();
        $('.js-autocomplete').val(productName);

        // make sure it stays open
        if (Foundation.utils.is_large_up()) {
          $('.autocomplete-suggestions').css('display', 'block');
        }
      }

      var data = [];
      data[0] = {
        'form': form,
        'type': 'basket'
      };

      self.addBasket(data);

    });

    // When user clicks on a button perform addBasket() function
    $(document).on('click', '.js-add-all-to-basket', function (e) {
      e.preventDefault();
      var data = [];
      var formData;

      // Check this code when merged
      // if ($(this).parents('form').serialize() == '') {
      //  formData = $(this).('form').serialize();
      // } else {
       formData = $(this).parents('form').serialize();
      // }

      data[0] = {
        'form': formData,
        'add_basket_all': 1,
        'type': 'basket'
      };

      // disable the button prevent multiple clicks
      $(this).attr('disabled', true).addClass('disabled in-progress');

      self.addBasket(data);
    });

    // When user clicks on a link .js-add-to-wishlist perform addStoredBasket() function
    $(document).on('click', '.js-add-to-wishlist:not(".disabled")', function (e) {
      e.preventDefault();
      var data = [];
      basket.disableBtn($(this));

      data[0] = {
        'form': $(this).parents('.js-add-to-basket-parent').find('input, select').serialize(),
        'basket_type': 'wishList',
        'basket_name': '',
        'type': 'basket'
      };

      self.addStoredBasket(data);
    });

    // When user clicks on a link .js-add-to-comparison perform addStoredBasket() function
    $(document).on('click', '.js-add-to-comparison:not(".disabled")', function (e) {
      e.preventDefault();
      var data = [];
      basket.disableBtn($(this));

      data[0] = {
        'form': $(this).parents('.js-add-to-basket-parent').find('input, select').serialize(),
        'basket_type': 'comparison',
        'basket_name': $(this).data('compare-category'),
        'type': 'basket'
      };

      self.addStoredBasket(data);
    });

    // When user clicks on a link .js-add-to-stored-basket perform addStoredBasket() function
    $(document).on('click', '.js-add-to-stored-basket', function (e) {
      e.preventDefault();

      var data = [];
      data[0] = {
        'type': 'basket'
      };

      self.getStoredBasketsList(data);
    });

    // When user clicks on a link .js-add-to-selected-stored-basket perform add to stored basket functionality
    // with selected stored basket
    $(document).on('click', '.js-add-to-selected-stored-basket', function (e) {
      e.preventDefault();

      var data = [];
      data[0] = {
        'form': $('.js-add-to-stored-basket').parents('form').serialize(),
        'basket_type': 'storedBasket',
        'basket_name': $(this).text(),
        'type': 'basket'
      }

      self.addStoredBasket(data);

      // destroy modal window
      storm.reveal.destroy('reveal-ajax-response');
    });

    // When user clicks on a link .js-add-to-new-stored-basket perform add to stored basket functionality
    // with new stored basket
    $(document).on('click', '.js-add-to-new-stored-basket', function (e) {
      e.preventDefault();
      var basketName = $(this).parents('form').find('input[name="new_stored_basket"]').val();

      var data = [];
      data[0] = {
        'form': $('.js-add-to-stored-basket').parents('form').serialize(),
        'basket_type': 'storedBasket',
        'basket_name': basketName,
        'type': 'basket'
      }

      self.addStoredBasket(data);

      // destroy modal window
      storm.reveal.destroy('reveal-ajax-response');
    });

    // Edit variant in the basket
    $(document).on('click', '.js-edit-variant', function (e) {
      e.preventDefault();

      var data = {
        'sku': $(this).data('variant-sku'),
        'variantCode': $(this).data('variant-code'),
        'editRowID': $(this).parents('.js-product-wrapper').attr('id'),
        'type': 'basket'
      };

      self.getBasketVariant(data);
    });

    // Change variant
    $(document).on('click', '.js-basket-variant-wrapper .js-variant-list .available a:not(".is-blocked")', function (e) {
      e.preventDefault();

      storm.reveal.destroy('reveal-ajax-response');

      if (!$(this).parent().hasClass('active')) {
        $(this).parents('.js-variant-list').find('li').removeClass('active unavailable');
      }

      $(this).parent().toggleClass('active');

      var data = {
        variants: {},
        sku: $('.js-variants-wrapper').data('variant-sku'),
        editRowID: $(this).parents('form').data('row-edit-id'),
        type: 'basket'
      };

      var active = $('.js-variant-list .active a');

      active.each(function () {
        var group = $(this).parents('.js-variant-list').data('variant-group');
        data.variants[group] = $(this).data('variant-code');
      });

      setTimeout(self.getBasketVariant(data),3000);
    });

    // Save variant
    $(document).on('click', '.js-basket-variant-wrapper .js-save-variant', function (e) {
      e.preventDefault();

      // update product variant code
      var btn = $(this),
        variantCode = btn.data('variant-code'),
        rowID = btn.parents('form').data('row-edit-id'),
        row = $('#' + rowID);

      row.find('[name*="ses_variant_code"]').val(variantCode);
      // TODO: do we need this?
      row.find('.variations strong').text(variantCode);

      // click on update basket button
      $('.js-update-basket').click();
    });

    $(document).on('click', '.js-remove-stored-basket', function (e) {
      e.preventDefault();

      var data = [];
      data[0] = {
        'basket_id': $(this).data('basket-id'),
        'type': 'basket'
      };

      self.removeStoredBasket(data);
    });

    $(document).on('click', '.js-remove-basketline-stored-basket', function (e) {
      e.preventDefault();

      var data = [];
      data[0] = {
        'basket_id': $(this).data('basket-id'),
        'basket_line_id': $(this).data('basket-line-id'),
        'type': 'basket'
      };

      self.removeBasketLineFromStoredBasket(data);
    });

    $(document).on('sortBasket', function (event, basketId, sort) {
      var data = [];
      data[0] = {
        'basket_id': basketId,
        'sort_order': sort,
        'type': 'basket'
      };

      self.sortBasket(data);
    });

  },

  /**
   * Add to basket actions
   *
   * 1. Data sent to the server
   *    - product id
   *    - amount (quantity)
   * 2. On server response call the callback_add_basket (callback_addBasket())
   *
   * TYPE: add_basket
   *
   * @method addBasket
   *
   */
  addBasket: function (data) {
    // create an object with special settings for the hoplite
    var requestCollection = {};
    requestCollection['add_basket'] = new Backbone.Collection;
    requestCollection['add_basket'].add(data);

    // create an instance of phalanxProvider and use it inside hoplite
    var ajax = new phalanxProvider;
    ajax.objHoplite = {};
    ajax.objHoplite[this.get('name')] = this;
    ajax.call(requestCollection);
  },

  /**
   * Callback for the addBasket function()
   *
   * On server response:
   * 1. Show message with lightbox effect
   * 2. Update the flyout basket content
   *
   * Response form the server requires:
   * 1. Message (e.g. Thank you. Product was added to the basket)
   * 2. Message type (success, error, etc).
   * 3. Basket contents
   *
   * TYPE: add_basket
   *
   * @param response {JSON} data received from backed
   * @method callback_addBasket
   */
  callback_addBasket: function (r) {
    // assign response
    r = r.add_basket;

    // update flyout content with new product inside
    if (r.basket) {
      $('.js-basket-flyout').removeClass('is-inactive');
      basket.updateFlyoutContent('js-basket-flyout', r.basket);
    }

    // enable the buttons
    if (r.sku) {
      $('.js-add-to-basket[data-sku="' + r.sku + '"]').attr('disabled', false).removeClass('disabled in-progress');
    } else {
      $('.js-add-to-basket, .js-add-all-to-basket').attr('disabled', false).removeClass('disabled in-progress');
    }

    $(document).foundation();

    var errorMsg = r.messages.error;
    var successMsg = r.messages.success;
    var noticeMsg = r.messages.notice;

    if (errorMsg != '') {
      storm.toastr(errorMsg, 'error');
    }
    if (noticeMsg != '') {
      storm.toastr(noticeMsg, 'notice');
    }
    if (successMsg != '') {
      storm.toastr(successMsg, 'success');
    }

  },

  /**
   * Get basket contents on page load
   *
   * This function requests for the basket content from the sever.
   *
   *
   * 1. Data sent to the server:
   *    - basket size (e.g. small)
   * 2. On server response call the callback_get_basket (callback_addBasket())
   *
   * TYPE: get_basket
   *
   * @method getBasket
   */
  getBasket: function () {

    // create an object with special settings for the hoplite
    var requestCollection = {};
    requestCollection['get_basket'] = new Backbone.Collection;
    requestCollection['get_basket'].add({
      'size': 'small',
      'type': 'basket'
    });

    // create an instance of phalanxProvider and use it inside hoplite
    var ajax = new phalanxProvider;
    ajax.objHoplite = {};
    ajax.objHoplite[this.get('name')] = this;
    ajax.call(requestCollection);
  },

  /**
   * Callback for the getBasket function()
   *
   * On server response:
   * 1. Update the flyout basket content
   *
   * Response form the server requires:
   * 1. Basket contents
   *
   * TYPE: get_basket
   *
   * @param response {JSON} data received from backed
   * @method callback_getBasket
   */
  callback_getBasket: function (r) {
    r = r.get_basket;

    if (r.basket) {
      basket.updateFlyoutContent('js-basket-flyout', r.basket);
      basket.updateFlyoutContent('js-comparison-flyout', r.basket);
    }

    $(document).foundation();
  },

  /**
   * Add to storedBasket actions
   *
   * 1. Data sent to the server
   *    - product id
   *    - amount (quantity)
   *    - isVariant
   *    - variant code
   * 2. On server response call the callback_add_stored_basket (callback_addStoredBasket())
   *
   * TYPE: add_stored_basket
   *
   * @method addStoredBasket
   *
   */
  addStoredBasket: function (data) {
    // create an object with special settings for the hoplite
    var requestCollection = {};
    requestCollection['add_stored_basket'] = new Backbone.Collection;
    requestCollection['add_stored_basket'].add(data);

    // create an instance of phalanxProvider and use it inside hoplite
    var ajax = new phalanxProvider;
    ajax.objHoplite = {};
    ajax.objHoplite[this.get('name')] = this;
    ajax.call(requestCollection);
  },

  /**
   * Callback for the addStoredBasket function()
   *
   * On server response:
   * 1. Show message with lightbox effect
   *
   * Response form the server requires:
   * 1. Message (e.g. Your product was added to the storedBasket.)
   * 2. Message type (success, error, etc).
   *
   * TYPE: add_stored_basket
   *
   * @param response {JSON} data received from backed
   * @method callback_addStoredBasket
   */
  callback_addStoredBasket: function (r) {
    // assign r
    r = r.add_stored_basket;
    var basketType = r.basket_type.toLowerCase();

    // basket_type reflects dynamic jQuery selector class e.g.
    // js-wishlist-flyout, js-comparison-flyout, etc
    if (r.basket && basketType) {
      $('.' + 'js-' + basketType + '-flyout').removeClass('is-inactive');
      basket.updateFlyoutContent('js-' + basketType + '-flyout', r.basket);

      if (r.sku) {
        var btn = $('.js-add-to-' + basketType + '[data-sku="' + r.sku + '"]');
        basket.changeBtnState(btn, 'js-add-to-' + basketType);
      }
    }

    $(document).foundation();

    var errorMsg = r.messages.error;
    var successMsg = r.messages.success;
    var noticeMsg = r.messages.notice;

    if (errorMsg != '') {
      storm.toastr(errorMsg, 'error');
    }
    if (noticeMsg != '') {
      storm.toastr(noticeMsg, 'notice');
    }
    if (successMsg != '') {
      storm.toastr(successMsg, 'success');
      var event = new CustomEvent('ses:stored-basket-add');
      document.dispatchEvent(event);
    }

  },

  getStoredBasketsList: function (data) {

    // create an object with special settings for the hoplite
    var requestCollection = {};
    requestCollection['get_stored_baskets_list'] = new Backbone.Collection;
    requestCollection['get_stored_baskets_list'].add(data);

    // create an instance of phalanxProvider and use it inside hoplite
    var ajax = new phalanxProvider;
    ajax.objHoplite = {};
    ajax.objHoplite[this.get('name')] = this;
    ajax.call(requestCollection);

    storm.spinner.show();
  },

  callback_getStoredBasketsList: function (response) {
    // assign response
    response = response.get_stored_baskets_list;

    storm.spinner.hide();

    var msg = [];

    if (response.message_type != 'error') {
      if (response.list.length > 0) {
        msg.push(
          '<h5>' + response.message + '</h5>',
          '<ul>'
        );
        for (index in response.list) {
          msg.push('<li><a href="#" class="js-add-to-selected-stored-basket">' + response.list[index] + '</a></li>');
        }
        msg.push('</ul>');
      }
      msg.push(
        '<form>',
        '<h6>' + response.message_new_stored_basket + '</h6>',
        '<input type="text" name="new_stored_basket" />',
        '<button type="submit" class="js-add-to-new-stored-basket button" name="js_add_to_new_stored_basket">' + response.submit_button_value + '</button>',
        '</form>'
      );
    } else {
      msg.push(
        '<p>' + response.message + '</p>'
      );
    }

    var html = msg.join('');

    storm.reveal.open('reveal-ajax-response', html, 'no-full-screen', 'medium');
  },

  getBasketVariant: function (data) {
    storm.spinner.show();

    // block multiple clicks
    // .is-blocked is removed automatically when content is updated
    // on server response
    $('.js-variants-wrapper').find('a').addClass('is-blocked');

    storm.variants.fadeWrapper('out');

    // create an object with special settings for the hoplite
    var requestCollection = {};
    requestCollection['get_basket_variant'] = new Backbone.Collection;
    requestCollection['get_basket_variant'].add(data);

    // create an instance of phalanxProvider and use it inside hoplite
    var ajax = new phalanxProvider;
    ajax.objHoplite = {};
    ajax.objHoplite[this.get('name')] = this;
    ajax.call(requestCollection);

  },

  callback_getBasketVariant: function (r) {
    r = r.get_basket_variant;

    storm.spinner.hide();

    $(document).trigger('getVariantPrice', [r.identifier, r.variantCode, 'basket_variant']);

    storm.variants.fadeWrapper('in');

    $(document).foundation();

    storm.reveal.open('reveal-ajax-response', r.basketVariantHtml, 'js-basket-variant-wrapper', 'large');

  },

  removeStoredBasket: function (data) {

    // create an object with special settings for the hoplite
    var requestCollection = {};
    requestCollection['remove_stored_basket'] = new Backbone.Collection;
    requestCollection['remove_stored_basket'].add(data);

    // create an instance of phalanxProvider and use it inside hoplite
    var ajax = new phalanxProvider;
    ajax.objHoplite = {};
    ajax.objHoplite[this.get('name')] = this;
    ajax.call(requestCollection);
  },

  callback_removeStoredBasket: function (r) {
    // assign response
    r = r.remove_stored_basket;

    if (r.basket_id) {
      if ($('.js-comparison-tabs li').length > 1) {
        $('.js-comparison-tabs #tabs-' + r.basket_id).parent().remove();
        $('.action-list #actions-' + r.basket_id).remove();
        $('.attributes-list #attributes-' + r.basket_id).remove();
        $('.box-elements #basket-id-' + r.basket_id).parent().remove();
        $('.comparison-message').addClass('hide');

        // select first one
        $('.js-comparison-tabs li:first a').click();
      } else {
        $('.box-left, .box-elements, .js-box-right').remove();
        $('.comparison-message').removeClass('hide');
      }
    }

    if (r.basket) {
      $('.js-comparison-flyout').replaceWith(r.basket);
    }
  },

  removeBasketLineFromStoredBasket: function (data) {

    // create an object with special settings for the hoplite
    var requestCollection = {};
    requestCollection['remove_basket_line_from_stored_basket'] = new Backbone.Collection;
    requestCollection['remove_basket_line_from_stored_basket'].add(data);

    // create an instance of phalanxProvider and use it inside hoplite
    var ajax = new phalanxProvider;
    ajax.objHoplite = {};
    ajax.objHoplite[this.get('name')] = this;
    ajax.call(requestCollection);
  },

  callback_removeBasketLineFromStoredBasket: function (r) {
    // assign response
    r = r.remove_basket_line_from_stored_basket;

    if (r.basket_line_id) {
      $('#basket-line-' + r.basket_line_id).remove();
    }

    if (r.basket) {
      $('.js-comparison-flyout').replaceWith(r.basket);
    }

    comparison.utils.initSortable();

    // check if any item left, if not remove empty list
    var basketID = $('.js-comparison-tabs').find('.active a').data('tab');
    if ($('.elements[data-basket-id="' + basketID + '"]').children('div').length <= 0) {

      var data = [];
      data.push({'basket_id': basketID, 'type': 'basket'});

      this.removeStoredBasket(data);
    } else {
      window.location.reload();
    }

    $(document).foundation();
  },

  sortBasket: function (data) {
    // create an object with special settings for the hoplite
    var requestCollection = {};
    requestCollection['sort_basket'] = new Backbone.Collection;
    requestCollection['sort_basket'].add(data);

    // create an instance of phalanxProvider and use it inside hoplite
    var ajax = new phalanxProvider;
    ajax.objHoplite = {};
    ajax.objHoplite[this.get('name')] = this;
    ajax.call(requestCollection);
  },

  callback_sortBasket: function () {
  }

});
