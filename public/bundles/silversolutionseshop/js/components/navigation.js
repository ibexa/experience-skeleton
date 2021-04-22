// Navigation related component

// Set active class to the current navigation nodes
// We use JS to increase caching performance

var storm = storm || {};

storm.setActiveNav = function() {
  var ids = $('body').data('location-ids').toString();
  var items = (ids.indexOf(',') !== -1) ? ids.split(',') : [ids];
  var nav = ['.js-main-nav', '.js-side-nav'];
  // loop each nav
  $.each(nav, function(index, navItem) {
    // search items in each nav
    $.each(items, function (index, id) {
      $(navItem)
        .find('[data-location-id="' + id + '"]')
        .addClass('active');
    });
  });
};

storm.setActiveNav();
