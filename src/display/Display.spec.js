// Test away!
import {render} from "react-testing-library";
import React from "react"; 
import "jest-dom/extend-expect";
import 'react-testing-library/cleanup-after-each';


import Display from "./Display";



//Open display tests
describe(" open display stuff", () => {
  
    it("has a  red LED when locked", () => {
    
        const component = render(<Display closed={true} locked={true} />);
    
    const display = component.getByText("Locked");

     expect(display).toHaveClass("red-led");

});


it(" displays closed  display", () => {
  const component = render(<Display closed={true} locked={false} />);
  
  const display = component.getByText("Unlocked");

   expect(display).toHaveClass("green-led");

});


it("displays locked while locked", () => {
  
    const component = render(<Display closed={true} locked={true} />);
  
  component.getByText("Locked");
});
//Display LED class tests
describe("display light tests", () => {
    
    
    it("displays a green light when closed", () => {
       
        const component = render(<Display closed={false} locked={false} />);
       
        const display = component.getByText("Open");
      
         expect(display).toHaveClass("green-led");

      });



  it("displays a red light when closed", () => {
    
    const component = render(<Display closed={true} locked={false} />);
   
    const display = component.getByText("Closed");

     expect(display).toHaveClass("red-led");

});

  });

})