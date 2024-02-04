import React from 'react';
import About from '../../assets/Work time-pana.png';

const AboutSection = () => {
  return (
    <div  className='w-full h-full px-[5%] md:px-[12.5%]'>
      <div className="bg-white sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src={About} alt="Assignment Overview" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-[#176DEF] uppercase">About our Project</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl ">
              Transforming Education with <span className="text-[#176DEF]">Efficient Assignment Management</span>
            </h2>
            <p className="text-gray-700">
              Revolutionize the educational experience with our Assignment Management and Grading System. Say goodbye to manual paperwork, delays, and uncertainties in the grading process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;