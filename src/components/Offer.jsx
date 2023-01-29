import React from "react";
import Arrow from "../assets/images/Arrow.png";
import Course from "./Course.jsx";

function Offer() {
  return (
    <section>
      <div
        id="offer"
        className="w-full relative bg-slate-50 px-7 md:px-16 text-center"
      >
        <h1 className="font-bold font-alfa pt-10 text-primary-500">
          what we offer
        </h1>
        <div className="max-w-3xl mx-auto mt-5">
          <p>
            We offer a variety of programming languages and technologies, our
            classes are well structure, engaging, and tailored to meet the needs
            of all learners, whether you're new to programming or have some
            experience under your belt.
          </p>
        </div>
        <div>
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-52 h-60">
            <img src={Arrow} className="" alt="an arrow design" />
          </div>

          <div className="flex w-full justify-center items-center gap-10">
            <Course
              title="HTML & CSS"
              subtitle="8 Weeks"
              level={0}
              status="closed"
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
              status="open"
              price="$850.00"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptatibus cumque, hic eligendi soluta commodi nobis? Ducimus nulla
          eius ipsum veniam culpa assumenda"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
