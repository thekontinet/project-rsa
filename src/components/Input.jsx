import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

function Input({ type, label, error, ...rest }, ref) {

  return (
    <div>
      <div className="flex items-center justify-between">
      <label className='sr-only'>{label}</label>
      <span className="text-red-500 tracking-widest text-right">{error?? ''}</span>
      </div>
      <input
        ref={ref}
        type={type}
        className={classNames('border border-gray-400 tracking-wider outline-none font-normal text-sm rounded w-full p-3 placeholder:text-base placeholder:font-light', {
          'border-red-500 border-2': error !== ''
        })}
        {...rest}
      />      
    </div>
  );
}


export default React.forwardRef(Input);
