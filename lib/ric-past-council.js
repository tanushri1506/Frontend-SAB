"use client";

import { useState, useEffect } from "react";
import { fetchAcademicSession } from "@/lib/home";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:8000";

export const usePastYears = () => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    const loadYears = async () => {
      const session = await fetchAcademicSession();
      const currentYear = session.current_year;

      const res = await fetch(`${API_BASE}/api/ric-council/?tenure=all`);
      const data = await res.json();

      const uniqueYears = [...new Set(data.map((c) => c.tenure))]
        .filter((y) => y !== currentYear)
        .sort((a, b) => (a < b ? 1 : -1));

      setYears(uniqueYears);
    };

    loadYears().catch(console.error);
  }, []);

  return years;
};

// Hook to fetch council members for a selected year
export const useCouncilByYear = (selectedYear) => {
  const [council, setCouncil] = useState([]);
  useEffect(() => {
    if (!selectedYear) return;
    fetch(`${API_BASE}/api/ric-council/?tenure=${selectedYear}`)
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((m) => ({
          ...m,
          photo: m.photo || "/placeholder.jpg",
        }));
        setCouncil(mapped);
      })
      .catch(console.error);
  }, [selectedYear]);
  return council;
};
