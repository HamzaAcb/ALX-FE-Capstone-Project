import React from "react";
import Header from "@/components/custom/Header"; // Importing the custom Header component
import FlightSearch from "@/components/custom/FlightSearch"; // Importing the FlightSearch component
import Footer from "@/components/custom/Footer";

// Main Flights component
const Flights = () => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-200">
      {/* Full page container with a background color */}
      <Header /> {/* Display the Header at the top */}
      {/* Main content container with responsive padding */}
      <div className="flex-grow sm:px-10 md:px-32 lg:px-32 xl:px-10 px-5 mt-10">
        {/* Main heading for the flight search section */}
        <h2 className="font-bold text-3xl">Plan Your Next Flight with Ease</h2>

        {/* Subheading providing additional instructions for the user */}
        <p className="mt-3 text-gray-600 text-xl">
          Just provide your travel details and we'll find the best flights for
          you.
        </p>

        <div className="mt-10 mb-10">
          {/* Subheading for the flight search input */}
          <h2 className="text-xl my-3 font-medium">
            Where would you like to fly?
          </h2>

          {/* Include the FlightSearch component for the flight search functionality */}
          <FlightSearch />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Flights;
