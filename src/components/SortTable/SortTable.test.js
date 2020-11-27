import React from "react";
import {SortTable} from './SortTable';
import {shallow} from "enzyme";

describe('Testing <SortTable/>',()=>{

    const props = [
        {id: 1, firstName: 'Артем', lastName: 'Ребров', department: 0},
        {id: 2, firstName: 'Максим', lastName: 'Петров', department: 1},
        {id: 3, firstName: 'Сергей', lastName: 'Шестаков', department: 2},
        {id: 4, firstName: 'Андрей', lastName: 'Воронцов', department: 1}
    ]
    it('SortTable render correctly', ()=>{
        const sortTable = shallow(<SortTable {...props}/>);
        console.log(sortTable.debug())
        expect(sortTable).toMatchSnapshot();
    })
});
