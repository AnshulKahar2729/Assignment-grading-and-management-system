const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
require("dotenv").config();

const router = express.Router();

router.post("/", async (req, res) => {
    const {role} = req.body;
    console.log(role);
    if(role === "student") {
        const {email,password} = req.body;
        console.log(email,password);
        const studentDoc = await Student.findOne({email});
        if(!studentDoc) {
            return res.status(400).json({message: "Student does not exist"});
        }

        console.log(studentDoc);
        const isMatch = await bcrypt.compare(password, studentDoc.password);

        if(!isMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        console.log(isMatch);

        const token = jwt.sign({id: studentDoc._id, role: "student"}, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        console.log(token);

        res.status(200).json({token, student: studentDoc});
    } else if(role === "teacher") {
        const {email,password} = req.body;
        console.log(email,password);

        const teacherDoc = await Teacher.findOne({email});
        if(!teacherDoc) {
            return res.status(400).json({message: "Teacher does not exist"});
        }
        console.log(teacherDoc);
        const isMatch = await bcrypt.compare(password, teacherDoc.password);

        if(!isMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        console.log(isMatch);

        const token = jwt.sign({id: teacherDoc._id, role: "teacher"}, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        console.log(token);

        res.status(200).json({token, teacher: teacherDoc});
    } else {
        res.status(400).json({message: "Invalid role"});
    }
});

module.exports = router;