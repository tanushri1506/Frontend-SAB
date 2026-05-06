"use client";

import { Card } from "@/components/ui/card";
import { useContacts, useCouncil, useEvents, usePhotos } from "@/lib/home";
import { LinkedinIcon, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/image-carousel";
import { useEffect, useState } from "react";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  const CONTACTS = useContacts();
  const COUNCIL = useCouncil();
  const EVENTS = useEvents();
  const PHOTOS = usePhotos();

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (

    <div className="flex flex-col bg-[#091c53]">
      <AboutSection animate={animate} />

      <section id="about" className="bg-gray-50 py-20">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h2 className="gradient-title text-3xl md:text-4xl text-c">
            What We Do
          </h2>
          <div className="mx-auto max-w-5xl mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center">
              
              <div className="flex flex-col items-center space-y-4 hover:scale-[1.2] duration-300">
                <Image
                  src="/sab/icons/i1.png"
                  alt="Keep you Updated"
                  width={100}
                  height={100}
                />
                <h3 className="font-semibold text-gray-900">
                  Keep you Updated!
                </h3>
                <p className="text-sm text-gray-500">
                  SAB shares all academic updates via social media, interactive
                  sessions, and our website
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 hover:scale-[1.2] duration-300">
                <Image
                  src="/sab/icons/i2.png"
                  alt="Keep you Updated"
                  width={100}
                  height={100}
                />
                <h3 className="font-semibold text-gray-900">Bridge the Gap.</h3>
                <p className="text-sm text-gray-500">
                  SAB acts as a bridge between students and the academic
                  administration
                </p>
              </div>

              
              <div className="flex flex-col items-center space-y-4 hover:scale-[1.2] duration-300">
                <Image
                  src="/sab/icons/i3.png"
                  alt="Keep you Updated"
                  width={100}
                  height={100}
                />
                <h3 className="font-semibold text-gray-900">
                  Voice your concerns.
                </h3>
                <p className="text-sm text-gray-500">
                  We address academic concerns and guide students to the
                  appropriate authorities
                </p>
              </div>

             
              <div className="flex flex-col items-center space-y-4 hover:scale-[1.2] duration-300">
                <Image
                  src="/sab/icons/i4.png"
                  alt="Keep you Updated"
                  width={100}
                  height={100}
                />
                <h3 className="font-semibold text-gray-900">Academia.</h3>
                <p className="text-sm text-gray-500">
                  We organize foreign language courses, workshops, and industry
                  talks
                </p>
              </div>

             
              <div className="flex flex-col items-center space-y-4 hover:scale-[1.2] duration-300">
                <Image
                  src="/sab/icons/i5.png"
                  alt="Keep you Updated"
                  width={100}
                  height={100}
                />
                <h3 className="font-semibold text-gray-900">Support you!</h3>
                <p className="text-sm text-gray-500">
                  SAB guides students on scholarships, internships, and exchange
                  programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="updates" className="bg-[#091c53] py-20">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h2 className="gradient-title text-3xl md:text-4xl text-white">
            News & Updates
          </h2>

          <div className="mx-auto overflow-hidden rounded-xl pt-5">
            <ImageCarousel />
          </div>
        </div>
      </section>

     
      <section id="council" className="bg-gray-50 py-20">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h2 className="gradient-title text-3xl md:text-4xl ">
            Executive Council
          </h2>
          <p className="mt-3 text-gray-600 max-w-[700px] mx-auto">
            The Executive Council of SAB IITG includes the General Secretary,
            Joint Secretary, and representatives from Bachelors, Masters, and
            PhD programs. The council is chaired by the Associate Dean of
            Academic Courses.
          </p>

          <div className="mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {COUNCIL.map(({ name, post, Photo, phone, email, linkedin }) => (
              <Card
                key={name}
                className="flex flex-col items-center p-6 text-center border-[#091c53] border-2 hover:scale-[1.08] ease-out transition-all duration-300 hover:shadow-[#091c53] hover:shadow-2xl rounded-xl"
              >
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-yellow-400 border-4">
                  {Photo}
                </div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600">{post}</p>
                <div className="flex items-center justify-center space-x-6 mt-2">
                  {phone && (
                    <a href={`tel:${phone}`}>
                      <Phone className="h-5 w-5 text-gray-700 hover:text-blue-500" />
                    </a>
                  )}
                  {email && (
                    <a href={`mailto:${email}`}>
                      <Mail className="h-5 w-5 text-gray-700 hover:text-red-500" />
                    </a>
                  )}
                  {linkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon className="h-5 w-5 text-gray-700 hover:text-blue-700" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <Button
            asChild
            size={"lg"}
            className="bg-[#091c53] hover:bg-[#0f2b81] cursor-pointer mt-10"
          >
            <Link href="/past-council">Past Executive Council</Link>
          </Button>
        </div>
      </section>

      
      <section id="events" className="py-20 bg-[#091c53]">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h2 className="gradient-title text-3xl md:text-4xl text-white">
            Events and Activities
          </h2>
          <p className="mt-3 text-gray-200 max-w-[900px] mx-auto">
            Throughout the year, the Students' Academic Board conducts various
            events to inculcate academic excellence and innovation.
          </p>

          <div className="mt-12 grid max-w-5xl gap-8 md:grid-cols-4 mx-auto">
            {EVENTS.map(({ Icon, title, url }) => (
              <div
                key={title}
                className="group flex flex-col items-center space-y-4 
             bg-white/95 rounded-2xl pt-6 pb-6 px-4
             transition-all duration-300 ease-out
             hover:-translate-y-2
             hover:shadow-[0_12px_40px_rgba(255,215,0,0.25)]
             border border-transparent hover:border-yellow-400"
              >
                <Link
                  href={url}
                  className="transition-transform duration-300 
               group-hover:scale-110 group-hover:rotate-3"
                >
                  {Icon}
                </Link>

                <h5 className="relative text-sm font-medium text-[#091c53]">
                  {title}
                  <span
                    className="absolute left-1/2 -bottom-1 h-[2px] w-0 
                 bg-[#091c53] transition-all duration-300
                 group-hover:w-full group-hover:left-0"
                  />
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="gallery" className="bg-gray-50 py-20 overflow-hidden">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h2 className="gradient-title text-3xl md:text-4xl">Photo Gallery</h2>

          <div className="relative mt-12 w-full overflow-hidden">
            <div className="marquee flex w-max gap-6">
              {[...PHOTOS, ...PHOTOS].map(({ label, Photo }, index) => (
                <Card
                  key={`${label}-${index}`}
                  className="flex-shrink-0 w-64 p-0 text-center shadow-md hover:shadow-2xl"
                >
                  <div className="rounded-xl overflow-hidden border-2 border-yellow-400">
                    {Photo}
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <Link
  href="/gallery"
  className="pt-5 inline-flex items-center gap-2 text-[#091c53] font-medium hover:text-yellow-500 transition"
>
  View All →
</Link>
        </div>

        
        <style jsx>{`
          .marquee {
            animation: marquee 30s linear infinite;
          }

          .marquee:hover {
            animation-play-state: paused;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

     
      <section id="contact" className="py-20 bg-[#091c53]">
        <div className="container mx-auto text-center px-4 md:px-6 space-y-10">
          <h2 className="text-3xl font-extrabold md:text-4xl text-white">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-20 mx-auto max-w-4xl text-red-100 text-center text-lg">
            {CONTACTS.map((contact, idx) => (
              <div key={idx}>
                <div className="flex justify-center mb-2">{contact.icon}</div>
                <p>
                  {contact.role && (
                    <>
                      <strong>{contact.role}</strong>
                      <br />
                    </>
                  )}
                  {contact.name && (
                    <>
                      {contact.name}
                      <br />
                    </>
                  )}
                  {contact.phone && (
                    <>
                      <a
                        href={`tel:${contact.phone}`}
                        className="hover:text-white hover:underline"
                      >
                        {contact.phone.replace("+91", "+91 ")}
                      </a>
                      <br />
                    </>
                  )}
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-white hover:underline"
                    >
                      {contact.email}
                    </a>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
