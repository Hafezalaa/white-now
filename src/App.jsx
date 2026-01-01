import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import MainSec from "../Components/MainSec";
import Featuresgrid from "../Components/Featuresgrid";
import SubSec from "../Components/SubSec";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function App() {
  return (
    <>
      <Header />
      <MainSec/>
      <Featuresgrid/>
      <SubSec/>
      <Contact/>
      <Footer/>
      <Routes>

      </Routes>
    </>
  );
}

export default App;
