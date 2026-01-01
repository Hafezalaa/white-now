import { NavLink } from "react-router-dom";
import SiteMapMenu from "./Map.jsx";

const Footer = () => {
  return (
    <div className="h-160 w-full">
      <div className="h-140 w-full bg-sky-900  p-8">
        
        <SiteMapMenu/>
      </div>



      <div className="h-20 bg-sky-100 w-full flex place-content-between text-slate-900 place-items-center px-16">
        <div>
          &copy; {new Date().getFullYear()} White Now Gebäudereinigung. Alle
          Rechte vorbehalten.
        </div>
        <div className="w-[20%] flex place-content-around">
          <NavLink className="hover:text-sky-900 hover:scale-125">
            Impressum
          </NavLink>
          <NavLink className="hover:text-sky-900 hover:scale-125">
            DatenSchutz
          </NavLink>
          <NavLink className="hover:text-sky-900 hover:scale-125">AGB</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
