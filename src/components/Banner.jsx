import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import grid from "../assets/images/bg-grid.png";

function Banner() {
  return (
    <header className="relative">
      <div className="h-screen w-full px-7 md:px-32 my-5">
        <div className="md:mt-8 mt-4">
          <Link to={"/"} className="flex">
            <img src={logo} />
            <span className="font-black text-sm text-slate-500">Tech</span>
          </Link>
        </div>
        <div className="md:grid grid-cols-2 py-10">
          <div className="">
            <h3 className="uppercase  tracking-widest mb-4">
              <span className="text-sm font-medium rounded-full bg-primary-900 text-white py-1 px-2 mb-3 inline-block">
                Start Your
              </span>
              <span className="text-primary-500 md:text-8xl block font-black font-alfa">
                Coding Journey
              </span>
              with our Comprehensive online professional training.
            </h3>
            <button className="button bg-secondary-500 hover:bg-secondary-600 text-white hover:gap-8 transition-all duration-300 animate-breathing hover:animate-none">
              apply now
              <svg
                width="101"
                height="23"
                viewBox="0 0 101 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
              >
                <path
                  d="M100.055 12.8161C100.644 12.2333 100.649 11.2835 100.066 10.6948L90.5689 1.10024C89.9862 0.511477 89.0364 0.506631 88.4476 1.08942C87.8589 1.67221 87.854 2.62195 88.4368 3.21071L96.8787 11.7392L88.3502 20.1811C87.7615 20.7638 87.7566 21.7136 88.3394 22.3023C88.9222 22.8911 89.8719 22.896 90.4607 22.3132L100.055 12.8161ZM0.992347 12.75L98.9923 13.25L99.0077 10.25L1.00765 9.75002L0.992347 12.75Z"
                  fill="#F4F3F3"
                />
              </svg>
            </button>
            <p className="md:text-base text-lg text-slate-500 mt-8">
              If you're interested in learning to code, you've come to the right
              place. Our tutorial is designed to provide you with the knowledge
              and skills you need to become a proficient coder in no time.
              Whether you're looking to start a new career in tech, build your
              own app, or simply learn a new skill, we've got you covered.
            </p>
          </div>
          <div className="max-w-sm md:max-w-xl order-1 lg:order-2">
            <img
              className="animate-jumping"
              src="/IndexImage.svg"
              alt="an illustration of coders"
            />
          </div>
        </div>
      </div>
      <img className="absolute top-10 -z-50" src={grid} />
      <img className="absolute bottom-10 -z-50" src={grid} />
      <img className="absolute top-10 -z-50 right-0" src={grid} />
      <img className="absolute bottom-10 -z-50 right-0" src={grid} />
    </header>
  );
}

export default Banner;
