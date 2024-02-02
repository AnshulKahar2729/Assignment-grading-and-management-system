import IndexPage from "../pages/IndexPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import StudentAssignments from "../pages/student/StudentAssignments";
import StudentDashboard from "../pages/student/StudentDashboard";
import StudentSettings from "../pages/student/StudentSettings";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";

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
    path: "/dashboard/student/settings",
    component: <StudentSettings />
  },
];

export default routes;
