import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="h-full flex items-center w-1/2 pl-12">
      <div className="text-left">
        <h1 className="text-black font-extrabold text-[40px] leading-snug">
          Travel, Enjoy and Live a <span className="text-white">New Life</span>{" "}
          Full of Fun
        </h1>
        <h2 className="text-black mt-4 text-lg">
          Pack up your bags, book the destination, and live a life of your
          dreams. Best travel planner across the globe.
        </h2>
        <Button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-md transition hover:opacity-90">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
