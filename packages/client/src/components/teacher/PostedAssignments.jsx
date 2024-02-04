import React from 'react'
import { Link } from 'react-router-dom'

const PostedAssignments = ({}) => {
  return (
    <div className='border-b-2 p-4 border-blue-100'>
        <p><span className='text-gray-600'>Title:</span> <span className='font-bold'>Assignment_Name</span></p>
        <div className='flex justify-between items-center'>
            <Link to='/dashboard/teacher/assignments/ass1'><button style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}} className='mt-2 py-1 px-4 text-white text-sm bg-blue-600 hover:bg-blue-700 transition-all rounded-sm'>View Details</button></Link>
            <p>Posted Date: <span className='text-red-600'>28th Jan</span></p>
        </div>
    </div>
  )
}

export default PostedAssignments
