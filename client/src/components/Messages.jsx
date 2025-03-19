import React from 'react';
import Message from './Message';
import useGetMessages from '../hooks/useGetMessages';
import { useSelector } from 'react-redux';
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';

const Messages = () => {
    useGetMessages();
    useGetRealTimeMessage();
    const { messages } = useSelector(store => store.message);

    return (
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 bg-gray-100 rounded-md">
            {messages?.length > 0 ? (
                messages.map((message) => (
                    <Message key={message._id} message={message} />
                ))
            ) : (
                <p className="text-gray-500 text-center">No messages yet.</p>
            )}
        </div>
    );
};

export default Messages;
