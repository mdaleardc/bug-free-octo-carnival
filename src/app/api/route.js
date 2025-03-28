import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse(
    "<h1 style='color:#0060FF; text-align: center; padding-top: 20px'>Welcome to Myanmar School Book Store</h1>",
    {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}