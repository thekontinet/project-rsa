import React, { useRef, useState } from "react";
import Apply from "../components/Apply";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Offer from "../components/Offer";
import Testimonial from "../components/Testimonial";
import TopNav from "../components/TopNav";
import SideBar from "../components/SideBar";
import { useInView } from 'react-intersection-observer';


function Home() {
  const [toggle, setToggle] = useState(false);
  const offerSection = useRef(null);
  const homeSection = useRef(null);
  const testimonialSection = useRef(null);
  const applySection = useRef(null);
  const contactSection = useRef(null);

  const sectionTags = [
    homeSection,
    offerSection,
    testimonialSection,
    applySection,
    contactSection,
  ];

  return (
    <div className="scroll-smooth">
      <header>
        <TopNav
          sectionTags={sectionTags}
          toggle={toggle}
          setToggle={() => setToggle(!toggle)}
        />
        <SideBar
          sectionTags={sectionTags}
          closebar={() => setToggle(false)}
          toggle={toggle}
          setToggle={() => setToggle(!toggle)}
        />
        <Banner id={homeSection} />
      </header>
      <main>
        <Offer id={offerSection} />
        <Testimonial id={testimonialSection} />
        <Apply id={applySection} />
        <Contact id={contactSection} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
