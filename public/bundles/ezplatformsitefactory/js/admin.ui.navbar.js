(function(doc, eZ) {
    const KEY_SITE_FACTORY_LAST_VISITED = 'ez-site-factory-last-visited';
    const userId = eZ.helpers.user.getId();
    const menu = doc.querySelector('#ezplatform_page_manager .navbar-nav');
    const menuItems = [...doc.querySelectorAll('#ezplatform_page_manager .navbar-nav .ez-navbar__item')];
    const getLastVisited = () => {
        const lastVisitedStringified = localStorage.getItem(KEY_SITE_FACTORY_LAST_VISITED);
        const lastVisited = lastVisitedStringified ? JSON.parse(lastVisitedStringified) : {};

        return lastVisited[userId] || [];
    };
    const showMenuItems = (lastVisited) => {
        menuItems.forEach((menuItem) => {
            const itemLocationId = parseInt(menuItem.dataset.ezSiteLocationId);
            const itemSiteAccess = menuItem.dataset.ezSiteAccess;
            let savedItemIndex = -1;

            if (!itemLocationId) {
                savedItemIndex = lastVisited.findIndex(({ siteaccess }) => siteaccess === itemSiteAccess);
            } else {
                savedItemIndex = lastVisited.findIndex(({ locationId, siteaccess }) => locationId === itemLocationId && siteaccess === itemSiteAccess);
            }

            if (savedItemIndex > -1) {
                menuItem.classList.add('ez-navbar__item--visible');
                menuItem.style.order = savedItemIndex;
            } else {
                menuItem.classList.remove('ez-navbar__item--visible');
                menuItem.style.order = undefined;
            }
        });
    };

    if (!menu) {
        return;
    }

    const lastVisited = getLastVisited();
    showMenuItems(lastVisited);

    doc.body.addEventListener('ez-site-factory-refresh-menu', () => {
        const lastVisited = getLastVisited();
        showMenuItems(lastVisited);
    });
})(window.document, window.eZ);
