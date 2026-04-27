import React from "react";
import { DEPARTMENTS } from "@/lib/rsf";

const page = () => {
  return (
    <div className="pb-10">
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            Research Scholar Forum
          </h2>
          <p className="mx-auto mt-3 max-w-[900px] text-gray-500 md:text-l/relaxed text-left">
            RSF was formed to increase faculty-student and student-student
            interactions by organizing talks to disseminate experiences,
            knowledge, learning etc. Each event should be kept in record by
            respective departmental DPPC/CPPC/SPPC. The forum will be
            independent to form managers in their group.
          </p>
          <ul className=" list-disc pl-5 mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-left">
            <li>
              Keep track of all award winning work going in department. An
              interactive session with the award-winning faculty can bring
              changes in work of RS and motivate them as well.
            </li>
            <li>
              Organise short presentation competition, where RS shall present
              their research in stipulated short interval of time. This shall be
              highly helpful for them during interview process
            </li>
            <li>
              Debates can be organised with the same theme of promoting and
              letting RS aware of various advancement in their field of research
              or any other range of topics
            </li>
          </ul>
          <div className="container max-w-[900px] overflow-x-auto mt-6 mx-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-white">
                  <th className="px-4 py-2 text-left font-semibold">
                    Department/Centre/School
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">Website</th>
                </tr>
              </thead>
              <tbody>
                {DEPARTMENTS.map((dept, index) => (
                  <tr
                    key={dept.name}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="px-4 py-2 text-left">{dept.name}</td>
                    <td className="px-4 py-2 text-left">
                      {dept.link ? (
                        <a
                          href={dept.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Click Here
                        </a>
                      ) : (
                        <span className="text-gray-400 italic">
                          Not available
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
