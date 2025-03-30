"use client"
import { useState } from "react";
import uploadAction from "./uploadAction";

export default function PDFUploadForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const result = await uploadAction(formData);
    if (result.error) {
      setMessage(`Error: ${result.error}`);
    } else {
      setMessage("Book uploaded successfully!");
      event.target.reset(); // Clear form after success
    }
  };
  
   const grades = [
    "Grade_1", "Grade_2", "Grade_3", "Grade_4", "Grade_5", "Grade_6",
    "Grade_7", "Grade_8", "Grade_9", "Grade_10", "Grade_11", "Grade_12",
    "General", "Islamic"
  ];

  const categories = ["Formal_Education", "Non_Formal_Education"];

  const pdfTypes = [
    "Textbook", "Answers", "Answer_Key", "Guide", "Notes", "Worksheet",
    "Exam_Paper", "Reference", "Presentation", "Research_Paper", "Tutorial",
    "Self_Study", "Vocational_Training", "Skill_Development", "Adult_Education",
    "Short_Course", "Workshop_Material", "Community_Learning", "Extracurricular",
    "Lifelong_Learning"
  ];

  return (
    <div className="my-5">
      <form
        className="w-4/5 sm:w-3/5 mx-auto flex flex-col bg-zinc-400 py-2 px-5 rounded-md"
        onSubmit={handleSubmit}>
        <label className="text-black font-semibold text-left py-1" htmlFor="grade">
          Grade <span className='text-red-500'>*</span>
        </label>
        <select className="bg-white outline-none h-8 rounded-full px-2 text-black" name="grade" id="grade" required>
          <option value="">Select Grade</option>
          {grades.map((grade, index) => (
            <option key={index} value={grade}>
              {grade.replace(/[_-]/g, " ")}
            </option>
          ))}
        </select>

        <label className="text-black font-semibold text-left py-1" htmlFor="subject">
          Subject <span className='text-red-500'>*</span>
        </label>
        <input className="bg-white outline-none h-8 rounded-full px-2 text-black" type="text" name="subject" id="subject" required/>

        <label className="text-black font-semibold text-left py-1" htmlFor="pdfType">
          PDF Type <span className='text-red-500'>*</span>
        </label>
        <select className="bg-white outline-none h-8 rounded-full px-2 text-black" name="pdfType" id="pdfType" required>
          <option value="">Select PDF Type</option>
          {pdfTypes.map((type, index) => (
            <option key={index} value={type}>
              {type.replace(/[_-]/g, " ")}
            </option>
          ))}
        </select>

        <label className="text-black font-semibold text-left py-1" htmlFor="categories">
          Categories <span className='text-red-500'>*</span>
        </label>
        <select className="bg-white outline-none h-8 rounded-full px-2 text-black" name="categories" id="categories" required>
          <option value="">Select Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category.replace(/[_-]/g, " ")}
            </option>
          ))}
        </select>

        <label className="text-black font-semibold text-left py-1" htmlFor="specificBookName">
          Specific Book Name
        </label>
        <input className="bg-white outline-none h-8 rounded-full px-2 text-black" type="text" name="specificBookName" id="specificBookName"/>

        <label className="text-black font-semibold text-left py-1" htmlFor="pdfUrl">
          PDF URL <span className='text-red-500'>*</span>
        </label>
        <input className="bg-white outline-none h-8 rounded-full px-2 text-black" type="text" name="pdfUrl" id="pdfUrl" required/>

        <label className="text-black font-semibold text-left py-1" htmlFor="thumbnailUrl">
          Thumbnail Url <span className='text-red-500'>*</span>
        </label>
        <input className="bg-white outline-none h-8 rounded-full px-2 text-black" type="text" name="thumbnailUrl" id="thumbnailUrl" required/>
        <input className="w-3/5 text-center my-4 text-black mx-auto font-semibold py-1 border-1 bg-blue-500 rounded-full text-white" type="submit" value="Submit" />
      </form>
      {message && <p className="text-center mt-2">{message}</p>}
    </div>
  );
}