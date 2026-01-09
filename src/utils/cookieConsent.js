export function getCookieConsent() {
  const consent = localStorage.getItem("cookieConsent");
  return consent ? JSON.parse(consent) : null;
}
