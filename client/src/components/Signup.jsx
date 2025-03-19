import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from '..';


const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/register`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    })
  }
  return (
    <div className="min-w-96 mx-auto flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-4 rounded-xl shadow-lg bg-white bg-opacity-90 backdrop-blur-lg border border-gray-200 
        min-h-[300px] max-h-[500px] overflow-y-auto">
        <h1 className="text-2xl font-extrabold text-center text-gray-800 mb-3">Signup</h1>
        <form onSubmit={onSubmitHandler}>
  
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-medium">Full Name</label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              type="text"
              placeholder="John Clark"
            />
          </div>
  
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-medium">Username</label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              type="text"
              placeholder="johnc123"
            />
          </div>
  
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-medium">Password</label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              type="password"
              placeholder="••••••••"
            />
          </div>
  
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-medium">Confirm Password</label>
            <input
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              type="password"
              placeholder="••••••••"
            />
          </div>
  
          <div className="my-2">
            <span className="block text-gray-700 text-sm font-medium mb-1">Gender</span>
            <div className="flex gap-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={user.gender === "male"}
                  onChange={() => handleCheckbox("male")}
                  className="hidden"
                />
                <div className="w-4 h-4 mr-1 border border-gray-500 rounded-full flex items-center justify-center">
                  {user.gender === "male" && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                </div>
                <span className="text-sm">Male</span>
              </label>
              
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={user.gender === "female"}
                  onChange={() => handleCheckbox("female")}
                  className="hidden"
                />
                <div className="w-4 h-4 mr-1 border border-gray-500 rounded-full flex items-center justify-center">
                  {user.gender === "female" && <div className="w-2 h-2 bg-pink-500 rounded-full"></div>}
                </div>
                <span className="text-sm">Female</span>
              </label>
            </div>
          </div>
  
          <p className="text-center text-gray-600 text-xs mb-2">
            Already have an account? 
            <Link to="/login" className="text-blue-500 font-semibold hover:underline"> Login</Link>
          </p>
  
          <button type="submit" className="w-full py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
  
  
}

export default Signup