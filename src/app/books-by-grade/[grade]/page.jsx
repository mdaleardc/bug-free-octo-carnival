// app/books/[grade]/page.js
import BooksByGrade from "@/components/BooksByGrade";
import FilterGrade from "@/components/FilterGrade";

// generateMetadata function
export async function generateMetadata({ params }) {
  // read route params
  const { grade } = await params;
 
  return {
    title: `Myanmar Book Hub - ${grade.replace(/[_-]/g, " ")}`,
    }
  }
 
const GradeBooksPage = async ({ params }) => {
  const { grade } = await params;

  return (
    <div className="w-full mt-[3rem] py-3 px-2 h-[80vh] bg-zinc-800 overflow-x-scroll">
      <div className='flex items-center justify-center gap-5 pb-4'>
      <FilterGrade />
      <h1 className='text-xl font-bold text-white flex items-center'>{grade.replace(/[_-]/, " ")}</h1>
      </div>
      <BooksByGrade grade={grade} />
    </div>
  );
};

export default GradeBooksPage;