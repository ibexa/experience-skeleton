(function(global, doc) {
    const eZ = (global.eZ = global.eZ || {});

    eZ.BlockConfigSelectFieldBase = class BlockConfigSelectFieldBase {
        constructor(config = {}) {
            this.selectorContainer = config.selectorContainer || '.ez-block-select-field';
            this.selectorSourceInput = config.selectorSourceInput || 'select';
            this.selectorSelected = config.selectorSelected || '.ez-block-select-field__selected';
            this.selectorSelectedItem = config.selectorSelectedItem || '.ez-block-select-field__selected-item';
            this.selectorOptions = config.selectorOptions || '.ez-block-select-field__options';
            this.selectorOptionsItem = config.selectorOptionsItem || '.ez-block-select-field__options-item';
            this.classOptionSelected = config.classOptionSelected || 'ez-block-select-field__options-item--selected';
            this.classSelectedRemove = config.classSelectedRemove || 'ez-block-select-field__selected-remove';
            this.classOptionsHidden = config.classOptionsHidden || 'ez-block-select-field__options--hidden';

            this.handleClickOnOption = this.handleClickOnOption.bind(this);
            this.handleClickOnInput = this.handleClickOnInput.bind(this);
            this.handleClickOutside = this.handleClickOutside.bind(this);
            this.handleClickOutsideCallback = null;
        }

        /**
         * Create selected item
         *
         * @method createSelectedItem
         * @param {HTMLElement} container
         * @param {String} value the content type identifier
         * @param {String} label the content type label
         * @returns {String}
         */
        createSelectedItem(container, value, label) {
            const template = container.querySelector(this.selectorSelected).dataset.templateSelectedItem;

            return template.replace('{{ value }}', value).replace('{{ label }}', label);
        }

        /**
         * Handles item selection
         *
         * @method handleSelection
         * @param {HTMLElement} container
         * @param {HTMLElement} element the item element
         * @param {Boolean} selected
         */
        handleSelection(container, element, selected) {
            const value = element.dataset.value;
            const cssMethodName = selected ? 'add' : 'remove';
            const isSingleSelect = !container.querySelector(this.selectorSourceInput).multiple;

            if (isSingleSelect && selected) {
                this.hideOptions(container);
                this.clearCurrentSelection(container);
            }

            container.querySelector(`${this.selectorSourceInput} [value="${value}"]`).selected = selected;
            container.querySelector(`${this.selectorOptions} [data-value="${value}"]`).classList[cssMethodName](this.classOptionSelected);

            if (selected && value) {
                container
                    .querySelector(this.selectorSelected)
                    .insertAdjacentHTML('beforeend', this.createSelectedItem(container, value, element.innerHTML));
            } else {
                container.querySelector(`${this.selectorSelected} [data-value="${value}"]`).remove();
            }

            if (isSingleSelect && !selected) {
                this.hideOptions(container);
                this.selectFirstItem(container);
            }
        }

        /**
         * Selects first item
         *
         * @method selectFirstItem
         * @param {HTMLElement} container
         */
        selectFirstItem(container) {
            const firstOption = container.querySelector(`${this.selectorOptions} li`);

            firstOption.classList.add(this.classOptionSelected);

            if (!firstOption.dataset.value) {
                return;
            }

            container
                .querySelector(this.selectorSelected)
                .insertAdjacentHTML('beforeend', this.createSelectedItem(container, firstOption.dataset.value, firstOption.innerHTML));
        }

        /**
         * Clears current selection
         *
         * @method clearCurrentSelection
         * @param {HTMLElement} container
         */
        clearCurrentSelection(container) {
            [...container.querySelectorAll(`${this.selectorSourceInput} option`)].forEach((option) => (option.selected = false));
            [...container.querySelectorAll(`${this.selectorOptions} .${this.classOptionSelected}`)].forEach((option) =>
                option.classList.remove(this.classOptionSelected)
            );

            container.querySelector(this.selectorSelected).innerHTML = '';
        }

        /**
         * Handles click outside
         *
         * @method handleClickOutside
         * @param {HTMLElement} container
         * @param {Event} event
         */
        handleClickOutside(container, { target }) {
            const isSelectedItemClicked = target.closest(this.selectorSelected);
            const isOptionClicked = target.closest(this.selectorOptions);
            const isItemRemoveClicked = target.closest(`.${this.classSelectedRemove}`);
            const sourceInput = target.parentNode.querySelector(this.selectorSourceInput);
            const isSameTarget = sourceInput && container.querySelector(this.selectorSourceInput).id === sourceInput.id;

            if ((isSelectedItemClicked || isOptionClicked || isItemRemoveClicked) && isSameTarget) {
                return;
            }

            this.hideOptions(container);
        }

        /**
         * Hides options
         *
         * @method hideOptions
         * @param {HTMLElement} container
         */
        hideOptions(container) {
            container.querySelector(this.selectorOptions).classList.add(this.classOptionsHidden);
        }

        /**
         * Handles click on input
         *
         * @method handleClickOnInput
         * @param {HTMLElement} container
         * @param {Event} event
         */
        handleClickOnInput(container, { target }) {
            if (target.classList.contains(this.classSelectedRemove)) {
                this.handleSelection(container, target.closest(this.selectorSelectedItem), false);

                return;
            }

            const options = container.querySelector(this.selectorOptions);
            const shouldShowOptions = options.classList.contains(this.classOptionsHidden);
            const methodName = shouldShowOptions ? 'addEventListener' : 'removeEventListener';

            if (shouldShowOptions) {
                this.handleClickOutsideCallback = this.handleClickOutside.bind(this, container);
            }

            options.classList.toggle(this.classOptionsHidden);
            doc.body[methodName]('click', this.handleClickOutsideCallback, false);
        }

        /**
         * Handles click on option item
         *
         * @method handleClickOnOption
         * @param {HTMLElement} container
         * @param {Event} event
         */
        handleClickOnOption(container, { target }) {
            this.handleSelection(container, target, !target.classList.contains(this.classOptionSelected));
        }

        /**
         * Initializes the select field event handlers
         *
         * @method init
         */
        init() {
            const containers = [...doc.querySelectorAll(this.selectorContainer)];

            containers.forEach((container) => {
                const isEmpty = ![...container.querySelectorAll(this.selectorSelectedItem)].length;
                const isSingle = !container.querySelector(this.selectorSourceInput).multiple;
                const items = [...container.querySelectorAll(`${this.selectorOptions} ${this.selectorOptionsItem}`)];

                if (isEmpty && isSingle) {
                    this.selectFirstItem(container);
                }

                container
                    .querySelector(this.selectorSelected)
                    .addEventListener('click', this.handleClickOnInput.bind(this, container), false);
                items.forEach((option) => option.addEventListener('click', this.handleClickOnOption.bind(this, container), false));
            });
        }
    };
})(window, document);
