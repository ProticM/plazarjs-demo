import pz from '@plazarjs/core';
import config from './fixtures/cards-config';

const clone = pz.obj.clone(config);

const flexibleCard = pz.assignTo(clone, {
	ownerType: 'ui-bootstrap-card',
	header: {
		text: 'Flexible'
	},
	body: {
		text: ' PlazarJS is flexible enough to stretch to meet your needs. You can create component with inline template, load template and/or viewmodel from the server or attach to the pre-rendered HTML.'
	},
	footer: false
});

export default pz.define('flexible-card', flexibleCard);