"use client"; // needed for React hooks


const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export const fetchCarousel = async () => {
  const res = await fetch(`${API_BASE}/api/carousel/`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch carousel images");
  const data = await res.json();

  return data.map((item) => ({
    src: item.image || "/placeholder.jpg",
    link: item.link || null,
    label: item.label || "",
  }));
};
