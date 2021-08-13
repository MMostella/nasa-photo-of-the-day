import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ThemeProvider } from 'styled-components';
import theme from './theme/index';

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
