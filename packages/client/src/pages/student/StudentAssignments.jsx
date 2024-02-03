import React, { useContext, useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import StudentSidebarLayout from '../../layout/student/StudentSidebarLayout'
import { Link } from 'react-router-dom'
import MyModal from '../../components/student/SubmitAssignmentModal';
import {UserContext} from '../../store/userContext'
import PendingAssignments from '../../components/student/PendingAssignments';
import RecentSubmissions from '../../components/student/RecentSubmissions';


const DUMMY_DATA = [
  {
    name: "name",
    date: "12",
  }
]

const StudentAssignments = () => {
  const {user} = useContext(UserContext)
  return (
    <MainLayout>
      <StudentSidebarLayout/>
      <div className='bg-[#d6d6d6] flex flex-col md:flex-row p-4 gap-4 w-full h-screen overflow-hidden hideScrollbar'>

      <div className='lg:w-[50%] h-full w-full rounded-lg bg-white flex flex-col gap-3 overflow-hidden'>
        <p
          style={{background: 'radial-gradient(circle at 50.1% 50.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}
          className='w-full text-center text-white border-b p-4 font-bold'>Pending Submissions</p>
        <div className='hideScrollbar flex px-4 flex-col gap-3 w-full overflow-y-auto rounded-lg scrollbar-hidden h-[300px] sm:h-[450px] xl:h-[598px]'>
          <div>

            {user.student.submittedAssignment.map((item, idx) => (
              <PendingAssignments
              // name={item.name}
              assignmentId={item._id}
              />
            ))}

            {/* <div className='border-b-2 p-4 border-blue-100'>
              <p><span className='text-gray-600'>Title:</span> <span className='font-bold'>Assignment_Name</span></p>
              <div className='flex justify-between items-center'>
                <button onClick={openModal} style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}} className='mt-2 py-1 px-4 text-white text-sm bg-blue-600 hover:bg-blue-700 transition-all rounded-sm'>SUBMIT</button>
                <p>Last Date: <span className='text-red-600'>28th Jan</span></p>
              </div>
            </div>

            <div className='border-b-2 p-4 border-blue-100'>
              <p><span className='text-gray-600'>Title:</span> <span className='font-bold'>Assignment_Name</span></p>
              <div className='flex justify-between items-center'>
                <button onClick={openModal} style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}} className='mt-2 py-1 px-4 text-white text-sm bg-blue-600 hover:bg-blue-700 transition-all rounded-sm'>SUBMIT</button>
                <p>Last Date: <span className='text-red-600'>28th Jan</span></p>
              </div>
            </div> */}

          </div>
        </div>
      </div>



      <div className='lg:w-[50%] w-full rounded-lg bg-white flex flex-col gap-3 overflow-hidden'>
        <p 
          style={{background: 'radial-gradient(circle at 50.1% 50.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}
          className='w-full text-center text-white border-b p-4 font-bold'>Recent Submissions</p>
        <div className='hideScrollbar flex px-4 flex-col gap-3 w-full overflow-y-auto rounded-lg scrollbar-hidden h-[300px] sm:h-[450px] xl:h-[598px]'>
          <div>
            
            {user.student.submittedAssignment.map((item, idx) => (
              <RecentSubmissions
              title='Dummy Title'
              file={item.file}
              submissionDate={item.submissionDate}
              assignment={item.assignment}
              />
            ))}

            {/* <div className='border-b-2 p-4 border-blue-100'>
              <p><span className='text-gray-600'>Title:</span> <span className='font-bold'>Assignment_Name</span></p>
              <div className='flex justify-between items-center flex-wrap'>
                <div className=''>
                  <Link to='/dashboard/student/assignments/ass1'>
                    <button style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}} className='mt-2 py-1 px-4 mr-2 text-white text-sm bg-blue-600 hover:bg-blue-700 transition-all rounded-sm'>View Details</button>
                  </Link>
                  <button style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}} className='mt-2 py-1 px-4 text-white text-sm bg-blue-600 hover:bg-blue-700 transition-all rounded-sm'>Download</button>
                </div>
                <p>Submission Date: <span className='text-red-600'>28th Jan</span></p>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>

    
    </MainLayout>
  )
}

export default StudentAssignments
