import React from 'react';
import TeacherSidebar from '../../components/teacher/TeacherSidebar';

function TeacherSidebarLayout({ children }) {
  return (
    <div className="h-screen sidebar-layout">
      <TeacherSidebar/>
      <div>
        {children}
      </div>
    </div>
  );
}

export default TeacherSidebarLayout;
