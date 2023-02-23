import React from 'react'


export default function HomeComponent({ homeRef, showLogin }) {
  return (
    <div ref={homeRef} className={`relative flex w-full h-75vh bg-cover bg-no-repeat bg-[url('/images/transportation.jpg')]`}>
        <div className='absolute top-0 w-full backdrop-opacity-40 backdrop-invert bg-blue/30 w-full h-10'>
          <div className='h-full w-4/5 mx-auto flex justify-between'>
            <p className='text-white text-sm my-auto'>CALL FREE: +1 212-226-3126</p>
            <p className='text-white text-sm my-auto'> info@transcargo.com</p>
            <p className='text-white text-sm my-auto'>Mon — Sat: 9AM — 6PM</p>
          </div>    
        </div>
    </div>
  )
}