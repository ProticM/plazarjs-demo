import pz from '@plazarjs/core';
import menu from './fixtures/menu';

const header = {
	ownerType: 'ui-bootstrap-navbar',
	renderTo: 'header',
	autoLoad: true,
	replace: true,
	css: ['p-3', 'border-bottom', 'shadow-sm'],
    brand: {
        type: 'text',
        value: 'PlazarJS example',
    },
    menu: menu
};

export default pz.define('header', header);