/*
    Document        : storm.translations
    Author          : mkr
    Dependencies    : provider.js
    Description:
        Adding the functionality to translate all static text in plugins.
 */

var storm_translations = {
    translations : {},
    settings : {
        load: 'static' // static or ajax
    },
    type : '',
    init : function(type) {
        storm_translations.type = type;

        // load files static way
        if (storm_translations.settings.load == 'static')   {
            // check the language and load the translation file if exists
            var load_language = true;
            var file_path = path.translation;
            // load extended translation file
            if (storm_translations.type == 'extended') {
                file_path = path.extended_translation;
                if (!storm_load.file_exists(file_path + '/' + storm_translations.get_language() + '.js')) {                    
                    load_language = false;
                }
            }

            if (load_language) {
                head.js(file_path + '/' + storm_translations.get_language() + '.js', function() {

                    storm_translations.set(translations);
                    if (!storm_translations.type) {
                        storm_translations.init('extended');
                    }
                    
                    // load plugins if loading function exists
                    if(typeof provider_loader === 'function') {
                        provider_loader();
                    }
                });
            }
        } else if (storm_translations.settings.load == 'ajax') {
            // TODO load by Ajax call
        }
    },
    set : function(translations) {
        // merging together original translation file with extended one
        $.extend(true, storm_translations.translations, translations);
    },
    get : function(plugin, key) {
        // TODO check the method of calling
        // returns translated string or throws error when there is no translation
        if (storm_translations.translations[plugin][key])
            return storm_translations.translations[plugin][key];
        else {
            var error = 'NO KEY EXISTS: ' + plugin + '::' + key;
            s_d.l(error);
            return error;
        }
    },
    get_language : function() {
        // getting page language based on HTML lang attribute
        return $('html').attr('lang');
    }
}