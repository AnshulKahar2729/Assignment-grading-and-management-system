import IndexPage from "../pages/IndexPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import StudentAssignments from "../pages/student/StudentAssignments";
import StudentDashboard from "../pages/student/StudentDashboard";
import StudentParticularAssignment from "../pages/student/StudentParticularAssignment";
import StudentSettings from "../pages/student/StudentSettings";
import StudentsList from "../pages/teacher/StudentsList";
import TeacherAssignments from "../pages/teacher/TeacherAssignments";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import TeacherParticularAssignment from "../pages/teacher/TeacherParticularAssignment";
import TeacherSettings from "../pages/teacher/TeacherSettings";
import TeacherSubmissionPage from "../pages/teacher/TeacherSubmissionPage";
import TryAPI from "../tryAPI/TryAPI";

const routes = [
  {
    path: "/",
    component: <IndexPage />,
  },
  {
    path: "/register",
    component: <RegisterPage />,
  },
  {
    path: "/login",
    component: <LoginPage />,
  },
  // teacher 
  {
    path: "/dashboard/teacher",
    component: <TeacherDashboard />,
  },
  {
    path: "/dashboard/teacher/assignments",
    component: <TeacherAssignments />,
  },
  {
    path: "/dashboard/teacher/assignments/:id",
    component: <TeacherParticularAssignment />,
  },
  {
    path: "/dashboard/teacher/settings",
    component: <TeacherSettings />,
  },
  {
    path: "/dashboard/teacher/assignments/submission/:id",
    component: <TeacherSubmissionPage />,
  },
  {
    path: "/dashboard/teacher/studentslist",
    component: <StudentsList />,
  },
  // student 
  {
    path: "/dashboard/student",
    component: <StudentDashboard />
  },
  {
    path: "/dashboard/student/assignments",
    component: <StudentAssignments />
  },
  {
    path: "/dashboard/student/assignments/:id",
    component: <StudentParticularAssignment />
  },
  {
    path: "/dashboard/student/settings",
    component: <StudentSettings />
  },
  {
    path  :"/tryapi",
    component: <TryAPI />
  }
];

export default routes;
