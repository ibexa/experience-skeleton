(function(global, doc, eZ) {
    const recreateInput = (widget) => {
        const input = widget.querySelector('.ez-site-factory-form-languages__input');
        const items = widget.querySelectorAll('.ez-site-factory-form-languages__item');
        const inputValue = [...items].map((item) => item.dataset.id).join(', ');

        input.value = inputValue;
    };
    const deleteLanguage = (event) => {
        const widget = event.target.closest('.ez-site-factory-form-languages');
        const listContainer = widget.querySelector('.ez-site-factory-form-languages__items');
        const item = event.target.closest('.ez-site-factory-form-languages__item');

        item.remove();
        recreateInput(widget);
        widget.querySelector('.ez-btn--add-language').removeAttribute('disabled');

        const items = widget.querySelectorAll('.ez-site-factory-form-languages__item');

        if (items.length === 0) {
            listContainer.classList.add('ez-site-factory-form-languages__items--hidden');
        }
    };
    const saveNewLanguage = (event) => {
        const widget = event.target.closest('.ez-site-factory-form-languages');
        const modal = event.target.closest('.ez-site-factory-language-selector__list-wrapper');
        const languageButtons = modal.querySelectorAll('.ez-btn--save-language');
        const listContainer = widget.querySelector('.ez-site-factory-form-languages__items');
        const languageName = event.target.textContent.trim();
        const languageCode = event.target.dataset.languageCode;
        let newWidget = listContainer.dataset.template;

        newWidget = newWidget.replace(/__language_name__/g, languageName);
        newWidget = newWidget.replace(/__language_code__/g, languageCode);

        const range = doc.createRange();
        const htmlWidget = range.createContextualFragment(newWidget);
        const deleteButton = htmlWidget.querySelector('.ez-btn--delete-language');

        deleteButton.addEventListener('click', deleteLanguage);
        listContainer.append(htmlWidget);
        widget.dispatchEvent(new CustomEvent('ez-site-factory-add-new-language'));
        hideModal(modal);
        recreateInput(widget);
        listContainer.classList.remove('ez-site-factory-form-languages__items--hidden');

        const items = listContainer.querySelectorAll('.ez-site-factory-form-languages__item');

        if (items.length === languageButtons.length) {
            widget.querySelector('.ez-btn--add-language').setAttribute('disabled', true);
        }
    };
    const hideModal = (modal) => {
        modal.classList.remove('ez-site-factory-language-selector__list-wrapper--visible');
        modal.querySelectorAll('.ez-btn--save-language').forEach((btn) => btn.removeEventListener('click', saveNewLanguage));
        doc.removeEventListener('click', hideAddLanguageModal);
    };
    const hideAddLanguageModal = (event) => {
        const modal = doc.querySelector('.ez-site-factory-language-selector__list-wrapper--visible');
        const closestModal = event.target.closest('.ez-site-factory-language-selector__list-wrapper');

        if (closestModal && closestModal.isSameNode(modal)) {
            return;
        }

        hideModal(modal);
    };
    const showAddLanguageModal = (event) => {
        if (doc.querySelector('.ez-site-factory-language-selector__list-wrapper--visible')) {
            return;
        }

        const modal = event.target
            .closest('.ez-site-factory-language-selector')
            .querySelector('.ez-site-factory-language-selector__list-wrapper');
        const languages = event.target
            .closest('.ez-site-factory-form-languages')
            .querySelector('.ez-site-factory-form-languages__input')
            .value.split(', ');
        const languageButtons = modal.querySelectorAll('.ez-btn--save-language');

        languageButtons.forEach((btn) => {
            if (languages.includes(btn.dataset.languageCode)) {
                btn.classList.add('ez-btn--save-language--hidden');
            } else {
                btn.classList.remove('ez-btn--save-language--hidden');
                btn.addEventListener('click', saveNewLanguage);
            }
        });
        modal.classList.add('ez-site-factory-language-selector__list-wrapper--visible');
        setTimeout(() => {
            doc.addEventListener('click', hideAddLanguageModal);
        });
    };
    const attachEventToAddButtons = () => {
        const addButtons = doc.querySelectorAll('.ez-btn--add-language');

        addButtons.forEach((btn) => btn.addEventListener('click', showAddLanguageModal));
    };
    const attachEventToDeleteButtons = () => {
        const deleteButtons = doc.querySelectorAll('.ez-btn--delete-language');

        deleteButtons.forEach((btn) => btn.addEventListener('click', deleteLanguage));
    };
    const languagesWidgets = doc.querySelectorAll('.ez-site-factory-form-languages');

    class CollectionDraggable extends eZ.core.Draggable {
        constructor(config) {
            super(config);

            this.widgetContainer = config.widgetContainer;
        }

        onDrop() {
            super.onDrop();

            recreateInput(this.widgetContainer);
        }
    }

    languagesWidgets.forEach((languagesWidget) => {
        const itemsContainer = languagesWidget.querySelector('.ez-site-factory-form-languages__items');
        const draggable = new CollectionDraggable({
            widgetContainer: languagesWidget,
            itemsContainer,
            selectorItem: '.ez-site-factory-form-languages__item',
            selectorPlaceholder: '.ez-site-factory-form-languages__item--placeholder',
        });

        draggable.init();

        languagesWidget.addEventListener('ez-site-factory-add-new-language', () => {
            draggable.reinit();
        });
    });

    attachEventToDeleteButtons();
    attachEventToAddButtons();

    doc.body.addEventListener('ez-site-factory-add-public-access', (event) => {
        event.detail.widget.querySelector('.ez-btn--add-language').addEventListener('click', showAddLanguageModal);
    });
})(window, window.document, window.eZ);
