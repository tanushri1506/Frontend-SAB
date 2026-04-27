"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLinks } from "@/lib/links";

export default function FAQsPage() {
  // Academic section
const [activeAcademic, setActiveAcademic] = useState(null);
const [lockedAcademic, setLockedAcademic] = useState(null);

// Roll number section
const [activeRoll, setActiveRoll] = useState(null);
const [lockedRoll, setLockedRoll] = useState(null);

const links = useLinks();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">

      {/* 🔹 Heading */}
      <section className="text-center">
        <h2 className="gradient-title text-3xl md:text-4xl mt-10">
          Frequently Asked Academic Questions (FAAQs)
        </h2>
      </section>

      <section className="flex flex-col items-center gap-4 text-center">
  
  {/* Heading Line */}
  <p className="text-gray-600 text-sm md:text-base">
    Explore more academic FAQs or share your queries and suggestions with us.
  </p>

  {/* Buttons */}
  {links?.faq_url ? (
  <Link href={links.faq_url}>
    <Button size="lg" className="bg-[#091c53] hover:bg-[#0e2874]">
      Browse All FAQs
    </Button>
  </Link>
) : (
  <Button size="lg" disabled className="bg-gray-400 cursor-not-allowed">
    Browse All FAQs
  </Button>
)}

{links?.feedback_url ? (
  <a href={links.feedback_url} target="_blank">
    <Button variant="outline">
      Submit a Question / Feedback
    </Button>
  </a>
) : (
  <Button variant="outline" disabled>
    Submit a Question / Feedback
  </Button>
)}

</section>

      {/* 🔹 Academic Information */}
{/* 🔹 Academic Information */}
<section>
  <Card className="p-8 space-y-8 shadow-md border border-gray-100">
    <div className="space-y-3">
  <h2 className="text-2xl md:text-3xl font-semibold text-[#091c53]">
    Decoding Course Codes
  </h2>

  <p className="text-gray-600 text-sm md:text-base">
    Ever looked at a course and wondered what all the letters and numbers mean?
  </p>

  {/* Example Code */}
  <div className="flex justify-center mt-3">
    <div className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border text-lg md:text-xl font-mono tracking-widest shadow-sm">
      CH1102H
    </div>
  </div>

  <p className="text-gray-500 text-sm text-center">
    Hover or click on each part below to understand it
  </p>
</div>

    {/* Codes */}
    <div className="flex flex-wrap justify-center gap-2">
  {[
    { code: "AB", sub: "CH" },
    { code: "Y", sub: "1" },
    { code: "Z", sub: "1" },
    { code: "KMN", sub: "02H" },
  ].map(({ code, sub }) => (
    <div
      key={code}
      onMouseEnter={() => !lockedAcademic && setActiveAcademic(code)}
      onMouseLeave={() => !lockedAcademic && setActiveAcademic(null)}
      onClick={() => {
        setLockedAcademic(lockedAcademic === code ? null : code);
        setActiveAcademic(null);
      }}
      className={`px-5 py-2 rounded-lg cursor-pointer font-medium transition text-center
        ${
          lockedAcademic === code
            ? "bg-blue-200"
            : "bg-blue-50 hover:bg-blue-100 text-[#091c53]"
        }`}
    >
      {/* Main Code */}
      <div className="text-base font-semibold">{code}</div>

      {/* Sub text (analogy) */}
      <div className="text-[13px] text-gray-500">{sub}</div>
    </div>
  ))}
</div>

    {/* Content Box */}
    {(activeAcademic || lockedAcademic) && (
      <div className="relative p-5 border rounded-xl shadow-sm bg-gradient-to-br from-white to-blue-50 border-blue-100 space-y-4 text-sm">

        {/* Close Button */}
        {lockedAcademic && (
          <button
            onClick={() => {
              setLockedAcademic(null);
              setActiveAcademic(null);
            }}
            className="absolute top-3 right-3 bg-blue-200 text-[#091c53] hover:text-black text-lg"
          >
            ✕
          </button>
        )}

        {/* 🔥 SINGLE SOURCE OF TRUTH */}
        {(() => {
          const current = lockedAcademic || activeAcademic;

          return (
            <>
              {/* AB */}
              {current === "AB" && (
                <div>
                  <p><strong>First Part (AB):</strong> A two-letter code of academic division/interdisciplinary programme (CS, EE, ME, CE, DS, etc.).</p>
                </div>
              )}

              {/* Y */}
              {current === "Y" && (
                <div>
                  <p><strong>Second Part (Y):</strong>YKMN is a four-digit number in which [Y] is the level of the course and [KMN] is a 3-digit serial number (001–999).</p>
                  <p>Prescribed digits for levels:</p>
                  <div className="overflow-x-auto">
  <table className="w-full border mt-2 text-sm">
    <thead className="bg-gray-100">
      <tr>
        <th className="border p-2 text-left">Code</th>
        <th className="border p-2 text-left">Stage / Program Year</th>
      </tr>
    </thead>

    <tbody>
      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">0</td>
        <td className="border p-2">Preparatory Programme</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">1</td>
        <td className="border p-2">First Year of UG</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">2</td>
        <td className="border p-2">Second Year of UG</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">3</td>
        <td className="border p-2">Third Year of UG</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">4</td>
        <td className="border p-2">
          Fourth Year of UG OR First Year of MA / MSc / MBA
        </td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">5</td>
        <td className="border p-2">
          Second Year of MA / MSc / MBA OR First Year of M.Tech / M.Des / MS(R)
        </td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">6</td>
        <td className="border p-2">
          Second Year of M.Tech / M.Des / MS(R) OR Ph.D
        </td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">7</td>
        <td className="border p-2">Only Ph.D</td>
      </tr>
    </tbody>
  </table>
</div>
                </div>
              )}

              {/* Z */}
              {current === "Z" && (
                <div>
                  <p><strong>Third Part (Z):</strong>A letter corresponding to the type of the course.</p>

                  <div className="space-y-6">

  {/* Full Semester */}
  <div>
    <h3 className="font-semibold text-sm">Full Semester Courses</h3>

    <div className="overflow-x-auto">
      <table className="w-full border mt-2 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">Letter</th>
            <th className="border p-2 text-left">Type of Course</th>
          </tr>
        </thead>

        <tbody>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">A</td>
            <td className="border p-2">Compulsory with L ≠ 0 (Theory)</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">B</td>
            <td className="border p-2">Compulsory with L = 0 (Tutorial/Lab)</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">C</td>
            <td className="border p-2">Elective with L ≠ 0</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">D</td>
            <td className="border p-2">Elective with L = 0</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">E</td>
            <td className="border p-2">Project / Thesis / Seminar</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">F</td>
            <td className="border p-2">Non-Credit (C = 0)</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">G</td>
            <td className="border p-2">Open Elective</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">H</td>
            <td className="border p-2">Studio</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">I</td>
            <td className="border p-2">Internship / Entrepreneurship</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">J</td>
            <td className="border p-2">—</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">K</td>
            <td className="border p-2">—</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">L</td>
            <td className="border p-2">Students’ Affairs Course</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">M</td>
            <td className="border p-2">Minor</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Half Semester */}
  <div>
    <h3 className="font-semibold text-sm">Half Semester Courses</h3>

    <div className="overflow-x-auto">
      <table className="w-full border mt-2 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">Letter</th>
            <th className="border p-2 text-left">Type of Course</th>
          </tr>
        </thead>

        <tbody>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">N</td>
            <td className="border p-2">Half-Sem Compulsory with L ≠ 0 (Theory)</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">O</td>
            <td className="border p-2">Half-Sem Compulsory with L = 0 (Tutorial/Lab)</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">P</td>
            <td className="border p-2">Half-Sem Elective with L ≠ 0</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">Q</td>
            <td className="border p-2">Half-Sem Elective with L = 0</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">R</td>
            <td className="border p-2">Half-Sem Project / Thesis / Seminar</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">S</td>
            <td className="border p-2">Half-Sem Non-Credit (C = 0)</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">T</td>
            <td className="border p-2">Half-Sem Open Elective</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">U</td>
            <td className="border p-2">Half-Sem Studio</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">V</td>
            <td className="border p-2">Half-Sem Internship / Entrepreneurship</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">W</td>
            <td className="border p-2">—</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">X</td>
            <td className="border p-2">—</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">Y</td>
            <td className="border p-2">—</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="border p-2">Z</td>
            <td className="border p-2">Half-Sem Minor</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
                </div>
              )}

              {/* KMN */}
              {current === "KMN" && (
                <div>
                  <p><strong>Forth Part (KMN):</strong>YKMN is a four-digit number in which [Y] is the level of the course and [KMN] is a 3-digit serial number (001–999).</p>
                </div>
              )}
            </>
          );
        })()}
      </div>
    )}

