import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import ClientRoot from "./pages/ClientRoot";
import SellerRoot from "./pages/SellerRoot";


import Home from "./pages/Home";
import Copy from "./pages/copy";
import Details from "./pages/Details";
import Basket from "./pages/Basket";
import SendOrder from "./pages/SubmitOrder";
import OrdersList from "./pages/seller/OrdersList";
import OrderDetails from "./pages/seller/OrderDetails";

const root = ReactDOM.createRoot(document.getElementById("container"));

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<ClientRoot />} path="/">
        <Route index element={<Home />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="basket" element={<Basket />} />
        <Route path="submitOrder" element={<SendOrder />} />
      </Route>
      <Route element={<SellerRoot />} path="/seller">
        {/* <Route errorElement={}/> */}
        <Route element={<Copy />} index />
        <Route path="details/:id" element={<Details />} />
        <Route path="basket" element={<Basket />} />
        <Route path="submitOrder" element={<SendOrder />} />
        <Route path="ordersList" element={<OrdersList />} />
        <Route path="orders/:id" element={<OrderDetails />} />
      </Route>
    </>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
