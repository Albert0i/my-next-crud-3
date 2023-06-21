import React from 'react'

export const loading = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-center'>
        <div className='text-4xl font-bold'>Please wait while loading</div>
      </div>
    </div>
  )
}

export default loading