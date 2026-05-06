"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Mail, LinkedinIcon } from "lucide-react";
import { useRICPhotos, useRICCouncil } from "@/lib/ric";

const Page = () => {
  const { photos, loading: loadingPhotos } = useRICPhotos();
  const { council, loading: loadingCouncil } = useRICCouncil();

  if (loadingPhotos || loadingCouncil) {
    return <p className="text-center mt-20">Loading RIC...</p>;
  }

  return (
    <div className="bg-gray-50 pb-16">
      {/* HERO */}
      <section className="container mx-auto px-4 md:px-6 text-center pt-20 flex flex-col items-center">
        <Image
          src="/sab/logos/ric.jpg"
          width={110}
          height={110}
          alt="RIC Logo"
        />

        <h1 className="gradient-title mt-4 text-4xl md:text-5xl">
          Research & Industrial Conclave
        </h1>

        <p className="mx-auto mt-4 max-w-[1000px] text-gray-600 md:text-lg">
          Research and Industrial Conclave is the flagship event of
          IIT Guwahati, jointly organized by the Students' Academic Board and
          IIT Guwahati Research Park. It serves as a multidisciplinary platform
          connecting academia, industry, and policymakers to foster innovation
          for a sustainable future.
        </p>

        <div className="mt-12">
          <a
            href="https://www.ric.iitg.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 bg-[#091c53] text-white rounded-xl hover:scale-105 transition">
              Visit RIC Website
            </button>
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            RIC Gallery
          </h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {photos.length > 0 ? (
              photos.map(({ label, Photo }) => (
                <Card
                  key={label}
                  className="flex flex-col items-center p-0 text-center shadow-md hover:shadow-2xl hover:shadow-[#091c53]"
                >
                  <div className="rounded-xl overflow-hidden border-yellow-400 border-2">
                    {Photo}
                  </div>
                </Card>
              ))
            ) : (
              <p className="col-span-full text-gray-500">
                No photos available.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* COMMITTEE */}
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            RIC Student Committee
          </h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {council.length > 0 ? (
              council.map(
                ({ name, post, Photo, phone, email, linkedin }) => (
                  <Card
                    key={name}
                    className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl border-[#091c53] border-2 hover:scale-[1.08] ease-out transition-all duration-300 hover:shadow-[#091c53] rounded-xl"
                  >
                    <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-yellow-400 border-4">
                      {Photo}
                    </div>

                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-gray-600 px-2">{post}</p>

                    <div className="flex items-center justify-center space-x-6">
                      {phone && (
                        <a href={`tel:${phone}`} aria-label="Phone">
                          <Phone className="h-5 w-5 text-gray-700 hover:text-blue-500" />
                        </a>
                      )}
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
                )
              )
            ) : (
              <p className="col-span-full text-gray-500">
                Committee data not available.
              </p>
            )}
          </div>
          <Button
            asChild
            size={"lg"}
            className="bg-[#091c53] hover:bg-[#0f2b81] cursor-pointer mt-10"
          >
            <Link href="/ric-past-committee">Past RIC Student Committee</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Page;