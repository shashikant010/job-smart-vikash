
import React from "react";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between">
      {/* Job Title & Company */}
      <div>
        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {job.company} • {job.location}
        </p>

        {/* Tags / Skills */}
        {job.tags && job.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {job.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Job Type & Experience */}
        <div className="flex gap-2 mb-2">
          {job.type && (
            <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
              {job.type}
            </span>
          )}
          {job.experience && (
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
              {job.experience}
            </span>
          )}
        </div>

        {/* Match Score */}
        {job.score !== undefined && (
          <div className="mb-4">
            <p className="text-sm text-gray-600">Match Score</p>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${job.score}%` }}
              />
            </div>
            <p className="text-sm text-gray-800 mt-1">{job.score}%</p>
          </div>
        )}

        {/* Short Description */}
        {job.description && (
          <p className="text-gray-700 text-sm mb-4">{job.description}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-2">
        <Link
          to={`/jobs/${job.id}`}
          className="flex-1 text-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          View Details
        </Link>
        <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
}
