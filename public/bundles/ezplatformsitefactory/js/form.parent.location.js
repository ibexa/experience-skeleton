(function(global, doc, eZ, React, ReactDOM) {
    const token = doc.querySelector('meta[name="CSRF-Token"]').content;
    const siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
    const designItems = doc.querySelectorAll('.ez-site-factory-form-design__item');
    const parentLocationBreadcrumbs = doc.querySelector('.ez-site-factory-parent-location__breadcrumbs');
    const parentLocationBreadcrumbsNode = doc.querySelector('.ez-site-factory-parent-location__breadcrumbs-content');
    const parentLocationIdInput = doc.querySelector('.ez-site-factory-parent-location input');
    const clearParentLocationBtn = doc.querySelector('.ez-site-factory-parent-location__remove-btn');
    const openUdwBtn = doc.querySelector('.ez-site-factory-parent-location__select-location');
    const udwContainer = doc.querySelector('#react-udw');
    const openUDW = (event) => {
        event.preventDefault();
        const config = JSON.parse(event.currentTarget.dataset.udwConfig);
        const title = Translator.trans(/*@Desc("Choose Location")*/ 'select_location.label', {}, 'ezplatform_site_factory_ui');

        ReactDOM.render(
            React.createElement(eZ.modules.UniversalDiscovery, {
                onConfirm: onConfirm,
                onCancel: onCancel,
                title,
                ...config,
            }),
            udwContainer
        );
    };
    const closeUDW = () => ReactDOM.unmountComponentAtNode(udwContainer);
    const onCancel = () => closeUDW();
    const onConfirm = (items) => {
        const locationId = items[0].id;
        const pathString = items[0].pathString;

        closeUDW();
        findLocationsByIdList(removeRootFromPathString(pathString), (data) => {
            parentLocationBreadcrumbsNode.innerHTML = buildBreadcrumbsString(data);
        });

        if (parentLocationIdInput) {
            parentLocationIdInput.setAttribute('value', locationId);
            toggleVisibility();
        }
    };
    const findLocationsByIdList = (idList, callback) => {
        const body = JSON.stringify({
            ViewInput: {
                identifier: `udw-locations-by-path-string-${idList.join('-')}`,
                public: false,
                LocationQuery: {
                    FacetBuilders: {},
                    SortClauses: { SectionIdentifier: 'ascending' },
                    Filter: { LocationIdCriterion: idList.join(',') },
                    limit: 50,
                    offset: 0,
                },
            },
        });
        const request = new Request('/api/ezp/v2/views', {
            method: 'POST',
            headers: {
                Accept: 'application/vnd.ez.api.View+json; version=1.1',
                'Content-Type': 'application/vnd.ez.api.ViewInput+json; version=1.1',
                'X-Requested-With': 'XMLHttpRequest',
                'X-Siteaccess': siteaccess,
                'X-CSRF-Token': token,
            },
            body,
            mode: 'same-origin',
            credentials: 'same-origin',
        });
        const errorMessage = Translator.trans(
            /*@Desc("Cannot find children Locations with ID %idList%")*/ 'select_location.error',
            { idList: idList.join(',') },
            'universal_discovery_widget'
        );

        fetch(request)
            .then(eZ.helpers.request.getJsonFromResponse)
            .then(callback)
            .catch(() => eZ.helpers.notification.showErrorNotification(errorMessage));
    };
    const removeRootFromPathString = (pathString) => {
        const pathArray = pathString.split('/').filter((id) => id);

        return pathArray.splice(1, pathArray.length - 1);
    };
    const buildBreadcrumbsString = (viewData) => {
        const searchHitList = viewData.View.Result.searchHits.searchHit;

        return searchHitList.map((searchHit) => searchHit.value.Location.ContentInfo.Content.TranslatedName).join(' / ');
    };
    const clearParentLocation = () => {
        parentLocationBreadcrumbsNode.innerHTML = '';
        parentLocationIdInput.setAttribute('value', '');
        toggleVisibility();
    };
    const toggleVisibility = () => {
        const { value } = parentLocationIdInput;

        if (value) {
            openUdwBtn.setAttribute('hidden', true);
            parentLocationBreadcrumbs.removeAttribute('hidden');
        } else {
            openUdwBtn.removeAttribute('hidden');
            parentLocationBreadcrumbs.setAttribute('hidden', true);
        }
    };
    const changeParentLocationIdByDesign = (event) => {
        const { parentLocationId } = event.currentTarget.dataset;
        const { parentLocationBreadcrumbs } = doc.querySelector(`option[data-parent-location="${parentLocationId}"]`).dataset;

        parentLocationBreadcrumbsNode.innerHTML = parentLocationBreadcrumbs || '';

        if (parentLocationIdInput) {
            parentLocationIdInput.setAttribute('value', parentLocationId || '');
            toggleVisibility();
        }
    };

    designItems.forEach((design) => design.addEventListener('click', changeParentLocationIdByDesign, false));

    if (openUdwBtn) {
        openUdwBtn.addEventListener('click', openUDW, false);
    }

    if (clearParentLocationBtn) {
        clearParentLocationBtn.addEventListener('click', clearParentLocation, false);
    }
})(window, window.document, window.eZ, window.React, window.ReactDOM);
