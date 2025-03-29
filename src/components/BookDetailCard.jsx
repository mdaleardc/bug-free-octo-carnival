"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Button from "@/components/Button";
import Image from "next/image";

dayjs.extend(relativeTime);

const BookDetailCard = ({ book }) => {
  return (
    <div className="w-4/5 sm:w-3/5 xl:w-2/5 h-fit mx-auto my-5 rounded-xl shadow-md text-center bg-zinc-200 transform transition-transform duration-300 p-1 hover:shadow-lg text-center">
      {/* Book Thumbnail */}
      <div className="flex flex-col items-center">
        <Image
          src={book.thumbnailUrl}
          alt="Book Thumbnail"
          className="rounded-lg shadow-md w-full h-[400px] object-cover"
          width="100"
          height='150'
        />
        <h2 className="mt-4 text-3xl font-bold text-gray-800">{book.subject.replace("Myanmar", "Myanmasar").replace(/_/g, " ")}</h2>
        <p className="text-lg text-gray-600">{book.grade.replace(/_/, ": ")}</p>
        <p className="text-gray-600">{book.pdfType.replace("Answers", "Answer Guide").replace(/_/g, " ")}</p>
        {book.curriculum && <p className="text-gray-600">{book.curriculum} curriculum</p>}
        <p className="text-gray-600">{book.categories.replace(/_/g, " ")}</p>

          <p className="px-2 text-gray-500 text-sm">{dayjs(book.createdAt).fromNow()}</p>
        </div>

<div className="w-full h-8 flex gap-4 mx-auto justify-center my-1">
          <GoBackButton />
<Button href={book.pdfUrl} className='w-1/2'>
  Download
</Button>
    </div>
    </div>
  );
};




const GoBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();  // This will take the user to the previous page in the history
  };

  return (
    <button
      onClick={handleGoBack}
      className="px-5 rounded-full text-gray-700 border border-gray-400 hover:bg-gray-200 transition duration-300"
    >
      Go Back
    </button>
  );
};

export default BookDetailCard;