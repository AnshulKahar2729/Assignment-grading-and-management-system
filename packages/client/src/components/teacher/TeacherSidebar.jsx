import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/EduTrack.png';

const NAV = [
  {
    title: 'Dashboard',
    icon: <i className="fa-solid fa-id-card"></i>,
    link: '/dashboard/student',
  },
  {
    title: 'Assignments',
    icon: <i className="fa-solid fa-folder-closed"></i>,
    link: '/dashboard/student/assignments',
  },
  {
    title: 'Settings',
    icon: <i className="fa-sharp fa-solid fa-gear"></i>,
    link: '/dashboard/student/settings',
  },
];

const TeacherSidebar = () => {
  const [headerOn,setHeaderOn] = useState(false);
  const [selectedItem, setSelectedItem] = useState(() => {
    const storedSelected = localStorage.getItem('selectedNavItem');
    return storedSelected || 'Dashboard';
  });

  useEffect(() => {
    const storedSelected = localStorage.getItem('selectedNavItem');
    const initialSelected = storedSelected || 'Dashboard';
    setSelectedItem(initialSelected);
  }, []);

  const handleClick = (title) => {
    setSelectedItem(title);
    localStorage.setItem('selectedNavItem', title);
  };

  const handleHamburgerClick = () => {
    setHeaderOn(!headerOn)
  }

  useEffect(() => {
  }, [selectedItem]);



  return (
    <div
      className='pl-0 w-full sm:w-fit lg:pl-7 py-8 h-screen flex flex-col justify-between sidebar text-white'
      style={{ background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)' }}
    >
      <div className='flex flex-col gap-2'>
        <div className='w-full lg:py-5 lg:pr-10 mb-16 flex flex-row justify-between items-center p-5'>
          <img className='h-10 sm:h-3 lg:h-auto lg:w-auto' src={Logo} alt='Logo' />
          <div onClick={handleHamburgerClick} className='flex sm:hidden cursor-pointer'>{headerOn ? <i className="text-2xl fa-solid fa-xmark"></i> : <i className="text-2xl fa-solid fa-bars"></i>}</div>
        </div>
        {NAV.map((item) => (
          <Link to={item.link} key={item.title}>
            <div
              onClick={() => handleClick(item.title)}
              className={`flex items-center gap-4 px-6 py-3 rounded-l-xl ${
                item.title === selectedItem ? 'bg-[#d6d6d6] text-black' : 'bg-transparent'
              }`}
              id={item.title}
            >
              <div>{item.icon}</div>
              <span className='sm:hidden lg:flex'><p>{item.title}</p></span>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex gap-4 px-6 py-3 items-center cursor-pointer'>
        <i className='fa-solid fa-right-from-bracket fa-rotate-180'></i>
        <span className='sm:hidden lg:flex'><p>Log Out</p></span>
      </div>
    </div>
  );
};

export default TeacherSidebar;






/* 

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const NAV = [
  {
    title: 'Dashboard',
    icon: <i className="fa-solid fa-id-card"></i>,
    link: '/dashboard/student',
  },
  {
    title: 'Assignments',
    icon: <i className="fa-solid fa-folder-closed"></i>,
    link: '/dashboard/student/assignments',
  },
  {
    title: 'Settings',
    icon: <i className="fa-sharp fa-solid fa-gear"></i>,
    link: '/dashboard/student/settings',
  },
];

const StudentSidebar = () => {
  const [headerOn,setHeaderOn] = useState(false);
  const [selectedItem, setSelectedItem] = useState(() => {
    const storedSelected = localStorage.getItem('selectedNavItem');
    return storedSelected || 'Dashboard';
  });

  useEffect(() => {
    const storedSelected = localStorage.getItem('selectedNavItem');
    const initialSelected = storedSelected || 'Dashboard';
    setSelectedItem(initialSelected);
  }, []);

  const handleClick = (title) => {
    setSelectedItem(title);
    localStorage.setItem('selectedNavItem', title);
  };

  const handleHamburgerClick = () => {
    setHeaderOn(!headerOn)
  }



  return (
    <div
      className='pl-0 w-full sm:w-fit lg:pl-7 py-8 h-screen flex flex-col justify-between sidebar text-white'
      style={{ background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)' }}
    >
      <div className='flex flex-col gap-2'>
        <div className='w-full lg:py-5 lg:pr-10 mb-16 flex flex-row justify-between items-center p-5'>
          <img className='h-10 sm:h-3 lg:h-auto lg:w-auto' src={Logo} alt='Logo' />
          <div onClick={handleHamburgerClick} className='flex sm:hidden cursor-pointer'>{headerOn ? <i className="text-2xl fa-solid fa-xmark"></i> : <i className="text-2xl fa-solid fa-bars"></i>}</div>
        </div>
        {NAV.map((item) => (
          <Link to={item.link} key={item.title}>
            <div
              onClick={() => handleClick(item.title)}
              className={`flex items-center gap-4 px-6 py-3 rounded-l-xl ${
                item.title === selectedItem ? 'bg-[#d6d6d6] text-black' : 'bg-transparent'
              }`}
              id={item.title}
            >
              <div>{item.icon}</div>
              <span className='sm:hidden lg:flex'><p>{item.title}</p></span>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex gap-4 px-6 py-3 items-center cursor-pointer'>
        <i className='fa-solid fa-right-from-bracket fa-rotate-180'></i>
        <span className='sm:hidden lg:flex'><p>Log Out</p></span>
      </div>
    </div>
  );
};

export default StudentSidebar; */
