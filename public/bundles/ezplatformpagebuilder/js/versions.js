(function(global, doc, $) {
    const CLASS_EDIT_DRAFT_CREATION_BTN = 'ez-btn--edit-with-draft-creation';
    const CLASS_DRAFT_EDIT_BTN = 'ez-btn--content-draft-edit';
    const modal = doc.querySelector('.ez-modal--versions');
    const tableWrapper = modal.querySelector('.ez-modal__table-wrapper');
    const editVersion = (event) => {
        const editWithDraftCreationBtn = event.target.closest(`.${CLASS_EDIT_DRAFT_CREATION_BTN}`);
        const isEditWithDraftCreationBtn = event.target.classList.contains(CLASS_EDIT_DRAFT_CREATION_BTN) || !!editWithDraftCreationBtn;
        const isDraftEditBtn = event.target.classList.contains(CLASS_DRAFT_EDIT_BTN) || event.target.closest(`.${CLASS_DRAFT_EDIT_BTN}`);

        if (isDraftEditBtn) {
            $(modal).modal('hide');

            return;
        }

        if (!isEditWithDraftCreationBtn) {
            return;
        }

        event.preventDefault();

        const contentId = editWithDraftCreationBtn.dataset.contentId;
        const versionNo = editWithDraftCreationBtn.dataset.versionNo;
        const languageCode = editWithDraftCreationBtn.dataset.languageCode;
        const versionEditForm = doc.querySelector('form[name="version_edit"]');
        const contentInfoInput = versionEditForm.querySelector('input[name="version_edit[content_info]"]');
        const versionInfoContentInfoInput = versionEditForm.querySelector('input[name="version_edit[version_info][content_info]"]');
        const versionInfoVersionNoInput = versionEditForm.querySelector('input[name="version_edit[version_info][version_no]"]');
        const languageInput = versionEditForm.querySelector('#version_edit_language_' + languageCode);

        contentInfoInput.value = contentId;
        versionInfoContentInfoInput.value = contentId;
        versionInfoVersionNoInput.value = versionNo;
        languageInput.setAttribute('checked', true);

        versionEditForm.submit();
    };

    tableWrapper.addEventListener('click', editVersion, false);
})(window, window.document, window.jQuery);
