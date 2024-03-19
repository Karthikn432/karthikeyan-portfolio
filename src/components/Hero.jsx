import React from 'react'
import HeroImg from '../assets/hero.png'
import { AiOutlineLinkedin , AiOutlineFacebook,AiOutlineTwitter } from "react-icons/ai";

const Hero = () => {
    return (
        <section className='flex flex-col md:flex-row justify-center px-5 py-32 bg-primary'>
            <div className='md:w-1/2 text-white font-hero-font space-y-3'>
                <h1 className='text-4xl md:text-6xl'>Hi, <br />I am <span className='text-black'>Karthikeyan S</span></h1>
                <p className='text-2xl md:text-3xl'>I am a Full-stack developer</p>
                <div className='flex space-x-2 py-10 text-black'>
                    <a href="" className='hover:text-white'><AiOutlineLinkedin size={28}/></a>
                    <a href="" className='hover:text-white'><AiOutlineFacebook size={28} /></a>
                    <a href="" className='hover:text-white'><AiOutlineTwitter size={28}/></a>
                </div>            </div>
            <img className='md:w-1/3' src={HeroImg} alt="section" />
        </section>
    )
}

export default Hero