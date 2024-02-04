import React from 'react';
import StudentSidebar from '../../components/student/StudentSidebar';

function StudentSidebarLayout({ children }) {
  return (
    <div className="sm:h-screen sidebar-layout">
      <StudentSidebar/>
      <div>
        {children}
      </div>
    </div>
  );
}

export default StudentSidebarLayout;
