const express = require("express");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const Assignment = require("../../models/Assignment");
const Teacher = require("../../models/Teacher");
const SubmittedAssignment = require("../../models/SubmittedAssignment");
const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer setup with memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const { title, teacherId, endDate } = req.body;

    const result = await cloudinary.uploader
      .upload_stream({
        resource_type: "raw",
        format: req.file.originalname.split('.').pop(), // Extract and include the original file extension
      }, async (error, result) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error });
        } else {
          console.log("here");
          console.log(result);
          const URL = result.secure_url;
          console.log("URL", URL);

          const assignmentDoc = await Assignment.create({
            startDate: new Date().toLocaleDateString(),
            endDate: endDate,
            file: URL,
            title,
            createdBy: teacherId,
          });

          if (!assignmentDoc) {
            res.status(500).json({ error: "Error creating assignment" });
          }

          console.log(assignmentDoc); 

          const teacherDoc = await Teacher.findByIdAndUpdate(
            teacherId,
            { $push: { uploadedAssignment: assignmentDoc._id } },
            { new: true }
          );

          console.log(teacherDoc);

          res.status(200).json({ URL });
        }
      })
      .end(req.file.buffer);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
});

router.get("/submittedAssignments/:submittedAssignmentId", async (req, res) => {
  const { submittedAssignmentId } = req.params;
  try {
    const submittedAssignmentDoc = await SubmittedAssignment.findById(
      submittedAssignmentId
    ).populate({
      path : "assignment"
    }).populate({
      path : "submittedBy"
    }).populate({
      path : "teacherComments"
    })
    if (!submittedAssignmentDoc) {
      res.status(400).json({ message: "Submitted assignment does not exist" });
    }
    res.status(200).json({ submittedAssignment: submittedAssignmentDoc });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/:assignmentId", async(req, res) => {
  try {
    const { assignmentId } = req.params;
    const assignmentDoc = await Assignment.findById(assignmentId).populate({
      path: "submissions",
    });

    if (!assignmentDoc) {
      res.status(400).json({ message: "Assignment does not exist" });
    }
    res.status(200).json({ assignment: assignmentDoc });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
})



module.exports = router;
