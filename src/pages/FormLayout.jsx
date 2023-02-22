import classNames from "classnames";
import React, { useContext, useState } from "react";
import AccountSetup from "../components/AccountSetup";
import ChooseCourse from "../components/ChooseCourse";
import Confirmation from "../components/Confirmation";
import Payment from "../components/Payment";
import {CourseContextProvider} from '../context/CourseContext'

function FormLayout() {
  const [currentStep, setCurrentStep] = useState(1);
  // console.log(orderCourse)
  return (
    <CourseContextProvider>
        <div className="flex flex-col md:flex-row shadow items-center relative md:h-screen justify-center md:w-screen overflow-hidden">
        <div className={classNames('bg-primary-600 px-5 flex flex-col space-y-3 pt-4 pb-8 h-full w-full md:max-w-[40%] tracking-widest text-white', {
              'hidden': currentStep == 4
            })}>
          <div className="absolute overflow-x-hidden top-4 left-36 lg:left-72 z-10 gap-4 lg:gap-10 grid grid-cols-2 place-content-between w-80">
            <img src="/FormLayoutBox.svg" className="w-36 lg:w-40 h-36 lg:h-40 animate-pulse" />
            <img src="/FormLayoutBox.svg" className="w-36 lg:w-40 h-36 lg:h-40 animate-pulse" />
            <img src="/FormLayoutBox.svg" className="w-36 lg:w-40 h-36 lg:h-40 animate-pulse" />
            <img src="/FormLayoutBox.svg" className="w-36 lg:w-40 h-36 lg:h-40 animate-pulse" />
            <img src="/FormLayoutBox.svg" className="w-36 lg:w-40 h-36 lg:h-40 animate-pulse" />
            <img src="/FormLayoutBox.svg" className="w-36 lg:w-40 h-36 lg:h-40 animate-pulse" />
          </div>
          <div className="z-30">
            <h2 className="ml-2">Rolom Tech</h2>
            <img  src="/FormImage.svg" alt='a group of people illustration'/>
            <h1 className="text-center mt-4">
              Few click away from starting your tech journey
            </h1>
          </div>
        </div>
        <div className="z-10 px-8 bg-white w-full h-full">
          <h1 className={classNames('my-10 text-center md:text-start md:text-3xl text-xl',{
            'hidden': currentStep == 4
          })}>Complete the form to apply</h1>
          
          <ChooseCourse  currentStep={currentStep} setCurrentStep={setCurrentStep}/>
          <AccountSetup currentStep={currentStep} setCurrentStep={setCurrentStep}/>
          <Payment currentStep={currentStep} setCurrentStep={setCurrentStep}/>
          <Confirmation currentStep={currentStep}/>
        </div>
      </div>
          </CourseContextProvider>
  );
}

export default FormLayout;
