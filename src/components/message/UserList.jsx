import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { BASE_URL, useGlobalContext } from '../../usecontext/context';
import { ChatContext } from './ChatProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const UserList = () => {
  const users = ["User 1", "User 2", "User 3"]; // Example user list
  const {setChats , chats , setSelectedRoom} = useContext(ChatContext)
  const location = useLocation()
  const chatId = location.search.split("=")[1]
  const {loggedIn} = useGlobalContext()
  const navigate = useNavigate()

  useEffect(()=>{
    loggedIn?.userId && axios.get(BASE_URL+"/chats/"+loggedIn?.userId).then((res)=>{
      if(!chatId && res.data?.length ){
        window.location.replace("/chat?chatId="+ res.data[0]?._id )
        setSelectedRoom(res.data[0])
      setChats(res.data)
      return

      }
      setSelectedRoom(res.data.find(chat=>chat._id===chatId))
      setChats(res.data)
    })
  }, [loggedIn])
console.log(chats)

const handleUpdateChatId =  (chatId)=>{
  const url = window.location.href;
  const searchString =  new URL(url).search
  const searchObj = new URLSearchParams(searchString)
  searchObj.set("chatId",chatId)
  console.log(searchObj.toString())
  navigate( `?${searchObj.toString()}` , {replace:true})


}

 
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Contacts</h2>
      <ul className="space-y-2">
        {chats.map((chat, index) => (
          <li key={index} onClick={()=>{
            console.log("called")
            setSelectedRoom(chat)
            handleUpdateChatId(chat._id)
            // window.location.replace("?chatId="+ chat._id)
          }} className={`p-2 ${ chatId===chat._id?"bg-gray-200": "bg-white"} rounded-lg shadow-sm cursor-pointer hover:bg-gray-200`}>
            {chat?.users.find(u=>u._id!==loggedIn?.userId)?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
