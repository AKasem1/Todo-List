import React from 'react'

const IconButton = ({onClick}) => {
    return (
        <button onClick={onClick} className='bg-rose-600 size-14 rounded-tl-lg rounded-br-lg fixed bottom-10 right-10 flex justify-center items-center hover:bg-sky-700'>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="4" width="4" height="16" fill="white" />
                <rect x="4" y="10" width="16" height="4" fill="white" />
            </svg>
        </button>
    )
}

export default IconButton