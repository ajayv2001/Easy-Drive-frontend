import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Aurora from "../../components/ui/Aurora/Aurora";
import RotatingText from "../../components/ui/RotatingText/RotatingText";
import BlurText from "../../components/ui/BlurText/BlurText";
import FlowingMenu from "../../components/ui/FlowingMenu/FlowingMenu";
import luxCar from "../../assets/lux.jpg";
import affordableCar from "../../assets/affordable.jpg";
import tripsCar from "../../assets/trips.jpg";
import airportTransfer from "../../assets/airport.jpg";
import support from "../../assets/two.webp";
import booking from "../../assets/booking.jpg";
import jaguar from '../../assets/jaguar.jpg'


const CarRentalSearch = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://backend-easy-drive-car-rentel-13.onrender.com/api/location", {
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

  const demoItems = [
    { link: '#', text: 'Luxury Cars', image: luxCar },
    { link: '#', text: 'Affordable Rentals', image: affordableCar },
    { link: '#', text: 'One-Way Trips', image: tripsCar },
    { link: '#', text: 'Airport Transfers', image: airportTransfer },
    { link: '#', text: '24/7 Support', image: support },
    { link: '#', text: 'Flexible Bookings', image: booking },
  ];
  
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center relative">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
        className="absolute top-0 left-0 w-full"
      />

      <div className="relative w-full">
        <img 
          src={jaguar} 
          alt="Car" 
          className="w-full h-auto max-h-screen object-cover" 
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <BlurText
            text="EASY DRIVE"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-white mt-24 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          />
          <div className="flex items-center justify-center space-x-2 mt-2 md:mt-4">
            <span className="text-[#FFD700] font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl italic tracking-wide">Seamless</span>
            <RotatingText
              texts={["Rides!", "Rentals!", "Journeys!", "Bookings!", "Adventures!", "Escapes!"]}
              mainClassName="px-2 sm:px-3 md:px-4 bg-[#1A1A40] text-[#FFD700] py-1 sm:py-2 md:py-3 rounded-xl shadow-md font-semibold text-sm sm:text-base md:text-lg lg:text-xl uppercase"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.03}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              rotationInterval={2500}
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-4 sm:mx-auto bg-[#1A1A40] rounded-2xl p-4 sm:p-6 shadow-2xl mt-4 sm:mt-6 mb-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
    {/* Location Input */}
    <div>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-3 sm:p-4 rounded-lg bg-[#F5F5DC] text-black placeholder-gray-600 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] w-full"
      />
      <p className="text-xs text-gray-300 mt-1">Pick-up location</p>
    </div>

    {/* Pick-up Date & Time */}
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      <div>
        <input
          type="date"
          value={pickUpDate}
          onChange={(e) => setPickUpDate(e.target.value)}
          className="p-3 sm:p-4 rounded-lg bg-[#F5F5DC] text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] w-full"
        />
        <p className="text-xs text-gray-300 mt-1">Pick-up date</p>
      </div>
      <div>
        <input
          type="time"
          value={pickUpTime}
          onChange={(e) => setPickUpTime(e.target.value)}
          className="p-3 sm:p-4 rounded-lg bg-[#F5F5DC] text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] w-full"
        />
        <p className="text-xs text-gray-300 mt-1">Pick-up time</p>
      </div>
    </div>

    {/* Drop-off Date & Time */}
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      <div>
        <input
          type="date"
          value={dropOffDate}
          onChange={(e) => setDropOffDate(e.target.value)}
          className="p-3 sm:p-4 rounded-lg bg-[#F5F5DC] text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] w-full"
        />
        <p className="text-xs text-gray-300 mt-1">Drop-off date</p>
      </div>
      <div>
        <input
          type="time"
          value={dropOffTime}
          onChange={(e) => setDropOffTime(e.target.value)}
          className="p-3 sm:p-4 rounded-lg bg-[#F5F5DC] text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] w-full"
        />
        <p className="text-xs text-gray-300 mt-1">Drop-off time</p>
      </div>
    </div>

    {/* Search Button */}
    <button
      onClick={handleSearch}
      disabled={loading}
      className="p-3 sm:p-4 rounded-lg bg-[#FFD700] hover:bg-[#E6C200] transition text-black font-bold uppercase tracking-wide shadow-md disabled:bg-gray-600 w-full col-span-1 sm:col-span-2 lg:col-span-3 mt-2 sm:mt-3"
    >
      {loading ? "Searching..." : "SEARCH"}
    </button>
  </div>
</div>


      {error && <p className="text-red-500 text-center mt-2 mb-4 px-4">{error}</p>}

      <div className="w-full h-64 sm:h-96 md:h-screen" style={{ maxHeight: '800px', position: 'relative' }}>
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
};

export default CarRentalSearch;