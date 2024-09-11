import React, { useContext, useEffect } from 'react';
import ChatInput from './ChatInput';
import { useGlobalContext } from '../../usecontext/context';
import { ChatContext } from './ChatProvider';

const ChatBox = () => {
  const messagess = [
    { id: 1, sender: 'User 1', text: 'Hello, how are you?' },
    { id: 2, sender: 'User 2', text: 'I am good, thanks!' },
  ]; // Example messages
  const {socket, loggedIn} = useGlobalContext()
  const {selectedRoom, messages, setMessages} = useContext(ChatContext)

  const reciever = selectedRoom?.users.find(u=>u._id!==loggedIn?.userId)
  const me = selectedRoom?.users.find(u=>u._id===loggedIn?.userId)
console.log(messages)

useEffect(()=>{
  const handleArrivedMessage = (arrivedMessage)=>{
    setMessages(p=>[...p,arrivedMessage])
  }
  socket?.on("recieveMessage",handleArrivedMessage)
  return ()=>{
    socket?.off("recieveMessage",handleArrivedMessage)
  }
},[socket])
  

  return (
    <div className="flex-1 flex flex-col justify-between">
      {/* Messages Display */}
      <div className="p-4 overflow-y-auto flex-1 flex  flex-col gap-4   ">
        {messages.map((message) => (
          <div key={message._id} className={`mb-2 p-2 max-w-xs ${message.senderId === loggedIn?.userId ? 'bg-blue-100 self-end' : 'bg-green-100 self-start'} rounded-lg`}>
            <span className="text-sm text-gray-700">{message.senderId===loggedIn?.userId? me?.name: reciever?.name }: </span>
            {message.message}
          </div>
        ))}
      </div>

      {/* Input Box */}
      <ChatInput />
    </div>
  );
};

export default ChatBox;
