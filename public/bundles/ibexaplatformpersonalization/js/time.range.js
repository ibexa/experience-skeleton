(function(global, doc, flatpickr) {
    const secondsInDay = 86400;
    const MAIN_WRAPPER_SELECTOR = '.ez-time-range';
    const { convertDateToTimezone, formatShortDateTime } = eZ.helpers.timezone;
    const timePeriodNodes = doc.querySelectorAll(MAIN_WRAPPER_SELECTOR);
    const getUnixTimestampUTC = (dateObject) => {
        const date = new Date(Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate()));

        return Math.floor(date.getTime() / 1000);
    };
    const handleFlatPickrChange = (selectedDates, dateString, instance) => {
        if (selectedDates.length === 2) {
            const timeRangeContainer = instance.input.closest(MAIN_WRAPPER_SELECTOR);
            const startDate = getUnixTimestampUTC(selectedDates[0]);
            const endDate = getUnixTimestampUTC(selectedDates[1]);
            const days = (endDate - startDate) / secondsInDay;

            setValues(timeRangeContainer, `P0Y0M${days}DT0H`, endDate);
            timeRangeContainer.querySelector('.ez-time-range__end-date').dispatchEvent(new Event('change'));
        }
    };
    const handlePeriodListChange = (event) => {
        const value = event.target.value;
        const timeRangeContainer = event.target.closest(MAIN_WRAPPER_SELECTOR);
        const customTimeRangeContainer = timeRangeContainer.querySelector('.ez-time-range__custom-range-container');
        const method = value !== 'custom_range' ? 'add' : 'remove';

        customTimeRangeContainer.classList[method]('d-none');

        if (value !== 'custom_range') {
            setValues(timeRangeContainer, value);
            timeRangeContainer.querySelector('.ez-time-range__date-interval').dispatchEvent(new Event('change'));
        }
    };
    const setValues = (container, interval, endDate = '') => {
        container.querySelector('.ez-time-range__date-interval').setAttribute('value', interval);
        container.querySelector('.ez-time-range__end-date').setAttribute('value', endDate);
    };

    timePeriodNodes.forEach((node) => {
        const defaultDate = [];
        const periodListSelect = node.querySelector('select');
        const flatpickrInput = node.querySelector('.flatpickr-input');

        if (flatpickrInput.dataset.start && flatpickrInput.dataset.end) {
            const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            defaultDate.push(
                new Date(convertDateToTimezone(flatpickrInput.dataset.start, browserTimezone, true)),
                new Date(convertDateToTimezone(flatpickrInput.dataset.end, browserTimezone, true))
            );
        }

        flatpickr(flatpickrInput, {
            mode: 'range',
            enableTime: false,
            time_24hr: true,
            formatDate: (date) => formatShortDateTime(date, null, eZ.adminUiConfig.dateFormat.shortDate),
            onChange: handleFlatPickrChange,
            defaultDate,
        });

        periodListSelect.addEventListener('change', (event) => handlePeriodListChange(event), false);
    });
})(window, window.document, window.flatpickr);
