import React from "react";
import {ChoiceButtons} from './ChoiceButtons';
import {shallow} from "enzyme";

describe('Testing <ChoiceButtons/>',()=>{
    it('ChoiceButtons render correctly', ()=>{
        const choiceButtons = shallow(<ChoiceButtons/>);
        expect(choiceButtons).toMatchSnapshot();
    })
});