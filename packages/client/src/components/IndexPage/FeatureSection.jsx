import React from 'react';

export const Feature = () => {
  return (
    <div className='w-full h-full px-[5%] md:px-[12.5%]'>
      <div className="px-4 py-16 bg-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white mb-10">EduTrack Features</h1>
        <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 border-b sm:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#176DEF] text-white text-3xl sm:w-16 sm:h-16">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Automated Grading</h6>
              <p className="mb-3 text-sm text-gray-900">
                Our system ensures quick and secure grading through an automated process, offering a shield against inefficiencies and delays.
              </p>
            </div>
          </div>
          <div className="p-8 border-b lg:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#176DEF] text-white text-3xl sm:w-16 sm:h-16">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Real-time Progress Tracking</h6>
              <p className="mb-3 text-sm text-gray-900">
                Leverage agile methodologies for seamless tracking of assignment progress, providing clear visibility into the learning journey.
              </p>
            </div>
          </div>
          <div className="p-8 border-b sm:border-r lg:border-r-0">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#176DEF] text-white text-3xl sm:w-16 sm:h-16">
                <i className="fa-solid fa-globe"></i>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Transparent Feedback</h6>
              <p className="mb-3 text-sm text-gray-900">
                Organically grow communication with transparent feedback mechanisms, ensuring clarity in evaluation criteria and constructive suggestions.
              </p>
            </div>
          </div>
          <div className="p-8 border-b lg:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#176DEF] text-white text-3xl sm:w-16 sm:h-16">
                <i className="fa-regular fa-handshake"></i>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Efficient Collaboration</h6>
              <p className="mb-3 text-sm text-gray-900">
                Have a good one by promoting efficient collaboration among students and teachers, enhancing the overall learning experience.
              </p>
            </div>
          </div>
          <div className="p-8 border-b sm:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#176DEF] text-white text-3xl sm:w-16 sm:h-16">
                <i className="fa-regular fa-comment"></i>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Interactive Discussions</h6>
              <p className="mb-3 text-sm text-gray-900">
                Trough pomfret in interactive discussions, providing students with valuable insights and fostering a dynamic learning environment.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#176DEF] text-white text-3xl sm:w-16 sm:h-16">
                <i className="fa-solid fa-cloud-arrow-up"></i>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Effortless Submission</h6>
              <p className="mb-3 text-sm text-gray-900">
                Disrupt inspire with effortless assignment submission, making the process seamless for both students and teachers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
