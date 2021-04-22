import addConfig from '../helpers/addConfig';

(function(global, doc) {
    class Product {
        setElements() {
            this.quantity = doc.querySelector('.ezcommerce-js--quantity');
            this.submitButton = doc.querySelector('.ezcommerce-js--btn-add-to-basket');
        }

        checkDatasetExistance() {
            if (this.quantity.dataset.ezcommerceMinQuantity === undefined) {
                console.error('data-ezcommerce-min-quantity on .ezcommerce-js--quantity is not set!');
            }
        }

        checkQuantity() {
            return parseInt(this.quantity.dataset.ezcommerceMinQuantity, 10) <= this.quantity.value;
        }

        checkSubmitState() {
            return this.checkQuantity();
        }

        toggleSubmitState() {
            const method = this.checkSubmitState() ? 'removeAttribute' : 'setAttribute';

            this.submitButton[method]('disabled', 'disabled');
        }

        onSubmit() {}

        init() {
            this.setElements();
            this.checkDatasetExistance();
            this.toggleSubmitState();

            this.quantity.addEventListener('change', this.toggleSubmitState.bind(this), false);
            this.submitButton.addEventListener('click', this.onSubmit.bind(this), false);
        }
    }

    addConfig('eshop.widgets.Product', Product);
})(window, window.document);
