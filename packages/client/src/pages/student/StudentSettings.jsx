import React, { useContext, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import StudentSidebarLayout from '../../layout/student/StudentSidebarLayout';
import { UserContext } from '../../store/userContext';

const StudentSettings = () => {

  const {user} = useContext(UserContext)
  const name = user.student.name;
  const email = user.student.email;
  const branch = user.student.branch;
  const year = user.student.year;
  const division = user.student.division;


  const [edit, setEdit] = useState(false);

  const handleEditChanges = e => {
    e.preventDefault();
  };

  return (
    <MainLayout>
      <StudentSidebarLayout />
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
                  <p className='text-3xl font-medium'>{name}</p>
                  <p className='text-lg'>Role : Student</p>
                  <p className='text-lg'>Email : {email}</p>
                  <p className='text-lg'>Year : {year}</p>
                  <p className='text-lg'>Branch: {branch}</p>
                  <p className='text-lg'>Division : {division}</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudentSettings;
