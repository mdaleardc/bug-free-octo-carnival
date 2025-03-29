"use client";

import { useRouter } from "next/navigation";

const FilterGrade = () => {
  const router = useRouter();

  const grades = [
    "Grade_1", "Grade_2", "Grade_3", "Grade_4",
    "Grade_5", "Grade_6", "Grade_7", "Grade_8",
    "Grade_9", "Grade_10", "Grade_11", "Grade_12",
    "Islamic", "General"
  ];

  const handleGradeChange = (event) => {
    const selectedGrade = event.target.value;
    if (selectedGrade !== "Select Grade") {
      router.push(`/books-by-grade/${selectedGrade}`);
    }
  };

  return (
    <div className="bg-gray-850 text-gray-200 p-2 flex flex-wrap gap-2 items-center">
     <label htmlFor="grade" className="text-lg font-semibold text-white">
     Filter by Grade
</label>
<select
  id="grade"
  className="outline-none p-2 bg-gray-800 text-white border border-gray-600 rounded-md"
  onChange={handleGradeChange}>
  <option>Select Grade</option>
  {grades.map((grade, index) => (
    <option key={index} value={grade}>
      {grade.replace(/[_-]/g, " ")}
    </option>
  ))}
</select>
    </div>
  );
};

export default FilterGrade;