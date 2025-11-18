import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { FaBuilding, FaBolt, FaChartLine } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar type="home" />  

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white py-32 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Find Your Dream Job
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Explore thousands of job opportunities with all the information you need.
          It’s your future. Come find it.
        </p>
        <Link
          to="/signup"
          className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transform transition"
        >
          Get Started
        </Link>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-indigo-600 text-4xl mb-3">
              <FaBuilding className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted Companies</h3>
            <p className="text-gray-600">Work with top companies around the world.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-indigo-600 text-4xl mb-3">
              <FaBolt className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Apply</h3>
            <p className="text-gray-600">Apply for jobs with just one click.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-indigo-600 text-4xl mb-3">
              <FaChartLine className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
            <p className="text-gray-600">Boost your career with the best opportunities.</p>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="mb-6">Subscribe to get the latest job postings directly to your inbox.</p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:scale-105 transform transition"
          />
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transform transition">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
