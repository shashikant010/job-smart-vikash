import Navbar from "../../components/Navbar";

export default function Help() {
  return (
    <>
      <Navbar type="dashboard" />
      <div className="p-3 pt-10 min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Help Center</h2>
        <p className="text-gray-600">For assistance, email support@job-smart.com or check our FAQ.</p>
      </div>
    </>
  );
}
