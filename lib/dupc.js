
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export const getDUPC = async (tenure) => {
  const query = tenure ? `?tenure=${tenure}` : "";
  const res = await fetch(`${API_BASE}/api/dupc${query}`); 
  if (!res.ok) throw new Error("Failed to fetch dupc");
  return res.json();
};

