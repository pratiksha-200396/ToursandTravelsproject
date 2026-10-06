
import React from "react";

function Booking() {
  return (
    <div style={{ paddingTop: "72px" }}>

      {/* Page Header */}
      <section
        className="py-5 text-white"
        style={{
          background:
            "linear-gradient(rgba(16,42,67,0.82),rgba(29,78,95,0.82)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=90') center/cover",
        }}
      >
        <div className="container py-5 text-center">

          <p
            className="fw-bold mb-3"
            style={{ letterSpacing: "3px", color: "#9fd8d2" }}
          >
            PLAN YOUR JOURNEY
          </p>

          <h1 className="display-4 fw-bold">
            Book Your Tour
          </h1>

          <p
            className="mx-auto mt-3 text-white-50"
            style={{ maxWidth: "650px", lineHeight: "1.8" }}
          >
            Choose your destination and get ready for
            an unforgettable travel experience.
          </p>

        </div>
      </section>

      {/* Booking Form */}
      <section className="py-5 bg-light">

        <div className="container py-5">

          <div className="row justify-content-center">

            <div className="col-lg-9">

              <div className="card border-0 shadow-sm rounded-4">

                <div className="card-body p-4 p-md-5">

                  <div className="text-center mb-5">

                    <p
                      className="fw-bold mb-2"
                      style={{
                        letterSpacing: "2px",
                        color: "#438f89"
                      }}
                    >
                      TOUR BOOKING
                    </p>

                    <h2
                      className="fw-bold"
                      style={{ color: "#102a43" }}
                    >
                      Tell Us About Your Trip
                    </h2>

                    <p className="text-secondary">
                      Fill in your details and submit your booking request.
                    </p>

                  </div>

                  <form>

                    <div className="row g-4">

                      {/* Full Name */}
                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Full Name
                        </label>

                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter your full name"
                        />

                      </div>

                      {/* Email */}
                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Email Address
                        </label>

                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Enter your email"
                        />

                      </div>

                      {/* Phone */}
                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Phone Number
                        </label>

                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          placeholder="Enter your phone number"
                        />

                      </div>

                      {/* Tour */}
                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Select Tour
                        </label>

                        <select className="form-select form-select-lg">

                          <option value="">
                            Choose a tour
                          </option>

                          <option>
                            Goa Beach Escape
                          </option>

                          <option>
                            Manali Adventure
                          </option>

                          <option>
                            Kashmir Paradise
                          </option>

                          <option>
                            Rajasthan Heritage
                          </option>

                          <option>
                            Kerala Backwaters
                          </option>

                        </select>

                      </div>

                      {/* Travel Date */}
                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Travel Date
                        </label>

                        <input
                          type="date"
                          className="form-control form-control-lg"
                        />

                      </div>

                      {/* Number of Persons */}
                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Number of Persons
                        </label>

                        <select className="form-select form-select-lg">

                          <option value="">
                            Select persons
                          </option>

                          <option>1 Person</option>
                          <option>2 Persons</option>
                          <option>3 Persons</option>
                          <option>4 Persons</option>
                          <option>5+ Persons</option>

                        </select>

                      </div>

                      {/* Special Requirements */}
                      <div className="col-12">

                        <label className="form-label fw-semibold">
                          Special Requirements
                        </label>

                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Any special request or requirement..."
                        ></textarea>

                      </div>

                      {/* Button */}
                      <div className="col-12 text-center pt-3">

                        <button
                          type="submit"
                          className="btn btn-lg rounded-pill px-5 text-white fw-semibold"
                          style={{ background: "#438f89" }}
                        >
                          Book Now →
                        </button>

                      </div>

                    </div>

                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section
        className="py-5 text-white"
        style={{
          background: "linear-gradient(135deg, #102a43, #1d4e5f)"
        }}
      >

        <div className="container py-4 text-center">

          <p
            className="fw-semibold mb-3"
            style={{
              letterSpacing: "3px",
              color: "#9fd8d2"
            }}
          >
            YOUR JOURNEY STARTS HERE
          </p>

          <h2 className="display-6 fw-bold mb-3">
            Travel more. Explore more. Live more.
          </h2>

          <p
            className="text-white-50 mx-auto mb-4"
            style={{ maxWidth: "650px" }}
          >
            Discover beautiful destinations and create
            memories that last a lifetime.
          </p>

          <a
            href="/tour-list"
            className="btn btn-light btn-lg rounded-pill px-5"
          >
            Explore Tours →
          </a>

        </div>

      </section>

    </div>
  );
}

export default Booking;