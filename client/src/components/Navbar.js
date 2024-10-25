import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-16 px-6 bg-black text-white flex items-center justify-between'>
        <h1 className='uppercase text-2xl font-semibold'>Todo-ist</h1> 
        <div className='space-x-4'>
            <button className='p-3 border-b-4 border-b-transparent hover:border-b-rose-600 transition-colors'>
                Dashboard
            </button>
            <button className='p-3 border-b-4 border-b-transparent hover:border-b-rose-600 transition-colors'>
                Tasks
            </button>
            <Link href={'/login'} className='px-3 py-1 bg-rose-600 rounded-lg transition-colors'>
                Login
            </Link>
            
        </div>
    </div>
  )
}

export default Navbar