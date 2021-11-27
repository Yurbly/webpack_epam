import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {initModal} from "components/common/Modal";

const root = document.getElementById("root");

ReactDOM.render(<App/>, root);
initModal();

