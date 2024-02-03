const express = require("express");
const router = express.Router();
const Student = require("../models/student");

router.get("/", async(req, res) => {
    try{
        const students = await Student.find().populate("submittedAssignment");
        res.json(students);
    }catch(err){
        console.log(err);
        res.status(500).json({err : err.message});
    }
});

module.exports = router;