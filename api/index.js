
const main = require("./db"); 
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');



main().catch((err) => console.error("Failed to connect to the database:", err));
mongoose.connect("mongodb+srv://pankajpandey2822003:Pankaj%407772825@cluster0.6ajdz.mongodb.net/olx?retryWrites=true&w=majority")
.then(()=>console.log("db connection successful.")).catch((e)=>console.log(e))

const app = express();



app.use(cors());


app.use(express.json());

// Define your routes
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
