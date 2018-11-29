import pz from '@plazarjs/core';
import list from './fixtures/list';
import features from './fixtures/features-data';

const featuresListConfig = pz.assignTo(list, {
    renderTo: 'div.features',
    title: 'Features',
    data: features
});

export default pz.define('features-list', featuresListConfig);