const express = require("express");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { role } = req.body;
  console.log(role);
  if (role === "student") {
    const { name, email, password, branch, year, division } = req.body;

    console.log(name, email, password, branch, year, division);

    const student = await Student.findOne({ email });
    if (student) {
      return res.status(400).json({ message: "Student already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const studentDoc = await Student.create({
      name,
      email,
      password: hashedPassword,
      branch,
      year,
      division,
    });

    const token = jwt.sign({ id: studentDoc._id, role : "student" }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.status(201).json({ token, student: studentDoc });
  } else if (role === "teacher") {
    const { name, email, password } = req.body;

    console.log(name, email, password);
    const teacher = await Teacher.findOne({ email });

    if (teacher) {
      return res.status(400).json({ message: "Teacher already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const teacherDoc = await Teacher.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: teacherDoc._id, role : "teacher" }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token, teacher: teacherDoc })
  } else {
    res.status(400).json({ message: "Invalid role" });
  }
});

module.exports = router;
