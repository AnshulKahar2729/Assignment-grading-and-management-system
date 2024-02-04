import React, { useState } from 'react';
import Logo from '../../assets/EduTrack (2).png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  

  return (
    <div className='w-full h-full px-[5%] md:px-[12.5%]'>
        <nav className="bg-white p-2 md:p-4 flex items-center justify-between">
      <a href="/" className="text-lg font-bold text-black mr-4">
        <img className='h-12 sm:h-14 md:16 lg:h-20' src={Logo} alt='logo'/>
      </a>

        <ul className="md:flex items-center list-none gap-4">
          <li className='flex gap-4 sm:text-base text-sm'>
            <Link to='/login'><button className="text-white font-medium py-1 sm:py-2 px-4 rounded-md bg-[#176DEf] hover:bg-blue-700] ease-in duration-300">Log In</button></Link>
            <Link to='/register'><button className="text-black font-medium py-1 sm:py-2 px-4 rounded-md bg-gray-300 hover:bg-gray-400 ease-in duration-300">Sign Up</button></Link>
          </li>
          
        </ul>
    </nav>
    </div>
  );
}
