import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white sticky-top navbar-header">
      <div className="container-fluid">
        <div className="logo ">
          <a className="navbar-brand justify-content-center" href="/">
            <strong>Daily News</strong>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mid ">
            <ul className="nav_item navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-Link active link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link link" to="/category">
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link link" to="/country">
                  Country
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link link" to="/contactUs">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <form className="right d-flex">
            <div className="search form-control me-2">
              <input
                type="search"
                className="form-control me-2 "
                placeholder="Search article here"
                aria-label="Search article here"
              />
              <button className="search_btn" id="search_button">
                <img
                  className="search_image"
                  src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png"
                  alt=""
                />
              </button>
            </div>
            <button className="btn btn-outline-success" id="login">
              Login
            </button>
            <button className="btn btn-outline-success w-49" id="sign_up">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
