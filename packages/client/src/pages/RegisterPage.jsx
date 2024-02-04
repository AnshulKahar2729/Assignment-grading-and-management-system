import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/EduTrack (2).png';
import Register from '../assets/Sign up.gif';
import axios from 'axios';

function RegisterPage() {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("teacher");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [division, setDivision] = useState("");

  //       name,
  //       email,
  //       password: hashedPassword,
  //       branch,
  //       year,
  //       division,
  //       studentId,

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password, role, year, branch, division);

    try {
      // if role student 
      if(role === "student"){
        const { data } = await axios.post("https://assignment-grading-and-management-system.onrender.com/api/register", {
        name,
        email,
        password,
        role,
        year,
        branch,
        division
      });
      if (data) {
        localStorage.setItem("token", data.token);
        alert("Registered Successfully")
      }
      console.log('Registered Successfully!');

      // for teacher 
      }else{
        const { data } = await axios.post("https://assignment-grading-and-management-system.onrender.com/api/register", {
        name,
        email,
        password,
        role
      });
      if (data) {
        localStorage.setItem("token", data.token);
        alert("Registered Successfully")
      }
      console.log('Registered Successfully');
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row pt-4 sm:pt-16 md:pt-0 h-full">
      <div className="md:flex-1 bg-white flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full">
          <Link to='/'>
            <img src={Logo} className='h-20 ' alt="none" />
          </Link>
          <div className='m-2'>
          <h2 className="text-3xl font-extrabold mb-4 text-[#176DEF]">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {/* Add your signup form fields here */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded bg-gray-100 text-black outline-none"
                required
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border p-2 rounded bg-gray-100 text-black outline-none"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="mb-4 ">
              <label className="block text-sm font-medium ">Password</label>
              <input
                type="password"
                className="w-full border p-2 rounded bg-gray-100 text-black outline-none"
                required
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <div className="mt-5">
                  <label htmlFor="role">Role -</label>
                  <select
                    id="role"
                    value={role}
                    onChange={(event) => {
                      setRole(event.target.value);
                    }}
                    className="w-full px-4 py-2 mb-2 border border bg-gray-100 rounded-md outline-none"
                  >
                    <option className='' value="teacher">Teacher</option>
                    <option className='' value="student">Student</option>
                  </select>
                </div>
                {/* added fields */}
                {role === "student" &&
                <>
                  {/* Year  */}
                  <label htmlFor="year" className="block mb-2 mt-5">
                    Year
                  </label>
                  <input
                    required
                    value={year}
                    onChange={(event) => {
                      setYear(event.target.value);
                    }}
                    className="w-full px-4 py-2 mb-2 border  bg-gray-100 rounded-md outline-none"
                    type="text"
                    id="year"
                    placeholder="Your Year"
                  />
                  {/* branch  */}
                  <label htmlFor="branch" className="block mb-2 mt-5">
                    Branch
                  </label>
                  <input
                    required
                    value={branch}
                    onChange={(event) => {
                      setBranch(event.target.value);
                    }}
                    className="w-full px-4 py-2 mb-2 border  bg-gray-100 rounded-md outline-none"
                    type="text"
                    id="branch"
                    placeholder="Your Branch"
                  />
                  {/* division  */}
                  <label htmlFor="division" className="block mb-2 mt-5">
                    Division
                  </label>
                  <input
                    required
                    value={division}
                    onChange={(event) => {
                      setDivision(event.target.value);
                    }}
                    className="w-full px-4 py-2 mb-2 border  bg-gray-100 rounded-md outline-none"
                    type="text"
                    id="division"
                    placeholder="Your Division"
                  />
                </>
                }
            <button
              type="submit"
              className="mt-12 bg-[#176DEF] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#124a9e] focus:outline-none focus:shadow-outline-black"
            >
              Sign Up
            </button>
          </form>
          </div>
        </div>
      </div>

      <div className=" w-full md:flex-1 bg-white hidden  md:flex h-screen justify-center items-center p-10">
        <img
            src={Register}
            alt="Register Image"
            className="object-cover lg:w-[450px] lg:h-[450px] xl:h-[99%] xl:w-auto"
        />
      </div>
    </div>
  );
};

export default RegisterPage