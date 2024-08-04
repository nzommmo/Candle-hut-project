import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../assets/CANDLE_HUT_LOGO__1_-removebg-preview.png";
import Login from './Login';
import { useNavigate } from 'react-router-dom'; 

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const navigate = useNavigate(); // Move useNavigate outside the function

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const openLoginModal = (e) => {
        e.preventDefault();
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    return (
        <div className='relative z-50'>
            <nav className='sticky top-0 py-3 backdrop-blur-lg border-neutral-700/80'>
                <div className='container px-4 mx-auto relative text-sm'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center flex-shrink'>
                            <img src={logo} alt="logo" className='h-20 w-30' />
                            <span className='text-xl tracking-tight'>CandleHut</span>
                        </div>
                        <ul className='hidden lg:flex ml-14 space-x-12'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#" onClick={() => navigate('/products')}>Products</a></li>
                            <li>
                                <a href="#" onClick={openLoginModal} className='bg-customGreen text-l px-5 py-1 rounded'>
                                    Login
                                </a>
                            </li>
                        </ul>
                        <div className='lg:hidden md:flex flex-col justify-end'>
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                    {mobileDrawerOpen && (
                        <div className='fixed right-0 top-20 bg-neutral-900 w-full pt-6 flex flex-col justify-center items-center lg:hidden pb-6'>
                            <ul className='flex flex-col gap-2'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#" onClick={() => navigate('/products')}>Products</a></li>
                                <li>
                                    <a href="#" onClick={openLoginModal} className='bg-customGreen text-l px-5 py-1 rounded'>
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>

            <Login isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </div>
    );
};

export default Navbar;
