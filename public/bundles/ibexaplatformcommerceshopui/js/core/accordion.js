import addConfig from '../helpers/addConfig';

(function(global, doc, eZ) {
    class Accordion {
        attachEvents() {
            this.accordionNodes.forEach((accordionNode) => {
                accordionNode.querySelectorAll('.ezcommerce-accordion__navigation-label').forEach((navigation) => {
                    navigation.addEventListener('click', this.toggle, false);
                });
            });
        }

        toggle(event) {
            event.preventDefault();

            const container = event.currentTarget.closest('.ezcommerce-accordion');
            const { targetSelector } = event.currentTarget.dataset;
            const actionNode = container.querySelector(targetSelector);

            actionNode.classList.toggle('ezcommerce-accordion__navigation-content--expanded');
        }

        init(accordionSelector) {
            this.accordionNodes = doc.querySelectorAll(accordionSelector);

            this.attachEvents();
        }
    }

    addConfig('eshop.widgets.Accordion', Accordion);
})(window, window.document, window.eZ);
