import React from 'react'
import InputField from '@/components/UI/InputField'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Index = () => {
    const router = useRouter()

    function onRegisterHandler(e) {
        e.preventDefault()
        router.push('/login')
    }

    return (
        <div className='min-h-screen flex justify-center items-center bg-[#3C424A]'>
            <form className='bg-white w-1/3 m-6 rounded-lg px-6 py-4 space-y-5'>
                <h1 className='text-2xl font-semibold'>
                    <span className='underline decoration-2 decoration-rose-600'>Reg</span>
                    isteration
                </h1>

                <InputField type='text' placeholder='Enter your Username'/>
                <InputField type='email' placeholder='Enter your Email'/>
                <InputField type='password' placeholder='Enter your Password'/>
                
                <button type='submit' className='w-full py-2 bg-rose-600 text-white hover:bg-rose-400 active:bg-rose-600' onClick={(e) => {onRegisterHandler(e)}}>
                    Register
                </button>
                
                <p className='text-center'>Already have an account? <Link href={'/login'} className='text-sky-500'>Login</Link></p>
                <p className='text-slate-600 text-center text-sm'>Privacy Policy | Terms and Conditions</p>
            </form>
        </div>
    )
}

export default Index