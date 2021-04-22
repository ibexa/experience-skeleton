class EzRecommendationClient {

    /**
     * Sends notification ping.
     *
     * @method ping
     * @param {String} url
     */
    ping(url) {
        const request = new Request(url);

        this.sendRequest(request);
    }

    /**
     * Sends request.
     *
     * @method sendRequest
     * @param {Request} request
     */
    sendRequest(request) {
        if (false === request instanceof Request) {
            throw new TypeError(`Parameter request must be instance of Request. ${typeof request} given`);
        }

        return fetch(request)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Response was not properly. Status: ${response.status}, StatusText: ${response.statusText}`)
                }

                return response;

            }).catch(error => {
                console.log('Response error: ', error.message);
            });
    }
}
