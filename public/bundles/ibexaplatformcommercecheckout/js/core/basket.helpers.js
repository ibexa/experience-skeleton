import addConfig from '../helpers/addConfig';
import { getCookie } from '../helpers/cookies';

(function(global, doc, ibexa) {
    const getRequest = (url) =>
        new Request(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            mode: 'same-origin',
            credentials: 'same-origin',
        });
    const transformRequest = (response) => {
        if (!response.ok) {
            throw response;
        }

        return response.json();
    };
    const getBasket = (data = {}) => {
        const sessionId = getCookie('eZSESSID', true) || 'anonymous';
        const request = getRequest(`/api/session/basket/${ibexa.eshop.helpers.md5(sessionId)}`);

        return fetch(request)
            .then(transformRequest)
            .then((response) => {
                doc.body.dispatchEvent(
                    new CustomEvent('ibexa-basket:update-basket', {
                        detail: response,
                    })
                );

                return response;
            });
    };

    addConfig('eshop.helpers.basket.get', getBasket);
})(window, window.document, window.ibexa);
