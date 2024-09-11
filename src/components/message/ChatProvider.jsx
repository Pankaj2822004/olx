import React, { createContext, useState } from 'react'

export const ChatContext = createContext()

const ChatProvider = ({children}) => {
    const [chats, setChats] = useState([])
    const [selectedRoom, setSelectedRoom] = useState(null)
    const [messages, setMessages] = useState([])
  return (
    <ChatContext.Provider value={{chats, setChats, setSelectedRoom, selectedRoom, messages, setMessages}} >{children}</ChatContext.Provider>
  )
}

export default ChatProvider