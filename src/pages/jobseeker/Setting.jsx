import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Setting() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated User Data:", userData);
    alert("Settings updated successfully!");
    // Backend API call placeholder
  };

  return (
    <>
      <Navbar type="setting" />

      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-center mb-6">Account Settings</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Enter new password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Update Settings
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