<ul className="text-gray-600 text-sm list-disc list-inside space-y-2">
  <li>
    NPTEL courses will be numbered as <span className="font-medium">“NPTSSSS”</span>, where <span className="font-medium">SSSS</span> is a four-digit serial number (0001–9999).
  </li>

  <li>
    The structure of course numbers for <span className="font-medium">Online Degree programmes</span> is the same as regular programmes, except:
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        The division code is appended with an additional letter <span className="font-medium">“V”</span> (for virtual).
      </li>
      <li>
        The total length becomes <span className="font-medium">8 characters</span>.
      </li>
    </ul>
  </li>

  <li>
    Online Degree Course formats:
    <ul className="list-disc list-inside ml-4 mt-1">
      <li><span className="font-medium">[VAB][Y][KMN][Z]</span></li>
      <li><span className="font-medium">[ABV][Y][KMN][Z]</span></li>
    </ul>
  </li>
</ul>
  </Card>
</section>

      {/* 🔹 Roll Number Section */}
<section>
  <Card className="p-8 space-y-8 shadow-md border border-gray-100">
    <div className="space-y-3">
  <h2 className="text-2xl md:text-3xl font-semibold text-[#091c53]">
    Understanding Your Roll Number
  </h2>

  <p className="text-gray-600 text-sm md:text-base">
    Your roll number isn’t random — it encodes your year, program, department, and more.
  </p>

  {/* Example */}
  <div className="flex justify-center mt-3">
    <div className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 border text-lg md:text-xl font-mono tracking-widest shadow-sm">
      220106082
    </div>
  </div>

  <p className="text-gray-500 text-sm text-center">
    Hover or click on each segment below to decode it
  </p>
