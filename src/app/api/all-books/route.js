import { connectDB } from "@/lib/mongodb";
import Book from "@/lib/models/Book";
import { NextResponse } from "next/server";

export async function GET(req) {
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
    const books = await Book.find();
    return NextResponse.json({ books }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to get books list!", error: err.message },
      { status: 500 }
    );
  }
}