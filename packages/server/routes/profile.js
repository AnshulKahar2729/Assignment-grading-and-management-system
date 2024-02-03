const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "You are not authenticated" });
    }
    console.log(authHeader);

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "You are not authenticated" });
    }
    console.log("token", token);

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload);

    if (!payload) {
      return res.status(401).json({ message: "You are not authenticated" });
    }

    if (payload.role === "student") {
      const studentDoc = await Student.findById(payload.id).populate({
        path: "submittedAssignment",
      });
      if (!studentDoc) {
        return res.status(400).json({ message: "Student does not exist" });
      }
      return res.status(200).json({ student: studentDoc });
    } else if (payload.role === "teacher") {
      // Populate uploadedAssignment
      const teacherDoc = await Teacher.findById(payload.id).populate({
        path: "uploadedAssignment",
        // populate submission
        populate: {
          path: "submissions",
        },
      });
      if (!teacherDoc) {
        return res.status(400).json({ message: "Teacher does not exist" });
      }
      return res.status(200).json({ teacher: teacherDoc });
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: err.message });
  }
});

module.exports = router;
