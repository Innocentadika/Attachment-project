import React, { useState } from 'react'
import GearBox from '../images/Logo.png'
import Navbar from '../../assets/Navbar/Navbar';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentationFromAuth } from '../../utils/firebase/firebase.utils';
import { LockClosedIcon } from '@heroicons/react/20/solid'
// import { SpinnerDotted   } from 'spinners-react'

const defaultFormFields = {
  email: "",
  password: "",
}

const SignIn = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const logGoogleUser = async () => {
    const response = signInWithGooglePopup();
    console.log(response);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();

      await createUserDocumentationFromAuth(user);
    resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password password for above email');
          
          break;
      case 'auth/user-not-found':
        alert('no user associated with this email, please go to sign up.');

        break;

        default:
          console.log(error);
          
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value});
  }

  return (

    <>
      <Navbar/>
      <div className=" min-h-screen items-center justify-center py-10 px-4 sm:px-28 lg:px-96  bg-black text-white">
        <div className="w-full lg:ml-16 max-w-md sm:max-w-lg lg:max-w-lg space-y-8">
          <div>
            <img
              className="mx-auto h-24 w-auto rounded-l-full rounded-t-full"
              src={GearBox}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-3 text-center text-base text-slate-100 font-medium  hover:text-indigo-600">
              GearBox Keep posted
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" onSubmit={handleSubmit}>
            <div className="space-y-3 rounded-md shadow-sm">
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
                  className="relative block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base px-1.5sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className='flex space-x-8'>
              <button
              type='submit'
                
                className="group relative flex w-5/12 justify-center rounded-md bg-blue-600 py-2 px-3 pl-6 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-300 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Login
              </button>

              <button
                className="group relative flex w-6/12 justify-center rounded-md bg-blue-600 py-2 px-3 pl-6 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
 onClick={logGoogleUser}             >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-300 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                 Google Sign In
              </button>
            </div>
          </form>
          {/* <div className='p-4 sm:px-52 px-32 font-semibold'>
            <SpinnerDotted   size={68} thickness={133} speed={100} color="rgba(57, 118, 172, 1)" secondaryColor="rgba(0, 0, 0, 0.44)"  />
            </div> */}
        </div>
      </div>

    </>

  )
}

export default SignIn;

