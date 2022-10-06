//  rfce to build a boiler plate code
import React from 'react'
import Logo from "../logo.png";
import {Link} from 'react-router-dom';  /* div ko raplace kar denge Link se . jisse ki page reload nahi hoga or movies pr click karne par movies page open ho jayega & same as for favourites page*/

function NavBar() {
  return (
    <div className= " border pl-12 flex  space-x-8 items-center py-4" >
      <img className='w-[50px] md:w-[60px]' src={Logo} alt = ""  ></img>
      <Link to="/movies" className='text-blue-400
       font-bold
       text-xl
       md:text-3xl'>Movies</Link>
      <Link to="/favourites" className='text-blue-400
       font-bold 
       text-xl  
       md:text-3xl'>Favourites</Link>  
    </div>
  )
}

export default NavBar
// mobile screeen ke liye ->  text-xl
// and medium ya usse badi screen ke liye ->  md:text-3xl ka use karna h 
