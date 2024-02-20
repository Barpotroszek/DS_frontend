import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Home from "./components/Home";
import Details from "./components/Details";

import "./stylesheet/customer.css";

const root = ReactDOM.createRoot(document.getElementById('main-content'));
// const root = ReactDOM.createRoot(document.getElementsByTagName("body")[0]);
const nav = ReactDOM.createRoot(document.getElementsByTagName('nav')[0]);
const aside = ReactDOM.createRoot(document.getElementsByTagName('aside')[0]);
const footer = ReactDOM.createRoot(document.getElementsByTagName("footer")[0]);

nav.render(
  <React.StrictMode>
    <Navbar target="customer"/>
    {/* <link rel='stylesheet' href='stylesheet/customer.css'></link> */}
  </React.StrictMode>
)

aside.render(
  <React.StrictMode>
    <Aside />
  </React.StrictMode>
)

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);


footer.render(<>stopka</>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
