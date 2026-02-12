"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

type Experience = {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
};

export default function CareerJourney() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("/api/experiences")
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch(console.error);
  }, []);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24">
      {/* HEADER */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold">Career Journey</h2>
        <p className="mt-3 text-gray-600">Professional experience timeline</p>
      </div>

      {/* TIMELINE */}
      <ul className="relative space-y-20">
        <span className="absolute left-1.5 top-0 h-full w-1 bg-gray-300 md:hidden" />

        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;

          return (
            <li key={exp.id} className="relative">
              {/* DESKTOP */}
              <div className="relative hidden md:grid grid-cols-[1fr_40px_1fr] items-start">
                <div className="flex justify-end me-10">
                  {isEven ? (
                    <Description text={exp.description} />
                  ) : (
                    <Meta exp={exp} align="right" />
                  )}
                </div>

                <div className="relative flex justify-center min-h-full">
                  <span className="absolute -top-4 -bottom-16  w-2 bg-gray-300" />
                  <span className="absolute -top-4 z-10 h-4 w-4 rounded-full bg-white" />
                  <span className="absolute -top-3 z-10 h-2 w-2 rounded-full bg-indigo-600" />
                </div>

                <div className="flex justify-start ms-10">
                  {isEven ? (
                    <Meta exp={exp} align="left" />
                  ) : (
                    <Description text={exp.description} />
                  )}
                </div>
              </div>

              {/* MOBILE */}
              <div className="relative flex gap-6 md:hidden">
                <span className="absolute top-1 z-10 h-4 w-4 rounded-full bg-white" />
                <span className="absolute top-1 z-10 m-1 h-2 w-2 rounded-full bg-indigo-600" />

                <div className="space-y-3 ms-10">
                  <Meta exp={exp} align="left" />
                  <Description text={exp.description} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Meta({
  exp,
  align,
}: {
  exp: {
    period: string;
    role: string;
    company: string;
  };
  align: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <span className="text-sm font-medium text-indigo-600">
        {exp.period}
      </span>
      <h3 className="text-lg font-semibold">{exp.role}</h3>
      <p className="text-sm text-gray-600">{exp.company}</p>
    </div>
  );
}

function Description({ text }: { text: string }) {
  return (
    <div className="prose  [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal max-w-md rounded-lg bg-white p-5 text-sm text-gray-700 shadow-sm leading-loose ">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}
