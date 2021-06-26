import React from 'react';
import Counter from '../Counter';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;
beforeEach(() => {
 const component = render(<Counter />);
 getByTestId = component.getByTestId;
 
});

test("header renders correct text", () => {

 const element = getByTestId("header");
 expect(element.textContent).toBe("My Counter");
});

 test("counter initially at zero", () => {
 const counterEl = getByTestId("counter");
 expect(counterEl.textContent).toBe("0");

});
//failing
test("input contains an initial value of one", () => {
 const inputEl = getByTestId("input");
 expect(inputEl.value).toBe("1");
});

 test("add button renders with +", () => {
 const addBtn = getByTestId("addBtn");
 expect(addBtn.textContent).toBe("+");
}); 

test("subtract button renders with -", () => {
 const subBtn = getByTestId("subBtn");
 expect(subBtn.textContent).toBe("-");
});

 test("change value of input works correctly", () => {
 const inputEl = getByTestId("input");
 fireEvent.change(inputEl, {
  target: {
   value: "5"
  }
 })
 expect(inputEl.value).toBe("5");
}); 

 test("click on plus button adds 1 to counter", () => {
 const btnElement = getByTestId("addBtn");
 const countEl = getByTestId("counter");
 expect(countEl.textContent).toBe("0");
 fireEvent.click(btnElement);
 expect(countEl.textContent).toBe("1");

}) 

 test("click on plus button subtracts 1 to counter", () => {
 const btnElement = getByTestId("subBtn");
 const countEl = getByTestId("counter");
 expect(countEl.textContent).toBe("0");
 fireEvent.click(btnElement);
 expect(countEl.textContent).toBe("-1");

});
 
 test("change input value then clicking on add btn works correctly", () => {
 const btnElement = getByTestId("addBtn");
 const countEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  fireEvent.change(inputEl, {
   target: {
    value:"5"
   }
  })

 fireEvent.click(btnElement);
 expect(countEl.textContent).toBe("5");

 })
test("change input value then clicking on subtract btn works correctly", () => {
 const btnElement = getByTestId("subBtn");
 const countEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  fireEvent.change(inputEl, {
   target: {
    value:"5"
   }
  })

 fireEvent.click(btnElement);
 expect(countEl.textContent).toBe("-5");
  
})

test("adding and subtracting leads to correct counter value", () => {

 const addBtn = getByTestId("addBtn");
 const subBtn = getByTestId("subBtn");
 const countEl = getByTestId("counter");
 const inputEl = getByTestId("input");
 fireEvent.change(inputEl, {
  target: {
   value: "10"
  }
 })
 fireEvent.click(addBtn);
 fireEvent.click(addBtn);
 fireEvent.click(addBtn);
 fireEvent.click(addBtn);
 fireEvent.click(subBtn);
 fireEvent.click(subBtn);

 expect(countEl.textContent).toBe("20");

 fireEvent.change(inputEl, {
  target: {
   value: "5"
  }
 })
 
 fireEvent.click(addBtn);
 
 fireEvent.click(subBtn);
 fireEvent.click(subBtn);
 fireEvent.click(subBtn);
 expect(countEl.textContent).toBe("10");
});

test("counter contains correct className", () => {
 const countEl = getByTestId("counter");
 const addBtn = getByTestId("addBtn");
 const subBtn = getByTestId("subBtn");
 const inputEl = getByTestId("input");
 
 expect(countEl.className).toBe("");
 fireEvent.change(inputEl, {
  target: {
   value: "50"
  }
 });
 fireEvent.click(addBtn);
 expect(countEl.className).toBe("");
 fireEvent.click(addBtn); //100
 expect(countEl.className).toBe("green");
 fireEvent.click(subBtn);
 fireEvent.click(subBtn);//0
 expect(countEl.className).toBe("");
 fireEvent.click(subBtn);
 fireEvent.click(subBtn);//200
 expect(countEl.className).toBe("red");
});



  