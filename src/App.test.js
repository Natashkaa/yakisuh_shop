import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
var jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000/"
});

import TestComp from "./Components/TestComp/TestComp";

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("TestComponent Testing", () => {
  it("Renders Hello world title", () => {
    act(() => {
      ReactDOM.createRoot(rootContainer).render(
      <React.StrictMode>
        <TestComp />
      </React.StrictMode>
    );
      // ReactDOM.render(<TestComp/>, rootContainer);
    });
    console.log("START");
    console.log(rootContainer);
    console.log("END");
    const h1 = rootContainer.querySelector("h1");
    console.log(h1);
    expect(h1.textContent).to.equal("Hello world!");
  })
})