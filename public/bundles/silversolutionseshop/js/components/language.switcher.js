/**
 * Created by tomasz on 15.11.16.
 */

if (window.location.hash) {
  $('.js-link-language-switcher').each(function () {
    var link = $(this);
    var href = link.attr('href');
    link.attr('href', href + '&hash_string=' + window.location.hash.substr(1));
  });
}
