import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Dummy jobs data
const jobs = [
  { id: 1, title: "Senior Software Engineer", company: "Tech Innovators Ltd.", location: "Remote", tags: ["React", "Node.js", "AWS"] },
  { id: 2, title: "Data Scientist", company: "Data Insights Co.", location: "New York, NY", tags: ["Python", "TensorFlow", "SQL"] },
  { id: 3, title: "Product Manager", company: "Product Visionaries LLC", location: "San Francisco, CA", tags: ["Agile", "JIRA", "Roadmapping"] },
];

// Dummy saved jobs
const savedJobs = [
  { id: 1, title: "Frontend Developer", company: "UI Experts Ltd.", location: "Remote" },
  { id: 2, title: "Backend Engineer", company: "Server Solutions Inc.", location: "New York, NY" },
];

// Dummy applied jobs
const appliedJobs = [
  { id: 1, title: "Data Analyst", company: "Data Dynamics Corp.", status: "Applied" },
  { id: 2, title: "Product Manager", company: "Global Innovations Ltd.", status: "Interviewing" },
];

// Analytics InfoBox Component
function InfoBox({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
      <div className="w-20 h-20 mb-2">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            pathColor: "#6366F1",
            textColor: "#111827",
            trailColor: "#E5E7EB",
          })}
        />
      </div>
      <h3 className="text-lg font-semibold text-center">{title}</h3>
    </div>
  );
}

export default function Dashboard() {
  const profileCompletion = 60;
  const personalInfoCompletion = 80;
  const cvParsedCompletion = 50;
  const certificatesCompletion = 40;

  return (
    <>
      <Navbar type="dashboard" />
      <div className="flex min-h-screen bg-gray-50 pt-16">

        {/* Sidebar */}
       
        <aside className="w-64 bg-white text-gray-900 shadow-md p-6 flex flex-col">
          <nav className="space-y-2 flex-1">
            <button className="w-full text-left px-3 py-2 rounded-lg bg-indigo-100 text-indigo-700 font-medium">
              Dashboard
            </button>

            {/* Sidebar links */}
            <Link
              to="/recommended-jobs"
              className="block px-3 py-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-700"
            >
              Recommended Jobs
            </Link>

            <Link
               to="/courses"
              className="block px-3 py-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-700"
            >
            Recommended Courses
            </Link>

            <Link
             to="/my-applications"
           
              className="block px-3 py-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-700"
            >
               My Applications
             
            </Link>

            <Link
              to="/Networking"
              className="block px-3 py-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-700"
            >
              Networking
            </Link>
          </nav>
        </aside>


        {/* Main Content */}
        <main className="flex-1 p-6">

          {/* Top Analytics Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <InfoBox title="Profile Completion" value={profileCompletion} />
            <InfoBox title="Personal Info" value={personalInfoCompletion} />
            <InfoBox title="CV Parsed Info" value={cvParsedCompletion} />
            <InfoBox title="Certificates Uploaded" value={certificatesCompletion} />
          </div>

          {/* Profile Section */}
          <div className="bg-white p-6 rounded-xl shadow mb-8 flex items-center gap-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-indigo-600"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">John Doe</h2>
              <p className="text-gray-600 mb-3">Software Engineer • New York, USA</p>
              {profileCompletion < 100 && (
                <Link
                  to="/profile-setup"
                  className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700"
                >
                  Complete Profile
                </Link>
              )}
            </div>
          </div>

          {/* Recommended Jobs */}
          <section className="mb-8">
            <h3 className="text-xl font-bold mb-4">Recommended Jobs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                  <h4 className="text-lg font-bold text-gray-900">{job.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{job.company} • {job.location}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full">{tag}</span>
                    ))}
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
          </section>

          {/* Saved Jobs */}
          <section className="mb-8">
            <h3 className="text-xl font-bold mb-4">Saved Jobs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedJobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                  <h4 className="text-lg font-bold text-gray-900">{job.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{job.company} • {job.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Applied Jobs */}
          <section>
            <h3 className="text-xl font-bold mb-4">Applied Jobs</h3>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="px-6 py-3">Job Title</th>
                    <th className="px-6 py-3">Company</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appliedJobs.map((job) => (
                    <tr key={job.id} className="border-b">
                      <td className="px-6 py-3">{job.title}</td>
                      <td className="px-6 py-3">{job.company}</td>
                      <td className="px-6 py-3">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${job.status === "Applied"
                              ? "bg-blue-100 text-blue-600"
                              : job.status === "Interviewing"
                                ? "bg-indigo-100 text-indigo-600"
                                : "bg-red-100 text-red-600"
                            }`}
                        >
                          {job.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {appliedJobs.length === 0 && (
                    <tr>
                      <td colSpan="3" className="px-6 py-4 text-center text-gray-500">No applied jobs found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
