(function(global, doc, ibexa) {
    const product = new ibexa.eshop.widgets.Product();
    const accordion = new ibexa.eshop.widgets.Accordion();

    product.init();
    accordion.init('.ezcommerce-accordion--product');
})(window, window.document, window.ibexa);
