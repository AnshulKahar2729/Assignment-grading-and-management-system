const express = require("express");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const SubmittedAssignment = require("../../models/SubmittedAssignment");
const Student = require("../../models/Student");
const Assignment = require("../../models/Assignment");
const axios = require("axios");
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
          resource_type: "raw",
          format: req.file.originalname.split(".").pop(), // Extract and include the original file extension
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

            console.log(assignmentDoc);

            let feedback;

            /* if (assignmentDoc.submissions.length > 0) {
              // then go and call flask api for automated feedback
              const latestSubmission =
                assignmentDoc.submissions[assignmentDoc.submissions.length - 1];
              feedBack = await axios.post(
                "https://anshulkahar2729-ml-assignment-grading.onrender.com/",
                {
                  currentSubmission : URL,
                  previousSubmission : latestSubmission.file,
                }
              );
            } */

            const endDate = assignmentDoc.endDate;
            console.log("endDate", endDate);
            // check if the assignment is late

            const isLate = new Date() > new Date(endDate);
            console.log("isLate", isLate);

            const submittedAssignmentDoc = await SubmittedAssignment.create({
              submittedBy: studentId,
              submissionDate: new Date().toLocaleDateString(),
              late: isLate,
              file: URL,
              assignment: assignmentId,
            });

            console.log("submittedAssignmentDoc", submittedAssignmentDoc);

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
            console.log("studentDoc", studentDoc);

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

/* 
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
          resource_type: "raw",
          format: req.file.originalname.split('.').pop(), // Extract and include the original file extension

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

*/
