import addConfig from '../helpers/addConfig';

(function(global, doc, ibexa) {
    class ProductMulti extends ibexa.eshop.widgets.Product {
        setElements() {
            super.setElements();

            this.quantity = [...doc.querySelectorAll('.ezcommerce-js--quantity')];
            this.minQuantity = this.quantity.length ? parseInt(this.quantity[0].dataset.ezcommerceMinQuantity, 10) : 1;
        }

        checkDatasetExistance() {
            if (this.quantity[0].dataset.ezcommerceMinQuantity === undefined) {
                console.error('data-ezcommerce-min-quantity on .ezcommerce-js--quantity is not set!');
            }
        }

        checkQuantity() {
            const quantityTotal = this.quantity.reduce((total, current) => total + (current.value ? parseInt(current.value, 10) : 0), 0);

            return quantityTotal >= this.minQuantity;
        }

        init() {
            this.setElements();
            this.checkDatasetExistance();
            this.toggleSubmitState();

            this.quantity.forEach((input) => input.addEventListener('change', this.toggleSubmitState.bind(this), false));
            this.submitButton.addEventListener('click', this.onSubmit.bind(this), false);
        }
    }

    addConfig('eshop.widgets.ProductMulti', ProductMulti);
})(window, window.document, window.ibexa);
