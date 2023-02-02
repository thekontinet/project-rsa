import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


function TestimonialSlider() {
    const [active, setActive] = useState(0)
    const testimonies = [{
        title: 'I had a great experience',
        tags: ['html', 'css', 'Javascript'],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in vestibulum ante. In in congue enim. Phasellus id lacus nibh. Fusce fermentum, tellus ac tempus semper, nisl sem placerat dolor,'
    }, {
        title: 'Attained a new level of JS mastery',
        tags: ['Javascript'],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in vestibulum ante. In in congue enim. Phasellus id lacus nibh. Fusce fermentum, tellus ac tempus semper, nisl sem placerat dolor,'
    }, {
        title: 'Worthy of recommendation',
        tags: ['html', 'css'],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in vestibulum ante. In in congue enim. Phasellus id lacus nibh. Fusce fermentum, tellus ac tempus semper, nisl sem placerat dolor,'
    }]

    const lastIndex = testimonies.length - 1


    const Next = () => active >= lastIndex ? setActive(0) : setActive(active + 1)

    const Prev = () => active <= 0 ? setActive(lastIndex) : setActive(active - 1);

  return (
    <div className='w-full'>
        <div className='flex items-center mb-5 gap-10'>
            <button onClick={Prev} className='rounded-full shadow cursor-pointer p-2 hover:bg-slate-50'><FaAngleLeft className='w-7 h-7'/></button>
            <button onClick={Next} className='rounded-full shadow cursor-pointer p-2 hover:bg-slate-50'><FaAngleRight className='w-7 h-7'/></button>
        </div>
       {testimonies.map(({desc, tags, title}, index) => (
        <div key={index} className={`${active == index ? '' : 'hidden'}`}>
        <h3>{title}</h3>
        <div className='my-2 flex gap-4 items-center'>
        {tags.map(tag => (
            <span key={tag} className='bg-slate-400 text-white font-medium tracking-wider rounded-md px-2 text-sm'>{tag}</span>
       ))}
        </div>
        <p>{desc}</p>
        </div>
       ))}
    </div>
  )
}

export default TestimonialSlider