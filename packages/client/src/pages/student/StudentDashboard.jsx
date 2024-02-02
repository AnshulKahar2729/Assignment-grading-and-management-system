import React from 'react'
import StudentSidebarLayout from '../../layout/student/StudentSidebarLayout'
import MainLayout from '../../layout/MainLayout'

const StudentDashboard = () => {
  return (
    <MainLayout>
      <StudentSidebarLayout />
      <div className='bg-[#F0F1F3]'>
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

        <div className='flex flex-row justify-between m-4'>
          <div className='flex flex-col'>
            <div className='flex flex-col gap-2'>
              <p className='text-xl font-semibold'>Summary report</p>
              <section className=' grid grid-cols-3 bg-[#176DEF] text-white rounded-xl lg:w-[65%] w-full'>
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
                  <p >Attendance</p>
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
            <div className='flex flex-col'>
              <p className='text-xl font-semibold'>My Schedule</p>
              <section className='grid grid-rows-1 sm:grid-rows-2 bg-white text-black rounded-xl w-full lg:w-[65%]'>
                <div>Calendar</div>
                <div>
                  <div className='p-3'>
                    <p>Assignment 1</p>
                    <p><span></span> <span></span></p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className=''>
            <section></section>
            <section></section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default StudentDashboard
