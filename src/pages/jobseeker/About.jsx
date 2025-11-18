import Navbar from "../../components/Navbar";
import {
  FaRobot,
  FaUsers,
  FaBriefcase,
  FaBullseye,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

export default function About() {
  return (
    <>
      {/* Navbar */}
      <Navbar type="about" />

      {/* Hero Section */}
      <section className="bg-white text-center py-24 px-6 border-b border-gray-300">
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-600 mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We connect job seekers and employers through AI-powered insights,
          making hiring faster, smarter, and more personal.
        </p>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 px-6 border-b border-gray-300">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">
            Our idea
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Founded with a vision to simplify the hiring process, our platform
            began as a small idea — to help people find jobs that truly match
            their potential. Over time, we’ve grown into a trusted space for job
            seekers and employers alike, powered by technology and driven by
            purpose.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our AI recommendation engine learns from user behavior, skills, and
            goals to make the hiring process seamless, transparent, and fair.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
              What Makes Us Different
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We don’t just list jobs — we intelligently connect people with
              opportunities that matter. Our AI-driven matching ensures every
              recommendation feels relevant, not random.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you’re looking for your first internship or your next big
              career move, we help you make confident, informed decisions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-400 text-center hover:shadow-md transition">
              <FaRobot className="text-3xl text-indigo-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">AI Matching</h3>
              <p className="text-sm text-gray-500">
                Smart job and talent pairing powered by data.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-400 text-center hover:shadow-md transition">
              <FaUsers className="text-3xl text-indigo-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">For Everyone</h3>
              <p className="text-sm text-gray-500">
                Inclusive design for candidates and employers.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-400 text-center hover:shadow-md transition">
              <FaBriefcase className="text-3xl text-indigo-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">
                Verified Companies
              </h3>
              <p className="text-sm text-gray-500">
                Partnered with trusted global organizations.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-400 text-center hover:shadow-md transition">
              <FaBullseye className="text-3xl text-indigo-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">
                Career Insights
              </h3>
              <p className="text-sm text-gray-500">
                Personalized growth suggestions and job trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20 px-6 border-t border-gray-400 border-b border-gray-400">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-10">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg border border-gray-400">
              <FaLightbulb className="text-3xl text-indigo-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                1. Create Your Profile
              </h3>
              <p className="text-gray-600 text-sm">
                Share your skills, experience, and interests.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-400">
              <FaHandshake className="text-3xl text-indigo-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Get Matched
              </h3>
              <p className="text-gray-600 text-sm">
                Our AI recommends jobs tailored to your profile.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-400">
              <FaChartLine className="text-3xl text-indigo-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Grow Your Career
              </h3>
              <p className="text-gray-600 text-sm">
                Apply, learn, and move forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white text-center py-20 px-6 border-t border-gray-400">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-600">
          Our Vision
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          To build a transparent, AI-driven job ecosystem that empowers people
          to find opportunities aligned with their goals — and helps companies
          grow with the right talent.
        </p>
      </section>
    </>
  );
}
