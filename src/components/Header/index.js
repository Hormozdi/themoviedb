import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Header = () => {
  const menuItems = [
    { to: "/", title: "Home" },
    { to: "/wishlist", title: "Wishlist" },
  ];

  return (
    <div className="header-wrapper">
      <Link to="/">
        <img src="/assets/logo.svg" className="logo" />
      </Link>
      <div className="menu">
        {menuItems?.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
