import AllBooks from "@/components/AllBooks";
import FilterGrade from "@/components/FilterGrade";

export default function AllBooksPage() {
  
  return <div
  className="w-full mt-[2.5rem] pt-2 pb-6 px-2 h-[80vh] bg-zinc-800 overflow-x-scroll">
      <FilterGrade />
      <AllBooks/>
    </div>
}