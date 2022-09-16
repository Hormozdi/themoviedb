import React from "react";

import "./style.scss";

const Button = ({ children, classes = "btn-info", ...props }) => (
  <button {...props} className={`button-main ${classes}`}>
    {children}
  </button>
);

export default Button;
