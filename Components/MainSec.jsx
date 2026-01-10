import GFFoto from "../Sources/GFFoto.png"
import { NavLink } from "react-router-dom";

const MainSec = () => {
  return (
    <div className='h-250 md:h-140 pl-10 mt-60 md:flex bg-white'>
        <div className='w-[70%]'>
            <p className='text-slate-700 font-bold my-5'>Professionelle Gebäudereinigung</p>
            <p className='text-5xl font-bold'>Professionelle Reinigung & Premium Hygieneartikel</p>
            <p className='my-10'>White Now bietet professionelle Reinigungsdienstleistungen und hochwertige Hygieneartikel für Unternehmen und Privathaushalte in Mönchengladbach und Umgebung. Zuverlässig, gründlich und nachhaltig.</p>
  <>
  <div className=" absolute top-58 w-80 h-80 bg-sky-300/30 rounded-[55%_45%_60%_40%] animate-pulse duration-1000 " />
  
  
</>


            <NavLink className="my-10 " to="contact"><button className=" bg-[#3288bb] h-8 w-20 rounded-lg text-white cursor-pointer hover:scale-3d hover:scale-125">Anfrage</button></NavLink>
        </div>
        <div className="w-full my-10 md:w[40%]"><img src={GFFoto} alt="" className="w-80 m-auto justify-center" /></div>
        </div>
  )
}

export default MainSec