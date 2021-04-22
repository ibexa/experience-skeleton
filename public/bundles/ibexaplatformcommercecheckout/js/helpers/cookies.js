export const getCookie = (name, ignoreHashName) => {
    const decodedCookie = decodeURIComponent(document.cookie) + ';';
    const cookieRegex = new RegExp(`${name}${ignoreHashName ? '.*?' : ''}=(.*?);`);

    const result = cookieRegex.exec(decodedCookie);

    return result ? result[1] : '';
};
