import pz from '@plazarjs/core';
import list from './fixtures/list';
import tools from './fixtures/tools-data';

const toolsListConfig = pz.assignTo(list, {
    renderTo: 'div.tools',
    title: 'Tools',
    data: tools
});

export default pz.define('tools-list', toolsListConfig);