// Price toggler related component

"use strict";

var storm = storm || {};

storm.priceToggler = {
  init: function() {
    this.btnToggle();
    this.setBtnState();
  },
  btnToggle: function() {
    var self = this;
    $(document).on('click', '.js-cookie-price-btn', function(e) {
      e.preventDefault();
      var btn = $(this);
      var type = btn.data('price-type');
      var cookie = 'cookie_price_' + type;
      if (Cookies.get(cookie)) {
        Cookies.remove(cookie);
        self.togglePriceVisibility(type, 'show');
      } else {
        Cookies.set(cookie, 'true', { expires: 365 });
        self.togglePriceVisibility(type, 'hide');
      }
      self.setBtnState();
    });
  },
  /**
   * @param type {string} - price type
   * @param action {string} - show|hide
   */
  togglePriceVisibility: function(type, action) {
    var field = $('[data-price-wrap="'+ type +'"]');
    action === 'show' ? field.show() : field.hide();
    $(document).foundation();
    $(document).ajaxComplete(function(){
      var field = $('[data-price-wrap="'+ type +'"]');
      action === 'show' ? field.show() : field.hide();
    });
  },
  setBtnState: function() {
    $('.js-cookie-price-btn').removeClass('primary').addClass('secondary')
    $.each(Cookies.get(), function(name) {
      if (name.indexOf('cookie_price') != -1) {
        var parts = name.split('_');
        $('[data-price-btn="' + parts[2] + '"]').addClass('primary').removeClass('secondary');
      }
    });
  }
};

storm.priceToggler.init();

var cookieName = "cookie_price_user";
var priceUser = getCookie(cookieName);
console.log("cookie: "+priceUser);
if (priceUser) {
  var style = document.createElement('style');
  style.innerHTML = '[data-price-wrap="user"] { display: none }';

  // Get the first script tag
  var ref = document.querySelector('script');

  // Insert our new styles before the first script tag
  ref.parentNode.insertBefore(style, ref);
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
