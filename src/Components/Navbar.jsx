import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [mobileDraweropen,setmobiledraweropen] = useState(false)

    const toggleNavbar = () => {
        setmobiledraweropen(!mobileDraweropen)
    }

  return (
    <div className='relative  z-50' >
        
    <nav className=' sticky top-0-50 py-3 backdrop-blur-lg border-neutral-700/80'>
        <div className='container px-4 mx-auto relative text-sm'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center flex-shrink'>
                    <img src="" alt="logo" />
                    <span className='text-xl tracking-tight'>CandleHut</span>

                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>

                </ul>
                <div className='lg:hidden md:flex flex-coljustify-end'>
                    <button onClick={toggleNavbar}>
                        {mobileDraweropen ? <X/> :<Menu/>}
                    </button>


                </div>

            </div>
            {mobileDraweropen &&(
                <div className='fixed right-0-20 bg-neutral-900 w-full pt-6 flex flex-col justify-center items-center lg:hidden pb-6'>
                     <ul className='flex flex-col gap-2 '>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>

                </ul>
                

                </div>
            )}

        </div>

    </nav>

    </div>
    
  )
}

export default Navbar