import React, { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import router from "./router";
import Loading from "./components/Loading";
import mainStore from "./store/mainStore";

import "react-toastify/dist/ReactToastify.css";
import "./styles.scss";

const App = () => {
  const Parent = process.env.NODE_ENV === "production" ? "StrictMode" : "span";

  const { config } = mainStore((state) => state);

  return (
    <Parent
      children={
        <>
          <ToastContainer />
          <RouterProvider router={router} />
          {config?.loading && <Loading />}
        </>
      }
    />
  );
};

export default App;
