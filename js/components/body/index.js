import pz from '@plazarjs/core';
import homeJumbo from '../home-jumbo';
import cardDeck from '../home-cards';
import footerRow from '../footer-row';
import grid from '../grid';

const body = {
	ownerType: 'ui-bootstrap-container',
	components: [homeJumbo, {
		type: 'ui-bootstrap-container', // we can easily create our components in a declarative way since we have registered the entire bootstrap-ui plugin.
		css: ['cards-container'],
		components: [
			cardDeck, 
			grid
		]
	}, footerRow],
	fluid: true,
	renderTo: 'main',
	replace: true,
	autoLoad: true
};

export default pz.define('body', body);