import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaHackerNews, FaHamburger, FaRegCheckCircle } from "react-icons/fa";
import gsap, { Power4 } from "gsap";

function TopNav({sectionTags}) {
  const [active, setActive] = useState(0);
  const [offSet, setOffSet] = useState(0);
  let NavList = useRef({})

  const scrollToSection = (ref, index) => {
    ref.current.scrollIntoView(),
    setActive(index)
  } 

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //      const one = NavList[0];
  //      const two = NavList[1];
  //      const three = NavList[2];
  //      const four = NavList[3];
  //      const five = NavList[4];
  //      gsap.from([one, two, three, four, five], {
  //       opacity: 0,
  //       y:-10,
  //       skewY:-10,
  //       duration:1,
  //       stagger: 0.5,
  //       ease: 'power4.inOut'
  //      })
  //   });

  //   return () => ctx.revert();
  // }, [NavList])     

  return (
    <nav className={'py-2 px-7 md:bg-white md:shadow md:fixed md:z-10 md:w-full'}>
      <div className="max-w-[1024px] flex items-center justify-between mx-auto">
      <Link to={"/"} className="flex">
        <img src={logo} className="w-10" />
        <span className="font-black text-sm text-slate-500">Tech</span>
      </Link>
      <ul className="hidden md:flex items-center text-sm uppercase font-bold md:gap-6 lg:gap-10">
        {["home", "offer", "testimonial", "apply", "contact"].map(
          (item, index) => (
            <li
              ref={el => NavList[index] = el}
              key={index}
              className={`relative px-2 transition-all cursor-pointer duration-500 ease-in ${
                active === index
                  ? "text-primary-500 after:animate-sliding-border-right before:animate-sliding-border-left after:absolute after:top-0 after:bottom-0 after:w-0.5 after:right-0 before:absolute before:top-0 before:bottom-0 before:w-0.5 before:left-0 before:bg-primary-500 after:bg-primary-500"
                  : "text-slate-500"
              }`}
              onClick={() => scrollToSection(sectionTags[index], index)}
            >
              {item}
            </li>
          )
        )}
      </ul>
      </div>  
    </nav>
  );
}

export default TopNav;
