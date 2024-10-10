import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

/* creating the header section */
const Header = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <img src="/Logo.svg" alt="Logo" className="h-12 w-24" />

      {/* Centering the links */}
      <div className="font-bold text-purple-900 flex-grow flex justify-center space-x-8 ">
        <Link to="/" className=" hover:text-purple-500 underline">
          Home
        </Link>
        <Link to="/Flights" className=" hover:text-purple-500 underline">
          Flights
        </Link>
        <Link to="/Activities" className=" hover:text-purple-500 underline">
          Activities
        </Link>
      </div>
    </div>
  );
};

export default Header;
