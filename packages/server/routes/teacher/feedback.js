const express = require("express");
const Feedback = require("../../models/Feedback");
const SubmittedAssignment = require("../../models/SubmittedAssignment");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { submittedAssignmentId, feedback, teacherId } = req.body;
    console.log("submittedAssignmentId", submittedAssignmentId);
    console.log("feedback", feedback);
    console.log("teacherId", teacherId);
    const feedbackDoc = await Feedback.create({
      author: teacherId,
      content: feedback,
    });

    if (!feedbackDoc) {
      res.status(500).json({ error: "Error creating feedback" });
    }

    const submittedAssignmentDoc = await SubmittedAssignment.findByIdAndUpdate(
      {
        _id: submittedAssignmentId,
      },
      {
        $push: { teacherComments: feedbackDoc._id },
      },
      {
        new: true,
      }
    );

    console.log("submittedAssignmentDoc", submittedAssignmentDoc);

    if (!submittedAssignmentDoc) {
      res.status(500).json({ error: "Error updating submitted assignment" });
    }

    res.status(200).json({ feedbackDoc });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
