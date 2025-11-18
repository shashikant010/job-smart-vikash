import { useState } from "react";
import Navbar from "../../components/Navbar";

const applications = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    title: "Senior Software Engineer",
    date: "2024-03-15",
    status: "Applied",
  },
  {
    id: 2,
    company: "Global Innovations Ltd.",
    title: "Product Manager",
    date: "2024-03-10",
    status: "Interviewing",
  },
  {
    id: 3,
    company: "Data Dynamics Corp.",
    title: "Data Analyst",
    date: "2024-03-05",
    status: "Rejected",
  },
  {
    id: 4,
    company: "Creative Minds Agency",
    title: "UX Designer",
    date: "2024-02-28",
    status: "Applied",
  },
  {
    id: 5,
    company: "Future Systems Inc.",
    title: "AI Researcher",
    date: "2024-02-20",
    status: "Interviewing",
  },
];

const statusColors = {
  Applied: "bg-blue-100 text-blue-600",
  Interviewing: "bg-indigo-100 text-indigo-600",
  Rejected: "bg-red-100 text-red-600",
};

export default function MyApplications() {
  const [filter, setFilter] = useState("All");

  const filteredApps =
    filter === "All"
      ? applications
      : applications.filter((app) => app.status === filter);

  return (
    <>
      <Navbar type="myapplication" />

      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">My Applications</h2>

        {/* Filter Tabs (without underline line) */}
        <div className="flex gap-6 mb-6 text-sm font-medium">
          {["All", "Applied", "Interviewing", "Rejected"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`pb-2 ${filter === tab
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-600 hover:text-indigo-600"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Applications Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Job Title</th>
                <th className="px-6 py-3">Date Applied</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredApps.map((app) => (
                <tr key={app.id}>
                  <td className="px-6 py-3">{app.company}</td>
                  <td className="px-6 py-3">{app.title}</td>
                  <td className="px-6 py-3">{app.date}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[app.status]}`}
                    >
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredApps.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
