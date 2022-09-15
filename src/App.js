import React, { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./router";

import "./styles.scss";

const App = () => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default App;
