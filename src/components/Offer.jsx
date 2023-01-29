import React from "react";
import Arrow from "../assets/images/Arrow.png";
import Course from "./Course.jsx";

function Offer() {
  return (
    <section
      id="offer"
      className="w-full relative bg-slate-50 px-7 py-20 md:px-16 text-center"
    >
      <div className="relative z-10">
        <h1 className="font-bold font-alfa text-primary-500 uppercase">
          what we offer
        </h1>
        <p className="max-w-3xl mb-8 text-sm mx-auto mt-5">
          We offer a variety of programming languages and technologies, our
          classes are well structure, engaging, and tailored to meet the needs
          of all learners, whether you're new to programming or have some
          experience under your belt.
        </p>
        <div>
          <div className="grid md:grid-cols-3 justify-center items-center gap-10">
            <Course
              title="HTML & CSS"
              subtitle="8 Weeks"
              level={0}
              date="Jan 1st 2023"
              price="$250.00"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptatibus cumque, hic eligendi soluta commodi nobis? Ducimus nulla
          eius ipsum veniam culpa assumenda"
            />
            <Course
              title="HTML & CSS"
              subtitle="8 Weeks"
              level={2}
              status="open"
              price="$850.00"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptatibus cumque, hic eligendi soluta commodi nobis? Ducimus nulla
          eius ipsum veniam culpa assumenda"
            />
            <Course
              title="HTML & CSS"
              subtitle="8 Weeks"
              level={2}
              status="closed"
              price="$850.00"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptatibus cumque, hic eligendi soluta commodi nobis? Ducimus nulla
          eius ipsum veniam culpa assumenda"
            />
          </div>
        </div>
        <p className="max-w-4xl mx-auto mt-12 text-lg font-medium">
          We understand that learning to code can be daunting, which is why
          we've designed our class to be flexible and accessible. Whether you're
          a busy professional or a student, you'll be able to fit our tutorial
          into your lifestyle.
        </p>
      </div>
      <img
        src={Arrow}
        className="absolute -left-10 top-1/2 -translate-y-1/2 w-52 h-60"
        alt="an arrow design"
      />
    </section>
  );
}

export default Offer;
