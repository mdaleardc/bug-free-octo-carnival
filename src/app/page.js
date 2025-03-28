import TrendingBooks from "@/components/TrendingBooks";
import FilterGrade from "@/components/FilterGrade";

export default function Home() {
  return (
      <main className='w-full mt-[3rem] pt-2 pb-6 px-2 h-[80vh] bg-black overflow-x-scroll'>
        <div className='grid grid-cols-5 sm:flex items-center justify-center gap-4 pb-2'>
      <div className='col-span-2'>
      <FilterGrade />
      </div>
      <h1 className='text-xl font-bold text-white flex items-center whitespace-nowrap col-span-3'>📚 Trending Books</h1>
      </div>
        <TrendingBooks />
      </main>
  );
}
