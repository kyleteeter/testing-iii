// Test away!
import React from 'react';
import {cleanup, render,} from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";
afterEach(cleanup);

describe('The Display Component', () => {
    it('renders the ', () => {
        render(<Display />);
    });

    it('render display Lock', () => {
        const component = render(<Display />)
        const lock = component.toHaveClass('lockedClass');
        expect(lock).toHaveTextContent(/Locked/i)
    })
});