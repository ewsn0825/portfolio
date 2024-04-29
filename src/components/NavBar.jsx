import React from "react";
import logo from "@/assets/logo.jpg";
import logo2 from "@/assets/logo2.png";

function NavBar() {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1>
          <img src={logo2} alt="로고 이미지" className="w-12" />
        </h1>

        <ul className="flex gap-6">
          <li>About</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
