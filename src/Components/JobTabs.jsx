import React, { useState } from "react";

function JobTabs() {
  // handle div click. when clicked, user is shown a feed of jobs with that keyword.
  // do i need a new endpoint? .
  // how do i get the keyword to be included in the endpoint?
  // how will the input field/search function look. what should it do.

  const [seletectedCategory, setSelectedCategory] = useState("");
  const [jobsByCategory, setJobsByCategory] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="flex flex-col items-center pt-9 pl-10">
        <div className="w-1/2 flex flex-row">
          <div
            onClick={() => handleCategoryClick("react")}
            className="text-lg font-bold pb-2 pr-4 cursor-pointer"
          >
            React
          </div>
          <div
            onClick={() => handleCategoryClick("django")}
            className="text-lg font-bold pb-2 pr-4 cursor-pointer"
          >
            Django
          </div>
          <div
            onClick={() => handleCategoryClick("python")}
            className="text-lg font-bold pb-2 pr-4 cursor-pointer"
          >
            Python
          </div>
          <div
            onClick={() => handleCategoryClick("javascript")}
            className="text-lg font-bold pb-2 pr-4 cursor-pointer"
          >
            Javascript
          </div>
          <div className="text-lg font-bold pb-2 cursor-pointer">Random</div>
        </div>
        <div className="mt-4">
          <input
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default JobTabs;

// random think about importing shuffle from trivia project
