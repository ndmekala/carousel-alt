import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Slider from "./Slider.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div>
      <Slider />
    </div>
  </React.StrictMode>
);

reportWebVitals();
