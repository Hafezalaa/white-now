import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        necessary: true,
        google: true,
        thirdParty: true,
      })
    );
    setVisible(false);
    window.location.reload(); // reload to enable services
  };

  const acceptNecessary = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        necessary: true,
        google: false,
        thirdParty: false,
      })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-slate-900 text-white p-6 shadow-2xl">
      <div className="max-w-5xl mx-auto space-y-4">
        <h3 className="text-lg font-semibold">
          🍪 Cookie-Einstellungen
        </h3>

        <p className="text-sm text-slate-300">
          Wir verwenden Cookies und ähnliche Technologien, um unsere Website
          sicher zu betreiben und externe Dienste (z.B. Google Maps,
          Google Analytics) zu nutzen. Dabei können personenbezogene Daten
          verarbeitet werden.
        </p>

        <p className="text-sm text-slate-300">
          Weitere Informationen finden Sie in unserer{" "}
          <a
            href="/data"
            className="underline text-sky-400 hover:text-sky-300"
          >
            Datenschutzerklärung
          </a>.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={acceptNecessary}
            className="px-5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600"
          >
            Nur notwendige Cookies
          </button>

          <button
            onClick={acceptAll}
            className="px-5 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
