/**
 * Utility helper functions
 *
 * These functions are used in multiple hoplites that's why are extracted
 * to a separate file
 *
 * @requires backbonejs, jquery
 * @author mkr
 */

var storm = storm || {};

/**
 * Variants related functions
 * @type {{fadeWrapper: fadeWrapper}}
 */
storm.variants = {
  /**
   * Animate variants wrapper box with fade in/out effect
   *
   * @param state
   */
  fadeWrapper: function (state) {
    var wrapper = $('.js-variants-wrapper');
    if (state === 'in') {
      wrapper.fadeTo(100, 1);
    } else {
      wrapper.fadeTo(100, 0.1);
    }
  }
};

/**
 * Spinner related functions
 *
 * @type {{show: show, hide: hide}}
 */
storm.spinner = {
  show: function (params) {
    var defaults = {
      target: 'body',
      css: '',
      position: false, // takes default settings base on CSS, if different we make some calculations
      source: '' // source element, sometime we need it for calculations
    };
    var options = $.extend({}, defaults, params);
    // make sure there are no spinners left
    storm.spinner.hide();

    // center spinner in the middle of visible part
    // works nice for inner spinner e.g. in search results
    if (options.position === 'middle') {
      var windowHeight = $(window).height();
      var sourceHeight = $(options.source).height();
      var sourceOffset = $(options.source).offset().top;
      var heightDiff = sourceHeight - (windowHeight - sourceOffset);
      var position = (windowHeight - sourceOffset) / 2;

      if (heightDiff > 0) {
        $('head').append('<style type="text/css" id="js-inline-style">.c-spinner:after { top: ' + position + 'px }</style>');
      }
    }

    // show spinner
    $(options.target).append('<div class="c-spinner ' + options.css + '"></div>');
  },
  hide: function () {
    $('#js-inline-style').remove(); // remove inline style if exists
    $('.c-spinner').remove();
  },
  removeBackground: function () {
    $('.c-spinner').css('background-image', 'none');
  }
};

/**
 * Reveal modal related functions
 *
 * @type {{open: Function, destroy: Function}}
 */
storm.reveal = {
  /**
   * We use this to show the modal window
   * @param id - modal window id
   * @param content - html content
   * @param type - success, error, etc
   * @param size - modal window size: tiny, small, medium, large, xlarge, full (default: medium)
   */
  open: function (id, content, type, size) {
    // before we open make sure the previous is removed
    this.destroy(id);

    // create and open
    size = size || 'medium';
    var html = [
      '<div id="' + id + '" class="reveal-modal ' + size + ' ' + type + '" data-reveal data-tag-message-' + type + ' >',
      '<div>' + content + '</div>',
      '<a class="close-reveal-modal">&#215;</a>',
      '</div>'
    ].join('');

    $('body').append(html);
    $('#' + id).foundation('reveal', 'open');
  },

  /**
   * We use this to remove the reveal modal html from the DOM
   * @param id
   */
  destroy: function (id) {
    $('#' + id).foundation('reveal', 'close');
    $(document).on('closed.fndtn.reveal', '#' + id, function () {
      $(this).remove();
    });
  }
};

/**
 * We use to this to scroll to a specific element on the page with an animation effect
 * @param elem - jQuery selector
 * @param speed - animation speed, default 300ms
 */
storm.scrollTo = function (elem, speed) {
  speed = speed || 300;
  var navHeight = $('.js-main-nav').height() + 15;

  if ($(elem).length) {
    $('body, html').animate({
      scrollTop: ( $(elem).offset().top - navHeight )
    }, speed);
  }
};

/**
 * We use toastr to show non blocking messages on Ajax response
 */

// global configuration
toastr.options = {
  positionClass: 'toast-bottom-right',
  showMethod: 'slideDown',
  hideMethod: 'slideUp',
  closeMethod: 'slideUp',
  timeOut: 3000,
  closeButton: true,
  tapToDismiss: true,
  target: Foundation.utils.is_large_up() ? '.js-toastr-target' : 'body'
};

toastr.options.onShown = function () {
  var top = $('body').hasClass('f-topbar-fixed') ? $('.js-sticky-nav').outerHeight(true) : $('.js-meta-nav').outerHeight(true) + $('.js-tools-wrap').outerHeight(true);
  $('#toast-container').animate({
    top: top + 10
  });
};

storm.toastr = function (msg, type, options) {
  type = type === 'notice' ? 'info' : type;
  // override default settings
  options = $.extend({}, toastr.options, options) || toastr.options;

  if (options.positionClass != 'toast-top-right') {
    options.onShown = function () {
      return;
    };
  }

  toastr[type](msg, '', options);
};
