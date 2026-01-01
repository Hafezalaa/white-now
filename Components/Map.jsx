import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SiteMapMenuNav() {
  const [levelA, setLevelA] = useState(null);
  const [levelB, setLevelB] = useState(null);

  const linkBase =
    "block p-4 cursor-pointer hover:bg-[#62afdb]/10 text-slate-900";
  const activeLink = "bg-[#62afdb]/20 font-semibold text-slate-900";

  return (
    <div className="flex bg-sky-100 h-full shadow-xl rounded-2xl overflow-x-auto">
      {/* LEVEL A */}
      <div className="w-42 sm:w-64 md:w-100 border-r">
        <h3 className="p-4 font-semibold text-slate-900 ">Hauptmenü</h3>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : ""}`
          }
          onMouseEnter={() => {
            setLevelA("A");
            setLevelB(null);
          }}
        >
          Empty
        </NavLink>

        <NavLink
          to="/company"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : ""}`
          }
          onMouseEnter={() => {
            setLevelA("B");
            setLevelB(null);
          }}
        >
          Dienstleistungen
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : ""}`
          }
          onMouseEnter={() => {
            setLevelA("C");
            setLevelB(null);
          }}
        >
          Kontakt
        </NavLink>
      </div>

      {/* LEVEL B */}
      {levelA === "A" && (
        <div className="w-42 sm:w-64 md:w-100 border-r">
          <h3 className="p-4 font-semibold text-slate-900 ">Empty</h3>

          <NavLink
            to=""
            className={linkBase}
            onMouseEnter={() => setLevelB("1")}
          >
            E1
          </NavLink>

          <NavLink
            to=""
            className={linkBase}
            onMouseEnter={() => setLevelB("2")}
          >
            E2
          </NavLink>
        </div>
      )}

      {levelA === "B" && (
        <div className="w-42 sm:w-64 md:w-100 border-r">
          <h3 className="p-4 font-semibold text-slate-900 ">
            Dienstleistungen
          </h3>

          <NavLink to="" className={linkBase}>
            Fensterreinigung
          </NavLink>

          <NavLink to="" className={linkBase}>
            Sonderreinigung
          </NavLink>
          <NavLink to="" className={linkBase}>
            Hausmeisterservice
          </NavLink>
          <NavLink to="" className={linkBase}>
            Hygieneartikel
          </NavLink>
        </div>
      )}

      {levelA === "C" && (
        <div className="w-42 sm:w-64 md:w-100 border-r">
          <h3 className="p-4 font-semibold text-slate-900 ">Kontakt</h3>

          <NavLink to="" className={linkBase}>
            Anfrage senden
          </NavLink>

          <NavLink to="/contact/location" className={linkBase}>
            Kontaktinfos
          </NavLink>
        </div>
      )}

      {/* LEVEL C */}
      {levelA === "A" && levelB === "1" && (
        <div className="w-42 sm:w-64 md:w-100">
          <h3 className="p-4 font-semibold text-slate-900 ">Reinigung</h3>

          <NavLink to="/services/cleaning/office" className={linkBase}>
            üroreinigung
          </NavLink>

          <NavLink to="/services/cleaning/medical" className={linkBase}>
            Praxisreinigung
          </NavLink>

          <NavLink to="/services/cleaning/stairs" className={linkBase}>
            Treppenhaus
          </NavLink>
        </div>
      )}

      {levelA === "A" && levelB === "2" && (
        <div className="w-42 sm:w-64 md:w-100">
          <h3 className="p-4 font-semibold text-slate-900 ">Sonderreinigung</h3>

          <NavLink to="/services/special/construction" className={linkBase}>
            auendreinigung
          </NavLink>

          <NavLink to="/services/special/basic" className={linkBase}>
            Grundreinigung
          </NavLink>
        </div>
      )}
    </div>
  );
}
