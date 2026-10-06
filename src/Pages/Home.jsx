
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ paddingTop: "72px" }}>

      {/* ================= HERO ================= */}
      <section
        className="position-relative d-flex align-items-center text-white"
        style={{
          minHeight: "88vh",
          backgroundImage:
            "linear-gradient(90deg, rgba(5,20,30,0.78), rgba(5,20,30,0.25)), url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=90')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">

              <p
                className="fw-semibold mb-3"
                style={{
                  letterSpacing: "4px",
                  color: "#9fd8d2"
                }}
              >
                DISCOVER • EXPLORE • EXPERIENCE
              </p>

              <h1
                className="display-1 fw-bold mb-4"
                style={{
                  lineHeight: "1.05",
                  letterSpacing: "-2px"
                }}
              >
                Discover places.
                <br />
                <span style={{ color: "#9fd8d2" }}>
                  Create memories.
                </span>
              </h1>

              <p
                className="lead text-white-50 mb-5"
                style={{
                  maxWidth: "620px",
                  lineHeight: "1.8"
                }}
              >
                Explore beautiful destinations, unforgettable experiences
                and carefully planned journeys made for every kind of
                traveler.
              </p>

              <div className="d-flex gap-3 flex-wrap">

                <Link
                  to="/tour-list"
                  className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-semibold"
                >
                  Explore Tours
                </Link>

                <Link
                  to="/booking"
                  className="btn btn-outline-light btn-lg rounded-pill px-5 py-3"
                >
                  Book Your Trip
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="py-5 bg-white">

        <div className="container py-5">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">

              <p
                className="fw-bold mb-3"
                style={{
                  letterSpacing: "3px",
                  color: "#438f89"
                }}
              >
                TRAVEL WITH PURPOSE
              </p>

              <h2
                className="display-5 fw-bold"
                style={{
                  color: "#102a43",
                  lineHeight: "1.2"
                }}
              >
                Your journey
                <br />
                starts here.
              </h2>

            </div>

            <div className="col-lg-7">

              <p
                className="fs-5 text-secondary"
                style={{ lineHeight: "1.9" }}
              >
                Whether you are looking for a relaxing beach holiday,
                a mountain adventure or a memorable family escape,
                discover a journey that feels right for you.
              </p>

              <p
                className="text-secondary"
                style={{ lineHeight: "1.8" }}
              >
                Browse our tours, explore destinations and turn your
                next travel idea into a real experience.
              </p>

              <Link
                to="/about"
                className="fw-semibold text-decoration-none"
                style={{ color: "#438f89" }}
              >
                Discover our story →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= DESTINATIONS ================= */}
      <section
        className="py-5"
        style={{ background: "#f4f7f7" }}
      >

        <div className="container py-5">

          <div className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-3">

            <div>

              <p
                className="fw-bold mb-2"
                style={{
                  letterSpacing: "3px",
                  color: "#438f89"
                }}
              >
                DESTINATIONS
              </p>

              <h2
                className="display-5 fw-bold mb-0"
                style={{ color: "#102a43" }}
              >
                Find your next escape
              </h2>

            </div>

            <Link
              to="/tour-list"
              className="btn btn-dark rounded-pill px-4"
            >
              View All Tours →
            </Link>

          </div>


          <div className="row g-4">

            {/* GOA */}
            <div className="col-lg-7">

              <div
                className="position-relative overflow-hidden rounded-4"
                style={{ height: "470px" }}
              >

                <img
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=90"
                  alt="Goa"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />

                <div
                  className="position-absolute bottom-0 start-0 w-100 p-4 text-white"
                  style={{
                    background:
                      "linear-gradient(transparent, rgba(0,0,0,0.85))"
                  }}
                >

                  <small className="text-white-50">
                    BEACH ESCAPE
                  </small>

                  <h2 className="fw-bold mb-1">
                    Goa
                  </h2>

                  <p className="mb-0 text-white-50">
                    Beaches, sunsets and unforgettable coastal moments.
                  </p>

                </div>

              </div>

            </div>


            {/* RIGHT SIDE */}
            <div className="col-lg-5">

              {/* MANALI */}
              <div
                className="position-relative overflow-hidden rounded-4 mb-4"
                style={{ height: "223px" }}
              >

                <img
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=90"
                  alt="Manali"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />

                <div
                  className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                  style={{
                    background:
                      "linear-gradient(transparent, rgba(0,0,0,0.8))"
                  }}
                >
                  <h3 className="fw-bold mb-0">
                    Manali
                  </h3>

                  <small className="text-white-50">
                    Mountains • Adventure
                  </small>
                </div>

              </div>


              {/* KASHMIR */}
              <div
                className="position-relative overflow-hidden rounded-4"
                style={{ height: "223px" }}
              >

                <img
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=90"
                  alt="Kashmir"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />

                <div
                  className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                  style={{
                    background:
                      "linear-gradient(transparent, rgba(0,0,0,0.8))"
                  }}
                >
                  <h3 className="fw-bold mb-0">
                    Kashmir
                  </h3>

                  <small className="text-white-50">
                    Nature • Scenic Escape
                  </small>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}
      <section className="py-5 bg-white">

        <div className="container py-5">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=90"
                alt="Travel Experience"
                className="img-fluid rounded-4 shadow-sm"
              />

            </div>


            <div className="col-lg-6">

              <p
                className="fw-bold mb-3"
                style={{
                  letterSpacing: "3px",
                  color: "#438f89"
                }}
              >
                WHY TRAVEL WITH US
              </p>

              <h2
                className="display-5 fw-bold mb-4"
                style={{ color: "#102a43" }}
              >
                More than a trip.
                <br />
                It's your experience.
              </h2>

              <p
                className="text-secondary"
                style={{ lineHeight: "1.9" }}
              >
                We believe every journey should be memorable.
                That's why we focus on beautiful destinations,
                thoughtful planning and experiences that make
                your trip truly special.
              </p>


              <div className="row g-4 mt-3">

                <div className="col-sm-6">

                  <div className="border rounded-4 p-4 h-100">

                    <div
                      className="fs-3 mb-3"
                      style={{ color: "#438f89" }}
                    >
                      ✦
                    </div>

                    <h5 className="fw-bold">
                      Handpicked Tours
                    </h5>

                    <p className="small text-secondary mb-0">
                      Carefully selected journeys for every traveler.
                    </p>

                  </div>

                </div>


                <div className="col-sm-6">

                  <div className="border rounded-4 p-4 h-100">

                    <div
                      className="fs-3 mb-3"
                      style={{ color: "#438f89" }}
                    >
                      ◈
                    </div>

                    <h5 className="fw-bold">
                      Easy Planning
                    </h5>

                    <p className="small text-secondary mb-0">
                      Simple and convenient travel planning.
                    </p>

                  </div>

                </div>


                <div className="col-sm-6">

                  <div className="border rounded-4 p-4 h-100">

                    <div
                      className="fs-3 mb-3"
                      style={{ color: "#438f89" }}
                    >
                      ◎
                    </div>

                    <h5 className="fw-bold">
                      Great Experiences
                    </h5>

                    <p className="small text-secondary mb-0">
                      Memories that stay with you for years.
                    </p>

                  </div>

                </div>


                <div className="col-sm-6">

                  <div className="border rounded-4 p-4 h-100">

                    <div
                      className="fs-3 mb-3"
                      style={{ color: "#438f89" }}
                    >
                      ♢
                    </div>

                    <h5 className="fw-bold">
                      Travel Support
                    </h5>

                    <p className="small text-secondary mb-0">
                      Assistance whenever you need it.
                    </p>

                  </div>

                </div>

              </div>


              <Link
                to="/about"
                className="btn btn-dark rounded-pill px-4 py-3 mt-4"
              >
                About Us →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section
        className="py-5 text-white"
        style={{
          background:
            "linear-gradient(135deg, #102a43, #1d4e5f)"
        }}
      >

        <div className="container py-5">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <p
                className="mb-2 fw-semibold"
                style={{
                  letterSpacing: "3px",
                  color: "#9fd8d2"
                }}
              >
                YOUR NEXT ADVENTURE
              </p>

              <h2 className="display-5 fw-bold mb-0">
                Where will your next journey take you?
              </h2>

            </div>


            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

              <Link
                to="/booking"
                className="btn btn-light btn-lg rounded-pill px-5"
              >
                Book Your Trip →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;