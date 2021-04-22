/*
 Document        : storm.cookiepolicy.actions
 Author          : mkr
 Dependencies    : jquery.cookiepolicy plugin (js/plugins/socialshare/jquery.cookiepolicy.js)
 Description:
 Actions for storm cookie policy plugin.
 */

$(function () {
  // call the plugin with this settings

  var settings = {
    popup_container: $('.js-main-section')
  };

  // uncomment this if you want to use advanced strategy with multilevels
  /*
  settings = {
    strategy: 'advanced',
    levels: [
      {
        id: 'first_policy',
        title: 'Default Browser Settings',
        callback: function () {
        }
      },
      {
        id: 'second_policy',
        title: 'Strict Cookie Settings',
        callback: function () {
        }
      },
      {
        id: 'third_policy',
        title: 'Super Strict Cookie Settings',
        callback: function () {
        }
      },
      {
        id: 'fourth_policy',
        title: 'Super Strict Cookie Settings',
        callback: function () {
        }
      }
    ]
  }
  */

  $.cookiepolicy(settings);
});
