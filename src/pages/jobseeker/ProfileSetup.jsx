import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function ProfileSetup() {
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    email: "",
    gender: "",
    mobile: "",
    dob: "",
    // Skills
    skills: "",
    // Work Experience
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    // Education
    institution: "",
    degree: "",
    startYear: "",
    endYear: "",
    // Achievements
    achievements: "",
    // Certificates
    certificates: [],
    // Job Preference
    jobType: "",
    location: "",
    // CV
    cv: null,
  });

  const [openSection, setOpenSection] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData({ ...formData, cv: files[0] });
    } else if (name === "certificates") {
      setFormData({ ...formData, certificates: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", formData);
    alert("Profile saved successfully!");
  };

  return (
    <>
      <Navbar type="profilesetup" />
      <div className="flex justify-center items-center min-h-screen bg-gray-50 pt-16">
        <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-center mb-6">Profile Setup</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              {
                key: "personal",
                title: "Personal Information",
                content: (
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="px-4 py-2 border rounded-lg w-full"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="px-4 py-2 border rounded-lg w-full"
                    />
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="px-4 py-2 border rounded-lg w-full"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      className="px-4 py-2 border rounded-lg w-full"
                    />
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="px-4 py-2 border rounded-lg w-full"
                    />
                  </div>
                ),
              },
              {
                key: "skills",
                title: "Skills",
                content: (
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full mt-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="e.g. React, Node.js, Python"
                  />
                ),
              },
              {
                key: "work",
                title: "Work Experience",
                content: (
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="Job Title"
                      className="px-4 py-2 border rounded-lg w-full"
                    />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company"
                      className="px-4 py-2 border rounded-lg w-full"
                    />
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="px-4 py-2 border rounded-lg w-full"
                    />
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      className="px-4 py-2 border rounded-lg w-full"
                    />
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Description of your role and accomplishments"
                      className="col-span-2 w-full mt-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                ),
              },
              {
                key: "education",
                title: "Education",
                content: (
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      placeholder="Institution"
                      className="px-4 py-2 border rounded-lg w-full"
                    />
                    <input
                      type="text"
                      name="degree"
                      value={formData.degree}
                      onChange={handleChange}
                      placeholder="Degree"
                      className="px-4 py-2 border rounded-lg w-full"
                    />
                    <input
                      type="text"
                      name="startYear"
                      value={formData.startYear}
                      onChange={handleChange}
                      placeholder="Start Year"
                      className="px-4 py-2 border rounded-lg w-full"
                    />
                    <input
                      type="text"
                      name="endYear"
                      value={formData.endYear}
                      onChange={handleChange}
                      placeholder="End Year"
                      className="px-4 py-2 border rounded-lg w-full"
                    />
                  </div>
                ),
              },
              {
                key: "achievements",
                title: "Achievements",
                content: (
                  <textarea
                    name="achievements"
                    value={formData.achievements}
                    onChange={handleChange}
                    placeholder="e.g. Certifications, Awards, Hackathons"
                    className="w-full mt-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                ),
              },
              {
                key: "certificates",
                title: "Certificates",
                content: (
                  <div className="mt-3">
                    <input
                      type="file"
                      name="certificates"
                      multiple
                      accept=".pdf,.jpg,.png,.jpeg"
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    {formData.certificates.length > 0 && (
                      <ul className="text-sm text-gray-600 mt-2 list-disc list-inside">
                        {formData.certificates.map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ),
              },
              {
                key: "preference",
                title: "Job Preference",
                content: (
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <select
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleChange}
                      className="px-4 py-2 border rounded-lg w-full"
                    >
                      <option value="">Select Job Type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Internship">Internship</option>
                    </select>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Preferred Job Location"
                      className="px-4 py-2 border rounded-lg w-full"
                    />
                  </div>
                ),
              },
              {
                key: "cv",
                title: "Upload CV",
                content: (
                  <div className="mt-3">
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    {formData.cv && (
                      <p className="text-sm text-gray-600 mt-1">
                        Selected file: {formData.cv.name}
                      </p>
                    )}
                  </div>
                ),
              },
            ].map((section) => (
              <div key={section.key}>
                <button
                  type="button"
                  onClick={() => toggleSection(section.key)}
                  className="w-full flex justify-between items-center px-4 py-3 text-lg font-semibold bg-gray-100 rounded-lg"
                >
                  {section.title}
                  <span>{openSection === section.key ? "−" : "+"}</span>
                </button>
                {openSection === section.key && (
                  <div className="px-2">{section.content}</div>
                )}
              </div>
            ))}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
