import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'
import Courses from '../Courses/Courses'

const Programs = () => {
  return (
    <Fragment>  
      <div>
      <Navbar/>
        <div className='bg-black' >
            <h2 className=' lg:pl-32'>Are you Enthusiastic about Modern Technology?</h2>
            <p className='text-center font-extrabold text-lg text-blue-200'>GearBox Programs...</p>

            <h1 className='text-center font-serif text-lg text-white'>GearBox Home of Engineers</h1>
            
            </div>
            

      </div>
      <Courses/>
    </Fragment>
  )
}

export default Programs;
