import { useState, useEffect } from "react";
import logo2 from "@/assets/logo2.png";
import { Link } from "react-scroll";

function NavBar() {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    // 스크롤 위치가 0보다 크면 true로 설정하여 NavBar를 고정시킵니다.
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${isSticky ? "sticky top-0 z-50 shadow" : ""} bg-white `}>
      <div className="desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] m-auto flex justify-between items-center desktop:p-5 tablet:p-3 mobile:p-3">
        <Link to="header" smooth={true} duration={500}>
          <h1 className="mobile:hidden desktop:block">
            <img
              src={logo2}
              alt="로고 이미지"
              className="w-12 cursor-pointer"
            />
          </h1>
        </Link>

        <ul className="flex gap-6 font-semibold desktop:flex-[0] mobile:flex-1 mobile:items-center mobile:justify-evenly mobile:text-xs mobile:gap-3">
          <li className="cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
