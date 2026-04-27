"use client";

import { Card } from "@/components/ui/card";
import { LinkedinIcon, Mail, Phone, Download } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";
import { useDPPC, useCPPC, useSPPC, useDoctoralRep } from "@/lib/phd-council";
import HoverInfoBox from "@/components/HoverInfoBox";
import RequestAccessModal from "@/components/RequestAccessModal";

const Page = () => {
  const { DPPC, loading: loadingDPPC } = useDPPC();
  const { CPPC, loading: loadingCPPC } = useCPPC();
  const { SPPC, loading: loadingSPPC } = useSPPC();
  const { REP, loading: loadingREP } = useDoctoralRep();

  const [isModalOpen, setIsModalOpen] = useState(false);
const [modalType, setModalType] = useState("");

  if (loadingDPPC || loadingCPPC || loadingSPPC || loadingREP) {
    return <p className="text-center mt-20">Loading PhD Council...</p>;
  }

  return (
    <div>
      {/* PhD Council Info */}
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            PhD Council
          </h2>
          <p className="mx-auto mt-3 max-w-[900px] text-gray-500 md:text-l/relaxed">
            The SAB-PhD Council is a constituent body of the SAB with members
            as: the student member of the DPPC or CPPC and/or PhD students
            nominated by the Chairperson of the DPPC or CPPC of each academic
            department or center, and the Doctoral Representative of the SAB.
            The activities of the SAB-PhD council shall be coordinated by the
            Doctoral Representative of the SAB. Each DPPC or CPPC can initiate
            various departmental and inter-departmental activity by means of
            proper formal procedure involving/apprising General Secretary, SAB.
          </p>
        </div>
      </section>

      {/* Doctoral Representatives */}
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            Doctoral Representative
          </h2>


          <div className="mx-auto mt-12 flex justify-center px-4">
            {REP.map(({ name, post, Photo, phone, email, linkedin }) => (
              <Card
                key={name}
                className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl w-4xl max-w-sm border-[#091c53] border-2 hover:scale-[1.08] ease-out transition-all duration-300 hover:shadow-[#091c53] rounded-xl"
              >
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-yellow-400 border-4">
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
            ))}
          </div>
        </div>
      </section>

      {/* DPPC Members */}
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center mb-10">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            DPPC Student Representatives
          </h2>

          <div className="mt-4 flex justify-center">
  <button
  onClick={() => {
    setIsModalOpen(true);
    setModalType("DPPC");
  }}
  title="Request DPPC Data"
  className="inline-flex items-center justify-center p-2 rounded-md border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-all duration-200"
>
  <Download className="h-4 w-4" />
</button>
</div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {DPPC.map(({ id, name, post, Photo, phone, email, linkedin, extra_por }) => (
              <HoverInfoBox key={id ?? `${name}-${post}`} content={extra_por}>
                <Card
                className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl border-[#091c53] border-2 hover:scale-[1.08] ease-out transition-all duration-300 hover:shadow-[#091c53] rounded-xl"
              >
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-yellow-400 border-4">
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
              </HoverInfoBox>
            ))}
          </div>
        </div>
      </section>

      {/* CPPC Members */}
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center mb-10">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            CPPC Student Representatives
          </h2>

          <div className="mt-4 flex justify-center">
  <button
  onClick={() => {
    setIsModalOpen(true);
    setModalType("CPPC");
  }}
  title="Request CPPC Data"
  className="inline-flex items-center justify-center p-2 rounded-md border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-all duration-200"
>
  <Download className="h-4 w-4" />
</button>
</div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {CPPC.map(({ id, name, post, Photo, phone, email, linkedin, extra_por }) => (
              <HoverInfoBox key={id ?? `${name}-${post}`} content={extra_por}>
                <Card
                className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl border-[#091c53] border-2 hover:scale-[1.08] ease-out transition-all duration-300 hover:shadow-[#091c53] rounded-xl"
              >
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-yellow-400 border-4">
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
              </HoverInfoBox>
            ))}
          </div>
        </div>
      </section>

      {/* SPPC Members */}
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center mb-10">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            SPPC Student Representatives
          </h2>

          <div className="mt-4 flex justify-center">
  <button
  onClick={() => {
    setIsModalOpen(true);
    setModalType("SPPC");
  }}
  title="Request SPPC Data"
  className="inline-flex items-center justify-center p-2 rounded-md border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-all duration-200"
>
  <Download className="h-4 w-4" />
</button>
</div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {SPPC.map(({ id, name, post, Photo, phone, email, linkedin, extra_por }) => (
              <HoverInfoBox key={id ?? `${name}-${post}`} content={extra_por}>
                <Card
                className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl border-[#091c53] border-2 hover:scale-[1.08] ease-out transition-all duration-300 hover:shadow-[#091c53] rounded-xl"
              >
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-yellow-400 border-4">
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
              </HoverInfoBox>
            ))}
          </div>
        </div>
      </section>

      <RequestAccessModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  requestType={modalType}
/>
    </div>
  );
};

export default Page;
