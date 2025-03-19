import React from 'react';
import SendInput from './SendInput';
import Messages from './Messages';
import { useSelector } from "react-redux";

const MessageContainer = () => {
    const { selectedUser, authUser, onlineUsers } = useSelector(store => store.user);
    
    const isOnline = onlineUsers?.includes(selectedUser?._id);
   
    return (
        <>
            {selectedUser !== null ? (
                <div className='md:min-w-[550px] flex flex-col bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden'>
                    {/* User Header */}
                    <div className='flex items-center gap-4 bg-gray-700 px-5 py-4 rounded-t-lg shadow-md'>
                        <div className="relative w-14 h-14">
                            <img 
                                src={selectedUser?.profilePhoto || "/default-avatar.png"} 
                                alt="user-profile"
                                className="w-full h-full rounded-full border-2 border-gray-400 object-cover"
                            />
                            {isOnline && (
                                <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-gray-700 rounded-full animate-pulse"></span>
                            )}
                        </div>
                        <div className='flex flex-col flex-1'>
                            <p className='text-xl font-semibold text-white'>{selectedUser?.fullName}</p>
                            <span className={`text-sm ${isOnline ? 'text-green-400' : 'text-gray-400'}`}>
                                {isOnline ? "Online" : "Offline"}
                            </span>
                        </div>
                    </div>

                    {/* Messages Section */}
                    <div className="flex-1 overflow-auto p-4">
                        <Messages />
                    </div>

                    {/* Send Input Section */}
                    <div className="bg-gray-700 px-4 py-3 shadow-md">
                        <SendInput />
                    </div>
                </div>
            ) : (
                <div className='md:min-w-[550px] flex flex-col justify-center items-center text-center h-full bg-gray-900 text-white rounded-lg p-6'>
                    <h1 className='text-4xl font-bold text-gray-200 mb-2'>Hi, {authUser?.fullName} 👋</h1>
                    <h2 className='text-2xl font-medium text-gray-400'>Let's start a conversation</h2>
                </div>
            )}
        </>
    );
};

export default MessageContainer;
