import React, { useEffect, useRef, useState } from "react";
import TestimonyBox from "./TestimonyBox";
import TestimonialSlider from "./TestimonialSlider";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function Testimonial({ id }) {
  gsap.registerPlugin(ScrollTrigger);
  const subtitle = useRef(null);
  const [active, setActive] = useState(0);

  const onClick = (index) => setActive(index);
  
  const setactive = (num) => setActive(num);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(subtitle.current, {
        opacity: 0,
        y: -15,
        skewX:-10,
        duration: 1,
        ease: 'power3.easeIn',
        scrollTrigger: subtitle.current
         })
    }, subtitle.current)

    return () => ctx.revert()

  }, [subtitle])
  return (
    <section ref={id} className="pb-10">
      <h1 ref={subtitle} className="text-orange-500 text-3xl pt-9 md:text-4xl font-bold font-alfa text-center tracking-widest uppercase">
        Testimonials
      </h1>
      <div className="grid md:grid-cols-2 gap-10 mx-7 md:mx-16 mt-10 place-content-between items-start">
        <div className="lg:max-w-md order-2 md:order-1 flex flex-col gap-6">
          {[
            { name: "John Doe", location: "Delta state, Nigeria" },
            { name: "John Doe", location: "Delta state, Nigeria" },
            { name: "John Doe", location: "Delta state, Nigeria" },
          ].map(({ name, location }, index) => (
            <TestimonyBox key={index} active={active} onClick={() => onClick(index)} name={name} index={index} location={location} />
          ))}
        </div>
        <div className="order-1 md:order-2">
          <TestimonialSlider currentActive={active} setactive={setactive}/>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
