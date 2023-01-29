import classNames from 'classnames'
import React from 'react'

function OfferBadge({variant}) {
  let img = ''
  if(variant === 'open'){
    img = '/CheckMark.svg'
  }
  else{
    if(variant === 'close'){
       img = '/X.svg'
    }
    else{
       img = '/Time.svg'
    }
  }
  
  let badge = classNames({
       badgeClass: 'flex w-20 px-3 rounded-xl text-white items-center justify-between text-sm',
    'badgeClose': variant === 'close' ? 'bg-gray-500' : '' ,    
    'badgeOpen': variant === 'open' ? 'bg-green-500' : '',    
    'badgeUnavailable': variant === 'unavailable' ? 'bg-purple-500' : '',    
  })
  return (
    <div className={badge}>{variant !== 'unavailable'? variant : 'Jan 18'}<img src={img}/></div>
  )
}

export default OfferBadge