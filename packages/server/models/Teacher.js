const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const teacherSchema = new Schema({
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
  uploadAssignment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const Teacher = model("Teacher", teacherSchema);
module.exports = Teacher;
