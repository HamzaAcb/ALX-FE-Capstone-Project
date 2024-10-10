import React from "react";
import Header from "@/components/custom/Header"; // Importing the custom header component
import PointsOfInterest from "@/components/custom/PointsOfInterest"; // Importing the PointsOfInterest component
import Footer from "@/components/custom/Footer";

// Main Activities component
const Activities = () => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-200">
      {/* Full screen container with background color */}
      <Header /> {/* Display the header at the top */}
      {/* Main content container with responsive padding */}
      <div className="flex-grow sm:px-10 md:px-32 lg:px-32 xl:px-10 px-5 mt-10">
        {/* Main heading for the page */}
        <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
        {/* Brief instruction to the user */}
        <p className="mt-3 text-gray-600 text-xl">
          Just provide some basic information about your trip and we will help
          you plan it.
        </p>

        <div className="mt-10 mb-10">
          {/* Subheading for the destination input */}
          <h2 className="text-xl my-3 font-medium">
            What is your destination of choice
          </h2>
          {/* Including the PointsOfInterest component */}
          <PointsOfInterest />
        </div>
      </div>
      {/* Footer positioned at the bottom with margin on top and full width */}
      <Footer />
    </div>
  );
};

export default Activities;
