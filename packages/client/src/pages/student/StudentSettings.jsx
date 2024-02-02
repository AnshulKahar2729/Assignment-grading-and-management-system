import React from 'react'
import MainLayout from '../../layout/MainLayout'
import StudentSidebarLayout from '../../layout/student/StudentSidebarLayout'

const StudentSettings = () => {
  return (
    <MainLayout>
        <StudentSidebarLayout/>
        <div className='bg-blue-500'>Student Settings</div>
    </MainLayout>
  )
}

export default StudentSettings
