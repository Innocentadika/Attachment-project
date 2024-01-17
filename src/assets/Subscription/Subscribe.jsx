import React from 'react'
import './Subscibe.css'
import {RiSendPlaneFill} from 'react-icons/ri'
import {BsArrowDownCircle} from 'react-icons/bs'
import Update from '../../Components/images/update.png'
import Navbar from '../../assets/Navbar/Navbar';


const Subscribe = () => {

    const handleClick = () => {
      alert('Thank you for subcribing!');
    };

  return (
    <div>
<Navbar/>
        <div className='subscribe'>

            <div className='subscribe_box'>

                <div className='subscribe_box_left'>
                    <h2>Don't miss out exciting Updates.</h2>
                    <p>Subscribe to our super-exclusive developments from our academy where transformation happens.</p>
                    <p className=' items-center flex italic text-red-600'>Click the Wording<BsArrowDownCircle className=' ml-2'/></p>

                    <div>
                       <form action="" method="post">

                       <div className='subscribe_box_left_box'>
                       <span>01</span> 
                       <option className='All-news' value="All news update">
                       All news update.</option>
                    </div>

                    <div className='subscribe_box_left_box'>
                       <span>02</span> 
                       <div className='dropdown'>
                       <small>Get for specific programs</small>
                       <div className='dropdown-content'>
                        <option value="Software Development">Software Devops.</option>
                        <option value="Robotics">Robotics.</option>
                        <option value="Embeded Systems">Embeded Systems.</option>
                        <option value="Cloud & IOT">Cloud & IOT.</option>
                        <option value="submit">Blockchain.</option>
                        <option value="AV / VR">AV / VR.</option>
                        <option value="EV & ML.">EV & ML.</option>
                       </div>
                       </div>

                    </div>

                       <div className='subscribe_box_left_input rounded'>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter email address"
                />
                <button type="submit" onClick={handleClick}><RiSendPlaneFill className='subscribe_box_left_input_icon'/></button>
              </div>
                       </form>
                    </div>

                </div>

                <div className='suscribe_box_right'>
                    <img src={Update} alt="get updated" style={{width:800, height:300}} />
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Subscribe;
