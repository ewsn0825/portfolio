import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-scroll";

const NAV_LINKS = ["about", "experience", "skills", "projects", "contact"];

function NavBar() {
  const [isSticky, setSticky] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navRefs = useRef({});
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const scrollFrame = useRef(null);
  const stickyState = useRef(false);

  const updateIndicator = useCallback((to) => {
    const activeElement = navRefs.current[to];
    if (activeElement) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
        opacity: 1,
      });
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollFrame.current) return;

    scrollFrame.current = window.requestAnimationFrame(() => {
      const nextSticky = window.scrollY > 10;
      if (stickyState.current !== nextSticky) {
        stickyState.current = nextSticky;
        setSticky(nextSticky);
      }
      scrollFrame.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 리사이즈 시 인디케이터 위치 재조정 (화면 크기가 변할 때 선이 어긋나는 것 방지)
    const handleResize = () => {
      const activeLink = document.querySelector(".active-nav-link");
      if (activeLink) {
        const to = activeLink.getAttribute("data-to");
        updateIndicator(to);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (scrollFrame.current) window.cancelAnimationFrame(scrollFrame.current);
    };
  }, [handleScroll, updateIndicator]);

  const handleSetActive = (to) => {
    if (isClickScrolling.current) return;
    updateIndicator(to);
  };

  const handleNavClick = (to) => {
    isClickScrolling.current = true;
    updateIndicator(to);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 600);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isSticky
          ? "bg-[#050505]/80 backdrop-blur-md border-b border-gray-800 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* ✨ 모든 섹션과 동일한 1200px 공통 레이아웃 적용 */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link
          to="header"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <h1 className="hidden md:block font-gm font-bold text-2xl text-white tracking-wider hover:text-cyan-400 transition-colors">
            Largon<span className="text-cyan-500">.</span>
          </h1>
        </Link>

        <ul className="relative flex flex-1 md:flex-none justify-between md:justify-end md:gap-10 items-center text-sm md:text-base font-medium">
          {NAV_LINKS.map((link) => (
            <li
              key={link}
              className="py-2"
              ref={(el) => (navRefs.current[link] = el)}
            >
              <Link
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onSetActive={handleSetActive}
                onClick={() => handleNavClick(link)}
                activeClass="text-cyan-400 active-nav-link"
                data-to={link}
                className="cursor-pointer text-gray-400 hover:text-white transition-colors block"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
          <div
            className="absolute bottom-0 h-[2px] bg-cyan-400 transition-all duration-300 ease-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity,
            }}
          />
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
