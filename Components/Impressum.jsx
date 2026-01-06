import React from "react";

const Impressum = () => {
  return (
    <div class="relative bg-white pt-30 py-16 px-6 lg:px-24">
      <div class="max-w-4xl mx-auto space-y-10 text-gray-700 leading-relaxed">
        {/* <!-- Title --> */}
        <h1 class="text-3xl font-bold text-slate-900">Impressum</h1>

        {/* <!-- Angaben --> */}
        <div class="space-y-2">
          <h2 class="text-xl font-semibold text-slate-900">
            Angaben gemäß § 5 TMG
          </h2>
          <p>Ahmad Kojo</p>
          <p>White Now Gebäudereinigung</p>
          <p>Hehnerholt 91</p>
          <p>41069 Mönchengladbach</p>
          <p>Deutschland</p>
        </div>

        {/* <!-- Kontakt --> */}
        <div class="space-y-2">
          <h2 class="text-xl font-semibold text-slate-900">Kontakt</h2>
          <p>
            Telefon:
            <a href="tel:+4921618279671" class="text-slate-900 hover:underline">
              +49 2161 8279671
            </a>
          </p>
          <p>
            E-Mail:
            <a
              href="mailto:info@whitenow-reinigung.de"
              class="text-slate-900 hover:underline"
            >
              info@whitenow-reinigung.de
            </a>
          </p>
        </div>

        {/* <!-- Streitschlichtung --> */}
        <div class="space-y-3">
          <h2 class="text-xl font-semibold text-slate-900">
            Streitschlichtung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-900 hover:underline break-all"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>

        {/* <!-- Haftung Inhalte --> */}
        <div class="space-y-3">
          <h2 class="text-xl font-semibold text-slate-900">
            Haftung für Inhalte
          </h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
          </p>
          <p>
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
            diese Inhalte umgehend entfernen.
          </p>
        </div>

        {/* <!-- Haftung Links --> */}
        <div class="space-y-3">
          <h2 class="text-xl font-semibold text-slate-900">
            Haftung für Links
          </h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen.
          </p>
          <p>
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
            Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
            Rechtsverstöße überprüft.
          </p>
          <p>
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
            umgehend entfernen.
          </p>
        </div>

        {/* <!-- Urheberrecht --> */}
        <div class="space-y-3">
          <h2 class="text-xl font-semibold text-slate-900">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
          <p>
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
            werden, bitten wir um einen entsprechenden Hinweis. Bei
            Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
            umgehend entfernen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
