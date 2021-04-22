(function(global, doc, eZ, React, ReactDOM) {
    const timelineContainer = doc.querySelector('.ez-timeline-wrapper');
    const onTimelineEventSelect = (oldTimestamp, newTimestamp, events) => {
        const event = new CustomEvent('ez-timestamp-changed', {
            detail: {
                oldTimestamp,
                newTimestamp,
                events,
            },
        });

        doc.body.dispatchEvent(event);
    };
    const refreshPreviewIframe = (event) => {
        const previewUrl = new URL(eZ.pageBuilder.config.previewUrl);
        const referenceTimestamp = parseInt(
            event.detail.newTimestamp / 1000,
            10
        );

        previewUrl.searchParams.delete(eZ.pageBuilder.config.tokenQueryParamName);
        previewUrl.searchParams.append('page_preview[reference_timestamp]', referenceTimestamp);

        doc.querySelector('#page-builder-preview').src = decodeURIComponent(previewUrl.toString());
    };

    ReactDOM.render(
        React.createElement(eZ.modules.Timeline, {
            onTimelineEventSelect,
            events: eZ.pageBuilder.timeline.events,
            selectedTimestamp: window.eZ.pageBuilder.config.referenceTimestamp * 1000,
        }),
        timelineContainer
    );

    doc.body.addEventListener('ez-timestamp-changed', refreshPreviewIframe, false);
})(window, window.document, window.eZ, window.React, window.ReactDOM);
