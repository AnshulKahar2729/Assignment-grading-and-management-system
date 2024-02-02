const express = require("express");
const cors = require("cors");
const app = express();

// import routes
const registerRoute = require("./routes/register");
const connectDB = require("./config/db");

connectDB();

// middlewares
app.use(cors());
app.use(express.json());

// routes middleware
app.use("/api/register", registerRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
