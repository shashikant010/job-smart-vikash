import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/EmployerNavbar";

export default function PostJob() {
  const navigate = useNavigate();
  const location = useLocation();

  const jobToEdit = location.state?.job || null;

  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    experience: "",
    skills: "",
    description: "",
  });

  useEffect(() => {
    if (jobToEdit) {
      setJobData(jobToEdit);
    }
  }, [jobToEdit]);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(jobToEdit ? "Job updated successfully!" : "Job posted successfully!");
    navigate("/managejob"); // go back to Manage Jobs
  };

  return (
    <>
      <Navbar type="recdash" />
      <div className="flex justify-center items-center min-h-screen bg-gray-50 pt-16">
        <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6">
            {jobToEdit ? "Edit Job" : "Post a Job"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="title" placeholder="Job Title" value={jobData.title} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
            <input type="text" name="company" placeholder="Company Name" value={jobData.company} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
            <input type="text" name="location" placeholder="Location" value={jobData.location} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
            <select name="type" value={jobData.type} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required>
              <option value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
            </select>
            <select name="experience" value={jobData.experience} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required>
              <option value="">Select Experience Level</option>
              <option value="Junior">Junior</option>
              <option value="Mid-level">Mid-level</option>
              <option value="Senior">Senior</option>
            </select>
            <input type="text" name="skills" placeholder="Required Skills" value={jobData.skills} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
            <textarea name="description" placeholder="Job Description" value={jobData.description} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" rows={4} />
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">{jobToEdit ? "Update Job" : "Post Job"}</button>
          </form>
        </div>
      </div>
    </>
  );
}
