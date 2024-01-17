import React from 'react'
import { Link } from 'react-router-dom';
import { CgLogIn } from 'react-icons/cg'
import { IoIosContact} from 'react-icons/io'
import { BiChevronDown} from 'react-icons/bi'

import GearBox from '../../Components/images/Logo.png'

import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href="/"><img style={{width: 25}} className='rounded-l-full rounded-r-full' src={GearBox} alt="GearBox logo" /></a>
     <a href="/news">News</a>
        <div className='dropdown'>
    <button className="dropbtn flex items-center">More<BiChevronDown className='text-lg'/>
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="/">Academy</a>
      <a href="/Classes">Programs</a>
      <a href="/subscription">Subscribe</a>
      <a href="/AboutUs">About Us</a>
      <a href="/">Feedback</a>
    </div>
  </div>
        <div className=' float-right'>
        <Link className='flex items-center' to='/sign-up'><IoIosContact className='text-xl font-bold'/>SignUp</Link>
        <Link className='flex items-center' to='/sign-in'><CgLogIn className='text-xl font-bold'/>Login </Link>
        
        </div>
      
    </div>
  )
}

export default Navbar;
