
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        background: "#102a43"
      }}
    >

      {/* ================= MAIN FOOTER ================= */}
      <div className="container py-5">

        <div className="row g-5">

          {/* ABOUT */}
          <div className="col-lg-5 col-md-6">

            <div className="d-flex align-items-center mb-4">

              <img
                src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
                alt="Travel Logo"
                style={{
                  width: "48px",
                  height: "48px",
                  objectFit: "contain"
                }}
              />

              <span
                className="ms-3 fw-bold fs-4"
                style={{ color: "#9fd8d2" }}
              >
                Tours & Travel
              </span>

            </div>

            <p
              className="text-white-50"
              style={{
                maxWidth: "430px",
                lineHeight: "1.9"
              }}
            >
              Discover beautiful destinations, unforgettable experiences
              and journeys designed to make every moment of your travel
              special.
            </p>

            <div className="d-flex gap-2 mt-4">

              <a
                href="#"
                className="btn btn-outline-light rounded-circle"
                style={{
                  width: "42px",
                  height: "42px"
                }}
              >
                f
              </a>

              <a
                href="#"
                className="btn btn-outline-light rounded-circle"
                style={{
                  width: "42px",
                  height: "42px"
                }}
              >
                ◎
              </a>

              <a
                href="#"
                className="btn btn-outline-light rounded-circle"
                style={{
                  width: "42px",
                  height: "42px"
                }}
              >
                X
              </a>

              <a
                href="#"
                className="btn btn-outline-light rounded-circle"
                style={{
                  width: "42px",
                  height: "42px"
                }}
              >
                ▶
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-6">

            <h6
              className="fw-bold mb-4"
              style={{ color: "#9fd8d2" }}
            >
              QUICK LINKS
            </h6>

            <ul className="list-unstyled">

              <li className="mb-3">
                <Link
                  to="/"
                  className="text-white-50 text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  to="/about"
                  className="text-white-50 text-decoration-none"
                >
                  About Us
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  to="/tour-list"
                  className="text-white-50 text-decoration-none"
                >
                  Our Tours
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  to="/gallery"
                  className="text-white-50 text-decoration-none"
                >
                  Gallery
                </Link>
              </li>

            </ul>

          </div>


          {/* SERVICES */}
          <div className="col-lg-2 col-md-6">

            <h6
              className="fw-bold mb-4"
              style={{ color: "#9fd8d2" }}
            >
              SERVICES
            </h6>

            <ul className="list-unstyled">

              <li className="mb-3">
                <Link
                  to="/booking"
                  className="text-white-50 text-decoration-none"
                >
                  Tour Booking
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  to="/tours"
                  className="text-white-50 text-decoration-none"
                >
                  Add Tour
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  to="/contact"
                  className="text-white-50 text-decoration-none"
                >
                  Contact Us
                </Link>
              </li>

              <li className="mb-3">
                <span className="text-white-50">
                  Travel Support
                </span>
              </li>

            </ul>

          </div>


          {/* CONTACT */}
          <div className="col-lg-3 col-md-6">

            <h6
              className="fw-bold mb-4"
              style={{ color: "#9fd8d2" }}
            >
              CONTACT US
            </h6>

            <div className="d-flex mb-3">

              <span className="me-3">
                📍
              </span>

              <span className="text-white-50">
                Pune, Maharashtra, India
              </span>

            </div>


            <div className="d-flex mb-3">

              <span className="me-3">
                📞
              </span>

              <span className="text-white-50">
                +91 98765 43210
              </span>

            </div>


            <div className="d-flex mb-3">

              <span className="me-3">
                ✉
              </span>

              <span className="text-white-50">
                travel@example.com
              </span>

            </div>


            <div className="d-flex">

              <span className="me-3">
                🕐
              </span>

              <span className="text-white-50">
                Mon - Sat : 9:00 AM - 7:00 PM
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* ================= COPYRIGHT ================= */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.12)"
        }}
      >

        <div className="container">

          <div className="row py-4 align-items-center">

            <div className="col-md-6 text-center text-md-start">

              <p className="text-white-50 mb-0 small">
                © 2026 Tours & Travel. All Rights Reserved.
              </p>

            </div>

            <div className="col-md-6 text-center text-md-end">

              <p className="text-white-50 mb-0 small">
                Explore More • Travel More • Live More
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
