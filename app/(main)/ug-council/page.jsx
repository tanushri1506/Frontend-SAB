"use client";

import { Card } from "@/components/ui/card";
import { getData } from "@/lib/ug-council";
import { useState, useEffect } from "react";
import { getBranchReps } from "@/lib/branch-reps";
import { getDUPC } from "@/lib/dupc";
import { LinkedinIcon, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { fetchAcademicSession } from "@/lib/home";
import RequestAccessModal from "@/components/RequestAccessModal";
import HoverInfoBox from "@/components/HoverInfoBox";
import { Download } from "lucide-react";

const Page = () => {
  const [branchReps, setBranchReps] = useState([]);
  const [dupcData, setDupcData] = useState([]);
  const [UG_COUNCIL, setUgCouncil] = useState([]);
  const [BTECH_REP, setBTechRep] = useState([]);
  const [BDES_REP, setBDesRep] = useState([]);
  // const [tenureOptions, setTenureOptions] = useState([]);
  const [currentTenure, setCurrentTenure] = useState("");
  // BR
const [brTenure, setBrTenure] = useState("");
const [brTenureOptions, setBrTenureOptions] = useState([]);

// DUPC
const [dupcTenure, setDupcTenure] = useState("");
const [dupcTenureOptions, setDupcTenureOptions] = useState([]);

  // OTP Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    fetchAcademicSession()
      .then((res) => setCurrentTenure(res.current_year))
      .catch(console.error);
  }, []);

  useEffect(() => {
  if (!currentTenure) return;

  getDUPC("all")
    .then((res) => {
      setDupcData(res);
    })
    .catch(console.error);
}, [currentTenure]);

const visibleDUPC = dupcTenure
  ? dupcData.filter((d) => d.tenure === dupcTenure)
  : [];

