import React, { Fragment } from 'react'
import Youtube from '../../assets/Youtube/Youtube';
import Navbar from '../../assets/Navbar/Navbar'
import GearBox from '../images/Logo.png'
import Footer from '../common/footer/Footer'
import Slider from '../Slider/Slider';
import Media from '../Media/Media';

const News = () => {
  return (
    <Fragment>
      <Navbar/>
    <div className='py-4'>
    
    <div className='px-1 flex py-3'>

    <div className=' items-center justify-center sm:pl-32 pl-1 xl:pl-96 xl:ml-16 md:ml-20'>
     <img style={{width: 60}} className='App-logo rounded-l-full rounded-r-full ' src={GearBox} alt="GearBox logo" />
     </div>

     <div className='font-bold'>
      <p>The Research and Innovation Magazine</p>
      <p className='text-red-800 text-center'>GearBox Academy</p>
      </div>

      </div>

    <div>
    <Youtube/>
    </div>
    <div>
      <h1 className='text-center font-medium text-3xl py-4'>Headline this week.</h1>
    </div>
    <Slider/>
    </div>
    <Media/>
    <Footer />
    </Fragment>
  );
}

export default News;
