import BookCard from "./BookCard";

// ✅ Fetch books on the server before rendering
const fetchTrendingBooks = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/trending-books`, {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_SERVER_API_KEY,  // Send client-side API key here
          },
        }, {
      cache: "no-store", // Ensures fresh data on each request
    });

    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    const data = await response.json();
    return data.books || [];
  } catch (err) {
    console.error("Error fetching trending books:", err);
    return [];
  }
};

// ✅ Server Component (SSR)
const TrendingBooks = async () => {
  const books = await fetchTrendingBooks(); // Fetch before rendering

  return (
      <div className="relative">
        {/* Scrollable Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-4">
          {books.length > 0 ? (
            books.map((book) => (
              <div key={book._id}>
                <BookCard book={book} />
              </div>
            ))
          ) : (
            <p className="text-center w-full">No trending books available.</p>
          )}
        </div>
      </div>
  );
};

export default TrendingBooks;