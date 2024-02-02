import React from 'react';
import TeacherSidebar from '../../components/teacher/TeacherSidebar';

function TeacherSidebarLayout({ children }) {
  return (
    <div className="layout">
      <TeacherSidebar/>
      <div>
        {children}
      </div>
    </div>
  );
}

export default TeacherSidebarLayout;
