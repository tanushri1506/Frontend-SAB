import { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function CertificateGuide() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-12 text-center">
      
        {/* Header */}
        <button
  onClick={() => setOpen(!open)}
  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#091c53] transition"
>
  <span>How to add this SAB certification to LinkedIn</span>

  <ChevronDown
    className={`h-4 w-4 transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
  />
</button>

        {/* Dropdown Content */}
       {/* Dropdown Content */}
{open && (
  <div className="mt-4 max-w-2xl mx-auto text-left text-gray-700 text-sm leading-relaxed space-y-6">
    
    {/* Step 1 */}
    <div>
      <p>
        <span className="font-medium">1.</span> Go to your LinkedIn profile and scroll down to{" "}
        <span className="font-medium">Licenses & Certifications</span>, then click the{" "}
        <span className="font-medium">‘+’</span> icon.
      </p>

      <Image
        src="/sab/guide/guide1.jpeg"   
        alt="Add certification on LinkedIn"
        width={800}
        height={400}
        className="mt-3 rounded-lg border"
      />
    </div>

    {/* Step 2 */}
    <div>
      <p>
        <span className="font-medium">2.</span> Choose the issuing organization as{" "}
        <span className="font-medium text-[#091c53]">
          Students' Academic Board (SAB), IIT Guwahati
        </span>
      </p>

      <Image
        src="/sab/guide/guide2.jpeg"
        alt="Select issuing organization"
        width={800}
        height={400}
        className="mt-3 rounded-lg border"
      />
    </div>

    {/* Step 3 */}
    <div>
      <p>
        <span className="font-medium">3.</span> Enter the{" "}
        <span className="font-medium">Credential ID</span> and{" "}
        <span className="font-medium">Credential URL</span>.
      </p>

      <Image
        src="/sab/guide/guide3.jpeg"
        alt="Enter credential details"
        width={800}
        height={400}
        className="mt-3 rounded-lg border"
      />
    </div>

  </div>
)}         
        
      
    </div>
  );
}