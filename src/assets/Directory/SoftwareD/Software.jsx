import React, { useState } from 'react'
import {IoIosAddCircleOutline} from 'react-icons/io'
import Footer from '../../../Components/common/footer/Footer';
import Soft from '../Pictures/software2.png'
import Navbar from '../../Navbar/Navbar';


const Software = () => {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function toggleDropdown1() {
    setIsOpen1(!isOpen1);
  }

  function toggleDropdown2() {
    setIsOpen2(!isOpen2);
  }


  return (
    <div>
      <> <Navbar/> </>

      <div>
        <h1 style={{color: '#f51655', fontSize:'2rem', padding: 2}} className='lg:ml-10'>Software Development</h1>
      </div>

      <div className=' sm:flex md:flex lg:flex p-2 lg:space-x-8'>

        <div className='p-2 description'>
            <p>This course is designed to provide you with comprehensive knowledge and practical skills in embedded systems development. From hardware design to firmware development, you will learn how to build efficient, reliable and secure systems for a variety of applications.</p>
            <p>Throughout the course, you will gain hands-on experience in designing, programming, and testing embedded systems using a range of hardware and software tools. You will also learn how to optimize your systems for power consumption, memory usage, and real-time performance.</p>
            <p>By the end of this course, you will have a solid foundation in embedded systems development and be equipped with the skills to tackle real-world projects. Whether you are looking to start a career in embedded systems or expand your existing skill set, this course is the perfect choice for you.</p>
        </div>

<img  className='container ' src={Soft} alt="embed" />

      </div>
     
     <div className='p-2 mt-10'>
     <a style={{color: 'red',  width: 50, height: 20 }} className=' border-red-500 border p-1 rounded font-thin text-lg' href="/">Enrol Now</a>
     </div>

    
        <h1 className='text-center text-3xl font-bold'>Course Details</h1>

        <div className=' '>

<div className='py-5 mb-44'>

        <div className='pb-4'>
       <div style={{width:300}} className='flex bg-slate-200 rounded space-x-2 float-right p-2'>
       <p>Period of study, intake</p>
      <button className=' rounded-full' onClick={toggleDropdown1}><IoIosAddCircleOutline className='ml-24 text-lg'/> </button>
       </div>
      {isOpen1 && (
        <div className='rounded bg-orange-300 float-right mr-8 font-sans p-2'>
          <p>3 Months per intake; intake happening.</p>
          <p>
            <li>January-April</li>
            <li>May-August</li>
            <li>September - December</li>
          </p>
          
          
          
        </div>
      )}
    </div>
    <br />

    <div className='py-1 space-y-2'>
       <div style={{width:300}} className='flex bg-slate-200 rounded space-x-2 float-right p-2'>
       <p>Cost of study</p>
      <button className=' rounded-full' onClick={toggleDropdown2}><IoIosAddCircleOutline className='ml-40 text-lg'/> </button>
       </div>
      {isOpen2 && (
        <div className='rounded bg-orange-300 float-right mr-8 font-sans p-2'>
          <p>Ksh. 40,750</p>
          <p className=' italic font-semibold text-red-500 text-lg'>No Payment made in cash!</p>
          <p>
            <li>Paybil No:</li>
            <li>Account No:</li>
            <li>Business No: your admission number</li>
          </p>
        </div>
      )}
    </div>

    </div>

        </div>

        <div><Footer/></div>
    </div>
  )
}

export default Software;
