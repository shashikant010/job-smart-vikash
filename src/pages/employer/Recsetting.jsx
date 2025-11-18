import { useState, useEffect } from "react";
import Navbar from "../../components/EmployerNavbar";

export default function Recsetting() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    alert("Settings updated successfully!");
  };

  return (
    <>
      <Navbar type="dashboard" />
      <main className="pt-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Account Settings</h2>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
