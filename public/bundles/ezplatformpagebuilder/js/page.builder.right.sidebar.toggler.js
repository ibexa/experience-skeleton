(function(global, doc) {
    const SIDEBAR_MENU_SELECTOR = '.ez-page-builder-right-sidebar';
    const EXPAND_MENU_BUTTON_SELECTOR = '.ez-right-sidebar-toggler';

    doc.querySelector(EXPAND_MENU_BUTTON_SELECTOR).addEventListener('click', () => {
        doc.querySelector(EXPAND_MENU_BUTTON_SELECTOR).classList.toggle('ez-right-sidebar-toggler--expanded');
        doc.querySelector(SIDEBAR_MENU_SELECTOR).classList.toggle('ez-page-builder-right-sidebar--expanded');
    });
})(window, window.document);
