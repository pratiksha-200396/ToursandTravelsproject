
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Tours() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  let navigate = useNavigate();

  let onFormSubmit = async (data) => {
    try {

      console.log("FORM DATA :", data);

      await axios.post("http://localhost:8080/tour/save", data);

      console.log("tour successfully");

      reset();

      navigate("/tour-list");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div style={{ paddingTop: "72px" }}>

      {/* Page Header */}
      <section
        className="py-5 text-white"
        style={{
          background:
            "linear-gradient(rgba(16,42,67,0.85),rgba(29,78,95,0.85)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=90') center/cover"
        }}
      >
        <div className="container py-5 text-center">

          <p
            className="fw-bold mb-3"
            style={{
              letterSpacing: "3px",
              color: "#9fd8d2"
            }}
          >
            PLAN YOUR JOURNEY
          </p>

          <h1 className="display-4 fw-bold">
            Add New Tour
          </h1>

          <p
            className="text-white-50 mx-auto mt-3"
            style={{
              maxWidth: "650px",
              lineHeight: "1.8"
            }}
          >
            Create a beautiful tour package and give your
            customers an unforgettable travel experience.
          </p>

        </div>
      </section>


      {/* Tour Form Section */}
      <section
        className="py-5"
        style={{ background: "#f4f7f7" }}
      >

        <div className="container py-4">

          <div className="row justify-content-center">

            <div className="col-lg-9">

              <div className="card border-0 shadow-sm rounded-4">

                <div className="card-body p-4 p-md-5">

                  {/* Form Heading */}
                  <div className="text-center mb-5">

                    <p
                      className="fw-bold mb-2"
                      style={{
                        letterSpacing: "2px",
                        color: "#438f89"
                      }}
                    >
                      TOUR MANAGEMENT
                    </p>

                    <h2
                      className="fw-bold"
                      style={{ color: "#102a43" }}
                    >
                      Tour Details
                    </h2>

                    <p className="text-secondary mb-0">
                      Enter the details of your new tour package.
                    </p>

                  </div>


                  <form onSubmit={handleSubmit(onFormSubmit)}>

                    <div className="row g-4">

                      {/* Tour Name */}
                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Tour Name
                        </label>

                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter tour name"
                          {...register("tourName", {
                            required: "Tour name is required"
                          })}
                        />

                        {errors.tourName && (
                          <small className="text-danger">
                            {errors.tourName.message}
                          </small>
                        )}

                      </div>


                      {/* Destination */}
                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Destination
                        </label>

                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter destination"
                          {...register("destination", {
                            required: "Destination is required"
                          })}
                        />

                        {errors.destination && (
                          <small className="text-danger">
                            {errors.destination.message}
                          </small>
                        )}

                      </div>


                      {/* Duration */}
                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Duration
                        </label>

                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Example: 4 Days 3 Nights"
                          {...register("duration", {
                            required: "Duration is required"
                          })}
                        />

                        {errors.duration && (
                          <small className="text-danger">
                            {errors.duration.message}
                          </small>
                        )}

                      </div>


                      {/* Price */}
                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Price
                        </label>

                        <div className="input-group input-group-lg">

                          <span
                            className="input-group-text"
                            style={{
                              background: "#dff3f1",
                              color: "#438f89"
                            }}
                          >
                            ₹
                          </span>

                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter price"
                            {...register("price", {
                              required: "Price is required"
                            })}
                          />

                        </div>

                        {errors.price && (
                          <small className="text-danger">
                            {errors.price.message}
                          </small>
                        )}

                      </div>


                      {/* Tour Type */}
                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Tour Type
                        </label>

                        <select
                          className="form-select form-select-lg"
                          {...register("tourType", {
                            required: "Please select tour type"
                          })}
                        >

                          <option value="">
                            Select Tour Type
                          </option>

                          <option value="Beach">
                            Beach
                          </option>

                          <option value="Adventure">
                            Adventure
                          </option>

                          <option value="Family">
                            Family
                          </option>

                          <option value="Honeymoon">
                            Honeymoon
                          </option>

                          <option value="Wildlife">
                            Wildlife
                          </option>

                        </select>

                        {errors.tourType && (
                          <small className="text-danger">
                            {errors.tourType.message}
                          </small>
                        )}

                      </div>


                      {/* Image URL */}
                      <div className="col-md-6">

                        <label className="form-label fw-semibold">
                          Image URL
                        </label>

                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Paste image URL"
                          {...register("imageUrl", {
                            required: "Image URL is required"
                          })}
                        />

                        {errors.imageUrl && (
                          <small className="text-danger">
                            {errors.imageUrl.message}
                          </small>
                        )}

                      </div>


                      {/* Description */}
                      <div className="col-12">

                        <label className="form-label fw-semibold">
                          Description
                        </label>

                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Enter tour description..."
                          {...register("description", {
                            required: "Description is required"
                          })}
                        ></textarea>

                        {errors.description && (
                          <small className="text-danger">
                            {errors.description.message}
                          </small>
                        )}

                      </div>


                      {/* Buttons */}
                      <div className="col-12 pt-3">

                        <div className="d-flex justify-content-center gap-3">

                          <button
                            type="button"
                            className="btn btn-outline-secondary btn-lg rounded-pill px-4"
                            onClick={() => reset()}
                          >
                            Clear
                          </button>

                          <button
                            type="submit"
                            className="btn btn-lg rounded-pill px-5 text-white fw-semibold"
                            style={{
                              background: "#438f89"
                            }}
                          >
                            Add Tour →
                          </button>

                        </div>

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
          background:
            "linear-gradient(135deg, #102a43, #1d4e5f)"
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
            CREATE BEAUTIFUL JOURNEYS
          </p>

          <h2 className="display-6 fw-bold">
            Add your next amazing destination.
          </h2>

        </div>

      </section>

    </div>
  );
}

export default Tours;