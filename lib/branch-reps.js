
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost";

export const getBranchReps = async (tenure) => {
  const query = tenure ? `?tenure=${tenure}` : "";
  const res = await fetch(`${API_BASE}/api/branch-reps${query}`); 
  if (!res.ok) throw new Error("Failed to fetch branch reps");
  return res.json();
};

