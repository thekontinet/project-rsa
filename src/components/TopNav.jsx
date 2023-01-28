import React from 'react'

function TopNav() {
  return (
    <div className='md:mt-8 mt-4 flex items-center justify-between max-w-[1024px] mx-auto'>
            <h1 className='uppercase text-xl md:text-2xl font-bold'>ROLOM TECH</h1>
            <div className='flex text-sm uppercase font-bold'>
            {['offer', 'testimonial', 'apply', 'contact'].map((item, index) => (
                <a key={index} href={`#${item !== 'offer'? item : ''}`}>{item}</a>
            ))}                
            </div>
        </div>
  )
}

export default TopNav