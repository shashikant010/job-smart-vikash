import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isOtpVerified,setIsOtpVerified]=useState(false);
  const [isOtpSent,setIsOtpSent]=useState(false)
  const [otp,setOtp]=useState("")
  const [correctOtp,setCorrectOtp]=useState("")
  const [wrongOtpWritten,setWrongOtpWritten]=useState(false)

  const [password, setPassword] = useState("");
  const [role, setRole] = useState("jobseeker"); // default role
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user info in localStorage
    const userData = { name, email, password, role, photo };
    localStorage.setItem("registeredUser", JSON.stringify(userData));

    setMessage("Signup successful! Redirecting to login...");
    setTimeout(() => navigate("/login"), 1500);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

   const sendOtp=async(e)=>{
    e.preventDefault()
    
        const url = `${import.meta.env.VITE_BACKEND_URL}/user/sendotp`
        const data={
            email
        }
        const res = await axios(url,{
            method: 'POST',
            mode:"no-cors",
            data
        
        })
        const otpFromServer=res.data.data.toString()
    
        setCorrectOtp(otpFromServer);
        setIsOtpSent(true)

    }

    const verifyOtp=(e)=>{
      e.preventDefault()
        if(otp===correctOtp){
            setIsOtpVerified(true)
        }
        else{
            setWrongOtpWritten(true)
        }
    }

  return (
    <>
      <Navbar type="signup" />

      <div className="flex justify-center items-center min-h-screen bg-gray-50 pt-20">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

          {message && (
            <div className="mb-4 text-green-600 text-sm text-center">{message}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            
          {!isOtpSent &&  <button
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              onClick={sendOtp}
            >
              send Otp
            </button>}


            <div>
              <label className="block text-gray-700">OTP</label>
              <input
                type="number"
                placeholder="Enter your OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {isOtpSent && !isOtpVerified &&  <button
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              onClick={verifyOtp}
            >
              verify Otp
            </button>}
            {wrongOtpWritten && <p className="text-red-600 text-sm">Wrong OTP. Please try again.</p>} 


            {/* Password */}
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-gray-700 mb-2">I am a:</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="jobseeker"
                    checked={role === "jobseeker"}
                    onChange={(e) => setRole(e.target.value)}
                    className="accent-indigo-600"
                  />
                  Job Seeker
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="recruiter"
                    checked={role === "recruiter"}
                    onChange={(e) => setRole(e.target.value)}
                    className="accent-indigo-600"
                  />
                  Recruiter
                </label>
              </div>
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-gray-700 mb-2">Profile Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="w-full"
              />
              {photo && (
                <img
                  src={photo}
                  alt="Preview"
                  className="mt-2 w-24 h-24 rounded-full object-cover border-2 border-indigo-600"
                />
              )}
            </div>

            {/* Submit */}
          { isOtpVerified&& <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Signup
            </button>}
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
