"use client";

import { useState, useRef, useEffect } from "react";

const HoverInfoBox = ({ children, content }) => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState("right"); // right | left
  const ref = useRef(null);

  if (!content) return children;

  const lines = content.split("\n").filter((l) => l.trim() !== "");

  useEffect(() => {
    if (!show || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const spaceRight = window.innerWidth - rect.right;

    // if not enough space on right → flip left
    if (spaceRight < 260) {
      setPosition("left");
    } else {
      setPosition("right");
    }
  }, [show]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && (
  <div
    className={`absolute top-1/2 -translate-y-1/2 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 shadow-xl rounded-lg p-3 z-50 animate-fade-in
      ${position === "right" ? "left-full ml-3" : "right-full mr-3"}
    `}
  >
    <h4 className="text-sm font-semibold text-[#091c53] mb-2">
      Other Responsibilities Held
    </h4>

    <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
      {lines.map((line, idx) => (
        <li key={idx}>{line}</li>
      ))}
    </ul>
  </div>
)}
    </div>
  );
};

export default HoverInfoBox;