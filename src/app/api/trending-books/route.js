import { connectDB } from "@/lib/mongodb";
import Book from "@/lib/models/Book";
import { NextResponse } from "next/server";

export async function GET(req) {
  
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

    const books = await Book.find().sort({ clicks: -1 }).limit(24);

    return NextResponse.json({ books }, { status: 200 });

  } catch (error) {
    console.error("Error fetching trending books:", error);
    return NextResponse.json(
      { error: "Failed to fetch trending books", details: error.message },
      { status: 500 }
    );
  }
}