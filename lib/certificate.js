const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export const fetchCertificate = async (group, code) => {
  const res = await fetch(`${API_BASE}/api/certificates/${group}/${code}/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Certificate not found");
  }

  return res.json();
};