"use client";

const experiences = [
  {
    period: "2023 — Present",
    role: "IT Engineer",
    company: "Banking Company",
    description:
      "Design and maintain high availability Percona XtraDB Cluster across multi data center with HAProxy and PMM monitoring.",
  },
  {
    period: "2021 — 2023",
    role: "Fullstack Developer",
    company: "Tech Consultant",
    description:
      "Developed internal dashboards using Next.js, REST APIs, and optimized frontend performance.",
  },
  {
    period: "2019 — 2021",
    role: "Junior Software Engineer",
    company: "Software House",
    description:
      "Worked on backend services and supported frontend development while learning system architecture.",
  },
];

export default function CareerJourney() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24">
      {/* HEADER */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold">Career Journey</h2>
        <p className="mt-3 text-gray-600">Professional experience timeline</p>
      </div>

      {/* TIMELINE */}
      <ul className="relative space-y-20">
        {/* MOBILE VERTICAL LINE */}
        <span className="absolute left-1.5 top-0 h-full w-1 bg-gray-300 md:hidden" />

        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;

          return (
            <li key={index} className="relative">
              {/* ================= DESKTOP ================= */}
              <div className="relative hidden md:grid grid-cols-[1fr_40px_1fr] items-start">
                {/* LEFT */}
                <div className="flex justify-end me-10">
                  {isEven ? (
                    <Description text={exp.description} />
                  ) : (
                    <Meta exp={exp} align="right" />
                  )}
                </div>

                {/* CENTER */}
                <div className="relative flex justify-center">
                  {/* LINE */}
                  <span className="absolute top-7 bottom-0 w-2 h-35 bg-gray-300" />
                  {/* DOT */}
                  <span className="absolute -bottom-4 z-10  h-4 w-4 rounded-full bg-white" />
                  <span className="absolute top-1 z-10  h-2 w-2 rounded-full bg-indigo-600" />
                </div>

                {/* RIGHT */}
                <div className="flex justify-start ms-10">
                  {isEven ? (
                    <Meta exp={exp} align="left" />
                  ) : (
                    <Description text={exp.description} />
                  )}
                </div>
              </div>

              {/* ================= MOBILE ================= */}
              <div className="relative flex gap-6 md:hidden">
                {/* DOT */}
                <span className="absolute top-1 z-10 me-1 h-4 w-4 rounded-full bg-white" />
                <span className="absolute top-1 z-10 m-1 h-2 w-2 rounded-full bg-indigo-600"/>

                {/* CONTENT */}
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

/* ================= SUB COMPONENT ================= */

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
    <div
      className={`space-y-1 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
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
    <div className="max-w-md rounded-lg bg-white p-5 text-sm text-gray-700 shadow-sm">
      {text}
    </div>
  );
}