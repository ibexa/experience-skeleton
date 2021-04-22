/*
 Document        : storm.socialshare.actions
 Author          : mkr
 Dependencies    : jQuery, Foundation Tooltip, Modernizr

 Description:
 Social share privacy plugin based on heise.de Social Share Privacy plugin. \
 Read more about the original version:
 http://www.heise.de/extras/socialshareprivacy/
 http://www.heise.de/ct/artikel/2-Klicks-fuer-mehr-Datenschutz-1333879.html
 */

(function ($) {

  // protection for standalone plugin usage
  if (typeof storm_translations === 'undefined') {
    alert('Social Share Error: Please load the storm_translation plugin');
    return;
  }

  "use strict";

  /*
   * helper functions
   */

  // abbreviate at last blank before length and add "\u2026" (horizontal ellipsis)
  function abbreviateText(text, length) {
    var abbreviated = decodeURIComponent(text);
    if (abbreviated.length <= length) {
      return text;
    }

    var lastWhitespaceIndex = abbreviated.substring(0, length - 1).lastIndexOf(' ');
    abbreviated = encodeURIComponent(abbreviated.substring(0, lastWhitespaceIndex)) + "\u2026";

    return abbreviated;
  }

  // returns content of <meta name="" content=""> tags or '' if empty/non existant
  function getMeta(name) {
    var metaContent = $('meta[name="' + name + '"]').attr('content');
    return metaContent || '';
  }

  // create tweet text from content of <meta name="DC.title"> and <meta name="DC.creator">
  // fallback to content of <title> tag
  function getTweetText() {
    var title = getMeta('DC.title');
    var creator = getMeta('DC.creator');

    if (title.length > 0 && creator.length > 0) {
      title += ' - ' + creator;
    } else {
      title = $('title').text();
    }

    return encodeURIComponent(title);
  }

  // build URI from rel="canonical" or document.location
  function getURI() {
    var uri = document.location.href;
    var canonical = $("link[rel=canonical]").attr("href");

    if (canonical && canonical.length > 0) {
      if (canonical.indexOf("http") < 0) {
        canonical = document.location.protocol + "//" + document.location.host + canonical;
      }
      uri = canonical;
    }

    return uri;
  }

  function cookieSet(name, value, days, path, domain) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + '; expires=' + expires.toUTCString() + '; path=' + path + '; domain=' + domain;
  }

  function cookieDel(name, value, path, domain) {
    var expires = new Date();
    expires.setTime(expires.getTime() - 100);
    document.cookie = name + '=' + value + '; expires=' + expires.toUTCString() + '; path=' + path + '; domain=' + domain;
  }

  //Added Tr0nYx to get rid of duplicate g+ and pinterest js files -.-
  function requireOnce(url) {
    if (!$("script[src='" + url + "']").length) {
      alert(url);
      $('body').append("<script type='text/javascript' src='" + url + "'></script>");
    }
  }


  // call cookies
  var cookie_list = document.cookie.split(';');
  var cookies = '{';
  var i = 0;
  for (; i < cookie_list.length; i += 1) {
    var foo = cookie_list[i].split('=');
    cookies += '"' + $.trim(foo[0]) + '":"' + $.trim(foo[1]) + '"';
    if (i < cookie_list.length - 1) {
      cookies += ',';
    }
  }
  cookies += '}';
  cookies = JSON.parse(cookies);

  // create tooltip with allowed options for each button if tooltip plugin is loaded
  var allow_tooltip = false;
  if (Foundation.libs.tooltip) {
    allow_tooltip = true;
  }

  // create switch depends on perma_type settings
  function createSwitchOption(parent, options, service) {
    parent.toggleClass('is-on');
    if (options.perma_type === 'checkbox') {
      var checked = ' checked="checked"';
      // check if cookie exists for our service and set checked
      var perma_status = cookies['socialSharePrivacy_' + service + ''] === 'perma_on' ? checked : '';
      parent.children('.switch').replaceWith('<span class="checkbox_switch"><input type="checkbox" name="perma_status_' + service + '" id="perma_status_' + service + '" ' + perma_status + '></span>');

      // for non touch devices we can use tooltip
      if (allow_tooltip && !Modernizr.touch) {

        // tooltip setup
        parent.children('.checkbox_switch').attr({
          'data-tooltip': '',
          'aria-haspopup': true,
          'title': storm_translations.get('SOCIAL', 'REMEMBER')
        }).addClass('tip-top');

        // fire tooltip
        $(document).foundation();
      }

      // for touch devices we show a message below the list of options
      if (Modernizr.touch) {
        $('.js-socialshare-checkbox-info').show();
      }
    } else {
      parent
        .attr('title', options.services.facebook.txt_fb_on)
        .find('.switch')
        .addClass('on fa-toggle-on')
        .removeClass('off fa-toffle-off');
    }
  }

  // path for images
  // var img_path = site_root + '/bundles/silversolutionseshop/img';
  // extend jquery with our plugin function
  $.fn.socialSharePrivacy = function (settings) {
    var defaults = {
      'services': {
        'facebook': {
          'status': 'on',
          // 'dummy_img': img_path + '/socialshare/dummy_facebook.png',
          'txt_info': storm_translations.get('SOCIAL', 'FB_INFO'),
          'txt_fb_off': storm_translations.get('SOCIAL', 'FB_OFF'),
          'txt_fb_on': storm_translations.get('SOCIAL', 'FB_ON'),
          'perma_option': 'on',
          'display_name': 'Facebook',
          'referrer_track': '',
          'language': '',
          'action': 'like',
          'share': false
        },
        'twitter': {
          'status': 'on',
          // 'dummy_img': img_path + '/socialshare/dummy_twitter.png',
          'txt_info': storm_translations.get('SOCIAL', 'TWITTER_INFO'),
          'txt_twitter_off': storm_translations.get('SOCIAL', 'TWITTER_OFF'),
          'txt_twitter_on': storm_translations.get('SOCIAL', 'TWITTER_ON'),
          'perma_option': 'on',
          'display_name': 'Twitter',
          'referrer_track': '',
          'tweet_text': getTweetText,
          'language': ''
        },
        'pinterest': {
          'status': 'on',
          // 'dummy_img': img_path + '/socialshare/dummy_pinterest.png',
          'txt_info': storm_translations.get('SOCIAL', 'PINTEREST_INFO'),
          'txt_pinterest_off': storm_translations.get('SOCIAL', 'PINTEREST_OFF'),
          'txt_pinterest_on': storm_translations.get('SOCIAL', 'PINTEREST_ON'),
          'perma_option': 'on',
          'display_name': 'Pinterest',
          'referrer_track': '',
          'language': ''
        }
      },
      'info_link': '',
      'txt_help': storm_translations.get('SOCIAL', 'INFO_HELP'),
      'settings_perma': storm_translations.get('SOCIAL', 'INFO_PERMA'),
      'cookie_path': '/',
      'cookie_domain': document.location.host,
      'cookie_expires': '365',
      'uri': getURI,
      // perma_type - how to set permanent cookie option (directly by checkbox or options panel)
      // possible values: checkbox, options
      'perma_type': 'checkbox',
      // 'refresh_icon_url': img_path + '/refresh-icon.png'
    };


    // Standardwerte des Plug-Ings mit den vom User angegebenen Optionen ueberschreiben
    var options = $.extend(true, defaults, settings);

    var facebook_on = (options.services.facebook.status === 'on');
    var twitter_on = (options.services.twitter.status === 'on');
    var pinterest_on = (options.services.pinterest.status === 'on');
    // disable pintereset when IE < 10
    if ($.browser.msie && $.browser.version < 10)
      pinterest_on = false;

    // check if at least one service is "on"
    if (!facebook_on && !twitter_on && !pinterest_on) {
      return;
    }
    return this.each(function () {

      $(this).prepend('<ul class="social_share_privacy_area"></ul>');
      var context = $('.social_share_privacy_area', this);

      // canonical uri that will be shared
      var uri = options.uri;
      if (typeof uri === 'function') {
        uri = uri(context);
      }

      //
      // Facebook
      //
      if (facebook_on) {
        var fb_enc_uri = encodeURIComponent(uri + options.services.facebook.referrer_track);
        var fb_code = '<iframe src="//www.facebook.com/plugins/like.php?locale=' + options.services.facebook.language + '&amp;href=' + fb_enc_uri + '&amp;send=false&amp;layout=button_count&amp;width=120&amp;show_faces=false&amp;action=' + options.services.facebook.action + '&amp;colorscheme=light&amp;font&amp;height=21&amp;share=' + options.services.facebook.share + '" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:145px; height:21px;" allowTransparency="true"></iframe>';
        var fb_dummy_btn = '<span class="social-share social-01-facebook" title="' + storm_translations.get("SOCIAL", "FB_ALT") + '"></span>';
        var share_class = options.services.facebook.share ? ' share_btn' : '';

        context.append('<li class="facebook help_info' + share_class + '" title="' + options.services.facebook.txt_fb_off + '"><span class="info">' + options.services.facebook.txt_info + '</span><i class="fa fa-toggle-off fa-fw switch off"></i><div class="fb_like dummy_btn">' + fb_dummy_btn + '</div></li>');

        var $container_fb = $('li.facebook', context);
        var selector_fb = '.social_share_privacy_area li.facebook div.fb_like span, .social_share_privacy_area li.facebook .switch';

        $(document).on('click', selector_fb, function () {
          if ($container_fb.find('.switch').hasClass('off')) {
            $container_fb.addClass('info_off');
            // create span or checkbox switch
            createSwitchOption($container_fb, options, 'facebook');
            $container_fb.find('.social-01-facebook').replaceWith(fb_code);
          } else {
            $container_fb.removeClass('info_off');
            $container_fb.find('.switch').addClass('off').removeClass('on');
            $container_fb.find('.fb_like').html(fb_dummy_btn);
          }
        });
      }

      //
      // Twitter
      //
      if (twitter_on) {
        var text = options.services.twitter.tweet_text;
        if (typeof text === 'function') {
          text = text();
        }
        // 120 is the max character count left after twitters automatic url shortening with t.co
        text = abbreviateText(text, '120');

        var twitter_enc_uri = encodeURIComponent(uri + options.services.twitter.referrer_track);
        var twitter_count_url = encodeURIComponent(uri);
        var twitter_code = '<iframe allowtransparency="true" frameborder="0" scrolling="no" src="//platform.twitter.com/widgets/tweet_button.html?url=' + twitter_enc_uri + '&amp;counturl=' + twitter_count_url + '&amp;text=' + text + '&amp;count=horizontal&amp;lang=' + options.services.twitter.language + '" style="width:130px; height:25px;"></iframe>';
        var twitter_dummy_btn = '<span class="social-share social-04-twitter" title="' + storm_translations.get("SOCIAL", "TWITTER_ALT") + '"></span>';

        context.append('<li class="twitter help_info" title="' + options.services.twitter.txt_twitter_off + '"><span class="info">' + options.services.twitter.txt_info + '</span><i class="fa fa-toggle-off fa-fw switch off"></i><div class="tweet dummy_btn">' + twitter_dummy_btn + '</div></li>');

        var $container_tw = $('li.twitter', context);
        var selector_tw = '.social_share_privacy_area li.twitter div.tweet span, .social_share_privacy_area li.twitter .switch';

        $(document).on('click', selector_tw, function () {
          if ($container_tw.find('.switch').hasClass('off')) {
            $container_tw.addClass('info_off');
            // create span or checkbox switch
            createSwitchOption($container_tw, options, 'twitter');
            $container_tw.find('.social-04-twitter').replaceWith(twitter_code);
          } else {
            $container_tw.removeClass('info_off');
            $container_tw.find('.switch').addClass('off').removeClass('on');
            $container_tw.find('.tweet').html(twitter_dummy_btn);
          }
        });
      }

      //
      // Pinterest
      //
      if (pinterest_on) {
        var pinterest_url = encodeURIComponent(uri + options.services.pinterest.referrer_track);
        var pinterest_pic = $('meta[property="og:image"]').attr('content');
        var pinterest_desc = $('meta[name=description]').attr('content');

        include("https://assets.pinterest.com/js/pinit.js");

        var pinterest_button = '<div class="pin-it-button"><a href="//pinterest.com/pin/create/button/?url=' + pinterest_url + "&media=" + pinterest_pic + "&description=" + pinterest_desc + '" class="pin-it-button" target="_blanka" lways-show-count="true" count-layout="horizontal" always-show-count="1"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a></div>';
        var pinterest_image = '<span class="social-share social-03-pinterest" title="' + storm_translations.get("SOCIAL", "PINTEREST_ALT") + '"></span>';
        context.append('<li class="pinterest help_info" title="' + options.services.pinterest.txt_pinterest_off + '"><span class="info">' + options.services.pinterest.txt_info + '</span><i class="fa fa-toggle-off fa-fw switch off"></i><div class="pinterest dummy_btn">' + pinterest_image + "</div></li>");

        var $container_pinterest = $("li.pinterest", context, 'pinterest');
        var selector_pintr = ".social_share_privacy_area li.pinterest div.pinterest span, .social_share_privacy_area li.pinterest .switch";
        $(document).on("click", selector_pintr, function () {
          if ($container_pinterest.find(".switch").hasClass("off")) {
            $container_pinterest.addClass("info_off");
            // create span or checkbox switch
            createSwitchOption($container_pinterest, options, 'pinterest');
            $container_pinterest.find("span.social-03-pinterest").replaceWith(pinterest_button);
          } else {
            $container_pinterest.removeClass("info_off");
            $container_pinterest.find(".switch").addClass("off").removeClass("on");
            $container_pinterest.find(".pin-it-button").html(pinterest_image);
          }
        });
      }

      //
      // display the Info/settings layer
      //
      if (options.perma_type !== 'checkbox') {
        context.append('<li class="settings_info"><div class="settings_info_menu off perma_option_off"><a href="' + options.info_link + '"><span class="help_info icon"><i class="fa fa-info"></i><span class="info">' + options.txt_help + '</span></span></a></div></li>');
      } else {

        var infoMsg = [
          '<span class="label info radius js-socialshare-checkbox-info" style="display: none;">',
          '<i class="fa fa-info-circle"></i> ',
          storm_translations.get("SOCIAL", "REMEMBER_INFO"),
          '</span>'
        ].join('');

        context.append(infoMsg);
      }

      // Info-Overlays mit leichter Verzoegerung einblenden

      $(document).on('mouseenter', '.social_share_privacy_area .help_info:not(.info_off)', function () {
        var $info_wrapper = $(this);
        var timeout_id = window.setTimeout(function () {
          $($info_wrapper).addClass('display');
        }, 500);
        $(this).data('timeout_id', timeout_id);
      });
      $(document).on('mouseleave', '.social_share_privacy_area .help_info', function () {
        var timeout_id = $(this).data('timeout_id');
        window.clearTimeout(timeout_id);
        if ($(this).hasClass('display')) {
          $(this).removeClass('display');
        }
      });

      var facebook_perma = (options.services.facebook.perma_option === 'on');
      var twitter_perma = (options.services.twitter.perma_option === 'on');
      var pinterest_perma = (options.services.pinterest.perma_option === 'on');

      // add checkbox for perma state (write cookie)
      if (((facebook_on && facebook_perma)
        || (twitter_on && twitter_perma)
        || (pinterest_on && pinterest_perma))
        && (!$.browser.msie || ($.browser.msie && $.browser.version > 7))) {

        var $container_settings_info = $('li.settings_info', context);
        $container_settings_info.find('.settings_info_menu').removeClass('perma_option_off');
        $container_settings_info.find('.settings_info_menu').append('<span class="settings" title="' + storm_translations.get("SOCIAL", "SETTINGS") + '"><i class="fa fa-cog"></i></span><form><fieldset><legend>' + options.settings_perma + '</legend></fieldset></form>');

        if (options.perma_type !== 'checkbox') {
          var checked = ' checked="checked"';
          if (facebook_on && facebook_perma) {
            var perma_status_facebook = cookies.socialSharePrivacy_facebook === 'perma_on' ? checked : '';
            $container_settings_info.find('form fieldset').append(
              '<input type="checkbox" name="perma_status_facebook" id="perma_status_facebook"'
              + perma_status_facebook + ' /><label for="perma_status_facebook">'
              + options.services.facebook.display_name + '</label>'
            );
          }

          if (twitter_on && twitter_perma) {
            var perma_status_twitter = cookies.socialSharePrivacy_twitter === 'perma_on' ? checked : '';
            $container_settings_info.find('form fieldset').append(
              '<input type="checkbox" name="perma_status_twitter" id="perma_status_twitter"'
              + perma_status_twitter + ' /><label for="perma_status_twitter">'
              + options.services.twitter.display_name + '</label>'
            );
          }

          if (pinterest_on && pinterest_perma) {
            var perma_status_pinterest = cookies.socialSharePrivacy_pinterest === 'perma_on' ? checked : '';
            $container_settings_info.find('form fieldset').append(
              '<input type="checkbox" name="perma_status_pinterest" id="perma_status_pinterest"'
              + perma_status_pinterest + ' /><label for="perma_status_pinterest">'
              + options.services.pinterest.display_name + '</label>'
            );
          }

          $container_settings_info.find('span.settings').css('cursor', 'pointer');

          // by mouse hover show the setting layer
          $(document).on('mouseenter', $container_settings_info.find('span.settings'), function () {
            var timeout_id = window.setTimeout(function () {
              $container_settings_info.find('.settings_info_menu').removeClass('off').addClass('on');
            }, 500);
            $(this).data('timeout_id', timeout_id);
            // hide refresh icon
            $('.social-refresh').hide();
          });
          $(document).on('mouseleave', $container_settings_info, function () {
            var timeout_id = $(this).data('timeout_id');
            window.clearTimeout(timeout_id);
            $container_settings_info.find('.settings_info_menu').removeClass('on').addClass('off');
            // hide refresh icon
            $('.social-refresh').hide();
          });
        }
        // click interaction on the input field, en/disable the service (write cookie)
        $(document).on('click', '.social_share_privacy_area li.settings_info fieldset input, .social_share_privacy_area .checkbox_switch input', function (event) {
          var click = event.target.id;
          var service = click.substr(click.lastIndexOf('_') + 1, click.length);
          var cookie_name = 'socialSharePrivacy_' + service;

          if ($('#' + event.target.id + ':checked').length) {
            cookieSet(cookie_name, 'perma_on', options.cookie_expires, options.cookie_path, options.cookie_domain);
            $('form fieldset label[for=' + click + ']', context).addClass('checked');
          } else {
            cookieDel(cookie_name, 'perma_on', options.cookie_path, options.cookie_domain);
            $('form fieldset label[for=' + click + ']', context).removeClass('checked');
          }
        });

        // show service if cookie is available
        if (facebook_on && facebook_perma && cookies.socialSharePrivacy_facebook === 'perma_on') {
          $('li.facebook .switch', context).click();
        }
        if (twitter_on && twitter_perma && cookies.socialSharePrivacy_twitter === 'perma_on') {
          $('li.twitter .switch', context).click();
        }
        if (pinterest_on && pinterest_perma && cookies.socialSharePrivacy_pinterest === 'perma_on') {
          $('li.pinterest .switch', context).click();
        }

        // create refresh icon after form
        $container_settings_info.find('form').append('<a href="' + document.location.href + '" class="social-refresh"><i class="fa fa-refresh"></i> </a>');

        $('.settings_info_menu form fieldset input').on('change', function () {
          $(this).parent().parent().find('.social-refresh').css('display', 'block');
        });
      }
    });
  };
}(jQuery));
