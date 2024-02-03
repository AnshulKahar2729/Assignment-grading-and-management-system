import React from 'react';
import MainLayout from '../../layout/MainLayout';
import TeacherSidebarLayout from '../../layout/teacher/TeacherSidebarLayout';

const TeacherParticularAssignment = () => {
  return (
    <MainLayout>
      <TeacherSidebarLayout />
      <div className='bg-[#d6d6d6] w-full h-screen p-4'>
        <div className=' w-full h-full rounded-md  overflow-y-scroll hideScrollbar'>
          <section
            className='flex flex-1 justify-between text-white rounded-lg p-4 gap-4 mb-4 '
            style={{
              background:
                'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)',
            }}
          >
            <div className='w-full h-fit p-4  rounded-xl flex lg:flex-row flex-col gap-1 lg:gap-3 '>
              <div className='w-full lg:w-1/2 h-auto  flex flex-row justify-between items-center'>

                <div className='flex flex-col gap-3 w-full'>
                  <div className='flex flex-row w-full'>
                    <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>
                      Title :
                    </p>
                    <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-[#ffffff2c] text-white shadow-sm shadow-white'>
                      ASSIGNMENT-1
                    </p>
                  </div>
                  <div className='flex flex-row w-full'>
                    <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>
                      Posted By :
                    </p>
                    <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-[#ffffff2c] text-white shadow-sm shadow-white'>
                      Nilesh Nagrale
                    </p>
                  </div>
                  <div className='flex flex-row w-full'>
                    <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>
                      Publish Date :
                    </p>
                    <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-[#ffffff2c] text-white shadow-sm shadow-white'>
                      04/02/24
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 h-auto flex justify-center'>
                <div className='w-40 h-40 rounded-xl bg-white text-black flex justify-center items-center'>
                  Assignment File
                </div>
              </div>
            </div>
          </section>

          <div className='flex min-h-[500px] w-full rounded-md border border-gray-200 bg-white'>
            <section className='w-1/2 flex-1 gap-4 border-r border-gray-200'>
              <p className='m-3 text-center text-lg font-semibold p-4 border-b border-gray-200'>
                List of submitted students
              </p>




              <div className='py-3 px-16'>
                <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200 '>
                  <div className='flex gap-4 items-center'>
                    <i className='text-[30px] fa-regular fa-user'></i>
                    <p className='flex flex-col'>
                      {' '}
                      <span className='font-semibold'>Ashutosh Ranjan</span>{' '}
                      <span>SETB05</span>{' '}
                    </p>
                  </div>
                  
                  <button className='flex gap-2 items-center text-white p-2 rounded-md' style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}>
                    <i className="fa-solid fa-message"></i> 
                    Give FeedBack
                  </button>
                </div>

                <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200 '>
                  <div className='flex gap-4 items-center'>
                    <i className='text-[30px] fa-regular fa-user'></i>
                    <p className='flex flex-col'>
                      {' '}
                      <span className='font-semibold'>Ashutosh Ranjan</span>{' '}
                      <span>SETB05</span>{' '}
                    </p>
                  </div>
                  <button className='flex gap-2 items-center text-white p-2 rounded-md' style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}>
                    <i className="fa-solid fa-message"></i> 
                    Give FeedBack
                  </button>
                </div>
              </div>
            </section>


            <section className='w-1/2 flex-1 gap-4'>
              <p className='m-3 text-center text-lg font-semibold p-4 border-b border-gray-200'>
                List of remaining
              </p>
              <div className='py-3 px-16'>
                <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200 '>
                  <div className='flex gap-4 items-center'>
                    <i className='text-[30px] fa-regular fa-user'></i>
                    <p className='flex flex-col'>
                      {' '}
                      <span className='font-semibold'>Sumit Kharate</span>{' '}
                      <span>SETB16</span>{' '}
                    </p>
                  </div>
                  <button className='flex gap-2 items-center text-white p-2 rounded-md' style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}>
                    <i className="fa-solid fa-envelope"></i> 
                    Mail
                  </button>
                </div>
                <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200 '>
                  <div className='flex gap-4 items-center'>
                    <i className='text-[30px] fa-regular fa-user'></i>
                    <p className='flex flex-col'>
                      {' '}
                      <span className='font-semibold'>Sumit Kharate</span>{' '}
                      <span>SETB16</span>{' '}
                    </p>
                  </div>
                  <button className='flex gap-2 items-center text-white p-2 rounded-md' style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}>
                    <i className="fa-solid fa-envelope"></i> 
                    Mail
                  </button>
                </div>
                
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TeacherParticularAssignment;
