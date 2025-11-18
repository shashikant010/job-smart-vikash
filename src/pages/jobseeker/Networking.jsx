// src/pages/Networking.jsx
import { useState } from "react";
import Navbar from "../../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const dummyConnections = [
  { id: 1, name: "Alice Johnson", status: "incoming" },
  { id: 2, name: "Bob Smith", status: "sent" },
  { id: 3, name: "Charlie Davis", status: "suggestion" },
];

export default function Networking() {
  const [connections, setConnections] = useState(dummyConnections);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");

  const handleConnect = (id) => {
    setConnections((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "sent" } : c))
    );
    const name = connections.find((c) => c.id === id).name;
    setNotificationMsg(`Connection request sent to ${name}!`);
    setShowNotification(true);

    toast.success(`Connection request sent to ${name}!`, {
      position: "top-right",
      autoClose: 2500,
    });
  };

  const handleAccept = (id) => {
    setConnections((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "connected" } : c))
    );
    const name = connections.find((c) => c.id === id).name;
    setNotificationMsg(`You are now connected with ${name}!`);
    setShowNotification(true);

    toast.success(`You are now connected with ${name}!`, {
      position: "top-right",
      autoClose: 2500,
    });
  };

  return (
    <>
      <Navbar type="dashboard" />
      <ToastContainer />

      <div className="flex min-h-screen bg-gray-50 pt-16">

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Networking</h2>

          {/* Connections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {connections.map((c) => (
              <div
                key={c.id}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{c.name}</h3>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      c.status === "incoming"
                        ? "bg-yellow-100 text-yellow-700"
                        : c.status === "sent"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {c.status === "incoming"
                      ? "Incoming"
                      : c.status === "sent"
                      ? "Request Sent"
                      : "Connected"}
                  </span>
                </div>

                {/* Action Buttons */}
                <div>
                  {c.status === "incoming" && (
                    <button
                      onClick={() => handleAccept(c.id)}
                      className="w-full px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 font-medium transition"
                    >
                      Accept
                    </button>
                  )}

                  {c.status === "suggestion" && (
                    <button
                      onClick={() => handleConnect(c.id)}
                      className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition"
                    >
                      Connect
                    </button>
                  )}

                  {c.status === "sent" && (
                    <button
                      disabled
                      className="w-full px-4 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed"
                    >
                      Request Sent
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Animated Notification */}
          <AnimatePresence>
            {showNotification && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="fixed top-5 right-5 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
                onAnimationComplete={() => setShowNotification(false)}
              >
                {notificationMsg}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}
