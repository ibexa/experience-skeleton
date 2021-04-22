// triggers slick slider
$('.js-slick-init').slick();

// Make sure we remove all links from data-dropdowns on touch devices
// this trick solves the problem on iPad when there is a dropdown with a link
// when JS is disabled links will stay like they are by default
if (Modernizr.touch) {
  $('a[data-dropdown]').attr('href', '#');
}

// start foundation
$(document).foundation({
  dropdown: {
    is_hover: (Modernizr.touch) ? false : true, // on touch devices hover is false - user needs to tap
    hover_timeout: (Modernizr.touch) ? 150 : 0, // on touch 150 ms, on desktop 0 ms
    opened: function() {
      // Foundation fix
      // on small devices there is no since to calculate left position since the dropdown
      // is positioned absolute and width is set to 95%. We just make it always left: 2.5% which solves
      // dropdown being off the screen a bit
      if ( Foundation.utils.is_small_only() ) {
        $(this).css('left', '2.5%');
      }

      // Custom solution for dropdowns
      // We use this approach to position the pointer arrow in the middle of parent element
      $('[data-dropdown="' + $(this).attr('id') + '"]').addClass('is-active');
    },
    closed: function() {
      // Custom solution for dropdowns
      // We use this approach to position the pointer arrow in the middle of parent element
      $('[data-dropdown="' + $(this).attr('id') + '"]').removeClass('is-active');
    }
  }
});

// foundation datepicker - third party solutions so it needs to be started separately
$('.fdatepicker').fdatepicker({
  language: $('html').attr('lang')
});

// in case there is no description tab in product detail page we need to click on the first tab
$('.tabs').find('li:first a').click();

var storm = storm || {};

// when view style change some classes needs to be updated
storm.setGrid = function (type) {
  var wrapper = $('.js-card-list-wrapper');
  var columns = wrapper.find('.columns');
  wrapper.toggleClass('is-list-view');

  if (type === 'list') {
    // restore grid settings
    wrapper.find('.columns').each(function () {
      var elem = $(this);
      elem.attr('class', elem.data('grid-settings'));
    });

    // required for the equalizer plugin
    $(document).foundation();
  } else {
    // remember grid setting
    wrapper.find('.columns').each(function () {
      var elem = $(this);
      elem.data('grid-settings', elem.attr('class'));
      elem.removeAttr('class').addClass('columns');
    });
    $(document).foundation('equalizer', 'reflow');
  }
};

storm.setEqualizerFields = function(viewType) {
  var list = $('.js-add-to-basket-parent');
  var src = (viewType === 'list') ? 'data-equalizer-watcher' : 'data-equalizer-watch';
  var dst = (viewType === 'list') ? 'data-equalizer-watch' : 'data-equalizer-watcher';

  $.each(list, function (index) {
    var item = $(list[index]);
    item.find('[' + dst + '="title"]').attr(src, 'title').attr(dst, '');
    item.find('[' + dst + '="description"]').attr(src, 'description').attr(dst, '');
  });
}

/**
 * Toggler is an abstraction for showing less/more content
 *
 * Usage:
 * 1. Every hidden element gets special classes initially (to separate logic from design)
 *    a) to control visibility via CSS class
 *    b) to handle JS selectors (for item and parent/wrapper)
 *
 *    <div class="hidden js-toggler-element"> ... </div>
 *
 * 2. Under the list (usually) place the toggler link
 *
 * Configuration:
 *  a) data-class - toggled CSS class
 *  b) data-target - toggled item
 *  c) data-parent - toggled items wrapper
 *  d) data-text-swap - toggled text inside a link
 *
 * Code example:
 * <div class="c-toggler">
 *     <a href="#" class="c-toggler__trigger js-toggler"
 *     data-class="hidden" data-target="js-toggler-element" data-parent="js-toggler-element-group"
 *     data-text-swap="{{ 'show less'|st_translate }}">
 *      {{ 'show more'|st_translate }}
 *     </a>
 * </div>
 */


