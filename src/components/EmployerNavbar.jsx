import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBell, FaSearch, FaEnvelope, FaRegUserCircle, FaCheckCircle } from "react-icons/fa";

export default function EmployerNavbar({ type }) {
  const [userInfo, setUserInfo] = useState(null);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: "application", message: "New applicant for Frontend Developer", time: "2h ago" },
    { id: 2, type: "profile", message: "Your company profile is 80% complete", time: "1d ago" },
  ]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUserInfo(storedUser);
  }, []);

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const renderIcon = (type) => {
    switch(type) {
      case "application": return <FaEnvelope className="text-indigo-600" />;
      case "profile": return <FaCheckCircle className="text-yellow-500" />;
      default: return <FaEnvelope />;
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold cursor-pointer">
          <span className="text-teal-700">Job</span>
          <span className="text-indigo-600">-Smart</span>
        </Link>

        {/* Optional Center Search */}
        {type === "dashboard" && (
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search jobs, applicants..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        )}

        <div className="flex items-center gap-4">

          {/* Notifications */}
          <div className="relative">
            <FaBell
              className="text-xl text-gray-600 cursor-pointer"
              onClick={() => setNotifOpen(!notifOpen)}
            />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            )}
            {notifOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-xl overflow-hidden z-50">
                <div className="p-4 border-b font-semibold text-gray-700 flex justify-between items-center">
                  Notifications
                  <button
                    className="text-sm text-indigo-600 hover:underline"
                    onClick={() => setNotifications([])}
                  >
                    Clear All
                  </button>
                </div>
                <ul className="max-h-64 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map(n => (
                      <li key={n.id} className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition relative">
                        <div className="mt-1">{renderIcon(n.type)}</div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-800">{n.message}</p>
                          <p className="text-xs text-gray-400">{n.time}</p>
                        </div>
                        <button
                          onClick={() => removeNotification(n.id)}
                          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xs"
                        >
                          ✕
                        </button>
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-center text-gray-500 text-sm">No notifications</li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Avatar */}
          {userInfo && (
            <div className="relative">
              <img
                src={userInfo.photo}
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-indigo-600 cursor-pointer"
                onClick={() => setAvatarOpen(!avatarOpen)}
              />
              {avatarOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-xl overflow-hidden z-50">
                  <div className="p-4 border-b flex items-center gap-3">
                    <img src={userInfo.photo} alt="avatar" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-gray-800">{userInfo.name}</p>
                      {userInfo.role && <p className="text-sm text-gray-500">{userInfo.role}</p>}
                    </div>
                  </div>
                  <ul className="py-2 text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link to="/comprofile">Company Profile</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link to="/recsetting">Settings</Link>
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        localStorage.removeItem("user");
                        window.location.reload();
                      }}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}
