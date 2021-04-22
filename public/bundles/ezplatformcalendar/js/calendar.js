(function (global, doc, React, ReactDOM, eZ) {
    const calendarContainer = doc.querySelector('.ez-calendar-container');
    const siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
    const token = document.querySelector('meta[name="CSRF-Token"]').content;
    const contentTreeContainer = doc.querySelector('.ez-calendar-sidebar-container');
    const contentTreeWrapper = doc.querySelector('.ez-calendar-sidebar-container__wrapper');
    let frame = null;
    const updateCalendarSidebarWrapperHeight = () => {
        const height = Math.min(window.innerHeight - contentTreeContainer.getBoundingClientRect().top, window.innerHeight);

        contentTreeWrapper.style.height = `${height}px`;
    };
    const handleViewportChange = () => {
        if (frame) {
            cancelAnimationFrame(frame);
        }

        frame = requestAnimationFrame(updateCalendarSidebarWrapperHeight);
    };

    ReactDOM.render(
        React.createElement(eZ.modules.Calendar, {
            restInfo: { token, siteaccess },
            eventsConfig: eZ.calendar.config.types,
        }),
        calendarContainer
    );

    updateCalendarSidebarWrapperHeight();

    doc.addEventListener('scroll', handleViewportChange, { capture: false, passive: true });
    window.addEventListener('resize', handleViewportChange, { capture: false, passive: true });
})(window, window.document, window.React, window.ReactDOM, window.eZ);
