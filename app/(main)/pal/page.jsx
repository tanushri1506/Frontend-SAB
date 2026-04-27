"use client";

import { Card } from "@/components/ui/card";
import { fetchPALPhotos } from "@/lib/pal";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

const Page = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPALPhotos()
      .then((data) => setPhotos(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="pb-10 bg-gray-50">
      <section className="container mx-auto px-4 md:px-6 text-center pt-20 items-center flex flex-col">
        <Image
          src={"https://www.iitg.ac.in/sab/logos/pal-logo.jpeg"}
          width={100}
          height={100}
          alt="pal-logo"
          className="hover:rotate-60"
        />

        <h2 className="gradient-title mt-3 text-3xl md:text-4xl">
          Peer Assisted Learning (PAL)
        </h2>
        <p className="mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-center">
          University classes are vastly different from school, and its
          completely normal to take some time to get used to them. To help
          Undergraduate (UG) First Year Students tackle their common courses,
          Students' Academic Board conducts Peer assisted learning (PAL) classes
          every year. In PAL, you'll be assigned mentors who are students
          themselves, making it easy for you to form connections and clarify
          your concepts. If you're too shy to ask a question in class, just join
          a PAL session!
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-6 text-center mt-10">
        <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
          PAL Gallery
        </h2>
        <div className="mt-12 grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {photos.map(({ label, Photo }) => (
            <Card
              key={label}
              className="flex flex-col items-center p-0 text-center shadow-md hover:shadow-2xl hover:shadow-[#091c53]"
            >
              <div className="rounded-xl overflow-hidden border-yellow-400 border-2">
                {Photo}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
