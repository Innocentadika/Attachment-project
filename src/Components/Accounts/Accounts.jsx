import React from 'react'
import { Link } from 'react-router-dom'

const Accounts = () => {
  return (
    <div className='py-2'>
    <div className='rounded bg-zinc-900 justify-between flex space-x-2'>
      <form action="/subscription" method="get">

      <div className='text-center text-white sm:px-28  p-4 sm:text-base lg:px-64 lg:text-xl space-y-1'>
            <p className='font-bold text-red-600 sm:py-2'>Subcribe</p>
            <input className='rounded text-black px-1 w-56 lg:w-64 ' type="email" name="" id="" placeholder='Enter your email here.' /><br />
            <button className='bg-zinc-800  rounded' type="submit">Submit</button>

        </div>

      </form>

        <div className='text-center text-white p-4 sm:px-6 lg:px-52 lg:text-xl'>
        <button className='border rounded decoration-white'><Link to='/sign-up'>Sign Up</Link></button>
        </div>
      
    </div>
    </div>
  )
}

export default Accounts;
