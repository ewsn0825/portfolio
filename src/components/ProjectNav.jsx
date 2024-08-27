// import { useState, useEffect } from "react";
// import logo2 from "@/assets/logo2.png";
// // import { Link } from "react-scroll";
// // import { Link } from "react-router-dom";

// import { Link as ScrollLink } from "react-scroll"; // react-scroll의 Link에 별칭 부여
// import { Link as RouterLink } from "react-router-dom"; // react-router-dom의 Link에 별칭 부여

// function ProjectNav() {
//   const [isSticky, setSticky] = useState(false);
//   const [activeLink, setActiveLink] = useState(""); // 클릭된 링크를 추적하는 상태

//   const handleScroll = () => {
//     setSticky(window.scrollY > 0);
//   };

//   const handleSetActive = (link) => {
//     setActiveLink(link); // 클릭된 링크를 설정
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
//         <div className="flex justify-between items-center desktop:p-3 tablet:p-3 mobile:p-3">
//           <RouterLink to="/">
//             <h1 className="mobile:hidden desktop:block">
//               <img
//                 src={logo2}
//                 alt="이재호 포트폴리오"
//                 className="w-12 cursor-pointer bg-transparent"
//               />
//             </h1>
//           </RouterLink>
//           <ul className="flex font-normal desktop:flex-[0.9] desktop:text-base mobile:flex-1 mobile:items-center mobile:justify-evenly mobile:text-xs mobile:gap-3">
//             {["Detail", "Problem & Solution"].map((link) => (
//               <li
//                 key={link}
//                 className={`cursor-pointer ${
//                   activeLink === link ? "font-bold" : ""
//                 }`}
//               >
//                 <ScrollLink
//                   to={link}
//                   smooth={true}
//                   duration={500}
//                   onClick={() => handleSetActive(link)} // Link 컴포넌트에서 직접 함수 호출
//                 >
//                   {link.charAt(0).toUpperCase() + link.slice(1)}
//                 </ScrollLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectNav;

import { useState, useEffect } from "react";
import logo2 from "@/assets/logo2.png";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function ProjectNav() {
  const [isSticky, setSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setSticky(currentScrollY > 0);
    setIsAtTop(currentScrollY === 0);

    if (currentScrollY === 0) {
      setActiveLink("");
    }
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // useEffect(() => {
  //   scrollSpy.update();
  // }, [activeLink]);

  return (
    <div
      className={`${
        isSticky
          ? "sticky top-0 z-50 shadow bg-opacity-80 backdrop-blur transition-blur"
          : ""
      } bg-white w-full`}
    >
      <div className="m-auto desktop:px-24 tablet:px-2">
        <div className="flex justify-between items-center desktop:p-3 tablet:p-3 mobile:p-3">
          <RouterLink to="/">
            <h1 className="desktop:w-12 tablet:w-10 mobile:w-8">
              <img
                src={logo2}
                alt="이재호 포트폴리오"
                className="cursor-pointer bg-transparent"
              />
            </h1>
          </RouterLink>
          <ul className="flex font-light desktop:flex-[0.9] desktop:text-base tablet:text-base mobile:flex-1 mobile:items-center mobile:justify-evenly mobile:text-sm mobile:gap-3">
            {["Detail", "Problem & Solution"].map((link) => (
              <li
                key={link}
                className={`cursor-pointer transition-all duration-300 ${
                  activeLink === link.replace(/_/g, " ") && !isAtTop
                    ? "font-bold"
                    : "font-normal"
                }`}
              >
                <ScrollLink
                  to={link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  activeClass="font-bold"
                  onSetActive={handleSetActive}
                >
                  {link}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectNav;
