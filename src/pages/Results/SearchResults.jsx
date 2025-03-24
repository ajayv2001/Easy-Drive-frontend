import { useLocation, useNavigate } from "react-router";

const AvailableCars = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const cars = state?.cars || [];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Find Your Perfect Ride</h2>
      <p className="text-center text-gray-600 mb-8">Browse through our collection of top-quality rental cars and book the one that suits your journey.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.v_id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden p-5 border border-gray-200"
          >
            <div className="relative">
              <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                {car.vehicle_info.category || "Unknown"}
              </span>
              <img
                src={car.vehicle_info.image_url}
                alt={car.vehicle_info.v_name}
                className="w-full h-56 object-contain bg-gray-100"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-900">{car.vehicle_info.v_name}</h3>
              <p className="text-sm text-gray-500">{car.vehicle_info.brand || "Unknown Brand"}</p>
              {car.special_deal && (
                <div className="mt-2 bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-md flex items-center">
                  ✨ {car.special_deal} 
                </div>
              )}
              <div className="mt-3 flex items-center gap-4 text-gray-600">
                <span className="text-sm">{car.transmission || "Manual"}</span>
                <span className="text-sm">{car.fuel || "Petrol"}</span>
                <span className="text-sm">{car.seats} Seater</span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-gray-900">₹{car.pricing_info?.price}</p>
                <p className="text-sm text-gray-500">₹{car.pricing_info?.daily_rate}/Day</p>
              </div>
              <button
                className="mt-4 w-full bg-yellow-400 text-gray-900 py-2 rounded-lg text-lg font-medium transition duration-300 hover:bg-yellow-500"
                onClick={() => navigate(`/details/${car.v_id}`, { state: { car } })}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCars;
