import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
    <div className='p-7'>
      <img
                className='w-14 mb-2' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/800px-Uber_logo_2018.png' alt='uber logo'/>
      <div className='flex flex-col space-y-3'>
        <h1 className='flex justify-center font-bold text-2xl mt-2 '>Sign In</h1>
        <form action="" className='space-y-2'>
          <h3 className='text-lg font-medium'>What's your email address <span className='text-red-600'>*</span></h3>
          <input 
            type="text" 
            className='bg-[#eee] border rounded-sm focus:bg-slate-100 focus:outline-none focus:border-blue-200 px-4 py-2 w-full text-md placeholder:text-sm'
            placeholder='example@gmail.com' 
            required />
          <h3 className='text-lg font-medium'>Password <span className='text-red-600'>*</span></h3>
          <input 
            className='bg-[#eeee] border rounded-sm focus:bg-red-100 focus:outline-none focus:border-red-200 px-4 py-2 w-full text-md placeholder:text-sm'
            type='password' 
            placeholder='Password' 
            required />

            <button className='py-2 w-full rounded-md bg-orange-500 text-gray-800 text-lg font-semibold'>Log in</button>
        </form>
      </div>

      <div className='flex justify-center space-x-1 items-center h-10'>
        <hr className='h-0.2 w-1/2  bg-gray-400'/>
        <h1 className='text-nowrap text-sm text-gray-300'>OR</h1>
        <hr className='h-0.2 w-1/2  bg-gray-400'/>
      </div>

      <div>
        <Link to="/signup" className='flex justify-center items-center py-2 w-full rounded-md bg-green-500 text-gray-800 text-lg font-semibold'>Sign Up</Link>
      </div>
      


    </div>
  )
}

export default UserLogin