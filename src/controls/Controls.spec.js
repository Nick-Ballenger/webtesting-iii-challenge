// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Controls from './Controls';
import { toBeDisabled } from 'jest-dom';
import renderer from 'react-test-renderer';


expect.extend({toBeDisabled});


describe("tests locking and unlocking functionality", ()=>{
//Lock Tests
it('should disable open and close when locked', () => {
    const { getByText } = render(<Controls locked />);

    const button = getByText(/close gate/i);

    expect(button).toBeDisabled();
});

it("display 'locked'", () => {
    const component = render(<Controls closed={true} locked={true} />);

     component.getByText("Unlock Gate");
});

//unlock test
it("should display unlocked when unlocked", () => {
    const component = render(<Controls closed={true} locked={false} />);

     component.getByText("Lock Gate");
});





})
//unlock Testing
describe("Unlocked functionality", () => {

    it("allows opening when locked", () => {
        const component = render(<Controls closed={true} locked={false} />);
        const button = component.getByText("Open Gate");

         expect(button).not.toBeDisabled();
    });
   
    it("displays close while opened", () => {
        const component = render(<Controls closed={false} locked={false} />);

         component.getByText("Close Gate");
    });
    it("displays open when closed", () => {
        const component = render(<Controls closed={true} locked={false} />);

         component.getByText("Open Gate");
    });
})


//Control snapshot
describe('<Controls />', () => {
    // 2. write this test
    it.skip('matches snapshot', () => {
      const tree = renderer.create(<Controls />); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
