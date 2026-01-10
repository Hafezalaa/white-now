import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header";

import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import StartPage from "../Components/StartPage";
import Portfolio from "../Components/Portfolio";
import Us from "../Components/Us";
import Services from "../Components/Services";
import Impressum from "../Components/Impressum";
import Datenschutz from "../Components/Datenschutz";
import AGB from "../Components/AGB";
import CookieConsent from "../Components/CookieConsent";
import ThankYou from "../Components/ThankYou";

function App() {
  return (
    <>
      <Header />
      <CookieConsent/>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="us" element={<Us/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="imprint" element={<Impressum/>} />
        <Route path="data" element={<Datenschutz/>} />
        <Route path="agb" element={<AGB/>} />
        <Route path="thanks" element={<ThankYou/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
