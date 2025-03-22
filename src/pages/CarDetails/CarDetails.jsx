import { useLocation } from "react-router";

const CarDetails = () => {
  const { state } = useLocation();
  const car = state?.car;

  if (!car) {
    return (
      <div className="p-10 bg-gray-50 min-h-screen flex justify-center items-center">
        <p className="text-2xl font-semibold text-red-500">
          No car details available. Please select a car to view details.
        </p>
      </div>
    );
  }

  const handlePayment = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ car }), // Send the entire car object
      });
  
      const session = await response.json();
      if (session.url) {
        window.location.href = session.url; // Redirect to Stripe checkout
      } else {
        console.error("Failed to get payment URL");
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-2xl shadow-xl p-8">
        <div className="lg:col-span-1 flex flex-col items-center">
          <img
            src={car.vehicle_info?.image_url}
            alt={car.vehicle_info?.v_name || "Car image"}
            className="w-full h-auto object-contain rounded-xl shadow-lg"
          />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {car.vehicle_info?.v_name || "Vehicle Name Unavailable"}
          </h2>
          <div className="flex flex-wrap gap-4 text-gray-600 text-lg">
            <p>
              <strong>Rating:</strong> {car.content?.supplier?.rating?.average || "N/A"}⭐
            </p>
            <p>{car.content?.supplier?.rating?.subtitle || "No rating info"}</p>
          </div>
          <div>
            <p>
              {car.vehicle_info?.v_name} with {car.accessibility?.transmission || "Unknown transmission"} (
              {car.accessibility?.supplier_rating || "No supplier rating"})
            </p>
            <p className="text-xl text-gray-700 font-semibold mt-2">
              <strong>Price:</strong> {car.pricing_info?.price || "N/A"} {car.pricing_info?.currency || ""}
            </p>
          </div>

          {/* Pay Now Button */}
          <button
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg text-xl font-semibold"
            onClick={handlePayment}
          >
            Pay Now
          </button>

          {/* Vehicle Specs & Condition Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 p-6 rounded-xl shadow-md">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vehicle Specifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Transmission:</strong> {car.vehicle_info.transmission || "N/A"}</li>
                <li><strong>Seats:</strong> {car.vehicle_info.seats || "N/A"}</li>
                <li><strong>Doors:</strong> {car.vehicle_info.doors || "N/A"}</li>
                <li><strong>Mileage:</strong> {car.vehicle_info.mileage || "N/A"}</li>
                <li><strong>Supplier:</strong> {car.supplier_info?.name || "Unknown Supplier"}</li>
                <li><strong>Airbags</strong> {car.vehicle_info?.airbags || "N/A"}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vehicle Condition</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Condition:</strong> {car.rating_info?.condition || "N/A"} / 10</li>
                <li><strong>Value for Money:</strong> {car.rating_info?.value_for_money || "N/A"} / 10</li>
                <li><strong>Cleanliness:</strong> {car.rating_info?.cleanliness || "N/A"} / 10</li>
                <li><strong>Location:</strong> {car.rating_info?.location || "N/A"} / 10</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pickup & Dropout Details */}
      <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Pickup & Dropout Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-700">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h4 className="text-2xl font-semibold mb-3">Pickup Details</h4>
            <p><strong>Location:</strong> {car.route_info?.pickup.address|| "N/A"}</p>
            <p><strong>Date:</strong> {car.pickup_info?.date || "N/A"}</p>
            <p><strong>Time:</strong> {car.pickup_info?.time || "N/A"}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h4 className="text-2xl font-semibold mb-3">Dropout Details</h4>
            <p><strong>Location:</strong> {car.route_info?.dropoff.address|| "N/A"}</p>
            <p><strong>name:</strong> {car.route_info?.dropoff.name || "N/A"}</p>
            <p><strong>Time:</strong> {car.dropout_info?.time || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
