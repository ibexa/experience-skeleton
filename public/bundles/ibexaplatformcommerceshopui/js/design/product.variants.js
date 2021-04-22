(function(global, doc, ibexa) {
    class Product extends ibexa.eshop.widgets.ProductVariants {
        updateContainer({ container, template, response }) {
            const { priceData, stockData } = response.get_ProductInformation;
            let newTemplate = template;
            let shouldRemoveAvailability = false;

            if (priceData.price) {
                newTemplate = newTemplate
                    .replace('{{ stock }}', stockData.stockNumeric || 0)
                    .replace('{{ price_label }}', 'Price:')
                    .replace('{{ price_value }}', priceData.price.formattedPrice);
            } else {
                newTemplate = newTemplate
                    .replace('{{ price_label }}', 'Price from:')
                    .replace('{{ price_value }}', priceData.minPrice.formattedPrice);

                shouldRemoveAvailability = true;
            }

            container.innerHTML = newTemplate;

            if (shouldRemoveAvailability) {
                container.querySelector('.ezcommerce-product__product-availability').remove();
            }

            return { container, template, response };
        }
    }

    const product = new Product({
        sku: doc.querySelector('input[name="ses_basket[0][sku]"]').value,
    });

    product.init();
})(window, window.document, window.ibexa);
