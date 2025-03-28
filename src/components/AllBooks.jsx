"use client"; // This makes only AllBooks a client component

import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import LoadingPage from "@/app/loading"; 

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [visibleBooks, setVisibleBooks] = useState(12);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/all-books`, {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_SERVER_API_KEY,  // Send client-side API key here
          },
        });
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();
        setBooks(data.books || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const loadMoreBooks = () => setVisibleBooks((prev) => prev + 12);

  if (loading) return <LoadingPage />;
  if (error) return <p className="text-center text-red-500">Error from All Books Page : {error}</p>;

  return (
    <div className="w-full">
      {books.length > 0 ? (
        <div className="book-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-4">
          {books.slice(0, visibleBooks).map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No books found.</p>
      )}

      {visibleBooks < books.length && (
        <div className="flex justify-center mt-5">
          <button
            onClick={loadMoreBooks}
            className="px-6 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition"
          >
            More Books
          </button>
        </div>
      )}
    </div>
  );
};

export default AllBooks;

