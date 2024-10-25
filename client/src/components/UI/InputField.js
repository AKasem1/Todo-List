import React from 'react'

const InputField = ({ type, placeholder, className }) => {
  return (
    <input type={type} placeholder={placeholder} 
    className={'w-full p-2 border border-slate-500 rounded-lg focus:outline-none focus:border-b-gray-500 focus:border-b-4 transition-all ' + className} />
  )
}

export default InputField