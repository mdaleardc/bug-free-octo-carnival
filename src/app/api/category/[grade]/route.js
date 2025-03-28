import { connectDB } from "@/lib/mongodb";
import Book from "@/lib/models/Book";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  
    // protect API route
    const apiKey = req.headers.get("x-api-key");

  // Check if the API key matches the one in environment variables
  if (apiKey !== process.env.NEXT_PUBLIC_SERVER_API_KEY) {
    return new Response(
      JSON.stringify({ message: "Forbidden: Invalid API Key" }),
      { status: 403 }
    );
  }
  
  try {
    await connectDB(); // Ensure database connection

    const { grade } = await params;
    const books = await Book.find({ grade });

    if (!books.length) {
      return NextResponse.json(
        { message: "No books found for this grade." },
        { status: 404 }
      );
    }

    return NextResponse.json(books, { status: 200 });
  } catch (err) {
    console.error("Error fetching books:", err);
    return NextResponse.json(
      { error: "Failed to fetch books", details: err.message },
      { status: 500 }
    );
  }
}