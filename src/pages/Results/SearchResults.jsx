import { useLocation, useNavigate } from "react-router";

const SearchResults = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const cars = state?.cars || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      {cars.map((car) => (
        <div key={car.v_id} className="bg-gray-800 rounded-xl shadow-lg p-5">
          <img src={car.vehicle_info.image_url} alt={car.v_name} className="w-full h-48 object-cover rounded-md" />
          <h3 className="text-xl mt-4">{car.vehicle_info.v_name}</h3>
          <p className="text-lg">Price: {car.pricing_info?.price} {car.pricing_info?.currency}</p>
          <button
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={() => navigate(`/details/${car.v_id}`, { state: { car } })}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};
export default SearchResults;
