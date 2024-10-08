import React from "react";
import Header from "@/components/custom/Header"; // Importing the custom header component
import PointsOfInterest from "@/components/custom/PointsOfInterest"; // Importing the PointsOfInterest component

// Main Activities component
const Activities = () => {
  return (
    <div className="min-h-screen bg-purple-400">
      {" "}
      {/* Full screen container with background color */}
      <Header /> {/* Display the header at the top */}
      <div className="sm:px-10 md:px-32 lg:px-32 xl:px-10 px-5 mt-10">
        {/* Main heading for the page */}
        <h2 className="font-bold text-3xl">
          {" "}
          Tell us your travel preferences{" "}
        </h2>
        {/* Brief instruction to the user */}
        <p className="mt-3 text-gray-600 text-xl">
          Just provide some basic information about your trip and we will help
          you plan it
        </p>

        <div>
          <div className="mt-10">
            {/* Subheading for the destination input */}
            <h2 className="text-xl my-3 font-medium">
              What is your destination of choice
            </h2>
            {/* Including the PointsOfInterest component */}
            <PointsOfInterest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
