(function(global, doc) {
    const chart = doc.querySelector('.ez-commerce-user-overview');

    if (!chart) {
        return;
    }

    const { chartData } = chart.dataset;

    c3.generate({
        bindto: '.ez-commerce-user-overview',
        padding: {
            right: 35,
        },
        data: {
            x: 'Date',
            columns: JSON.parse(chartData),
            xFormat: '%Y-%m-%d',
            type: 'area',
        },
        size: {
            width: '600',
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    count: 4,
                    format: '%Y-%m-%d',
                },
            },
        },
    });
})(window, window.document);
