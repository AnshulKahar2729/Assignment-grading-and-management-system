import React from 'react'
import StudentSidebarLayout from '../../layout/student/StudentSidebarLayout'
import MainLayout from '../../layout/MainLayout'

const StudentDashboard = () => {
  return (
    <MainLayout>
        <StudentSidebarLayout/>
        <div className='bg-blue-500'>StudentDashboard</div>
    </MainLayout>
  )
}

export default StudentDashboard
