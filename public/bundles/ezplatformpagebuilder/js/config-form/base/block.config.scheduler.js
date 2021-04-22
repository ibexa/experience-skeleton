(function(global, doc) {
    const SELECTOR_REVEAL = '.ez-reveal-hide-date-time__reveal';
    const SELECTOR_HIDE = '.ez-reveal-hide-date-time__hide';
    const SELECTOR_PICKER = '.ez-picker';
    const SELECTOR_PICKER_INPUT = '.ez-picker__input';
    const SELECTOR_PICKER_FORM_INPUT = '.ez-picker__form-input';
    const containerReveal = doc.querySelector(SELECTOR_REVEAL);
    const containerHide = doc.querySelector(SELECTOR_HIDE);

    if (!containerReveal || !containerHide) {
        return;
    }

    const pickerComponentReveal = containerReveal.querySelector('#block_configuration_since_custom_date').closest(SELECTOR_PICKER);
    const pickerComponentHide = containerHide.querySelector('#block_configuration_till_custom_date').closest(SELECTOR_PICKER);
    const getNowAccurateToMinutes = () => {
        const now = new Date();

        now.setSeconds(0);

        return now;
    };
    const getPickerSelectedDate = (pickerComponent) => {
        const pickerHiddenInput = pickerComponent.querySelector(SELECTOR_PICKER_FORM_INPUT);
        const inputValue = pickerHiddenInput.value;

        return inputValue ? new Date(inputValue * 1000) : null;
    };
    const getPickerFlatpickrInstance = (pickerComponent) => {
        const pickerInput = pickerComponent.querySelector(SELECTOR_PICKER_INPUT);

        return pickerInput._flatpickr;
    };
    const setPickerDate = (pickerContainer, date) => {
        const pickerInstance = getPickerFlatpickrInstance(pickerContainer);

        pickerInstance.setDate(date, true);
    };
    const setPickerMinDate = (pickerContainer, minDate) => {
        const pickerInstance = getPickerFlatpickrInstance(pickerContainer);

        pickerInstance.set('minDate', minDate);
    };
    const toggleCustomDateInput = (customDateInput, disabled) => {
        customDateInput.hidden = disabled;
    };
    const isRadioButton = (eventTarget) => eventTarget.type === 'radio';
    const setNeverHideState = () => {
        const neverOptionRadioButton = containerHide.querySelector('input[type=radio][value=never]');

        neverOptionRadioButton.checked = true;
        toggleCustomDateInput(pickerComponentHide, true);
    };
    const onRevealOptionChange = ({ target }) => {
        if (!isRadioButton(target)) {
            return;
        }

        const customDateOptionSelected = target.value === 'custom_date';
        const nowAccurateToMinutes = getNowAccurateToMinutes();

        if (customDateOptionSelected) {
            setPickerMinDate(pickerComponentReveal, nowAccurateToMinutes);
            setPickerDate(pickerComponentReveal, nowAccurateToMinutes);

            setPickerMinDate(pickerComponentHide, nowAccurateToMinutes);
        } else {
            const hideDate = getPickerSelectedDate(pickerComponentHide);

            if (hideDate && hideDate < nowAccurateToMinutes) {
                setNeverHideState();
            } else {
                setPickerMinDate(pickerComponentHide, nowAccurateToMinutes);
            }
        }

        toggleCustomDateInput(pickerComponentReveal, !customDateOptionSelected);
    };
    const onHideOptionChange = ({ target }) => {
        if (!isRadioButton(target)) {
            return;
        }

        const customDateOptionSelected = target.value === 'custom_date';

        if (customDateOptionSelected) {
            const revealDate = getPickerSelectedDate(pickerComponentReveal);
            const nowAccurateToMinutes = getNowAccurateToMinutes();
            const newMinHideDate = revealDate < nowAccurateToMinutes ? nowAccurateToMinutes : revealDate;

            setPickerMinDate(pickerComponentHide, newMinHideDate);
            setPickerDate(pickerComponentHide, newMinHideDate);
        }

        toggleCustomDateInput(pickerComponentHide, !customDateOptionSelected);
    };
    const onRevealCustomDateChange = (newDates) => {
        if (!newDates.length) {
            return;
        }

        const newRevealDate = new Date(newDates[0]);
        const hideDate = getPickerSelectedDate(pickerComponentHide);
        const clearHideDate = newRevealDate > hideDate;

        setPickerMinDate(pickerComponentHide, newRevealDate);

        if (clearHideDate) {
            // flatpickr ignores minDate when only time has changed:
            // https://github.com/flatpickr/flatpickr/issues/591
            setPickerDate(pickerComponentHide, null);
        }
    };

    const flatpickrInstanceReveal = getPickerFlatpickrInstance(pickerComponentReveal);
    const isCustomDateSelectedReveal = containerReveal.querySelector('input[type=radio][value=custom_date]').checked;
    const isCustomDateSelectedHide = containerHide.querySelector('input[type=radio][value=custom_date]').checked;
    const revealDate = getPickerSelectedDate(pickerComponentReveal);
    const nowAccurateToMinutes = getNowAccurateToMinutes();

    flatpickrInstanceReveal.config.onChange.push(onRevealCustomDateChange);

    toggleCustomDateInput(pickerComponentReveal, !isCustomDateSelectedReveal);
    toggleCustomDateInput(pickerComponentHide, !isCustomDateSelectedHide);

    setPickerMinDate(pickerComponentReveal, nowAccurateToMinutes);
    setPickerMinDate(pickerComponentHide, revealDate);

    containerReveal.addEventListener('click', onRevealOptionChange, false);
    containerHide.addEventListener('click', onHideOptionChange, false);
})(window, window.document);
