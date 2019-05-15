// Test away
import React from "react";
import { render, queryAllByText } from "react-testing-library";
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';
import Dashboard from "./Dashboard";


 describe("<Dashboard/>", () => {
  it("renders test", () => {

    render(<Dashboard />);
  });
  
});

describe('Dashboard tests', () => {
	it('should show controllers and the display', () => {
		const { getByText } = render(<Dashboard />);

		getByText(/unlocked/i);
		getByText(/open/i);
		getByText(/lock gate/i);
		getByText(/close gate/i);
	});
});


//Dashboard snapshot

describe('<Dashboard />', () => {
    // 2. write this test
    it.skip('matches snapshot', () => {
      const tree = renderer.create(<Dashboard />); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });