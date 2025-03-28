import { connectDB } from "@/lib/mongodb";
import Book from "@/lib/models/Book";
import { NextResponse } from "next/server";

// Handle POST requests
export async function POST(req) {
  try {
    await connectDB();
    const { grade, subject, pdfType, categories, specificBookName, pdfUrl } = await req.json();

    const book = await Book.create({
      title: `${grade} ${subject} ${pdfType} ${specificBookName}`,
      grade,
      subject,
      pdfType,
      categories,
      specificBookName,
      pdfUrl,
    });

    return NextResponse.json({ message: "Book uploaded successfully!", book }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to upload!", details: err.message }, { status: 500 });
  }
}

// Handle other methods
export function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}