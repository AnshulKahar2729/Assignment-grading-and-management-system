import React, { useState } from 'react';
import StudentSidebarLayout from '../../layout/student/StudentSidebarLayout';
import MainLayout from '../../layout/MainLayout';

const StudentDashboard = () => {
  return (
    <MainLayout>
      <StudentSidebarLayout />
      <div className='bg-[#d6d6d6] h-screen overflow-hidden'>
        <div className='w-full bg-white h-16 flex flex-row items-center justify-between px-5 '>
          <div className=''>Welcome to EduTrack</div>
          <div className='flex flex-row gap-4 items-center'>
            <i className='text-[50px] fa-regular fa-circle-user'></i>
            <span>Name_Of_Student</span>
            <button className='py-2 px-4 bg-red-600 rounded-md hover:bg-red-700 text-white'>
              Logout
            </button>
          </div>
        </div>

        <div className='p-4 h-[631px] '>
          <div className='flex flex-col xl:flex-row justify-between h-full overflow-y-scroll hideScrollbar'>
            <div className='flex flex-col xl:w-[65%] w-full gap-4'>
              <div className='flex flex-col gap-3'>
                <p className='text-xl font-semibold'>Summary report</p>
                <section
                 style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}
                 className=' grid grid-cols-3 bg-[#176DEF] text-white rounded-xl w-full'>
                  <div className='p-8'>
                    <p>Assignment</p>
                    <div className='flex flex-row items-center gap-3'>
                      <i className='text-5xl text-white fa-solid fa-clipboard-user'></i>
                      <p className=''>
                        <span className='text-5xl'>20</span> <span className='text-3xl'>/</span>{' '}
                        <span className='text-lg'>20</span>
                      </p>
                    </div>
                    <p>Great , you always attending class , keep it up!</p>
                  </div>
                  <div className='p-8'>
                    <p>Attendance</p>
                    <div className='flex flex-row items-center gap-3'>
                      <i className='text-5xl text-white fa-solid fa-clipboard-user'></i>
                      <p className=''>
                        <span className='text-5xl'>20</span> <span className='text-3xl'>/</span>{' '}
                        <span className='text-lg'>20</span>
                      </p>
                    </div>
                    <p>Great , you always attending class , keep it up!</p>
                  </div>
                  <div className='p-8'>
                    <p>Score</p>
                    <div className='flex flex-row items-center gap-3'>
                      <i className='text-5xl text-white fa-solid fa-clipboard-user'></i>
                      <p className=''>
                        <span className='text-5xl'>20</span> <span className='text-3xl'>/</span>{' '}
                        <span className='text-lg'>20</span>
                      </p>
                    </div>
                    <p>Great , you always attending class , keep it up!</p>
                  </div>
                </section>
              </div>
              <div className='flex flex-col gap-3'>
                <p className='text-xl font-semibold'>My Schedule</p>
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-3 bg-white text-black rounded-xl w-full p-4'>
                  <div>Calendar</div>

                  <div className='flex flex-col gap-2'>
                    <div className='p-3 flex flex-col gap-3 border border-black rounded-xl'>
                      <p>Assignment 1</p>
                      <p className='flex flex-row justify-between'>
                        <span>Time_of_Post</span> <span>Date_of_Post</span>
                      </p>
                    </div>
                    <div className='p-3 flex flex-col gap-3 border border-black rounded-xl'>
                      <p>Assignment 1</p>
                      <p className='flex flex-row justify-between'>
                        <span>Time_of_Post</span> <span>Date_of_Post</span>
                      </p>
                    </div>
                    <div className='p-3 flex flex-col gap-3 border border-black rounded-xl'>
                      <p>Assignment 1</p>
                      <p className='flex flex-row justify-between'>
                        <span>Time_of_Post</span> <span>Date_of_Post</span>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className='mt-9 w-full xl:w-[33.5%] bg-white rounded-xl h-fit px-4 py-9 flex flex-col gap-4'>
              <section className='flex flex-col gap-3 '>
                <p className='text-[16px] font-semibold'>My Teachers</p>
                <div className='flex flex-col w-full gap-2 overflow-y-scroll hideScrollbar'>
                  <div className='p-3 flex flex-row items-center justify-between gap-3 border border-black rounded-xl'>
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
                  <div className='p-3 flex flex-row items-center justify-between gap-3 border border-black rounded-xl'>
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
                  <div className='p-3 flex flex-row items-center justify-between gap-3 border border-black rounded-xl'>
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
              <section className='flex flex-col gap-3'>
                <p className='text-[16px] font-semibold'>Uncoming Events</p>
                <div className='flex flex-col w-full gap-2 overflow-y-scroll hideScrollbar'>
                  <div className='p-3 flex flex-row items-center justify-between gap-3 border border-black rounded-xl'>
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
                  <div className='p-3 flex flex-row items-center justify-between gap-3 border border-black rounded-xl'>
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
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudentDashboard;
