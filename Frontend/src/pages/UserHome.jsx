import React from 'react'

const UserHome = () => {
  return (
    <div className='bg-primary-content  '>
      <img
          className='absolute w-14 mb-2 mt-3 ml-3 transform transition duration-300 hover:scale-110  hover:opacity-60'
          src='https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1200x675.v1623372852.jpg' alt='uber logo' />
      <div className='w-screen h-screen'>
        <img className='w-full h-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'/>
      </div>

      <div className='absolute'>
        <h1>Find a trip</h1>
        <form>
          <input type="text" placeholder='add a pickup location'/>
          <input type="text" placeholder='add a destination location'/>
        </form>
        <button><img/>leave now <img/></button>
      </div>
    </div>
  )
}

export default UserHome