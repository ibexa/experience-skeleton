(function() {
  var storm = {};
  storm.scroll = {
    init: function() {
      // scroll top widget
      var elem = $('.js-scroll-to-top');
      var offset = elem.data('offset');

      $(window).on('scroll', function() {
        if ( $(window).scrollTop() > offset ) {
          elem.fadeIn();
        } else {
          elem.fadeOut();
        }
      });

      elem.on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
          scrollTop: 0
        }, function() {
          elem.fadeOut();
        });

      });
    }
  };

  storm.scroll.init();

  // expose the scope
  window.storm.scroll = storm.scroll;
})();


