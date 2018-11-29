import features from './features';
import tools from './tools';
import about from './about';

const footerRow = {
    type: 'ui-bootstrap-grid',
    css: ['mt-4 p-3 border-top'],
    components: [
        features, 
        tools, 
        about
    ],
    rows: [{
        css: ['m-0'],
        columns: [{
            size: {
                sm: 4
            },
            css: ['p-0 features']
        }, {
            size: {
                sm: 4
            },
            css: ['p-0 tools']
        }, {
            size: {
                sm: 4
            },
            css: ['p-0 about']
        }]
    }]
};

export default footerRow;