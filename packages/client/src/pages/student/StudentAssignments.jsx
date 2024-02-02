import React from 'react'
import MainLayout from '../../layout/MainLayout'
import StudentSidebarLayout from '../../layout/student/StudentSidebarLayout'

const StudentAssignments = () => {
  return (
    <MainLayout>
        <StudentSidebarLayout/>
        <div className='bg-blue-500'>Student Ass</div>
    </MainLayout>
  )
}

export default StudentAssignments
