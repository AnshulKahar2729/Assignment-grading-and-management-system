import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../assets/Login.gif' ;
import Logo from '../assets/EduTrack (2).png' ;

const LoginPage = () => {
    return (
      <div className="flex flex-col pt-16 md:pt-0 md:flex-row h-screen items-center">
        <div className="md:flex-1 bg-white p-8 flex flex-col items-center justify-center gap-6">
          <div className="max-w-md w-full ">
            <Link href="/">
              <img src={Logo} className="h-20" alt="none" />
            </Link>
            <div className='pl-2'>
            <h2 className="text-3xl font-extrabold mb-4 text-[#176DEF]">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border p-2 rounded bg-gray-100 outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full border p-2 rounded bg-gray-100 outline-none text-[#176DEF]"
                  required
                />
              </div>
              <div className="mt-5">
                  <label htmlFor="role">Role -</label>
                  <select
                    id="role"
                    className="w-full px-4 py-2 mb-2 border  bg-gray-100 rounded-md"
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
              <Link href="/">
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