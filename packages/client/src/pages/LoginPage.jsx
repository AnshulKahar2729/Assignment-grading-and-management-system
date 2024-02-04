import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Login from '../assets/Login.gif' ;
import Logo from '../assets/EduTrack (2).png' ;
import axios from 'axios'

const LoginPage = () => {
  
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, role);

    try {
      const { data } = await axios.post("https://assignment-grading-and-management-system.onrender.com/api/login", {
        email,
        password,
        role,
      });

      if (data) {
        localStorage.setItem("token", data.token);
        // navigate("/");
        console.log(data);

        alert("Logged In Successfully")
      }
      console.log('logged In Successfully')
      if(data.student){
        console.log("Logged In as Student")
        navigate('/dashboard/student')
    } else{
        console.log("logged In as Teacher")
        navigate('/dashboard/teacher')
    }

    } catch (error) {
      console.log(error);
    }
  }

    return (
      <div className="flex flex-col pt-16 md:pt-0 md:flex-row h-screen items-center">
        <div className="md:flex-1 bg-white p-8 flex flex-col items-center justify-center gap-6">
          <div className="max-w-md w-full ">
            <Link to="/">
              <img src={Logo} className="h-20" alt="none" />
            </Link>
            <div className='pl-2'>
            <h2 className="text-3xl font-extrabold mb-4 text-[#176DEF]">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border p-2 rounded bg-gray-100 outline-none"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full border p-2 rounded bg-gray-100 outline-none text-[#176DEF]"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="mt-5">
                  <label htmlFor="role">Role -</label>
                  <select
                    id="role"
                    className="w-full px-4 py-2 mb-2 border  bg-gray-100 rounded-md"
                    value={role}
                    onChange={(event) => setRole(event.target.value)}
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
              </div>

              <button
                type="submit"
                className="mt-8 bg-[#176DEF] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#124a9e] focus:outline-none focus:shadow-outline-black"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-sm">
              Don't have an account?{" "}
              <Link to="/register">
                <span className="text-[#176DEF]">Sign up here</span>
              </Link>
            </p>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className=" w-full md:flex-1 bg-white hidden  md:flex h-screen justify-center items-center p-10">
        <img
            src={Login}
            alt="Register Image"
            className="object-cover lg:w-[450px] lg:h-[450px] xl:h-[99%] xl:w-auto"
        />
      </div>
      </div>
    );
  }
  

export default LoginPage