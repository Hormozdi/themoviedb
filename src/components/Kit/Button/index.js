import React from "react";

import "./style.scss";

const Button = ({ children, ...props }) => (
  <button {...props} className="button-main">
    {children}
  </button>
);

export default Button;
