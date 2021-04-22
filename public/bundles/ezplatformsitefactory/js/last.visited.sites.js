(function(doc, eZ) {
    const KEY_SITE_FACTORY_LAST_VISITED = 'ez-site-factory-last-visited';
    const menuItems = [...doc.querySelectorAll('#ezplatform_page_manager .navbar-nav .ez-navbar__item')];
    const siteData = {
        siteaccess: eZ.pageBuilder.data.siteaccess,
        locationId: eZ.pageBuilder.data.locationId,
    };
    const userId = eZ.helpers.user.getId();
    const saveLastVisited = () => {
        const lastVisitedStringified = localStorage.getItem(KEY_SITE_FACTORY_LAST_VISITED);
        const lastVisited = lastVisitedStringified ? JSON.parse(lastVisitedStringified) : {};
        const isSiteFactoryEntry = menuItems.some((menuItem) => parseInt(menuItem.dataset.ezSiteLocationId) === siteData.locationId);
        let lastVisitedIndex = -1;

        if (!lastVisited[userId]) {
            lastVisited[userId] = [];
        }

        if (isSiteFactoryEntry) {
            lastVisitedIndex = lastVisited[userId].findIndex(({ locationId }) => locationId === siteData.locationId);
        } else {
            lastVisitedIndex = lastVisited[userId].findIndex(({ siteaccess }) => siteaccess === siteData.siteaccess);
        }

        if (lastVisitedIndex > -1) {
            lastVisited[userId].splice(lastVisitedIndex, 1);
        }

        lastVisited[userId].unshift(siteData);
        lastVisited[userId].splice(5);

        localStorage.setItem(KEY_SITE_FACTORY_LAST_VISITED, JSON.stringify(lastVisited));
    };

    saveLastVisited();

    doc.body.dispatchEvent(new CustomEvent('ez-site-factory-refresh-menu'));
})(window.document, window.eZ);
