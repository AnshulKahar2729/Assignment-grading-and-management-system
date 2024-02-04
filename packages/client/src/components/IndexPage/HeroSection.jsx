import React, { useState } from 'react';
import AssignmentImage from '../../assets/Completed.gif';
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full h-full px-[5%] md:px-[12.5%]'>
      <header className="bg-white dark:bg-gray-900">
        <div className="container px-6 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
              <h1 className='text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl'>
                  <TypeAnimation
                    sequence={[
                      'Revolutionize your Assignment Management System',
                      2000,
                      'Revamp your assignment system with innovation',
                      2000,
                    ]}
                    wrapper='span'
                    speed={50}
                    style={{ fontSize: '2.25rem', fontWeight: '700', display: 'inline-block' }}
                    repeat={Infinity}
                  ></TypeAnimation>
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Enhance the learning experience with our streamlined Assignment Management and Grading System. Say goodbye to manual paperwork and delays in feedback.
                </p>

                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider uppercase transition-colors duration-300 transform text-white rounded-md lg:w-auto bg-[#176DEF] focus:outline-none hover:bg-blue-800">
                  Explore Now
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img className="w-full h-full lg:max-w-3xl" src={AssignmentImage} alt="Assignment System" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeroSection;
