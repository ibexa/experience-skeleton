/*
 Document        : storm.cookiepolicy
 Author          : mkr
 Dependencies    :
 Requirements    : jQuery library (http://jquery.com/) 1.7.2, Storm tooltip plugin (if you want to use tooltip option)
 Description:
 Cookie policy plugin that allows user to allow / disallow for certain settings on a page.
 */

$.extend({
  cookiepolicy: function (options) {

    // protection for standalone plugin usage
    if (typeof storm_translations === 'undefined') {
      alert('Cookie Policy Error: Please load the storm_translation plugin');
      return;
    }

    if (typeof(options) == 'undefined') {
      options = {};
    }

    var current_level = null;
    var notice_timeout = null;

    var config = {
      tooltip_show: $('.cookie_link').data('use-tooltip'), // use tooltip to show what is allowed when hover over the level button
      tooltip_placement: 's', // tooltip placement 'n' stands for north (bottom)
      _demo_mode: false,
      cookie_name: 'cookie_policy_level',
      cookie_expires: new Date((new Date()).getTime() + 365 * 24 * 60 * 60 * 1000), // default to 365 days in the future
      autorun: true,
      // the id of one of the supplied levels
      default_level_id: 'functional',
      // popup element
      popup_container: 'body',
      // time in seconds that the notice will be displayed before being automatically hidden
      cookie_notice_autohide_timeout: 0, // 0 for never
      // an element that when clicked will let the user edit their settings. if the element is empty, this plugin will add some call to action text
      edit_settings_element: '#edit-cp-settings',
      // callback for when the level is changed *by the user*
      on_change: function () {
      },
      // url of a page explaining how cookies are to be used on the website
      cookie_policy_url: $('.cookie_link').data('policy-link'),
      // settings levels, starting with basic (legal for all sites) and incrementally getting more cookies set
      // when the run() method is called, callback functions will be invoked from level index 0 through to the current level
      levels: [{}],
      // strategy defines the way how user can interact
      // simple - just an information with OK button
      // advanced - close icon + button to show a modal window with different levels
      strategy: 'simple'
    };

    // if levels have been specified then remove default levels
    if (options.levels && options.levels.length > 0) {
      config.levels = [];
    }

    $.extend(true, config, options);

    // setup translations for simple strategy
    var simpleTranslations = {
      COOKIE: {
        LVL_SIMPLE_STRATEGY_ALLOWED: [],
        LVL_SIMPLE_STRATEGY_DISALLOWED: [],
      }
    };
    storm_translations.set(simpleTranslations);

    if (config.levels.length > 4) {
      s_d.l('cookiepolicy accepts a maximum of 4 levels.');
      return;
    }

    if (config.strategy === 'advanced') {
      for (var i = 0, level; level = config.levels[i]; i++) {
        if (level.id.indexOf(' ') > -1) {
          s_d.l('cookiepolicy level id properties cannot contain spaces.');
          return;
        }
      }
    } else {
      config.levels.push({id: 'simple_strategy', title: 'Simple strategy'});
    }

    // append edit button to the container
    $('.cookie_link').append('<a href="#" id="edit-cp-settings" />');

    config.edit_settings_element = $(config.edit_settings_element);

    if (config.edit_settings_element.length == 0) {
      s_d.l('cookiepolicy could not find the element specific in the edit_settings_element property');
      return;
    }

    // level methods
    config.levels.get = function (level_id) {
      return get_by_id.call(this, level_id);
    };
    config.levels.select = function (level) {
      switch (typeof(level)) {
        case 'string':
          level = get_by_id.call(config.levels, level);
          break;
        case 'object':
          level = get_by_id.call(config.levels, level.id);
          break;
        default:
          s_d.l('select_level() requires a level id or an actual level object');
          return;
      }
      if (level) {
        current_level = level;

        // update level changer
        var buttons = level_changer.find('a');
        buttons.removeClass('activated');
        for (var i = 0, button; button = buttons[i]; i++) {
          if ($(button).data('level').id == level.id) {
            $(button).addClass('activated');
          }
        }

        // clear permission panels contents for each level
        permission_panels.find('.cp-permission-panel-disallowed ul').html('');
        permission_panels.find('.cp-permission-panel-allowed ul').html('');

        // allowed
        for (var i = 0, permission; permission = storm_translations.get('COOKIE', 'LVL_' + current_level.id.toUpperCase() + '_ALLOWED')[i]; i++) {
          permission_panels.find('.cp-permission-panel-allowed ul').append('<li>' + permission + '</li>');
        }
        // disallowed
        for (var i = 0, permission; permission = storm_translations.get('COOKIE', 'LVL_' + current_level.id.toUpperCase() + '_DISALLOWED')[i]; i++) {
          permission_panels.find('.cp-permission-panel-disallowed ul').append('<li>' + permission + '</li>');
        }

        permission_panels.find('ul').hide().fadeIn('normal');

      } else {
        // supplied level not found, so first try and fall back to the default level, if that fails, default to first level
        level = config.levels.get(config.default_level_id);
        if (!level) {
          if (config.levels.length > 0) {
            level = config.levels[0];
          } else {
            s_d.l('cookiepolicy level supplied to select_level does not exist, and could not default');
            return;
          }
        }
        return config.levels.select(level);
      }
      return level;
    };

    config.levels.saved = function () {
      return get_by_id.call(config.levels, cookies.get(config.cookie_name));
    };

    // array helpers
    function get_by_id(id) {
      for (var i = 0, elem; elem = this[i]; i++)
        if (elem.id == id) {
          return elem;
        }
      return null;
    }

    // cookie methods
    var cookies = {
      set: function (name, value) {
        document.cookie = name + "=" + escape(value) + "; expires=" + config.cookie_expires.toGMTString() + "; path=/;";
      },
      get: function (name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
          begin = dc.indexOf(prefix);
          if (begin != 0)
            return "";
        } else
          begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1)
          end = dc.length;
        return unescape(dc.substring(begin + prefix.length, end));
      },
      remove: function (name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
      }
    };

    // read more button link
    var btn_read_more = '<a href="' + config.cookie_policy_url + '" class="cp-link" target="_blank">' + storm_translations.get('COOKIE', 'READ_MORE') + '</a>';

    // edit settings dialog
    var overlay = $('<div class="cp-overlay" />');
    var settings_dialog = $(
      '<div class="cp-dialog-content cp-edit-settings white_back border round shadow">' +
      (typeof(storm_translations.get('COOKIE', 'EDIT_SETTINGS_INTRO')) == 'string' ? storm_translations.get('COOKIE', 'EDIT_SETTINGS_INTRO') : storm_translations.get('COOKIE', 'EDIT_SETTINGS_INTRO').html()) +
      '<div class="cp-level-changer-wrap">' +
      '<p class="description">' + storm_translations.get('COOKIE', 'DESCRIPTION') + '</p>' +
      '<div class="cp-level-changer" />' +
      '<div class="cp-save-wrapper hide"><a href="#" class="button action bigger">' + storm_translations.get('COOKIE', 'BTN_SAVE') + '</a></div>' +
      '<div class="cp-notice-wrapper message notice border round hide"></div>' +
      '<div class="message success border round"><p><span class="sprite sprite-030g-success"></span>' + storm_translations.get('COOKIE', 'SUCCESS') + '</p></div>' +
      '<div class="cp-permission-panels">' +
      '<div class="cp-permission-panel-disallowed"><div class="cp-permission-panel-title left_align">' + storm_translations.get('COOKIE', 'PANEL_DISALLOWED') + '</div><ul class="" /></div>' +
      '<div class="cp-permission-panel-allowed"><div class="cp-permission-panel-title left_align">' + storm_translations.get('COOKIE', 'PANEL_ALLOWED') + '</div><ul class="" /></div>' +
      '</div>' +
      '</div>' +
      '<div class="bottom-links">' +
      (config.cookie_policy_url.length > 0 ? btn_read_more : '') +
      '<div class="clear-cookies-wrapper"></div>' +
      '</div>' +
      '</div>'
    );

    var close_settings_dialog = make_button('&times;', '', 'bigger close').addClass('cp-dialog-close');
    settings_dialog.append(close_settings_dialog);

    $('body').append(overlay.hide()).append($('<div class="cp-dialog" />').append(settings_dialog.hide()));

    close_settings_dialog.click(function (e) {
      e.preventDefault();
      close_settings();
    });
    settings_dialog.parent().click(function () {
      close_settings();
    });
    settings_dialog.click(function (e) {
      e.stopPropagation();
    });
    overlay.click(function () {
      close_settings();
    });

    // notice wrapper
    var notice_wrapper = settings_dialog.find('.cp-notice-wrapper');


    // create tooltip with allowed options for each button if tooltip plugin is loaded
    var allow_tooltip = false;
    if (config.tooltip_show) {
      if (typeof storm_load.exists === 'function' && storm_load.exists('tooltip')) {
        allow_tooltip = true;
      } else {
        // loading plugins js files
        s_d.l('please load tooltip plugin manually')
      }
    }

    // level changer
    var level_changer = settings_dialog.find('.cp-level-changer');
    for (var i = 0, level; level = config.levels[i]; i++) {
      var width = (96 / config.levels.length);
      var margin = ((4 / config.levels.length) / 2);
      var button = $(
        '<a href="#" class="round" style="width:' + width + '%; margin:' + margin + '%;" id="' + level.id + '">' +
        '<span class="cp-level-button-icon cp-level-' + level.id + '" />' +
        '<span class="cp-level-button-title">' + level.title + '</span>' +
        '</a>'
      );
      if (allow_tooltip) {
        var tooltip = $('<ul class="popup_inner">');
        for (var k = 0, permission; permission = storm_translations.get('COOKIE', 'LVL_' + level.id.toUpperCase() + '_ALLOWED')[k]; k++) {
          tooltip.append('<li>' + permission + '</li>');
        }
        button.data('powertip', tooltip).powerTip({
          'placement': config.tooltip_placement
        });
      }

      button.data('level', level);
      button.click(function () {
        // set chosen level id to save button
        save_wrapper.children('a').attr('data-level', $(this).attr('id'));

        config.levels.select($(this).attr('id'));

        // show panels
        settings_dialog.find('.cp-permission-panels').show();

        // hide thank you message
        thanks.hide();

        // show save button if we didn't save this level yet
        if (cookies.get(config.cookie_name) !== $(this).attr('id')) {
          save_wrapper.show();
          notice_wrapper.hide();
        } else {
          show_notice(storm_translations.get('COOKIE', 'CURRENT_SETTINGS'));
          save_wrapper.hide();
        }

        // create link or message inside clear cookies wrapper
        if (cookies.get(config.cookie_name)) {
          clear_cookies.html(clear_cookies_link);
        } else {
          clear_cookies.html(storm_translations.get('COOKIE', 'NO_COOKIES'));
        }

        return false;
      });

      level_changer.append(button);

      // set the icon (the bars)
      var icon_wrap = button.find('.cp-level-button-icon');
      for (var x = 0; x < config.levels.length; x++) {
        var height = (100 - ((90 / config.levels.length) * ((config.levels.length - 1) - x)));
        var width = (100 / config.levels.length);
        var left = ((width * x) + (margin * x));
        icon_wrap.append('<div style="height:' + height + '%; width:' + width + '%; left:' + left + '%;"' + (x <= i ? ' class="activated"' : '') + ' />');
      }
    }

    // save your settings
    var save_wrapper = settings_dialog.find('.cp-save-wrapper');
    save_wrapper.children('a').on('click', function (e) {
      e.preventDefault();
      // hide save button
      $(this).parent().hide();

      // show thank you message
      thanks.show();

      // hide clear cookies message
      notice_wrapper.hide();

      // set up clear cookie link
      clear_cookies.html(clear_cookies_link);

      // set cookie for this level
      cookies.set(config.cookie_name, $(this).attr('data-level'));

      // on change callback
      if (typeof(config.on_change) == 'function') {
        config.on_change();
      }
    });

    // thank you message container
    var thanks = settings_dialog.find('.success');
    thanks.hide();

    // clear all link
    var clear_cookies = settings_dialog.find('.clear-cookies-wrapper');
    var clear_cookies_link = '<a href="#" class="clear-cookies">' + storm_translations.get('COOKIE', 'LINK_CLEAR') + '</a>';

    if (cookies.get(config.cookie_name)) {
      clear_cookies.html(clear_cookies_link);
    } else {
      clear_cookies.html(storm_translations.get('COOKIE', 'NO_COOKIES'));
    }

    // clear cookies action
    clear_cookies.on('click', function (e) {
      e.preventDefault();

      if ($(this).find('a.clear-cookies').length > 0) {
        // remove cookie
        cookies.remove(config.cookie_name);
        // change text to "no cookies set" and remove <a> tag
        $(this).html(storm_translations.get('COOKIE', 'NO_COOKIES'));
        // hide success
        thanks.hide();

        // rearange buttons and panels
        settings_dialog.find('.cp-level-changer a').removeClass('activated');

        if (config.levels.length > 1) {
          settings_dialog.find('.cp-permission-panels').hide();
          save_wrapper.hide();
        } else {
          save_wrapper.show();
        }

        if (typeof(config.on_change) === 'function') {
          config.on_change();
        }

        show_notice(storm_translations.get('COOKIE', 'COOKIES_REMOVED'));
      }
    });

    // permission panels
    var permission_panels = settings_dialog.find('.cp-permission-panels');

    // if there is no cookie set we don't show empy packages description containers
    if (!cookies.get(config.cookie_name)) {
      settings_dialog.find('.cp-permission-panels').hide();
    } else {
      settings_dialog.find('.cp-permission-panels').show();
    }

    // edit settings link
    if (config.edit_settings_element != null && config.strategy === 'advanced') {
      config.edit_settings_element.html(storm_translations.get('COOKIE', 'CHANGE_SETTINGS')).click(function () {
        edit_settings();
        return false;
      });
    }

    // show notice helper function
    function show_notice(message) {
      notice_wrapper.show().html('<p><span class="sprite sprite-030e-notice"></span>' + message + '</p>')
    }

    function edit_settings() {
      overlay.show();

      // if there is only one level click on it to load the contents and hide it
      if (config.levels.length <= 1) {
        $('.cp-level-changer').children('a').click().hide();
        // hide level change description if there is only one level
        $('.cp-level-changer-wrap .description').hide();
      }

      settings_dialog.css({'top': $(window).scrollTop() + 'px'}).fadeIn('fast');
      $('.cp-popup').hide();
    }

    function close_settings() {
      overlay.hide();
      settings_dialog.fadeOut('fast');
    }

    // ui elements
    function make_button(text, sprite, css_class) {
      var button = $('<a href="#" class="' + css_class + '">' + (sprite ? '<span class="sprite ' + sprite + '" />' : '') + text + '</a>');
      return button;
    }

    function run_callbacks(stop_with_current_level) {
      for (var i = 0, level; level = config.levels[i]; i++) {
        if (typeof(level.callback) == 'function') {
          level.callback();
        }
        if (current_level != null) {
          if (stop_with_current_level && level.id == current_level.id) {
            return;
          }
        }
      }
    }

    // initialize and run
    function initialise() {
      function cookie_policy(prevent_callback_execution) {
        // popup message if they haven't yet seen the cookie notice
        if (config._demo_mode || config.levels.saved() == null ) {
          var popup = $(
            '<div class="cp-popup"><div class="cp-popup-inner">' +
            (typeof(storm_translations.get('COOKIE', 'COOKIE_NOTICE')) == 'string' ? storm_translations.get('COOKIE', 'COOKIE_NOTICE') : storm_translations.get('COOKIE', 'COOKIE_NOTICE').html()) +
            (config.cookie_policy_url.length > 0 ? '&nbsp;' + btn_read_more : '') +
            '<div class="cp-button-wrap" />' +
            '</div>' +
            '</div></div>'
          );
          var change_settings = make_button(storm_translations.get('COOKIE', 'BTN_CHANGE'), '', 'button tiny action');
          var dismiss =
            config.strategy === 'advanced' ?
              make_button('&times;', '', 'close bigger') :
              make_button(storm_translations.get('COOKIE', 'BTN_ACCEPT'), '', 'button tiny close simple js-simple-strategy');

          popup.find('.cp-button-wrap').append(dismiss);

          if (config.strategy === 'advanced') {
            popup.find('.cp-button-wrap').append(change_settings);
          } else {
            popup.addClass('simple');
          }

          popup.hover(function () {
            $(this).data('mouseover', true);
          }, function () {
            $(this).data('mouseover', false);
          });

          change_settings.click(function (e) {
            e.preventDefault();
            edit_settings();
          });

          dismiss.click(function (e) {
            e.preventDefault();
            if ($(this).hasClass('js-simple-strategy') && config.strategy === 'simple') {
              // for simple strategy clicking on close saves settings
              cookies.set(config.cookie_name, 'simple_strategy');
            }
            popup.fadeOut('normal');
          });

          $(config.popup_container).prepend(popup);

          if (config.cookie_notice_autohide_timeout > 0) {
            notice_timeout = setTimeout(function () {
              if (!popup.data('mouseover')) {
                popup.fadeOut('normal');
              }
            }, (config.cookie_notice_autohide_timeout * 1000));
          }
        }

        initialise_level_changer();

        if (!prevent_callback_execution) {
          // runs through each levels callbacks up to and including the current level
          run_callbacks(true);
        }
      }

      function initialise_level_changer() {
        if (config.levels.saved() !== null) {
          // initialize UI with current level
          config.levels.select(config.levels.saved());
        }
      }

      // fire up main function
      cookie_policy();
    }

    if (config.autorun) {
      initialise();
    }

    // public
    return {
      get_levels: function () {
        return config.levels;
      },
      get_level: function (level_id) {
        return config.levels.get(level_id);
      },
      select_level: function (level) {
        return config.levels.select(level);
      },
      saved_level: function (level) {
        return config.levels.saved();
      },
      is_granted: function (level_id) {
        for (var i = 0, level; level = config.levels[i]; i++) {
          if (level.id == level_id) {
            return true;
          }
          if (level.id == current_level.id) {
            return false;
          }
        }
        return false;
      },
      edit_settings: function () {
        edit_settings();
      },
      run: function () {
        initialise();
      }
    };
  }
});
