import React from 'react'
import { BiTask } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
    <div
    className="hero min-h-screen"
    style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1684331678124-ff62c82cef7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFza3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)' }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md text-white bg-black p-8 rounded-xl bg-opacity-50 backdrop-blur-sm flex flex-col gap-2">
        <BiTask size={108} className='mx-auto'/>
        <h1 className="mb-5 text-5xl font-bold">ToDoNinja</h1>
        <p>
        Become the master of your tasks and conquer your day with todoNinja – the ultimate ToDo list application designed to elevate your productivity to new heights.
        </p>
        <Link to={"/signup"} className="btn btn-primary">Get Started</Link>
      </div>
    </div>
  </div>
</>
  )
}

export default Hero