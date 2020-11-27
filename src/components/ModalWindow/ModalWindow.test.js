import React from "react";
import {ModalWindow} from './ModalWindow';
import {shallow} from "enzyme";

describe('Testing <ModalWindow/>',()=>{
    it('ModalWindow render correctly', ()=>{
        const modal = shallow(<ModalWindow/>);
        expect(modal).toMatchSnapshot();
    })
});