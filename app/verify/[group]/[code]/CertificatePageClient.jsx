"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Download,
  FileText,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchCertificate } from "@/lib/certificate";
import CertificateGuide from "@/components/CertificateGuide";

export default function CertificatePageClient({ group, code }) {
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchCertificate(group, code)
      .then((data) => {
        setCertificate(data);
        setNotFound(false);
      })
      .catch(() => {
        setNotFound(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [group, code]);

  const handleDownload = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/send-certificate/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        credential_id: certificate.credential_id,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Something went wrong");
      return;
    }

    alert("Certificate has been sent to your registered email.");
  } catch (err) {
    console.error(err);
    alert("Failed to send certificate.");
  }
};

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg text-gray-600">Loading certificate...</p>
      </div>
    );
  }

  if (notFound || !certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="max-w-xl w-full p-8 text-center shadow-lg rounded-2xl">
          <h1 className="text-3xl font-bold text-[#091c53] mb-4">
            Certificate Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            This certificate link is invalid, inactive, or no longer available.
          </p>
          <Button asChild className="bg-[#091c53] hover:bg-[#0f2b81]">
            <Link href="/">Go to SAB Home</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef3ff] to-white py-10 px-4 md:px-6 mt-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <Button
            asChild
            variant="ghost"
            className="text-[#091c53] hover:bg-blue-50"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to SAB
            </Link>
          </Button>
        </div>

        <Card className="rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-[#091c53] text-white px-6 md:px-10 py-10 text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/sab/logos/sab-logo.png"
                alt="SAB Logo"
                width={90}
                height={90}
                className="rounded-full"
              />
            </div>

            <h1 className="text-2xl md:text-4xl font-bold">
              Students' Academic Board
            </h1>

            <p className="text-yellow-300 mt-2 text-sm md:text-lg">
              Indian Institute of Technology Guwahati
            </p>

          </div>

          <div className="px-6 md:px-10 py-8">
            <div className="text-center mb-10">
              <p className="uppercase tracking-[0.2em] text-sm text-gray-500 font-medium">
                Credential Verification
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#091c53] mt-2">
                {certificate.recipient_name}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              

             <Card className="p-6 rounded-2xl border border-gray-200 shadow-sm">
    <h3 className="text-xl font-semibold text-[#091c53] mb-5">
      Credential Details
    </h3>

    <div className="space-y-5">

      <div>
        <p className="text-sm text-gray-500 mb-2">Certificate Type</p>
        <p className="text-lg font-semibold text-gray-900 leading-snug">
          {certificate.certificate_type_display ||
            certificate.certificate_type ||
            "-"}
        </p>
      </div>

      <InfoRow label="Designation / Department" value={certificate.designation} />
      <InfoRow label="Academic Session" value={certificate.session} />
      <InfoRow
        label="Issue Date"
        value={new Date(certificate.issue_date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      />
    </div>
  </Card>

              

              <Card className="p-6 rounded-2xl border border-gray-200 shadow-sm">
    <h3 className="text-xl font-semibold text-[#091c53] mb-5">
      Verification Info
    </h3>

    <div className="space-y-5">
      <div>
        <p className="text-sm text-gray-500 mb-2">Credential ID</p>
        <div className="rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 font-mono text-sm md:text-base text-gray-900 break-all">
          {certificate.credential_id || "-"}
        </div>
      </div>

      <InfoRow
        label="Certificate Number"
        value={certificate.certificate_number}
      />

      <div>
        <p className="text-sm text-gray-500 mb-2">Verification Status</p>
        <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-2 text-green-700 font-semibold">
          <CheckCircle2 className="h-5 w-5" />
          Verified Credential
        </div>
      </div>
    </div>
  </Card>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button
                asChild
                size="lg"
                className="bg-[#091c53] hover:bg-[#0f2b81] rounded-xl"
              >
                <a
                  href={certificate.certificate_file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Certificate
                </a>
              </Button> */}

              <Button
                variant="outline"
                size="lg"
                className="text-white rounded-xl bg-[#091c53] hover:bg-[#0f2b81] hover:text-white "
                onClick={handleDownload}
              >
                <Download className="mr-2 h-5 w-5 text-white" />
                Download Certificate
              </Button>
            </div>
            <CertificateGuide/>
          </div>
        </Card>

        <div className="text-center mt-8 text-sm text-gray-500 px-4">
          This is an official verification page issued by the Students'
          Academic Board, IIT Guwahati.
        </div>

        
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-base md:text-lg font-medium text-gray-900 break-words">
        {value || "-"}
      </p>
    </div>
  );
}