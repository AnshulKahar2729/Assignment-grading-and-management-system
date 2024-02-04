import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    title: 'Profile',
    icon: <i class="fa-solid fa-user"></i>,
    link: '/dashboard/student/settings',
  },
];

const StudentSidebar = () => {
  const navigate = useNavigate(); 
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

  
  function handleLogout() {
    let result = window.confirm("are you sure?")
    if(result){
      
    localStorage.removeItem('token');
    navigate('/')
    console.log('Logged Out as a Student')
    }
    
}



  return (
    <div
      className={`pl-0 w-full sm:w-fit lg:pl-7 sm:py-8 ${headerOn ? 'h-screen' : 'h-fit'} sm:h-screen flex flex-col justify-between  sidebar text-white`}
      style={{ background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)' }}
    >
      <div className='h-20 sm:h-full flex flex-col gap-2'>
        <div className='w-full lg:py-5 lg:pr-10 mb-16 flex flex-row justify-between items-center p-5'>
          <img className='h-10 sm:h-3 lg:h-auto lg:w-auto' src={Logo} alt='Logo' />
          <div onClick={handleHamburgerClick} className='flex sm:hidden cursor-pointer'>{headerOn ? <i className="text-2xl fa-solid fa-xmark"></i> : <i className="text-2xl fa-solid fa-bars"></i>}</div>
        </div>
        {NAV.map((item) => (
          <Link to={item.link} key={item.title}>
            <div
              onClick={() => handleClick(item.title)}
              className={`${headerOn ? 'flex' : 'hidden'} sm:flex items-center gap-4 px-6 sm:px-6 py-3 sm:rounded-l-xl text-2xl sm:text-base ${
                item.title === selectedItem ? 'bg-[#d6d6d6] text-black' : 'bg-transparent'
              }`}
              id={item.title}
            >
              <div className=''>{item.icon}</div>
              <span className='sm:hidden lg:flex'><p>{item.title}</p></span>
            </div>
          </Link>
        ))}
      </div>
      <div onClick={handleLogout} className={`${headerOn ? 'flex' : 'hidden'} sm:flex gap-4 p-8 sm:px-6 sm:py-3 items-center cursor-pointer hover:text-red-500 text-2xl sm:text-base`}>
        <i className='fa-solid fa-right-from-bracket fa-rotate-180'></i>
        <span className=' sm:hidden lg:flex'><p>Log Out</p></span>
      </div>
    </div>
  );
};

export default StudentSidebar;
