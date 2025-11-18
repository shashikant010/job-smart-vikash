import { Link } from "react-router-dom";
import Navbar from "../../components/EmployerNavbar";
import Footer from "../../components/Footer";

export default function RecDash() {
  return (
    <>
      <Navbar type="dashboard" />
      <div className="flex min-h-screen bg-gray-50 pt-16">
        {/* Sidebar */}
        <aside className="w-64 bg-indigo-600 text-white p-6 flex flex-col fixed top-16 bottom-0">
          <nav className="space-y-2 flex-1">
            <Link
              to="/recdash"
              className="block px-3 py-2 rounded-lg bg-indigo-700 text-white font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/postjob"
              className="block px-3 py-2 hover:bg-indigo-500 rounded-lg"
            >
              Post Job
            </Link>
             <Link
              to="/managejob"
              className="block px-3 py-2 hover:bg-indigo-500 rounded-lg"
            >
              Manage Job
            </Link>
            <Link
              to="/recapp"
              className="block px-3 py-2 hover:bg-indigo-500 rounded-lg"
            >
              Applicants
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-6 pb-20 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Recruiter Dashboard</h2>
          <p className="text-gray-600 mb-6">
            Welcome! Here you can manage your posted jobs, view applicants, and update your profile.
          </p>

          {/* Example Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-gray-500">Total Jobs Posted</p>
              <h3 className="text-xl font-bold">5</h3>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-gray-500">Total Applicants</p>
              <h3 className="text-xl font-bold">23</h3>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-gray-500">Jobs Active</p>
              <h3 className="text-xl font-bold">3</h3>
            </div>
          </div>
        </main>
      </div>
      
    </>
  );
}
