"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { LinkedinIcon, Mail, Phone } from "lucide-react";
import { useLanguageCourses, useLanguageTeam } from "@/lib/language";

const Page = () => {
  // const LANGUAGE_COURSES = useLanguageCourses();
  const { upcoming = [], previous = [] } = useLanguageCourses();
  const sortedUpcoming = [...upcoming].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const sortedPrevious = [...previous].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const LANGUAGE_TEAM = useLanguageTeam();

  return (
    <div className="bg-gray-50">
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title pt-20 text-3xl md:text-4xl">
            Upcoming Language Courses
          </h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 px-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            {sortedUpcoming.length > 0 ? (
              sortedUpcoming.map((w) => (
                <div
                  key={w.id}
                  className="flex flex-col md:flex-row items-center gap-8 p-6 mb-10 bg-white rounded-xl shadow-lg transition-all duration-300 ease-out
             hover:scale-[1.08] hover:shadow-2xl border-[#091c53] border-2"
                >
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full max-w-xs aspect-[2/3] rounded-xl overflow-hidden shadow-md">
                      {w.Photo}
                    </div>
                  </div>

                  <div className="flex-1 space-y-3 text-center md:text-left text-gray-700 text-xs">
                    <h2 className="text-xl font-bold text-gray-800">
                      {w.title}
                    </h2>

                    <p>
                      <span className="font-semibold">Venue:</span> {w.venue}
                    </p>

                    <p>
                      <span className="font-semibold">Date:</span> {w.date}
                    </p>

                    <p>
                      <span className="font-semibold">Fees:</span> {w.fees}
                    </p>

                    <p className="whitespace-pre-line">
                      <span className="font-semibold">Description:</span>
                      <br />
                      {w.description?.trim()
                        ? w.description
                        : "No description available"}
                    </p>

                    {w.register_url && (
                      <a
                        href={w.register_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="text-l font-bold text-red-600">
                          Register Here
                        </p>
                      </a>
                    )}

                    {w.resource_link && (
                      <a
                        href={w.resource_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="text-l mt-2 font-bold text-blue-600">
                          Attend Live Workshop
                        </p>
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 mt-10">No upcoming course</p>
            )}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Language Cell
          </h2>
          <p className="mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-left">
            The Language Cell, established in 2016 under the Students' Academic
            Board, promotes linguistic and cultural exchange in both Indian and
            international contexts. It offers basic and elementary language
            courses year-round in small groups, taught by experienced tutors
            using modern methods. With hundreds of students enrolling each year,
            the Cell supports skill-building for global experiences, domestic
            cross-cultural exchanges, and English proficiency for non-native
            speakers.
          </p>

          <ul className="list-disc pl-5 mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-left">
            <li>
              Introduce campus members to foreign languages for academic access
              and global exposure.
            </li>
            <li>
              Support exchange students in adapting to foreign cultures and
              improving communication.
            </li>
            <li>
              Provide resources for learning regional languages to help
              non-locals acclimate.
            </li>
            <li>
              Organize academic and spoken English courses to enhance writing,
              communication, and job readiness.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Language Cell Team
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {LANGUAGE_TEAM.length > 0 ? (
              LANGUAGE_TEAM.map(
                ({ name, post, Photo, phone, email, linkedin }) => (
                  <Card
                    key={name}
                    className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl"
                  >
                    <div className="w-[200px] h-[200px] rounded-xl overflow-hidden">
                      {Photo}
                    </div>

                    <h3 className="text-xl font-semibold">{name}</h3>

                    <p className="text-gray-600 px-2">{post}</p>

                    <div className="flex items-center justify-center space-x-6">
                      <a href={`tel:${phone}`} aria-label="Phone">
                        <Phone className="h-5 w-5 text-gray-700 hover:text-blue-500" />
                      </a>
                      <a href={`mailto:${email}`} aria-label="Email">
                        <Mail className="h-5 w-5 text-gray-700 hover:text-red-500" />
                      </a>
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon className="h-5 w-5 text-gray-700 hover:text-blue-700" />
                      </a>
                    </div>
                  </Card>
                ),
              )
            ) : (
              <p className="text-center text-gray-500 text-lg mt-10">
                Team information not available
              </p>
            )}
          </div>
        </div>
      </section>

      {/* PREVIOUS LANGUAGE COURSES */}
      <section className="mt-20 pb-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title text-3xl md:text-4xl">
            Previous Language Courses
          </h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sortedPrevious.length > 0 ? (
              sortedPrevious.map((w) => (
                <div
                  key={w.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 space-y-4 border-[#091c53] border-2"
                >
                  <p className="text-lg font-semibold text-gray-800 text-center">
                    {w.title}
                  </p>

                  <div className="w-full">{w.Photo}</div>

                  <p className="text-gray-600">{w.date}</p>

                  {w.resource_link ? (
                    <a
                      href={w.resource_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-800 underline"
                    >
                      View Recording / Material
                    </a>
                  ) : (
                    <p className="text-gray-500 italic text-sm">
                      No Resources Available
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 mt-10">
                No previous courses
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
