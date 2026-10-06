
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TourList() {
  const [tours, setTours] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getTours();
  }, []);

  let getTours = async () => {
    try {
      let response = await axios.get("http://localhost:8080/tour/getall");
      setTours(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  let deleteTour = async (id) => {
    try {
      await axios.delete("http://localhost:8080/tour/delete/" + id);
      getTours();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="min-vh-100"
      style={{
        background: "#f4f8f8",
        paddingTop: "72px",
        paddingBottom: "70px",
      }}
    >

      {/* Page Header */}
      <section
        className="py-5 text-white"
        style={{
          background:
            "linear-gradient(rgba(16,42,67,0.88), rgba(16,42,67,0.88)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80') center/cover",
        }}
      >
        <div className="container text-center py-4">
          <p
            className="text-uppercase fw-semibold mb-2"
            style={{ color: "#9fd8d2", letterSpacing: "3px" }}
          >
            Explore With Us
          </p>

          <h1 className="display-5 fw-bold mb-3">
            Our Tour Packages
          </h1>

          <p
            className="lead text-white-50 mb-0 mx-auto"
            style={{ maxWidth: "650px" }}
          >
            Discover amazing destinations and choose the perfect
            journey for your next adventure.
          </p>
        </div>
      </section>

      {/* Tour List */}
      <div className="container py-5">

        <div
          className="card border-0 shadow-lg"
          style={{
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >

          {/* Card Header */}
          <div
            className="p-4 d-flex justify-content-between align-items-center flex-wrap gap-3"
            style={{
              background: "#ffffff",
              borderBottom: "1px solid #e9eeee",
            }}
          >
            <div>
              <h3
                className="fw-bold mb-1"
                style={{ color: "#102a43" }}
              >
                Available Tours
              </h3>

              <p className="text-muted mb-0">
                Browse all available tour packages
              </p>
            </div>

            <button
              className="btn px-4 py-2 fw-semibold"
              onClick={() => navigate("/tours")}
              style={{
                background: "#2a9d8f",
                color: "white",
                borderRadius: "10px",
              }}
            >
              + Add New Tour
            </button>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">

              <thead
                style={{
                  background: "#102a43",
                  color: "white",
                }}
              >
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="py-3">Tour Name</th>
                  <th className="py-3">Destination</th>
                  <th className="py-3">Duration</th>
                  <th className="py-3">Price</th>
                  <th className="py-3">Tour Type</th>
                  <th className="py-3">Image</th>
                  <th className="py-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>

                {tours.map((tour) => (
                  <tr key={tour.id}>

                    <td className="px-4">
                      <span
                        className="fw-bold"
                        style={{ color: "#102a43" }}
                      >
                        #{tour.id}
                      </span>
                    </td>

                    <td>
                      <span className="fw-semibold">
                        {tour.tourName}
                      </span>
                    </td>

                    <td>
                      <span className="text-muted">
                        📍 {tour.destination}
                      </span>
                    </td>

                    <td>
                      <span className="text-muted">
                        🕐 {tour.duration}
                      </span>
                    </td>

                    <td>
                      <span
                        className="fw-bold"
                        style={{ color: "#2a9d8f" }}
                      >
                        ₹{tour.price}
                      </span>
                    </td>

                    <td>
                      <span
                        className="badge px-3 py-2"
                        style={{
                          background: "#e9f5f3",
                          color: "#20796f",
                          borderRadius: "20px",
                        }}
                      >
                        {tour.tourType}
                      </span>
                    </td>

                    <td>
                      <img
                        src={tour.imageUrl}
                        alt={tour.tourName}
                        width="80"
                        height="60"
                        className="rounded-3 shadow-sm"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </td>

                    <td className="text-center">

                      <button
                        className="btn btn-sm me-2"
                        onClick={() =>
                          navigate("/update-tour/" + tour.id)
                        }
                        style={{
                          border: "1px solid #e0a800",
                          color: "#a67800",
                          borderRadius: "8px",
                          fontWeight: "600",
                        }}
                      >
                        ✏️ Edit
                      </button>

                      <button
                        className="btn btn-sm"
                        onClick={() => deleteTour(tour.id)}
                        style={{
                          border: "1px solid #dc3545",
                          color: "#dc3545",
                          borderRadius: "8px",
                          fontWeight: "600",
                        }}
                      >
                        🗑️ Delete
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>
          </div>

        </div>

      </div>

      {/* Bottom CTA */}
      <div className="container">
        <div
          className="text-center text-white p-5"
          style={{
            background: "#102a43",
            borderRadius: "20px",
          }}
        >
          <h3 className="fw-bold mb-3">
            Ready for Your Next Adventure?
          </h3>

          <p
            className="text-white-50 mb-4 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Add a new destination and create unforgettable
            travel experiences for your customers.
          </p>

          <button
            className="btn px-4 py-3 fw-bold"
            onClick={() => navigate("/tours")}
            style={{
              background: "#9fd8d2",
              color: "#102a43",
              borderRadius: "10px",
            }}
          >
            Add Tour Package
          </button>
        </div>
      </div>

    </div>
  );
}

export default TourList;