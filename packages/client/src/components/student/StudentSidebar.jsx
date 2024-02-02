import React from 'react'
import { Link } from 'react-router-dom'
const NAV = [
    {
        title:'dashboard',
        icon: <i className='fa fa-home'></i>,
        link: '/dashboard/student'
    },
    {
        title:'assignments',
        icon: <i className='fa fa-home'></i>,
        link: '/dashboard/student/assignments'
    },
    {
        title:'settings',
        icon: <i className='fa fa-home'></i>,
        link: '/dashboard/student/settings'
    },
]

const StudentSidebar = () => {
  return (
    <div className='flex flex-col justify-between sidebar'>
      <div>
        {NAV.map((item)=> (
          <>
            <Link to={item.link}>
              <div className='flex items-center gap-4 px-4 py-2 border' key={item.title}>
                  <div>{item.icon}</div>
                  <div>{item.title}</div>
              </div>
            </Link>
          </>
        ))}
      </div>
      <div className='flex gap-4 px-4 py-2 border items-center'>
          <i className='fa fa-home'></i>
          <span>Log Out</span>
      </div>
    </div>
  )
}

export default StudentSidebar
