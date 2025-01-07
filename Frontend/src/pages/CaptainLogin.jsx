import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [CaptainSignInData, setCaptainSignInData] = useState({});
  
    useEffect( ()=>{
      console.log("Captain sing" ,CaptainSignInData)
    },[CaptainSignInData])
  
    const handleCaptainSignInSubmit = (e) =>{
      e.preventDefault();
      
      setCaptainSignInData({
        email: email,
        password: password
      })
      // console.log(userSignInData)
      setEmail("");
      setPassword("")
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between '>

      <div className='flex flex-col space-y-1'>
        <img
          className='w-14 mb-2'
          src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt='uber logo' />

        {/* <h1 className='flex justify-center font-bold text-2xl  '>Sign In</h1> */}
        <form onSubmit={(e)=>{
          handleCaptainSignInSubmit(e)
        }} className='space-y-2'>
          <h3 className='text-lg font-medium'>What's your email address <span className='text-red-600'>*</span></h3>
          <input
            type="text"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}


            className='bg-[#eee] border rounded-sm focus:bg-slate-100 focus:outline-none focus:border-blue-200 px-4 py-2 w-full text-md placeholder:text-sm'
            placeholder='example@gmail.com'
            required />
          <h3 className='text-lg font-medium'>Password <span className='text-red-600'>*</span></h3>
          <input

            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className='bg-[#eeee] border rounded-sm focus:bg-red-100 focus:outline-none focus:border-red-200 px-4 py-2 w-full text-md placeholder:text-sm'
            type='password'
            placeholder='Password'
            required />

          <button className='py-2 w-full rounded-md bg-orange-500 text-gray-800 text-lg font-semibold'>Log in</button>
        </form>

        <p className='flex justify-center'>New here?<Link to="/captain-signup" className='text-blue-600'>Join as Captain </Link> </p>
      </div>

      <div className='flex  justify-center space-x-1 items-center h-10'>
        <hr className='h-0.2 w-1/2  bg-gray-400' />
        <h1 className='text-nowrap text-sm text-gray-300'>OR</h1>
        <hr className='h-0.2 w-1/2  bg-gray-400' />
      </div>

      <div className=''>
        <Link to="/login" className='flex justify-center items-center py-2 w-full rounded-md bg-green-500 text-gray-800 text-lg font-semibold'>Sign in as User</Link>
      </div>








    </div>
  )
}

export default CaptainLogin