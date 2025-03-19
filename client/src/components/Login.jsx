import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from '../redux/userSlice';
import { BASE_URL } from '..';

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/login`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      navigate("/");
      console.log(res);
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: ""
    })
  }
  return (
    <div className="min-w-96 mx-auto flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-4 rounded-xl shadow-lg bg-white bg-opacity-90 backdrop-blur-lg border border-gray-200 
        min-h-[250px] max-h-[400px] overflow-y-auto">
        <h1 className="text-2xl font-extrabold text-center text-gray-800 mb-3">Login</h1>
        <form onSubmit={onSubmitHandler}>
  
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
  
          <p className="text-center text-gray-600 text-xs mb-2">
            Don't have an account?  
            <Link to="/signup" className="text-blue-500 font-semibold hover:underline"> Signup</Link>
          </p>
  
          <button type="submit" className="w-full py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Login
          </button>
        </form>
      </div>
    </div>
  );
  
}

export default Login