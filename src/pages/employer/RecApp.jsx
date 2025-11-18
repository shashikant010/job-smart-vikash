import { useState } from "react";
import Navbar from "../../components/EmployerNavbar";

// Dummy applicants
const applicants = [
  { id: 1, name: "John Doe", job: "Frontend Developer", status: "Applied" },
  { id: 2, name: "Jane Smith", job: "Backend Engineer", status: "Interviewing" },
];

export default function RecApp() {
  const [apps, setApps] = useState(applicants);

  const handleAccept = (id) => {
    setApps(prev =>
      prev.map(a => (a.id === id ? { ...a, status: "Accepted" } : a))
    );
  };

  const handleReject = (id) => {
    setApps(prev =>
      prev.map(a => (a.id === id ? { ...a, status: "Rejected" } : a))
    );
  };

  return (
    <>
      <Navbar type="dashboard" />

      <main className="pt-20 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Applications</h2>

          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-indigo-50 text-indigo-700 font-semibold">
                <tr>
                  <th className="px-6 py-3">Applicant Name</th>
                  <th className="px-6 py-3">Job</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {apps.map((app) => (
                  <tr key={app.id} className="border-b hover:bg-indigo-50 transition">
                    <td className="px-6 py-3 font-medium text-gray-700">{app.name}</td>
                    <td className="px-6 py-3 text-gray-600">{app.job}</td>
                    <td className="px-6 py-3">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          app.status === "Applied"
                            ? "bg-blue-100 text-blue-600"
                            : app.status === "Interviewing"
                            ? "bg-yellow-100 text-yellow-600"
                            : app.status === "Accepted"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-3 space-x-2">
                      <button
                        onClick={() => handleAccept(app.id)}
                        disabled={["Accepted", "Rejected"].includes(app.status)}
                        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleReject(app.id)}
                        disabled={["Accepted", "Rejected"].includes(app.status)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
                {apps.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center px-6 py-6 text-gray-500">
                      No applications yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
