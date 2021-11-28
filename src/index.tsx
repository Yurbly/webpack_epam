import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {initModal} from "components/common/Modal";
import rootContainerId from "consts/rootContainerId";

const root = document.getElementById(rootContainerId);

ReactDOM.render(<App/>, root);
initModal();

