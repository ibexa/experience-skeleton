(function(doc, eZ) {
    const submodelSelect = doc.querySelector('.ez-submodel-select');
    const handleSubmodelChange = (event) => {
        const { value, parentNode } = event.currentTarget;

        parentNode.querySelectorAll('.ez-submodel').forEach((node) => {
            const method = node.classList.contains(`ez-submodel--${value}`) ? 'remove' : 'add';

            node.classList[method]('d-none');
        });
    };

    if (submodelSelect) {
        submodelSelect.addEventListener('change', handleSubmodelChange, true);
    }
})(window.document, window.eZ);
