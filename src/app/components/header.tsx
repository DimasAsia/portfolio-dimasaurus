"use client";

import { CommandLineIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { scrollToSection } from "../lib/scrollToSection";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { usePathname, useRouter } from "next/navigation";
import { navigateToSection } from "../lib/navigateToSection";

const sections = ["home", "about", "experience", "projects", "contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(sections);
  const [hash, setHash] = useState("");
  const [isHashActive, setIsHashActive] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const current = isHashActive ? hash: activeId


  const handleNav = (id: string) => {
    navigateToSection(router, pathname, id);
  };

  useEffect(()=> {
    const onHashChange = () => {
      const h = window.location.hash.replace("#", "");
      setHash(h);
      setIsHashActive(!!h);
    };

    onHashChange();
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (!isHashActive) return;

    const timer =setTimeout(() => {
      setIsHashActive(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [isHashActive]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="relative w-full h-7 bg-yellow-400 border-y-4 border-black flex items-center justify-center overflow-hidden shadow-lg">
        {/* Pola Garis Hitam Menggunakan Inline Style untuk Gradient */} 
        <div className="absolute inset-0 opacity-100" style={{backgroundImage:`repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent), backgroundSize: '80px 80px'`}} ></div>
          {/* Teks di Tengah */} 
          <div className="relative z-10 bg-yellow-400 px-4 font-black text-black tracking-widest uppercase text-sm md:text-base text-center"> 
            Maintenance Development
          </div>
      </div>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-3 text-black"
        >
          <CommandLineIcon className="h-7 w-7" />
          <span className="font-medium">DevPortfolio | IT Engineer</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          <button
            onClick={() => handleNav("home")}
            className={`nav-link ${isHome && current === "home" ? " active text-indigo-600 font-semi-bold" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNav("about")}
            className={`nav-link ${current === "about" ? " active text-indigo-600 font-semi-bold" : ""}`}
          >
            About
          </button>
          <button
            onClick={() => handleNav("experience")}
            className={`nav-link ${current === "experience" ? "active text-indigo-600 font-semi-bold" : ""}`}
          >
            Experience
          </button>
          <button
            onClick={() => handleNav("projects")}
            className={`nav-link ${current === "projects" ? "active text-indigo-600 font-semi-bold" : ""}`}
          >
            Projects
          </button>
          <button
            onClick={() => handleNav("contact")}
            className={`nav-link ${current === "contact" ? "active text-indigo-600 font-semi-bold" : ""}`}
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
              onClick={() => handleNav("home")}
              className={
                `nav-link ${isHome && current === "home" ? "text-indigo-600 font-semi-bold" : ""}`
              }
            >
              Home
            </button>
            <button
              onClick={() => handleNav("about")}
              className={
                `nav-link ${current === "about" ? "text-indigo-600 font-semi-bold" : ""}`
              }
            >
              About
            </button>
            <button
              onClick={() => handleNav("experience")}
              className={
                `nav-link ${current === "experience" ? "text-indigo-600 font-semi-bold" : ""}`
              }
            >
              Experience
            </button>
            <button
              onClick={() => handleNav("projects")}
              className={
                `nav-link ${current === "projects" ? "text-indigo-600 font-semi-bold" : ""}`
              }
            >
              Projects
            </button>
            <button
              onClick={() => handleNav("contact")}
              className={
                `nav-link ${current === "contact" ? "text-indigo-600 font-semi-bold" : ""}`
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
