import React from 'react'
import { Link } from 'react-router-dom'

function Apply({id}) {
  return (
    <section ref={id} className='bg-primary-600 text-center tracking-widest py-8 text-white px-5 xl:px-96'>
      <h3 className='pt-10'>Ready to start your coding journey? Apply today and take the first step towards a brighter future in tech!</h3>
      <Link to='/' className='my-8 button capitalize bg-white hover:bg-orange-500 hover:text-white hover:animate-none transition-all duration-300 ease-in-out animate-breathing font-bold text-black'>click here to apply now</Link>
      <p>Don't hesitate to contact us if you have any questions</p>
    </section>
  )
}

export default Apply