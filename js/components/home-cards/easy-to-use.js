// This is an example of how we can import a specific bootstrap component. 
// We only need to do it like this if the @plazarjs/bootstrap-ui plugin was not registered entirely in our app entry point.
// If the plugin was registered, we can use pz.define and ownerType config.
// Feel free to choose the approach it feels more natural to you.
import { card } from '@plazarjs/bootstrap-ui/dist/esmodules/components';
import config from './fixtures/cards-config';
export default card.extend(config);