import React from 'react'
import MainLayout from '../../layout/MainLayout'
import StudentSidebarLayout from '../../layout/student/StudentSidebarLayout'

const StudentParticularAssignment = () => {
  return (
    <MainLayout>
        <StudentSidebarLayout/>
        <div className='bg-[#d6d6d6] p-3 w-full h-screen flex flex-col gap-4'>
            <div className='w-full h-1/2 bg-white rounded-xl flex lg:flex-row flex-col gap-3 overflow-hidden'>
                <div className='w-full lg:w-1/2  lg:h-full bg-red-500'></div>
                <div className='w-1/2 h-full bg-red-700'></div>
            </div>
            <div className='w-full h-1/2 bg-white rounded-xl flex lg:flex-row flex-col gap-3 overflow-hidden'>
                <div className='w-full lg:w-1/2  lg:h-full bg-red-500'></div>
                <div className='w-1/2 h-full bg-red-700'></div>
            </div>
        </div>
    </MainLayout>
  )
}

export default StudentParticularAssignment