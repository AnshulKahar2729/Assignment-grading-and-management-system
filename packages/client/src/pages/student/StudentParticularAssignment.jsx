import React, { useContext, useEffect, useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import StudentSidebarLayout from '../../layout/student/StudentSidebarLayout'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../components/_commons/Loader'
import MyModal from '../../components/student/SubmitAssignmentModal';
import { UserContext } from '../../store/userContext';

const StudentParticularAssignment = () => {
  const { id } = useParams();
  const {user} = useContext(UserContext);

  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [submittedAssignment, setSubmittedAssignment] = useState([]);
  
  // loading assignment by fetch
  // useEffect(() => {
  //   async function fetchAssignment() {
  //     console.log('fetching..')
  //     try {
  //       const response = await axios.get(`https://assignment-grading-and-management-system.onrender.com/api/student/assignment/${id}`);
  //       setAssignment(response.data.assignment);
  //       console.log(response.data.assignment)
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   }

  //   fetchAssignment();

  //   // Cleanup function to cancel any pending requests if the component unmounts
  //   return () => {};
  // }, [id]);

    const formattedEndDate = new Date(assignment?.endDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    
    const formattedSubmissionDate = new Date(assignment?.submissions[0]?.submissionDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    // user submitted assignment or not 
    // const checkUserId = () => {
    //   console.log('checking')
    //   // Assuming your JSON data is an array of objects with each object having a userId property
    //   const userAssignment = assignment?.submissions?.find(item => item?.submittedBy === user?.student?._id); // Find the object matching the user ID
    //   setSubmittedAssignment(userAssignment); // Update submittedAssignment state
    // };

  return (
    <MainLayout>
      <StudentSidebarLayout />
      {loading ?
      <Loader/>
      : 
      <div className='bg-[#d6d6d6] w-full flex '>
        <div className='bg-[#d6d6d6] p-3 w-full h-full flex flex-col gap-2 overflow-y-scroll'>
          <div className='w-full h-fit p-4 bg-white rounded-xl flex lg:flex-row flex-col gap-1 lg:gap-3 '>
            <div className='w-full lg:w-1/2 h-auto  flex flex-row justify-between items-center'>
              <div className='flex flex-col gap-3 w-full'>
                <div className='flex flex-row w-full'>
                  <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>Title</p>
                  <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>{assignment?.title}</p>
                </div>
                <div className='flex flex-row w-full'>
                  <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>Posted By :</p>
                  <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>Abhay Sir</p>
                </div>
                <div className='flex flex-row w-full'>
                  <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>End Date :</p>
                  <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>{formattedEndDate}</p>
                </div>
              </div>
            </div>
              <div className='w-full lg:w-1/2 h-auto '>
            <a target='_blank' href={assignment?.file}>
                <div
                  style={{
                    backgroundImage:'url(https://img.freepik.com/premium-vector/file-computer-document-icon-isolated-white-background-color-folder_599062-130.jpg)',
                    backgroundSize:'contain',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center'
                  }}
                  className='w-full h-full rounded-xl  flex justify-center items-center min-h-48 bg-white border-2 hover:opacity-90 transition-all hover:scale-95 cursor-pointer'
                >
                  <i className="fa-solid fa-download  text-5xl"></i>
                </div>
            </a>
              </div>
          </div>

          {/* <div className='w-full h-fit bg-white p-4 rounded-xl flex flex-col gap-2'>
            <p className='w-full border-b-2 border-black text-lg font-medium'>
              PERSONAL SUBMISSION
            </p>
            <div className=' w-full h-fit flex lg:flex-row flex-col gap-1 lg:gap-3 '>
              <div className='w-full lg:w-1/2 h-auto flex flex-col gap-2'>
              <div className='flex flex-col gap-3 w-full'>
                <div className='flex flex-row w-full'>
                  <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>Submission Time :</p>
                  <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>10 pm</p>
                </div>
                <div className='flex flex-row w-full'>
                  <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>Grading :</p>
                  <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>9/10</p>
                </div>
              </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-sm sm:text-base font-medium border-b-2 border-black'>Feedback :</p>
                  <div className='p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>Feedbacks are shown here</div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 h-auto '>
                <div
                  style={{
                    background:
                      'radial-gradient(circle at 50.1% 50.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)',
                  }}
                  className='w-full h-full rounded-xl text-white flex justify-center items-center'
                >
                  Submission Filter
                </div>
              </div>
            </div>
          </div> */}
          
          <div className='flex gap-2'>
            <div className='flex-1 rounded-lg bg-red-500 flex items-center justify-center min-h-20'>On Time</div>
            <div className='flex-1 rounded-lg bg-red-500 flex items-center justify-center min-h-20'>1</div>
            <div className='flex-1 rounded-lg bg-red-500 flex items-center justify-center min-h-20'>1</div>
          </div>
           
            <div className='w-full h-fit p-4 bg-white rounded-xl flex lg:flex-row flex-col gap-1 lg:gap-3 '>
            <div className='w-full lg:w-1/2 h-auto  flex flex-row justify-between items-center'>
              <div className='flex flex-col gap-3 w-full'>
                <div className='flex flex-row w-full'>
                  <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>Title :</p>
                  <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>{assignment?.submissions[0]?.assignment}</p>
                </div>
                <div className='flex flex-row w-full'>
                  <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>Submitted By :</p>
                  <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>{user?.student.name}</p>
                </div>
                <div className='flex flex-row w-full'>
                  <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>Submitted Date :</p>
                  <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-gray-100'>{formattedSubmissionDate}</p>
                </div>
              </div>
            </div>
            
            <div className='w-full lg:w-1/2 h-auto '>
              <div
                style={{
                  backgroundImage:'url(https://img.freepik.com/premium-vector/file-computer-document-icon-isolated-white-background-color-folder_599062-130.jpg)',
                  backgroundSize:'contain',
                  backgroundRepeat:'no-repeat',
                  backgroundPosition:'center'
                }}
                className='w-full h-full rounded-xl  flex justify-center items-center min-h-48 bg-white border-2 hover:opacity-90 transition-all hover:scale-95 cursor-pointer'
              >
                <i className="fa-solid fa-download  text-5xl"></i>
              </div>
            </div>
          </div>


        </div>
      </div>
      }
    </MainLayout>
  );
}

export default StudentParticularAssignment







