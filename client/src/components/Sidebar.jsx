import React, { useState } from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from './OtherUsers';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthUser, setOtherUsers, setSelectedUser } from '../redux/userSlice';
import { setMessages } from '../redux/messageSlice';
import { BASE_URL } from '..';

const Sidebar = () => {
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(null);
    const { otherUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/user/logout`);
            
            // Clear Redux state only if the logout request is successful
            dispatch(setAuthUser(null));
            dispatch(setMessages(null));
            dispatch(setOtherUsers(null));
            dispatch(setSelectedUser(null));

            navigate("/login");
            toast.success(res.data.message);
        } catch (error) {
            console.error("Logout failed:", error);
            toast.error("Logout failed. Try again.");
        }
    };

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (!search.trim()) {
            setFilteredUsers(null); // Reset search results if input is empty
            return;
        }

        const filtered = otherUsers?.filter(user => 
            user.fullName.toLowerCase().includes(search.toLowerCase())
        );

        setFilteredUsers(filtered.length > 0 ? filtered : null);

        if (!filtered.length) {
            toast.error("User not found!");
        }
    };

    return (
        <div className='border-r border-gray-500 p-4 flex flex-col min-w-[250px] bg-white shadow-md'>
            {/* Search Bar */}
            <form onSubmit={searchSubmitHandler} className='flex items-center gap-2'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-full rounded-md p-2 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    type="text"
                    placeholder='Search users...'
                />
                <button type='submit' className='bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition'>
                    <BiSearchAlt2 className='w-6 h-6' />
                </button>
            </form>

            <div className="border-t my-3"></div> 

            {/* Display filtered users if search is active */}
            {filteredUsers ? (
                <div className='overflow-auto flex-1'>
                    {filteredUsers.map(user => (
                        <OtherUsers key={user._id} user={user} />
                    ))}
                </div>
            ) : (
                <OtherUsers />
            )}

            {/* Logout Button */}
            <div className='mt-4'>
                <button 
                    onClick={logoutHandler} 
                    className='w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition'
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
