import React from 'react'
import MainLayout from '../../layout/MainLayout'
import StudentSidebarLayout from '../../layout/student/StudentSidebarLayout'

const StudentAssignments = () => {
  return (
    <MainLayout>
      <StudentSidebarLayout/>
      <div className='bg-[#d6d6d6] lg:flex xl:flex-row p-4 gap-4 w-full h-screen overflow-hidden hideScrollbar'>

      <div className='lg:w-[50%] h-full w-full rounded-lg bg-white flex flex-col gap-3 overflow-hidden'>
        <p className='w-full text-center text-white border-b p-4 border-[#176DEF] bg-[#176DEF] font-bold'>Pending Submissions</p>
        <div className='hideScrollbar flex px-4 flex-col gap-3 w-full overflow-y-auto rounded-lg scrollbar-hidden h-[300px] sm:h-[450px] xl:h-[598px]'>
          <div>
            <div className='border-b-2 p-4 border-blue-100'>
              <p><span className='text-gray-600'>Title:</span> <span className='font-bold'>Assignment_Name</span></p>
              <div className='flex justify-between items-center'>
                <button className='mt-2 py-1 px-4 text-white text-sm bg-blue-600 hover:bg-blue-700 transition-all rounded-sm'>SUBMIT</button>
                <p>Last Date: <span className='text-red-600'>28th Jan</span></p>
              </div>
            </div>

            <div className='border-b-2 p-4 border-blue-100'>
              <p><span className='text-gray-600'>Title:</span> <span className='font-bold'>Assignment_Name</span></p>
              <div className='flex justify-between items-center'>
                <button className='mt-2 py-1 px-4 text-white text-sm bg-blue-600 hover:bg-blue-700 transition-all rounded-sm'>SUBMIT</button>
                <p>Last Date: <span className='text-red-600'>28th Jan</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='lg:w-[50%] w-full rounded-lg bg-white flex flex-col gap-3 overflow-hidden'>
        <p className='w-full text-center text-white border-b p-4 border-[#176DEF] bg-[#176DEF] font-bold'>Recent Submissions</p>
        <div className='hideScrollbar flex px-4 flex-col gap-3 w-full overflow-y-auto rounded-lg scrollbar-hidden h-[300px] sm:h-[450px] xl:h-[598px]'>
          <div>
            <div className='border-b-2 p-4 border-blue-100'>
              <p><span className='text-gray-600'>Title:</span> <span className='font-bold'>Assignment_Name</span></p>
              <div className='flex justify-between items-center'>
                <button className='mt-2 py-1 px-4 text-white text-sm bg-blue-600 hover:bg-blue-700 transition-all rounded-sm'>Download</button>
                <p>Submission Date: <span className='text-red-600'>28th Jan</span></p>
              </div>
            </div>

            <div className='border-b-2 p-4 border-blue-100'>
              <p><span className='text-gray-600'>Title:</span> <span className='font-bold'>Assignment_Name</span></p>
              <div className='flex justify-between items-center'>
                <button className='mt-2 py-1 px-4 text-white text-sm bg-blue-600 hover:bg-blue-700 transition-all rounded-sm'>Download</button>
                <p>Submission Date: <span className='text-red-600'>28th Jan</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </MainLayout>
  )
}

export default StudentAssignments
