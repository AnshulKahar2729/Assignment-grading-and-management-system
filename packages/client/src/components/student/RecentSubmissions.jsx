import React from 'react'
import { Link } from 'react-router-dom'

const RecentSubmissions = ({title, file, submissionDate, assignment}) => {
  const formattedDate = new Date(submissionDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <div className='border-b-2 p-4 border-blue-100'>
        <p><span className='text-gray-600'>Title:</span> <span className='font-bold'>{title}</span></p>
        <div className='flex justify-between items-center flex-wrap'>
        <div>
            <Link to={`/dashboard/student/assignments/${assignment}`}>
            <button style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}} className='mt-2 py-1 px-4 mr-2 text-white text-sm bg-blue-600 hover:bg-blue-700 transition-all rounded-sm'>View Details</button>
            </Link>
            <a target='_blank' href={file}>
            <button style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}} className='mt-2 py-1 px-4 text-white text-sm bg-blue-600 hover:bg-blue-700 transition-all rounded-sm'>Download</button>
            </a>
        </div>
        <p>Submission Date: <span className='text-green-500'>{formattedDate}</span></p>
        </div>
    </div>
  )
}

export default RecentSubmissions
