import React from 'react';
import UserList from './UserList';
import ChatBox from './ChatBox';
import ChatProvider from './ChatProvider';

const ChatPage = () => {
  
  return (
    <ChatProvider>

    <div className="flex h-screen">
      {/* Left Section: User List */}
      <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-200">
        <UserList />
      </div>

      {/* Right Section: Chat Box */}
      <div className="w-3/4 flex flex-col justify-between">
        <ChatBox />
      </div>
    </div>
    </ChatProvider>

  );
};

export default ChatPage;
