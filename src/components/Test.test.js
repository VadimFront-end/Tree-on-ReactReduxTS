import React from 'react';
import renderer from 'react-test-renderer';
import Test from './Test';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const setUp = props => shallow(<Test {...props}/>);

describe('Testing component `Test`', () => {
    it('Can i test component with Snapshot', () => {
        const component = renderer.create(
            <Test name={'Vlad'} id={1}/>
        );
        expect(component).toMatchSnapshot();
    })

    it('Can i test component with enzyme', () => {
        const component = setUp({name: 'Vadim', id: 1});
        console.log(component.debug())
        expect(component.find('.Test').length).toBe(1);
    });
})
