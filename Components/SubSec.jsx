import {
  FaUserCheck,
  FaTools,
  FaLeaf,
  FaHandshake,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaUserCheck />,
    title: "Erfahrenes Fachpersonal",
    text: "Unser Team besteht aus geschulten Fachkräften mit langjähriger Erfahrung in der Gebäudereinigung.",
  },
  {
    icon: <FaTools />,
    title: "Modernste Ausrüstung",
    text: "Wir verwenden hochwertige Reinigungsgeräte und -mittel für optimale Ergebnisse.",
  },
  {
    icon: <FaLeaf />,
    title: "Umweltfreundliche Produkte",
    text: "Nachhaltigkeit liegt uns am Herzen – wir setzen auf umweltschonende Reinigungsmittel.",
  },
  {
    icon: <FaHandshake />,
    title: "Flexible Vertragsbedingungen",
    text: "Ob Einmalreinigung oder regelmäßiger Service – wir passen uns Ihren Bedürfnissen an.",
  },
];

export default function SubSec() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3">
            Warum uns wählen?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Der Unterschied, den Sie sehen können. Bei White Now steht
            Qualität an erster Stelle – für Ergebnisse, die überzeugen.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-sky-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition hover:-translate-y-1">
      <div className="text-blue-600 text-4xl mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-700">
        {text}
      </p>
    </div>
  );
}
