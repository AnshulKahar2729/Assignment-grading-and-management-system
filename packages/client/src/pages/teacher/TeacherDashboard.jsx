import React, { useEffect, useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import TeacherSidebarLayout from '../../layout/teacher/TeacherSidebarLayout'

const TeacherDashboard = () => {
  return (
    <MainLayout>
        <TeacherSidebarLayout/>
          <div className='bg-[#d6d6d6]'>Teacher Dashboard</div>
    </MainLayout>
  )
}

export default TeacherDashboard
