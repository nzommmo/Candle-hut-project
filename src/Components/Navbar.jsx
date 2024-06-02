//import {Menu,X} from "lucide-react"
import { useState } from "react"
const Navbar = () => {
   
  return (

<nav className="sticky top-0 z-50 backdrop-blur-lg rounded-md pt-2 w-25 ">
    <div className="container px-4 mx-auto relative text-sm pb-3 ">
        <div className="bg-customGreen flex items-center flex-shrink-0 rounded-md ">
            <span className="text-xl tracking-tight">Candle Hut</span>
            <ul className="flex md:flex-row md:flex flex-row items-center justify-center md:gap-20 space-x-20">
            <li></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
        </ul>
            
        </div>
       
    </div>
    
</nav>

)
}

export default Navbar