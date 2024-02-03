const express = require("express");
const SubmittedAssignment = require("../models/SubmittedAssignment");
const router = express.Router();

router.get("/", async (req, res) => {
    try{
        const submittedAssignments = await SubmittedAssignment.find().populate({
            path : "teacherComments"
        })
        res.status(200).json({submittedAssignments});
    }catch(err){
        console.error(err);
        res.status(500).json({message: err.message});
    }
});

module.exports = router;