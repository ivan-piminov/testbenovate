import React from "react";
import {StartPage} from './StartPage';
import {shallow} from "enzyme";

describe('Testing <StartPage/>',()=>{
    it('StartPage render correctly', ()=>{
        const main = shallow(<StartPage/>);
        expect(main).toMatchSnapshot();
    })
})