"use client";

import Link from "next/link";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 background-blur border-b">
            <nav className="max-w-8xl mx-auto px-4 py-4 h-16 flex items-center justify-between">
                {/*Logo*/}
                <div className="text-lg flex gap-4 text-black">
                    <Link href="/" className="text-left px-1"><CommandLineIcon className="size-7" /></Link>
                    <Link href="/" className="text-left">DevPortfolio | Galih Dimas Prastowo </Link>
                </div>
                <div className="hidden md:flex items-center gap-7 ">
                    <Link href="/app" className="nav-link">Home</Link>
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/app" className="nav-link">Experience</Link>
                    <Link href="/about" className="nav-link">Portfolio</Link>
                    <Link href="/about" className="resume-btn">Resume</Link>
                </div>

                {/*Mobile Hamburger*/}
                <button onClick={() => setOpen(!open)} className="md:hidden text-2xl text-black hover:text-indigo-600" aria-label="Toggle-menu">
                    ☰
                </button>
            </nav>
            {/*Mobile menu*/}
            {open && (
                <div className="md:hidden border-t bg-white">
                    <div className="flex flex-col px-4 py-4 gap-4">
                        <Link onClick={() => setOpen(false)} href="/app" className="nav-link">Home</Link>
                        <Link onClick={() => setOpen(false)} href="/about" className="nav-link">About</Link>
                        <Link onClick={() => setOpen(false)} href="/app" className="nav-link">Experience</Link>
                        <Link onClick={() => setOpen(false)} href="/about" className="nav-link">Portfolio</Link>
                        <Link href="/about" className="resume-btn">Resume</Link>
                    </div>
                </div>
            )}
        </header>
    )
}