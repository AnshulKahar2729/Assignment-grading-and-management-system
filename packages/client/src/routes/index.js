import IndexPage from "../pages/IndexPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import StudentDashboard from "../pages/student/StudentDashboard";
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
  {
    path: "/dashboard/teacher",
    component: <TeacherDashboard />,
  },
  { path: "/dashboard/student", component: <StudentDashboard /> },
];

export default routes;
