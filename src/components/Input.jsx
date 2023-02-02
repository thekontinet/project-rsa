import React from 'react'

function Input({type, label, ...rest}, ref) {
  return (
    <div>
      <label className='sr-only'>{label}</label>
      <input ref={ref} type={type} className='border border-gray-400 tracking-wider outline-none font-normal text-sm rounded w-full p-3 placeholder:text-base placeholder:font-light' {...rest}/>
    </div>
  )
}

export default React.forwardRef(Input)