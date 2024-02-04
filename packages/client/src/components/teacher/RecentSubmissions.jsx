import React from 'react'
import { Link } from 'react-router-dom'

const RecentSubmissions = ({studentName, assignmentTitle, id}) => {
  return (
    <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200 '>
        <div className='flex gap-4 items-center'>
        <p className='flex flex-col'>
            {' '}
            <span className='font-semibold'>Ashutosh Ranjan</span>{' '}
            <span className='font-semibold'>Title : Assignment 1</span>{' '}
            <span>SETB05</span>{' '}
        </p>
        </div>
        
        <Link to={`/dashboard/teacher/assignments/submission/${id}`}>
            <button className='flex gap-2 items-center text-white p-2 rounded-md' style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}>
            <i class="fa-solid fa-message"></i> 
                View Submission
            </button>
        </Link>
    </div>
  )
}

export default RecentSubmissions
