import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function JobMoreInfo({ job }) {
  console.log(job);
  return (
    <>
      <div>
        <p>{job.company_name}</p>
        <p>{job.employment_type}</p>
      </div>
    </>
  );
}
export default JobMoreInfo;

// when a user clicks on the job title, it is replaced with a detailed version of job posting.
// the purpose of the JobMoreInfo component is to display more information about the job.
// the user should also be able to return back to list of jobs from the detailed view.
