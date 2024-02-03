import React, { useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import TeacherSidebarLayout from '../../layout/teacher/TeacherSidebarLayout'

// const TeacherSettings = () => {
//   return (
//     <MainLayout>
//         <TeacherSidebarLayout/>
//           <div className=''>Teacher Settings</div>
//     </MainLayout>
//   )
// }

// export default TeacherSettings

const TeacherSettings = () => {

  const [edit, setEdit] = useState(false);

  const handleEditChanges = e => {
    e.preventDefault();
  };

  return (
    <MainLayout>
      <TeacherSidebarLayout />
      <div className='bg-[#d6d6d6] p-2 sm:p-3 h-screen overflow-hidden'>
        <div className='bg-white w-full h-full rounded-xl  overflow-y-scroll hideScrollbar'>
          <div
            style={{
              background:
                'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)',
            }}
            className='w-full h-fit p-8 flex flex-col gap-4 rounded-xl'
          >
            <div className='w-full h-fit p-0 md:p-8 flex flex-col sm:flex-row justify-between'>
              <div className='flex flex-col lg:flex-row gap-10'>
                <div className='border border-white w-fit h-fit rounded-xl p-2 flex items-center '>
                  <i className='text-white text-[150px] fa-solid fa-user-secret'></i>
                </div>
                <div className='flex flex-col gap-2 text-white'>
                  <p className='text-3xl font-medium'>Sumit Kharate</p>
                  <p className='text-lg'>Role : Student</p>
                  <p className='text-lg'>Email : sumit123@gmail.com</p>
                  <p className='text-lg'>Year : 2nd</p>
                  <p className='text-lg'>Branch: Electronics & Telecommunications</p>
                  <p className='text-lg'>Division : A</p>
                </div>
              </div>
              <button
                onClick={() => setEdit(!edit)}
                className='text-black bg-[#ffffff] hover:bg-[#e5e5e5] h-fit py-2 px-4 text-base font-semibold rounded-md'
              >
                Edit
              </button>
            </div>
            <div className='text-white'>
              {edit ? (
                <form onSubmit={handleEditChanges}>
                  <div className='mb-4'>
                    <label className='block text-sm font-medium'>Full Name</label>
                    <input
                      type='text'
                      placeholder='Your Name'
                      className='w-full border p-2 rounded bg-gray-100 text-black outline-none text-black font-medium'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-sm font-medium'>Email</label>
                    <input
                      type='email'
                      placeholder='Your Email'
                      className='w-full border p-2 rounded bg-gray-100 text-black outline-none text-black font-medium'
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor='year' className='block mb-2 mt-5'>
                      Year
                    </label>
                    <input
                      className='w-full px-4 py-2 mb-2 border border-gray-400 rounded-md outline-none text-black font-medium'
                      type='text'
                      id='year'
                      placeholder='Your Year'
                    />
                    <label htmlFor='branch' className='block mb-2 mt-5'>
                      Branch
                    </label>
                    <input
                      className='w-full px-4 py-2 mb-2 border border-gray-400 rounded-md outline-none text-black font-medium'
                      type='text'
                      id='branch'
                      placeholder='Your Branch'
                    />
                    <label htmlFor='division' className='block mb-2 mt-5'>
                      Division
                    </label>
                    <input
                      className='w-full px-4 py-2 mb-2 border border-gray-400 rounded-md outline-none text-black font-medium'
                      type='text'
                      id='division'
                      placeholder='Your Division'
                    />
                  </div>

                  <div className='flex flex-row gap-4 w-full my-5'>
                  <button
                    type='submit'
                    className='text-black bg-[#ffffff] hover:bg-[#e5e5e5] h-fit py-2 px-4 text-base font-semibold rounded-md'
                  >
                    Save Changes
                  </button>
                  <button
                    type='submit'
                    className='text-black bg-[#ffffff] hover:bg-[#e5e5e5] h-fit py-2 px-4 text-base font-semibold rounded-md'
                  >
                    Cancel
                  </button>
                  </div>
                </form>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TeacherSettings;