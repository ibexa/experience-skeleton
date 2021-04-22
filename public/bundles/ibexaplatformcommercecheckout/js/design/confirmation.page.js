(function(global, doc) {
    doc.querySelector('.ezcommerce-js--print-page').addEventListener('click', (event) => {
        event.preventDefault();

        global.print();
    });
})(window, window.document);
