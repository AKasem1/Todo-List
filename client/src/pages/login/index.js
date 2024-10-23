import React from 'react'
import InputField from '@/components/UI/InputField'
import Link from 'next/link'

const Index = () => {
    return (
        <div className='min-h-screen flex justify-center items-center bg-gradient-to-tr from-sky-500 to-white '>
            <form className='bg-white w-1/3 m-6 '>
                <h1 className='px-6 py-4 text-2xl text-center font-semibold w-full  bg-green-400 text-white'>
                    <span className='underline decoration-2 decoration-black'>Lo</span>
                    gin
                </h1>

                <div className='px-6 py-4 space-y-3'>
                    <InputField type='text' placeholder='Enter your Username' />
                    <InputField type='email' placeholder='Enter your Email' />
                    <InputField type='password' placeholder='Enter your Password' />
                    <input type='checkbox' name='remember' className='mr-2 size-4' />
                    <label className='text-slate-600'>Remember me</label>
                    <button type='submit' className='w-full py-2 bg-green-500 text-white hover:bg-green-400 active:bg-green-600' onClick={(e) => { onRegisterHandler(e) }}>
                        Register
                    </button>
                    <p className='text-center'>Already have an account? <Link href={'/login'} className='text-sky-500'>Login</Link></p>
                    <p className='text-slate-600 text-center text-sm'>Privacy Policy | Terms and Conditions</p>
                </div>
            </form>
        </div>
    )
}

export default Index