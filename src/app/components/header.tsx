"use client";

import { CommandLineIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { scrollToSection } from "../lib/scrollToSsction";
import { useScrollSpy } from "../hooks/useScrollSpy";

const sections = ["home", "about", "experience", "projects", "contact"];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollToSection(id);
    setOpen(false); // auto close mobile menu
  };

  const activeId = useScrollSpy(sections);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="flex items-center gap-3 text-black"
        >
          <CommandLineIcon className="h-7 w-7" />
          <span className="font-medium">DevPortfolio | IT Engineer</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          <button
            onClick={() => handleScroll("home")}
            className={`nav-link ${activeId === "home" ? " active text-indigo-600 font-semi-bold" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className={`nav-link ${activeId === "about" ? " active text-indigo-600 font-semi-bold" : ""}`}
          >
            About
          </button>
          <button
            onClick={() => handleScroll("experience")}
            className={`nav-link ${activeId === "experience" ? "active text-indigo-600 font-semi-bold" : ""}`}
          >
            Experience
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className={`nav-link ${activeId === "projects" ? "active text-indigo-600 font-semi-bold" : ""}`}
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className={`nav-link ${activeId === "contact" ? "active text-indigo-600 font-semi-bold" : ""}`}
          >
            Contact
          </button>

          <a
            href="/CV-Galih-Dimas-Prastowo.pdf"
            download
            className="resume-btn"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-black md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col gap-4 px-4 py-6">
            <button
              onClick={() => handleScroll("home")}
              className={
                'nav-link ${activeId === "home" ? "text-indigo-600 font-semi-bold" : ""}'
              }
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("about")}
              className={
                'nav-link ${activeId === "about" ? "text-indigo-600 font-semi-bold" : ""}'
              }
            >
              About
            </button>
            <button
              onClick={() => handleScroll("experience")}
              className={
                'nav-link ${activeId === "experience" ? "text-indigo-600 font-semi-bold" : ""}'
              }
            >
              Experience
            </button>
            <button
              onClick={() => handleScroll("projects")}
              className={
                'nav-link ${activeId === "projects" ? "text-indigo-600 font-semi-bold" : ""}'
              }
            >
              Projects
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className={
                'nav-link ${activeId === "contact" ? "text-indigo-600 font-semi-bold" : ""}'
              }
            >
              Contact
            </button>

            <a
              href="/CV-Galih-Dimas-Prastowo.pdf"
              download
              className="resume-btn"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
