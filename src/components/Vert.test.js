import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Vert} from "./Vert";
Enzyme.configure({ adapter: new Adapter() });

describe('Testing component `Vert`', () => {
    const testRightVert = {
        id: 1,
        left: null,
        right: null,
        lvl: 1,
        parent: null
    }
    const testVert = {
        id: 0,
        left: null,
        right: testRightVert,
        lvl: 0,
        parent: null
    }
    testRightVert.parent = testVert;
    it('Can i test component with Snapshot', () => {
        const component = renderer.create(
            <Vert vert={testVert}/>
        );
        expect(component).toMatchSnapshot();
    })

    // it('Can i test component with enzyme', () => {
    //     const component = shallow(<Vert vert={testVert} />);
    //     console.log(component.debug())
    //     expect(component).toBe(1);
    // });
    //доделать
})
