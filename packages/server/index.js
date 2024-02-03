const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// import routes
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const profileRoute = require("./routes/profile");
const teacherAssignmentRoute = require("./routes/teacher/assignment");
const studentAssignmentRoute = require("./routes/student/assignment");
const getStudentRoute = require("./routes/student");

connectDB();

// middlewares
app.use(cors());
app.use(express.json());
// sending form data too
app.use(express.urlencoded({ extended: true }));

// routes middleware
app.use("/api/login", loginRoute);
app.use("/api/register", registerRoute);
app.use("/api/profile", profileRoute);
app.use("/api/teacher/assignment", teacherAssignmentRoute);
app.use("/api/student/assignment", studentAssignmentRoute);
app.use("/api/get-student", getStudentRoute);

app.get("/", (req, res) => {
  res.json({msg : "Hello World!"});
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})