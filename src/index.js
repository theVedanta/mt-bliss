import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/index.css";
import "./style/all.css";
import "notyf/notyf.min.css";
import "react-calendar/dist/Calendar.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
