(function(global, doc, ibexa) {
    const basket = new ibexa.eshop.widgets.BasketWidget({
        container: doc.querySelector('.ezcommerce-basket-widget'),
    });

    basket.init();

    ibexa.eshop.helpers.basket.get();
})(window, window.document, window.ibexa);
