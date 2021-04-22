export default (path, value) => {
    const keys = path.split('.');
    const lastIndex = keys.length - 1;
    window.ibexa = window.ibexa || {};

    keys.reduce((currentObject, key, index) => {
        if (index === lastIndex) {
            currentObject[key] = value;

            return;
        }

        if (currentObject[key] === undefined) {
            currentObject[key] = {};
        }

        return currentObject[key];
    }, window.ibexa);
};