useEffect(() => {
  if (!dupcData.length) return;

  const years = [...new Set(dupcData.map((d) => d.tenure))].sort((a, b) => {
    const yearA = parseInt(a.split("-")[0]);
    const yearB = parseInt(b.split("-")[0]);
    return yearB - yearA;
  });

  setDupcTenureOptions(years);

  if (years.length > 0) {
    setDupcTenure(years[0]);
  }
}, [dupcData]);

  useEffect(() => {
    getBranchReps("all")
      .then((res) => {
        setBranchReps(res);

        const tenures = [...new Set(res.map((r) => r.tenure))].sort((a, b) => {
          const yearA = parseInt(a.split("-")[0]);
          const yearB = parseInt(b.split("-")[0]);
          return yearB - yearA; // Descending order
        });

        setBrTenureOptions(tenures);
if (tenures.length > 0) {
  setBrTenure(tenures[0]);
}
      })
      .catch((error) => {
        console.error("Error fetching branch reps:", error);
        if (currentTenure) {
          getBranchReps(currentTenure)
            .then((res) => {
              setBranchReps(res);
              setBrTenure(currentTenure);
              setBrTenureOptions([currentTenure]);
            })
            .catch(console.error);
        }
      });
  }, [currentTenure]);

  const visibleBranchReps = brTenure
    ? branchReps.filter((r) => r.tenure === brTenure)
    : [];

  useEffect(() => {
    if (!currentTenure) return;

    Promise.all([getData("ug"), getData("council")])
      .then(([ugData, councilData]) => {
        setUgCouncil(
          ugData.map((m) => ({
            name: m.name || "",
            post: m.post || "",
            phone: m.phone || "",
            email: m.email || "",
            linkedin: m.linkedin || "",
            Photo: m.photo ? (
              <Image
                src={m.photo}
                alt={m.name}
                width={200}
                height={200}
                className="object-cover"
              />
            ) : null,
          })),
        );

        setBTechRep(
          councilData
            .filter(
              (m) =>
                m.post?.includes("B.Tech Representative") &&
                m.tenure === currentTenure,
            )
            .map((m) => ({
              name: m.name || "",
              post: m.post || "",
              phone: m.phone || "",
              email: m.email || "",
              linkedin: m.linkedin || "",
              Photo: m.photo ? (
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              ) : null,
            })),
        );

        setBDesRep(
          councilData
            .filter(
              (m) =>
                m.post?.includes("B.Des Representative") &&
                m.tenure === currentTenure,
            )
            .map((m) => ({
              name: m.name || "",
              post: m.post || "",
              phone: m.phone || "",
              email: m.email || "",
              linkedin: m.linkedin || "",
              Photo: m.photo ? (
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              ) : null,
            })),
        );
      })
      .catch(console.error);
  }, [currentTenure]);

  return (
    <div>
      {/* Undergraduate Council */}
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            Undergraduate Council
          </h2>
          <p className="mx-auto mt-3 max-w-[900px] text-gray-500 md:text-l/relaxed">
            The SAB-UG Council is a constituent body of the SAB with members as:
            the student member of the DUPC or CUPC and/or PhD students nominated
            by the Chairperson of the DUPC or CUPC of each academic department
            or center, B.Tech Representative (SAB), B.Des Representative (SAB).
            The activities of the SAB-U.G. council shall be coordinated by the
            Bachelors' Programme Representatives. Each DUPC or CUPC can initiate
            various departmental and inter-departmental activity by means of
            proper formal procedure involving General Secretary and Joint
            Secretary, SAB.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-10 text-3xl md:text-4xl">
            Bachelors' Programme Representatives
          </h2>
          <div className="mx-auto gap-6 mt-12 flex justify-center flex-wrap">
            {[...BTECH_REP, ...BDES_REP].map(
              ({ name, post, Photo, phone, email, linkedin }) => (
                <Card
                  key={`${name}-${post}`}
                  className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl w-4xl max-w-sm border-[#091c53] border-2 hover:scale-[1.08] ease-out transition-all duration-300 hover:shadow-[#091c53] rounded-xl"
                >
                  <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-yellow-400 border-4">
                    {Photo}
                  </div>
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="text-gray-600 px-2">{post}</p>
                  <div className="flex items-center justify-center space-x-6">
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
              ),
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 md:px-6 text-center mb-10">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            Branch Representatives
          </h2>

          {brTenureOptions.length > 0 && (
            <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
              <select
                value={brTenure}
                onChange={(e) => setBrTenure(e.target.value)}
                className="px-4 py-2 border rounded-md"
              >
                {brTenureOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setModalType("BR");
                }}
                title="Request BR Data"
                className="inline-flex items-center justify-center p-2 rounded-md border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <Download className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {visibleBranchReps.map(
              ({ id, name, post, photo, phone, email, linkedin, extra_por }) => (
                 <HoverInfoBox key={id} content={extra_por}>
                <Card
                  className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl border-[#091c53] border-2 hover:scale-[1.08] ease-out transition-all duration-300 hover:shadow-[#091c53] rounded-xl"
                >
                  <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-yellow-400 border-4">
                    <Image
                      src={photo || "/placeholder.jpg"}
                      alt={name}
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="text-gray-600 px-2">{post}</p>
                  <div className="flex items-center justify-center space-x-6">
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
                </HoverInfoBox>
              ),
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 md:px-6 text-center mb-10">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            DUPC
          </h2>

          {dupcTenureOptions.length > 0 && (
            <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
              <select
                value={dupcTenure}
                onChange={(e) => setDupcTenure(e.target.value)}
                className="px-4 py-2 border rounded-md"
              >
                {dupcTenureOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setModalType("DUPC");
                }}
                title="Request DUPC Data"
                className="inline-flex items-center justify-center p-2 rounded-md border border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <Download className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {visibleDUPC.map(
              ({ id, name, post, photo, phone, email, linkedin, extra_por }) => (
                <HoverInfoBox key={id} content={extra_por}>
                <Card
                  className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl border-[#091c53] border-2 hover:scale-[1.08] ease-out transition-all duration-300 hover:shadow-[#091c53] rounded-xl"
                >
                  <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-yellow-400 border-4">
                    <Image
                      src={photo || "/placeholder.jpg"}
                      alt={name}
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="text-gray-600 px-2">{post}</p>
                  <div className="flex items-center justify-center space-x-6">
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
                </HoverInfoBox>
              ),
            )}
          </div>
        </div>
      </section>

      <RequestAccessModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  requestType={modalType}
  session={modalType === "BR" ? brTenure : dupcTenure}
/>
    </div>
  );
};

export default Page;
