const menu = {
	items: [{
		text: 'Home'
	},{
		text: 'About'
	}, {
		type: 'ui-bootstrap-dropdown',
		inNav: true,
		text: 'Contact',
		menuItems: [{
			text: 'via Email'
		},{
			text: 'via Twitter'
		}]
	}]
};
	
export default menu;