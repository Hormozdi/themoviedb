import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";

export default createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "movie/:id", element: <Movie /> },
]);
