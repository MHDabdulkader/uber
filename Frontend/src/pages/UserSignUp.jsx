import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { UserDataContext } from '@/context/UserContext';

const UserSignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userSignUpData, setUserSignUpData] = useState({});


  const navigate = useNavigate();

  // import user, setuser from context
  const {user, setUser} = useContext(UserDataContext)

  useEffect(()=>{
    console.log(userSignUpData)
  },[userSignUpData])  


  const handleUserSignUpSubmit = async (e)=>{
    e.preventDefault();

    // setUserSignUpData({
    //   fullname:{
    //     firstname: firstname,
    //     lastname: lastname
    //   },
    //   email: email,
    //   password: password
    // })

    const newUser = {
      fullname:{
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);

    if(response.status === 201){
      const data = response.data

      // update user
      setUser(data.user);
      localStorage.setItem('token', data.token);

      navigate("/user-home")
    }

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between '>

      <div className='flex flex-col space-y-3'>
        <img
          className='w-14 mb-2'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/800px-Uber_logo_2018.png' alt='uber logo' />

        {/* <h1 className='flex justify-center font-bold text-2xl mt-2 '>Sign Up</h1> */}
        <form 
          onSubmit={(e) => {
            handleUserSignUpSubmit(e)
          }} 
          className='space-y-2'
        >
          <h3 className='text-md font-medium'>What's your Name <span className='text-red-600'>*</span></h3>
          <div className='flex space-x-1.5'>
            {/* first name input box */}
            
            <input
              type="text"
              value={firstname}
              onChange={(e) => { setFirstname(e.target.value) }}


              className='bg-[#eee] text-primary-content border rounded-sm focus:bg-slate-100 focus:outline-none focus:border-blue-200 px-4 py-2 w-full text-md placeholder:text-sm'
              placeholder='first name'
              required />

            {/* last name input box */}
            {/* <h3 className='text-md font-medium'>What's your last name <span className='text-red-600'></span></h3> */}
            <input
              type="text"
              value={lastname}
              onChange={(e) => { setLastname(e.target.value) }}


              className='bg-[#eee] text-primary-content border rounded-sm focus:bg-slate-100 focus:outline-none focus:border-blue-200 px-4 py-2 w-full text-md placeholder:text-sm'
              placeholder='last name'
              required />
          </div>



          {/* Email input box */}
          <h3 className='text-md font-medium'>What's your Email <span className='text-red-600'>*</span></h3>
          <input
            type="text"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}


            className='bg-[#eee] text-primary-content border rounded-sm focus:bg-slate-100 focus:outline-none focus:border-blue-200 px-4 py-2 w-full text-md placeholder:text-sm'
            placeholder='Example@gmail.com'
            required />

          {/* Password input box */}
          <h3 className='text-md font-medium'>Password <span className='text-red-600'>*</span></h3>
          <input

            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            className='bg-[#eeee] text-primary-content border rounded-sm focus:bg-red-100 focus:outline-none focus:border-red-200 px-4 py-2 w-full text-md placeholder:text-sm'
            type='password'
            placeholder='Password'
            required />

          <button className='py-2 w-full rounded-md bg-orange-500 text-gray-800 text-lg font-semibold'>Create account</button>
        </form>

        <p className='flex justify-center'>Already have account?<Link to="/signin" className='text-blue-600'>Sign in </Link> </p>
      </div>

      {/* <div className='flex  justify-center space-x-1 items-center h-10'>
        <hr className='h-0.2 w-1/2  bg-gray-400' />
        <h1 className='text-nowrap text-sm text-gray-300'>OR</h1>
        <hr className='h-0.2 w-1/2  bg-gray-400' />
      </div> */}

      <p className='text-xs leading-4'>
      By signing up, you agree to our <span className='text-blue-700'>Terms of Service</span> and <span className='text-blue-700'>Privacy Policy</span>. <br /> Your information will be securely stored and used as outlined in our policies. You confirm that you are at least 18 years old and the details provided are accurate.
      </p>








    </div>
  )
}

export default UserSignUp