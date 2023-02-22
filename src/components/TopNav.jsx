import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaHackerNews,
  FaHamburger,
  FaRegCheckCircle,
} from "react-icons/fa";
import gsap, { Power4 } from "gsap";
import classNames from "classnames";
import useScroll from "../hooks/useScroll";
import { useInView } from 'react-intersection-observer';


function TopNav({ sectionTags, setToggle}) {
  const [navlist, setNavlist] = useState([
    {name:"home", active: false},
    {name:"offer", active: false},
    {name:"testimonial", active: false},
    {name:"apply", active: false},
    {name:"contact", active: false},
  ]);
  const x = useScroll();
  let NavList = useRef({});

  const scrollToSection = (ref, active) => {
    window.scrollTo({
      top: ref.current.offsetTop - 120,
      behaviour: "smooth",
    });

        
      setNavlist(navlist.map((item) => {
        if (ref == item.section ){
          return {...navlist, active: !active}
        }else{
          return item
        }
      }))
  };

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
    <nav
      className={classNames(
        "py-2 px-10 transition-all duration-500 ease-in-out",
        {
          "bg-white top-0 fixed z-20 shadow w-full": x >= 300,
          "pt-5": x < 300,
        }
      )}
    >
      <div className="max-w-[1024px] flex items-center justify-between mx-auto">
        <Link to={"/"} className="flex">
          <img src={logo} className="w-10" />
          <span className="font-black text-sm text-slate-500">Tech</span>
        </Link>
        <ul className="hidden md:flex items-center text-sm uppercase font-bold md:gap-6 lg:gap-10">
          {navlist.map(({name, section, active}, index) => (
            <li
              ref={(el) => (NavList[index] = el)}
              key={name}
              className={classNames('relative text-slate-500 px-2 tracking-widest transition-all cursor-pointer duration-300 ease-in h-full', {
                'text-orange-600  after:animate-sliding-border after:absolute after:-bottom-6 after:h-1 after:left-0 after:right-0 after:bg-orange-500' : active == true
              })}
              // className={`relative px-2 tracking-widest transition-all cursor-pointer duration-300 ease-in h-full ${
              //   active === index
              //     ? "text-orange-600  after:animate-sliding-border after:absolute after:-bottom-6 after:h-1 after:left-0 after:right-0 after:bg-orange-500"
              //     : ""
              // }`}
              onClick={() => scrollToSection(sectionTags[index], active)}
            >
              {name}
            </li>
          ))}
        </ul>
        <button
          onClick={setToggle}
          className="text-primary-600 border border-primary-500 p-1 rounded hover:bg-primary-600 hover:text-white hover:shadow md:hidden"
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}

export default TopNav;
