
"use client";

import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

// Fetch all PAL photos for gallery
export const fetchPALPhotos = async () => {
  const res = await fetch(`${API_BASE}/api/pal/`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch PAL data");

  const data = await res.json();

  // Map each item to the gallery format
  return data.map((member) => ({
    label: member.label || "PAL Member",
    Photo: (
      <Image
        src={member.photo || "/placeholder.jpg"}
        alt={member.label || "PAL Gallery"}
        width={400}
        height={300}
        className="object-cover"
        style={{ width: "400px", height: "300px" }}
      />

    ),
  }));
};
