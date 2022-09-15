import React from "react";
import Header from "../Header";

import "./style.scss";

const Layout = ({ children, showHeader = true }) => {
  return (
    <>
      {showHeader && <Header />}
      {children}
    </>
  );
};

export default Layout;
