import React from 'react'
import TestimonyBox from './TestimonyBox';
import TestimonialSlider from './TestimonialSlider';


function Testimonial({id}) {
  return (
    <section ref={id} className='py-10'>
      <h1 className='text-orange-500 text-3xl pt-9 md:text-4xl font-bold font-alfa text-center tracking-widest uppercase'>Testimonials</h1>
      <div className='grid md:grid-cols-2 gap-10 mx-7 md:mx-16 mt-10 place-content-between items-start'>
         <div className='max-w-md order-2 md:order-1 flex flex-col gap-6'>
         <TestimonyBox name='John Doe' location='Delta State, Nigeria'/>
         <TestimonyBox name='John Doe' location='Delta State, Nigeria'/>
         <TestimonyBox name='John Doe' location='Delta State, Nigeria'/>
         </div>
         <div className='order-1 md:order-2'>
         <TestimonialSlider/>
         </div>
      </div>
    </section>
  )
}

export default Testimonial