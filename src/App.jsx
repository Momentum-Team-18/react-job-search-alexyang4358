import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import JobFeed from "./Components/JobFeed";

function App() {
  // const [jobs, setJobs] = useState([]);
  // const APIKEY = "aa115160456297308f78363017280e109ba5dfaa";

  // useEffect(() => {
  //   axios
  //     .get("https://proxy-findwork-api.glitch.me/api/jobs/", {
  //       headers: {
  //         Authorization: `Token ${APIKEY}`,
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => setJobs(response.data.results));
  // }, []);

  // console.log(jobs);

  return (
    <>
      <JobFeed />
    </>
  );
}

export default App;

// click on react, the feed of jobs will only show jobs with react included.
// an onClick event listener on the divs.
// on a new endpoint? https://findwork.dev/api/jobs/?remote=true&search=react&sort_by=relevance.

// click on job title, user is shown more details on theh selected job.
