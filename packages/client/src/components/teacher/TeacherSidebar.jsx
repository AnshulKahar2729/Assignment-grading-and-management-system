import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NAV = [
  {
    title: 'dashboard',
    icon: <i className='fa fa-home'></i>,
    link: '/dashboard/teacher',
  },
  {
    title: 'assignments',
    icon: <i className='fa fa-home'></i>,
    link: '/dashboard/teacher/assignments',
  },
  {
    title: 'settings',
    icon: <i className='fa fa-home'></i>,
    link: '/dashboard/teacher/settings',
  },
];

const TeacherSidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
  }, [selectedItem]);

  const handleClick = (title) => {
    setSelectedItem(title);
  };

  return (
    <div
    style={{background:'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)',}}
     className='py-10 h-screen flex flex-col justify-between sidebar  text-white'>
      <div className='flex flex-col gap-2'>
        {NAV.map((item) => (
          <Link to={item.link} key={item.title}>
            <div
              onClick={() => handleClick(item.title)}
              className={`flex items-center gap-4 px-6 py-3 rounded-l-xl nav-item ${
                item.title === selectedItem
                  ? 'bg-[#d6d6d6]'
                  : 'bg-transparent'
              }`}
              id={item.title}
            >
              <div>{item.icon}</div>
              <div>{item.title}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex gap-4 px-4 py-2 items-center'>
        <i className='fa fa-home'></i>
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default TeacherSidebar;