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
});