// Test away
import React from 'react';
import {cleanup, render,} from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";
afterEach(cleanup);

describe('The Display Component', () => {
    it('renders display', () => {
        render(<Dashboard />);
    });

    it('renders the Display component', () => {
        const { getByText } = render(<Dashboard />);
        getByText(/open/i);
        getByText(/unlocked/i);
    })

    it('renders the controls component', () => {
        const { getByText } = render(<Dashboard />);
        getByText(/close gate/i);
        getByText(/lock gate/i);
    })
});