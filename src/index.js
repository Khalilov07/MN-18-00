import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render - отобразить

root.render(
  // BrowserRouter - Это специальный компонент который позволяет работать нам с react-router-dom
  <BrowserRouter> 
    <App /> 
    {/* // главный компонент который содержит все страницы, header, footer */}
  </BrowserRouter>
);
