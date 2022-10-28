import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";
import {BiGlassesAlt} from "react-icons/bi"

function Navbar() {
  
  return (
      <nav className="nav">
        <div className="logo">
        <Link to="/" className="site-title">Phinder <div className="icon"><BiGlassesAlt /></div> </Link>
        
        {/* <img src={logo} alt="logo" /> */}
        </div>
        <ul className="pages">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/Contact">Contact</CustomLink>
            <CustomLink to="/About">About</CustomLink>
            <CustomLink to="/Users">Users</CustomLink>
        </ul>
      </nav>
  );
}

function CustomLink ({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
export default Navbar;
