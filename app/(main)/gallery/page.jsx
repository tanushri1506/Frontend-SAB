"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { usePastYears, useGalleryByYear } from "@/lib/gallery";

export default function Gallery() {
  const years = usePastYears();
  const [selectedYear, setSelectedYear] = useState(years[0] || "");
  const gallery = useGalleryByYear(selectedYear);

  useEffect(() => {
    if (years.length > 0 && !selectedYear) {
      setSelectedYear(years[0]);
    }
  }, [years, selectedYear]);

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="gradient-title text-3xl md:text-4xl">SAB Gallery</h2>

        <div className="mt-4">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border rounded-md"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-12 grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {gallery.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-0 text-center shadow-md hover:shadow-2xl hover:shadow-[#091c53]"
            >
              <div className="rounded-xl overflow-hidden border-yellow-400 border-2">
                <Image
                  src={item.image}
                  alt={"Gallery Photo"}
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
