import * as React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../HelloWorld';

describe('First React component test with Enzyme', () => {
    it('renders the text', () => {
        const rendering = shallow(<HelloWorld color="black" />);
        const result = rendering.contains('Hello world!');
        expect(result).toBeTruthy();
    });
    it('renders the text with the right color', () => {
        const rendering = shallow(<HelloWorld color="black" />);
        expect(rendering.find('div').props().style).toStrictEqual({color:'black'});
    });
});


// import * as React from "react";
// import { shallow } from "enzyme";

// import Hello from "../Hello";

// it("renders the heading", () => {
//     const result = shallow(<Hello />).contains(<h1>Hello!</h1>);
//     expect(result).toBeTruthy();
// });