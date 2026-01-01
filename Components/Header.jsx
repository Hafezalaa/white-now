import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [scrolled, setScrolled] = useState(30);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [navOpen, setNavOpen] = useState(false);
  const handleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div
      className={`${
        scrolled ? "bg-[#62afdb] shadow z-20" : "bg-transparent  z-20"
      }  fixed top-0 w-full h-fit z-20 transition-colors duration-300`}
    >
      <div className="md:hidden fixed top-8 left-8 ">
        {!navOpen ? (
          <RxDropdownMenu
            size={26}
            className="hover:pointer-coarse  text-slate-900 hover:cursor-pointer"
            onClick={handleNav}
          ></RxDropdownMenu>
        ) : (
          <IoMdClose
            size={26}
            className="hover:pointer-coarse text-slate-900 hover:cursor-pointer"
            onClick={handleNav}
          ></IoMdClose>
        )}
      </div>
      <div
        className={`${
          !scrolled
            ? "text-slate-700 hidden md:flex "
            : "text-white hidden md:flex  "
        } " md:ml-30 place-items-center w-[750px] h-20 pl-10 "`}
      >
        <NavLink className="hover:text-slate-800 hover:scale-125 pr-12" to="">
          Startseite
        </NavLink>
        <NavLink className="hover:text-slate-800 hover:scale-125 pr-12" to="">
          Dienstleistungen
        </NavLink>
        <NavLink className="hover:text-slate-800 hover:scale-125 pr-12" to="">
          Portfolio
        </NavLink>
        <NavLink className="hover:text-slate-800 hover:scale-125 pr-12" to="">
          Über uns
        </NavLink>
        <NavLink className="hover:text-slate-800 hover:scale-125 pr-12" to="">
          Kontakt
        </NavLink>
      </div>
      <div className="md:hidden bg-white flex flex-col place-items-start w-full h-fit pl-10 mt-16 transition-all duration-300">
        {navOpen ? (
          <>
            <NavLink
              className="text-slate-700 hover:scale-y-125 h-16 w-full mt-4"
              to=""
            >
              Startseite
            </NavLink>
            <NavLink
              className="text-slate-700 hover:scale-y-125 h-16 w-full mt-4"
              to=""
            >
              Dienstleistungen
            </NavLink>
            <NavLink
              className="text-slate-700 hover:scale-y-125 h-16 w-full mt-4"
              to=""
            >
              Portfolio
            </NavLink>
            <NavLink
              className="text-slate-700 hover:scale-y-125 h-16 w-full mt-4"
              to=""
            >
              Über uns
            </NavLink>
            <NavLink
              className="text-slate-700 hover:scale-y-125 h-16 w-full mt-4"
              to=""
            >
              Kontakt
            </NavLink>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
