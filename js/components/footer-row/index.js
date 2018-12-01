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
                lg: 4,
                md: 4,
                sm: 12
            },
            css: ['p-0 features']
        }, {
            size: {
                lg: 4,
                md: 4,
                sm: 12
            },
            css: ['p-0 tools']
        }, {
            size: {
                lg: 4,
                md: 4,
                sm: 12
            },
            css: ['p-0 about']
        }]
    }]
};

export default footerRow;