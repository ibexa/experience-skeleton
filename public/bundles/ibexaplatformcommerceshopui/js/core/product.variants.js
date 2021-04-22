import addConfig from '../helpers/addConfig';

(function(global, doc, ibexa) {
    class ProductVariants extends ibexa.eshop.widgets.Product {
        constructor(config) {
            super(config);

            this.sku = config.sku;
        }

        setElements() {
            super.setElements();

            this.characteristics = [...doc.querySelectorAll('.ezcommerce-js--characteristics')];
            this.characteristicButtons = [...doc.querySelectorAll('.ezcommerce-js--characteristic')];
            this.priceWrapper = doc.querySelector('.ezcommerce-js--price-wrapper');
            this.identifier = doc.querySelector('.ezcommerce-js--identifier');
            this.variantCode = doc.querySelector('.ezcommerce-js--variant-code');
        }

        checkDatasetExistance() {
            super.checkDatasetExistance();

            if (this.priceWrapper.dataset.ezcommerceTemplate === undefined) {
                console.error('data-ezcommerce-template on .ezcommerce-js--price-wrapper is not set!');
            }
            if (this.characteristics.some((element) => element.dataset.ezcommerceVariantGroup === undefined)) {
                console.error('data-ezcommerce-variant-group on .ezcommerce-js--characteristics is not set!');
            }
            if (this.characteristicButtons.some((element) => element.dataset.ezcommerceValue === undefined)) {
                console.error('data-ezcommerce-value on .ezcommerce-js--characteristic is not set!');
            }
        }

        getRequest(body) {
            const formData = new FormData();

            formData.append('ses_request', JSON.stringify(body));

            return new Request('/_ajax_/phalanx', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
                mode: 'same-origin',
                credentials: 'same-origin',
            });
        }

        transformRequest(response) {
            if (!response.ok) {
                throw response;
            }

            return response.json();
        }

        getVariant(variantsData) {
            const body = {
                get_variantsData: [
                    {
                        variants: variantsData,
                        sku: this.sku,
                        type: 'variant',
                    },
                ],
            };
            const request = this.getRequest(body);

            fetch(request)
                .then(this.transformRequest)
                .then((response) => {
                    this.variantCode.value = response.get_variantsData.variantCode;
                    this.variantCode.dispatchEvent(new Event('change'));

                    const buttons = doc.querySelectorAll('.ezcommerce-js--characteristics .ezcommerce-js--characteristic');

                    buttons.forEach((button) => {
                        button.setAttribute('disabled', 'disabled');
                    });

                    Object.entries(response.get_variantsData.availableVariantCodes).forEach(([key, variants]) => {
                        Object.keys(variants).forEach((variant) => {
                            const button = doc.querySelector(
                                `.ezcommerce-js--characteristics[data-ezcommerce-variant-group="${key}"] .ezcommerce-js--characteristic[data-ezcommerce-value="${variant}"]`
                            );

                            button.removeAttribute('disabled');
                        });
                    });

                    return response;
                })
                .catch(console.error);
        }

        updateContainer(args) {
            console.warn("updateContainer method in class ProductVariants hasn't been overwritten!");

            return args;
        }

        updatePrice() {
            const body = {
                get_ProductInformation: [
                    {
                        identifier: this.identifier.value,
                        variantCode: this.variantCode.value ? this.variantCode.value : undefined,
                        priceEngineContextId: 'product_detail',
                        type: 'catalog',
                    },
                ],
            };
            const request = this.getRequest(body);

            fetch(request)
                .then(this.transformRequest)
                .then((response) =>
                    this.updateContainer({
                        container: this.priceWrapper,
                        template: this.priceWrapper.dataset.ezcommerceTemplate,
                        response,
                    })
                )
                .catch(console.error);
        }

        checkVariantField() {
            return this.variantCode.value !== undefined && this.variantCode.value !== '';
        }

        checkSubmitState() {
            return this.checkQuantity() && this.checkVariantField();
        }

        bindCharacteristicEvents(containers) {
            containers.forEach((container) => {
                container.querySelectorAll('.ezcommerce-js--characteristic').forEach((button) =>
                    button.addEventListener('click', (event) => {
                        if (event.target.classList.contains('ezcommerce-js--selected')) {
                            event.target.classList.remove('ezcommerce-js--selected');
                        } else {
                            const selected = container.querySelector('.ezcommerce-js--characteristic.ezcommerce-js--selected');

                            if (selected) {
                                selected.classList.remove('ezcommerce-js--selected');
                            }

                            event.target.classList.add('ezcommerce-js--selected');
                        }

                        const bodyRequest = {};

                        containers.forEach((containerSelected) => {
                            const selectedElement = containerSelected.querySelector('.ezcommerce-js--selected');

                            if (selectedElement) {
                                bodyRequest[containerSelected.dataset.ezcommerceVariantGroup] = selectedElement.dataset.ezcommerceValue;
                            }
                        });

                        this.getVariant(bodyRequest);
                    })
                );
            });
        }

        init() {
            super.init();

            this.variantCode.addEventListener('change', this.updatePrice.bind(this), false);
            this.variantCode.addEventListener('change', this.toggleSubmitState.bind(this), false);

            this.bindCharacteristicEvents(this.characteristics);
        }
    }

    addConfig('eshop.widgets.ProductVariants', ProductVariants);
})(window, window.document, window.ibexa);
