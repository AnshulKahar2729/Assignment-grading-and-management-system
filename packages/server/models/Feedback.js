const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const feedbackSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = model("Feedback", feedbackSchema);
module.exports = Feedback;
