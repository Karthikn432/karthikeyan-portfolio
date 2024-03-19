import React from 'react'
import WebsiteImg1 from '../assets/ecommerce-websites.jpg'
import WebsiteImg2 from '../assets/food-ecommerce.jpg'
import WebsiteImg3 from '../assets/website-blog.jpg'


const Project = () => {
    return (
        <section className='md:flex flex-col bg-primary px-5 space-y-10 py-16 text-white' id='projects'>
            <div className='w-full'>
                <div className='flex flex-col justify-center px-10 '>
                    <h1 className='text-4xl border-b-4 border-secondary mb-4 w-[140px] font-bold '>Projects</h1>
                    <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    <div className='relative'>
                        <img src={WebsiteImg1} alt='projectImg1' className='h-[250px] w-full' />
                        <div className='project-desc'>
                            <p className='text-center p-5'>A Ecommerce Website. Built with MERN Stack.</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={WebsiteImg2} alt='projectImg2' className='h-[250px] w-full' />
                        <div className='project-desc'>
                            <p className='text-center p-5'>Food Ecommerce website like Swiggy, Built with Angular & .Net.</p>
                        </div>
                    </div >
                    <div className='relative'>
                        <img src={WebsiteImg3} alt='projectImg3' className='h-[250px] w-full' />
                        <div  className='project-desc'>
                            <p className='text-center p-5'>Basic Blog Website . Built with Next JS and MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Project