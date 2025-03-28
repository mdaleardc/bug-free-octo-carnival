const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  grade: {
    type: String,
    required: true,
    enum: [
      "Grade_1", "Grade_2", "Grade_3", "Grade_4", "Grade_5", "Grade_6", 
      "Grade_7", "Grade_8", "Grade_9", "Grade_10", "Grade_11", "Grade_12", 
      "General", "Islamic",
    ],
  },
  subject: {
    type: String,
    required: true,
  },
  pdfType: {
    type: String,
    required: true,
    enum: [
      "Textbook", "Answers", "Answer_Key", "Guide", "Notes", "Worksheet", 
      "Exam_Paper", "Reference", "Presentation", "Research_Paper", "Tutorial",
      "Self_Study", "Vocational_Training", "Skill_Development", "Adult_Education", 
      "Short_Course", "Workshop_Material", "Community_Learning", "Extracurricular", 
      "Lifelong_Learning",
    ],
  },
  categories: {
    type: String,
    enum: ["Formal_Education", "Non_Formal_Education"],
    default: "Formal_Education",
  },
  pdfUrl: {
    type: String,
    unique: true,
    required: true,
  },
  specificBookName: {
    type: String,
    required: false,
    default: "",
  },
  thumbnailUrl: {
    type: String,
    default: "",
  },
  clicks: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Check if the model already exists to avoid overwriting
module.exports = mongoose.models.Books || mongoose.model("Books", booksSchema);