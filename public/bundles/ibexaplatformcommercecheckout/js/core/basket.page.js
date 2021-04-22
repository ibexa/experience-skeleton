import addConfig from '../helpers/addConfig';

(function(global, doc) {
    class BasketPage {
        constructor(config = {}) {
            this.container = config.container;

            if (!this.container) {
                console.error('No container delivered for BasketWidget!');

                return;
            }
        }

        removeProduct() {}

        updateBasket() {}

        bindRemoveEvents() {
            this.container
                .querySelectorAll('.ezcommerce-js--remove-product')
                .forEach((button) => button.addEventListener('click', this.removeProduct.bind(this), false));
        }

        bindUpdateEvent() {
            const updateButton = this.container.querySelector('.ezcommerce-js--update-basket');

            if (updateButton) {
                updateButton.addEventListener('click', this.updateBasket.bind(this), false);
            }
        }

        bindChangeQuantityEvent() {
            const quntityInput = this.container.querySelector('.ezcommerce-js--quantity');

            quntityInput.addEventListener('change', this.onChangeQuantity.bind(this), false);
        }

        onChangeQuantity() {
            const quntityInput = this.container.querySelector('.ezcommerce-js--quantity');

            if (quntityInput.value < 1) {
                quntityInput.value = 1;
            }
        }

        bindEvents() {
            this.bindRemoveEvents();
            this.bindUpdateEvent();
            this.bindChangeQuantityEvent();
        }

        init() {
            this.bindEvents();
        }
    }

    addConfig('eshop.widgets.BasketPage', BasketPage);
})(window, window.document);
