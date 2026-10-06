
import React from "react";

function Gallery() {
  return (
    <div style={{ paddingTop: "72px" }}>

      {/* ================= HEADER ================= */}
      <section
        className="py-5"
        style={{
          background: "#f4f7f7"
        }}
      >
        <div className="container py-5 text-center">

          <p
            className="fw-bold mb-3"
            style={{
              letterSpacing: "3px",
              color: "#438f89"
            }}
          >
            TRAVEL MOMENTS
          </p>

          <h1
            className="display-4 fw-bold"
            style={{ color: "#102a43" }}
          >
            Explore Our Gallery
          </h1>

          <p
            className="text-secondary mx-auto mt-3"
            style={{
              maxWidth: "650px",
              lineHeight: "1.8"
            }}
          >
            A glimpse of beautiful destinations, peaceful escapes
            and unforgettable moments from around the world.
          </p>

        </div>
      </section>


      {/* ================= GALLERY ================= */}
      <section className="py-5 bg-white">

        <div className="container py-4">

          <div className="row g-4">

            {/* LARGE IMAGE */}
            <div className="col-lg-8">

              <div
                className="overflow-hidden rounded-4"
                style={{ height: "500px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=90"
                  alt="Goa"
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.5s"
                  }}
                />
              </div>

            </div>


            {/* SMALL IMAGE */}
            <div className="col-lg-4">

              <div
                className="overflow-hidden rounded-4"
                style={{ height: "500px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=90"
                  alt="Mountain"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

            </div>


            {/* IMAGE 3 */}
            <div className="col-lg-4 col-md-6">

              <div
                className="overflow-hidden rounded-4"
                style={{ height: "350px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=90"
                  alt="India"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

            </div>


            {/* IMAGE 4 */}
            <div className="col-lg-4 col-md-6">

              <div
                className="overflow-hidden rounded-4"
                style={{ height: "350px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=90"
                  alt="Travel"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

            </div>


            {/* IMAGE 5 */}
            <div className="col-lg-4 col-md-6">

              <div
                className="overflow-hidden rounded-4"
                style={{ height: "350px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=90"
                  alt="Nature"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

            </div>


            {/* IMAGE 6 */}
            <div className="col-lg-6 col-md-6">

              <div
                className="overflow-hidden rounded-4"
                style={{ height: "400px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1100&q=90"
                  alt="Adventure"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

            </div>


            {/* IMAGE 7 */}
            <div className="col-lg-6 col-md-6">

              <div
                className="overflow-hidden rounded-4"
                style={{ height: "400px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=90"
                  alt="Journey"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

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

        <div className="container py-5 text-center">

          <p
            className="fw-semibold mb-3"
            style={{
              letterSpacing: "3px",
              color: "#9fd8d2"
            }}
          >
            READY TO EXPLORE?
          </p>

          <h2 className="display-5 fw-bold mb-4">
            Your next beautiful memory starts here.
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

export default Gallery;
