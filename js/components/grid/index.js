import pz from '@plazarjs/core';
import tpl from './fixtures/template.html';
import data from './fixtures/data';

const grid = {
    type: 'grid-component',
    template: tpl,
    viewModel: {
        columns: [{
            text: '&#x2116;',
            dataIndex: 'id'
        }, {
            text: 'Title',
            dataIndex: 'title'
        },{
            text: 'Description',
            dataIndex: 'text'
        }],
        data: data,
        getRowIndex: function() {
            return this.rootVm.data.indexOf(this.rootVm.row);
        },
        getColumnValue: function() {
            var colIdx = this.el.getAttribute('data-colidx');
            var rowIdx = this.el.getAttribute('data-rowidx');
            var column = this.vm.data.getAt(rowIdx);
            return column[colIdx].value;
        }
    }
};

export default pz.component.extend(grid);