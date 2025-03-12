import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post("http://127.0.0.1:4000/api/log-in", {
        email: formData.email,
        password: formData.password,
      });
      alert("Login successful! Redirecting...");
      navigate("/home");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 rounded-lg shadow-lg  overflow-hidden border border-gray-800">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="!text-3xl font-bold !text-white">Login</h1>
              <p className="!text-white !text-2xl mt-1">Sign into your account</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white mb-2" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 bg-gray-800 border-gray-700 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-white hover:text-green-400">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className="w-full py-3 mt-4 font-medium text-gray-900 rounded-md hover:bg-green-600 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors"
                style={{ backgroundColor: "#c6d631" }}
              >
                Sign In
              </button>
              
              {error && <p className="text-sm text-red-500 text-center mt-3">{error}</p>}

              <div className="text-center text-sm text-white mt-6">
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/signin");
                  }}
                  className="hover:underline"
                  style={{ color: "#c6d631" }}
                >
                  Register here
                </a>
              </div>
              
              <div className="flex justify-center space-x-4 text-xs text-white mt-6 pt-4 border-t border-gray-800">
                <a href="#" className="hover:text-gray-300">
                  Terms of use
                </a>
                <a href="#" className="hover:text-gray-300">
                  Privacy policy
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;