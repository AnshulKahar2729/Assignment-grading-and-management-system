import React, { useContext, useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import TeacherSidebarLayout from '../../layout/teacher/TeacherSidebarLayout';
import { UserContext } from '../../store/userContext';

const TeacherDashboard = () => {

  const {user} = useContext(UserContext);

  console.log('Teacher Data -> ',user)

  return (
    <MainLayout>
      <TeacherSidebarLayout />
      <div className=' bg-[#d6d6d6] h-screen overflow-y-scroll hideScrollbar'>
        <div className='z-50 bg-white h-16 flex flex-row items-center justify-between px-5 '>
          <div className='hidden sm:block'>Welcome to EduTrack</div>
          <div className='flex flex-row gap-2 md:gap-4 items-center justify-between sm:justify-end w-full sm:w-fit'>
            <div className='flex flex-row gap-3 items-center '>
              <i className='text-[40px] sm:text-[40px] md:text-[50px] fa-regular fa-circle-user'></i>
              <span>Name_Of_Teacher</span>
            </div>
            <button className='py-1 md:py-2 px-2 md:px-4 bg-red-600 rounded-md hover:bg-red-700 text-white'>
              Logout
            </button>
          </div>
        </div>





        <div className=' p-4 h-fit w-full'>
          <div className='flex flex-col xl:flex-row justify-between h-fit overflow-y-scroll hideScrollbar '>
            <div className='flex flex-col xl:w-[65%] w-full gap-4'>
              <div className='flex flex-col gap-3'>
                <p className='text-xl font-semibold'>Summary report</p>
                <section className='grid grid-cols-3 w-full  justify-items-center text-white'>
                  <div className='gap-5 p-4 rounded-md flex flex-col justify-center items-center'>
                    <div
                      className='p-4 rounded-md'
                      style={{
                        background:
                          'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)',
                      }}
                    >
                      <i className='text-[50px] fa-solid fa-users'></i>
                    </div>
                    <div className='flex flex-col items-center text-black'>
                      <p className='text-4xl font-semibold'>20</p>
                      <p className='font-semibold'>Enrollment</p>
                    </div>
                  </div>
                  <div className='gap-5 p-4 rounded-md flex flex-col justify-center items-center'>
                    <div
                      className='p-4 rounded-md'
                      style={{
                        background:
                          'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)',
                      }}
                    >
                      <i className='text-[50px] fa-solid fa-book-open'></i>
                    </div>
                    <div className='flex flex-col items-center text-black'>
                      <p className='text-4xl font-semibold'>30</p>
                      <p className='font-semibold'>Assignments</p>
                    </div>
                  </div>
                  <div className='gap-5 p-4 rounded-md flex flex-col justify-center items-center'>
                    <div
                      className='p-4 rounded-md'
                      style={{
                        background:
                          'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)',
                      }}
                    >
                      <i className='text-[50px] fa-solid fa-star'></i>
                    </div>
                    <div className='flex flex-col items-center text-black'>
                      <p className='text-4xl font-semibold'>5</p>
                      <p className='font-semibold'>Score</p>
                    </div>
                  </div>
                </section>
              </div>




              <div className='w-full bg-white rounded-xl h-fit  flex flex-col md:flex-row gap-4 overflow-hidden'>
                <section className='flex flex-col gap-3 w-full md:w-1/2 px-4 py-9'>
                  <p className='text-[16px] font-semibold'>My Teachers</p>
                  <div className='flex flex-col w-full gap-2 overflow-y-scroll hideScrollbar'>
                    <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-black '>
                      <div className='flex gap-4 items-center'>
                        <i className='text-[30px] fa-regular fa-user'></i>
                        <p className='flex flex-col'>
                          {' '}
                          <span className='font-semibold'>Sumit Kharate</span>{' '}
                          <span>Java,Javascript</span>{' '}
                        </p>
                      </div>
                      <i class='fa-solid fa-message'></i>
                    </div>
                    
                    <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-black '>
                      <div className='flex gap-4 items-center'>
                        <i className='text-[30px] fa-regular fa-user'></i>
                        <p className='flex flex-col'>
                          {' '}
                          <span className='font-semibold'>Sumit Kharate</span>{' '}
                          <span>Java,Javascript</span>{' '}
                        </p>
                      </div>
                      <i class='fa-solid fa-message'></i>
                    </div>
                    <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-black '>
                      <div className='flex gap-4 items-center'>
                        <i className='text-[30px] fa-regular fa-user'></i>
                        <p className='flex flex-col'>
                          {' '}
                          <span className='font-semibold'>Sumit Kharate</span>{' '}
                          <span>Java,Javascript</span>{' '}
                        </p>
                      </div>
                      <i class='fa-solid fa-message'></i>
                    </div>
                  </div>
                </section>
                <section className='flex flex-col gap-3 w-full md:w-1/2 px-4 py-9'>
                  <p className='text-[16px] font-semibold'>Uncoming Events</p>
                  <div className='flex flex-col w-full gap-2 overflow-y-scroll hideScrollbar'>
                    <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-black'>
                      <div className='flex gap-4 items-center'>
                        <i className='text-[30px] fa-regular fa-user'></i>
                        <p className='flex flex-col'>
                          {' '}
                          <span className='font-semibold'>Ashutosh Ranjan</span>{' '}
                          <span>Advance Python Developer</span>{' '}
                        </p>
                      </div>
                      <i class='fa-solid fa-message'></i>
                    </div>
                    <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-black'>
                      <div className='flex gap-4 items-center'>
                        <i className='text-[30px] fa-regular fa-user'></i>
                        <p className='flex flex-col'>
                          {' '}
                          <span className='font-semibold'>Ashutosh Ranjan</span>{' '}
                          <span>Advance Python Developer</span>{' '}
                        </p>
                      </div>
                      <i class='fa-solid fa-message'></i>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className='flex flex-col gap-3 w-full xl:w-[34%]'>
              <p className='text-xl font-semibold'>My Schedule</p>
              <div className='flex flex-col sm:flex-row xl:flex-col gap-4 lg:gap-3 justify-between bg-white text-black rounded-xl w-full p-4 h-full overflow-y-scroll hideScrollbar'>
                <section className='w-full sm:w-1/2 xl:w-full'>Calendar</section>

                <section className='w-full sm:w-1/2 xl:w-full flex flex-col gap-2'>
                  <div className='p-3 flex flex-col gap-3 border-b border-black'>
                    <p>Assignment 1</p>
                    <p className='flex flex-row justify-between'>
                      <span>Time_of_Post</span> <span>Date_of_Post</span>
                    </p>
                  </div>
                  <div className='p-3 flex flex-col gap-3 border-b border-black'>
                    <p>Assignment 1</p>
                    <p className='flex flex-row justify-between'>
                      <span>Time_of_Post</span> <span>Date_of_Post</span>
                    </p>
                  </div>
                  <div className='p-3 flex flex-col gap-3 border-b border-black'>
                    <p>Assignment 1</p>
                    <p className='flex flex-row justify-between'>
                      <span>Time_of_Post</span> <span>Date_of_Post</span>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TeacherDashboard;
