"use client";

import { useState, useEffect } from "react";
import { fetchAcademicSession } from "@/lib/home";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const usePastYears = () => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    const loadYears = async () => {
      const session = await fetchAcademicSession();
      const currentYear = session.current_year;

      const res = await fetch(`${API_BASE}/api/gallery-page/?tenure=all`);
      const data = await res.json();

      const uniqueYears = [...new Set(data.map((c) => c.tenure))]
        .sort((a, b) => (a < b ? 1 : -1));

      setYears(uniqueYears);
    };

    loadYears().catch(console.error);
  }, []);

  return years;
};

export const useGalleryByYear = (selectedYear) => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    if (!selectedYear) return;
    fetch(`${API_BASE}/api/gallery-page/?tenure=${selectedYear}`)
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((m) => ({
          image: m.image || "/placeholder.jpg",
        }));
        setGallery(mapped);
      })
      .catch(console.error);
  }, [selectedYear]);
  return gallery;
};
