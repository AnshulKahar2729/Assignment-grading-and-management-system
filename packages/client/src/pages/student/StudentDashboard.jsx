import React, { useContext, useEffect, useState } from 'react';
import StudentSidebarLayout from '../../layout/student/StudentSidebarLayout';
import MainLayout from '../../layout/MainLayout';
import { UserContext } from '../../store/userContext';
import Calendar from '../../components/_commons/calendar/StudentCalendar';
import Deadline from '../../components/_commons/calendar/Deadline';
import { useNavigate } from 'react-router-dom';


const StudentDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  
  const { user, again, setAgain } = useContext(UserContext);

  // const

  useEffect(() => {
    if (!user) {
      setAgain(!again);
    }
  }, []);

  // we need to make sure that first user is loaded then everything else
  if (!user) {
    return (
      <div className=' flex items-center justify-center h-screen'>
        <p>Loading...</p>
      </div>
    );
  }

 
  const name = user.student.name;
  const Assignment = user.student.submittedAssignment;

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const Assignments = Assignment.map(assignment => ({
    title: assignment.file,
    date: new Date(assignment.submissionDate).toLocaleDateString(),
    completed: true,
  }));

  
  function handleLogout() {
    let result = window.confirm("are you sure?")
    if(result){
      
    localStorage.removeItem('token');
    navigate('/')
    console.log('Logged Out as a Student')
    }
    
}
  return (
    <MainLayout>
      <StudentSidebarLayout />
      <div className=' bg-[#d6d6d6] h-screen overflow-y-scroll hideScrollbar'>
        <div className='hidden z-50 bg-white h-16 sm:flex flex-row items-center justify-between px-5 '>
          <div className='hidden sm:block'>Welcome to EduTrack</div>
          <div className='flex flex-row gap-2 md:gap-4 items-center justify-between sm:justify-end w-full sm:w-fit'>
            <div className='flex flex-row gap-3 items-center '>

            <i className='text-[40px] text-gray-400 fa-regular fa-circle-user'></i>
            <span className='font-semibold'>{user.student.name}</span>
            </div>
            <button onClick={handleLogout} className='py-1 md:py-2 px-2 md:px-4 bg-red-600 rounded-md hover:bg-red-700 text-white'>
              Logout
            </button>
          </div>
        </div>

        <div className=' p-4 h-fit w-full'>
          <div className='flex flex-col xl:flex-row justify-between h-fit overflow-y-scroll hideScrollbar gap-4'>
            <div className='flex flex-col xl:w-[65%] w-full gap-4'>
              <div className='flex flex-col gap-3'>
                <section
                  style={{
                    background:
                      'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)',
                  }}
                  className=' grid grid-cols-1 sm:grid-cols-3 bg-[#176DEF] text-white rounded-xl w-full'
                >
                  <div className='m-4 sm:m-8 sm:border-r'>
                    <p className='text-xl font-semibold'>Assignments</p>
                    <div className='flex flex-row items-center gap-3 '>
                      <i className='text-xl sm:text-2xl lg:text-4xl fa-solid fa-folder-open'></i>
                      <p className=''>
                        <span className='text-xl sm:text-2xl md:text-3xl lg:text-5xl'>
                          {Assignment.length}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='m-4 sm:m-8 sm:border-r'>
                    <p className='text-xl font-semibold'>Grade</p>
                    <div className='text-xl sm:text-2xl lg:text-4xl flex flex-row items-center gap-3 '>
                      <i className='fa-solid fa-graduation-cap'></i>
                      <p className='text-xl sm:text-2xl md:text-3xl lg:text-5xl'>
                        A+
                        {/* <span className='text-xl sm:text-2xl md:text-3xl lg:text-5xl'>20</span> <span className='text-xl lg:text-3xl'>/</span>{' '}
                        <span className='text-sm sm:text-base lg:text-lg'>20</span> */}
                      </p>
                    </div>
                  </div>
                  <div className='m-4 sm:m-8'>
                    <p className='text-xl font-semibold'>Score</p>
                    <div className='flex flex-row items-center gap-3'>
                      <i className='text-xl sm:text-2xl lg:text-4xl fa-solid fa-star'></i>
                      <p className=''>
                        <span className='text-xl sm:text-2xl md:text-3xl lg:text-5xl'>20</span>{' '}
                        <span className='text-xl lg:text-3xl'>/</span>{' '}
                        <span className='text-sm sm:text-base lg:text-lg'>20</span>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div className='flex  '>
                <section className='grid grid-cols-1 2xl:grid-cols-2 gap-4 lg:gap-3 bg-white text-black rounded-xl w-full p-4 h-full'>
                  <div className=''>
                    <Calendar onSelectDate={handleDateSelect} Assignments={Assignments} />
                  </div>
                  <div className='border-l p-3 border-gray-200'>
                    <Deadline selectedDate={selectedDate} Assignments={Assignments} />
                  </div>
                </section>
              </div>
            </div>
            <div className=' w-full xl:w-[33.5%] bg-white rounded-xl max-h-[700px] px-4 py-9 flex flex-col gap-4'>
              <section className='flex flex-col gap-3 '>
                <p className='text-[16px] font-semibold'>My Teachers</p>
                <div className='flex flex-col w-full gap-2 overflow-y-scroll hideScrollbar'>
                  <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200'>
                    <div className='flex gap-4 items-center'>
                      <i className='text-[30px] fa-regular fa-user'></i>
                      <p className='flex flex-col'>
                        {' '}
                        <span className='font-semibold'>Sumit Kharate</span>{' '}
                        <span>Java,Javascript</span>{' '}
                      </p>
                    </div>
                    <i className='fa-solid fa-message'></i>
                  </div>
                  <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200'>
                    <div className='flex gap-4 items-center'>
                      <i className='text-[30px] fa-regular fa-user'></i>
                      <p className='flex flex-col'>
                        {' '}
                        <span className='font-semibold'>Sumit Kharate</span>{' '}
                        <span>Java,Javascript</span>{' '}
                      </p>
                    </div>
                    <i className='fa-solid fa-message'></i>
                  </div>
                  <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200'>
                    <div className='flex gap-4 items-center'>
                      <i className='text-[30px] fa-regular fa-user'></i>
                      <p className='flex flex-col'>
                        {' '}
                        <span className='font-semibold'>Sumit Kharate</span>{' '}
                        <span>Java,Javascript</span>{' '}
                      </p>
                    </div>
                    <i className='fa-solid fa-message'></i>
                  </div>
                </div>
              </section>
              <section className='flex flex-col gap-3'>
                <p className='text-[16px] font-semibold'>Uncoming Events</p>
                <div className='flex flex-col w-full gap-2 overflow-y-scroll hideScrollbar'>
                  <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200 '>
                    <div className='flex gap-4 items-center'>
                      <i className='text-[30px] fa-regular fa-user'></i>
                      <p className='flex flex-col'>
                        {' '}
                        <span className='font-semibold'>Sumit Kharate</span>{' '}
                        <span>Java,Javascript</span>{' '}
                      </p>
                    </div>
                    <i className='fa-solid fa-message'></i>
                  </div>
                  <div className='p-3 flex flex-row items-center justify-between gap-3 border-b border-gray-200 '>
                    <div className='flex gap-4 items-center'>
                      <i className='text-[30px] fa-regular fa-user'></i>
                      <p className='flex flex-col'>
                        {' '}
                        <span className='font-semibold'>Sumit Kharate</span>{' '}
                        <span>Java,Javascript</span>{' '}
                      </p>
                    </div>
                    <i className='fa-solid fa-message'></i>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudentDashboard;
