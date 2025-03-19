import React, { useState, useRef } from "react";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import { BASE_URL } from "..";

const SendInput = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { selectedUser } = useSelector((store) => store.user);
    const { messages } = useSelector((store) => store.message);
    
    const inputRef = useRef(null); // Ref for input field

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        
        // Prevent sending empty messages
        if (!message.trim()) {
            setError("Message cannot be empty!");
            return;
        }

        setError(null); // Clear previous error
        try {
            const res = await axios.post(
                `${BASE_URL}/api/v1/message/send/${selectedUser?._id}`,
                { message },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            dispatch(setMessages([...messages, res?.data?.newMessage]));
            setMessage(""); // Clear input
            inputRef.current?.focus(); // Refocus input after sending
        } catch (error) {
            console.error(error);
            setError("Failed to send message. Try again.");
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className="px-4 py-3 bg-gray-900 rounded-xl shadow-md">
            <div className="relative w-full">
                <input
                    ref={inputRef} // Attach ref for focusing
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    placeholder="Type a message..."
                    className="border text-sm rounded-full w-full p-3 pl-5 pr-12 border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all"
                >
                    <IoSend size={18} />
                </button>
            </div>
            {error && <p className="text-red-400 text-sm mt-2 text-center">{error}</p>}
        </form>
    );
};

export default SendInput;
