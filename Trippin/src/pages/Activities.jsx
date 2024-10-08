import React from "react";
import Header from "@/components/custom/Header";
import PointsOfInterest from "@/components/custom/PointsOfInterest";

const Activities = () => {
  return (
    <div className="min-h-screen bg-purple-400">
      <Header />
      <div className="sm:px-10 md:px-32 lg:px-32 xl:px-10 px-5 mt-10">
        <h2 className="font-bold text-3xl">
          {" "}
          Tell us your travel preferences{" "}
        </h2>
        <p className="mt-3 text-gray-600 text-xl">
          Just provide some basic information about your trip and we will help
          you plan it
        </p>

        <div>
          <div className="mt-10">
            <h2 className="text-xl my-3 font-medium">
              What is your destination of choice
            </h2>
            <PointsOfInterest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
