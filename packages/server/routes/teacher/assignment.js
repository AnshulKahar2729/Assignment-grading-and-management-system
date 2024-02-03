const express = require("express");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const Assignment = require("../../models/Assignment");
const Teacher = require("../../models/Teacher");
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

module.exports = router;
