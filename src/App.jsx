
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Tours from "./Pages/Tours";
import TourList from "./Pages/TourList";
import UpdateTour from "./Pages/UpdateTour";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";

function App() {

  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/tours" element={<Tours />} />

        <Route path="/tour-list" element={<TourList />} />

        <Route
          path="/update-tour/:id"
          element={<UpdateTour />}
        />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/booking" element={<Booking />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;