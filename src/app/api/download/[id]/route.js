import { connectDB } from "@/lib/mongodb";
import Book from "@/lib/models/Book";
import { NextResponse } from "next/server";

// Handle GET requests
export async function GET(req, { params }) {
  const { id } = await params;
  try {
    await connectDB();
    
    const book = await Book.findById(id);
    if (!book) return NextResponse.json({ message: "Book not found! " }, { status: 404 });

    // Ensure categories is not missing
    if (!book.categories) {
      book.categories = "Formal_Education";
      await book.save();
    }

    // Increment the click count
    book.clicks = (book.clicks || 0) + 1;
    await book.save();

    if (!book.pdfUrl) {
      return NextResponse.json({ message: "PDF URL is missing!" }, { status: 400 });
    }

    // Redirect to the PDF URL
    return NextResponse.redirect(book.pdfUrl);
  } catch (err) {
    return NextResponse.json({ message: "Failed to track download", error: err.message }, { status: 500 });
  }
}