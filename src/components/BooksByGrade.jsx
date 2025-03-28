import BookCard from "@/components/BookCard";
export default async function BooksByGrade({ grade }) {

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/category/${grade}`, {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_SERVER_API_KEY,  // Send client-side API key here
          },
        },
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch books.");
    }

    const data = await response.json();
    const books = data || [];

    // Display the books only in the UI
    return (
      <div className="w-full">
        {books?.length > 0 ? (
          <div className="book-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-4">
            {books.map((book) => {
            return <div key={book._id}>
            <BookCard book={book} />
              </div>
            })}
          </div>
        ) : (
          <p>No books found.</p>
        )}
      </div>
    );
  } catch (err) {
    console.error("Error fetching books:", err);
    return <p className="text-red-500">Error: {err.message}</p>
  }
}