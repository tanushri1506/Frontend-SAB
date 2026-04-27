"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchAcademicSession } from "@/lib/home";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:8000";


// 🔹 HOOK: RIC PHOTOS
export const useRICPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/ric-gallery/`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch RIC gallery");

        const data = await res.json();

        const formatted = data.map((item) => ({
          label: item.title || `photo-${item.id}`, // ✅ important for key
          Photo: (
            <Image
              src={item.image}
              alt={item.title || "RIC Gallery"}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          ),
        }));

        setPhotos(formatted);
      } catch (err) {
        console.error("RIC Photos Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading };
};


// 🔹 HOOK: RIC COUNCIL
export const useRICCouncil = () => {
  const [council, setCouncil] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCouncil = async () => {
      try {
        const session = await fetchAcademicSession();
        const currentYear = session.current_year;

        const res = await fetch(
          `${API_BASE}/api/ric-council/?tenure=${currentYear}`,
          {
            cache: "no-store",
          }
        );

        if (!res.ok) throw new Error("Failed to fetch council");

        const data = await res.json();

        const formatted = data
          .filter((m) => m.post && !m.post.toLowerCase().includes("ric"))
          .map((m) => ({
            name: m.name || "",
            post: m.post || "",
            phone: m.phone || "",
            email: m.email || "",
            linkedin: m.linkedin || "",
            Photo: (
              <Image
                src={m.photo || "/placeholder.jpg"}
                alt={m.name}
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            ),
          }));

        setCouncil(formatted);
      } catch (err) {
        console.error("RIC Council Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCouncil();
  }, []);

  return { council, loading };
};