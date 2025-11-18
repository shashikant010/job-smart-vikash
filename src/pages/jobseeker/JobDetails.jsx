import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

// Same jobs array for simplicity
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    type: "Full-time",
    experience: "Mid-level",
    description: "Build modern UIs using React, Tailwind, and TypeScript.",
    skills: ["React", "Tailwind", "TypeScript", "REST APIs"],
    responsibilities: [
      "Develop responsive web applications",
      "Collaborate with UX/UI designers",
      "Optimize components for performance",
    ],
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Global Innovations Ltd.",
    location: "New York, NY",
    type: "Full-time",
    experience: "Senior",
    description: "Work with Node.js, Express, and MongoDB to design scalable APIs.",
    skills: ["Node.js", "Express", "MongoDB", "API Design"],
    responsibilities: [
      "Build scalable backend services",
      "Ensure API security and performance",
      "Collaborate with frontend developers",
    ],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Design Dynamics",
    location: "Remote",
    type: "Part-time",
    experience: "Junior",
    description: "Create wireframes, prototypes, and collaborate with developers.",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
    responsibilities: [
      "Design user-friendly interfaces",
      "Create wireframes and mockups",
      "Collaborate with development team",
    ],
  },
];

export default function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id));

  if (!job)
    return (
      <p className="text-center text-red-600 mt-20 text-lg font-semibold">
        Job not found!
      </p>
    );

  return (
    <>
      <Navbar type="jobdetails" />
      <div className="pt-16 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {job.title}
            </h1>
            <p className="text-gray-700 text-lg mb-1">
              {job.company} — {job.location}
            </p>
            <div className="flex flex-wrap gap-3 my-3">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                {job.type}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                {job.experience} Level
              </span>
            </div>
            <p className="text-gray-600 mb-6">{job.description}</p>

            {/* Responsibilities */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Actions */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                Apply Now
              </button>
              <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-300 transition">
                Save Job
              </button>
            </div>

            <Link
              to="/jobs"
              className="block text-center text-indigo-600 font-medium hover:underline"
            >
              ← Back to Jobs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
