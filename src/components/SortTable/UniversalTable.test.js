import React from "react";
import {UniversalSortTable} from './UniversalSortTable';
import {shallow} from "enzyme";

describe('Testing <UniversalSortTable/>',()=>{
    const props =[[
        {id: 1, firstName: 'Артем', lastName: 'Ребров', department: 'Junior'},
        {id: 2, firstName: 'Максим', lastName: 'Петров', department: 'Junior'},
        {id: 3, firstName: 'Сергей', lastName: 'Шестаков', department: 'Middle'},
        {id: 4, firstName: 'Андрей', lastName: 'Воронцов', department: 'Senior'}
    ]]

    it('UniversalSortTable render correctly', ()=>{
        const UniversalTable = shallow(<UniversalSortTable {...props}/>);
        expect(UniversalTable).toMatchSnapshot();
    })
})
