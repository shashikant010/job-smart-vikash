// Navbar.js
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch, FaBell, FaCheckCircle, FaRegUserCircle, FaEnvelope } from "react-icons/fa";

export default function Navbar({ type }) {
  const [userInfo, setUserInfo] = useState(null);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: "job", message: "New job recommendation available!", time: "2h ago" },
    { id: 2, type: "connection", message: "Alice accepted your connection request.", time: "5h ago" },
    { id: 3, type: "profile", message: "Your profile is 80% complete.", time: "1d ago" }
  ]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserInfo(storedUser)};
  }, []);

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const renderIcon = (type) => {
    switch(type) {
      case "job": return <FaEnvelope className="text-indigo-600" />;
      case "connection": return <FaRegUserCircle className="text-green-500" />;
      case "profile": return <FaCheckCircle className="text-yellow-500" />;
      default: return <FaEnvelope />;
    }
  };

  // Home page links
  const homeLinks =!userInfo? [
    { to: "/", label: "Home" },
    { to: "/jobs", label: "Jobs" },
    { to: "/about", label: "About" },
    { to: "/login", label: "Login" },
    { 
      to: "/signup", 
      label: "Sign Up", 
      className: "bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition" 
    },
  ]:[{ to: "/", label: "Home" },
    { to: "/jobs", label: "Jobs" },
    { to: "/about", label: "About" },
    ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50 border-b border-black/10">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">

        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-bold cursor-pointer">
          <span className="text-teal-700">Job</span>
          <span className="text-indigo-600">-Smart</span>
        </Link>

        {/* Center: Search bar (dashboard only) */}
        {type === "dashboard" && (
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search jobs, courses..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        )}

        {/* Right section: Home links / notifications / avatar */}
        <div className="flex items-center gap-4">

          {/* Home links (for non-dashboard pages) */}
          {type !== "dashboard" && homeLinks.map((link, idx) => (
            <Link key={idx} to={link.to} className={link.className || "hover:text-indigo-500 transition"}>
              {link.label}
            </Link>
          ))}

          {/* Notification Bell (dashboard only) */}
          {type === "dashboard" && (
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
                      notifications.map((notif) => (
                        <li key={notif.id} className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition relative">
                          <div className="mt-1">{renderIcon(notif.type)}</div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-800">{notif.message}</p>
                            <p className="text-xs text-gray-400">{notif.time}</p>
                          </div>
                          <button
                            onClick={() => removeNotification(notif.id)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xs"
                          >
                            ✕
                          </button>
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-center text-gray-500 text-sm">
                        No notifications
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Avatar dropdown */}
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
                    <li>
                      <Link
                        to="/profile-setup"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setAvatarOpen(false)}
                      >
                        Profile
                      </Link>
                      
                    </li>
                     <li>
                      <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setAvatarOpen(false)}
                      >
                        Dashboard
                      </Link>
                      
                    </li>
                    
                    <li>
                      <Link
                        to="/setting"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setAvatarOpen(false)}
                      >
                        Settings
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        localStorage.removeItem("user");
                        window.location.href = "/login";
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </li>
                     <Link
                        to="/help"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setAvatarOpen(false)}
                      >
                        Help
                      </Link>
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
