import React from "react";
/* importing the button from shadcn.ui*/
import { Button } from "../ui/button";

/* creating the header section with the trippin logo and signup and signin buttons*/
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
