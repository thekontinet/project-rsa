import classNames from "classnames";
import React, { useContext } from "react";
import { orderedCourseContext } from "../context/CourseContext";

function Payment({currentStep, setCurrentStep}) {
  const {orderedCourse} = useContext(orderedCourseContext)

  const handlePayment = () => {
    setCurrentStep(4)
  }
  return (
    <div className={classNames('mb-20 w-full h-full', {
      'hidden': currentStep !== 3
    })}>
      <h5 className="capitalize mb-5 tracking-wide font-semibold text-zinc-600">
        Payment
      </h5>
      <div className="flex flex-col space-y-6 md:space-y-4">
      <p className="bg-zinc-100 rounded flex justify-between items-center py-2 md:py-1 px-3">
        <span className="font-bold text-lg">{orderedCourse.name}</span>
        <span className="text-xl md:text-base">{orderedCourse.price}</span>
      </p>
      <p className="bg-zinc-100 rounded flex justify-between items-center py-2 md:py-1 px-3">
        <span className="font-bold text-lg">Total</span>
        <span className="text-xl md:text-base">{orderedCourse.price}</span>
      </p>
      <button onClick={handlePayment} className="shadow text-white text-xl md:text-base tracking-wider w-56 md:w-52 py-2 md:py-1 rounded bg-primary-500 hover:bg-primary-600 transition-all duration-300 ease-in-out">Proceed to payment</button>
      </div>
    </div>
  );
}

export default Payment;
