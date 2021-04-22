import getFormDataFromObject from './helpers/form.data.helper.js';

(function(global, doc, eZ) {
    const skuWrapper = doc.querySelector('.ez-sku-search--price');

    if (!skuWrapper) {
        return;
    }

    const searchInput = skuWrapper.querySelector('.ez-sku-search__input');
    const searchButton = skuWrapper.querySelector('.ez-btn--search');
    const searchResults = skuWrapper.querySelector('.ez-sku-search__results');
    const tableWrapper = skuWrapper.querySelector('.ez-price-management');
    const saveButton = skuWrapper.querySelector('.ez-btn--save');
    const enterKeyCode = 13;
    let skuData = {};
    const handleKeyUp = (event) => {
        const keyCode = event.charCode || event.keyCode || 0;

        if (keyCode === enterKeyCode) {
            search();
        }
    };
    const search = (skuCode, currency = 'EUR') => {
        const sku = skuCode || searchInput.value;
        const request = new Request(Routing.generate('siso_menu_admin_fetch_prices', { shopId: 'MAIN', currency }), {
            method: 'POST',
            body: getFormDataFromObject({ sku }),
            mode: 'same-origin',
            credentials: 'same-origin',
        });

        fetch(request)
            .then(eZ.helpers.request.getJsonFromResponse)
            .then(handleSearchResponse)
            .catch(eZ.helpers.notification.showErrorNotification);
    };
    const handleSearchResponse = (response) => {
        if (response.result.message !== undefined) {
            const notFoundMessage = Translator.trans(/*@Desc("Product not found")*/ 'product.not_found', {}, 'price_stock_ui');

            eZ.helpers.notification.showWarningNotification(notFoundMessage);

            if (searchResults) {
                searchResults.classList.add('ez-sku-search__results--hidden');
            }

            return;
        }

        skuData = response.result;

        tableWrapper.innerHTML = '';
        if (typeof skuData.variants === 'object' && Object.keys(skuData.variants).length > 0) {
            Object.keys(skuData.variants).forEach(renderPriceTable);
        } else {
            renderPriceTable('-');
        }
    };

    const renderPriceTable = (variantSku) => {
        const tableFragment = doc.createDocumentFragment();
        const currencySelectFragment = doc.createDocumentFragment();
        const tableRowFragment = doc.createDocumentFragment();
        const contentName = variantSku === '-' ? skuData.name : `${skuData.name}/${variantSku}`;
        const skuPrices = skuData.prices[variantSku] || [];
        const variantListPrice = skuData.variants[variantSku] !== undefined ? skuData.variants[variantSku].listPrice : skuData.baseprice;

        const tableHeaderText = Translator.trans(
            /*@Desc("Prices for %contentName%, List price %price%")*/ 'price.table.header',
            {
                contentName,
                price: `${variantListPrice * skuData.currencyList[skuData.currency]} ${skuData.currency}`,
            },
            'price_stock_ui'
        );
        const tableTemplate = tableWrapper.dataset.tableTemplate;
        const renderedTableTemplate = tableTemplate.replace('{{ header_text }}', tableHeaderText).replace('{{ variant_sku }}', variantSku);
        const tableWrapperContainer = doc.createElement('div');

        tableWrapperContainer.insertAdjacentHTML('beforeend', renderedTableTemplate);

        const priceTableWrapper = tableWrapperContainer.querySelector('.ez-price-table');

        tableFragment.append(priceTableWrapper);

        skuPrices.forEach((price) => {
            const container = doc.createElement('tbody');
            const template = tableFragment.querySelector('table').dataset.rowTemplate;
            const sku = skuWrapper.dataset.sku || searchInput.value;
            const renderTemplate = template.replace('{{ sku }}', sku);

            container.insertAdjacentHTML('beforeend', renderTemplate);

            const row = container.querySelector('tr');
            const customerGroupSelect = row.querySelector('.ez-table__customer-group-select');
            const customGroupFragment = createCustomGroupsFragment();

            customerGroupSelect.append(customGroupFragment);
            customerGroupSelect.value = price.customerGroup.groupId;

            row.querySelector('.ez-table__base-price').value = price.basePrice;
            row.querySelector('.ez-table__offer-price').value = price.offerPrice;
            row.querySelector('.btn').addEventListener(
                'click',
                (event) => {
                    event.currentTarget.closest('tr').remove();
                },
                false
            );

            tableRowFragment.append(row);
        });

        Object.keys(skuData.currencyList).forEach((currency) => {
            const container = doc.createElement('select');
            const option = `<option value="${currency}">${currency}</option>`;

            container.insertAdjacentHTML('beforeend', option);

            currencySelectFragment.append(container.querySelector('option'));
        });

        const currencySelect = tableFragment.querySelector('.ez-table-header__price-select');
        const addPriceButton = tableFragment.querySelector('.ez-btn--add-price');

        currencySelect.innerHTML = '';
        currencySelect.append(currencySelectFragment);
        currencySelect.value = skuData.currency;

        currencySelect.addEventListener('change', (event) => search(skuWrapper.dataset.sku, event.target.value), false);
        addPriceButton.addEventListener(
            'click',
            (event) => addPriceRow(event.target.closest('.ez-price-table').querySelector('table')),
            false
        );

        tableFragment.querySelector('tbody').append(tableRowFragment);
        tableWrapper.append(tableFragment);

        saveButton.classList.remove('ez-btn--hidden');

        if (searchResults) {
            searchResults.classList.remove('ez-sku-search__results--hidden');
        }
    };
    const addPriceRow = (table) => {
        const container = doc.createElement('tbody');
        const template = table.dataset.rowTemplate;
        const sku = skuWrapper.dataset.sku || searchInput.value;
        const renderTemplate = template.replace('{{ sku }}', sku);
        const customGroupFragment = createCustomGroupsFragment();

        container.insertAdjacentHTML('beforeend', renderTemplate);

        const row = container.querySelector('tr');

        row.querySelector('.ez-table__customer-group-select').append(customGroupFragment);
        row.querySelector('.btn').addEventListener(
            'click',
            (event) => {
                event.currentTarget.closest('tr').remove();
            },
            false
        );

        table.querySelector('tbody').append(row);
    };
    const createCustomGroupsFragment = () => {
        const customGroupFragment = doc.createDocumentFragment();

        skuData.customerGroups.forEach((customerGroup) => {
            const container = doc.createElement('select');
            const option = `<option value="${customerGroup.groupId}">${customerGroup.label}</option>`;

            container.insertAdjacentHTML('beforeend', option);

            customGroupFragment.append(container.querySelector('option'));
        });

        return customGroupFragment;
    };
    const save = () => {
        const tables = tableWrapper.querySelectorAll('.ez-price-table');

        tables.forEach((table) => {
            const variantSku = table.dataset.sku;
            const tableRows = [...table.querySelectorAll('tbody tr')];
            const prices = tableRows.map((tableRow) => {
                const groupId = tableRow.querySelector('.ez-table__customer-group-select').value;
                const groupLabel = skuData.customerGroups.find((group) => groupId === group.groupId).label;

                return {
                    currency: skuData.currency,
                    shopId: 'MAIN',
                    sku: skuData.sku,
                    variantCode: variantSku,
                    basePrice: parseFloat(tableRow.querySelector('.ez-table__base-price').value),
                    offerPrice: parseFloat(tableRow.querySelector('.ez-table__offer-price').value),
                    groupId: groupId,
                    customerGroup: {
                        groupId: groupId,
                        label: groupLabel,
                    },
                };
            });

            skuData.prices[variantSku] = prices;
        });

        const request = new Request(Routing.generate('siso_menu_admin_update_prices'), {
            method: 'POST',
            body: getFormDataFromObject({ prices: skuData }),
            mode: 'same-origin',
            credentials: 'same-origin',
        });

        fetch(request)
            .then(eZ.helpers.request.getJsonFromResponse)
            .then((response) => {
                if (response.message !== '') {
                    const notSavedMessage = Translator.trans(/*@Desc("Couldn't save the prices")*/ 'price.not_saved', {}, 'price_stock_ui');

                    eZ.helpers.notification.showErrorNotification(notSavedMessage);
                } else {
                    const savedMessage = Translator.trans(/*@Desc("Prices saved successfully")*/ 'price.saved', {}, 'price_stock_ui');

                    eZ.helpers.notification.showSuccessNotification(savedMessage);
                }
            })
            .catch(eZ.helpers.notification.showErrorNotification);
    };

    if (searchInput) {
        searchInput.addEventListener('keyup', handleKeyUp, false);
    }

    if (searchButton) {
        searchButton.addEventListener('click', () => search(), false);
    }

    if (skuWrapper.dataset.sku) {
        search(skuWrapper.dataset.sku);
    }

    saveButton.addEventListener('click', save, false);
})(window, window.document, window.eZ);
