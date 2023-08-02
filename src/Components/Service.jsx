import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import data from "../db.json";
import "../styles.css";
import "./service.css";

const Card = ({ tour, isSelected, onToggleSelect }) => {
  return (
    <div
      className={`card ${isSelected ? "selected" : ""}`}
      onClick={() => onToggleSelect(tour.id)}
    >
      <img
        className="rounded-md shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer image-size"
        src={tour.image}
        alt={tour.name}
        loading="lazy"
      />
      <div className="image-name">
        <h3 className="font-semibold text-xl tracking-wider font-signature text-black">
          {tour.name}
        </h3>
      </div>
      <div className="image-details text-center">
        <p className="text-white">{tour.location}</p>
        <p className="text-yellow-500">Ratings: {tour.ratings} &#9733;</p>
      </div>
      <div className="image-info bg-white p-4 rounded mt-4 text-center">
        <p className="text-gray-600">{tour.info}</p>
      </div>
      <button className="bg-blue-500 text-white px-3 py-2 mt-4 rounded">
        {isSelected ? "Selected" : "Book Now"}
      </button>
    </div>
  );
};

const Service = () => {
  const [tours, setTours] = useState(data.tours);
  const [selectedCards, setSelectedCards] = useState([]);
  const [bookedCards, setBookedCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageLocation, setImageLocation] = useState("");
  const [imageRatings, setImageRatings] = useState(0);
  const [imageInfo, setImageInfo] = useState("");

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
    }
    return stars;
  };

  const handleToggleSelect = (id) => {
    setSelectedCards((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((tourId) => tourId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  useEffect(() => {
    const unselectedTours = tours.filter((tour) => !selectedCards.includes(tour.id));
    setTours(unselectedTours);
  }, [selectedCards]);

  const filteredTours = tours.filter((tour) =>
    tour.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBookNow = (id) => {
    const selectedTour = tours.find((tour) => tour.id === id);
    setBookedCards((prevBooked) => [...prevBooked, selectedTour]);
    setSelectedCards((prevSelected) => prevSelected.filter((tourId) => tourId !== id));
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  const handleCancelBooking = (id) => {
    const unbookedTour = bookedCards.find((tour) => tour.id === id);
    setBookedCards((prevBooked) => prevBooked.filter((tour) => tour.id !== id));
    setTours((prevTours) => [...prevTours, unbookedTour]);
  };

  const handleAddImage = () => {
    const newImage = {
      id: Date.now(),
      image: imageUrl,
      name: imageName,
      location: imageLocation,
      ratings: imageRatings,
      info: imageInfo,
    };

    setTours((prevTours) => [...prevTours, newImage]);

    // Clear form fields
    setImageUrl("");
    setImageName("");
    setImageLocation("");
    setImageRatings(0);
    setImageInfo("");
  };

  return (
    <div>
      <Navbar />
      <div className="w-full mx-auto text-center mt-20 mb-10">
        <h2 className="font-semibold text-xl tracking-wide text-blue-500 mt-5 section-title">
          Experience Luxury Travel with Us
        </h2>
        <div className="w-full px-4 md:px-10 mt-6">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-200 text-gray-800 px-3 py-2 rounded mb-4"
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <li
                key={tour.id}
                className="flex flex-col justify-between items-center p-6 shadow-xl rounded-xl bg-gray-300"
              >
                <img
                  className="h-[250px] w-[100%] object-cover mb-4 cursor-pointer hover:-translate-y-2 transition-all duration-500 rounded-md shadow-lg"
                  src={tour.image}
                  alt={tour.name}
                  loading="lazy"
                />
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-gray-500 tracking-wide font-semibold text-lg">
                    {tour.name}
                  </h3>
                  <p className="text-gray-400">{tour.location}</p>
                  <p className="text-yellow-500">Ratings: {renderStars(tour.ratings)}</p>
                </div>
                {selectedCards.includes(tour.id) ? (
                  <button
                    className="bg-blue-500 text-white px-2 py-1 mt-4 rounded-sm"
                    onClick={() => handleCancelBooking(tour.id)}
                  >
                    Cancel Booking
                  </button>
                ) : (
                  <button
                    className={`bg-blue-500 text-white px-2 py-1 mt-4 rounded-sm ${
                      selectedCards.includes(tour.id) ? "bg-opacity-60" : ""
                    }`}
                    onClick={() => {
                      handleToggleSelect(tour.id);
                      handleBookNow(tour.id);
                    }}
                  >
                    {selectedCards.includes(tour.id) ? "Selected" : "Book Now"}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <div className="mb-6"></div> 
          <div className="mb-4 p-4 bg-gray-500 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Add New Image</h3>
            <input
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="bg-gray-200 text-gray-800 px-3 py-2 rounded w-full mb-2"
            />
            <input
              type="text"
              placeholder="Image Name"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
              className="bg-gray-200 text-gray-800 px-3 py-2 rounded w-full mb-2"
            />
            <input
              type="text"
              placeholder="Location"
              value={imageLocation}
              onChange={(e) => setImageLocation(e.target.value)}
              className="bg-gray-200 text-gray-800 px-3 py-2 rounded w-full mb-2"
            />
            <input
              type="number"
              placeholder="Ratings"
              value={imageRatings}
              onChange={(e) => setImageRatings(parseInt(e.target.value))}
              className="bg-gray-200 text-gray-800 px-3 py-2 rounded w-full mb-2"
            />
            <textarea
              placeholder="Info"
              value={imageInfo}
              onChange={(e) => setImageInfo(e.target.value)}
              className="bg-gray-200 text-gray-800 px-3 py-2 rounded w-full mb-2"
            />
            <button
              className="bg-blue-500 text-white px-3 py-2 rounded"
              onClick={handleAddImage}
            >
              Add Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
