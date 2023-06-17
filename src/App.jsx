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
        <h1>React Job Search</h1>
      </div>
    </>
  );
}

export default App;
