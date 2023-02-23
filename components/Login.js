import React from 'react'
import Link from 'next/link'
import { useState } from 'react'


export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () => {
    console.log({username, password})
  }
  return (
      <div className='w-4/5 relative m-auto mt-1'>
        <div className='w-2/5 absolute rounded-md h-auto top-0 right-0 py-8 bg-neutral-800 -mx-8'>
          <div className='w-4/5 m-auto h-auto flex flex-col justify-between'>
            <div className='flex w-auto'>
              <p className='my-auto w-1/5 text-white font-normal mr-4'>Username: </p>
              <input className='focus:outline-none block flex-1 border-2 p-2 rounded border-zinc-900 pl-4 h-10 m-auto rounded' placeholder='Username' type='text'
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className='flex mt-4'>
              <p className='my-auto w-1/5 text-white font-normal mr-4'>Password: </p>
              <input className='focus:outline-none block flex-1 border-2 p-2 rounded border-zinc-900 pl-4 h-10 m-auto rounded' placeholder='Password' type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <p className='my-6 text-white text-normal'>Forgot your password?</p>
            <div>
              <button className='bg-lime-700 hover:bg-lime-600 rounded h-10 py-1 px-4 text-white' onClick={handleLogin}>
                <Link href='/billonline'>
                  Log-in
                </Link>
              </button>
              <button className='bg-lime-700 hover:bg-lime-600 ml-8 rounded h-10 py-1 px-4 text-white'>Sign-up</button>
            </div>
          </div>
        </div>
      </div>
  )
}