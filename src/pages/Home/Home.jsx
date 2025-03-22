import React, { useState } from "react";
import axios from "axios";
import GridMotion from "../../components/ui/GridUi";
import {useNavigate } from "react-router"

const CarRentalSearch = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const items = [
    <img src="\src\assets\car4.jpg" alt=""  />,
    <img src="\src\assets\car2.jpg" alt=""  />,
    <img src="\src\assets\car3.jpg" alt="" />,
    <img src="\src\assets\car6.jpg" alt="" />,
    <img src="\src\assets\car7.jpg" alt="" />,
    <img src="\src\assets\key1.jpg" alt="" />,
    <img src="\src\assets\black logo.png" alt=""/>,
    <img src="\src\assets\key1.jpg" alt="" />,
    <img src="\src\assets\car8.jpg" alt="" />,
    <img src="\src\assets\key1.jpg" alt="" />,
    <img src="\src\assets\pexels-hazardos-804130.jpg" alt="" />,
    <img src="\src\assets\pexels-justin-hamilton-16109-142853.jpg" alt="" />,
    <img src="\src\assets\phone1.jpg" alt=""/>,
    <img src="\src\assets\key1.jpg" alt="" />,
    <img src="\src\assets\pexels-hazardos-804130.jpg" alt="" />,
    <img src="\src\assets\pexels-justin-hamilton-16109-142853.jpg" alt=""/>,
    <img src="\src\assets\phone1.jpg" alt="" />,
    <img src="\src\assets\car7.jpg" alt="" />,
    <img src="\src\assets\key1.jpg" alt="" />,
    <img src="\src\assets\pexels-hazardos-804130.jpg" alt="" />,
    <img src="\src\assets\pexels-justin-hamilton-16109-142853.jpg" alt="" />,
    <img src="\src\assets\phone1.jpg" alt="" />,
    <img src="\src\assets\car7.jpg" alt="" />,
    <img src="\src\assets\key1.jpg" alt="" />,

  ];

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/api/location", {
        params: { query: location, pickUpDate, dropOffDate, pickUpTime, dropOffTime },
      });
      if (response.data.data?.search_results.length > 0) {
        navigate("/results", { state: { cars: response.data.data.search_results } });
      } else setError("No cars found for the given details.");
    } catch {
      setError("Failed to fetch car rentals.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center">
      {/* grid selection */}
      <div className="relative w-full h-[60vh] overflow-hidden">
      
    
        <GridMotion items={items} />
    
      </div>

      {/* Search Bar Section */}
      <div className="w-full max-w-4xl bg-gray-900 rounded-2xl p-8 mt-8 shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Find Your Perfect Ride</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              value={pickUpDate}
              onChange={(e) => setPickUpDate(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="date"
              value={dropOffDate}
              onChange={(e) => setDropOffDate(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="time"
              value={pickUpTime}
              onChange={(e) => setPickUpTime(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="time"
              value={dropOffTime}
              onChange={(e) => setDropOffTime(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleSearch}
            disabled={loading}
            className="w-full p-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold disabled:bg-gray-600"
          >
            {loading ? "Searching..." : "Search"}
          </button>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>

        {/* Results Section */}
        <div className="mt-10">
          {cars.length > 0 && (
            <ul className="space-y-6">
              {cars.map((car, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6 p-6 bg-gray-800 rounded-lg shadow-md"
                >
                  <img
                    src={car.image_url}
                    alt={car.v_name}
                    className="w-32 h-24 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-xl font-semibold">{car.v_name}</p>
                    <p>{car.transmission}, Seats: {car.seats}</p>
                    <p>Fuel Policy: {car.fuel_policy}</p>
                    <p>
                      Price: {car.pricing_info?.price} {car.pricing_info?.currency}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarRentalSearch;