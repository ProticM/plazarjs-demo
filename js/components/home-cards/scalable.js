import pz from '@plazarjs/core';
import config from './fixtures/cards-config';

const clone = pz.obj.clone(config);

const scalableCard = pz.assignTo(clone, {
	ownerType: 'ui-bootstrap-card',
	header: {
		text: 'Scalable'
	},
	body: {
		text: 'You need an application for your business? PlazarJS class system is easily extendable. You can create your custom predefined controls by extending the core framework types. The same way Bootstrap UI was created.'
	},
	footer: false
});

export default pz.define('scalable-card', scalableCard);