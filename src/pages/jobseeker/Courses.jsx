import Navbar from "../../components/Navbar";

const courses = [
  { id: 1, title: "React for Beginners", skill: "React", link: "#" },
  { id: 2, title: "Advanced Node.js", skill: "Node.js", link: "#" },
];

export default function Courses() {
  return (
    <>
      <Navbar type="dashboard" />
      <div className="p-6 pt-20 min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Recommended Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.skill}</p>
              </div>
              <a
                href={course.link}
                className="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Enroll
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
