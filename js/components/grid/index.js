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
            let sortKey = el.getAttribute('data-dindex').toLowerCase().trim();
            this.sortBy(sortKey);
        }
    }],
    sortKey: 'name',
    viewModel: {
        columns: [{
            text: 'Name',
            sorter: -1,
            dataIndex: 'name'
        }, {
            text: 'Wins by KO',
            sorter: -1,
            dataIndex: 'winsByKo'
        }],
        data: data,
        getRowIndex: function() {
            return this.rootVm.data.indexOf(this.rootVm.row);
        },
        getColumnValue: function() {
            let colIdx = this.el.getAttribute('data-colidx');
            let rowIdx = this.el.getAttribute('data-rowidx');
            let column = this.vm.data.getAt(rowIdx);
            return column[colIdx].value;
        }
    },
    init: function() {
        this.base();
        this.sortBy(this.sortKey);
    },
    sortBy: function(sortKey) { 
        let column = pz.find(col => { return col.dataIndex().toLowerCase().trim() == sortKey.trim() }, this.viewModel.columns);
        this.clearSort(sortKey, column);

        column.sorter = column.sorter() * -1;
        this.viewModel.data.sort((a, b) => {
            let val1 = pz.find(col => { return col.dataIndex.toLowerCase().trim() == sortKey.trim() }, a).value;
            let val2 = pz.find(col => { return col.dataIndex.toLowerCase().trim() == sortKey.trim() }, b).value;
            return (val1 == val2 ? 0 : val1 > val2 ? 1 : -1) * column.sorter();
        });
        this.sortKey = sortKey;
    },
    clearSort: function(column) {
        if(this.sortKey == column.dataIndex().toLowerCase().trim()) {
            return;
        };

        pz.forEach(this.viewModel.columns, col => {
            col.sorter = -1;
        });
    }
};

export default pz.component.extend(grid);