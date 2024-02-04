import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../../layout/MainLayout'
import TeacherSidebarLayout from '../../layout/teacher/TeacherSidebarLayout'
import axios from 'axios'


const TeacherSubmissionPage = () => {
  const {id} = useParams();
  
  return (
    
    <MainLayout>
      <TeacherSidebarLayout />
      <div className='bg-gray-200 p-2 flex flex-col gap-2'>
        <div className='bg-white w-full rounded-lg p-4'>details</div>
        <div className='bg-white w-full rounded-lg p-4'>
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Assignment Feedback</h2>
        <form className="space-y-4">
          {/* <div>
            <label className="block mb-2" htmlFor="assignment">
              Assignment
            </label>
            <input
              type="text"
              id="assignment"
              className="w-full bg-gray-200 border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
              placeholder="Enter assignment name"
            />
          </div> */}
          <div>
            <label className="block mb-2" htmlFor="feedback">
              Feedback
            </label>
            <textarea
              id="feedback"
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
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default TeacherSubmissionPage
