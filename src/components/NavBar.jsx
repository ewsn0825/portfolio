import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-scroll";

const NAV_LINKS = [
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

function NavBar() {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    const handleResize = () => {
      const activeLink = document.querySelector(".active-nav-link");
      if (activeLink) updateIndicator(activeLink.getAttribute("data-to"));
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
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
    setIsMenuOpen(false);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 600);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isSticky || isMenuOpen
          ? "border-b border-gray-800 bg-[#050505]/95 py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="relative mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 md:px-12">
        <Link
          to="header"
          smooth={true}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
          className="cursor-pointer"
        >
          <h1 className="text-lg font-bold tracking-wider text-white transition-colors hover:text-cyan-400 font-gm md:text-2xl">
            Largon<span className="text-cyan-400">.</span>
          </h1>
        </Link>

        <button
          type="button"
          aria-label="메뉴 열기"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-gray-700 text-slate-100 transition-colors hover:border-cyan-400 hover:text-cyan-300 md:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <ul className="relative hidden items-center gap-10 text-base font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.to}
              className="py-2"
              ref={(element) => {
                navRefs.current[link.to] = element;
              }}
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onSetActive={handleSetActive}
                onClick={() => handleNavClick(link.to)}
                activeClass="text-cyan-300 active-nav-link"
                data-to={link.to}
                className="block cursor-pointer text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <div
            className="absolute bottom-0 h-0.5 bg-cyan-300 transition-all duration-300 ease-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity,
            }}
          />
        </ul>

        {isMenuOpen && (
          <ul
            id="mobile-navigation"
            className="absolute left-5 right-5 top-[calc(100%+0.75rem)] rounded-2xl border border-gray-700 bg-[#0d1422] p-2 shadow-2xl md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => handleNavClick(link.to)}
                  className="flex min-h-11 cursor-pointer items-center rounded-xl px-4 text-base font-medium text-slate-200 transition-colors hover:bg-cyan-400/10 hover:text-cyan-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
