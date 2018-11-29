const jumbo = {
	type: 'ui-bootstrap-container',
	renderAs: 'jumbotron',
	css: ['bg-white border-bottom'],
	fluid: true,
	jumbotron: {
		title: {
			text:'PlazarJS Demo',
			size: 4
		},
		leadText: 'Easily create application layouts using PlazarJS Bootstrap-UI',
		buttons: [{
			text: 'Star us on GitHub',
			onClick: () => {
				window.location = 'https://github.com/ProticM/plazar-js';
			}
		}]
	}
};

export default jumbo;