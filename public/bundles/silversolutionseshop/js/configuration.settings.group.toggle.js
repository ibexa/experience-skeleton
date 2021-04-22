(function(global, doc) {
    const togglers = [...doc.querySelectorAll('.ez-card__body-display-toggler')];
    const toggleFieldTypeView = (event) => {
        event.preventDefault();

        const group = event.currentTarget.closest('.ez-card--commerce-configuration-group');

        if (group.classList.contains('ez-card--collapsed')) {
            const activePanel = group.closest('.tab-pane');
            const notCollapsedGroup = activePanel.querySelector('.ez-card--commerce-configuration-group:not(.ez-card--collapsed)');

            if (notCollapsedGroup) {
                notCollapsedGroup.classList.add('ez-card--collapsed');
            }
        }

        group.classList.toggle('ez-card--collapsed');
    };

    togglers.forEach((button) => button.addEventListener('click', toggleFieldTypeView, false));
})(window, window.document);
