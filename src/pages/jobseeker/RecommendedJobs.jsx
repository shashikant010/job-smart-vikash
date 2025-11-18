import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

// Dummy jobs data
const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Innovators Ltd.",
    location: "Remote",
    tags: ["React", "Node.js", "AWS"],
    score: 85,
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Data Insights Co.",
    location: "New York, NY",
    tags: ["Python", "TensorFlow", "SQL"],
    score: 78,
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Product Visionaries LLC",
    location: "San Francisco, CA",
    tags: ["Agile", "JIRA", "Roadmapping"],
    score: 92,
  },
];

export default function RecommendedJobs() {
  return (
    <>
      <Navbar type="recommendation" />

      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
      

        {/* Main Content - Recommended Jobs only */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-6">Recommended Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {job.company} • {job.location}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Match Score</p>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${job.score}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-800 mt-1">{job.score}%</p>
                </div>
                <Link
                  to={`/jobs/${job.id}`}
                  className="w-full block text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
