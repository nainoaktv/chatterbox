const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("Your API works!");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is running on PORT: ${PORT}`));
