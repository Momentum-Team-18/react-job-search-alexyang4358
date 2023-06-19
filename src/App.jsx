import { useState, useEffect } from "react";
import "./App.css";
import JobFeed from "./Components/JobFeed";
import JobTabs from "./Components/JobTabs";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log(selectedCategory);
  return (
    <>
      <JobTabs setSelectedCategory={setSelectedCategory} />
      <JobFeed selectedCategory={selectedCategory} />
    </>
  );
}

export default App;

// click on react, the feed of jobs will only show jobs with react included.
// an onClick event listener on the divs.
// on a new endpoint? https://findwork.dev/api/jobs/?remote=true&search=react&sort_by=relevance.

// click on job title, user is shown more details on theh selected job.
