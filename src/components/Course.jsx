import React from 'react';
import OfferBadge from './OfferBadge.jsx';
import classNames from 'classnames';

function Course({variant}){
    return(
        <div className='bg-white w-80 shadow-sm'>
        <div>
        <img src='/offer.svg'/>
        </div>
       <div className='mx-5 text-start'>
       <div className='flex justify-between items-center'>
          <h4>HTML & CSS</h4>
          <p>8 Weeks</p>
        </div>
        <p className='flex items-center text-slate-500'><img src='/BeginnerIcon.svg'/>Beginners</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in vestibulum ante. In in congue enim</p>
        <div className='flex items-center justify-between'>
        <OfferBadge variant={variant}/>
        <p className='font-bold'>$250.00</p>
        </div>
       </div>
      </div>
    )
}

export default Course