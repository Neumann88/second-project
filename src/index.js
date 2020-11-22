import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import data from "./components/json/data.json";

ReactDOM.render(
  <React.StrictMode>
    <App data={data.listOfRecords} />
  </React.StrictMode>,
  document.getElementById("root")
);
