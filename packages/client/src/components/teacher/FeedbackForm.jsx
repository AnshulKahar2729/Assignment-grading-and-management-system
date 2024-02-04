import React, { useContext, useState } from 'react'
import { UserContext } from '../../store/userContext'
import axios from 'axios';

const FeedbackForm = ({id}) => {
    
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const [feedbackMsg, setFeedbackMsg] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
        const response = await axios.post(`https://assignment-grading-and-management-system.onrender.com/api/teacher/feedback`, {
            submittedAssignmentId: id ,
            feedback: feedbackMsg,
            teacherId: user.teacher._id
        });
        console.log( response.data)
        if(response){
            alert("Feedback sent")
        }
        setLoading(false);
        } catch (error) {
        setLoading(false);
        }
        }
  
    const {user} = useContext(UserContext)
  return (
    <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Assignment Feedback</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2" htmlFor="feedback">
              Feedback
            </label>
            <textarea
              id="feedback"
              value={feedbackMsg}
              onChange={(e)=>{setFeedbackMsg(e.target.value)}}
              className="w-full bg-gray-200 border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
              placeholder="Enter feedback"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              {loading? 'Loading...' : 'Submit Feedback'}
            </button>
          </div>
        </form>
      </div>
  )
}

export default FeedbackForm
