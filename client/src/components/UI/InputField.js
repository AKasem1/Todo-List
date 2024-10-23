import React from 'react'

const InputField = ({ type, placeholder }) => {
  return (

    <input type={type} placeholder={placeholder} className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-b-gray-500 focus:border-b-4 transition-all' />
  )
}

export default InputField