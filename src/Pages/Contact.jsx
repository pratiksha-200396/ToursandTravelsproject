
import React from "react";

function Contact() {
  return (
    <div style={{ paddingTop: "72px" }}>

      {/* Page Header */}
      <section
        className="py-5 text-white"
        style={{
          background:
            "linear-gradient(rgba(16,42,67,0.82),rgba(29,78,95,0.82)), url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=90') center/cover",
        }}
      >
        <div className="container py-5 text-center">
          <p
            className="fw-bold mb-3"
            style={{ letterSpacing: "3px", color: "#9fd8d2" }}
          >
            GET IN TOUCH
          </p>

          <h1 className="display-4 fw-bold">
            Contact Us
          </h1>

          <p
            className="mx-auto mt-3 text-white-50"
            style={{ maxWidth: "650px", lineHeight: "1.8" }}
          >
            Have a question about your next journey?
            We are here to help you plan a memorable travel experience.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">

          <div className="row g-5">

            {/* Contact Information */}
            <div className="col-lg-5">

              <p
                className="fw-bold mb-2"
                style={{ letterSpacing: "2px", color: "#438f89" }}
              >
                CONTACT INFORMATION
              </p>

              <h2
                className="fw-bold mb-4"
                style={{ color: "#102a43" }}
              >
                Let's plan your next journey
              </h2>

              <p
                className="text-secondary mb-5"
                style={{ lineHeight: "1.8" }}
              >
                Whether you need help choosing a destination,
                planning your itinerary or booking a tour,
                our team is ready to assist you.
              </p>

              {/* Address */}
              <div className="d-flex mb-4">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "#dff3f1",
                    fontSize: "22px"
                  }}
                >
                  📍
                </div>

                <div>
                  <h6 className="fw-bold mb-1">Visit Us</h6>
                  <p className="text-secondary mb-0">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="d-flex mb-4">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "#dff3f1",
                    fontSize: "22px"
                  }}
                >
                  📞
                </div>

                <div>
                  <h6 className="fw-bold mb-1">Call Us</h6>
                  <p className="text-secondary mb-0">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex mb-4">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "#dff3f1",
                    fontSize: "22px"
                  }}
                >
                  ✉
                </div>

                <div>
                  <h6 className="fw-bold mb-1">Email Us</h6>
                  <p className="text-secondary mb-0">
                    travel@example.com
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="d-flex">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "#dff3f1",
                    fontSize: "22px"
                  }}
                >
                  🕐
                </div>

                <div>
                  <h6 className="fw-bold mb-1">Working Hours</h6>
                  <p className="text-secondary mb-0">
                    Monday - Saturday
                    <br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="col-lg-7">

              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body p-4 p-md-5">

                  <h4
                    className="fw-bold mb-2"
                    style={{ color: "#102a43" }}
                  >
                    Send Us a Message
                  </h4>

                  <p className="text-secondary mb-4">
                    Fill out the form and our team will get back to you.
                  </p>

                  <form>

                    <div className="row g-4">

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Full Name
                        </label>

                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter your name"
                        />
                      </div>

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

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Subject
                        </label>

                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter subject"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label fw-semibold">
                          Message
                        </label>

                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Write your message..."
                        ></textarea>
                      </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-lg rounded-pill px-5 text-white fw-semibold"
                          style={{ background: "#438f89" }}
                        >
                          Send Message →
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
            style={{ letterSpacing: "3px", color: "#9fd8d2" }}
          >
            READY FOR YOUR NEXT ADVENTURE?
          </p>

          <h2 className="display-6 fw-bold mb-4">
            Let's make your travel dreams a reality.
          </h2>

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

export default Contact;