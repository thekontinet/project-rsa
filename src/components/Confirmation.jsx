import classNames from 'classnames'
import React from 'react'

function Confirmation({currentStep}) {
  return (
    <div className={classNames('text-center md:tracking-wider flex flex-col items-center justify-center md:w-1/2 md:mx-auto h-screen space-y-10', {
      'hidden': currentStep !== 4
    })}>
    <img height={164} width={188} src='/PaymentSuccess.svg' className='w-36 h-36' alt='a check mark'/>
    <p className='font-medium text-xl md:text-2xl'>Your application was successful. We are currently reviewing your status. Our agent will reach out to you within the next 24 hours. If you need any help or futher enquiry, <a className='text-primary-600' target='_blank' href='#'>contact us on whatsapp</a></p>
    </div>
  )
}

export default Confirmation