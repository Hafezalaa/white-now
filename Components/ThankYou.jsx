import { NavLink } from "react-router-dom";


export default function ThankYou() {


  return (
    <div className="h-120 pt-46  ">
      

      <h1 className="text-3xl justify-self-center font-bold">Vielen Dank!</h1>
      <p className="text-lg justify-self-center  mt-5">Sehr geehrte(r) Kundin-Kunde:</p>
      <p className="text-lg justify-self-center  mt-5">Ihre Anfrage wurde gesendet, Clicken Sie <NavLink className="text-[#62afdb] " to="/">HIER</NavLink>, um Sie weiterzuleiten</p>
      
    </div>
  );
}
