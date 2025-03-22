import { useNavigate } from "react-router";

const Cancel = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10 flex justify-center items-center min-h-screen bg-red-100">
      <h2 className="text-3xl font-semibold text-red-700">Payment Failed! Try Again. ❌</h2>
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-semibold"
      >
        Go Home
      </button>
    </div>
  );
};

export default Cancel;
