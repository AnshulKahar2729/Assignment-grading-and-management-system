import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../../layout/MainLayout'
import TeacherSidebarLayout from '../../layout/teacher/TeacherSidebarLayout'
import axios from 'axios'
import FeedbackForm from '../../components/teacher/FeedbackForm'
import FeedbackList from '../../components/teacher/FeedbackList'


const TeacherSubmissionPage = () => {
  const {id} = useParams();
  // https://assignment-grading-and-management-system.onrender.com/api/teacher/assignment/submittedAssignments/:submittedAssignmentId 

  
  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // loading assignment by fetch
  useEffect(() => {
    async function fetchAssignment() {
      try {
        const response = await axios.get(`https://assignment-grading-and-management-system.onrender.com/api/teacher/assignment/submittedAssignments/${id}`);
        setAssignment(response.data);
        console.log('api', response.data)
        console.log(response.data)
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchAssignment();

    return () => {};
  }, []);
  
  return (
    <MainLayout>
      <TeacherSidebarLayout />
      <div className='bg-gray-200 p-2 flex flex-col gap-2'>

        <div className='bg-white w-full rounded-lg p-4'>
          {assignment?.submittedAssignment.teacherComments.map((item)=> (
            <FeedbackList/>
          ))}
          <FeedbackForm id={id} />
        </div>
      </div>
    </MainLayout>
  );
}

export default TeacherSubmissionPage
