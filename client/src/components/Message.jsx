import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Message = ({ message }) => {
    const scroll = useRef();
    const { authUser, selectedUser } = useSelector(store => store.user);

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: 'smooth' });
    }, [message]);

    const isSentByAuthUser = message?.senderId === authUser?._id;

    return (
        <div ref={scroll} className={`flex items-end gap-2 my-2 ${isSentByAuthUser ? 'justify-end' : 'justify-start'}`}>
            {/* Avatar (for received messages) */}
            {!isSentByAuthUser && (
                <div className="w-10 h-10 rounded-full border overflow-hidden">
                    <img 
                        alt="User Avatar" 
                        src={selectedUser?.profilePhoto || '/default-avatar.png'} 
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Message Bubble */}
            <div className={`relative px-4 py-2 max-w-xs md:max-w-md rounded-lg shadow-md text-sm leading-5
                ${isSentByAuthUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}>
                <p>{message?.message}</p>
                <span className="text-xs text-gray-400 block mt-1 text-right">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                </span>
            </div>

            {/* Avatar (for sent messages) */}
            {isSentByAuthUser && (
                <div className="w-10 h-10 rounded-full border overflow-hidden">
                    <img 
                        alt="Auth User Avatar" 
                        src={authUser?.profilePhoto || '/default-avatar.png'} 
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
        </div>
    );
};

export default Message;
