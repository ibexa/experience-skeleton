export const computePages = ({ activePage, pagesCount, separator }) => {
    const pages = [];
    let wasSeparator = false;

    for (let i = 1; i <= pagesCount; i++) {
        const isFirstPage = i === 1;
        const isLastPage = i === pagesCount;
        const isInRange = i >= activePage - 1 && i <= activePage + 3;

        if (isFirstPage || isLastPage || isInRange) {
            pages.push(i);
            wasSeparator = false;
        } else if (!wasSeparator) {
            pages.push(separator);
            wasSeparator = true;
        }
    }

    return pages;
};
