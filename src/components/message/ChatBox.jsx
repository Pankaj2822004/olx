import React from 'react';
import ChatInput from './ChatInput';

const ChatBox = () => {
  const messages = [
    { id: 1, sender: 'User 1', text: 'Hello, how are you?' },
    { id: 2, sender: 'User 2', text: 'I am good, thanks!' },
  ]; // Example messages

  return (
    <div className="flex-1 flex flex-col justify-between">
      {/* Messages Display */}
      <div className="p-4 overflow-y-auto flex-1">
        {messages.map((message) => (
          <div key={message.id} className={`mb-2 p-2 max-w-xs ${message.sender === 'User 1' ? 'bg-blue-100 self-start' : 'bg-green-100 self-end'} rounded-lg`}>
            <span className="text-sm text-gray-700">{message.sender}: </span>
            {message.text}
          </div>
        ))}
      </div>

      {/* Input Box */}
      <ChatInput />
    </div>
  );
};

export default ChatBox;