</div>

    {/* Interactive Parts */}
    <div className="flex flex-wrap justify-center gap-2">
  {[
    { code: "MM", sub: "22" },
    { code: "NN", sub: "01" },
    { code: "OO", sub: "06" },
    { code: "PPP", sub: "082" },
  ].map(({ code, sub }) => (
    <div
      key={code}
      onMouseEnter={() => !lockedRoll && setActiveRoll(code)}
      onMouseLeave={() => !lockedRoll && setActiveRoll(null)}
      onClick={() =>
        setLockedRoll(lockedRoll === code ? null : code)
      }
      className={`px-5 py-2 rounded-lg cursor-pointer font-medium transition text-center
        ${
          lockedRoll === code
            ? "bg-blue-200"
            : "bg-blue-50 hover:bg-blue-100 text-[#091c53]"
        }`}
    >
      {/* Main Code */}
      <div className="text-base font-semibold">{code}</div>

      {/* Analogy */}
      <div className="text-[13px] text-gray-400 -mt-1">{sub}</div>
    </div>
  ))}
</div>

    {/* Content Box */}
    {(activeRoll || lockedRoll) && (
  <div className="relative p-5 border rounded-xl shadow-sm bg-white space-y-4 text-sm">

    {lockedRoll && (
      <button
        onClick={() => {
          setLockedRoll(null);
          setActiveRoll(null);
        }}
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
      >
        ✕
      </button>
    )}

    {((lockedRoll || activeRoll) === "MM") && (
      <p><strong>First Part (MM):</strong> The year of enrolment. For example, a 
student admitted in the year say 2014, code will be 14 </p>
    )}

    {((lockedRoll || activeRoll) === "NN") && (
          <div>
            <p><strong>Second Part (NN):</strong> Program to which the 
student is admitted</p>
<p> Various program codes are given in the table below: </p>

            <div className="overflow-x-auto">
            <table className="w-full border mt-2 text-sm">
  <thead className="bg-gray-100">
    <tr>
      <th className="border p-2 text-left">Sl. No.</th>
      <th className="border p-2 text-left">Code</th>
      <th className="border p-2 text-left">Program</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-2">1</td>
      <td className="border p-2">01</td>
      <td className="border p-2">Bachelor of Technology (B.Tech)</td>
    </tr>
    <tr>
      <td className="border p-2">2</td>
      <td className="border p-2">02</td>
      <td className="border p-2">Bachelor of Design (B.Des)</td>
    </tr>
    <tr>
      <td className="border p-2">3</td>
      <td className="border p-2">21</td>
      <td className="border p-2">Master of Science (M.Sc.)</td>
    </tr>
    <tr>
      <td className="border p-2">4</td>
      <td className="border p-2">22</td>
      <td className="border p-2">Master of Arts (MA)</td>
    </tr>
    <tr>
      <td className="border p-2">5</td>
      <td className="border p-2">40</td>
      <td className="border p-2">Master of Business Administration (MBA)</td>
    </tr>
    <tr>
      <td className="border p-2">6</td>
      <td className="border p-2">41</td>
      <td className="border p-2">Master of Technology (M.Tech)</td>
    </tr>
    <tr>
      <td className="border p-2">7</td>
      <td className="border p-2">42</td>
      <td className="border p-2">Master of Design (M.Des)</td>
    </tr>
    <tr>
      <td className="border p-2">8</td>
      <td className="border p-2">43</td>
      <td className="border p-2">Master of Science by Research (MSR)</td>
    </tr>
    <tr>
      <td className="border p-2">9</td>
      <td className="border p-2">61</td>
      <td className="border p-2">Doctorate of Philosophy (Ph.D)</td>
    </tr>
    <tr>
      <td className="border p-2">10</td>
      <td className="border p-2">62</td>
      <td className="border p-2">
        Dual (M.Tech + Ph.D) in Computer Science and Engineering
      </td>
    </tr>
    <tr>
      <td className="border p-2">11</td>
      <td className="border p-2">63</td>
      <td className="border p-2">
        Dual degree [MS(Engg.) + Ph.D.] in Electronics and Electrical Engineering
      </td>
    </tr>
  </tbody>
</table>
</div>
          </div>
        )}

        
        {((lockedRoll || activeRoll) === "OO") && (
          <div>
            <p><strong>Third Part (OO):</strong> The 
Department/Center/School/Subject to which the student is admitted.</p>
<p>The codes for this 
part are as given below: </p>

            <div className="overflow-x-auto">
  <table className="w-full border mt-2 text-sm">
    <thead className="bg-gray-100">
      <tr>
        <th className="border p-2 text-left">Sl. No.</th>
        <th className="border p-2 text-left">Code</th>
        <th className="border p-2 text-left">
          Department / Center / School / Subject
        </th>
      </tr>
    </thead>

    <tbody>
      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">1</td>
        <td className="border p-2">01</td>
        <td className="border p-2">Computer Science and Engineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">2</td>
        <td className="border p-2">02</td>
        <td className="border p-2">
          For M.Tech / Ph.D / Dual degree: Electronics and Electrical Engineering <br />
          For B.Tech: Electronics and Communication Engineering
        </td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">3</td>
        <td className="border p-2">03</td>
        <td className="border p-2">Mechanical Engineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">4</td>
        <td className="border p-2">04</td>
        <td className="border p-2">Civil Engineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">5</td>
        <td className="border p-2">05</td>
        <td className="border p-2">Design</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">6</td>
        <td className="border p-2">06</td>
        <td className="border p-2">Biosciences and Bioengineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">7</td>
        <td className="border p-2">07</td>
        <td className="border p-2">Chemical Engineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">8</td>
        <td className="border p-2">08</td>
        <td className="border p-2">
          Only for B.Tech: Electronics and Electrical Engineering
        </td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">9</td>
        <td className="border p-2">21</td>
        <td className="border p-2">
          Physics <br />
          Engineering Physics (for B.Tech Students)
        </td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">10</td>
        <td className="border p-2">22</td>
        <td className="border p-2">
          Chemistry <br />
          Chemical Science and Technology (for B.Tech students)
        </td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">11</td>
        <td className="border p-2">23</td>
        <td className="border p-2">
          Mathematics <br />
          Mathematics and Computing (for B.Tech students)
        </td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">12</td>
        <td className="border p-2">24</td>
        <td className="border p-2">School of Business</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">13</td>
        <td className="border p-2">41</td>
        <td className="border p-2">
          Humanities and Social Sciences <br />
          Development Studies (for MA students)
        </td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">14</td>
        <td className="border p-2">49</td>
        <td className="border p-2">Indian Knowledge Systems</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">15</td>
        <td className="border p-2">50</td>
        <td className="border p-2">Data Science and Artificial Intelligence</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">16</td>
        <td className="border p-2">51</td>
        <td className="border p-2">Energy Sciences and Engineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">17</td>
        <td className="border p-2">52</td>
        <td className="border p-2">The Environment</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">18</td>
        <td className="border p-2">53</td>
        <td className="border p-2">Nanotechnology</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">19</td>
        <td className="border p-2">54</td>
        <td className="border p-2">Agro and Rural Technology</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">20</td>
        <td className="border p-2">55</td>
        <td className="border p-2">Linguistics Science and Technology</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">21</td>
        <td className="border p-2">56</td>
        <td className="border p-2">Intelligent Cyber Physical Systems</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">22</td>
        <td className="border p-2">57</td>
        <td className="border p-2">Disaster Management and Research</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">23</td>
        <td className="border p-2">58</td>
        <td className="border p-2">Sustainable Polymer</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">24</td>
        <td className="border p-2">59</td>
        <td className="border p-2">Health Science and Technology</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">25</td>
        <td className="border p-2">61</td>
        <td className="border p-2">M.Tech - Data Science</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">26</td>
        <td className="border p-2">62</td>
        <td className="border p-2">M.Tech - Food Science and Technology</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">27</td>
        <td className="border p-2">63</td>
        <td className="border p-2">MS(R) – E Mobility</td>
      </tr>
    </tbody>
  </table>
</div>
          </div>
        )}

        {((lockedRoll || activeRoll) === "PPP") && (
          <div className="space-y-2">
            <p>
              <strong>Fourth Part (PPP):</strong>  The three digits in this segment indicates the following:
            </p>
            <p>(a) The three digits for the B.Tech/B.Des/MA/M.Sc./M.Des/MS(R)/MBA/Dual degree 
programs including MS+Ph.D. & MTech + Ph.D/Ph.D. (admitted in July session) 
Indicate the serial number assigned in ascending order from 001 to 999. </p>
                                      
<p>(b) For the students admitted in the Ph.D. program during December-January session, 
the significance of the 3 digits are as given below: 
<br/>1. The first digit of the three digits is always marked as “1” for students 
admitted in this session. 
<br/>2. The next 2 digits Indicate the serial number assigned in ascending order 
from 01 to 99. </p>
<p>(c)  The significance of the three digits varies for the M.Tech programs as per given 
below:  
                <br/> 1. For the Dept. of Computer Science and Engineering, Biosciences and 
Bioengineering, Data Science, Food Science and Technology, and Robotics and Artificial 
Intelligence (CICPS), all the three digits starting from 001 to 999 indicate the serial 
number assigned in ascending order. 
<br/>2. For other Departments, the last two digits of the three digits Indicate serial 
number assigned in ascending order from 01 to 99. The first digit indicates the 
following:</p>

            <div className="overflow-x-auto">
  <table className="w-full border mt-2 text-sm">
    <thead className="bg-gray-100">
      <tr>
        <th className="border p-2 text-left">Sl. No.</th>
        <th className="border p-2 text-left">First Digit</th>
        <th className="border p-2 text-left">Department</th>
        <th className="border p-2 text-left">Specialization</th>
      </tr>
    </thead>

    <tbody>
      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">1</td>
        <td className="border p-2">0</td>
        <td className="border p-2">EEE</td>
        <td className="border p-2">Communication Engineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">2</td>
        <td className="border p-2">1</td>
        <td className="border p-2">EEE</td>
        <td className="border p-2">Power Engineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">3</td>
        <td className="border p-2">2</td>
        <td className="border p-2">EEE</td>
        <td className="border p-2">RF & Photonics</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">4</td>
        <td className="border p-2">3</td>
        <td className="border p-2">EEE</td>
        <td className="border p-2">SPML</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">5</td>
        <td className="border p-2">4</td>
        <td className="border p-2">EEE</td>
        <td className="border p-2">VLSI</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">6</td>
        <td className="border p-2">5</td>
        <td className="border p-2">EEE</td>
        <td className="border p-2">Systems Control & Automation</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">7</td>
        <td className="border p-2">0</td>
        <td className="border p-2">ME</td>
        <td className="border p-2">Aerodynamics & Propulsion</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">8</td>
        <td className="border p-2">1</td>
        <td className="border p-2">ME</td>
        <td className="border p-2">Computational Mechanics</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">9</td>
        <td className="border p-2">2</td>
        <td className="border p-2">ME</td>
        <td className="border p-2">Manufacturing Science & Engineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">10</td>
        <td className="border p-2">3</td>
        <td className="border p-2">ME</td>
        <td className="border p-2">Fluids and Thermal Engineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">11</td>
        <td className="border p-2">4</td>
        <td className="border p-2">ME</td>
        <td className="border p-2">Machine Design</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">12</td>
        <td className="border p-2">0</td>
        <td className="border p-2">CE</td>
        <td className="border p-2">Earth Systems Science and Engineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">13</td>
        <td className="border p-2">1</td>
        <td className="border p-2">CE</td>
        <td className="border p-2">Environment Engineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">14</td>
        <td className="border p-2">2</td>
        <td className="border p-2">CE</td>
        <td className="border p-2">Geotechnical Engineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">15</td>
        <td className="border p-2">3</td>
        <td className="border p-2">CE</td>
        <td className="border p-2">Infrastructure Engineering & Management</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">16</td>
        <td className="border p-2">4</td>
        <td className="border p-2">CE</td>
        <td className="border p-2">Structural Engineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">17</td>
        <td className="border p-2">5</td>
        <td className="border p-2">CE</td>
        <td className="border p-2">Transportation Systems Engineering</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">18</td>
        <td className="border p-2">6</td>
        <td className="border p-2">CE</td>
        <td className="border p-2">Water Resources Engineering & Management</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">19</td>
        <td className="border p-2">0</td>
        <td className="border p-2">CL</td>
        <td className="border p-2">Materials Science and Technology</td>
      </tr>

      <tr className="odd:bg-white even:bg-gray-50">
        <td className="border p-2">20</td>
        <td className="border p-2">1</td>
        <td className="border p-2">CL</td>
        <td className="border p-2">Petroleum Science and Technology</td>
      </tr>
    </tbody>
  </table>
</div>

            {/* Special Note */}
        <p className="text-gray-600">
          Note: If roll number starts with <strong>X</strong>, student is from exchange program.
        </p>
            
            </div>
        )}

        

      </div>
    )}
  </Card>
</section>

    </div>
  );
}