import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-bottom bg-[url(https://img.freepik.com/free-photo/hand-holding-network-graphic-overlay-banner_53876-121476.jpg?ga=GA1.1.485487694.1735141790&semt=ais_hybrid)]  h-screen flex justify-between flex-col w-full bg-red-300'>
            {/* logo */}
            <div className='flex justify-end'>
               <img
                className='w-14 mr-4 mt-3' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/800px-Uber_logo_2018.png' alt='uber logo'/>
            </div>
  
           


            {/* starter and btn */}
            <div className='bg-white  px-5 py-5 pb-7 space-y-3'>
                <h1 className='text-2xl font-bold'>Get start with <span className='text-[#FFD700]'>Uber</span></h1>
                <Link to="login" className='flex items-center justify-center py-2 bg-black text-white w-full rounded-lg'>Continue</Link>
            </div>
        </div>

    </div>
  )
}

export default Home