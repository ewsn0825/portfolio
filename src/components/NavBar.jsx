// import { useState, useEffect } from "react";
// import logo2 from "@/assets/logo2.png";
// import { Link } from "react-scroll";

// function NavBar() {
//   const [isSticky, setSticky] = useState(false);

//   const handleScroll = () => {
//     // 스크롤 위치가 0보다 크면 true로 설정하여 NavBar를 고정시킵니다.
//     setSticky(window.scrollY > 0);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <div
//       className={`${
//         isSticky
//           ? "sticky top-0 z-50 shadow bg-opacity-80 backdrop-blur transition-blur"
//           : ""
//       } bg-white w-full`}
//     >
//       <div className="desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] m-auto">
//         <div className="flex justify-between items-center desktop:p-5 tablet:p-3 mobile:p-3">
//           <Link to="header" smooth={true} duration={500}>
//             <h1 className="mobile:hidden desktop:block">
//               <img
//                 src={logo2}
//                 alt="이재호 포트폴리오"
//                 className="w-12 cursor-pointer bg-transparent"
//               />
//             </h1>
//           </Link>
//           <ul className="flex desktop:gap-7 font-medium desktop:flex-[0] desktop:text-base mobile:flex-1 mobile:items-center mobile:justify-evenly mobile:text-xs mobile:gap-3">
//             <li className="cursor-pointer">
//               <Link to="about" smooth={true} duration={500}>
//                 About
//               </Link>
//             </li>
//             <li className="cursor-pointer">
//               <Link to="experience" smooth={true} duration={500}>
//                 Experience
//               </Link>
//             </li>
//             <li className="cursor-pointer">
//               <Link to="skills" smooth={true} duration={500}>
//                 Skills
//               </Link>
//             </li>
//             <li className="cursor-pointer">
//               <Link to="projects" smooth={true} duration={500}>
//                 Projects
//               </Link>
//             </li>
//             <li className="cursor-pointer">
//               <Link to="contact" smooth={true} duration={500}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavBar;


import { useState, useEffect } from "react";
import logo2 from "@/assets/logo2.png";
import { Link } from "react-scroll";

function NavBar() {
  const [isSticky, setSticky] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // 클릭된 링크를 추적하는 상태

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  const handleSetActive = (link) => {
    setActiveLink(link); // 클릭된 링크를 설정
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isSticky ? "sticky top-0 z-50 shadow bg-opacity-80 backdrop-blur transition-blur" : ""
      } bg-white w-full`}
    >
      <div className="desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] m-auto">
        <div className="flex justify-between items-center desktop:p-5 tablet:p-3 mobile:p-3">
          <Link to="header" smooth={true} duration={500}>
            <h1 className="mobile:hidden desktop:block">
              <img
                src={logo2}
                alt="이재호 포트폴리오"
                className="w-12 cursor-pointer bg-transparent"
              />
            </h1>
          </Link>
          <ul className="flex desktop:gap-7 font-normal desktop:flex-[0] desktop:text-base mobile:flex-1 mobile:items-center mobile:justify-evenly mobile:text-xs mobile:gap-3">
            {["about", "experience", "skills", "projects", "contact"].map((link) => (
              <li
                key={link}
                className={`cursor-pointer ${
                  activeLink === link ? "font-bold" : ""
                }`}
              >
                <Link 
                  to={link} 
                  smooth={true} 
                  duration={500}
                  onClick={() => handleSetActive(link)} // Link 컴포넌트에서 직접 함수 호출
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
