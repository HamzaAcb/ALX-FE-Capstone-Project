import React from "react";
import Header from "@/components/custom/Header";
import FlightSearch from "@/components/custom/FlightSearch";

const Flights = () => {
  return (
    <div className="min-h-screen bg-purple-400">
      <Header />
      <div className="sm:px-10 md:px-32 lg:px-32 xl:px-10 px-5 mt-10">
        <h2 className="font-bold text-3xl">
          {" "}
          Plan Your Next Flight with Ease{" "}
        </h2>
        <p className="mt-3 text-gray-600 text-xl">
          Just provide your travel details and we'll find the best flights for
          you.
        </p>

        <div>
          <div className="mt-10">
            <h2 className="text-xl my-3 font-medium">
              Where would you like to fly?
            </h2>
            <FlightSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
