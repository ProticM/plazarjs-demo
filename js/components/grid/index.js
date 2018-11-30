import pz from '@plazarjs/core';
import tpl from './fixtures/template.html';
import data from './fixtures/data';

const grid = {
    type: 'grid-component',
    template: tpl,
    handlers: [{
        on: 'click',
        selector: 'th.grid-head-col',
        fn: 'onHeaderClick'
    }],
    sorters: {},
    viewModel: {
        columns: [{
            text: 'Name',
            dataIndex: 'name'
        },{
            text: 'Wins by KO',
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
        let me = this;
        pz.forEach(this.viewModel.columns, (col) => {
            me.sorters[col.dataIndex.toLowerCase().trim()] = 1;
        });
        this.base();
    },
    onHeaderClick: function(el) {
        let column = el.getAttribute('data-dindex').toLowerCase().trim();
        this.sorters[column] = this.sorters[column] * -1;
        let sorter = this.sorters[column];
        this.viewModel.data.sort((a, b) => {
            let val1 = pz.find(col => { return col.dataIndex.toLowerCase().trim() == column.trim() }, a).value;
            let val2 = pz.find(col => { return col.dataIndex.toLowerCase().trim() == column.trim() }, b).value;
            return (val1 == val2 ? 0 : val1 > val2 ? 1 : -1) * sorter;
        });
    }
};

export default pz.component.extend(grid);