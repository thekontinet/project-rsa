import classNames from "classnames";
import React, { useContext, useState } from "react";
import { orderedCourseContext } from "../context/CourseContext";

function ChooseCourse({ currentStep, setCurrentStep }) {
  const {setOrderedCourse} = useContext(orderedCourseContext);
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "HTML & CSS",
      price: "$120.00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet commodo mauris, ut vulputate sem rhoncus lobortis. Praesent venenatis luctus diam vel rhoncus. Nulla nec porta est. Morbi egestas felis in ipsum condimentum, ut egestas lorem pharetra.",
      readMore: false,
    },
    {
      id: 2,
      name: "Javascript",
      price: "$130.00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet commodo mauris, ut vulputate sem rhoncus lobortis. Praesent venenatis luctus diam vel rhoncus. Nulla nec porta est. Morbi egestas felis in ipsum condimentum, ut egestas lorem pharetra.",
      readMore: false,
    },
    {
      id: 3,
      name: "React",
      price: "$150.00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet commodo mauris, ut vulputate sem rhoncus lobortis. Praesent venenatis luctus diam vel rhoncus. Nulla nec porta est. Morbi egestas felis in ipsum condimentum, ut egestas lorem pharetra.",
      readMore: false,
    },
  ]);

  //A function for handling the Read More link
  const handleReadMore = (id, readMore) => {
    setCourses(
      courses.map((item) => {
        if (item.id === id) {
          return { ...item, readMore: !readMore };
        } else {
          return item;
        }
      })
    );
  };

  //Function to handle COURSE SELECTION & Hiding Course List after selection
  const handleOrderCourse = (name, price) => {
    //  console.log(name, price);
    setOrderedCourse({name: name, price: price});
    setCurrentStep(2);
  };

  // console.log(orderedCourse)

  return (
    <div
      className={classNames("mb-10 w-full h-full", {
        hidden: currentStep !== 1,
      })}
    >
      <h5 className="capitalize mb-2 tracking-wide font-semibold text-zinc-600">
        choose course
      </h5>
      <div className="flex flex-col cursor-pointer space-y-5">
        {courses.map(({ id, name, price, desc, readMore }, index) => (
          <div
            key={index}
            className="bg-zinc-100 transistion-all duration-300 ease-in-out hover:bg-zinc-200 py-2 px-5 rounded"
          >
            <h3 className="flex items-center uppercase tracking-wider justify-between">
              {name} <span className="text-lg font-normal">{price}</span>
            </h3>
            <p>
              {readMore ? desc : desc.substring(0, 100).concat("...")}
              <span
                onClick={() => handleReadMore(id, readMore)}
                className="capitalize block text-orange-400 transistion-all duration-300 ease-in-out hover:text-orange-600 cursor-pointer underline"
              >
                read more
              </span>
            </p>
            <button
              onClick={() => handleOrderCourse(name, price)}
              className="float-right text-white text-sm rounded capitalize py-1 tracking-wide font-medium px-3 bg-primary-500 transistion-all duration-300 ease-in-out hover:bg-primary-600 shadow"
            >
              apply now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseCourse;
