// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

describe('The Display Component', () => {
    it('renders the ', () => {
        render(<Controls />);
    });

    it('display locked if the gate is closed', () => {
        const { getByText } = render(<Controls locked={false} closed={false} />);
        getByText(/lock gate/i);
    });

    it('display unlocked if the gate is open', () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);
        getByText(/unlock gate/i);
    });

    it('display close gate if the gate is closed', () => {
        const { getByText } = render(<Controls locked={false} closed={false} />);
        getByText(/close gate/i);
    });

    it('display open gate if the gate is open', () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);
        getByText(/open gate/i);
    });
});