$(document).on('click', '.js-toggler', function() {
  var elem = $(this);
  var target = elem.data('target');
  var parent = elem.data('parent');
  var cssClass = elem.data('class');
  var textSwap = elem.data('text-swap');

  elem
    .data('text-swap', elem.text()).text(textSwap)
    .parents('.' + parent).find('.' + target).toggleClass(cssClass);
});

// this is a bit hacky fix for the equalizer in product list view
// it prevents already equalized elements from being equalized over and over while resizing
// over-resizing leads to broken layout and browser crash
// todo: find better solution
$(window).resize(function() {
  if ($('.js-card-list-wrapper').hasClass('is-list-view')) {
    $('.js-switch-list-style').click();
  }
});

$(document).on('click', '.js-switch-list-style', function(e) {
  e.preventDefault();
  var elem = $(this);
  var cssClass = elem.data('css');
  var viewType = elem.data('view-type');
  var formField = $('.js-search-grid-view');
  var formVal = (viewType === 'list') ? 0 : 1;

  storm.setEqualizerFields(viewType);

  if (elem.hasClass(cssClass)) {
    $('.js-switch-list-style')
      .removeClass(cssClass)
      .not('[data-view-type="' + elem.data('view-type') + '"]')
        .addClass(cssClass);

    storm.setGrid(elem.data('view-type'));
  }

  if (formField.length) {
    formField.val(formVal);

    search.utils.setHashOnTab($('.js-search-form').serialize());
  }

});





$(document).on('click', '.js-ajax-get-content a', function (e) {
  e.preventDefault();

  var url = $(this).attr('href');
  var selector = $(this).parents('.js-ajax-get-content').data('content-selector');

  storm.spinner.show();

  $.get(url, function (data) {
    var content = $('<div/>').html(data);
    storm.reveal.open('modal-ajax-response', content.find(selector).html(), 'with-text u-padding-1x-on-small', '')
    storm.spinner.hide();
  });
});

// delivery address on user profile page
var addressList = $('.js-delivery-address-list');
var visibilityClass = 'hide';
$('.js-delivery-address-search').find('select').on('change', function () {
  addressList.find('li').addClass(visibilityClass);
  addressList.find('li[data-index="' + $(this).val() + '"]').removeClass(visibilityClass);
});

function autocompleteQuickorder() {

  // autocomplete for quickorder
  $('.js-autosuggest-quickorder').each(function () {
    var elem = $(this);
    var name = elem.attr('name');
    var value = elem.val();
    $(this).autocomplete({
      serviceUrl: '/quickorder/autosuggest',
      width: 500,
      onSelect: function () {
        if (value !== this.value) {
          value = this.value;
          //communication with the quickorder hoplite
          $(document).trigger('getQuickorderLine', [this.value, name]);
        }
      },
      onSearchComplete: function (query, suggestions) {
        if (suggestions.length === 0) {
          elem.addClass('is-empty');
        }
      }
    });
  });
}

autocompleteQuickorder();


// swipe for offcanvas
// if (matchMedia(Foundation.media_queries['small-only']).matches) {
//   $(document).swipe({
//     swipeLeft: function (event, distance, duration, fingerCount, fingerData) {
//       $('.off-canvas-wrap').removeClass('move-right');
//     },
//     swipeRight: function (event, distance, duration, fingerCount, fingerData) {
//       $('.off-canvas-wrap').addClass('move-right');
//     }
//   });
// }

// disable scroll to top on links with # <a href="#"></a>
$(document).on('click', 'a[href="#"]', function(e) {
  e.preventDefault();
});

// dirty fix for removing links for author blog, don't do it on production, just for demo purposes
$('.js-meta .ezobjectrelation-field a').on('click', function(e) {
  e.preventDefault();
});

$('.js-autocomplete').autocomplete({
  noCache: true,
  minChars: 2,
  serviceUrl: function () {
    if ($('body').attr('data-siteaccess') == '/') {
      return '/search_autosuggest';
    }
    else {
      var siteaccess = $('body').attr('data-siteaccess');
      if (siteaccess.substr(-1) === "/" ) {
        return $('body').attr('data-siteaccess') + 'search_autosuggest';
      }
      return $('body').attr('data-siteaccess') + '/search_autosuggest';
    }
  },
  paramName: 'search_terms',
  triggerSelectOnValidInput: false,
  width: Foundation.utils.is_large_up() ? 560 : '',
  groupBy: 'category',
  maxHeight: 750,
  formatResult: function (suggestion, currValue) {
    return suggestion.data.html;
  }
});

