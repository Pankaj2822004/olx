
const main = require("./db"); 
const express = require("express");
const cors = require("cors");


main().catch((err) => console.error("Failed to connect to the database:", err));


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
