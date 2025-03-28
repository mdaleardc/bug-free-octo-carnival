import mongoose from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI environment variable in .env.local");
}

// Global cache to prevent multiple connection in development
let cached = global.mongoose || {conn: null, promise: null};

export async function connectDB() {
  if (cached.conn) return cached.conn // Return existing connection if available

if(!cached.promise) {
  cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }
  
  console.log("DB is connected")
  cached.conn = cached.promise;
  global.mongoose = cached // Store global cache
  return cached.conn;
}