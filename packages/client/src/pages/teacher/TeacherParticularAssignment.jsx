import React from 'react'
import MainLayout from '../../layout/MainLayout'
import TeacherSidebarLayout from '../../layout/teacher/TeacherSidebarLayout'

const TeacherParticularAssignment = () => {
  return (
    <MainLayout>
        <TeacherSidebarLayout/>
          <div className='bg-gray-200 p-4'>
            <div className="flex flex-1 justify-between bg-white rounded-lg p-4 gap-4 mb-4">
              <div className="flex">Assignment details</div>
              <div className="flex">Assignment cover</div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 bg-white rounded-lg p-4 gap-4">list of submitted students</div>
              <div className="flex-1 bg-white rounded-lg p-4 gap-4">list of remaining</div>
            </div>
          </div>
    </MainLayout>
  )
}

export default TeacherParticularAssignment
