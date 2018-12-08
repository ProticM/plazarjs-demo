import pz from '@plazarjs/core';
import tpl from './fixtures/template.html';
import data from './fixtures/data';

const grid = {
    type: 'grid-component',
    template: tpl,
    handlers: [{
        on: 'click',
        selector: 'th.grid-head-col',
        fn: function(el) {
            let sortKey = el.getAttribute('data-dindex');
            this.sortBy(sortKey);
        }
    }],
    viewModel: {
        columns: [{
            text: 'Name',
            sorter: { value: 1, asc: true },
            dataIndex: 'name'
        }, {
            text: 'Wins by KO',
            sorter: { value: 1, asc: true },
            dataIndex: 'winsByKo'
        }],
        data: data,
        getRowIndex: function() {
            return this.rootVm.data.indexOf(this.rootVm.row);
        },
        getColumnValue: function() {
            let rootVm = this.rootVm;
    	    return rootVm.row[rootVm.column.dataIndex()]();
        }
    },
    init: function() {
        this.base();
        this.sortBy('name');
    },
    sortBy: function(sortKey) { 
        let column = pz.find(col => { return col.dataIndex() == sortKey }, this.viewModel.columns);
        let sorter = column.sorter.value() * -1;
        
        column.sorter.asc = sorter > 0;
        column.sorter.value = sorter;
        
        this.viewModel.data.sort(function(a, b) {
            let val1 = a[sortKey]();
            let val2 = b[sortKey]();
            return (val1 == val2 ? 0 : val1 > val2 ? 1 : -1) * sorter;
        });
        
    }
};

export default pz.component.extend(grid);