import tpl from './template.html';

const unstyledList = {
    ownerType: 'component',
    template: tpl,
    viewModel: {
        items: [],
        title: ''
    },
    init: function(){
        this.viewModel.items = this.items;
        this.viewModel.title = this.title;
        this.base();
    }
};

export default unstyledList;