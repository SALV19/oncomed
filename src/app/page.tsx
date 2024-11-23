'use client'

import React, { useEffect, useState } from 'react'
import '../styles/login.css'
import Link from 'next/link'

const HomePage = () => {
  const [login, setlogin] = useState(true)
  useEffect(() => {
    setInterval(() => {
      setlogin(false)
    }, 3000)
  }, []);
  
  if (login) {
    return (
      <div className='bg-specialGreen h-screen w-screen text-white flex justify-center'>
        <h1 className='text-7xl font-cookie start_login'>Onkomed</h1>
      </div>
    )
  }
  return (
    <div>
      <div className='bg-specialGreen h-screen w-screen text-white flex justify-center items-center'>
        <h1 className='text-7xl font-cookie top-[50px] absolute'>Onkomed</h1>
        <aside className='w-10/12 h-2/3 bg-white rounded-md mt-24 text-black flex flex-col items-center justify-center'>
          <h2 className='font-sans font-bold text-2xl my-4'>Log In</h2>
          <fieldset className='w-10/12'>
            <p className='mt-1'>Email</p>
            <input placeholder='ex@mail.com' className='w-full h-8 p-2 border-2 border-gray-500 rounded-md mb-8'/>
            <p>Password</p>
            <input type="password" placeholder='**********' className='w-full h-8 p-2 border-2 border-gray-500 rounded-md'/>
            <div className='w-full flex justify-center'>
              <Link className='w-3/5 my-10 p-2 bg-specialGreen rounded-md text-white text-center' href={'/views/home'}>Enter</Link>
            </div>
          </fieldset>
          <hr className='w-full' />
          <button className='mt-5 text-xl text-specialGreen'>Create account</button>
        </aside>
      </div>
    </div>
  )
}

export default HomePage