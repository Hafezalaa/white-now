import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`${
        scrolled ? "bg-white shadow" : "bg-transparent"
      } fixed top-0 w-full h-16 transition-colors duration-300 place-content-center pl-10`}
    >
      <div className="hidden md:flex justify-between  md:w-[70%] lg:w-[70%] pl-30">
        <NavLink>Startseite</NavLink>
        <NavLink>Dienstleistungen</NavLink>
        <NavLink>Portfolio</NavLink>
        <NavLink>Über uns</NavLink>
        <NavLink>Kontakt</NavLink>
      </div>
    </div>
  );
};

export default Header;
