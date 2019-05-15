// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Controls from './Controls';
import { toBeDisabled } from 'jest-dom';


expect.extend({toBeDisabled});


describe("Control component tests", ()=>{
//Lock Test
test('disabling open and close when locked', () => {
    const { getByText } = render(<Controls locked />);

    const button = getByText(/close gate/i);

    expect(button).toBeDisabled();
});






})
