import React from "react";
import überuns from "../Sources/überuns.png";

const Us = () => {
  return (
    <div class="relative bg-white pt-30 py-16 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-8 text-slate-900 leading-relaxed">
        {/* Title */}
        <h1 className="text-3xl font-bold">Über uns</h1>

        {/* Main About Text */}
        <p>
          White Now ist ein familiäres, junges Unternehmen, gegründet von Herrn
          Kojo. Als fachmännische und innovative Gebäudereiniger pflegen,
          reinigen und betreuen wir gewerbliche und private Objekte im Raum
          Mönchengladbach und Umgebung.
        </p>

        <p>
          Kundenzufriedenheit ist uns sehr wichtig, ebenso wie der Aufbau einer
          vertrauensvollen Zusammenarbeit. Unser Personal besteht aus erfahrenen
          und professionellen Fachkräften. Wir reden nicht lange, sondern setzen
          Ihre Vorsätze in die Tat um.
        </p>

        {/* Optional Paragraphs for a richer About section */}
        <div className="space-y-4">
          <p className="font-semibold text-lg">Unser Leitbild</p>
          <p>
            Wir stehen für zuverlässige Reinigungslösungen, persönliches
            Engagement und flexible Serviceangebote – zugeschnitten auf Ihre
            Bedürfnisse.
          </p>
          <p>
            Unser Team arbeitet mit modernen Reinigungsmethoden, hochwertigen
            Produkten und einem Fokus auf nachhaltige Ergebnisse.
          </p>
        </div>
        <div className="bg-sky-100 p-8 rounded-xl">
  <h3 className="text-xl font-bold mb-2">Unsere Werte</h3>
  <p>Professionalität, Vertrauen, Nachhaltigkeit und Kundennähe stehen bei uns an erster Stelle.</p>
</div>
        <div className="space-y-4">
<img src={überuns} alt="" className="w-full h-[70%] m-auto justify-center  border-white border-8 border-" />
        </div>
        {/* Why Choose Us */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Was uns auszeichnet</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Familiäres und persönliches Service-Erlebnis</li>
            <li>Erfahrene & professionelle Fachkräfte</li>
            <li>Flexible Terminvereinbarung & zuverlässige Ausführung</li>
            <li>Regionale Präsenz in Mönchengladbach & Umgebung</li>
          </ul>
        </div>
       <div class="space-y-8 text-slate-900">

  <h2 class="text-2xl font-semibold">
    Unser Team
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div class="space-y-2 bg-sky-100 rounded-2xl p-6 text-justify shadow-sm hover:shadow-md transition hover:-translate-y-1 ">
        <h3 class="text-xl font-semibold text-center">
          Mohanad Kojo
        </h3>
        <p class="font-medium mb-8">
          COO
        </p>
        <p>
          Als Chief Operating Officer und Ahmads Bruder bringt Mohanad außergewöhnliche
          operative Expertise in unser Unternehmen ein. Er überwacht den täglichen
          Betrieb und gewährleistet eine reibungslose Umsetzung unserer
          Geschäftsstrategien sowohl im Service- als auch im Produktbereich.
        </p>
      </div>
      <div class="space-y-2 bg-sky-100 rounded-2xl p-6 text-justify shadow-sm hover:shadow-md transition hover:-translate-y-1 ">
        <h3 class="text-xl font-semibold text-center">
          Ahmad Kojo
        </h3>
        <p class="font-medium mb-8">
          CEO &amp; Gründer
        </p>
        <p>
          Ein visionärer Unternehmer mit umfangreicher Erfahrung in der
          Geschäftsentwicklung, Reinigungsdienstleistungen und dem Vertrieb von
          Hygieneprodukten. Ahmads unternehmerischer Geist und seine innovative
          Denkweise treiben die Richtung und den Erfolg unseres Unternehmens
          maßgeblich voran.
        </p>
      </div>
    
      
    
  </div>
</div>



      </div>
    </div>
  );
};

export default Us;
