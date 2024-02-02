const express = require("express");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
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
    const result = await cloudinary.uploader
      .upload_stream(
        {
          
        },
        async (error, result) => {
          if (error) {
            console.error(error);
            res.status(500).json({ error });
          } else {
            console.log("here");
            console.log(result);
            const URL = result.secure_url;
            console.log("URL", URL);
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
