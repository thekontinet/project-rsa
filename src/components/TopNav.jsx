import React, { useEffect, useRef, useState } from 'react'

function TopNav() {
  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState(0);
    useEffect(() => {
      console.log(window.scrollY)    
    }, []);

    console.log(window.scrollY); 

  return (
    <div className='z-30 bg-white-500 flex items-center justify-between px-7 xl:px-0 max-w-[1024px] mx-auto'>
            <h1 className='uppercase text-xl md:text-2xl font-bold'>ROLOM TECH</h1>
            <div className='hidden md:flex items-center text-sm uppercase font-bold md:gap-6 lg:gap-10'>
            {['home', 'offer', 'testimonial', 'apply', 'contact'].map((item, index) => (
                <a onClick={() => setActive(index)} className={`text-slate-500 relative px-2 transition-all duration-500 ease-in ${active === index? 'text-primary-500 after:animate-sliding-border-right before:animate-sliding-border-left after:absolute after:top-0 after:bottom-0 after:w-0.5 after:right-0 before:absolute before:top-0 before:bottom-0 before:w-0.5 before:left-0 before:bg-primary-300 after:bg-primary-300' : ''}`} key={index} href={`#${item !== 'home'? item : ''}`}>{item}</a>
            ))}                
            </div>
        </div>
  )
}

export default TopNav