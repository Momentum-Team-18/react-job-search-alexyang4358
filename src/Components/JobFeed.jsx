import React, { useEffect, useState } from "react";
import axios from "axios";
import JobMoreInfo from "./JobMoreInfo";

// job feed & sorted job feed

const JobFeed = ({ selectedCategory }) => {
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState(0);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    axios
      .get("https://proxy-findwork-api.glitch.me/api/jobs/", {
        headers: {
          Authorization: `Token ${import.meta.env.VITE_FINDWORK_API_KEY}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => setJobs(response.data.results));
  }, []);

  const categoryURL = `https://proxy-findwork-api.glitch.me/api/jobs/?remote=true&search=${selectedCategory}&sort_by=relevance`;

  useEffect(() => {
    axios
      .get(categoryURL, {
        headers: {
          Authorization: `Token ${import.meta.env.VITE_FINDWORK_API_KEY}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => setJobs(response.data.results));
  }, [selectedCategory]);

  const handleToggleMoreInfo = (jobId) => {
    setSelectedJobId(jobId === selectedJobId ? null : jobId);
  };

  return (
    <>
      <div className="flex flex-row pt-8 pl-20 ml-20">
        <div className="grid grid-cols-2 gap-5">
          {jobs.map((job) => (
            <div key={job.id} className="mb-5">
              <div className="flex items-center">
                <h2 className="text-lg font-bold pb-1 border-b-2 border-white w-1/2">
                  {job.role}
                </h2>
              </div>
              <h3 className="text-sm font-semibold text-gray-600">
                {job.company_name}
              </h3>
              <h3 className="text-sm font-semibold text-gray-600">
                {job.date_posted}
              </h3>
              <button
                className="ml-0 mt-2 py-1 px-2 text-sm bg-black-300 rounded"
                onClick={() => handleToggleMoreInfo(job.id)}
              >
                {selectedJobId === job.id ? "Hide Details" : "Details"}
              </button>
              {selectedJobId === job.id && <JobMoreInfo job={job} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobFeed;
