// here we just want to create the jumbotron with some setup, no need to extend it
const jumbo = {
	type: 'ui-bootstrap-container',
	renderAs: 'jumbotron',
	css: ['bg-white border-bottom'],
	fluid: true,
	jumbotron: {
		title: {
			text:'PlazarJS Bootstrap UI demo page',
			size: 4
		},
		leadText: 'Easily create application layouts using PlazarJS Bootstrap UI',
		buttons: [{
			text: 'Star PlazarJS on GitHub',
			css: ['mr-2'],
			onClick: () => {
				window.location = 'https://github.com/ProticM/plazar-js';
			}
		}, {
			text: 'Demo source code',
			appearance: 'outline-primary',
			onClick: () => {
				window.location = 'https://github.com/ProticM/plazarjs-demo';
			}
		}]
	}
};

export default jumbo;