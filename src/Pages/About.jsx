
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ paddingTop: "72px" }}>



      {/* OUR STORY */}
      <section className="py-5 bg-white">

        <div className="container py-5">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <p
                className="fw-bold mb-3"
                style={{
                  letterSpacing: "3px",
                  color: "#438f89"
                }}
              >
                OUR STORY
              </p>

              <h2
                className="display-5 fw-bold mb-4"
                style={{
                  color: "#102a43",
                  lineHeight: "1.2"
                }}
              >
                Travel is not just
                <br />
                about the destination.
              </h2>

              <p
                className="fs-5 text-secondary"
                style={{ lineHeight: "1.9" }}
              >
                It is about the feeling you get when you see a new
                place for the first time, the people you meet and
                the memories you bring back home.
              </p>

              <p
                className="text-secondary"
                style={{ lineHeight: "1.9" }}
              >
                We bring together inspiring destinations, thoughtfully
                designed tours and simple travel planning to help you
                make the most of every journey.
              </p>

            </div>


            <div className="col-lg-6">

              <div className="row g-3">

                <div className="col-7">

                  <img
                    src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=90"
                    alt="Travel"
                    className="img-fluid rounded-4"
                    style={{
                      height: "380px",
                      width: "100%",
                      objectFit: "cover"
                    }}
                  />

                </div>

                <div className="col-5 pt-5">

                  <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=700&q=90"
                    alt="Mountain"
                    className="img-fluid rounded-4"
                    style={{
                      height: "280px",
                      width: "100%",
                      objectFit: "cover"
                    }}
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* OUR VALUES */}
      <section
        className="py-5"
        style={{ background: "#f4f7f7" }}
      >

        <div className="container py-5">

          <div className="text-center mb-5">

            <p
              className="fw-bold mb-2"
              style={{
                letterSpacing: "3px",
                color: "#438f89"
              }}
            >
              WHAT WE BELIEVE
            </p>

            <h2
              className="display-5 fw-bold"
              style={{ color: "#102a43" }}
            >
              Our way of doing travel
            </h2>

            <p
              className="text-secondary mx-auto mt-3"
              style={{
                maxWidth: "650px",
                lineHeight: "1.8"
              }}
            >
              Every journey should be simple to plan, exciting to
              experience and meaningful to remember.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-lg-4">

              <div className="bg-white rounded-4 p-5 h-100 shadow-sm">

                <div
                  className="fs-2 fw-bold"
                  style={{ color: "#438f89" }}
                >
                  01
                </div>

                <h4 className="fw-bold mt-4">
                  Meaningful Experiences
                </h4>

                <p
                  className="text-secondary mb-0"
                  style={{ lineHeight: "1.8" }}
                >
                  We focus on experiences that allow you to truly
                  discover and enjoy every destination.
                </p>

              </div>

            </div>


            <div className="col-lg-4">

              <div className="bg-white rounded-4 p-5 h-100 shadow-sm">

                <div
                  className="fs-2 fw-bold"
                  style={{ color: "#438f89" }}
                >
                  02
                </div>

                <h4 className="fw-bold mt-4">
                  Simple Planning
                </h4>

                <p
                  className="text-secondary mb-0"
                  style={{ lineHeight: "1.8" }}
                >
                  From choosing a tour to planning your trip,
                  we keep the travel process simple and convenient.
                </p>

              </div>

            </div>


            <div className="col-lg-4">

              <div className="bg-white rounded-4 p-5 h-100 shadow-sm">

                <div
                  className="fs-2 fw-bold"
                  style={{ color: "#438f89" }}
                >
                  03
                </div>

                <h4 className="fw-bold mt-4">
                  Travel With Confidence
                </h4>

                <p
                  className="text-secondary mb-0"
                  style={{ lineHeight: "1.8" }}
                >
                  We want every traveler to feel comfortable,
                  informed and confident throughout their journey.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* TRAVEL DIFFERENTLY */}
      <section className="py-5 bg-white">

        <div className="container py-5">

          <div className="row align-items-center g-5">

            <div className="col-lg-6 order-lg-2">

              <img
                src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=90"
                alt="Travel"
                className="img-fluid rounded-4 shadow-sm"
              />

            </div>


            <div className="col-lg-6 order-lg-1">

              <p
                className="fw-bold mb-3"
                style={{
                  letterSpacing: "3px",
                  color: "#438f89"
                }}
              >
                TRAVEL DIFFERENTLY
              </p>

              <h2
                className="display-5 fw-bold mb-4"
                style={{ color: "#102a43" }}
              >
                From the first plan
                <br />
                to the final memory.
              </h2>

              <p
                className="text-secondary"
                style={{ lineHeight: "1.9" }}
              >
                Whether you are planning a peaceful holiday, an
                adventurous escape or a memorable family vacation,
                we believe the journey should be as enjoyable as
                the destination itself.
              </p>

              <div className="mt-4">

                <div className="d-flex mb-3">
                  <span
                    className="me-3 fs-4"
                    style={{ color: "#438f89" }}
                  >
                    ✓
                  </span>

                  <span className="text-secondary">
                    Carefully selected destinations
                  </span>
                </div>

                <div className="d-flex mb-3">
                  <span
                    className="me-3 fs-4"
                    style={{ color: "#438f89" }}
                  >
                    ✓
                  </span>

                  <span className="text-secondary">
                    Thoughtfully planned travel experiences
                  </span>
                </div>

                <div className="d-flex">
                  <span
                    className="me-3 fs-4"
                    style={{ color: "#438f89" }}
                  >
                    ✓
                  </span>

                  <span className="text-secondary">
                    Support throughout your journey
                  </span>
                </div>

              </div>

              <Link
                to="/tour-list"
                className="btn btn-dark rounded-pill px-4 py-3 mt-4"
              >
                Explore Our Tours →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section
        className="py-5 text-white"
        style={{
          background:
            "linear-gradient(135deg, #102a43, #1d4e5f)"
        }}
      >

        <div className="container py-5 text-center">

          <p
            className="fw-semibold mb-3"
            style={{
              letterSpacing: "3px",
              color: "#9fd8d2"
            }}
          >
            START EXPLORING
          </p>

          <h2 className="display-5 fw-bold mb-4">
            Your next adventure is waiting.
          </h2>

          <Link
            to="/booking"
            className="btn btn-light btn-lg rounded-pill px-5"
          >
            Plan Your Journey →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;