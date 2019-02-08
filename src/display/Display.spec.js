// Test away!
import React from 'react';
import {cleanup, render,} from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";
afterEach(cleanup);

describe('The Display Component', () => {
    it('renders the ', () => {
        render(<Display closed={false} locked={false} />);
    });

    it('display open if the gate is open', () => {
        const { getByText } = render(<Display closed={false} locked={false} />);
        getByText(/open/i);
    })

    it('display closed if the gate is closed', () => {
        const { getByText } = render(<Display closed={true} locked={true} />);
        getByText(/closed/i);
    })

    it('display locked if the gate is closed', () => {
        const { getByText } = render(<Display closed={true} locked={true} />);
        getByText(/locked/i);
    })

    it('display unlocked if the gate is open', () => {
        const { getByText } = render(<Display closed={false} locked={false} />);
        getByText(/unlocked/i);
    })
});