require("dotenv").config();

const express = require("express");
const cors = require("cors");
const main = require("./db");
const Message = require('./models/Message');

main().catch((err) => console.error("Failed to connect to the database:", err));

const app = express();
let socketUsers = [];

// Socket user helpers
const addUser = (userId, socketId) => {
  const userIndex = socketUsers.findIndex(user => user.userId === userId);
  if (userIndex === -1) {
    socketUsers.push({ socketId, userId });
  } else {
    socketUsers[userIndex].socketId = socketId;
  }
};

const removeUser = (userId) => {
  socketUsers = socketUsers.filter(user => user.userId !== userId);
};

// Initialize Socket.IO server
const io = require('socket.io')(8800, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log("A user connected to the socket server", socket.id);
  const newUserId = socket.handshake.query.userId;
  
  if (newUserId) addUser(newUserId, socket.id);
  
  console.log({ socketUsers });

  socket.on("sendMessage", ({ message, roomId, receiverId, senderId, messageId }) => {
    const socketId = socketUsers.find(user => user.userId === receiverId)?.socketId;
    if (socketId) {
      socket.to(socketId).emit("receiveMessage", { message, roomId, senderId, _id: messageId });
    }
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

// Routes
app.use("/api/contact", require("./routes/contact"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));
app.use("/api/chats", require("./routes/room"));
app.use("/api/messages", require("./routes/message"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
