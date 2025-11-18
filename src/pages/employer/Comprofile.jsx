import { useState, useEffect } from "react";
import Navbar from "../../components/EmployerNavbar";

export default function ComProfile() {
  const [company, setCompany] = useState({
    name: "",
    location: "",
    website: "",
    about: "",
    logo: ""
  });

  useEffect(() => {
    // Load company data from localStorage or API
    const storedCompany = JSON.parse(localStorage.getItem("company"));
    if (storedCompany) setCompany(storedCompany);
  }, []);

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("company", JSON.stringify(company));
    alert("Company profile updated successfully!");
  };

  return (
    <>
      <Navbar type="dashboard" />
      <main className="pt-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Company Profile</h2>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Company Name"
              value={company.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={company.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <input
              type="text"
              name="website"
              placeholder="Website"
              value={company.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <textarea
              name="about"
              placeholder="About Company"
              value={company.about}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              rows={4}
            />

            <input
              type="text"
              name="logo"
              placeholder="Logo URL"
              value={company.logo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Save Profile
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
