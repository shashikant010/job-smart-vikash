import { Routes, Route } from "react-router-dom";
import Home from "./pages/jobseeker/Home";
import Login from "./pages/authen/Login";
import Signup from "./pages/authen/Signup";
import Jobs from "./pages/jobseeker/Jobs";
import JobDetails from "./pages/jobseeker/JobDetails";
import ProfileSetup from "./pages/jobseeker/ProfileSetup";
import Setting from "./pages/jobseeker/Setting";
import RecommendedJobs from "./pages/jobseeker/RecommendedJobs";
import MyApplication from "./pages/jobseeker/MyApplication";
import Footer from "./components/Footer";
import JobCard from "./components/JobCard";
import Dashboard from "./pages/jobseeker/Dashboard";
import Networking from "./pages/jobseeker/Networking";
import Postjob from "./pages/employer/Postjob";
import RecApp from "./pages/employer/RecApp";
import RecDash from "./pages/employer/RecDash";
import ManageJob from "./pages/employer/ManageJob"
import Comprofile from "./pages/employer/Comprofile";
import Recsetting from "./pages/employer/Recsetting";
import About from "./pages/jobseeker/About";
import Courses from "./pages/jobseeker/Courses";
import Help from "./pages/jobseeker/Help";



export default function App() {
  return (
    <>
      
      <div className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/setting" element={<Setting />} /> 
          <Route path="/recommended-jobs" element={<RecommendedJobs />} />
          <Route path="/my-applications" element={<MyApplication />} />
          <Route path="/jobcard" element={<JobCard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Networking" element={<Networking />} />
          <Route path="/about" element={<About />} />        
           <Route path="/managejob" element={<ManageJob/>} /> 
          <Route path="/recapp" element={<RecApp />} />
          <Route path="/recdash" element={<RecDash />} />
          <Route path="/postjob" element={<Postjob/>} />
          <Route path="/recsetting" element={<Recsetting/>} />
           <Route path="/comprofile" element={<Comprofile/>} />
          <Route path="/courses" element={<Courses/>} />
           <Route path="/help" element={<Help/>} />
              
          
          


        </Routes>
      </div>
      <Footer />
    </>
  );
}
