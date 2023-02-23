import React, { useState } from 'react'
import Login from './Login'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menu = ['Home', 'Services', 'About us', 'Gallery']
export default function Header({ active, handleFocus }) {
  const router = useRouter()
  const [showLogin, setShowLogin] = useState(false)
  return (
    <div className='fixed top-0 left-0 right-0 z-10'>
      <div className='bg-neutral-800 py-4'>
        <div className='w-4/5 flex justify-between m-auto'>
          <Link href='/'>
            <div className='-mx-8 flex'>
              <h1 className='text-white text-lg font-bold mr-2 my-auto inline-block cursor-pointer'>TEX {' '}
                <p className='inline-block text-lime-600'>Worldwide Express</p>
              </h1>
              <img src='images/worldwide.png' className='h-8'/>
            </div>
          </Link>
          <div className='flex -mx-8'>
            <div className='flex'>
              {menu.map((component, index) => 
              <p key={index} onClick={handleFocus} className={`cursor-pointer block text-white rounded text-center align-center w-auto m-auto mr-4 hover:bg-white hover:text-black py-1 px-2 ${active === component ? 'bg-white text-black font-semibold' :''}`}>{component}</p>
              )}
            </div>
            {router.route === '/' &&
            <button 
              onClick={() => setShowLogin(prev => !prev)}
              className={`text-white px-4 ml-2 py-1 ${showLogin ? 'bg-lime-600' : 'bg-lime-700'} rounded-md`}>Log-in</button>}
          </div>
        </div>
      </div>
      {showLogin && <Login/> 
      }
    </div>
  )
}