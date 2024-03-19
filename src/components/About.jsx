import React from 'react'
import AboutImg from '../assets/about.png'

const About = () => {
    return (
        <section className='md:flex bg-secondary px-5 space-y-10' id='about'>
            <div className='md:w-1/2'>
                <img src={AboutImg} alt="" />
            </div>
            <div className='md:w-1/2 flex flex-center text-white justify-center'>
                <div className='flex flex-col justify-center space-y-4'>
                    <h1 className='text-4xl border-b-4 border-primary mb-4 w-[170px] font-bold'>About Me</h1>
                    <p>Hi, My name is Karthikeyan S.I am a Full stack web developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap</p>
                    <p>I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.</p>
                    <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>
                </div>
            </div>
        </section>
    )
}

export default About