import menu from './fixtures/menu';
// This is an example of how we can import a specific bootstrap component. 
// We only need to do it like this if the @plazarjs/bootstrap-ui plugin was not registered entirely in our app entry point.
// If the plugin was registered, we can use pz.define and ownerType config.
// Feel free to choose the approach it feels more natural to you.
import { navbar } from '@plazarjs/bootstrap-ui/dist/esmodules/components';

const header = {
	type: 'header',
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

export default navbar.extend(header);