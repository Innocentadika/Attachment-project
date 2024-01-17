import React, { Fragment } from 'react'
import Footer from '../common/footer/Footer';
import { Typewriter } from 'react-simple-typewriter';
import GearBox from '../images/Logo.png'
import './loarder.css'
import Navbar from '../../assets/Navbar/Navbar';
import Accounts from '../Accounts/Accounts'
const Loarder = () => {
  return (
    <Fragment>
<Navbar/>
    <div className=' justify-center items-center pt-8'>
     <div className='items-center justify-center sm:px-56 px-24 xl:px-96 xl:ml-44 md:ml-20'>
     <img style={{width: 200}} className='App-logo rounded-l-full rounded-r-full ' src={GearBox} alt="GearBox logo" />
     </div>

    <div className='justify-center text-2xl text-center items-center'>
      <h1 style={{ paddingTop: '1rem', paddingBottom: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
        {' '}
        <span style={{ color: 'red', fontWeight: 'bold', fontFamily: 'sansf'}}>
          <Typewriter
            words={['Learn', 'Perfect', 'Code', 'Build']}
            loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
        GearBox Academy.
      </h1>
    </div>
<Accounts/>
        <div>
            <div className=' text-center px-8 py-2'><h2>Welcome to GearBox Newsletter <span>&#128075;</span></h2></div>
        </div>

    <>
    <Footer/>
    </>
    </div>

    </Fragment>
    
  )
}

export default Loarder;
