(function(global, doc) {
    const token = doc.querySelector('meta[name="CSRF-Token"]').content;
    const siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
    const languageCode = doc.querySelector('meta[name="LanguageCode"]').content;
    const SELECTOR_SELECT_BTN = '.fb-location__select-btn';
    const SELECTOR_LOCATION_NAME = '.fb-location__location-name';
    const changeLocation = (container, locations) => {
        const selectLocationBtn = container.querySelector(SELECTOR_SELECT_BTN);
        const locationNameContainer = container.querySelector(SELECTOR_LOCATION_NAME);
        const hiddenValueInput = container.querySelector(selectLocationBtn.dataset.target);
        const newLocation = locations[0];

        hiddenValueInput.value = newLocation.id;
        locationNameContainer.innerText = newLocation.ContentInfo.Content.Name;
    };
    const openUdw = (container, udwConfig) => {
        const openUdwEvent = new CustomEvent('ez-open-udw', {
            detail: Object.assign(
                {
                    onConfirm: changeLocation.bind(null, container),
                    onCancel: () => {},
                    restInfo: { token, siteaccess },
                    cotfAllowedLanguages: [languageCode],
                },
                udwConfig
            ),
        });

        doc.body.dispatchEvent(openUdwEvent);
    };

    doc.querySelectorAll('.fb-location').forEach((container) => {
        const selectLocationBtn = container.querySelector(SELECTOR_SELECT_BTN);
        const udwConfig = JSON.parse(selectLocationBtn.dataset.udwConfig);

        selectLocationBtn.addEventListener('click', openUdw.bind(null, container, udwConfig));
    });
})(window, window.document);
