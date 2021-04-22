import { computePages } from './pagination';

(function(global, doc, Translator, $, eZ) {
    const DOTS = '...';
    const PAGE_LIMIT = 20;

    class EzDamExtension {
        constructor(props) {
            this.container = props.container;
            this.activePage = 1;
            this.totalCount = 0;
        }

        getFormData(form) {
            const formData = new FormData(form);
            const newFormData = {};

            formData.forEach((value, key) => {
                const newKey = key.match(/\[(.*?)\]/)[1];

                newFormData[newKey] = value;
            });

            return newFormData;
        }

        queryForResults() {
            const form = this.container.querySelector('.dam-search-form');
            const route = form.action;
            const source = form.dataset.source;
            const formData = this.getFormData(form);
            const queryString = new URLSearchParams(formData).toString();
            const variation = 'large';

            const request = new Request(
                `${route}?${queryString}&source=${source}&variation=${variation}&limit=${PAGE_LIMIT}&offset=${(this.activePage - 1) *
                    PAGE_LIMIT}`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                    },
                    credentials: 'same-origin',
                    mode: 'cors',
                }
            );

            return fetch(request).then(eZ.helpers.request.getJsonFromResponse);
        }

        setTotalCount(results) {
            if (results.totalCount !== undefined) {
                this.totalCount = results.totalCount;
            }

            return results;
        }

        changePage(page, { event }) {
            this.activePage = page;

            this.fetchSearchResults(event);
        }

        refreshPagination(results) {
            const paginationElement = this.container.querySelector('.ez-pagination');
            const template = paginationElement.dataset.template;
            const pagesCount = Math.ceil(this.totalCount / PAGE_LIMIT);
            const pages = computePages({ activePage: this.activePage, pagesCount, separator: DOTS });
            const fragment = doc.createDocumentFragment();

            paginationElement.querySelectorAll('.ez-pagination__element').forEach((element) => element.remove());

            pages.forEach((page) => {
                const container = doc.createElement('ul');
                const renderedItem = template.replace(/{{ page }}/gi, page);

                container.insertAdjacentHTML('beforeend', renderedItem);

                const elementNode = container.querySelector('li');

                if (page === DOTS) {
                    elementNode.classList.add('ez-pagination__element--disabled');
                } else if (page === this.activePage) {
                    elementNode.classList.add('ez-pagination__element--active');
                } else {
                    elementNode.addEventListener('click', (event) => this.changePage(parseInt(event.target.dataset.page, 10), { event }));
                }

                fragment.append(elementNode);
            });

            const backElement = paginationElement.querySelector('.ez-pagination__button--back .page-link');
            const nextElement = paginationElement.querySelector('.ez-pagination__button--next .page-link');
            const backElementMethod = pagesCount === 0 || this.activePage === 1 ? 'setAttribute' : 'removeAttribute';
            const nextElementMethod = pagesCount === 0 || this.activePage === pagesCount ? 'setAttribute' : 'removeAttribute';

            backElement[backElementMethod]('disabled', 'disabled');
            nextElement[nextElementMethod]('disabled', 'disabled');
            paginationElement.classList.remove('ez-pagination--hidden');
            paginationElement.insertBefore(fragment, paginationElement.querySelector('.ez-pagination__button--next'));

            return results;
        }

        showError() {
            const resultsContainer = this.container.querySelector('.ez-search-results');
            const contentContainer = resultsContainer.querySelector('.ez-search-results__content');

            contentContainer.innerHTML = Translator.trans(
                /*@Desc("Something went wrong.")*/ 'dam.error.message',
                {},
                'ezplatform_connector_dam_ui'
            );

            resultsContainer.classList.add('ez-search-results--error');
        }

        selectAsset(event) {
            const modal = doc.querySelector('#select-from-dam-modal');
            const name = modal.dataset.name;
            const asset = event.target;

            doc.querySelector(`[name="${name}[destinationContentId]"]`).value = asset.dataset.id;
            doc.querySelector(`[name="${name}[source]"]`).value = asset.dataset.source;

            doc.querySelector(`[name="${name}[destinationContentId]"]`)
                .closest('.ez-field-edit--ezimageasset')
                .dispatchEvent(new CustomEvent('ez-image-asset:show-preview'));

            const preview = doc
                .querySelector(`[name="${name}[destinationContentId]"]`)
                .closest('.ez-field-edit--ezimageasset')
                .querySelector('.ez-field-edit__preview');

            const previewImg = preview.querySelector('.ez-field-edit-preview__media');
            const previewAlt = preview.querySelector('.ez-field-edit-preview__image-alt input');
            const previewActionPreview = preview.querySelector('.ez-field-edit-preview__action--preview');
            const assetNameContainer = preview.querySelector('.ez-field-edit-preview__asset-name a');
            const destinationLocationUrl = Routing.generate('ibexa.platform.connector.dam.asset_view', {
                destinationContentId: asset.dataset.id,
                assetSource: asset.dataset.source,
            });

            previewImg.setAttribute('src', asset ? asset.src : '//:0');
            previewImg.classList.toggle('d-none', asset === null);
            previewActionPreview.setAttribute('href', destinationLocationUrl);
            assetNameContainer.setAttribute('href', destinationLocationUrl);

            $('#select-from-dam-modal').modal('hide');
        }

        showResults(results) {
            const form = this.container.querySelector('.dam-search-form');
            const resultsContainer = this.container.querySelector('.ez-search-results');
            const contentContainer = resultsContainer.querySelector('.ez-search-results__content');
            const fragment = doc.createDocumentFragment();

            results.results.forEach((asset) => {
                const container = doc.createElement('div');
                let renderedItem = form.dataset.resultTemplate
                    .replace('{{ assetPath }}', asset.assetUri.path)
                    .replace('{{ sourceId }}', asset.source.sourceIdentifier)
                    .replace('{{ assetId }}', asset.identifier.id)
                    .replace('{{ alternativeText }}', asset.assetMetadata['alternativeText'] || '');

                container.insertAdjacentHTML('beforeend', renderedItem);

                const elementNode = container.firstChild;

                elementNode.addEventListener('click', this.selectAsset.bind(this));

                fragment.append(elementNode);
            });

            resultsContainer.classList.remove('ez-search-results--error');
            contentContainer.innerHTML = '';
            contentContainer.append(fragment);
        }

        fetchSearchResults(event) {
            event.preventDefault();

            this.queryForResults()
                .then(this.setTotalCount.bind(this))
                .then(this.refreshPagination.bind(this))
                .then((results) => {
                    if (results.status !== undefined && results.status !== 200) {
                        this.showError();
                    } else {
                        this.showResults(results);
                    }

                    return results;
                })
                .catch((error) => {
                    this.showError();

                    return error;
                });
        }

        init() {
            this.container.querySelector('.dam-search-form').addEventListener('submit', (event) => {
                this.changePage(1, { event });
            });

            this.container.querySelector('.ez-pagination__button--back .page-link').addEventListener('click', (event) => {
                this.changePage(this.activePage - 1, { event });
            });

            this.container.querySelector('.ez-pagination__button--next .page-link').addEventListener('click', (event) => {
                this.changePage(this.activePage + 1, { event });
            });

            $('#select-from-dam-modal').on('show.bs.modal', function(event) {
                const modal = doc.querySelector('#select-from-dam-modal');

                modal.dataset.name = event.relatedTarget.dataset.name;
            });

            $('#select-from-dam-modal').on('hidden.bs.modal', () => {
                this.activePage = 1;
                this.totalCount = 0;

                this.container.querySelector('.dam-search-form').reset();
                this.container.querySelector('.ez-search-results__content').innerHTML = '';
                this.container.querySelector('.ez-pagination').classList.add('ez-pagination--hidden');
            });
        }
    }

    doc.querySelectorAll('.ez-dam-wrapper.tab-pane').forEach((damWrapper) => {
        const damExtension = new EzDamExtension({ container: damWrapper });

        damExtension.init();
    });

    doc.querySelectorAll('.ez-field-edit--ezimageasset .ez-field-edit-preview__action--remove').forEach((node) => {
        const previewContainer = node.closest('.ez-field-edit--ezimageasset');

        node.addEventListener('click', () => {
            previewContainer.querySelector('.ez-data-source__destination-source-id').value = '';
        });
    });
})(window, window.document, window.Translator, window.jQuery, window.eZ);
