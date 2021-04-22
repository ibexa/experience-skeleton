(function () {
  var storm = window.storm || {};

  function initStarRating() {
    $(".js-star-rating").each(function () {
      var self = $(this);
      var initialRating = self.data('initial-rating') || 0;
      var readOnly = self.data('read-only') || false;
      var useFullStars = self.data('full-stars') || false;
      var starSize = self.data('star-size') || 25;
      self.starRating({
        starSize: starSize,
        disableAfterRate: false,
        initialRating: initialRating,
        readOnly: readOnly,
        useFullStars: useFullStars,
        callback: function (currentRating, el) {
          $('.js-comment-rating').val(currentRating);
        }
      });
    });
  }

  function handleHooks() {
    $(document).on('fos_comment_load_thread', '#fos_comment_thread', function () {
      initStarRating();
    });

    $(document).on('fos_comment_submitting_form', '#fos_comment_thread', function () {
      storm.spinner.show({
        target: '.js-comment-new-form',
        css: 'c-spinner--contained'
      });
    });

    $(document).on('fos_comment_submitted_form', '#fos_comment_thread', function (event, statusCode) {

      // TODO Should be removed as soon as issue with undefined statusCode is solved
      if (statusCode == null ) {
        console.log('Set undefined StatusCode to 200');
        statusCode = 200;
      }

      if (statusCode === 200) {
        // replace the content
        // Warning: heavily depends on the HTML structure. If HTML changed this may stop working
        var parent = $('#fos_comment_thread');
        parent.html($('.fos_comment_comment_form_holder:first').html());
        parent.find('hr:last').remove();
        parent.find('.js-comment-header').remove();
        parent.find('.js-comment-new-form').remove();

        storm.starRating.init();
        storm.spinner.hide();
      }
    });
  }

  storm.starRating = {
    init: function () {
      initStarRating();
      handleHooks();
    }
  };

  storm.starRating.init();

  // exposing some methods
  window.storm.starRating = storm.starRating;
})();
