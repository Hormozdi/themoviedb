import React, { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import router from "./router";

import "react-toastify/dist/ReactToastify.css";
import "./styles.scss";

const App = () => (
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </StrictMode>
);

export default App;
