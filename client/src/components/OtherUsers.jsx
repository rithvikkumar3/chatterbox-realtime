import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  // Fetch other users using custom hook
  useGetOtherUsers();
  
  // Get users from Redux store
  const { otherUsers } = useSelector((store) => store.user);

  // Loading state
  if (!otherUsers) {
    return (
      <div className="flex justify-center items-center flex-1">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 mt-2">Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-auto flex-1 p-3 bg-gray-900 text-white rounded-lg shadow-lg">
      {/* Show message if no other users */}
      {otherUsers.length === 0 ? (
        <p className="text-center text-gray-400">No users available</p>
      ) : (
        otherUsers.map((user) => <OtherUser key={user._id} user={user} />)
      )}
    </div>
  );
};

export default OtherUsers;
