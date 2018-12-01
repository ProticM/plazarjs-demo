import tpl from './list-template.html';

const unstyledList = {
    ownerType: 'component',
    template: tpl,
    viewModel: {
        items: [],
        title: ''
    },
    init: function(){
        this.viewModel.items = this.data.map(item => {
            return {
                href: '#',
                text: item
            }
        });
        this.viewModel.title = this.title;
        this.base();
    }
};

export default unstyledList;