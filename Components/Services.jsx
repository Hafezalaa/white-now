import React from "react";

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto mt-20 px-6 py-16 space-y-12">
      
      {/* Hero / Intro */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Unsere Dienstleistungen
        </h1>
        <p className="text-lg text-gray-700">
          Wir bieten Ihnen professionelle Reinigungsservices für Ihr Zuhause und
          Ihre Geschäftsräume – zuverlässig, gründlich und individuell angepasst.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-sky-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">
            Wohnungs- & Haushaltsreinigung
          </h2>
          <p className="text-gray-700">
            Saubere Räume und Wohlfühlatmosphäre für Ihr Zuhause – gründliche
            Reinigung aller Bereiche nach Ihren Wünschen.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-sky-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">
            Büro- & Gewerbereinigung
          </h2>
          <p className="text-gray-700">
            Ein sauberes Arbeitsumfeld sorgt für Produktivität und professionelle
            Außenwirkung – flexibel auch außerhalb Ihrer Geschäftszeiten.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-sky-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">
            Fenster- & Glasreinigung
          </h2>
          <p className="text-gray-700">
            Unsere professionelle Fensterreinigung sorgt für strahlende Durchsicht und einen makellosen ersten Eindruck. Mit modernster Osmose-Technologie und umweltfreundlichen Reinigungsmitteln garantieren wir beste Ergebnisse bei jeder Glasfläche.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-sky-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">
            Sonder- & Spezialreinigung
          </h2>
          <p className="text-gray-700">
            Unsere Sonderreinigung kommt dort zum Einsatz, wo standardmäßige Reinigungsverfahren nicht ausreichen. Wir bieten maßgeschneiderte Lösungen für spezielle Reinigungsaufgaben.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
          Warum uns wählen?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg bg-sky-100 shadow-lg rounded-lg p-6">
          <li>
            <strong>Professionelles & erfahrenes Team</strong> – wir arbeiten präzise, effizient und
            zuverlässig.
          </li>
          <li>
            <strong>Moderne Techniken & hochwertige Mittel</strong> – für beste Sauberkeit und
            Hygiene.
          </li>
          <li>
            <strong>Flexibel & kundenorientiert</strong> – wir passen uns Ihrem Zeitplan an.
          </li>
          <li>
            <strong>Umweltfreundliche Reinigungsmittel</strong> – nachhaltige Lösungen für
            gesunde Räume.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <a
          href="/contact"
          className="w-full bg-sky-900 hover:bg-[#4fa0cc] text-white font-semibold py-3 rounded-lg transition"
        >
          Jetzt kostenloses Angebot anfordern
        </a>
      </section>

    </div>
  );
}
