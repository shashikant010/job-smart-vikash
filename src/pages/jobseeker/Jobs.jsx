import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    type: "Full-time",
    experience: "Mid-level",
    description: "Build modern UIs using React, Tailwind, and TypeScript.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Global Innovations Ltd.",
    location: "New York, NY",
    type: "Full-time",
    experience: "Senior",
    description:
      "Work with Node.js, Express, and MongoDB to design scalable APIs.",
  },
  {
    id: 3,
    title: "UI/UX Designer Intern",
    company: "Design Dynamics",
    location: "Remote",
    type: "Internship",
    experience: "Junior",
    description:
      "Assist in creating wireframes, prototypes, and collaborate with developers.",
  },
];

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [experience, setExperience] = useState("");
  const [showInternship, setShowInternship] = useState(false);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location ? job.location.includes(location) : true) &&
      (type ? job.type === type : true) &&
      (experience ? job.experience === experience : true) &&
      (showInternship ? job.type === "Internship" : true)
  );

  return (
    <>
      <Navbar type="jobs" />

      {/* Top Search Bar */}
      <div className="bg-white border-b border-gray-300 py-6">
        <div className="max-w-4xl mx-auto flex gap-3 justify-center">
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-400 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:outline-none"
          />
          <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
            Search
          </button>
        </div>
      </div>

      <div className="flex min-h-screen bg-gray-50 pt-6">
        {/* Sidebar Filters */}
        <aside className="w-64 bg-white border-r border-gray-300 p-6">
          <h2 className="text-xl font-semibold mb-4 text-indigo-600">Filters</h2>

          {/* Location */}
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 mb-4 border border-gray-400 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="Delhi">Delhi</option>
            <option value="Pune">Pune</option>
            <option value="Noida">Noida</option>
            <option value="Gujarat">Gujarat</option>
            <option value="New York, NY">New York, NY</option>
          </select>

          {/* Job Type */}
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2 mb-4 border border-gray-400 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="">All Job Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>

          {/* Experience */}
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full px-3 py-2 mb-4 border border-gray-400 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="">All Experience</option>
            <option value="Junior">Junior</option>
            <option value="Mid-level">Mid-level</option>
            <option value="Senior">Senior</option>
          </select>

          {/* Internship Button */}
          <button
            onClick={() => setShowInternship(!showInternship)}
            className={`w-full px-3 py-2 font-medium rounded-lg border ${
              showInternship
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-indigo-600 border-indigo-600"
            } hover:bg-indigo-600 hover:text-white transition`}
          >
            {showInternship ? "Showing Internships" : "Internship"}
          </button>
        </aside>

        {/* Job Cards */}
        <main className="flex-1 p-6 max-w-4xl mx-auto space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-400 p-6 rounded-xl hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <span className="text-sm text-indigo-600 font-medium px-2 py-1 border border-indigo-500 rounded-lg">
                    {job.type}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {job.company} • {job.location} • {job.experience}
                </p>
                <p className="text-gray-700 mb-5">{job.description}</p>

                <Link
                  to={`/jobs/${job.id}`}
                  className="inline-block px-5 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No jobs found.</p>
          )}
        </main>
      </div>
    </>
  );
}
