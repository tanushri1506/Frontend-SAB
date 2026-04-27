"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { LinkedinIcon, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { usePastYears, useCouncilByYear } from "@/lib/past-council";

export default function PastCouncil() {
  const years = usePastYears();
  const [selectedYear, setSelectedYear] = useState(years[0] || "");
  const council = useCouncilByYear(selectedYear);

  // When years are loaded, set default selected year
  useEffect(() => {
    if (years.length > 0 && !selectedYear) {
      setSelectedYear(years[0]);
    }
  }, [years, selectedYear]);

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="gradient-title text-3xl md:text-4xl">
          Past Executive Council
        </h2>

        {/* Dropdown */}
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

        {/* Council Grid */}
        <div className="mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {council.map(({ id, name, post, photo, email, linkedin }) => (
            <Card
              key={id}
              className="flex flex-col items-center p-6 shadow-md border-[#091c53] border-2 hover:scale-[1.08] ease-out transition-all duration-300 hover:shadow-[#091c53] hover:shadow-2xl rounded-xl"
            >
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-yellow-400 border-4">
                <Image
                  src={photo}
                  alt={name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-2">{name}</h3>
              <p className="text-gray-600">{post}</p>

              <div className="flex items-center justify-center space-x-6 mt-2">
                {email && (
                  <a href={`mailto:${email}`} aria-label="Email">
                    <Mail className="h-5 w-5 text-gray-700 hover:text-red-500" />
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-5 w-5 text-gray-700 hover:text-blue-700" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
