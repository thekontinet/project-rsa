import React from 'react'

function TestimonyBox({name, location, imageUrl}) {
  return (
    <div className='shadow w-full hover:bg-slate-50 py-4 flex justify-start gap-5 px-10 rounded-md'>
      <img src={imageUrl?? '/TestimonyImg.svg'} className='w-16 h-16 rounded-full'/>
      <div className='text-start'>
        <h4>{name}</h4>
        <p>{location}</p>
      </div>
    </div>
  )
}

export default TestimonyBox