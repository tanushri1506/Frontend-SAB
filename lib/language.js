"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

const fetchData = async (endpoint) => {
  const res = await fetch(`${API_BASE}/api/${endpoint}/`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
};

// Fetch Language Team
const fetchLanguageTeam = async () => {
  const data = await fetchData("language-team");
  return data.map((m) => ({
    name: m.name || "",
    post: m.post || "",
    phone: m.phone || "",
    email: m.email || "",
    linkedin: m.linkedin || "",
    Photo: (
      <Image
        src={m.photo}
        alt={m.name}
        width={200}
        height={200}
        className="object-cover"
      />
    ),
  }));
};

// Custom hooks
export const useLanguageTeam = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetchLanguageTeam().then(setTeam).catch(console.error);
  }, []);
  return team;
};

export const useLanguageCourses = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [previous, setPrevious] = useState([]);

  useEffect(() => {
    const fetchLanguageCourses = async () => {
      try {
        const data = await fetchData("language-courses");

        const upcomingData = data?.upcoming || data || [];
        const previousData = data?.previous || [];

        setUpcoming(
          upcomingData.map((w) => ({
            ...w,
            Photo: w.photo ? (
              <Image
                src={w.photo}
                alt={w.title}
                width={600}
                height={600}
                className="object-cover"
              />
            ) : null,
          })),
        );

        setPrevious(
          previousData.map((w) => ({
            ...w,
            Photo: w.photo ? (
              <Image
                src={w.photo}
                alt={w.title}
                width={600}
                height={600}
                className="object-cover"
              />
            ) : null,
          })),
        );
      } catch (err) {
        console.error("Language courses fetch failed:", err);
      }
    };

    fetchLanguageCourses();
  }, []);

  return { upcoming, previous };
};
