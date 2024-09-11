import React, { useContext, useEffect, useState } from 'react';
import { BASE_URL, useGlobalContext } from '../../usecontext/context';
import { useLocation } from 'react-router-dom';
import { ChatContext } from './ChatProvider';
import axios from 'axios';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const {socket, loggedIn} = useGlobalContext()
  const {selectedRoom, setMessages} = useContext(ChatContext)
  const location = useLocation()
  const chatId = location.search.split("=")[1]
  const reciever = selectedRoom?.users.find(u=>u._id!==loggedIn?.userId)

  useEffect(()=>{
    chatId && axios.get(BASE_URL+ "/messages/"+ chatId).then(res=>setMessages(res.data))  
  },[chatId])

  const handleSendMessage = () => {
    // Logic for sending the message
    socket?.emit("sendMessage",{message,roomId:chatId,senderId:loggedIn?.userId, recieverId:reciever?._id })
    setMessages(p=>[...p,{message,_id:Math.random(),senderId:loggedIn?.userId, roomId:chatId, }])
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="border-t border-gray-200 p-4">
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
