"use server";

export default async function uploadAction(formData) {
  const rawFormData = {
    grade: formData.get("grade"),
    subject: formData.get("subject"),
    pdfType: formData.get("pdfType"),
    categories: formData.get("categories"),
    specificBookName: formData.get("specificBookName"),
    pdfUrl: formData.get("pdfUrl"),
    thumbnailUrl: formData.get("thumbnailUrl"),
  };

  console.log("Form Data Submitted:", rawFormData);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/upload`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rawFormData),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Failed to upload");
    }

    return data;
  } catch (error) {
    console.error("Upload Error:", error.message);
    return { error: error.message };
  }
}