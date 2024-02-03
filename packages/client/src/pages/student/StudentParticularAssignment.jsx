import React from 'react'
import MainLayout from '../../layout/MainLayout'
import StudentSidebarLayout from '../../layout/student/StudentSidebarLayout'
import { useParams } from 'react-router-dom';

const StudentParticularAssignment = () => {
  const { id } = useParams();
  return (
    <MainLayout>
      <StudentSidebarLayout />
      <div className='bg-[#d6d6d6] w-full flex '>
        <div className='bg-[#d6d6d6] p-3 w-full h-full flex flex-col gap-2 overflow-y-scroll'>
          <div className='w-full h-fit p-4 bg-white rounded-xl flex lg:flex-row flex-col gap-1 lg:gap-3 '>
            <div className='w-full lg:w-1/2 h-auto  flex flex-row justify-between items-center'>
              <div className='flex flex-col gap-3 w-full'>
                <div className='flex flex-row w-full'>
                  <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>Title :</p>
                  <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>ASSIGNMENT-1</p>
                </div>
                <div className='flex flex-row w-full'>
                  <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>Posted By :</p>
                  <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>Nilesh Nagrale</p>
                </div>
                <div className='flex flex-row w-full'>
                  <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>Publish Date :</p>
                  <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>04/02/24</p>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/2 h-auto '>
              <div
                style={{
                  background:
                    'radial-gradient(circle at 50.1% 50.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)',
                }}
                className='w-full h-full rounded-xl text-white flex justify-center items-center'
              >
                Assignment File
              </div>
            </div>
          </div>

          <div className='w-full h-fit bg-white p-4 rounded-xl flex flex-col gap-2'>
            <p className='w-full border-b-2 border-black text-lg font-medium'>
              PERSONAL SUBMISSION
            </p>
            <div className=' w-full h-fit flex lg:flex-row flex-col gap-1 lg:gap-3 '>
              <div className='w-full lg:w-1/2 h-auto flex flex-col gap-2'>
              <div className='flex flex-col gap-3 w-full'>
                <div className='flex flex-row w-full'>
                  <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>Submission Time :</p>
                  <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>10 pm</p>
                </div>
                <div className='flex flex-row w-full'>
                  <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>Grading :</p>
                  <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>9/10</p>
                </div>
              </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-sm sm:text-base font-medium border-b-2 border-black'>Feedback :</p>
                  <div className='p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>Feedbacks are shown here</div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 h-auto '>
                <div
                  style={{
                    background:
                      'radial-gradient(circle at 50.1% 50.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)',
                  }}
                  className='w-full h-full rounded-xl text-white flex justify-center items-center'
                >
                  Submission Filter
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default StudentParticularAssignment







