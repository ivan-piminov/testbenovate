import React from "react";
import {CommonTable} from './CommonTable';
import {shallow} from "enzyme";

describe('Testing <CommonTable/>',()=>{
    const props = {

    }
    it('CommonTable render correctly', ()=>{
        const comTable = shallow(<CommonTable/>);
        expect(comTable).toMatchSnapshot();
    })
});