// close autocomplete when user clicks out from the autocomplete window
$('body').on('click', function() {
  if ($('.autocomplete-suggestions').is(':visible')) {
    $('.autocomplete-suggestions').hide();
  }
});

// Set current URL for Login forms for redirect
// data-redirect-url
$(document).ready (function() {
  $('input[data-fieldtype="RedirectUrl"]').val($(location).attr('href'));
})


//xzoom plugin init
$(document).ready (function() {
  $(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15});
})

//colapse accordion navigation active element on mobile
function collapseOnMobile(){
  if($(window).width()>480){
    $(".js-search-facets .accordion .content").addClass("active");
    $(".js-search-facets .accordion-navigation").addClass("active");
  }else{
    $(".js-search-facets .accordion .content").removeClass("active");
    $(".js-search-facets .accordion-navigation").removeClass("active");
  }
};
$(document).ready(collapseOnMobile);

// Quantity + / -

var qtyminus = document.getElementById('qtyminus');
var qtyplus = document.getElementById('qtyplus');

function incrementQty(variantCode) {

  if ($('#qtyplus-' + variantCode).length) {
     qtyplus = document.getElementById('qtyplus-' + variantCode);
  }

  var id = 'input#quantity';
  if (variantCode)
      id = id + '_' + variantCode;
  var value = $(id).val();
  value = (Math.floor(+value / +qtyplus.dataset.packingunit)) * +qtyplus.dataset.packingunit;
  value = +value + +qtyplus.dataset.packingunit;
  $(id).val(value);
}

function decrementQty(variantCode) {
  var id = 'input#quantity';
  if (variantCode)
    id = id + '_' + variantCode;
  var value = $(id).val();
  value = +value;

  if ($('#qtyminus-' + variantCode).length) {
     qtyminus = document.getElementById('qtyminus-' + variantCode);
  }

  var packingUnit = +qtyminus.dataset.packingunit;
  if (value != packingUnit) {
    if (value < packingUnit) {
      value = packingUnit;
    }
    ceil = Math.ceil(value / packingUnit);
    value = (ceil) * packingUnit;
    value = value - packingUnit;
    $(id).val(value);
  }
  else {
    if (variantCode && value == packingUnit) {
        $(id).val(0);
    }
  }
}

// Hide Facets on mobile
$(window).load(function() {
  if (window.innerWidth <= 481) {
    $( ".js-search-facets-groups-toggler" ).click();
  }
});

// Checks if last_viewed_products_block is present and sets the last viewed products, it's needed to avoid caching
$(document).ready (function() {
  if($("#last_viewed_products_block").length){
    var url = $('#last_viewed_products_block').attr('data-last_viewed_product_url')

    if(url){
      axios.get(url)
        .then( function(response)  {
          $('#last_viewed_products_block').append(response.data);

          $('.tabs-content .active .slick_tabs_homepage_slider.slick-initialized').slick('unslick');
          var slider = $('.tabs-content .active .slick_tabs_homepage_slider:not(".slick-initialized")');

          slider.on('reinit', function() {
            $(document).foundation();
          });

          slider.on('init', function() {
            $(document).foundation();
          });

          slider.slick({
            slidesToShow: 4,
            infinite: false,
            accessibility: false,
            responsive: [
              {
                breakpoint: 768,
                accessibility: false,
                settings: {
                  slidesToShow: 3,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  dots: true
                }
              }
            ]
          });

        })
    }
  }
});

// init Tooltipster Tooltip Plugin
$('body').on('mouseenter', '.tip:not(.tooltipstered)', function(){
  $(this)
    .tooltipster({theme: 'tooltipster-noir'})
    .tooltipster('open');
});

document.addEventListener("ses:dynamic-data",updateToken,false);

function updateToken(event) {
  $('input[name="_csrf_token"]').val(event.detail.meta.token);
}