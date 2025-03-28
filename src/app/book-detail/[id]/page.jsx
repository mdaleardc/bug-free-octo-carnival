// app/books/[grade]/page.js
import BookDetail from "@/components/BookDetail";

 
const BookDetailPage = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="w-full mt-[3rem] py-4 px-2 h-fit bg-zinc-800 overflow-x-scroll">
      <BookDetail id={id} />
    </div>
  );
};

export default BookDetailPage;