import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/EmployerNavbar";

// Dummy posted jobs
const postedJobs = [
  { id: 1, title: "Frontend Developer", location: "Remote", type: "Full-time", company: "ABC Corp", experience: "Junior", skills: "React, CSS", description: "Job description here" },
  { id: 2, title: "Backend Engineer", location: "New York", type: "Full-time", company: "XYZ Ltd", experience: "Mid-level", skills: "Node.js, Express", description: "Job description here" },
];

export default function ManageJobs() {
  const [jobs, setJobs] = useState(postedJobs);

  const handleDelete = (id) => {
    setJobs(prev => prev.filter(job => job.id !== id));
  };

  return (
    <>
      <Navbar type="dashboard" />
      <main className="pt-20 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Manage Jobs</h2>

          {jobs.map(job => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-xl shadow mb-4 flex justify-between items-center hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600">{job.location} • {job.type}</p>
              </div>
              <div className="flex gap-2">
                {/* Edit link now passes full job data as state */}
                <Link
                  to="/postjob"
                  state={{ job }}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {jobs.length === 0 && (
            <p className="text-gray-500 text-center mt-6">No jobs posted yet.</p>
          )}
        </div>
      </main>
    </>
  );
}
