import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { authUser } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]);

  if (!authUser) return null; // Prevent flicker while redirecting

  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden 
      bg-white bg-opacity-10 backdrop-blur-lg border border-gray-200 shadow-lg">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default HomePage;
