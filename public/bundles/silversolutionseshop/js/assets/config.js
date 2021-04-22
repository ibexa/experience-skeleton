/**
    Document        : config
    Author          : mkr
    Dependencies    :
    Description:
        Basic configuration for the project
*/
var isDevMode = true;
if(document.getElementsByTagName('body')[0]) {
    var isDevMode = document.getElementsByTagName('body')[0].getAttribute('data-env') === 'dev' ? true : false;
}
    s_d = {
        l: function (m) {
            // disable log for production
//            if ( isDevMode ) {
                if (typeof console === "undefined" || typeof console.log === "undefined") {
                    window.console.log(m);
                } else {
                    console.log(m);
                }
//            } else {
//                return false;
//            }
        },
        log: function (m) {
            s_d.l(m);
        }
    },
    site_root = location.protocol + '//' + document.domain;

    // make sure we have access to IE detection
    jQuery.browser={};
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if ( navigator.userAgent.match(/MSIE ([0-9]+)\./) ) {
        jQuery.browser.msie = true;
        jQuery.browser.version = parseInt(RegExp.$1);
    }