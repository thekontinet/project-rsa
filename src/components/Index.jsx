import React from 'react'

function Index() {
  return (
    <header>
        <div className='h-screen w-full px-7 md:px-16 my-5'>
        <div className='md:mt-8 mt-4'>
            <h1 className='uppercase text-xl md:text-2xl font-bold'>ROLOM TECH</h1>
        </div>
        <div className='flex lg:flex-row flex-col justify-between items-center'>
        <div className='md:max-w-2xl text-center lg:text-start flex flex-col space-y-4 md:space-y-7 order-2 lg:order-1'>
         <h1 className='uppercase font-bold text-3xl md:text-6xl'>
         <span className='text-primary-500 '>Learn to code</span> with professional tutors
         </h1>
         <button className='bg-primary-500 hover:bg-primary-600 shadow-md text-lg px-3 py-2 w-52 relative text-start capitalize text-white rounded-md mx-auto lg:mx-0'>
         apply now
         <span className='absolute ml-4 bg-white h-0.5 w-20 top-1/2 -translate-y-1/2 after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:w-3 after:h-3 after:rotate-45 after:border-2 after:border-transparent after:border-t-white after:border-r-white'></span>
         </button>
         <p className='md:text-base text-sm'>If you're interested in learning to code, you've come to the right place. Our tutorial is designed to provide you with the knowledge and skills you need to become a proficient coder in no time. Whether you're looking to start a new career in tech, build your own app, or simply learn a new skill, we've got you covered.</p>
        </div>      
        <div className='max-w-sm md:max-w-xl order-1 lg:order-2'>
            <img className='' src='/IndexImage.svg' alt='an illustration of coders'/>
        </div>
        </div>
      </div>
    </header>


  )
}

export default Index