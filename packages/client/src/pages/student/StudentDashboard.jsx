import React from 'react'
import StudentSidebarLayout from '../../layout/student/StudentSidebarLayout'
import MainLayout from '../../layout/MainLayout'

const StudentDashboard = () => {
  return (
    <MainLayout>
        <StudentSidebarLayout/>
        <div className='bg-[#F0F1F3]'>StudentDashboard</div>
    </MainLayout>
  )
}

export default StudentDashboard
