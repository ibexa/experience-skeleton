(function(global, doc, eZ, Routing, Translator) {
    const CLASS_LIST_WRAPPER_HIDDEN = 'ez-workflow-apply-transition__user-list-wrapper--hidden';
    const CLASS_LIST_ITEM_DISABLED = 'ez-workflow-apply-transition__user-list-item--disabled';
    const SELECTOR_APPLY_TRANSITION = '.ez-workflow-apply-transition';
    const SELECTOR_USER_INPUT = '.ez-workflow-apply-transition__user-input';
    const SELECTOR_LIST_WRAPPER = '.ez-workflow-apply-transition__user-list-wrapper';
    const SELECTOR_MESSAGE_WRAPPER = '.ez-workflow-apply-transition__message-wrapper';
    const SELECTOR_USER_NAME = '.ez-workflow-apply-transition__user-name';
    const applyTransitionButtons = doc.querySelectorAll('.ez-btn--workflow-apply');
    const userInputs = doc.querySelectorAll(SELECTOR_USER_INPUT);
    const usersLists = doc.querySelectorAll(`.ez-workflow-apply-transition__user-list`);
    const removeReviewerButtons = doc.querySelectorAll('.ez-tag__remove-btn--remove-reviewer');
    let getReviewersTimeout;
    const handleRequestResponse = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response.json();
    };
    const applyTransition = (event) => {
        const transitionContainer = event.currentTarget.closest(SELECTOR_APPLY_TRANSITION);
        const message = transitionContainer.querySelector(`${SELECTOR_MESSAGE_WRAPPER} textarea`).value;
        const reviewer = transitionContainer.querySelector(SELECTOR_USER_NAME);
        const reviewerId = reviewer ? reviewer.dataset.id : '';

        doc.querySelector('[name="ezplatform_content_forms_content_edit[workflow][name]"]').value =
            transitionContainer.dataset.workflowName;
        doc.querySelector('[name="ezplatform_content_forms_content_edit[workflow][transition]"]').value =
            transitionContainer.dataset.transitionName;
        doc.querySelector('[name="ezplatform_content_forms_content_edit[workflow][comment]"]').value = message;
        doc.querySelector('[name="ezplatform_content_forms_content_edit[workflow][reviewer]"]').value = reviewerId;

        doc.querySelector('[name="ezplatform_content_forms_content_edit[workflow][apply]"]').click();
    };
    const generateReviewersListRoute = (transitionNode, query) => {
        const {
            contextAction,
            workflowName,
            transitionName,
            contentTypeIdentifier,
            languageCode,
            parentLocationId,
            contentId,
            versionNo,
            locationId,
        } = transitionNode.dataset;
        let route;

        if (contextAction === 'create') {
            route = Routing.generate('ezplatform.workflow.content_create.reviewer_suggest', {
                workflowName,
                transitionName,
                contentTypeIdentifier,
                languageCode,
                locationId: parentLocationId,
            });
        } else {
            route = Routing.generate('ezplatform.workflow.content_edit.reviewer_suggest', {
                workflowName,
                transitionName,
                contentId,
                versionNo,
                locationId,
            });
        }

        return `${route}?query=${query}`;
    };
    const getReviewerList = (transitionContainer, route) => {
        const request = new Request(route);
        const { showErrorNotification } = eZ.helpers.notification;
        const errorMessage = Translator.trans(/*@Desc("Can't load reviewer list")*/ 'load.reviewers.error', {}, 'transition_apply');

        fetch(request)
            .then(handleRequestResponse)
            .then(showReviewersList.bind(this, transitionContainer))
            .catch(() => showErrorNotification(errorMessage));
    };
    const createReviewersListItem = (reviewer) =>
        `<li data-id="${reviewer.id}" class="ez-workflow-apply-transition__user-list-item${
            !reviewer.canReview ? ` ${CLASS_LIST_ITEM_DISABLED}` : ''
        }">${reviewer.name}</li>`;
    const showReviewersList = (transitionContainer, reviewersList) => {
        const listWrapper = transitionContainer.querySelector(SELECTOR_LIST_WRAPPER);
        const listContainer = transitionContainer.querySelector('.ez-workflow-apply-transition__user-list');
        const renderedReviewers = reviewersList.reduce((total, reviewer) => total + createReviewersListItem(reviewer), '');
        const listInfoMethodName = reviewersList.some((reviewer) => !reviewer.canReview) ? 'removeAttribute' : 'setAttribute';

        listContainer.innerHTML = renderedReviewers;
        listWrapper.classList.remove(CLASS_LIST_WRAPPER_HIDDEN);
        transitionContainer.querySelector('.ez-workflow-apply-transition__user-list-info')[listInfoMethodName]('hidden', 'hidden');
    };
    const selectReviewer = (event) => {
        const transitionContainer = event.target.closest(SELECTOR_APPLY_TRANSITION);
        const reviewer = transitionContainer.querySelector(SELECTOR_USER_NAME);

        if (event.target.classList.contains(CLASS_LIST_ITEM_DISABLED)) {
            return;
        }

        reviewer.dataset.id = event.target.dataset.id;
        reviewer.innerHTML = event.target.innerHTML;

        transitionContainer.querySelector(SELECTOR_LIST_WRAPPER).classList.add(CLASS_LIST_WRAPPER_HIDDEN);

        changeStep(transitionContainer, false);
    };
    const changeStep = (transitionContainer, firstStep) => {
        const reviewerRequired = transitionContainer.dataset.reviewerRequired;
        const userMethodName = firstStep ? 'setAttribute' : 'removeAttribute';
        const messageMethodName = firstStep && reviewerRequired ? 'setAttribute' : 'removeAttribute';
        const inputMethodName = firstStep ? 'removeAttribute' : 'setAttribute';
        const input = transitionContainer.querySelector(SELECTOR_USER_INPUT);

        transitionContainer.querySelector('.ez-workflow-apply-transition__user')[userMethodName]('hidden', 'hidden');
        transitionContainer.querySelector(SELECTOR_MESSAGE_WRAPPER)[messageMethodName]('hidden', 'hidden');
        transitionContainer.querySelector('.ez-workflow-apply-transition__actions')[messageMethodName]('hidden', 'hidden');

        input[inputMethodName]('hidden', 'hidden');
        input.value = '';
    };
    const removeReviewer = (event) => {
        const transitionContainer = event.target.closest(SELECTOR_APPLY_TRANSITION);

        changeStep(transitionContainer, true);
    };
    const handleTyping = (event) => {
        const query = event.target.value.trim();

        window.clearTimeout(getReviewersTimeout);

        if (query.length > 2) {
            const transitionContainer = event.target.closest(SELECTOR_APPLY_TRANSITION);
            const reviewersListRoute = generateReviewersListRoute(transitionContainer, query);

            getReviewersTimeout = window.setTimeout(getReviewerList.bind(null, transitionContainer, reviewersListRoute), 200);
        }
    };

    if (!!applyTransitionButtons.length) {
        applyTransitionButtons.forEach((btn) => btn.addEventListener('click', applyTransition, false));
    }

    if (!!userInputs.length && !!usersLists.length && !!removeReviewerButtons.length) {
        userInputs.forEach((btn) => btn.addEventListener('keyup', handleTyping, false));
        usersLists.forEach((usersList) => usersList.addEventListener('click', selectReviewer, false));
        removeReviewerButtons.forEach((usersList) => usersList.addEventListener('click', removeReviewer, false));
    }
})(window, document, window.eZ, window.Routing, window.Translator);
