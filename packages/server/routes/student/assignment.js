const express = require("express");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const SubmittedAssignment = require("../../models/SubmittedAssignment");
const Student = require("../../models/Student");
const Assignment = require("../../models/Assignment");
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
  //   const { title, endDate, teacherId } = req.body;

  try {
    const { studentId, assignmentId } = req.body;

    const result = await cloudinary.uploader
      .upload_stream(
        {
          /* Cloudinary options */
        },
        async (error, result) => {
          if (error) {
            console.error(error);
            res.status(500).json({ error });
          } else {
            console.log(result);
            const URL = result.secure_url;
            console.log("URL", URL);

            const assignmentDoc = await Assignment.findById(assignmentId);
            if (!assignmentDoc) {
              res.status(500).json({
                error: "Error finding respective corresponding assignment",
              });
            }

            const endDate = assignmentDoc.endDate;
            // check if the assignment is late

            const isLate = new Date() > new Date(endDate);

            const submittedAssignmentDoc = await SubmittedAssignment.create({
              submittedBy: studentId,
              submissionDate: new Date().toLocaleDateString(),
              late: isLate,
              file: URL,
              assignment: assignmentId,
            });

            const studentDoc = await Student.findByIdAndUpdate(
              studentId,
              {
                $push: { submittedAssignment: submittedAssignmentDoc._id },
              },
              { new: true }
            );
            if (!studentDoc) {
              res.status(500).json({
                error: "Error finding respective corresponding student",
              });
            }

            res.status(200).json({ URL });
          }
        }
      )
      .end(req.file.buffer);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
