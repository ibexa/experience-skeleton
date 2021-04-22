(function(global, eZ) {
    eZ.EzLandingPageValidator = class EzLandingPageValidator extends eZ.BaseFieldValidator {
        constructor(config) {
            super(config);

            this.pageBuilder = config.pageBuilder;
        }

        /**
         * Validates the input field value
         *
         * @method validateInput
         * @returns {Object}
         * @memberof EzLandingPageValidator
         */
        validateInput() {
            const isValid = this.pageBuilder.validateAllBlocksData();
            const errorMessage = Translator.trans(
                /*@Desc("Some blocks are missing configuration")*/ 'fieldtype.landing_page.missing_proper_configuration.error.message',
                {},
                'page_builder'
            );

            return { isError: !isValid, errorMessage };
        }
    };
})(window, window.eZ);
