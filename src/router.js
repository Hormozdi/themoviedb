import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Wishlist from "./pages/Wishlist";

export default createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "movie/:id", element: <Movie /> },
  { path: "wishlist", element: <Wishlist /> },
]);
