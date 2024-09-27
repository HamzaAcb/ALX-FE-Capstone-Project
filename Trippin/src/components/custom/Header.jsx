import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="p-4 ml-9 flex justify-between items-center">
      <img src="/Logo.svg" />
      <div>
        <Button className="bg-purple-700 mr-2">Sign Up</Button>
        <Button className="bg-black mr-2">Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
