"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 mt-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-12 md:grid-cols-2"
      >
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I am an IT Engineer with hands-on experience in high availability systems, multi-site data center architecture, and database platforms.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I work closely with infrastructure, operations, security, and development teams to design Disaster Recovery Plans (DRP), document system architectures, and perform performance testing using JMeter and Sysbench.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            My background combines systems engineering, data platforms, and software engineering fundamentals, enabling me to operate effectively in enterprise and banking environments.
          </p>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "Experience", value: "1+ Years" },
            { label: "Projects", value: "Enterprise Systems" },
            { label: "Focus", value: "IT Engineer" },
            { label: "Location", value: "Indonesia" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center rounded-xl border bg-white p-6 text-center shadow-sm"
            >
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="mt-1 text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}