export async function GET(req) {
  const apiKey = req.headers.get("x-api-key");  // Get API key from headers

  // Check if the API key matches the one in environment variables
  if (apiKey !== process.env.NEXT_PUBLIC_SERVER_API_KEY) {
    return new Response(
      JSON.stringify({ message: "Forbidden: Invalid API Key" }),
      { status: 403 }
    );
  }

  // If the API key is valid, proceed with the API logic
  return new Response(
    JSON.stringify({ message: "API request successful" }),
    { status: 200 }
  );
}