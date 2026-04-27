"use client";

import React from "react";
import { useWorkshops } from "@/lib/workshops";

const Page = () => {
  const { upcoming, previous } = useWorkshops();
  const sortedUpcoming = [...upcoming].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const sortedPrevious = [...previous].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <div>
      {/* UPCOMING WORKSHOPS */}
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            Upcoming Workshops
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
              <p className="text-gray-500 mt-10">No upcoming workshops</p>
            )}
          </div>
        </div>
      </section>

      {/* PREVIOUS WORKSHOPS */}
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center pb-10">
          <h2 className="gradient-title mt-10 text-3xl md:text-4xl">
            Previous Workshops
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
              <p className="text-gray-500 mt-10">No previous workshops</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
