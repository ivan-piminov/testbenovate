import React from "react";
import {Routes} from './Routes';
import {shallow} from "enzyme";

describe('Testing <Routes/>',()=>{
    it('Routes render correctly', ()=>{
        const routes = shallow(<Routes/>);
        expect(routes).toMatchSnapshot();
    })
});