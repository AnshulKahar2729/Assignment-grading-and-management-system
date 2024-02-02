import React from 'react'
import MainLayout from '../../layout/MainLayout'
import TeacherSidebarLayout from '../../layout/teacher/TeacherSidebarLayout'

const TeacherDashboard = () => {
  return (
    <MainLayout>
        <TeacherSidebarLayout/>
        <div className='bg-blue-500'>Teacher Dashboard</div>
    </MainLayout>
  )
}

export default TeacherDashboard
