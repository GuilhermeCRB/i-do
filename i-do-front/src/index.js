import React from "react";
import ReactDom from "react-dom";

import App from "./App/App.js";

import './assets/reset.css';
import './assets/style.css';

ReactDom.render(<App/>, document.querySelector('.root'));