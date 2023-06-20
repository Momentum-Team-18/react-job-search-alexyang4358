import React, { useState } from "react";

function JobTabs({ setSelectedCategory }) {
  // lifting the state up, passing category from jobsTab to parent component jobFeed.
  // handle div click. when clicked, user is shown a feed of jobs with that keyword.
  // how will the input field/search function look. what should it do.

  const [selectedTab, setSelectedTab] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedTab(category);
  };

  // this components to grab user selected category.
  // capturing what we click and passing props up into our parent component.

  return (
    <>
      <div className="flex flex-col items-center pt-9 pl-10">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          react-job-search
        </h1>
        <div className="w-1/2 flex flex-row">
          <div
            onClick={() => handleCategoryClick("react")}
            className={`text-lg font-bold pb-2 pr-4 cursor-pointer ${
              selectedTab === "react" ? "text-green-500" : ""
            }`}
          >
            React
          </div>
          <div
            onClick={() => handleCategoryClick("django")}
            className={`text-lg font-bold pb-2 pr-4 cursor-pointer ${
              selectedTab === "django" ? "text-green-500" : ""
            }`}
          >
            Django
          </div>
          <div
            onClick={() => handleCategoryClick("python")}
            className={`text-lg font-bold pb-2 pr-4 cursor-pointer ${
              selectedTab === "python" ? "text-green-500" : ""
            }`}
          >
            Python
          </div>
          <div
            onClick={() => handleCategoryClick("javascript")}
            className={`text-lg font-bold pb-2 pr-4 cursor-pointer ${
              selectedTab === "javascript" ? "text-green-500" : ""
            }`}
          >
            JavaScript
          </div>
          <div
            onClick={() => handleCategoryClick("random")}
            className={`text-lg font-bold pb-2 cursor-pointer ${
              selectedTab === "random" ? "text-green-500" : ""
            }`}
          >
            Random
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center w-full">
          <input
            placeholder="Search..."
            className="w-4/5 px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default JobTabs;

// random think about importing shuffle from trivia project
