(function(global, doc) {
    const getCaptchaPath = (image, callback, errorCallback) => {
        const fieldId = image.dataset.fieldId;
        const request = new Request(`/form/captcha/get-url/${fieldId}`, {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            mode: 'same-origin',
            credentials: 'same-origin',
        });

        fetch(request)
            .then((response) => response.json())
            .then((data) => callback(data, image))
            .catch(() => errorCallback(image));
    };
    const setCaptchaImage = (data, image) => {
        image.setAttribute('src', data.image);
    };
    const fetchCaptchaImages = (captchaImages) => {
        captchaImages.forEach((image) => {
            if (image.hasAttribute('data-events-attached')) {
                return;
            }

            getCaptchaPath(
                image,
                setCaptchaImage,
                showErrorMessage
            );
        });
    };
    const showErrorMessage = (image) => {
        const errorElement = image.parentNode.querySelector('.captcha__fail-to-load');

        errorElement.removeAttribute('hidden');
    };
    const hideErrorMessage = (image) => {
        const errorElement = image.parentNode.querySelector('.captcha__fail-to-load');

        errorElement.setAttribute('hidden', 'hidden');
    };

    global.addEventListener('load', () => {
        const captchaImages = [...doc.querySelectorAll('.captcha_image')];

        fetchCaptchaImages(captchaImages);

        captchaImages.forEach((image) => {
            const reloadLink = image.parentNode.querySelector('.captcha_reload');

            if (reloadLink && !image.hasAttribute('data-events-attached')) {
                reloadLink.addEventListener(
                    'click',
                    () => {
                        getCaptchaPath(
                            image,
                            setCaptchaImage,
                            showErrorMessage
                        );
                        hideErrorMessage(image);
                    }
                )
            }

            image.setAttribute('data-events-attached', true);
        });
    }, false);
})(window, window.document);
