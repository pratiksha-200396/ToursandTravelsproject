
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 3px 20px rgba(0,0,0,0.08)",
        padding: "10px 0",
        zIndex: 1000
      }}
    >
      <div className="container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEaqWFxwFH3HDEzfbZD4uk59tM2VL13rWH2R0m4HdXg&s=10"
            alt="Travel Logo"
            style={{
              width: "52px",
              height: "52px",
              objectFit: "contain"
            }}
          />
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#travelNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVIGATION */}
        <div
          className="collapse navbar-collapse"
          id="travelNavbar"
        >

          <ul className="navbar-nav mx-auto align-items-lg-center">

            <li className="nav-item">
              <Link
                to="/"
                className="nav-link px-3 fw-semibold text-dark"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link px-3 fw-semibold text-dark"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/tour-list"
                className="nav-link px-3 fw-semibold text-dark"
              >
                Tours
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-link px-3 fw-semibold text-dark"
              >
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link px-3 fw-semibold text-dark"
              >
                Contact
              </Link>
            </li>

          </ul>


          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-3">

            <Link
              to="/tours"
              className="text-dark text-decoration-none fw-semibold"
            >
              + Add Tour
            </Link>

            <Link
              to="/booking"
              className="btn rounded-pill px-4 py-2 fw-semibold text-white"
              style={{
                background: "#438f89",
                border: "none"
              }}
            >
              Book Now
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Header;