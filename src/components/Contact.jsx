import React from 'react'

const Contact = () => {
    return (
        <section className='flex flex-col bg-primary px-5 py-20 h-[280px]' id='contact'>
            <div className=' flex flex-center text-white justify-center'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-4xl border-b-4 border-secondary mb-4 w-[135px] font-bold'>Contact</h1>
                    <p>If you want to discuss more in detail, please contact me</p>
                    <p className='py-2'>
                        <span className=' font-bold'>Email: </span><span>karthicksekar432@gmail.com</span>
                    </p>
                    <p className='py-2'>
                        <span className=' font-bold'>Phone:</span><span>+91 9080702656</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contact