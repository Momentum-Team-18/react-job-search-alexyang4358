import React, { useState } from "react";

function JobTabs({ setSelectedCategory }) {
  // lifting the state up, passing category from jobsTab to parent component jobFeed.
  // handle div click. when clicked, user is shown a feed of jobs with that keyword.
  // do i need a new endpoint? .
  // how do i get the keyword to be included in the endpoint?
  // how will the input field/search function look. what should it do.

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // this components to grab user selected category.
  // setSelected

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
