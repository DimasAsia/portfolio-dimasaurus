"use client";

import Image from "next/image";
import { scrollToSection } from "../lib/scrollToSection";
import { motion } from "framer-motion";
import GetImage from "./getimage";


export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-5">
      <div className="grid items-center gap-16 md:grid-cols-2">
        {/* ===== LEFT : TEXT ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4"
        >
          <motion.span
            variants={item}
            className="text-sm font-Roboto uppercase font-medium text-green-600"
          >
            &gt; Hello World!
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            I'm Galih Dimas Prastowo
          </motion.h1>

          <motion.h2
            variants={item}
            className="font-semibold text-gray-500 sm:text-1xl"
          >
            IT Engineer | Systems & Data Platforms<br></br>
            High Availability • Multi-Site Data Center • Database Systems
          </motion.h2>

          <motion.p
            variants={item}
            className="max-w-xl text-gray-600 leading-relaxed"
          >
            I design and document reliable system architectures with a focus on
            high availability, disaster recovery, and database performance
            in enterprise environments.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              View Projects
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="rounded-md border px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ===== RIGHT : IMAGE + SHAPE ===== */}
        <motion.div
          variants={container}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative h-92 w-92 sm:h-90 sm:w-90">
            {/* SHAPE BACKGROUND */}
            <div
              className="
                absolute inset-0
                -z-5
                rounded-[70%_50%_40%_80%/70%_40%_80%_50%]
                bg-gradient-to-br
                from-indigo-500 via-purple-500 to-pink-500
                blur-xl opacity-70
              "
            ></div>
            {/* PHOTO */}
            <GetImage title="profile"/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
