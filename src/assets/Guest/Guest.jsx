import React from 'react'
import { Slide } from 'react-slideshow-image';
import dataGuest from './dataGuest';

const Guest = () => {
  return (
    <div className=''>
        <Slide>
        {dataGuest.map((dataGuest, index) => (
         <div key={index}>
            <div className='text-center md:py-56 sm:py-56 lg:py-72 py-40' style={{width: '100%', backgroundImage:`url(${dataGuest.visitor})`, backgroundSize: 'cover'}}>
                
            </div>
         </div>
        ))}

      </Slide>
    </div>
  )
}

export default Guest;
