import pz from '@plazarjs/core';

const title = {
    ownerType: 'component',
    size: 1,
    text: 'Title',
    css: ['pt-3', 'pb-2', 'mb-3', 'border-bottom'],
    load: function() {
        this.template = pz.str.format('<h{0}>{1}</h{2}>', this.size, this.text, this.size);
        this.base();
    }
};

let comp = pz.define('title-component', title);
pz.storeDefinition('title-component', comp); // since we are storing our definition, no need to export it