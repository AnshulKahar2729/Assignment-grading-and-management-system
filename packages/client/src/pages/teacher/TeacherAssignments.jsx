import React, { useContext, useEffect, useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import TeacherSidebarLayout from '../../layout/teacher/TeacherSidebarLayout'
import { Button } from 'flowbite-react';
import MyModal from '../../components/teacher/PostAssignmentModal';
import { Link } from 'react-router-dom';
import { UserContext } from '../../store/userContext';
import PostedAssignments from '../../components/teacher/PostedAssignments';
import RecentSubmissions from '../../components/teacher/RecentSubmissions';
import axios from 'axios';

const TeacherAssignments = () => {
  
  const {user} = useContext(UserContext)
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true)
  }
  
  function handleClick() {
    console.log('clickeddd')
  }
  
  const [assignment, setAssignment] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  
  // loading assignment by fetch
  useEffect(() => {
    async function fetchAssignment() {
      try {
        const response = await axios.get(`https://assignment-grading-and-management-system.onrender.com/api/get-submitted-assignment`);
        setAssignment(response.data);
        // console.log('api', response.data)
        console.log(response.data.submittedAssignments)
        // setLoading(false);
      } catch (error) {
        // setLoading(false);
      }
    }

    fetchAssignment();

    // Cleanup function to cancel any pending requests if the component unmounts
    return () => {};
  }, []);


  return (
    <MainLayout>
        <TeacherSidebarLayout/>
        <div className='w-full h-full overflow-hidden'>
          <div className='bg-[#d6d6d6] flex gap-4 p-4 flex-col md:flex-row h-screen'>
            
            <div className='lg:w-[50%] h-full w-full rounded-lg bg-white flex flex-col gap-3'>
              <p
                style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}} 
                className='w-full text-center text-white border-b p-4 font-bold'>Posted Assignment</p>
              <div className='hideScrollbar flex px-4 flex-col gap-3 w-full overflow-y-auto rounded-lg scrollbar-hidden h-[300px] sm:h-[450px] xl:h-[598px]'>
                <div>

                  {user?.teacher?.uploadedAssignment.map((item, idx) => (
                    <PostedAssignments
                    onClick={handleClick}
                    id={item._id}
                    name={item.title}
                    startDate={item.startDate}
                    />
                  ))}
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

              <p className='m-1 text-center text-lg font-semibold p-4 border-b border-gray-200'>
                Recent Submission by Students
              </p>
              <div className='overflow-y-scroll bg-white'>
              <section className='flex-1  bg-white rounded-lg '>

              <div className='py-3 xl:px-16 h-full'>
                {assignment?.submittedAssignments.map((item)=> (
                    <RecentSubmissions
                      studentName={item.submittedBy.title}
                      assignmentTitle={item.assignment.title}
                      id={item._id}
                    />
                ))}
              </div>
            </section>
              </div>

            </div>
          </div>
          
            {/* MODAL  */}
            <MyModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
        </div>
    </MainLayout>
  )
}

export default TeacherAssignments
