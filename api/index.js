
const main = require("./db"); // Ensure this initializes your database connection correctly
const express = require("express");
const cors = require("cors");
const Message = require('./models/Message');

main().catch((err) => console.error("Failed to connect to the database:", err));

const app = express();
let socketUsers = [];

// Helper functions for managing users
const addUser = (userId, socketId) => {
  const userIndex = socketUsers.findIndex(user => user.userId === userId);
  if (userIndex === -1) {
    return socketUsers.push({ socketId, userId });
  }
  socketUsers[userIndex].socketId = socketId;
};

const removeUser = (userId) => {
  socketUsers = socketUsers.filter(user => user.userId !== userId);
};

// Initialize Socket.IO server
const io = require('socket.io')(8800, {
  cors: {
    origin: "*", // Allow connections from all origins
  }
});

io.on('connection', (socket) => {
  console.log("A user connected to the socket server", socket.id);
  const newUserId = socket.handshake.query.userId;
  
  if (newUserId) {
    addUser(newUserId, socket.id);
  }
  
  console.log({ socketUsers });

  // Receive message from user and send to the recipient
  socket.on("sendMessage", ({ message, roomId, receiverId, senderId, messageId }) => {
    const socketId = socketUsers.find(user => user.userId === receiverId)?.socketId;
    if (socketId) {
      socket.to(socketId).emit("receiveMessage", { message, roomId, senderId, _id: messageId });
    }
    
    // Save message to database
    const newMessage = new Message({ message, roomId, senderId });
    newMessage.save().catch(err => console.error("Failed to save message:", err));
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
    removeUser(newUserId);
  });
});

// Middleware
app.use(cors());
app.use(express.json());

// Define routes
app.use("/api/contact", require("./routes/contact"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));
app.use("/api/chats", require("./routes/room"));
app.use("/api/messages", require("./routes/message"));

// Define the port to run the server on
const port = 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


