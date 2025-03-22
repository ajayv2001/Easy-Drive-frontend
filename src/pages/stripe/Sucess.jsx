import { useEffect } from "react";
import { useNavigate } from "react-router";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/home"), 1500); // Redirect to homepage after 5 sec
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h2 className="text-4xl font-bold text-green-600">Payment Successful!</h2>
      <p className="text-xl text-gray-700 mt-4">Thank you for your booking.</p>
    </div>
  );
};

export default Success;
