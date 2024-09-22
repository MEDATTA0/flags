import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navigationList = [
    { name: "Accueil", path: "/" },
    { name: "A propos", path: "/about" },
  ];
  return (
    <div className="Navigation">
      <ul>
        {navigationList.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={(nav) => (nav.isActive ? "nav-active" : "")}
              exact
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
