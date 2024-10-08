import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa"; // Icons for social media

const Footer = () => {
  return (
    <footer className="bg-purple-100 py-10">
      <div className="container mx-auto flex justify-between items-start">
        {/* Left Section */}
        <div className="pl-10">
          <img src="/Logo.svg" />
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam.
          </p>
          <div className="flex space-x-4">
            <FaFacebookF className="text-purple-500 cursor-pointer" />
            <FaTwitter className="text-purple-500 cursor-pointer" />
            <FaInstagram className="text-purple-500 cursor-pointer" />
            <FaLinkedinIn className="text-purple-500 cursor-pointer" />
            <FaYoutube className="text-purple-500 cursor-pointer" />
          </div>
        </div>

        {/* Right Section */}
        <div className="text-left pr-10">
          <h3 className="text-lg font-bold mb-4">Contacts us</h3>
          <p className="text-gray-600 mb-2">
            <span className="font-bold text-purple-500">Email : </span>{" "}
            contact@trippin.com
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold text-purple-500">Phone : </span> (90)
            4747-4747
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold text-purple-500">Location : </span> 794
            Mcallister St <br />
            San Francisco, 94102
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-purple-200 pt-4 text-center">
        <p className="text-gray-500">
          Copyright Free Designed by Hamza Acb © 2024
        </p>
        <p className="text-gray-500 mt-2">
          All Rights Reserved |{" "}
          <a href="#" className="text-purple-500">
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="text-purple-500">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
