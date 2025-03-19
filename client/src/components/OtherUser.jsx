import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser, onlineUsers } = useSelector((store) => store.user);

  const isOnline = onlineUsers?.includes(user._id);

  const selectedUserHandler = () => {
    dispatch(setSelectedUser(user));
  };

  return (
    <>
      <div
        onClick={selectedUserHandler}
        className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all duration-300 shadow-sm
          ${
            selectedUser?._id === user?._id
              ? "bg-blue-600 text-white shadow-lg scale-[1.02]"
              : "bg-gray-800 text-gray-200 hover:bg-gray-700 hover:scale-105"
          }
        `}
      >
        {/* Profile Avatar */}
        <div className="relative w-14 h-14 rounded-full overflow-hidden">
          <img
            src={user?.profilePhoto}
            alt="user-profile"
            className="w-full h-full object-cover border-2 border-gray-500 rounded-full"
          />
          {isOnline && (
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full ring-2 ring-white animate-pulse"></span>
          )}
        </div>

        {/* User Name */}
        <div className="flex-1">
          <p className="font-semibold text-lg">{user?.fullName}</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600 mx-4 my-2" />
    </>
  );
};

export default OtherUser;
