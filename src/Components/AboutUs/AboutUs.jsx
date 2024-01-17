import React from 'react'
import Footer from '../common/footer/Footer';
import Navbar from '../../assets/Navbar/Navbar'
// import Map from '../Map/Map';
import Projects from '../../assets/Projects/Project';
import Accounts from '../Accounts/Accounts'
import Media from '../Media/Media';
import Guest from '../../assets/Guest/Guest';

const AboutUs = () => {
  return (
    <div  className='text-white lg:text-lg' >
      <><Navbar /> </>
      <div>
            

            <div className=' text-white'>
              
              <div style={{backgroundImage: `url(${require('../images/student.png')})`, backgroundSize: 'cover', alignContent: 'center'}} className='p-4 lg:px-40 lg:py-44 sm:py-12 md:py-12'>
              <div className='flex space-x-5 p-1'>
              <div className='bg-red-800 w-5 h-28'></div>
<div className='font-bold text-xl pt-10'> <h1>GEARBOX</h1>
<h1 className=' font-extrabold'>ACADEMY.</h1></div>
              </div>

              <h1>Gearbox Academy is a training institution that focuses on imparting relevant hands on skills through Human Centered Design (HCD) and Industry 4.0 technologies.</h1>
              <p>GearBox mentorship program is to ensure every student fulfil his career goals and prepare him/her for the industry.</p>
              <p>In our organization we have different corhots that happen after every <strong className=' font-semibold text-red-600'>3 MONTHS ANUALY.</strong> for every cohort a fee is paid to cater for resources provided to the student to help their Development.</p>

              </div>

              <div className=' bg-black p-4 lg:px-40 lg:py-44 sm:py-12 md:py-12'>
                <h1 className='text-5xl font-semibold py-1 text-center'><span className='text-red-800'>WE</span> STARVE</h1>
                <p>To promote digital literacy in engineering and technical fieldsWe train students to identify challenges in our society, then come up with effective and practical solutions. Our students therefore apply HCD (Human Centered Design) in ideation to make solutions meet the users need, then implement them by applying industry 4 technologies such as Embedded systems, Digital design and Fabrication or RoboticsOur goal is to bridge the gap between Academia and the working industry, promoting the development of industry relevant skills that shall be relevant in creating solution oriented professionals and institutions.</p>

              </div>

            </div>

            <div>
              <Guest/>
            </div>

            <div style={{backgroundImage: `url(${require('../images/aboutus.png')})`, backgroundSize: 'cover', alignContent: 'center'}}  className='text-center py-4 text-5xl font-semibold lg:py-24 sm:py-20 md:py-20'>
              <h1>JOIN GEARBOX ACADEMY</h1>
              <h1 className='text-red-800'>NOW</h1>
            </div>
            <>
            <Projects/>
            <Media/>
            <Accounts/>
            
            {/* <Map/> */}
            </>
      </div>
      <><Footer/> </>
    </div>
  )
}

export default AboutUs;
