import React from 'react'

const NAV = [
    {
        title:'dashboard',
        icon: <i className='fa fa-home'></i>,
    },
    {
        title:'assignments',
        icon: <i className='fa fa-person'></i>,
    },
]

const TeacherSidebar = () => {
  return (
    <div>
      {NAV.map((item)=> (
        <div className='flex gap-4' key={item.title}>
            <div>{item.icon}</div>
            <div>{item.title}</div>
        </div>
      ))}
    </div>
  )
}

export default TeacherSidebar
