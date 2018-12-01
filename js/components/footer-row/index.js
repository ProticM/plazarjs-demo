import features from './features';
import tools from './tools';
import about from './about';
import '../title';

const footerRow = {
    type: 'ui-bootstrap-grid',
    components: [
        {
            type: 'title-component',
            size: '5',
            text: 'Additional Info:',
            renderBefore: 'div.main-row'
        },
        features, 
        tools, 
        about
    ],
    rows: [{
        css: ['m-0 main-row'],
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