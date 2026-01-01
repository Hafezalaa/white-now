import { MdOutlineCleanHands, MdCleaningServices } from "react-icons/md";
import {
  FaSoap,
  FaSprayCan,
  FaHandsWash,
  FaShieldAlt,
  FaRecycle,
  FaBroom,
  FaTruck,
  FaBuilding,
  FaHome,
  FaHospitalAlt,
} from "react-icons/fa";

export default function FeaturesGrid() {
  return (
    <section className="bg-sky-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Hygiene */}
          <Feature
            icon={<MdOutlineCleanHands />}
            title="Hygienische Reinigung"
            text="Sauberkeit nach höchsten Hygienestandards."
          />
          <Feature
            icon={<FaSoap />}
            title="Gründliche Pflege"
            text="Effektive Reinigung mit hochwertigen Produkten."
          />
          <Feature
            icon={<FaSprayCan />}
            title="Desinfektion"
            text="Professionelle Desinfektion für mehr Sicherheit."
          />
          <Feature
            icon={<FaHandsWash />}
            title="Gesundheit"
            text="Für ein sauberes und gesundes Umfeld."
          />

          {/* Quality */}
          <Feature
            icon={<FaShieldAlt />}
            title="Sicherheit & Vertrauen"
            text="Zuverlässiger Service mit geschultem Personal."
          />
          <Feature
            icon={<FaRecycle />}
            title="Umweltfreundlich"
            text="Nachhaltige Reinigung mit umweltschonenden Mitteln."
          />
          <Feature
            icon={<FaBroom />}
            title="Gründliche Arbeit"
            text="Sauberkeit bis ins kleinste Detail."
          />
          <Feature
            icon={<MdCleaningServices />}
            title="Professioneller Service"
            text="Qualität und Erfahrung für beste Ergebnisse."
          />

          {/* Areas */}
          <Feature
            icon={<FaTruck />}
            title="Flexibler Einsatz"
            text="Pünktlich, mobil und einsatzbereit."
          />
          <Feature
            icon={<FaBuilding />}
            title="Gewerbe & Büros"
            text="Reinigung für Unternehmen und Büros."
          />
          <Feature
            icon={<FaHome />}
            title="Privathaushalte"
            text="Zuverlässige Reinigung für Ihr Zuhause."
          />
          <Feature
            icon={<FaHospitalAlt />}
            title="Medizinische Bereiche"
            text="Hygienische Reinigung sensibler Einrichtungen."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
      <div className="text-blue-400 text-4xl mb-4 mx-auto">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
}
