(function(global, doc, Routing) {
    const versionA = doc.querySelector('#version_comparison_version_a_version_info');
    const versionB = doc.querySelector('#version_comparison_version_b_version_info');

    if (!versionA || !versionB) {
        return;
    }

    const comparisonButton = doc.querySelector('#version_comparison_compare');
    const sideBySideButton = doc.querySelector('#version_comparison_side_by_side');
    const loadVersion = () => {
        if (comparisonButton.getAttribute('disabled')) {
            redirectToComparison();

            return;
        }

        redirectToSideBySide();
    };
    const redirectToSideBySide = () => {
        const contentInfoId = doc.querySelector('.ez-version-compare').dataset.contentId;
        const versionNoA = versionA.options[versionA.selectedIndex].value;
        const versionNoB = versionB.options[versionB.selectedIndex].value;

        global.location.href = Routing.generate('ezplatform.version.side_by_side_comparison', {
            contentInfoId,
            versionNoA,
            versionNoB,
        });
    };
    const redirectToComparison = () => {
        const contentInfoId = doc.querySelector('.ez-version-compare').dataset.contentId;
        const versionNoA = versionA.options[versionA.selectedIndex].value;
        const versionNoB = versionB.options[versionB.selectedIndex].value;

        global.location.href = Routing.generate('ezplatform.version.compare', {
            contentInfoId,
            versionNoA,
            versionNoB,
        });
    };

    versionA.addEventListener('change', loadVersion);
    versionB.addEventListener('change', loadVersion);
    comparisonButton.addEventListener('click', redirectToComparison);
    sideBySideButton.addEventListener('click', redirectToSideBySide);
})(window, window.document, window.Routing);
