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
    type: Object,
  },
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assignment",
    required: true,
  },
  grades: {
    type: String,
    // required: true,
  },
});

const SubmittedAssignment = model(
  "SubmittedAssignment",
  submittedAssignmentSchema
);

module.exports = SubmittedAssignment;
