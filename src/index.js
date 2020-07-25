import React from "react";
import ReactDom from "react-dom";
import FApp from "./FApp";
import "./css/fapp.css";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <>
    <BrowserRouter>
      <FApp />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
