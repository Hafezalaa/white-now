import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className=" relative  h-100 w-full">

      <div className=" h-80 w-full bg-sky-900  p-4">
<div className=" hidden md:block md:absolute left-6  w-48 h-48 bg-white/10 rounded-[60%_90%_75%_70%] " />
<div className=" hidden md:block md:absolute left-36 mt-20 w-48 h-48 bg-white/20 rounded-[75%_70%_60%_90%] " />
        
       <div className="  absolute  right-20 top-40 -translate-y-1/2 backdrop-blur-md  rounded-2xl p-6 w-72 text-white">
  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
     Kontakt
  </h3>

  <div className="space-y-3 text-md">
    <div className="flex items-start gap-3">
      <span className="">📍</span>
      <p className="hover:text-sky-600 transition">
        Hehnerholt 91<br />
        41069 Mönchengladbach
      </p>
    </div>

    <div className="flex items-center gap-3">
      <span className="">📞</span>
      <a
        href="tel:+4921618279671"
        className="hover:text-sky-600 transition"
      >
        +49 2161 8279671
      </a>
    </div>

    <div className="flex items-center gap-3">
      <span className="text-sky-600">✉️</span>
      <a
        href="mailto:Info@whitenow-reinigung.de"
        className="hover:text-sky-600 transition"
      >
        Info@whitenow-reinigung.de
      </a>
    </div>

    <div className="flex items-start gap-3">
      <span className="text-sky-600">⏰</span>
      <p>
        Mo. – Fr.: 8:00 – 18:00 Uhr<br />
        Sa.: 9:00 – 14:00 Uhr
      </p>
    </div>
  </div>
</div>

      </div>


      <div className="h-20 bg-sky-100 w-full flex flex-col md:flex-row place-content-between text-slate-900 md:place-items-center px-16">
        <div>
          &copy; {new Date().getFullYear()} White Now Gebäudereinigung. Alle
          Rechte vorbehalten.
        </div>
        <div className="w-[30%] flex place-content-around">
          <NavLink to="imprint" className="hover:text-sky-900 hover:scale-110 mr-5">
            Impressum
          </NavLink>
          <NavLink to="data" className="hover:text-sky-900 hover:scale-110 mr-5">
            DatenSchutz
          </NavLink>
          <NavLink to="agb" className="hover:text-sky-900 hover:scale-110 mr-5">AGB</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
