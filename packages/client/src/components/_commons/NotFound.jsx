import React from 'react';
import ErrorImg from '../../assets/Error-1.png' ;

const NotFound = () => {
  return (
    <div className='bg-[#d6d6d6] w-full h-screen flex justify-center'>
      <img className='h-full' src={ErrorImg} alt='404 Error'/>
    </div>
  )
}

export default NotFound
