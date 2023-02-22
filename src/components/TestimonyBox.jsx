import React, { useState } from 'react'

function TestimonyBox({name, location, imageUrl, active, index, onClick}) {

  return (
    <div onClick={onClick} className={`shadow w-full py-4 flex justify-start gap-5 px-10 rounded-md ${active === index ? 'bg-zinc-200' : 'hover:bg-zinc-50'}`}>
      <img src={imageUrl?? '/TestimonyImg.svg'} className='w-16 h-16 rounded-full'/>
      <div className='text-start'>
        <h4>{name}</h4>
        <p>{location}</p>
      </div>
    </div>
  )
}

export default TestimonyBox