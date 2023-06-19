import React, { useEffect, useState } from "react";
import axios from "axios";
import JobTabs from "./JobTabs";

const JobFeed = ({ selectedCategory }) => {
  const [activeTab, setActiveTab] = useState("");
  const [jobs, setJobs] = useState([]);

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

  const categoryURL = `https://findwork.dev/api/jobs/?remote=true&search=${selectedCategory}&sort_by=relevance`;

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

  console.log(categoryURL);

  return (
    <>
      <JobTabs selectedCategory={selectedCategory} />
      <div className="flex flex-row pt-8 pl-20">
        <div className="h-1/2">
          <div className="h-1/2">
            <ul className="flex justify-center pb-3">
              <p className="pl-1">Job Title</p>
              <p className="pl-4">Company</p>
              <p className="pl-4">Date Posted</p>
            </ul>
          </div>
          {jobs.map((job) => (
            <div key={job.id} className="mb-5">
              <h2 className="text-lg font-bold pb-1 border-b">{job.role}</h2>
              <h3 className="text-sm font-semibold text-gray-600">
                {job.company_name}
              </h3>
              <h3 className="text-sm font-semibold text-gray-600">
                {job.date_posted}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobFeed;

// when a user clicks on a tab, display the jobs that have that keyword.

// when we click on a tab, we are redirected to a new enpoint with the keyword (react, javascript python)
// we got the
