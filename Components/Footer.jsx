import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className="h-100 w-full">
<div className="absolute left-6  w-48 h-48 bg-white/10 rounded-[60%_90%_75%_70%] " />
<div className="absolute left-36 mt-20 w-48 h-48 bg-white/20 rounded-[75%_70%_60%_90%] " />

      <div className="h-80 w-full bg-sky-900  p-4">
        
        {/* <SiteMapMenu/> */}
      </div>


      <div className="h-20 bg-sky-100 w-full flex place-content-between text-slate-900 place-items-center px-16">
        <div>
          &copy; {new Date().getFullYear()} White Now Gebäudereinigung. Alle
          Rechte vorbehalten.
        </div>
        <div className="w-[20%] flex place-content-around">
          <NavLink to="imprint" className="hover:text-sky-900 hover:scale-110">
            Impressum
          </NavLink>
          <NavLink to="data" className="hover:text-sky-900 hover:scale-110">
            DatenSchutz
          </NavLink>
          <NavLink to="agb" className="hover:text-sky-900 hover:scale-110">AGB</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
