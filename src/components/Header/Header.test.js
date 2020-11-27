import React from "react";
import {Header} from './Header';
import {shallow} from "enzyme";

describe('Testing <Header/>',()=>{
    it('Header render correctly', ()=>{
        const header = shallow(<Header/>);
        expect(header).toMatchSnapshot();
    })
});