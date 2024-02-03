import React, { useContext, useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import TeacherSidebarLayout from '../../layout/teacher/TeacherSidebarLayout'
import { Button } from 'flowbite-react';
import MyModal from '../../components/teacher/PostAssignmentModal';
import { Link } from 'react-router-dom';
import { UserContext } from '../../store/userContext';
import PostedAssignments from '../../components/teacher/PostedAssignments';

const TeacherAssignments = () => {
  
  const {user} = useContext(UserContext)
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true)
  }
  
  function handleClick() {
    console.log('clickeddd')
  }


  return (
    <MainLayout>
        <TeacherSidebarLayout/>
          <div className='bg-[#d6d6d6] flex gap-4 p-4 flex-col md:flex-row '>
            
            <div className='lg:w-[50%] h-full w-full rounded-lg bg-white flex flex-col gap-3'>
              <p
                style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}} 
                className='w-full text-center text-white border-b p-4 font-bold'>Posted Assignment</p>
              <div className='hideScrollbar flex px-4 flex-col gap-3 w-full overflow-y-auto rounded-lg scrollbar-hidden h-[300px] sm:h-[450px] xl:h-[598px]'>
                <div>

                  {user.teacher.uploadedAssignment.map((uploadedAss, idx) => (
                    <PostedAssignments
                    onClick={handleClick}
                    uploadedAss={uploadedAss}
                    />
                  ))}

                  <div className='border-b-2 p-4 border-blue-100'>
                    <p><span className='text-gray-600'>Title:</span> <span className='font-bold'>Assignment_Name</span></p>
                    <div className='flex justify-between items-center'>
                      <Link to='/dashboard/teacher/assignments/ass1'><button style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}} className='mt-2 py-1 px-4 text-white text-sm bg-blue-600 hover:bg-blue-700 transition-all rounded-sm'>View Details</button></Link>
                      <p>Posted Date: <span className='text-red-600'>28th Jan</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-[50%] h-full w-full rounded-lg flex flex-col gap-3 overflow-hidden'>
              
              <div onClick={openModal} className='h-fit flex-1 sm:py-0 text-center gap-4 flex items-center justify-center bg-white rounded-lg cursor-pointer hover:opacity-90 border-2  hover:border-gray-400 transition-all'>
                <div className='w-full flex flex-rol justify-between py-3 px-8 items-center '>
                  <p className='text-lg text-gray-600'>Post New Assignment</p>
                  <i className="fa-solid fa-circle-plus text-4xl"></i>
                </div>
              </div>

        






              <section className='flex-1  bg-white rounded-lg '>
              <p className='m-3 text-center text-lg font-semibold p-4 border-b border-gray-200'>
                Recent Submission by Students
              </p>

              <div className='py-3 xl:px-16 h-full'>
                <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200 '>
                  <div className='flex gap-4 items-center'>
        
                    <p className='flex flex-col'>
                      {' '}
                      <span className='font-semibold'>Ashutosh Ranjan</span>{' '}
                      <span className='font-semibold'>Title : Assignment 1</span>{' '}
                      <span>SETB05</span>{' '}
                    </p>
                  </div>
                  
                  <button className='flex gap-2 items-center text-white p-2 rounded-md' style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}>
                    <i class="fa-solid fa-message"></i> 
                    Give FeedBack
                  </button>
                </div>

                <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200 '>
                  <div className='flex gap-4 items-center'>
        
                    <p className='flex flex-col'>
                      {' '}
                      <span className='font-semibold'>Ashutosh Ranjan</span>{' '}
                      <span className='font-semibold'>Title : Assignment 1</span>{' '}
                      <span>SETB05</span>{' '}
                    </p>
                  </div>
                  <button className='flex gap-2 items-center text-white p-2 rounded-md' style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}>
                    <i class="fa-solid fa-message"></i> 
                    Give FeedBack
                  </button>
                </div>

                <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200 '>
                  <div className='flex gap-4 items-center'>
        
                    <p className='flex flex-col'>
                      {' '}
                      <span className='font-semibold'>Ashutosh Ranjan</span>{' '}
                      <span className='font-semibold'>Title : Assignment 1</span>{' '}
                      <span>SETB05</span>{' '}
                    </p>
                  </div>
                  <button className='flex gap-2 items-center text-white p-2 rounded-md' style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}>
                    <i class="fa-solid fa-message"></i> 
                    Give FeedBack
                  </button>
                </div>

                <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200 '>
                  <div className='flex gap-4 items-center'>
        
                    <p className='flex flex-col'>
                      {' '}
                      <span className='font-semibold'>Ashutosh Ranjan</span>{' '}
                      <span className='font-semibold'>Title : Assignment 1</span>{' '}
                      <span>SETB05</span>{' '}
                    </p>
                  </div>
                  <button className='flex gap-2 items-center text-white p-2 rounded-md' style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}>
                    <i class="fa-solid fa-message"></i> 
                    Give FeedBack
                  </button>
                </div>

                <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200 '>
                  <div className='flex gap-4 items-center'>
        
                    <p className='flex flex-col'>
                      {' '}
                      <span className='font-semibold'>Ashutosh Ranjan</span>{' '}
                      <span className='font-semibold'>Title : Assignment 1</span>{' '}
                      <span>SETB05</span>{' '}
                    </p>
                  </div>
                  <button className='flex gap-2 items-center text-white p-2 rounded-md' style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}>
                    <i class="fa-solid fa-message"></i> 
                    Give FeedBack
                  </button>
                </div>

                <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200 '>
                  <div className='flex gap-4 items-center'>
        
                    <p className='flex flex-col'>
                      {' '}
                      <span className='font-semibold'>Ashutosh Ranjan</span>{' '}
                      <span className='font-semibold'>Title : Assignment 1</span>{' '}
                      <span>SETB05</span>{' '}
                    </p>
                  </div>
                  <button className='flex gap-2 items-center text-white p-2 rounded-md' style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}>
                    <i class="fa-solid fa-message"></i> 
                    Give FeedBack
                  </button>
                </div>
              </div>
            </section>

























            </div>


          </div>
          
            {/* MODAL  */}
            <MyModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
    </MainLayout>
  )
}

export default TeacherAssignments
