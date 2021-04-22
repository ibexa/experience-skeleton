(function(doc, $) {
    const SELECTOR_INVALID = '.is-invalid';
    const SELECTOR_TAB = '.ez-block-config__tab';
    const SELECTOR_NAV_LINK = '.ez-block-config__link';
    const CLASS_HAS_INVALID_FIELDS = 'ez-block-config__link--has-invalid-fields';
    const errorNodes = [...doc.querySelectorAll(SELECTOR_INVALID)];

    errorNodes.forEach((errorNode, index) => {
        const tab = errorNode.closest(SELECTOR_TAB);
        const tabId = tab.id;
        const navLink = doc.querySelector(`${SELECTOR_NAV_LINK}[href="#${tabId}"]`);

        navLink.classList.add(CLASS_HAS_INVALID_FIELDS);

        if (!index) {
            $(navLink).tab('show');
        }
    });
})(window.document, window.jQuery);
