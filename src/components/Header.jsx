import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import karthiFavIcon from '../../public/apple-touch-icon.png'
const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggleMenu = () =>{
        setToggleMenu(!toggleMenu)
    }
    return (
        <header className='flex justify-between px-5 py-2 bg-primary static' id='home'>
            {/* <a href="#" className='font-bold text-black'>Karthikeyan</a> */}
            <img src={karthiFavIcon} alt="" className='w-[140px] h-[40px] object-cover rounded-md ' />
            <nav className='hidden md:block'>
                <ul className='flex text-white'>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
           {
            toggleMenu && (
                <nav className='block md:hidden'>
                <ul className='flex flex-col text-white  mobile-nav' onClick={handleToggleMenu}>
                <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            )
           }
            <button className='block md:hidden' onClick={handleToggleMenu}>
                <Bars3Icon className=' text-white h-5' />
            </button>
        </header>
    )
}

export default Header