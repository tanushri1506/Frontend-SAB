"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { BarLoader } from "react-spinners";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#council", label: "Executive Council" },
  { href: "/#events", label: "Events" },
  { href: "/ug-council", label: "UG Council" },
  { href: "/phd-council", label: "Phd Council" },
  { href: "/rsf", label: "RSF" },
  { href: "/faaq", label: "FAAQs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

const eventDropdown = [
  { label: "RIC", href: "/ric" },
  { label: "Workshops", href: "/workshops" },
  { label: "Language Courses", href: "/language" },
  { label: "PAL", href: "/pal" },
];

const Header = () => {
  const path = usePathname();
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      setMenuOpen(false);
    }, 400);
    return () => clearTimeout(timeout);
  }, [path]);

  useEffect(() => {
  function handleClickOutside(event) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setOpenDropdown(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <header className="fixed top-0 w-full backdrop-blur z-50 bg-[#091c53] text-white">
      <nav className="container mx-auto px-4 h-14 flex items-center relative">

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">

          {navLinks.map((link) => {
            if (link.label === "Events") {
              return (
                <div
  key={link.href}
  className="relative flex items-center gap-1 group"
>{/* Events Link */}
                  <Link
                    href={link.href}
                    className="text-sm font-medium hover:text-yellow-400 transition"
                  >
                    {link.label}
                  </Link>

                  {/* Dropdown Arrow */}
                  <ChevronDown
    size={16}
    className="transition-transform group-hover:rotate-180"
  />


                  {/* Dropdown Menu */}
                   <div className="absolute top-full mt-1 w-44 bg-white text-black rounded-lg shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
  {eventDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                 
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-yellow-400 transition whitespace-nowrap"
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden ml-auto p-2 text-gray-200 hover:text-yellow-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden text-gray-700 bg-white shadow-md border-t">
          <div className="flex flex-col p-4 space-y-2">

            {navLinks.map((link) => {
  if (link.label === "Events") {
    return (
      <div key={link.href}>

        {/* Row */}
        <div className="flex justify-between items-center">
          
          {/* Navigate to section */}
          <Link
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>

          {/* Toggle dropdown ONLY */}
          <ChevronDown
            size={16}
            className={`cursor-pointer transition-transform ${
              mobileDropdownOpen ? "rotate-180" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setMobileDropdownOpen(!mobileDropdownOpen);
            }}
          />
        </div>

        {/* Dropdown */}
        {mobileDropdownOpen && (
          <div className="ml-4 mt-2 flex flex-col space-y-1">
            {eventDropdown.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setMobileDropdownOpen(false);
                  setMenuOpen(false);  
                }}
                className="text-sm text-gray-600 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      key={link.href}
      href={link.href}
      onClick={() => setMenuOpen(false)}
      className="text-sm font-medium hover:text-gray-400 hover:underline transition"
    >
      {link.label}
    </Link>
  );
})}
          </div>
        </div>
      )}

      {loading && <BarLoader width={"100%"} color="#FACC15" />}
    </header>
  );
};

export default Header;