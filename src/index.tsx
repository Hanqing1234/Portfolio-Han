import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";

import App from "./App";
import "antd/dist/antd.min.css";
import "./styles.scss";

ReactDOM.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
