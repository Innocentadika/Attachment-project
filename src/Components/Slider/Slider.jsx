import React from 'react';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './slider.css'
import clientData from './clientData'
import News from '../images/slder-background.png'


const Slider = () => {
    return (

      <div style={{backgroundImage: `url(${News})`, backgroundSize: 'cover'}} className='rounded' >
        <h2 className='text-center'>GearBox Lineup</h2>
        <Slide>
         {clientData.map((clientData, index)=> (
            <div  key={index}>
              <div className=' testimonials_container pb-8 space-x-1'>
      <div className='swiper-wrappe'>

      <article className='testimonial swiper-slide'>
        <div className='avatar'>
          <img src={clientData.image}  alt='Client'/>
      
        </div>
        <div className='testimonial_info'>
          <h5 className='text-white'> {clientData.name} </h5>
          <h1 className='text-red-600 text-lg font-bold'>Department: <span className='text-white font-serif'>{clientData.department}</span></h1>
        </div>
        <div className='testimonial_body'>
          <p>{clientData.review}</p>
        </div>
      </article>

      </div>
    </div>
              
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slider;
