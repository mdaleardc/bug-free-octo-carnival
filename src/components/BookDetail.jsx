import BookDetailCard from "@/components/BookDetailCard";

export default async function BookDetail({ id }) {
  try {
    const response =  await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/book-detail/${id}`, {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_SERVER_API_KEY,  // Send client-side API key here
          },
        },
      { cache: "no-store" }
    );
    
    if(!response.ok) {
      throw new Error("Failed to fetch book detail!");
    }
    
    const data = await response.json();
    const book = data?.book || {};
    
    return (
          <div className="book-detail w-full h-[80vh]">
          <BookDetailCard book={book}/>
          </div>
      );
  } catch (err) {
     console.error("Error fetching books:", err);
    return <p className="text-red-500">Error: {err.message}</p>;
  }
}