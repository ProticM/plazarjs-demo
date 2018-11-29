import features from './features';

const footerRow = {
    type: 'ui-bootstrap-grid',
    css: ['mt-2'],
    components: [features],
    rows: [{
        columns: [{
            size: {
                sm: 4
            },
            css: ['p-0 features']
        }, {
            size: {
                sm: 4
            },
            css: ['p-0 resources']
        }, {
            size: {
                sm: 4
            },
            css: ['p-0 about']
        }]
    }]
};

export default footerRow;