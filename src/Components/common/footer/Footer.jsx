import React from 'react';
// import GearBox from '../../images/Logo.png';
import WhatsAppButton from '../../../assets/whatsapp/WhatsApp'
import { Link } from 'react-router-dom'
import {
    FaGithub,
    FaFacebookSquare,
    FaLinkedin,
    FaTwitterSquare,
    FaYoutube,
  } from 'react-icons/fa';
function Footer() {
  return (

<div style={{backgroundImage: `url(${require('../../images/backgrnd.png')})`, backgroundSize: 'cover', alignContent: 'center'}}
className='bg-zinc-800 '>
    
  <div className='footer  p-1 '>
         <div className=' ml-4 text-center ml-88 justify-end mr-36 mt-4 gap-20 flex sm:flex items-center 2'>
            <h6 className='font-semibold text-pink-600  lg:mt-4 md:mt-4 lg:mb-2 md:mb-2'>Subscribe to our Newsletter<span className='text-lg'>&#128075;</span></h6>
            <WhatsAppButton />
        </div>

     <div className='  grid lg:cols-2 md:col-span-1 md:cols-2 gap-8 lg:flex  space-x-20 lg:ml-24 m  pt-1'>
            <div className=' pt-1 md:ml-20 lg:ml-20  grid lg:flex-cols-2  mt-1 '>
                <p className='py-2 font-semibold  text-gray-400'>GearBox Academy <br/> Ensures Every student is set for Industrial Application</p>
                <div className='flex justify-between md:w-[70%] p-4 pt-1 text-white md:gap-1 lg:gap-2'>
                    <a href="https://github.com/Innocentadika"><FaGithub size={30} /></a>
                    <a href="https://www.facebook.com/search/top?q=gearbox"><FaFacebookSquare size={30} className='text-blue-300' /></a>
                    <a href="https://twitter.com/gearboxke?lang=en"><FaTwitterSquare size={30} className='text-blue-300' /></a>
                    <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A9495955&keywords=gearbox%20&origin=RICH_QUERY_SUGGESTION&position=7&searchId=8765b8e8-8bc2-4aa8-a598-ef327d65f9d2&sid=W90"><FaLinkedin className='text-blue-300' size={30} /></a>
                    <a href="https://www.youtube.com/results?search_query=gearbox+academy"><FaYoutube size={30} className='text-red-700' /></a>
                 
                </div>
            </div>
           
<div className='md:flex md:space-x-48 sm:flex sm:space-x-32'>

                <div className='lg:mt-24 md:mt-24 lg:mb-2 md:mb-2 '>
                    <h6 className='font-medium text-white '>Location</h6>
                    <ul className='pt-4 text-gray-400'>
                        <li className='py-2 text-sm'>Avon Center, Industrial-Area</li>
                        <li className='py-2 text-sm'>Enterprise Road</li> 
                        <li className='py-2 text-sm'><a href="tel:+254796548939">(+254)796548939</a></li>
                        
                        <li className='py-2 text-sm'> <a href="mailto:info@gearboxacademy.co.ke">info@gearboxacademy.co.ke</a></li>
                        <li className='py-2 text-sm'>P.O. Box 58275-00200</li>
                    </ul>
                </div>

                    <div className='lg:mt-24 md:mt-24 lg:mb-2 md:mb-2'>
                        <h6 className='font-medium text-white'>GearBox Academy</h6>
                        <ul className='pt-4  text-gray-400'>
                            <li><Link to='/AboutUs' className='py-2 text-sm'>About us</Link></li>
                            <li><Link to='/Classes' className='py-2 text-sm'>Programs</Link></li>
                            <li><Link className='py-2 text-sm'>Portfolio</Link></li>
                            <li><Link to='/news' className='py-2 text-sm'>News</Link></li>
                            <Link 
                            to='privacy'
                            span={true}
                            smooth={true} 
                            className='py-2 text-sm'>Privacy Policy</Link>
                        </ul>
                    </div>

                    </div>

                        <div className='lg:mt-24 md:mt-24 lg:mb-2 md:mb-2 '>
                            <h6 className='font-medium text-white'>Programs</h6>
                            <ul className='pt-4  text-gray-400'>
                                <li className='py-2 text-sm'>Robotics</li>
                                <li className='py-2 text-sm'>Software Development.</li>
                                <li className='py-2 text-sm'>Embeded Systems.</li>
                                <li className='py-2 text-sm'>Cloud & IOT.</li>
                                <li className='py-2 text-sm'>BlockChain.</li>
                                <li className='py-2 text-sm'>AR / VR.</li>
                                <li className='py-2 text-sm'>EV & ML.</li>
                            </ul>
                        </div>
                        <div className='blur-lg left-10'/>
 
    </div>
    
  </div>
</div>

      
  );
}

export default Footer;