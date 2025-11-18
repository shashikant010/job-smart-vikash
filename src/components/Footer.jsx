import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-black/70 text-black py-5 mt-0 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <p className="text-sm text-black">
          &copy; {new Date().getFullYear()} JobSmart. All rights reserved.
        </p>

        {/* Right Side */}
        <div className="flex gap-4 mt-3 md:mt-0 text-sm">
          <Link to="/about" className="hover:underline hover:text-gray-600 transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="hover:underline hover:text-gray-600 transition-colors">
            Contact
          </Link>
          <Link to="/privacy-policy" className="hover:underline hover:text-gray-600 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
