import pz from '@plazarjs/core';
import list from './fixtures/list';
import about from './fixtures/about-data';

const aboutListConfig = pz.assignTo(list, {
    renderTo: 'div.about',
    title: 'About',
    data: about
});

export default pz.define('about-list', aboutListConfig);