"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || "http://localhost";

export const useWorkshops = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [previous, setPrevious] = useState([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/workshops/`);
        const data = await res.json();

        setUpcoming(
          data.upcoming.map((w) => ({
            ...w,
            Photo: (
              <Image
                src={w.photo || "/placeholder.jpg"}
                alt={w.title || "Workshop"}
                width={400}
                height={300}
                className="object-cover"
              />
            ),
          })),
        );

        setPrevious(
          data.previous.map((w) => ({
            ...w,
            Photo: (
              <Image
                src={w.photo || "/placeholder.jpg"}
                alt={"No Poster Available" || "Workshop"}
                width={400}
                height={300}
                className="object-cover"
              />
            ),
          })),
        );
      } catch (error) {
        console.error("Failed to fetch workshops", error);
      }
    };

    fetchWorkshops();
  }, []);

  return { upcoming, previous };
};
