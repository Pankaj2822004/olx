// Import necessary modules
const main = require("./db"); // Ensure this initializes your database connection correctly
const express = require("express");
const cors = require("cors");
const socketServer = require("./socket");
const Message = require('./models/Message')


// Initialize the database
main().catch((err) => console.error("Failed to connect to the database:", err));

// Create an Express app
let socketUsers = [];

const app = express();
// socketServer()

const addUser = (  userId,socketId)=>{
  
  const userIndex=  socketUsers.findIndex((user)=>user.userId===userId)
  console.log({userId})
  if(userIndex===-1){
     return socketUsers.push({socketId,userId})
  }
  socketUsers[userIndex].socketId = socketId
}

const removeUser= ( userId)=>{
  socketUsers = socketUsers.filter(user=>user.userId!==userId)
}



    const io = require('socket.io')(8800,{
        cors:{
          origin :"*"
        }
      })
      
      io.on('connection',(socket)=>{
        console.log("a user connected to socket server",socket.id)
        const newUserId= socket.handshake.query.userId
        
        addUser( newUserId,socket.id)
console.log({socketUsers})

        //recieve message from user and send to the recipient
        socket.on("sendMessage",({message,roomId,recieverId})=>{
          const socketId = socketUsers.find(user=>user.id===recieverId)?.socketId;
          if(socketId){
            socket.to(socketId).emit({message,roomId})
          }
          // save message to db
          const newMessage = new Message({
            message,
            roomId,
          })
          newMessage.save()


        })

        
        socket.on("disconnect",()=>{
            console.log("user disconnected")
            removeUser()
        })
      })

app.use(cors());


// Parse JSON bodies for incoming requests
app.use(express.json());

app.use("/api/contact", require("./routes/contact"));
// app.use("/api", require("./routes/auth"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));

// Define the port to run the server on
const port = 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

// Optional: Add global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});