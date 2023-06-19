import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import JobFeed from "./Components/JobFeed";
import JobTabs from "./Components/JobTabs";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <>
      <JobFeed selectedCategory={selectedCategory} />
      <JobTabs setSelectedCategory={setSelectedCategory} />
    </>
  );
}

export default App;

// click on react, the feed of jobs will only show jobs with react included.
// an onClick event listener on the divs.
// on a new endpoint? https://findwork.dev/api/jobs/?remote=true&search=react&sort_by=relevance.

// click on job title, user is shown more details on theh selected job.
