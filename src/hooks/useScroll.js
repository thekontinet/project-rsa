import React, { useEffect, useState } from 'react'

function useScroll() {
    const [position, setPosition] = useState(0)

    const handler = () => {
        setPosition(window.pageYOffset)
    }

    useEffect(function(){
        window.addEventListener('scroll', handler)
        return ()=> window.removeEventListener('scroll', handler)
    })

  return position
}

export default useScroll