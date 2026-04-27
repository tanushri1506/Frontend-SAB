"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Lightbulb, X } from "lucide-react";

export default function AboutSection({ animate }) {
  const [showFact, setShowFact] = useState(false);

  const factCardRef = useRef(null);
  const bulbButtonRef = useRef(null);

  const handleTriviaClick = () => {
  setShowFact((prev) => !prev);
};

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        showFact &&
        factCardRef.current &&
        !factCardRef.current.contains(event.target) &&
        bulbButtonRef.current &&
        !bulbButtonRef.current.contains(event.target)
      ) {
        setShowFact(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFact]);

  return (
    <section
      id="about"
      className="relative px-4 md:px-6 items-center container mx-auto pb-80 flex flex-col pt-40"
    >
      {/* Center Content (untouched) */}
      <Image
        src={"/sab/logos/sab-logo.png"}
        width={100}
        height={100}
        alt="sab-logo"
        className={`transition-transform duration-700 ease-out ${
          animate ? "rotate-0" : "-rotate-360"
        } transition-transform duration-600 ease-in-out hover:rotate-360`}
      />

      <h2 className="title-parent gradient-title text-3xl md:text-6xl text-center text-yellow-400 mt-10 cursor-pointer">
  {"Students' Academic Board".split("").map((char, i) => (
    <span
      key={i}
      className="title-letter inline-block"
      style={{ transitionDelay: `${i * 0.02}s` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</h2>

      <p className="mx-auto mt-5 max-w-[700px] text-gray-200 md:text-l/relaxed text-center">
        A student-led body dedicated to promoting academic excellence across
        the IIT Guwahati student community.
      </p>

      
    </section>
  );
}