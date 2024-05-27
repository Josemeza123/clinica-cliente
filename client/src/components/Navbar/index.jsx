import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg"

const Navbar = () => {
  return (
    <nav className="flex w-full h-20">
      <ul className="flex left-0 justify-start w-1/2">
            <img src={logo} alt="" className="w-20 h-20 object-cover"/>
      </ul>
        <ul className="flex items-center flex-nowrap gap-4 right-0 justify-around w-1/2 object-center h-full">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/especialidades">Especialidades</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
