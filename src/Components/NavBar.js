import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"> Autos</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/category/Muscle" className="nav-link">
                Muscle Car
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Sports" className="nav-link">
                Sports Car
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Luxury" className="nav-link">
                Luxury Car
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <a className="nav-link" href="/">
            <CartWidget />
          </a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;