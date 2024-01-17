import React, { useState } from 'react'
import GearBox from '../images/Logo.png'
import { LockOpenIcon } from '@heroicons/react/20/solid'
import Navbar from '../../assets/Navbar/Navbar';
import { createAuthUserWithEmailAndPassword, createUserDocumentationFromAuth } from '../../utils/firebase/firebase.utils';


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {

  const [ formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

const resetFormFields = () => {
  setFormFields(defaultFormFields);
}

const handleSubmit = async (event) => {
  event.preventDefault();

  if (password !== confirmPassword) {
    alert('password did not match');
    return;
  }
  try {
    const { user } = await createAuthUserWithEmailAndPassword(
      email,
      password
    );

    await createUserDocumentationFromAuth(user, {displayName});
    resetFormFields();

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert("'Couldn't create user, email already in use");
    } else {
      console.log('user creation encountered an error', error.message);
    }
  }
};

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormFields( {...formFields, [name]: value});
}

  return (

    <>
      <Navbar/>
      <div className=" min-h-screen items-center justify-center py-10 px-4 sm:px-28 lg:px-96  bg-black text-white">
  
        <div className="w-full lg:ml-10 max-w-md sm:max-w-lg lg:max-w-xl space-y-8">
          <div>
            <img
              className="mx-auto h-24 w-auto rounded-l-full rounded-t-full"
              src={GearBox}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Lets create your account
            </h2>
            <p className="mt-3 text-center text-base text-slate-100 font-medium  hover:text-indigo-600">
              GearBox Newsletter!
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" onSubmit={handleSubmit}>
            <div className="space-y-3 rounded-md shadow-sm">
            <div>
                <label htmlFor="email-address" className="text-gray-200">
                  Full Names:
                </label>
                <input
                  id="email-address"
                  name="displayName"
                  type="text"
                  autoComplete="current-name"
                  required
                  onChange={handleChange}
                  className="relative block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base px-1.5 sm:leading-6"
                  placeholder="Enter full names"
                />
              </div>

              <div>
                <label htmlFor="email-address" className="text-gray-200">
                  Email address:
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleChange}
                  className="relative block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base px-1.5 sm:leading-6"
                  placeholder="Enter email address"
                />
              </div>

              <div>
<label htmlFor="password" className="text-gray-200 ">Password:</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handleChange}
                  className="relative block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base px-1.5 sm:leading-6"
                  placeholder="Password"
                />
              </div>
              <div>
<label htmlFor="password" className="text-gray-200 ">ConfirmPassword:</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handleChange}
                  className="relative block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base px-1.5 sm:leading-6"
                  placeholder="Reapeat Password"
                />
              </div>
            </div>
<div className='flex'>

<div className='w-7/12'>
              <button
              type='submit'
                
                className="group relative flex lg:w-7/12 sm:w-7/12  justify-center rounded-md bg-blue-600 py-2 px-3 pl-8 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockOpenIcon className="h-5 w-5 text-indigo-300 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign Up
              </button>

            </div>
  
            <div className="flex items-center justify-between">

              <div className="text-sm">
                <a href="/sign-in" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Already have an account?
                </a>
              </div>
            </div>

            
            </div>
          </form>
        </div>
      </div>

    </>

  )
}

export default SignUp;
