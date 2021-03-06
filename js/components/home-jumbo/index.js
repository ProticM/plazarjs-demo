// here we just want to create the jumbotron with some setup, no need to extend or define it, we can just export the config. The type of 'ui-bootstrap-container' was already defined
// when we registered our bootstrap-ui plugin
const jumbo = {
	type: 'ui-bootstrap-container',
	renderAs: 'jumbotron',
	css: ['bg-white', 'border-bottom', 'm-0'],
	style: 'word-break: break-all;',
	fluid: true,
	jumbotron: {
		title: {
			text:'PlazarJS/Bootstrap-UI/ECMAScript demo',
			size: 4
		},
		leadText: 'Easily create application layouts using PlazarJS Bootstrap-UI',
		buttons: [{
			text: 'Star PlazarJS on GitHub',
			css: ['mr-2', 'btn-sm-block'],
			onClick: () => {
				window.location = 'https://github.com/ProticM/plazar-js';
			}
		}, {
			text: 'Demo source code',
			appearance: 'outline-primary',
			css: ['mr-2', 'btn-sm-block'],
			onClick: () => {
				window.location = 'https://github.com/ProticM/plazarjs-demo';
			}
		}, {
			text: 'Check out the docs',
			css: ['btn-sm-block'],
			appearance: 'outline-primary',
			onClick: () => {
				window.location = 'http://www.plazarjs.com';
			}
		}]
	}
};

export default jumbo;