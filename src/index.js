import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.createElement("div");

const {body} = document;
body.style.width = "100vw";
body.style.height = "100vh";
body.style.overflow = "hidden";
body.style.margin = 0;

root.id = "root";
root.style.width = "100vw";
root.style.height = "100vh";
root.style.margin = "0";
root.style.overflow = "hidden";

document.body.appendChild(root);

ReactDOM.render(<App/>, root);

