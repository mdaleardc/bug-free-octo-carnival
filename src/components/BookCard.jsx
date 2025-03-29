import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Button from "@/components/Button"
import Image from "next/image"

dayjs.extend(relativeTime);

const BookCard = ({ book }) => {
  return (
    <div className="rounded-xl shadow-md text-center bg-zinc-300 transform transition-transform duration-300 p-1 hover:scale-x-105 hover:shadow-lg h-full relative">
    <div className='mb-8'>
      <Link href={`/book-detail/${book?._id}`}>
        <Image
          src={book?.thumbnailUrl}
          alt="book's thumbnail"
          className="rounded-lg mx-auto w-full h-[200px] object-cover"
          loading="lazy"
          width="100"
          height="150"
        />
      </Link>

      <h2 className="text-base font-medium text-black px-2 pt-2">
        {book?.title
          .replace(/[_-]/g, " ")
          .replace(/\b(Answers)\b/, "အဖြေစုံ")
          .replace(/\b(Islamic|General)\b/, "")
          .trim()}
      </h2>

      <p className="flex flex-row items-center justify-center text-green-500">
        <span className="px-2 text-black text-xs">
          {dayjs(book?.createdAt).fromNow()}
        </span>
      </p>
      </div>

<Link href={`/book-detail/${book?._id}`} className='w-10/12 my-1 absolute left-1/2 -translate-x-1/2 bottom-0 inline-flex items-center justify-center gap-1 rounded-full bg-blue-600 text-white px-2 py-1 font-semibold shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95 hover:text-[gold]'>
  See More Detail
</Link>
    </div>
  );
};

export default BookCard;