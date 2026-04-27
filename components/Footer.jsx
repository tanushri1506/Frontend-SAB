import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-10 pb-6 px-6 md:px-16 border-t-[#091c53] border-2">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="flex flex-col items-start md:items-center md:justify-center relative">
  <div className="relative group">
    <Image
  src="/sab/logos/sab-logo.png"
  alt="SAB Logo"
  className="object-contain cursor-pointer 
             transition-all duration-300 ease-out
             group-hover:scale-125 group-hover:-translate-y-1 group-hover:drop-shadow-xl"
  width={128}
  height={128}
/>

    <div
      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 
opacity-0 group-hover:opacity-100 
scale-95 group-hover:scale-100
transition-all duration-300 ease-out
bg-white text-gray-700 text-xs md:text-sm 
px-3 py-2 rounded-lg shadow-lg border border-gray-200 z-50
pointer-events-none"
    >
      The SAB logo symbolizes two people connecting / joining hands. The
      logo is an abstract depiction of help and support, as the main
      objective of the board is to address the problems of students
      and link them to the Academics directly.

      <div
        className="absolute left-1/2 -translate-x-1/2 top-full 
        w-2 h-2 bg-white border-r border-b border-gray-200 
        rotate-45"
      ></div>
    </div>
  </div>

  <p className="mt-4 text-[#091c53] font-bold text-xl">SAB IITG</p>
</div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-[#091c53]">
            Useful Links
          </h2>
          <ul className="space-y-1.5 text-sm text-gray-600">
            <li className="hover:text-blue-800">
              <a href="https://academic.iitg.ac.in/acad/coursewise_student_list/">
                CourseWise Students List
              </a>
            </li>
            <li className="hover:text-blue-800">
              <a href="https://www.iitg.ac.in/acad/extra_pdf/NoConversionCert_new.pdf">
                CPI Conversion Certificate
              </a>
            </li>
            <li className="hover:text-blue-800">
              <a href="https://www.iitg.ac.in/acad/extra_pdf/No_Migration_Certificate.pdf">
                No Issuance of Migration Certificate
              </a>
            </li>
            <li className="hover:text-blue-800">
              <a href="https://www.iitg.ac.in/aer/mou.php">MoUs</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="https://iitg.ac.in/acad/admission/imp_info/fee.php">
                Fee Structure
              </a>
            </li>
            <li className="hover:text-blue-800">
              <a href="https://www.iitg.ac.in/sab/rnd.html">Summer Training</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="https://www.iitg.ac.in/acad/extra_pdf/MediumofInstruction.pdf">
                Medium of Instruction
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-[#091c53]">
            Senate(Intranet Link)
          </h2>
          <ul className="space-y-1.5 text-sm text-gray-600">
            <li className="hover:text-blue-800">
              <a href="http://intranet.iitg.ac.in/acad/committee/Senate_Member.php">
                Senate Members
              </a>
            </li>
            <li className="hover:text-blue-800">
              <a href="http://intranet.iitg.ac.in/acad/senate/senate_minutes.php">
                Senate Minutes
              </a>
            </li>
            <li className="hover:text-blue-800">
              <a href="http://intranet.iitg.ac.in/acad/committee/ippc.php">
                IPPC
              </a>
            </li>
            <li className="hover:text-blue-800">
              <a href="http://intranet.iitg.ac.in/acad/committee/iupc.php">
                IUPC
              </a>
            </li>
            <li className="hover:text-blue-800">
              <a href="http://intranet.iitg.ac.in/acad/committee/iadc.php">
                IADC
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-[#091c53]">Forms</h2>
          <ul className="space-y-1.5 text-sm text-gray-600">
            <li className="hover:text-blue-800">
              <a href="https://iitg.ac.in/acad/forms.php/">General Forms</a>
            </li>

            <li className="hover:text-blue-800">
              <a href="https://intranet.iitg.ac.in/acad/trans_certificate_issue.php">
                Transcript/Certificates
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-[#091c53]">
            Resources
          </h2>
          <ul className="space-y-1.5 text-sm text-gray-600">
            <li className="hover:text-blue-800">
              <a href="https://www.iitg.ac.in/acad/academic_ordinance.php">
                Academic Ordinance & Rules
              </a>
            </li>
            <li className="hover:text-blue-800">
              <a href="https://iitg.ac.in/acad/academic_calendar.php">
                Academic Calendar
              </a>
            </li>
            <li className="hover:text-blue-800">
              <a href="https://iitg.ac.in/acad/offered_courses.php">
                Offered Courses
              </a>
            </li>
            <li className="hover:text-blue-800">
              <a href="https://iitg.ac.in/acad/programmes/bachelors.php/">
                Undergraduate Minor Programmes
              </a>
            </li>
            <li className="hover:text-blue-800">
              <a href="https://iitg.ac.in/acad/time_table.php">
                Class Time Table
              </a>
            </li>
            <li className="hover:text-blue-800">
              <a href="https://iitg.irins.org/">Faculty Profiles</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="https://iitg.ac.in/acad/email-contacts/">Email Contacts</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p className="text-[#091c53]">
          © 2026 Students' Academic Board, IIT Guwahati
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://www.instagram.com/sab.iitg/">
            <Instagram className="hover:text-blue-800" />
          </a>
          <a href="https://www.youtube.com/channel/UCQVwt0WDMms4G8usTWRFmhg">
            <Youtube className="hover:text-blue-800" />
          </a>
          <a href="https://www.facebook.com/sab.iitg">
            <Facebook className="hover:text-blue-800" />
          </a>
          <a href="https://www.linkedin.com/company/iitgsab/mycompany/">
            <Linkedin className="hover:text-blue-800" />
          </a>
          <a href="https://twitter.com/sabiitg">
            <Twitter className="hover:text-blue-800" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
