const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const submittedAssignmentSchema = new Schema({
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  submissionDate: {
    type: Date,
    required: true,
  },
  late: {
    type: Boolean,
    default: false,
    required: true,
  },
  file: {
    type: String,
    required: true,
    trim: true,
  },
  teacherComments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Feedback",
  },
  automatedFeedback: {
    type: [String],
  },
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assignment",
    required: true,
  },
  grades: {
    type: String,
    // required: true,
    default : "5",
    enum: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
  },
});

const SubmittedAssignment = model(
  "SubmittedAssignment",
  submittedAssignmentSchema
);

module.exports = SubmittedAssignment;
