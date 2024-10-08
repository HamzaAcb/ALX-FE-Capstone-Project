import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

// Hero component: This section displays a hero banner with a call to action
const Hero = () => {
  return (
    <div className="h-full flex items-center w-1/2 pl-12">
      <div className="text-left">
        {/* Main heading with highlighted text */}
        <h1 className="text-black font-extrabold text-[40px] leading-snug">
          Travel, Enjoy and Live a <span className="text-white">New Life</span>{" "}
          Full of Fun
        </h1>

        {/* Subheading for the hero section */}
        <h2 className="text-black mt-4 text-lg">
          Pack up your bags, book the destination, and live a life of your
          dreams. Best travel planner across the globe.
        </h2>

        {/* Link that navigates to the Flights page wrapped around the "Get Started" button */}
        <Link to={"/Flights"}>
          <Button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-md transition hover:opacity-90">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
