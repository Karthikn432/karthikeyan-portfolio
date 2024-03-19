import React from 'react'
import ResumeImg from '../assets/resume.jpg'

const Resume = () => {
    return (
        <section className='md:flex bg-secondary p-16 ' id='resume'>
            <div className='md:w-1/2 flex justify-center md:justify-end'>
                <img className='w-[300px]' src={ResumeImg} alt="" />
            </div>
            <div className='md:w-1/2 flex flex-center text-white justify-center'>
                <div className='flex flex-col justify-center space-y-4'>
                    <h1 className='text-4xl border-b-4 border-primary mb-4 w-[140px] font-bold'>Resume</h1>
                    <p>You can view my resume <a href=""className='btn'>Download</a></p>
                </div>
            </div>
        </section>
    )
}

export default Resume