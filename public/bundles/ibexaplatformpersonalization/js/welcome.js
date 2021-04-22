(function(global, doc, $) {
    const CLASS_ACTIVE_ITEM_LIST = 'ez-modal__table-of-contents-list-item--active';
    const termsContentContainer = doc.querySelector('.ez-modal__content-terms');
    const termsListContainer = doc.querySelector('.ez-modal__table-of-contents-list');
    const openModalButton = doc.querySelector('.ez-welcome-content__show-modal-button');
    const acceptTermsButton = doc.querySelector('.ez-modal__accept-terms-and-conditions-button');
    const scrollTerms = (event) => {
        event.preventDefault();

        const listLink = event.currentTarget;
        const { scrollTo } = listLink.dataset;
        const activedListItem = termsListContainer.querySelector(`.${CLASS_ACTIVE_ITEM_LIST}`);
        const itemListToActive = listLink.closest('.ez-modal__table-of-contents-list-item');

        if (activedListItem) {
            activedListItem.classList.remove(CLASS_ACTIVE_ITEM_LIST);
        }

        if (scrollTo) {
            itemListToActive.classList.add(CLASS_ACTIVE_ITEM_LIST);
            termsContentContainer.querySelector(`#${scrollTo}`).scrollIntoView();
        }
    };

    if (openModalButton) {
        openModalButton.addEventListener(
            'click',
            (event) => {
                event.preventDefault();

                $('#terms-and-contions-modal').modal('show');
            },
            false
        );
    }

    if (acceptTermsButton) {
        acceptTermsButton.addEventListener(
            'click',
            () => {
                doc.querySelector('.ez-welcome-content__accept-terms-checkbox').checked = true;
            },
            false
        );
    }

    doc.querySelectorAll('.ez-modal__table-of-contents-list-link').forEach((listLink) => {
        listLink.addEventListener('click', scrollTerms, false);
    });
})(window, window.document, window.jQuery);
