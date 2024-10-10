import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

/* creating the header section */
const Header = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row items-center">
      {/* Logo aligned to the left */}
      <img
        src="/Logo.svg"
        alt="Logo"
        className="h-12 w-24 md:mr-auto mb-4 md:mb-0"
      />

      {/* Centering the links for larger screens, stacking for smaller screens */}
      <div className="font-bold text-purple-900 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 md:flex-grow justify-center">
        <Link to="/" className="hover:text-purple-500 underline">
          Home
        </Link>
        <Link to="/Flights" className="hover:text-purple-500 underline">
          Flights
        </Link>
        <Link to="/Activities" className="hover:text-purple-500 underline">
          Activities
        </Link>
      </div>
    </div>
  );
};

export default Header;
