const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
    trim: true,
    enum : ["CSE", "IT", "ECE", "EE", "ME", "CE"],
  },
  year: {
    type: String,
    required: true,
    enum : ["1", "2", "3", "4"],
  },
  division: {
    type: String,
    required: true,
    trim: true,
    enum : ["A", "B", "C"],
  },
  submittedAssignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubmittedAssignment",
  }
});

const Student = model("Student", studentSchema);
module.exports = Student;