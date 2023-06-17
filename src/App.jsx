import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jobObjects, setJobObjects] = useState([]);
  const APIKEY = "aa115160456297308f78363017280e109ba5dfaa";

  useEffect(() => {
    axios
      .get("https://proxy-findwork-api.glitch.me/api/jobs/", {
        headers: {
          Authorization: `Token ${APIKEY}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => setJobObjects(response.data.results));
  }, []);

  console.log(jobObjects);

  return (
    <>
      <div>
        {jobObjects.map((job) => (
          <div key={job.id}>
            <h2>{job.company_name}</h2>
            <h3>{job.role}</h3>
            <h4>
              {job.employment_type}/{job.date_posted}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
