import React from 'react';
import Info from '../../assets/Data extraction-cuate.png';

const InfoSection = () => {
    return (
      <div className='w-full h-full px-[5%] md:px-[12.5%]'>
        <div className="bg-white sm:flex items-center max-w-screen-xl">
          <div className="sm:w-1/2 p-5">
            <div className="text">
              <span className="text-gray-500 border-b-2 border-[#176DEF] uppercase">Project Overview</span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl ">
                Revolutionize Education with <span className="text-[#176DEF]">Automated Grading</span>
              </h2>
              <p className="text-gray-700">
                Our project aims to transform the educational landscape by introducing an efficient Assignment Management and Grading System. Experience automated grading, real-time progress tracking, and transparent feedback mechanisms.
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
              <img src={Info} alt="Automated Grading" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default InfoSection;