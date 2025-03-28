import { connectDB } from "@/lib/mongodb";
import Book from "@/lib/models/Book";
import { NextResponse } from "next/server";

// Handle GET requests
export async function GET(req, { params }) {
  const { id } = await params;
  
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
    await connectDB();

    const book = await Book.findById(id);
    if (!book) return NextResponse.json({ message: "Book not found!" }, { status: 404 });

    return NextResponse.json({ book }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Failed to get book detail!", error: err.message }, { status: 500 });
  }
}