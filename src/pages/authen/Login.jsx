import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the registered user from localStorage
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser) {
      setError("No user found. Please signup first.");
      return;
    }

    // Validate email and password
    if (email === registeredUser.email && password === registeredUser.password) {
      // Save logged-in user
      localStorage.setItem("user", JSON.stringify(registeredUser));

      // Redirect based on role
      if (registeredUser.role === "jobseeker") {
        navigate("/dashboard");
      } else if (registeredUser.role === "recruiter") {
        navigate("/recdash");
      } else {
        navigate("/dashboard");
      }
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar type="login" />

      <div className="flex justify-center items-center min-h-screen bg-gray-50 pt-16">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          {error && (
            <div className="mb-4 text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email field */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Password field */}
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>

          {/* Signup link */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
