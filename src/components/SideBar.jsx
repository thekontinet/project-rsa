import classNames from 'classnames';
import {gsap} from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

function SideBar({sectionTags, toggle, setToggle, closebar}) {
    const [active, setActive] = useState(0);
    const NavItems = useRef({})
   

  //   useEffect(() => {
  //     const ctx = gsap.context(() => {         
  //        const one = NavItems.current[0].current;
  //            const two = NavItems.current[1];
  //            const three = NavItems.current[2];
  //            const four = NavItems.current[3];
  //            const five = NavItems.current[4];
  //           gsap.from([one, two, three, four, five], {
  //             opacity: 0,
  //             y:-10,
  //             ease: 'power4.inOut',
  //             skewY:-10,
  //             duration:0.5,
  //             stagger: 0.5,
  //            })

  //           });
  //           return () => ctx.revert();

  //  }, [NavItems])

  const scrollToSection = (ref, index) => {
    ref.current.scrollIntoView(),
    setActive(index);
    closebar()
  }
   

  return (
   <nav className={classNames('flex flex-col justify-center md:hidden fixed top-0 transition-all duration-500 ease-in-out right-0 left-0 px-8 shadow-md z-20 bottom-0 bg-primary-600  text-center', {
    '-top-full bottom-full shadow-none': toggle === false
})}>     
   <button onClick={setToggle} className={`flex flex-col md:hidden space-y-1.5 justify-center items-center cursor-pointer outline-none border-none absolute top-8 right-10`}>
            <span className= 'w-8 h-1 bg-white inline-block transition-all duration-500 ease-in-out rotate-45 translate-y-2.5'></span>
            <span className='w-8 h-1 bg-white inline-block transition-all duration-500 ease-in-out -rotate-45'></span>
        </button>
    <ul className='flex flex-col space-y-10 text-xl tracking-widest'>
        {["home", "offer", "testimonial", "apply", "contact"].map(
          (item, index) => (
            <li
              key={index}
              className={`relative transition-all uppercase cursor-pointer duration-500 ease-in tracking-wider ${
                active === index
                  ? "text-orange-400 after:absolute after:top-0 after:bottom-0 after:w-0.5 after:right-0 before:absolute before:top-0 before:bottom-0 before:w-0.5 before:left-0 before:bg-orange-400 after:bg-orange-400"
                  : "text-white"
              }`}
              onClick={() => scrollToSection(sectionTags[index], index)}
              ref={el => NavItems.current[index] = el}
            >
              {item}
            </li>
            )
        )}
    </ul>
   </nav>
  )
}

export default SideBar