import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../store/userContext'
import axios from 'axios';

const FeedbackForm = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [data, setData] = useState([]);

  const { user } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `https://assignment-grading-and-management-system.onrender.com/api/teacher/feedback`,
        {
          submittedAssignmentId: id,
          feedback: feedbackMsg,
          teacherId: user.teacher._id,
        }
      );

      console.log('Feedback API response:', response.data);

      if (response.data) {
        alert('Feedback sent successfully');
      }

      setLoading(false);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://assignment-grading-and-management-system.onrender.com/api/teacher/assignment/submittedAssignments/${id}`
        );

        console.log('Assignment Data API response:', response.data);

        setData(response.data.submittedAssignment);
      } catch (error) {
        console.error('Error fetching assignment data:', error);
      }
    };

    fetchData();
  }, []); 

  useEffect(() => {
    console.log('Data from API:', data); 
  }, [data]);
 
  return (
    <div className='h-full w-full overflow-y-scroll'>
      <section
        className='flex flex-1 justify-between text-white rounded-lg p-4 gap-4 mb-4 '
        style={{
          background:
            'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)',
        }}
      >
        <div className='w-full h-fit p-4  rounded-xl flex lg:flex-col flex-col gap-1 lg:gap-3 '>
          <div className='flex flex- w-full'>
            <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>Title:</p>
            <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-[#ffffff2c] text-white shadow-sm shadow-white'>
              {data.assignment?.title || 'N/A'}
            </p>
          </div>
          <div className='flex flex-row w-full'>
            <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>
              Created By:
            </p>
            <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-[#ffffff2c] text-white shadow-sm shadow-white'>
              {data.assignment?.createdBy || 'N/A'}
            </p>
          </div>
          <div className='flex flex-row w-full'>
            <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>
              Submission Date:
            </p>
            <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-[#ffffff2c] text-white shadow-sm shadow-white'>
              {data?.submissionDate ? new Date(data.submissionDate).toLocaleDateString() : 'N/A'}
            </p>
          </div>
          <div className='flex flex-row w-full'>
            <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>
              End Date:
            </p>
            <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-[#ffffff2c] text-white shadow-sm shadow-white'>
              {data.assignment?.endDate
                ? new Date(data.assignment.endDate).toLocaleDateString()
                : 'N/A'}
            </p>
          </div>
          <div className='flex flex-row w-full'>
            <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>File:</p>
            <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-[#ffffff2c] text-white shadow-sm shadow-white'>
              {data.assignment?.file ? (
                <a href={data.assignment.file} target='_blank' rel='noopener noreferrer'>
                  View File
                </a>
              ) : (
                'N/A'
              )}
            </p>
          </div>
          <div className='flex flex-row w-full'>
            <p className='w-[40%] p-1 text-sm sm:text-base font-medium sm:p-2 rounded-md'>
              Grades:
            </p>
            <p className='w-[60%] p-1 text-sm sm:text-base sm:p-2 rounded-md bg-[#ffffff2c] text-white shadow-sm shadow-white'>
              {data?.grades || 'N/A'}
            </p>
          </div>
        </div>
      </section>
      <div className='w-full bg-white rounded-lg shadow-lg p-8 flex flex-col-reverse sm:flex-row-reverse justify-evenly  sm:px-10 gap-5'>
        <div className='w-full sm:w-1/2'>
          <div className='border  p-4'>
            {data.teacherComments &&
              data.teacherComments.map((item, i) => (
                <div key={i} className='mb-2 border-b'>
                  {/* <p>Author: {item.author}</p> */}
                  <p>Feedback: {item.content}</p>
                  <p>Post Date: {item.date.toLocaleString('en-US')}</p>
                </div>
              ))}
          </div>
        </div>
        <div className='w-full sm:w-1/2'>
          <h2 className='text-2xl font-bold mb-4'>Assignment Feedback</h2>
          <form className='space-y-4 flex flex-col  w-full' onSubmit={handleSubmit}>
            <div>
              <label className='block mb-2' htmlFor='feedback'>
                Feedback
              </label>
              <textarea
                id='feedback'
                value={feedbackMsg}
                onChange={e => {
                  setFeedbackMsg(e.target.value);
                }}
                className='w-full bg-gray-200 border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500'
                placeholder='Enter feedback'
                rows='1'
              ></textarea>
            </div>
            <div className='flex justify-start'>
              <button
                type='submit'
                className='bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
              >
                {loading ? 'Loading...' : 'Submit Feedback'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm
