const addKeyToFormData = (formData, data, parentKey) => {
    if (data && typeof data === 'object') {
        Object.entries(data).forEach(([key, value]) => {
            addKeyToFormData(formData, value, parentKey ? `${parentKey}[${key}]` : key);
        });
    } else {
        const value = data === null ? '' : data;

        formData.append(parentKey, value);
    }
};

const getFormDataFromObject = (object) => {
    const formData = new FormData();

    addKeyToFormData(formData, object);

    return formData;
};

export default getFormDataFromObject;
